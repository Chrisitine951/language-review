// check-data.js — 資料一致性檢查（id 不重複＋引用完整性）
const fs = require('fs');
const vm = require('vm');
const ctx = {};
vm.createContext(ctx);
const src = fs.readFileSync(__dirname + '/grimm-data.js', 'utf8');
// const 宣告不會掛到 context 物件上，所以在同一份腳本尾端把它們求值回傳
const { SOUND_RULES, LETTER_GUIDE, GRIMM_ROOTS, AFFIXES } =
  vm.runInContext(src + '\n;({SOUND_RULES, LETTER_GUIDE, GRIMM_ROOTS, AFFIXES});', ctx);

let errors = [];
function dupCheck(name, arr, key) {
  const seen = new Set(), dup = new Set();
  arr.forEach(o => { const k = o[key]; if (seen.has(k)) dup.add(k); seen.add(k); });
  if (dup.size) errors.push(`${name} 有重複 ${key}：${[...dup].join(', ')}`);
  else console.log(`✔ ${name}：${arr.length} 筆，${key} 無重複`);
}
dupCheck('SOUND_RULES', SOUND_RULES, 'id');
dupCheck('LETTER_GUIDE', LETTER_GUIDE, 'letter');
dupCheck('GRIMM_ROOTS', GRIMM_ROOTS, 'id');
dupCheck('AFFIXES', AFFIXES, 'id');

// LETTER_GUIDE 必須剛好 26 個字母
const letters = LETTER_GUIDE.map(l => l.letter).join('');
const AZ = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
if (letters !== AZ) errors.push(`LETTER_GUIDE 字母不是完整 A–Z：${letters}`);
else console.log('✔ LETTER_GUIDE：A–Z 26 筆齊全且順序正確');

const ruleIds = new Set(SOUND_RULES.map(r => r.id));
const rootIds = new Set(GRIMM_ROOTS.map(r => r.id));

// 引用完整性 1：LETTER_GUIDE.rootIds ⊆ GRIMM_ROOTS
LETTER_GUIDE.forEach(lg => {
  lg.rootIds.forEach(id => { if (!rootIds.has(id)) errors.push(`LETTER_GUIDE[${lg.letter}].rootIds 參照到不存在的字根 ${id}`); });
  lg.soundRuleIds.forEach(id => { if (!ruleIds.has(id)) errors.push(`LETTER_GUIDE[${lg.letter}].soundRuleIds 參照到不存在的規則 ${id}`); });
});
console.log('✔ LETTER_GUIDE 的 rootIds / soundRuleIds 引用檢查完成');

// 引用完整性 2：GRIMM_ROOTS.soundRuleId ⊆ SOUND_RULES
GRIMM_ROOTS.forEach(r => {
  if (!ruleIds.has(r.soundRuleId)) errors.push(`GRIMM_ROOTS[${r.id}].soundRuleId 參照到不存在的規則 ${r.soundRuleId}`);
});
console.log('✔ GRIMM_ROOTS 的 soundRuleId 引用檢查完成');

// 反向檢查：每個字根都要被某個字母收錄（否則 A–Z 頁看不到）
const collected = new Set();
LETTER_GUIDE.forEach(lg => lg.rootIds.forEach(id => collected.add(id)));
GRIMM_ROOTS.forEach(r => {
  if (!collected.has(r.id)) errors.push(`孤兒字根：${r.id}（${r.root}）沒有被任何 LETTER_GUIDE.rootIds 收錄`);
  const lg = LETTER_GUIDE.find(l => l.letter === r.letter);
  if (!lg) errors.push(`GRIMM_ROOTS[${r.id}].letter=${r.letter} 不是有效字母`);
  else if (!lg.rootIds.includes(r.id)) errors.push(`GRIMM_ROOTS[${r.id}].letter=${r.letter}，但 LETTER_GUIDE[${r.letter}].rootIds 沒有列入它`);
});
console.log('✔ 字根↔字母 雙向對應檢查完成');

// variants 必須全小寫且非空
GRIMM_ROOTS.concat(AFFIXES).forEach(o => {
  const vs = o.variants || [];
  if (!vs.length) errors.push(`${o.id} 的 variants 是空的`);
  vs.forEach(v => { if (v !== v.toLowerCase()) errors.push(`${o.id} 的 variants 含大寫：${v}`); });
});
console.log('✔ variants 全小寫檢查完成');

if (errors.length) { console.error('\n✘ 發現 ' + errors.length + ' 個問題：'); errors.forEach(e => console.error('  - ' + e)); process.exit(1); }
console.log('\n✅ 全部檢查通過');
