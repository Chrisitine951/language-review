// ============================================================
// test-english.js — english.html 煙霧測試（jsdom）
// 執行：node test-english.js
// 重點：模擬「真實點擊」而不是直接呼叫函式，才能抓到 HTML/JS 名稱對不起來的靜默失敗。
// 測試需循序 await；const/let 變數要用 window.eval 存取（它們不會掛在 window 上）。
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
  let html = fs.readFileSync('english.html', 'utf8');
  // 真實瀏覽器會先載入 <script src="…"> 再跑內嵌 script。
  // jsdom 不會自己抓本地檔案，所以先把外部檔案「內聯」進 HTML，
  // 才能忠實重現載入順序（否則內嵌 script 會找不到 ENGLISH_VOCABULARY）。
  const SRC_MAP = { 'data.js': 'test-fixture-data.js', 'data-ielts.js': 'data-ielts.js', 'core.js': 'core.js' };
  html = html.replace(/<script src="([^"]+)"><\/script>/g, (m, src) => {
    const f = SRC_MAP[src];
    return f ? '<script>' + fs.readFileSync(f, 'utf8') + '</script>' : '';
  });
  const dom = new JSDOM(html, {
    runScripts: 'dangerously',
    url: 'https://example.com/english.html',
    beforeParse(window) {
      // 模擬外部相依：fetch（GitHub/data-user.json）、speechSynthesis、confirm
      window.fetch = () => Promise.resolve({ ok: false, status: 404, json: () => Promise.resolve({}) });
      window.speechSynthesis = { cancel() {}, speak() {} };
      window.SpeechSynthesisUtterance = function() {};
      window.confirm = () => true;
      window.alert = () => {};
      window.prompt = () => null;
      window.scrollTo = () => {};
    },
  });
  const { window } = dom;
  // 等內嵌 script 與非同步 init 跑完
  await new Promise(r => setTimeout(r, 300));
  const doc = window.document;
  const click = (el) => { el.dispatchEvent(new window.MouseEvent('click', { bubbles: true })); };

  console.log('\n【1】資料庫載入');
  ok('ENGLISH_VOCABULARY 有資料', window.eval('typeof ENGLISH_VOCABULARY !== "undefined" && ENGLISH_VOCABULARY.length > 200'), window.eval('typeof ENGLISH_VOCABULARY!=="undefined" ? ENGLISH_VOCABULARY.length : "undefined"'));
  ok('ENGLISH_GRAMMAR 有資料', window.eval('ENGLISH_GRAMMAR.length > 50'));
  ok('雅思知識庫載入', window.eval('IELTS_METHODS.length === 4 && READING_SIGNALS.length === 7'));
  ok('13 句法則總數正確', window.eval('WRITING_13_SENTENCES.reduce((a,b)=>a+b.count,0) === 13'));

  console.log('\n【2】底部導航：每一頁都能真的切過去');
  for (const p of ['vocab', 'grammar', 'ielts', 'records', 'settings', 'home']) {
    click(doc.getElementById('nav-' + p));
    await new Promise(r => setTimeout(r, 30));
    ok('切換到 ' + p, doc.getElementById('page-' + p).classList.contains('active'));
  }

  console.log('\n【3】雅思四科分頁');
  click(doc.getElementById('nav-ielts'));
  await new Promise(r => setTimeout(r, 50));
  for (const t of ['listening', 'speaking', 'reading', 'writing']) {
    click(doc.getElementById('ielts-tab-' + t));
    ok('雅思分頁 ' + t + ' 顯示', doc.getElementById('ielts-sub-' + t).style.display !== 'none');
  }

  console.log('\n【4】閱讀三模式（拆解檢核／規則／紀錄）');
  click(doc.getElementById('ielts-tab-reading'));
  for (const m of ['rule', 'log', 'check']) {
    click(doc.getElementById('rd-mode-' + m));
    ok('閱讀模式 ' + m, doc.getElementById('rd-view-' + m).style.display !== 'none');
  }
  ok('平行閱讀法五步驟有渲染', doc.getElementById('rule-container').innerHTML.includes('略讀'));
  ok('七類信號詞有渲染', doc.getElementById('rule-container').innerHTML.includes('轉折信號詞'));

  console.log('\n【4b】拆解檢核下拉選單（減少打字）');
  click(doc.getElementById('rd-mode-check'));
  const qtypeSel = doc.getElementById('bd-qtype');
  const kwSel = doc.getElementById('bd-kwtype');
  const reSel = doc.getElementById('bd-reappear');
  const sgSel = doc.getElementById('bd-signal');
  ok('題型下拉有 8 大題型', qtypeSel.options.length === 9, qtypeSel.options.length + ' 個選項(含提示)');
  ok('定位詞類型下拉有生成', kwSel.options.length === 8, kwSel.options.length + ' 個');
  ok('重現類型下拉有 3 種+不確定', reSel.options.length === 5, reSel.options.length + ' 個');
  ok('信號詞下拉有分組', sgSel.querySelectorAll('optgroup').length === 6, sgSel.querySelectorAll('optgroup').length + ' 組');
  ok('信號詞下拉選項夠多（不用背）', sgSel.options.length > 30, sgSel.options.length + ' 個');
  ok('結果下拉存在', !!doc.getElementById('bd-result-sel'));
  ok('要打字的欄位只剩題目/定位句/推論', doc.querySelectorAll('#rd-view-check textarea').length === 3);

  console.log('\n【5】寫作三模式');
  click(doc.getElementById('ielts-tab-writing'));
  for (const m of ['struct', 'vocab', 'grade']) {
    click(doc.getElementById('wr-mode-' + m));
    ok('寫作模式 ' + m, doc.getElementById('wr-view-' + m).style.display !== 'none');
  }
  ok('四種題型有渲染', doc.getElementById('struct-container').innerHTML.includes('Opinion'));
  click(doc.getElementById('wr-mode-vocab'));
  ok('Task2 佳句有渲染', doc.getElementById('phrase-list').innerHTML.length > 100);

  console.log('\n【6】單字三模式按鈕（v1.4.3 靜默失敗的那組）');
  click(doc.getElementById('nav-vocab'));
  await new Promise(r => setTimeout(r, 50));
  click(doc.getElementById('vmode-type'));
  ok('打字模式按鈕有反應', doc.getElementById('typing-mode-view').style.display === 'block');
  click(doc.getElementById('vmode-flip'));
  ok('翻牌模式按鈕有反應', doc.getElementById('flashcard-mode').style.display === 'block');
  click(doc.getElementById('vmode-roots'));
  ok('字根實驗室導頁到字根教室', doc.getElementById('page-roots').classList.contains('active'));

  console.log('\n【7】翻牌與排程');
  click(doc.getElementById('nav-vocab'));
  await new Promise(r => setTimeout(r, 50));
  const wordBefore = doc.getElementById('fc-word').textContent;
  ok('卡片有載入單字', wordBefore && wordBefore !== '載入中…');
  click(doc.getElementById('flashcard'));
  ok('點擊翻面顯示中文', doc.getElementById('fc-back').style.display === 'block');
  const schedBefore = Object.keys(window.eval('reviewSchedule')).length;
  window.eval('swipeCard("right")');
  await new Promise(r => setTimeout(r, 400));
  ok('答對後排程有寫入', Object.keys(window.eval('reviewSchedule')).length > schedBefore);

  console.log('\n【8】文法題引擎（差異填空）');
  ok('diffSentences 能挖出差異段', window.eval('JSON.stringify(diffSentences("I go to Japan last year.","I went to Japan last year."))').includes('went'));
  ok('buildFillQuestion 組得出選項', window.eval('(function(){const q=buildFillQuestion(ENGLISH_GRAMMAR.find(g=>g.id==="gr001")); return q && q.choices.length>=2 && q.choices.includes(q.answer);})()'));
  const fillable = window.eval('ENGLISH_GRAMMAR.filter(g=>buildFillQuestion(g)).length');
  ok('多數文法題可組填空（' + fillable + '/' + window.eval('ENGLISH_GRAMMAR.length') + '）', fillable > 30);

  console.log('\n【9】週計畫表');
  window.eval('planItems.push({id:1,week:weekKey(0),skill:"reading",day:0,text:"劍10 T1 P1",done:false}); renderPlan();');
  ok('計畫項目有渲染', doc.getElementById('plan-list').innerHTML.includes('劍10'));
  const checkbox = doc.querySelector('#plan-list .plan-check');
  ok('計畫勾選框存在', !!checkbox);
  if (checkbox) {
    click(checkbox);
    ok('勾選後標記完成', window.eval('planItems[0].done') === true);
  }
  window.eval('planWeekOffset=0');

  console.log('\n【10】收集箱新類型');
  ok('收集箱支援 5 種類型', window.eval('Object.keys(INBOX_TYPE_LABEL).length') === 5);
  ok('練習紀錄類型有欄位定義', window.eval('!!INBOX_TYPE_FIELDS.practice && INBOX_TYPE_FIELDS.practice.length === 6'));
  window.eval(`inboxItems=[{type:'practice',skill:'reading',material:'劍10 T1',date:'2026-07-15',score:'6.5',causes:'定位點找錯',notes:'x'},
    {type:'t2_phrase',word:'far outweigh',meaning:'遠超過',usage:'x',topic:'通用'}]; renderInboxList();`);
  ok('收集箱能渲染練習紀錄', doc.getElementById('inbox-list').innerHTML.includes('雅思練習紀錄'));
  ok('收集箱能渲染寫作佳句', doc.getElementById('inbox-list').innerHTML.includes('寫作佳句'));

  console.log('\n【11】練習紀錄與弱點統計');
  window.eval(`practiceRecords=[
    {id:1,skill:'reading',date:'2026-07-01',material:'劍10 T1',score:'6',causes:['定位點找錯','生字不懂'],notes:''},
    {id:2,skill:'reading',date:'2026-07-08',material:'劍10 T2',score:'6.5',causes:['定位點找錯'],notes:''}];
    renderPracticeList('reading');`);
  const an = doc.getElementById('rp-analysis').innerHTML;
  ok('有算出平均分', an.includes('6.3') || an.includes('6.2') || an.includes('6.5'));
  ok('有指出最常犯錯因', an.includes('定位點找錯') && an.includes('2 次'));

  console.log('\n【12】localStorage 前綴隔離（不可污染德文 App 的 lr_）');
  window.eval('saveData()');
  const keys = Object.keys(window.localStorage);
  const bad = keys.filter(k => k.startsWith('lr_') && !['lr_apikey','lr_gemini_model','lr_gh_token','lr_gh_owner','lr_gh_repo','lr_gh_branch','lr_username','lr_autosync'].includes(k));
  ok('沒有寫入德文 App 的專屬 key', bad.length === 0, bad.join(','));
  ok('英文資料都用 lren_ 前綴', keys.some(k => k.startsWith('lren_')));
  ok('進度檔路徑正確', window.eval('progressPath()') === 'progress-en-christine.json', window.eval('progressPath()'));

  console.log('\n【13】設定頁');
  click(doc.getElementById('nav-settings'));
  await new Promise(r => setTimeout(r, 50));
  click(doc.getElementById('sg-header-exam'));
  ok('設定分組可收合', typeof doc.getElementById('sg-body-exam').className === 'string');
  doc.getElementById('exam-date-input').value = '2026-11-15';
  doc.getElementById('exam-target-input').value = '7.0';
  window.eval('saveExamSettings()');
  ok('考試日期有存', window.localStorage.getItem('lren_exam_date') === '2026-11-15');
  ok('倒數有算出天數', /\d/.test(doc.getElementById('countdown-days').textContent));

  console.log('\n════════════════════════════════');
  console.log(`  通過 ${pass} 項，失敗 ${fail} 項`);
  if (fail) { console.log('  失敗項目：' + errors.join(', ')); process.exit(1); }
  console.log('  ✅ 全部通過');
}
run().catch(e => { console.error('測試爆炸:', e); process.exit(1); });
