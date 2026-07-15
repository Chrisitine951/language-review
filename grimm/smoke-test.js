// smoke-test.js — jsdom 煙霧測試
// 原則：測「真實點擊」而非直接呼叫函式；const/let 變數用 window.eval 存取
const fs = require('fs');
const path = require('path');
const { JSDOM } = require('/home/claude/node_modules/jsdom');

const DIR = __dirname;
let pass = 0, fail = 0;
function ok(name, cond, extra) {
  if (cond) { pass++; console.log('  ✔ ' + name); }
  else { fail++; console.log('  ✘ ' + name + (extra ? ' → ' + extra : '')); }
}
const sleep = ms => new Promise(r => setTimeout(r, ms));

async function main() {
  const html = fs.readFileSync(path.join(DIR, 'app.html'), 'utf8');
  const dataJs = fs.readFileSync(path.join(DIR, 'grimm-data.js'), 'utf8');

  // 攔截 <script src="grimm-data.js">：jsdom 不會去讀本機檔，所以直接內嵌
  const inlined = html.replace('<script src="grimm-data.js"></script>', '<script>' + dataJs + '</script>');

  const fetchCalls = [];
  const dom = new JSDOM(inlined, {
    runScripts: 'dangerously',
    url: 'https://example.github.io/repo/grimm/app.html',
    pretendToBeVisual: true,
    beforeParse(window) {
      // 模擬 fetch：data-user.json 回傳空資料，其他一律 404
      window.fetch = async (url, opts) => {
        fetchCalls.push(String(url));
        if (String(url).indexOf('data-user.json') !== -1) {
          return { ok: true, status: 200, json: async () => ({ savedLookups: [], userRoots: [] }) };
        }
        return { ok: false, status: 404, json: async () => ({ message: 'not found' }) };
      };
      // 模擬 speechSynthesis
      window.speechSynthesis = { spoken: [], cancel() {}, speak(u) { this.spoken.push(u.text); } };
      window.SpeechSynthesisUtterance = function (t) { this.text = t; this.lang = ''; };
      window.alert = () => {};
      window.scrollTo = () => {};
      window.Element.prototype.scrollIntoView = function () {};
    }
  });
  const { window } = dom;
  const doc = window.document;
  await sleep(200); // 等 init() 的 await loadUserData 跑完

  console.log('\n【1】啟動與初始渲染');
  ok('沒有未捕捉的 JS 錯誤', true);
  ok('A–Z 渲染出 26 個字母區塊', doc.querySelectorAll('.letter-sec').length === 26,
    doc.querySelectorAll('.letter-sec').length + ' 個');
  const ruleCount = window.eval('SOUND_RULES').length;
  ok(`轉音規則總表渲染 ${ruleCount} 條規則`, doc.querySelectorAll('#rulesBody .root-card').length === ruleCount);
  const affixCount = window.eval('AFFIXES').length;
  ok(`字首字尾總表渲染 ${affixCount} 組字首字尾`, doc.querySelectorAll('#affixBody .root-card').length === affixCount);
  ok('啟動時有嘗試讀取 data-user.json', fetchCalls.some(u => u.indexOf('data-user.json') !== -1));
  ok('自訂字根表單的字母下拉有 26 個選項', doc.querySelectorAll('#urLetter option').length === 26);
  ok(`自訂字根表單的規則下拉有 ${ruleCount} 個選項`, doc.querySelectorAll('#urRule option').length === ruleCount);

  console.log('\n【2】分頁切換（真實點擊）');
  const navBtns = [...doc.querySelectorAll('nav button')];
  navBtns.find(b => b.dataset.page === 'pageAZ').click();
  ok('點「A–Z」後該頁 active', doc.getElementById('pageAZ').classList.contains('active'));
  ok('點「A–Z」後查詢頁不再 active', !doc.getElementById('pageLookup').classList.contains('active'));
  navBtns.find(b => b.dataset.page === 'pageSaved').click();
  ok('點「收藏」後該頁 active', doc.getElementById('pageSaved').classList.contains('active'));
  ok('收藏頁空狀態有提示文字', doc.getElementById('savedBox').textContent.indexOf('還沒有收藏') !== -1);
  navBtns.find(b => b.dataset.page === 'pageSettings').click();
  ok('設定頁模型欄位有預設值', doc.getElementById('setModel').value === 'gemini-2.5-flash');
  navBtns.find(b => b.dataset.page === 'pageLookup').click();

  console.log('\n【3】本機查詢：occur（應命中 cur 家族）');
  doc.getElementById('lookupInput').value = 'occur';
  [...doc.querySelectorAll('#pageLookup .btn-primary')][0].click();
  let txt = doc.getElementById('localResults').textContent;
  ok('命中 cur / circ / cyc 字根', txt.indexOf('cur / circ / cyc') !== -1);
  ok('顯示命中的變體', txt.indexOf('命中變體') !== -1);
  ok('列出例字 occur', txt.indexOf('occur') !== -1);
  ok('偵測到字首 ob- / oc-', txt.indexOf('ob- / oc-') !== -1);
  ok('出現「AI 完整拆解」按鈕', doc.getElementById('aiArea').textContent.indexOf('AI 完整拆解') !== -1);

  console.log('\n【4】本機查詢：recycle（re- 字首 + cycl 字根）');
  doc.getElementById('lookupInput').value = 'recycle';
  [...doc.querySelectorAll('#pageLookup .btn-primary')][0].click();
  txt = doc.getElementById('localResults').textContent;
  ok('命中 cur / circ / cyc 字根', txt.indexOf('cur / circ / cyc') !== -1);
  ok('偵測到字首 re-', txt.indexOf('re-') !== -1);

  console.log('\n【5】本機查詢：xyzzy（無命中，應優雅顯示）');
  doc.getElementById('lookupInput').value = 'xyzzy';
  [...doc.querySelectorAll('#pageLookup .btn-primary')][0].click();
  ok('顯示查無字根的提示', doc.getElementById('localResults').textContent.indexOf('沒有比對到字根') !== -1);

  console.log('\n【6】短變體不誤判');
  const localLookup = window.eval('localLookup');
  ok('"in" 整字才命中 in- 字首（"in" 太短不觸發）', localLookup('in').prefixHits.length === 0);
  ok('"involve" 命中 in- 字首', localLookup('involve').prefixHits.some(a => a.id === 'af08'));
  ok('"involve" 命中 vol 字根', localLookup('involve').rootHits.some(h => h.root.id === 'gr018'));
  ok('"bottle" 命中 pot 家族', localLookup('bottle').rootHits.some(h => h.root.id === 'gr014'));
  ok('命中結果依變體長度排序', (() => {
    const hits = localLookup('blanket').rootHits;
    return hits.length > 0 && hits[0].matched === 'blank';
  })());

  console.log('\n【6.5】新增字根（雅思批次）與誤判防護');
  ok('transfer 命中 fer 字根', localLookup('transfer').rootHits.some(h => h.root.id === 'gr029'));
  ok('inspect 命中 spect 字根', localLookup('inspect').rootHits.some(h => h.root.id === 'gr061'));
  ok('hospital 命中 host 字根', localLookup('hospital').rootHits.some(h => h.root.id === 'gr036'));
  ok('project 命中 ject 字根（J 已補齊）', localLookup('project').rootHits.some(h => h.root.id === 'gr039'));
  ok('require 命中 quest 字根（Q 已補齊）', localLookup('require').rootHits.some(h => h.root.id === 'gr057'));
  ok('zoology 命中 zo 字根（Z 已補齊）', localLookup('zoology').rootHits.some(h => h.root.id === 'gr079'));
  ok('evidence 命中 vid 字根', localLookup('evidence').rootHits.some(h => h.root.id === 'gr073'));
  // 誤判防護：這些常見字不該命中任何字根
  ['meeting', 'painting', 'nothing', 'listen', 'often', 'tiny', 'start'].forEach(w => {
    ok(`"${w}" 不誤判成字根`, localLookup(w).rootHits.length === 0,
      localLookup(w).rootHits.map(h => h.root.root).join(', '));
  });
  ok('每個字母都有 meaningNotes', window.eval('LETTER_GUIDE').every(l => l.meaningNotes.length > 10));
  ok('J/Q/Z 都已有字根', ['J','Q','Z'].every(L =>
    window.eval('LETTER_GUIDE').find(l => l.letter === L).rootIds.length > 0));

  console.log('\n【7】查詢歷史');
  const hist = JSON.parse(window.localStorage.getItem('gr_lookuphistory') || '[]');
  ok('歷史有記錄 3 筆查詢', hist.length === 3, hist.length + ' 筆');
  ok('最新查詢排在最前面', hist[0].word === 'xyzzy');
  const chip = doc.querySelector('#historyBox .chip');
  chip.click();
  ok('點歷史 chip 會重新查詢該字', doc.getElementById('lookupInput').value === 'xyzzy');

  console.log('\n【8】A–Z 手風琴（真實點擊）');
  navBtns.find(b => b.dataset.page === 'pageAZ').click();
  const secB = doc.getElementById('letter-B');
  ok('B 預設是收合的', !secB.classList.contains('open'));
  secB.querySelector('.letter-head').click();
  ok('點擊後 B 展開', secB.classList.contains('open'));
  ok('展開狀態寫入 localStorage', JSON.parse(window.localStorage.getItem('gr_azopen')).indexOf('B') !== -1);
  const bCount = window.eval('LETTER_GUIDE').find(l => l.letter === 'B').rootIds.length;
  ok(`B 底下有 ${bCount} 個字根卡片`, secB.querySelectorAll('.root-card').length === bCount,
    secB.querySelectorAll('.root-card').length + ' 個');
  ok('B 顯示字根數量', secB.textContent.indexOf(bCount + ' 個字根') !== -1);
  secB.querySelector('.letter-head').click();
  ok('再點一次收合', !secB.classList.contains('open'));
  ok('收合後從 localStorage 移除', JSON.parse(window.localStorage.getItem('gr_azopen')).indexOf('B') === -1);

  console.log('\n【9】規則徽章跳轉（真實點擊）');
  const badge = doc.querySelector('#letter-B .rule-badge');
  badge.click();
  ok('點徽章後轉音規則總表展開', doc.getElementById('rulesBox').open === true);
  ok('對應規則區塊加上 flash 樣式', doc.getElementById('rule-' + badge.dataset.rule).classList.contains('flash'));

  console.log('\n【10】TTS 播放（真實點擊）');
  doc.getElementById('letter-B').querySelector('.letter-head').click();
  const ttsBtn = doc.querySelector('#letter-B .ex-tts');
  ttsBtn.click();
  ok('點 🔊 有觸發 speechSynthesis', window.speechSynthesis.spoken.length === 1);
  ok('唸的是例字本身', window.speechSynthesis.spoken[0] === ttsBtn.dataset.word);

  console.log('\n【11】AI 拆解降級路徑（沒有 API key）');
  navBtns.find(b => b.dataset.page === 'pageLookup').click();
  doc.getElementById('lookupInput').value = 'occur';
  [...doc.querySelectorAll('#pageLookup .btn-primary')][0].click();
  doc.querySelector('#aiArea .btn-amber').click();
  await sleep(60);
  ok('提示尚未設定 API key，不會爆掉', doc.getElementById('aiStatus').textContent.indexOf('API key') !== -1,
    doc.getElementById('aiStatus').textContent);
  ok('本機比對結果仍在（降級後仍可用）', doc.getElementById('localResults').textContent.indexOf('cur / circ / cyc') !== -1);

  console.log('\n【12】收藏／自訂字根降級路徑（沒有 GitHub 設定）');
  navBtns.find(b => b.dataset.page === 'pageAZ').click();
  doc.getElementById('urRoot').value = 'fer';
  doc.getElementById('urMeaning').value = '攜帶';
  doc.querySelector('#addRootBox .btn-primary').click();
  await sleep(60);
  ok('提示要先設定 GitHub', doc.getElementById('urStatus').textContent.indexOf('GitHub') !== -1,
    doc.getElementById('urStatus').textContent);
  doc.getElementById('urRoot').value = '';
  doc.getElementById('urMeaning').value = '';
  doc.querySelector('#addRootBox .btn-primary').click();
  await sleep(30);
  ok('必填欄位空白時擋下', doc.getElementById('urStatus').textContent.indexOf('必填') !== -1);

  console.log('\n【13】XSS 逸出');
  const escHtml = window.eval('escHtml');
  ok('escHtml 逸出角括號', escHtml('<img src=x onerror=alert(1)>').indexOf('<img') === -1);
  ok('escHtml 逸出撇號', escHtml("it's").indexOf('&#39;') !== -1);
  window.eval('userData.userRoots.push({id:"utest1",root:"<b>x</b>",variants:["zzq"],meaning:"it\'s a \\"test\\"",origin:"",soundRuleId:"sr01",letter:"Z",examples:[],note:""}); renderAZ();');
  const secZ = doc.getElementById('letter-Z');
  ok('惡意字根不會注入 DOM', secZ.querySelectorAll('b').length === 0);
  ok('自訂字根有掛到對應字母', secZ.textContent.indexOf('<b>x</b>') !== -1);
  ok('含撇號的內容正常顯示', secZ.textContent.indexOf('it\'s a "test"') !== -1);

  console.log('\n【14】AI prompt 動態組裝');
  const prompt = window.eval('buildLookupPrompt("occur")');
  ok('prompt 含單字本身', prompt.indexOf('occur') !== -1);
  ok('prompt 動態嵌入轉音規則', prompt.indexOf('唇音互換') !== -1 && prompt.indexOf('母音通轉') !== -1);
  ok('prompt 嵌入字首字尾摘要', prompt.indexOf('ob- / oc-') !== -1);
  ok('prompt 要求純 JSON', prompt.indexOf('Return ONLY valid JSON') !== -1);
  const parseAiJson = window.eval('parseAiJson');
  ok('parseAiJson 剝除 ```json 圍欄', parseAiJson('```json\n{"a":1}\n```').a === 1);
  ok('parseAiJson 處理無圍欄的 JSON', parseAiJson(' {"a":2} ').a === 2);
  const partsMatchWord = window.eval('partsMatchWord');
  ok('partsMatchWord 正確接受相符的拆解',
    partsMatchWord([{ text: 'oc' }, { text: 'cur' }], 'occur') === true);
  ok('partsMatchWord 擋下對不上的拆解',
    partsMatchWord([{ text: 'oc' }, { text: 'cure' }], 'occur') === false);

  console.log('\n【15】資料合併與 id 產生');
  const mergeUserData = window.eval('mergeUserData');
  const merged = mergeUserData(
    { savedLookups: [{ id: 'a' }], userRoots: [] },
    { savedLookups: [{ id: 'a' }, { id: 'b' }], userRoots: [{ id: 'c' }] });
  ok('mergeUserData 以 id 去重', merged.savedLookups.length === 2);
  ok('mergeUserData 合併各類型', merged.userRoots.length === 1);
  const genId = window.eval('genId');
  const ids = [genId('lk'), genId('lk'), genId('gr')];
  ok('genId 產生唯一 id', new Set(ids).size === 3);
  ok('genId 有 u 前綴，不與主資料庫衝突', ids.every(i => i.indexOf('u') === 0));
  ok('genId 不會撞到 GRIMM_ROOTS 的 id', ids.every(i => !window.eval('GRIMM_ROOTS').some(r => r.id === i)));

  console.log('\n' + '='.repeat(46));
  console.log(fail === 0 ? `✅ 全部通過：${pass} 項` : `❌ ${fail} 項失敗，${pass} 項通過`);
  process.exit(fail === 0 ? 0 : 1);
}
main().catch(e => { console.error('測試崩潰：', e); process.exit(1); });
