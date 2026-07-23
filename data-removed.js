// ============================================================
// data-removed.js — 已從主資料庫移除的單字封存（非雅思導向）
// 移除日期：2026-07-09；如需救回，把整行複製回 data.js 對應區塊即可
// ============================================================
const REMOVED_VOCABULARY = [
  { id: "en038", word: "Chinese fortune sticks", meaning: "籤詩", partOfSpeech: "n.", source: "cambly", example: "In temples, people draw fortune sticks to get answers from gods." },
  { id: "en041", word: "carnation", meaning: "康乃馨", partOfSpeech: "n.", source: "cambly", example: "Carnations are the traditional Mother's Day flower." },
  { id: "en072", word: "raclette", meaning: "瑞士起司烤盤料理", partOfSpeech: "n.", source: "cambly", example: "Raclette is like cheese fondue but you grill the cheese yourself." },
  { id: "en106", word: "Muntjac", meaning: "山羌（台灣特有）", partOfSpeech: "n.", source: "cambly", example: "The Muntjac is a deer species found mainly in Taiwan." },
  { id: "en107", word: "king oyster mushroom", meaning: "杏鮑菇", partOfSpeech: "n.", source: "cambly", example: "King oyster mushrooms have a meaty texture." },
  { id: "en121", word: "locs", meaning: "編髮（dreadlocks）", partOfSpeech: "n.", source: "cambly", example: "He has locs down to his shoulders." },
  { id: "en124", word: "stud earring", meaning: "耳釘", partOfSpeech: "n.", source: "cambly", example: "It's not a dangly earring, it's a stud earring." },
  { id: "en128", word: "microneedles", meaning: "微針", partOfSpeech: "n.", source: "cambly", example: "Some beauty treatments use microneedles on the face." },
  { id: "en129", word: "toner", meaning: "化妝水", partOfSpeech: "n.", source: "cambly", example: "Apply toner before using a face mask." },
  { id: "en157", word: "ferret", meaning: "雪貂", partOfSpeech: "n.", source: "cambly", example: "Ferrets are cute but have a very strong smell." },
  { id: "en165", word: "handshake drink", meaning: "手搖飲", partOfSpeech: "n.", source: "cambly", example: "Taiwanese handshake drinks are freshly shaken each time." },
  { id: "en185", word: "crepe", meaning: "可麗餅（發音 /krɛp/）", partOfSpeech: "n.", source: "cambly", example: "In France, say crepe correctly or French people will correct you." },
  { id: "en186", word: "mille-feuille", meaning: "千層酥（法式甜點）", partOfSpeech: "n.", source: "cambly", example: "Mille-feuille is a delicious French custard layered pastry." },
  { id: "en189", word: "HD brows", meaning: "高清眉毛（美容）", partOfSpeech: "n.", source: "cambly", example: "HD brows is a beauty treatment to enhance eyebrow shape." },
  { id: "en238", word: "g'day", meaning: "嗨（澳洲口語問候，good day 的縮寫）", partOfSpeech: "phrase", source: "cambly", example: "Australians say 'g'day' instead of 'good day'." },

  // === 2026-07-23 移除：不規則動詞格式統一 ===
  // 原因：這 4 筆是舊格式的不規則動詞（word 欄位放「過去式(原形)」，例如 "bought (buy)"）。
  // 整理不規則動詞練習功能時，發現它們分別跟新格式的 en270(go)/en269(take)/
  // en264(buy)/en265(think) 是同一個字、教同一件事，為了避免單字庫和練習池出現
  // 重複條目，把這 4 筆舊格式移除，原始內容保留在此。
  { id: "en077", word: "went (go)", meaning: "去（go 的過去式）", partOfSpeech: "v.", source: "cambly", example: "I went to Japan last year." },
  { id: "en080", word: "took (take)", meaning: "搭乘（take 的過去式）", partOfSpeech: "v.", source: "cambly", example: "We took the MRT to Taipei." },
  { id: "en081", word: "bought (buy)", meaning: "買（buy 的過去式）", partOfSpeech: "v.", source: "cambly", example: "She bought a lot of souvenirs in Korea." },
  { id: "en084", word: "thought (think)", meaning: "認為（think 的過去式）", partOfSpeech: "v.", source: "cambly", example: "I thought it was a good idea." },
];
