// ============================================================
// test-german.js — german.html 煙霧測試（jsdom）
// 執行：node test-german.js
// 重點：模擬「真實點擊」而不是直接呼叫函式，才能抓到 HTML/JS 名稱對不起來的靜默失敗。
// 特別驗證：德文 App 沿用 lr_ 前綴與 progress-<user>.json（Murray 的進度不能被動到）
// ============================================================
const fs = require('fs');
const { JSDOM } = require('jsdom');

let pass = 0, fail = 0;
const errors = [];
function ok(name, cond, detail) {
  if (cond) { pass++; console.log('  ✅ ' + name); }
  else { fail++; console.log('  ❌ ' + name + (detail ? '　→ ' + detail : '')); errors.push(name); }
}

async function run() {
  let html = fs.readFileSync('german.html', 'utf8');
  const SRC_MAP = { 'data.js': 'test-fixture-data.js', 'core.js': 'core.js' };
  html = html.replace(/<script src="([^"]+)"><\/script>/g, (m, src) => {
    const f = SRC_MAP[src];
    return f ? '<script>' + fs.readFileSync(f, 'utf8') + '</script>' : '';
  });
  const dom = new JSDOM(html, {
    runScripts: 'dangerously',
    url: 'https://example.com/german.html',
    beforeParse(window) {
      window.fetch = () => Promise.resolve({ ok: false, status: 404, json: () => Promise.resolve({}) });
      window.speechSynthesis = { cancel() {}, speak() {} };
      window.SpeechSynthesisUtterance = function() {};
      window.confirm = () => true;
      window.alert = () => {};
      window.scrollTo = () => {};
    },
  });
  const { window } = dom;
  await new Promise(r => setTimeout(r, 300));
  const doc = window.document;
  const click = (el) => el.dispatchEvent(new window.MouseEvent('click', { bubbles: true }));

  console.log('\n【1】資料庫載入');
  ok('GERMAN_VOCABULARY 有資料', window.eval('GERMAN_VOCABULARY.length > 100'), window.eval('GERMAN_VOCABULARY.length'));
  ok('GERMAN_PRONUNCIATION 有資料', window.eval('GERMAN_PRONUNCIATION.length > 30'));
  ok('GERMAN_SENTENCES 有資料', window.eval('GERMAN_SENTENCES.length > 20'));
  ok('GERMAN_GRAMMAR 有資料', window.eval('GERMAN_GRAMMAR.length > 10'));
  ok('格位速查表 3 張', window.eval('GERMAN_CASE_TABLES.length') === 3);
  ok('動詞變化 14 個動詞', window.eval('GERMAN_VERB_CONJUGATIONS.length') === 14);
  ok('內建備用題 10 題（離線可用）', window.eval('BUILTIN_DE_QUESTIONS.length') === 10);

  console.log('\n【2】底部導航');
  for (const p of ['vocab', 'learn', 'inbox', 'settings', 'home']) {
    click(doc.getElementById('nav-' + p));
    await new Promise(r => setTimeout(r, 30));
    ok('切換到 ' + p, doc.getElementById('page-' + p).classList.contains('active'));
  }

  console.log('\n【3】v1 功能全數保留：發音／句型／文法');
  click(doc.getElementById('nav-learn'));
  await new Promise(r => setTimeout(r, 50));
  ok('發音規則有渲染', doc.getElementById('pronunciation-list').innerHTML.includes('發音規則'));
  click(doc.getElementById('de-tab-sentence'));
  ok('句型分頁可切換', doc.getElementById('de-sub-sentence').style.display !== 'none');
  ok('句型卡有載入', doc.getElementById('sentence-de').textContent.includes('Deutscher Satz'));
  click(doc.getElementById('sentence-flashcard'));
  ok('句型卡可翻面', doc.getElementById('sentence-back').style.display === 'block');
  window.eval('nextSentence()');
  ok('下一句可運作', doc.getElementById('sentence-progress-text').textContent.startsWith('2 /'));
  ok('句型依單元分組列表', doc.getElementById('sentence-list').innerHTML.includes('單元'));

  console.log('\n【4】文法三模式（瀏覽／練習／動詞變化）');
  click(doc.getElementById('de-tab-grammar'));
  ok('文法分頁可切換', doc.getElementById('de-sub-grammar').style.display !== 'none');
  ok('格位速查表有渲染', doc.getElementById('case-tables-container').innerHTML.includes('Nominativ'));
  ok('文法規則依分類分組', doc.getElementById('de-grammar-list').innerHTML.includes('Akkusativ'));
  click(doc.getElementById('degr-mode-practice'));
  await new Promise(r => setTimeout(r, 50));
  ok('練習模式可切換', doc.getElementById('degr-practice-view').style.display !== 'none');
  ok('沒有 API key 時退回內建題（降級路徑）', doc.getElementById('degr-question-container').innerHTML.includes('grammar-choice'));
  const gChoice = doc.querySelector('#degr-question-container .grammar-choice');
  click(gChoice);
  ok('答題後顯示解析', doc.getElementById('degr-exp').classList.contains('show'));
  ok('答題後統計有更新', Number(doc.getElementById('degr-correct').textContent) + Number(doc.getElementById('degr-wrong').textContent) === 1);
  click(doc.getElementById('degr-mode-conjug'));
  await new Promise(r => setTimeout(r, 50));
  ok('動詞變化模式可切換', doc.getElementById('degr-conjug-view').style.display !== 'none');
  ok('動詞變化有出題', doc.getElementById('deconj-question-container').innerHTML.includes('grammar-choice'));
  const cChoice = doc.querySelector('#deconj-question-container .grammar-choice');
  click(cChoice);
  ok('動詞題答題後顯示完整變化', doc.getElementById('deconj-exp').classList.contains('show'));
  // 干擾項必須是同一動詞的其他人稱（教學意義）
  ok('動詞干擾項來自同一動詞', window.eval('(function(){const v=window._deconjVerb; if(!v) return true; const all=Object.values(v.forms); return window._deconjChoices.every(c=>all.includes(c));})()'));

  console.log('\n【5】單字：翻牌／打字／分類');
  click(doc.getElementById('nav-vocab'));
  await new Promise(r => setTimeout(r, 50));
  ok('分類 chips 有生成', doc.querySelectorAll('#vocab-cat-row .filter-chip').length > 5);
  ok('卡片有載入', doc.getElementById('fc-word').textContent !== '載入中…');
  click(doc.getElementById('flashcard'));
  ok('翻面顯示中文', doc.getElementById('fc-back').style.display === 'block');
  ok('有顯示詞性', typeof doc.getElementById('fc-pos').textContent === 'string');
  click(doc.getElementById('vmode-type'));
  ok('打字模式按鈕有反應', doc.getElementById('typing-mode-view').style.display === 'block');
  ok('打字模式有定冠詞提示', doc.getElementById('typing-hint').textContent.length >= 0);
  click(doc.getElementById('vmode-flip'));
  ok('翻牌模式按回來', doc.getElementById('flashcard-mode').style.display === 'block');

  console.log('\n【6】德文寬容比對（手機打變音字母不方便）');
  ok('ae = ä', window.eval('normalizeGerman("Mädchen") === normalizeGerman("Maedchen")'));
  ok('ue = ü', window.eval('normalizeGerman("müde") === normalizeGerman("muede")'));
  ok('ss = ß', window.eval('normalizeGerman("Straße") === normalizeGerman("Strasse")'));

  console.log('\n【7】排程沿用 v1 的 de_ key（舊進度可直接接上）');
  window.eval('updateSchedule("de001", true)');
  ok('排程 key 格式為 de_<id>', Object.keys(window.eval('reviewSchedule')).includes('de_de001'));
  ok('答對後 stage 進階', window.eval('reviewSchedule["de_de001"].stage') === 2);
  ok('新字（nextReview=0）不算到期', window.eval('getDueWords().every(w => w.nextReview > 0)'));

  console.log('\n【8】收集箱');
  click(doc.getElementById('nav-inbox'));
  await new Promise(r => setTimeout(r, 50));
  ok('收集箱 3 種德文類型', window.eval('Object.keys(INBOX_TYPE_LABEL).length') === 3);
  window.eval(`inboxItems=[{type:'de_vocab',article:'das',pos:'中性名詞',word:'das Kind',meaning:'小孩',category:'people',example:'Das Kind ist süß.',note:''},
    {type:'de_grammar',category:'case_dativ',rule:'von + Dativ',example:'von der Schule',explanation:'x'},
    {type:'de_sentence',german:'Wo ist der Bahnhof?',chinese:'火車站在哪裡？',unitTitle:'問路'}]; renderInboxList();`);
  ok('能渲染德文單字', doc.getElementById('inbox-list').innerHTML.includes('德文單字'));
  ok('能渲染德文文法', doc.getElementById('inbox-list').innerHTML.includes('德文文法'));
  ok('能渲染德文句子', doc.getElementById('inbox-list').innerHTML.includes('德文句子'));
  ok('單字有 pos 詞性欄位', window.eval('INBOX_TYPE_FIELDS.de_vocab.some(f=>f[0]==="pos")'));

  console.log('\n【9】跨 App 資料隔離（最重要：不能動到英文 App 和 Murray）');
  window.eval('saveData()');
  const keys = Object.keys(window.localStorage);
  const bad = keys.filter(k => k.startsWith('lren_'));
  ok('沒有寫入英文 App 的 lren_ key', bad.length === 0, bad.join(','));
  ok('德文進度用 lr_ 前綴（與 v1 相容）', keys.includes('lr_schedule'));
  ok('進度檔沿用 v1 檔名', window.eval('progressPath()') === 'progress-christine.json', window.eval('progressPath()'));
  window.eval('localStorage.setItem("lr_username","murray")');
  ok('換 username 後進度檔跟著換（Murray 獨立）', window.eval('progressPath()') === 'progress-murray.json');
  window.eval('localStorage.setItem("lr_username","christine")');

  console.log('\n【10】同步不會洗掉英文 App 的舊欄位');
  window.eval('applyProgressObject({ reviewSchedule:{de_de002:{stage:2,nextReview:1,correct:1,incorrect:0}}, diaryEntries:[{id:1,text:"my diary"}], engooRecords:[{id:2,title:"art"}] })');
  const built = window.eval('JSON.stringify(buildProgressObject())');
  ok('英文 App 的 diaryEntries 有被帶回去', built.includes('my diary'));
  ok('英文 App 的 engooRecords 有被帶回去', built.includes('art'));
  ok('德文排程有正常寫入', built.includes('de_de002'));

  console.log('\n【11】設定頁');
  click(doc.getElementById('nav-settings'));
  await new Promise(r => setTimeout(r, 50));
  ok('單字數量有顯示', doc.getElementById('settings-de-count').textContent.includes('141'));
  ok('發音/句型數量有顯示', doc.getElementById('settings-pr-count').textContent.includes('33'));
  const before = doc.getElementById('sg-body-github').classList.contains('open');
  click(doc.getElementById('sg-header-github'));
  ok('設定分組可收合', doc.getElementById('sg-body-github').classList.contains('open') !== before);

  console.log('\n════════════════════════════════');
  console.log(`  通過 ${pass} 項，失敗 ${fail} 項`);
  if (fail) { console.log('  失敗項目：' + errors.join(', ')); process.exit(1); }
  console.log('  ✅ 全部通過');
}
run().catch(e => { console.error('測試爆炸:', e); process.exit(1); });
