// ============================================================
// core.js — 共用核心函式庫（english.html 與 german.html 共用）
// 最後更新：2026-07-15（v2.0.0 App 拆分）
//
// 【給接手的 AI】這個檔案放「兩個 App 都會用到、而且必須行為一致」的邏輯：
//   GitHub API（含 409 衝突重試）、Gemini 呼叫、TTS 發音、通用工具函式。
//   為什麼要抽出來：同步的 409 重試邏輯很精細，若兩個 App 各留一份，
//   修 bug 時很容易只改到一邊造成行為不一致（甚至互相蓋資料）。
//   修改守則：這裡的函式不能依賴「只有某一個 App 才有」的變數或 DOM 元素。
//   唯二例外是 showToast（兩個 App 都有 #toast 元素）和
//   testGithubConnection（兩個 App 的設定頁 DOM id 完全相同）。
//
// 【localStorage 共用說明】兩個 App 部署在同一個 GitHub Pages 網域，
//   localStorage 是共用的。以下 key 刻意讓兩個 App 共用（設定一次、兩邊生效）：
//   lr_apikey / lr_gemini_model / lr_gh_token / lr_gh_owner / lr_gh_repo /
//   lr_gh_branch / lr_username
//   各 App 自己的進度資料用不同前綴隔離：德文 App 沿用 lr_*（零遷移），
//   英文 App 用 lren_*。新增 key 時務必遵守這個前綴規則，否則兩個 App 會互相蓋資料！
// ============================================================

