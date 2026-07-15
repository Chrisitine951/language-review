// ============================================================
// grimm/data-removed.js — 從主資料庫移除的內容封存（可救回）
// 規則：刪除 grimm-data.js 裡的任何資料前，先原封不動搬到這裡，
//       並補上 removedAt（日期）與 reason（原因）兩個欄位。
// 本檔不會被 App 載入，純粹是給人與 AI 看的備份。
// ============================================================

const REMOVED_SOUND_RULES = [];
const REMOVED_LETTER_GUIDE = [];
const REMOVED_GRIMM_ROOTS = [];
const REMOVED_AFFIXES = [];

// 範例格式（實際封存時照這樣寫）：
// const REMOVED_GRIMM_ROOTS = [
//   { id: "gr999", root: "xxx", /* …原本的完整欄位… */
//     removedAt: "2026-08-01", reason: "與 gr002 重複，內容已併入" }
// ];