// ============================================================
// 通用工具
// ============================================================
function shuffle(arr) {
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
  return arr;
}
function escHtml(s) {
  return String(s).replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;').replace(/\n/g,'<br>');
}
function escAttr(s) {
  return String(s).replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;').replace(/'/g,'&#39;').replace(/"/g,'&quot;');
}
function showToast(msg, duration = 2000) {
  const t = document.getElementById('toast');
  if (!t) return;
  t.textContent = msg;
  t.classList.add('show');
  setTimeout(() => t.classList.remove('show'), duration);
}
// Base64 編碼/解碼（支援中文）
function toBase64Unicode(str) {
  return btoa(unescape(encodeURIComponent(str)));
}
function fromBase64Unicode(b64) {
  return decodeURIComponent(escape(atob(b64)));
}
// 剝掉 AI 回傳 JSON 外面的 ```json 圍欄
function stripJsonFences(text) {
  return String(text).trim().replace(/^```json\s*/,'').replace(/^```\s*/,'').replace(/\s*```$/,'').trim();
}

// ============================================================
// 共用設定（兩個 App 共用同一組 localStorage key）
// ============================================================
function getApiKey() {
  return localStorage.getItem('lr_apikey') || '';
}
function getGeminiModel() {
  return localStorage.getItem('lr_gemini_model') || 'gemini-2.5-flash';
}
function getUsername() {
  return (localStorage.getItem('lr_username') || 'christine').trim().toLowerCase().replace(/[^a-z0-9-]/g, '') || 'christine';
}
function getGithubConfig() {
  return {
    token: localStorage.getItem('lr_gh_token') || '',
    owner: localStorage.getItem('lr_gh_owner') || '',
    repo: localStorage.getItem('lr_gh_repo') || '',
    branch: localStorage.getItem('lr_gh_branch') || 'main',
  };
}
function saveApiSettings() {
  const k = document.getElementById('api-key-input').value.trim();
  const m = document.getElementById('gemini-model-input').value.trim();
  if (k) localStorage.setItem('lr_apikey', k);
  if (m) localStorage.setItem('lr_gemini_model', m);
  showToast('✅ AI 設定已儲存（兩個 App 共用）');
}
function saveGithubSettings() {
  const t = document.getElementById('github-token-input').value.trim();
  const o = document.getElementById('github-owner-input').value.trim();
  const r = document.getElementById('github-repo-input').value.trim();
  const b = document.getElementById('github-branch-input').value.trim();
  if (t) localStorage.setItem('lr_gh_token', t);
  if (o) localStorage.setItem('lr_gh_owner', o);
  if (r) localStorage.setItem('lr_gh_repo', r);
  localStorage.setItem('lr_gh_branch', b || 'main');
  showToast('✅ GitHub 設定已儲存（兩個 App 共用）');
}

// ============================================================
// GitHub API：通用讀寫（PUT 前必先 GET 拿 sha）
// 文件：https://docs.github.com/rest/repos/contents
// ============================================================
function githubApiUrl(path) {
  const cfg = getGithubConfig();
  return `https://api.github.com/repos/${cfg.owner}/${cfg.repo}/contents/${path}`;
}
// 讀取 repo 裡任一個 JSON 檔 → { exists, sha, json } 或 { error }
async function githubGetJson(path) {
  const cfg = getGithubConfig();
  if (!cfg.token || !cfg.owner || !cfg.repo) return { error: '未設定' };
  try {
    const res = await fetch(githubApiUrl(path) + '?ref=' + encodeURIComponent(cfg.branch), {
      headers: { 'Authorization': 'Bearer ' + cfg.token, 'Accept': 'application/vnd.github+json' },
    });
    if (res.status === 404) return { exists: false, sha: null, json: null };
    if (!res.ok) {
      const body = await res.json().catch(() => ({}));
      return { error: `GitHub 讀取失敗 (${res.status})：${body.message || '未知錯誤'}` };
    }
    const data = await res.json();
    const text = fromBase64Unicode(data.content.replace(/\n/g, ''));
    let json;
    try { json = JSON.parse(text); } catch(e) { return { error: path + ' 不是有效的 JSON' }; }
    return { exists: true, sha: data.sha, json };
  } catch(e) { return { error: '網路錯誤：' + e.message }; }
}
// 寫入 repo 裡任一個 JSON 檔（sha 為 null 表示建立新檔）
async function githubPutJson(path, json, sha, message) {
  const cfg = getGithubConfig();
  const body = {
    message: message || ('更新 ' + path + ' ' + new Date().toLocaleString('zh-TW')),
    content: toBase64Unicode(JSON.stringify(json, null, 2)),
    branch: cfg.branch,
  };
  if (sha) body.sha = sha;
  try {
    const res = await fetch(githubApiUrl(path), {
      method: 'PUT',
      headers: { 'Authorization': 'Bearer ' + cfg.token, 'Accept': 'application/vnd.github+json', 'Content-Type': 'application/json' },
      body: JSON.stringify(body),
    });
    if (!res.ok) {
      const resBody = await res.json().catch(() => ({}));
      return { error: `GitHub 寫入失敗 (${res.status})：${resBody.message || '未知錯誤'}${res.status === 404 ? '（很可能是分支名稱設錯，請到設定頁重新按「測試連線」檢查）' : ''}` };
    }
    const resData = await res.json().catch(() => ({}));
    return { ok: true, sha: resData.content && resData.content.sha };
  } catch(e) { return { error: '網路錯誤：' + e.message }; }
}
// 刪除檔案（目前只用在「測試連線」清掉自己建立的測試檔）
async function githubDeleteJson(path, sha, message) {
  const cfg = getGithubConfig();
  try {
    const res = await fetch(githubApiUrl(path), {
      method: 'DELETE',
      headers: { 'Authorization': 'Bearer ' + cfg.token, 'Accept': 'application/vnd.github+json', 'Content-Type': 'application/json' },
      body: JSON.stringify({ message: message || ('刪除 ' + path), sha, branch: cfg.branch }),
    });
    return { ok: res.ok };
  } catch(e) { return { ok: false }; }
}
// 取得 repo 資訊（用來比對真正的預設分支名稱）
async function githubGetRepoInfo() {
  const cfg = getGithubConfig();
  try {
    const res = await fetch(`https://api.github.com/repos/${cfg.owner}/${cfg.repo}`, {
      headers: { 'Authorization': 'Bearer ' + cfg.token, 'Accept': 'application/vnd.github+json' },
    });
    if (!res.ok) {
      const body = await res.json().catch(() => ({}));
      return { error: `找不到 repo (${res.status})：${body.message || '請檢查擁有者/Repo 名稱是否正確，或 Token 是否有這個 repo 的權限'}` };
    }
    const data = await res.json();
    return { defaultBranch: data.default_branch };
  } catch(e) { return { error: '網路錯誤：' + e.message }; }
}

// ============================================================
// data-user.json：兩個 App 共用同一個檔案
// 英文 App 只寫英文陣列、德文 App 只寫德文陣列；
// githubAppendToUserData 每次重試都重新讀最新版本，保證不蓋掉對方的內容。
// ============================================================
const USER_DATA_PATH = 'data-user.json';

// 【新增資料類型時必看】要同時改三個地方：
//   ① 這裡的 emptyUserData()  ② 下面的 mergeUserData()  ③ 該 App 的收集箱儲存流程
// 兩個 App 共用同一個 data-user.json，各自只寫自己的陣列，互不干擾。
function emptyUserData() {
  return {
    englishVocabulary: [],
    germanVocabulary: [],
    englishGrammar: [],
    germanGrammar: [],
    germanSentences: [],
    wordRoots: [],
    task2Phrases: [],   // 英文 App：雅思寫作佳句
    speakingNotes: [],  // 英文 App：口說語料（串題用）
    paraphrases: [],    // 英文 App：Paraphrase Bank 改寫語料（收集箱新增，id 前綴 upara_）
  };
}
async function githubGetUserData() {
  const r = await githubGetJson(USER_DATA_PATH);
  if (r.error && r.error !== '未設定') return r;
  if (r.error === '未設定') return { error: r.error };
  if (!r.exists) return { exists: false, sha: null, json: emptyUserData() };
  return r;
}
// 通用：把新內容附加進 data-user.json，內建 409 衝突自動重試
// applyFn(userData) 負責把新內容 push 進 userData 對應的陣列；每次重試都會重新
// 讀取「最新」的雲端資料再呼叫 applyFn——因為 data-user.json 是兩個 App、兩個人
// 共用的檔案，如果衝突重試時偷懶重用舊資料，會蓋掉對方同時寫入的內容。
async function githubAppendToUserData(applyFn) {
  let lastError = null;
  let finalUserData = null;
  for (let attempt = 0; attempt < 3; attempt++) {
    const current = await githubGetUserData();
    if (current.error) { lastError = current.error; break; }
    const userData = current.json || emptyUserData();
    const defaults = emptyUserData();
    Object.keys(defaults).forEach(k => { if (!Array.isArray(userData[k])) userData[k] = []; });
    applyFn(userData);
    const put = await githubPutJson(USER_DATA_PATH, userData, current.sha, '收集箱更新 ' + new Date().toLocaleString('zh-TW'));
    if (put.ok) { finalUserData = userData; lastError = null; break; }
    lastError = put.error;
    // 409 衝突：資料已被別人（或另一台裝置/另一個 App）改過，sha 過期。重新讀取最新版本後重試。
    if (put.error && put.error.includes('409') && attempt < 2) {
      await new Promise(r => setTimeout(r, 400 * (attempt + 1)));
      continue;
    }
    break;
  }
  return { ok: !lastError, error: lastError, userData: finalUserData };
}
function friendlyConflictMessage(error, retryHint) {
  if (error && error.includes('409')) {
    return `同步衝突（可能兩個裝置或兩個 App 剛好同時儲存），已自動重試但仍失敗，請稍後${retryHint}`;
  }
  return error;
}
// 把 data-user.json 的內容合併進主資料陣列（以 id 去重複）
// 各 App 只會有自己需要的陣列（typeof 判斷），不存在的就跳過
function mergeUserData(userData) {
  if (!userData) return;
  function mergeInto(target, items) {
    if (!Array.isArray(items)) return;
    const existingIds = new Set(target.map(x => x.id));
    items.forEach(item => {
      if (item && item.id && !existingIds.has(item.id)) {
        target.push(item);
        existingIds.add(item.id);
      }
    });
  }
  if (typeof ENGLISH_VOCABULARY !== 'undefined') mergeInto(ENGLISH_VOCABULARY, userData.englishVocabulary);
  if (typeof GERMAN_VOCABULARY !== 'undefined') mergeInto(GERMAN_VOCABULARY, userData.germanVocabulary);
  if (typeof ENGLISH_GRAMMAR !== 'undefined') mergeInto(ENGLISH_GRAMMAR, userData.englishGrammar);
  if (typeof GERMAN_GRAMMAR !== 'undefined') mergeInto(GERMAN_GRAMMAR, userData.germanGrammar);
  if (typeof GERMAN_SENTENCES !== 'undefined') mergeInto(GERMAN_SENTENCES, userData.germanSentences);
  if (typeof WORD_ROOTS !== 'undefined') mergeInto(WORD_ROOTS, userData.wordRoots);
  if (typeof TASK2_PHRASES !== 'undefined') mergeInto(TASK2_PHRASES, userData.task2Phrases);
  if (typeof SPEAKING_NOTES !== 'undefined') mergeInto(SPEAKING_NOTES, userData.speakingNotes);
  // Paraphrase Bank：固定資料在 data-ielts.js 的 IELTS_PARAPHRASES，收集箱新增的合併進來（id 前綴 upara_）
  if (typeof IELTS_PARAPHRASES !== 'undefined') mergeInto(IELTS_PARAPHRASES, userData.paraphrases);
}
// App 啟動時讀取 data-user.json（走 GitHub Pages 靜態檔，不用 token）
async function loadUserData() {
  try {
    const res = await fetch('data-user.json?t=' + Date.now());
    if (!res.ok) return;
    const userData = await res.json();
    mergeUserData(userData);
  } catch(e) {
    console.warn('data-user.json 載入失敗（可忽略）', e);
  }
}

// ============================================================
// 測試 GitHub 連線（兩個 App 設定頁 DOM id 完全相同，共用此函式）
// 教訓（2026-07-09）：只測 GET 不能證明寫入權限正常，
// 「測試連線」類功能要實際測試會用到的每一種操作（分支比對＋實際寫入再刪除）。
// ============================================================
async function testGithubConnection() {
  const cfg = getGithubConfig();
  const statusEl = document.getElementById('github-test-status');
  if (!cfg.token || !cfg.owner || !cfg.repo) {
    statusEl.innerHTML = `<div style="color:var(--danger); font-size:13px; margin-top:8px;">請先填寫並儲存 Token、擁有者、Repo 名稱</div>`;
    return;
  }
  statusEl.innerHTML = `<div style="color:var(--text3); font-size:13px; margin-top:8px;">測試中…</div>`;
  // 第一步：確認 repo 存在，並拿到真正的預設分支名稱
  const repoInfo = await githubGetRepoInfo();
  if (repoInfo.error) {
    statusEl.innerHTML = `<div style="color:var(--danger); font-size:13px; margin-top:8px;">❌ ${escHtml(repoInfo.error)}</div>`;
    return;
  }
  // 第二步：分支名稱是否和設定相符
  if (repoInfo.defaultBranch && repoInfo.defaultBranch !== cfg.branch) {
    statusEl.innerHTML = `<div style="color:var(--danger); font-size:13px; margin-top:8px; line-height:1.6;">
      ⚠️ 分支名稱不符：你的 repo 實際分支是 <strong>${escHtml(repoInfo.defaultBranch)}</strong>，但設定裡填的是 <strong>${escHtml(cfg.branch)}</strong>。<br>
      這就是「測試看起來成功、但儲存時 404」最常見的原因！
      <button class="settings-save-btn" style="margin-top:8px;" onclick="document.getElementById('github-branch-input').value='${escHtml(repoInfo.defaultBranch)}'; saveGithubSettings(); testGithubConnection();">✅ 自動修正為 ${escHtml(repoInfo.defaultBranch)}</button>
    </div>`;
    return;
  }
  // 第三步：讀取測試
  const result = await githubGetUserData();
  if (result.error) {
    statusEl.innerHTML = `<div style="color:var(--danger); font-size:13px; margin-top:8px;">❌ ${escHtml(result.error)}</div>`;
    return;
  }
  // 第四步：實際寫入一個測試檔再刪除，驗證寫入權限
  const testPath = '.lr-connection-test.json';
  const putResult = await githubPutJson(testPath, { test: true, at: Date.now() }, null, '連線測試（可忽略/刪除）');
  if (putResult.error) {
    statusEl.innerHTML = `<div style="color:var(--danger); font-size:13px; margin-top:8px; line-height:1.6;">
      ❌ 讀取正常，但寫入失敗：${escHtml(putResult.error)}<br>
      請檢查 Token 權限是否為「Contents: Read and write」（不是 Read-only）。
    </div>`;
    return;
  }
  if (putResult.sha) await githubDeleteJson(testPath, putResult.sha, '清除連線測試檔');
  if (!result.exists) {
    statusEl.innerHTML = `<div style="color:var(--ok); font-size:13px; margin-top:8px;">✅ 連線成功（讀取＋寫入都正常）！repo 中還沒有 data-user.json，第一次儲存時會自動建立</div>`;
  } else {
    statusEl.innerHTML = `<div style="color:var(--ok); font-size:13px; margin-top:8px;">✅ 連線成功（讀取＋寫入都正常），data-user.json 已存在</div>`;
  }
}

// ============================================================
// Gemini AI 統一入口
// parts 可以是純文字或文字+圖片/PDF；extra 可放額外參數（如 url_context 工具）
// 回傳 { ok: true, text } 或 { ok: false, error }
// ============================================================
async function callGemini(parts, extra) {
  const key = getApiKey();
  if (!key) return { ok: false, error: '請先在「設定」中輸入 Gemini API Key' };
  if (typeof parts === 'string') parts = [{ text: parts }];
  const model = getGeminiModel();
  const requestBody = Object.assign({ contents: [{ parts: parts }] }, extra || {});
  try {
    const res = await fetch(`https://generativelanguage.googleapis.com/v1beta/models/${model}:generateContent?key=${key}`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(requestBody)
    });
    const data = await res.json();
    if (!res.ok) {
      const msg = (data.error && data.error.message) ? data.error.message : `HTTP ${res.status}`;
      return { ok: false, error: `Gemini 錯誤：${msg}（目前模型：${model}，可到設定修改）` };
    }
    if (data.candidates && data.candidates[0] && data.candidates[0].content) {
      const text = data.candidates[0].content.parts.map(p => p.text || '').join('');
      return { ok: true, text };
    }
    return { ok: false, error: 'Gemini 沒有回傳內容，請再試一次' };
  } catch(e) {
    return { ok: false, error: '網路錯誤：' + e.message };
  }
}

// ============================================================
// 發音（Web Speech API，iPhone Safari 內建，免費）
// ============================================================
function speak(text, lang) {
  if (!text) return;
  if (!('speechSynthesis' in window)) {
    showToast('此裝置不支援語音功能');
    return;
  }
  speechSynthesis.cancel();
  const u = new SpeechSynthesisUtterance(text);
  u.lang = lang; // 'en-US' 或 'de-DE'
  u.rate = 0.9;
  speechSynthesis.speak(u);
}

// ============================================================
// 檔案處理（收集箱用）
// ============================================================
// 照片縮到最長邊 1600px 再轉 base64
function resizeImageToDataUrl(file, maxDim) {
  maxDim = maxDim || 1600;
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onload = (e) => {
      const img = new Image();
      img.onload = () => {
        let { width, height } = img;
        if (width > height && width > maxDim) { height = Math.round(height * maxDim / width); width = maxDim; }
        else if (height >= width && height > maxDim) { width = Math.round(width * maxDim / height); height = maxDim; }
        const canvas = document.createElement('canvas');
        canvas.width = width; canvas.height = height;
        canvas.getContext('2d').drawImage(img, 0, 0, width, height);
        resolve(canvas.toDataURL('image/jpeg', 0.85));
      };
      img.onerror = () => reject(new Error('圖片載入失敗'));
      img.src = e.target.result;
    };
    reader.onerror = () => reject(new Error('檔案讀取失敗'));
    reader.readAsDataURL(file);
  });
}
// 純讀檔轉 base64（PDF 用，Gemini 原生支援讀 PDF）
function readFileAsDataUrl(file) {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onload = (e) => resolve(e.target.result);
    reader.onerror = () => reject(new Error('檔案讀取失敗'));
    reader.readAsDataURL(file);
  });
}
// 產生不重複的使用者資料 id：u + 類型 + 時間戳36進位 + 流水號
function makeUserId(prefix, n) {
  return 'u' + prefix + Date.now().toString(36) + n;
}
