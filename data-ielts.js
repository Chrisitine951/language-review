// ============================================================
// data-ielts.js — 雅思專區資料庫（english.html 專用）
// 最後更新：2026-07-15（v2.0.0）
//
// 【給接手的 AI】這個檔案放「方法論與參考資料」，和 data.js 的分工是：
//   data.js      = Christine 累積的個人學習內容（單字、自己的文法錯誤…），會一直長大
//   data-ielts.js = 備考方法與規則（來自她的備考指南與工具書），相對穩定、很少變動
//   進度與紀錄（練習成績、錯因）不放這裡，走 localStorage + progress-<user>.json
//
// 【版權注意】這裡只收錄「方法、規則、架構、單字表」這類事實與觀念整理，
//   不收錄工具書的完整範文。範文請 Christine 看原書；App 只教她怎麼拆解與檢核。
// ============================================================

// ============================================================
// 四科備考方法（整理自 Christine 自己的備考指南）
// 格式：{ id, skill, title, sections:[{h, items:[...]}] }
// skill: listening / reading / writing / speaking
// ============================================================
const IELTS_METHODS = [
  {
    id: "m-listen", skill: "listening", title: "聽力備考方法",
    sections: [
      { h: "準備方向", items: [
        "透過多寫題目熟悉各種主題、語速",
        "從劍橋真題（順序由舊到新）計時練習，紀錄分數落點和弱點，搭配劍橋真題精講（詳解本）",
      ]},
      { h: "做題技巧", items: [
        "發展一套自己的定位詞符號，依詞性、句子結構在考本上做記號（例：動詞畫圈、名詞畫方框、數字地址畫毛毛蟲底線），寫題過程中視情況優化成自己熟悉的符號",
      ]},
      { h: "讀書步驟（一回 30 分鐘）", items: [
        "① 一次寫一回劍橋真題聽力（例：劍10 Test 1）",
        "② 寫完對答案，錯的劃掉，不急著寫上正確答案",
        "③ 再聽一次，試著把錯的改正",
        "④ 再對一次答案",
        "⑤ 看精講，尤其第一次沒聽出來的，確認是哪種原因出錯",
        "⑥ 再聽一次，確定認同自己找出的原因",
      ]},
      { h: "輔助工具", items: [
        "小站：聽力常考「場景詞」（租房、動物、圖書館、研究討論…），從弱點找場景詞加強，掃讀有印象即可",
        "小站：雅思真題回憶——了解實際考試要填入的單字長怎樣，掃讀了解用字範圍",
        "考滿分 App：聽力小遊戲練數字、人名、路名（英國火車站名），訓練專注度與陌生詞臨場反應",
        "劍橋精講：本節必背單字、詞彙拓展（建議熟悉 8 成以上）",
        "英式發音：BBC 6 Minute English（英式發音、英國火車站和路名）",
        "印度發音：國家地理【印度超級廚房】熟悉印度腔",
      ]},
    ],
  },
  {
    id: "m-read", skill: "reading", title: "閱讀備考方法",
    sections: [
      { h: "準備方法", items: [
        "需要長時間專心，熟練使用平行閱讀法技巧，了解長篇文章的邏輯",
        "初期做劍橋真題不限時（僅記錄所需時間），確認平行閱讀技巧無礙後，再限時",
      ]},
      { h: "做題技巧", items: [
        "初期：從考題回原文找定位，不限時，做題並詳讀劍橋精講，確認定位點無誤",
        "穩定後：定位詞、轉折詞、語氣、長句拆解都要做記號，核對精講，確認整體做題脈絡皆無誤",
        "寫完測驗之後直接開始檢討，避免考試邏輯斷線後需要花更多時間進入狀況",
      ]},
      { h: "讀書步驟", items: [
        "① 初期不計時，一次寫一篇文章，寫完立即對精講（對答案是否正確即可）",
        "② 確認技巧無誤並熟悉所有題型再進到下一步驟",
        "③ 限時做完一回閱讀，寫完對答案，劃掉錯的，不急著把對的寫上",
        "④ 回原文找答案，試著把錯的改正",
        "⑤ 再對一次答案",
        "⑥ 詳讀精講，確認結構、邏輯與生字句子皆了解",
        "⑦ 抄寫需要背的生字，背熟",
      ]},
      { h: "輔助工具", items: [
        "小站雅思：閱讀分類字彙（範圍較大，掃讀即可）",
        "劍橋精講：有列出相關單字（建議熟悉 8 成以上）",
        "陌生主題（天文、動物、藝術）：voicetube、英文學習雜誌、國家地理 YouTube 累積背景知識——零碎時間或精神不佳時服用，不要花很長的寶貴時間做這件事",
        "陌生的閱讀主題，讀中文版也可以！",
      ]},
    ],
  },
  {
    id: "m-write", skill: "writing", title: "寫作備考方法（Simon 路線）",
    sections: [
      { h: "Simon 建議的學習順序", items: [
        "① 文章結構與段落：找到適合自己的架構（4 段：2 句引言、5 句主體 ×2、1 句結論），把寫過的作文改寫成同樣的段數句數",
        "② 題型：看四種題型的範文，確定每種都能用自己的結構回答",
        "③ 計畫與單段練習：拿幾個題目只練 planning ideas；再花時間只練 introduction（例：寫 5 個不同題目的引言），再練結論、各類主體段",
        "④ 主題語料：能寫整篇後，盡量做完常見的雅思寫作主題，至少要 plan 出 ideas 和 opinions",
        "⑤ 錯誤與修正：找人幫你檢查、標出並解釋錯誤",
      ]},
      { h: "Task 2 時間分配（40 分鐘）", items: [
        "前 10 分鐘：規劃結構＋腦力激盪兩個主體段的 ideas",
        "5 分鐘：寫 2 句引言",
        "20 分鐘：主體段（每段 10 分鐘）",
        "最後 5 分鐘：寫結論並檢查",
      ]},
      { h: "Simon 的實際寫作步驟", items: [
        "① 非常仔細地讀題，甚至讀三次，問自己「主題是什麼？題目要我寫什麼？」",
        "② 畫線標出一定要涵蓋的關鍵點，永遠回答題目的每一部分",
        "③ 決定四段結構要放什麼",
        "④ 若要給意見：想「哪個立場最容易解釋？可以用什麼好詞彙？」",
        "⑤ 寫下和主題相關的詞彙",
        "⑥ 引言 2 句：介紹主題 + 簡單回答（含立場）",
        "⑦ 每段先寫短的 topic sentence，再用解釋與例子展開",
        "⑧ 不時回看題目，確認每一部分都回答到",
        "⑨ 知道自己每行約寫 10 個字，可快速估算字數",
        "⑩ 字數不足 250 時，擴充主體段的其中一個例子",
      ]},
      { h: "重要心法", items: [
        "結構不是高分的秘密：卡在 6 或 6.5 通常要改善的是內容（ideas、詞彙、正確文法），不是結構",
        "「Simple」不等於「Easy」：用簡單方式寫，是為了把心力放在回答題目與清楚解釋想法上，但詞彙、文法、ideas 還是要夠深",
        "引言與結論要短、快、直接；想拿高分，時間花在主體段",
        "一篇文章裡不要用兩次 Firstly / Secondly / Finally；可換成 One problem is… / Another key factor is… / In addition to this…",
        "先求寫得好，再求寫得快。花 4 小時寫出第一篇 band 7 是好事，練習後自然會變快",
      ]},
    ],
  },
  {
    id: "m-speak", skill: "speaking", title: "口說備考方法",
    sections: [
      { h: "先摸清底細", items: [
        "① 搜尋 YouTube「ielts speaking band 7」的答題影片，了解好的答案長怎樣",
        "② 挑一個容易模仿的影片，用這五步練一次：歸類題型 → 歸納答題架構 → 寫出重點主題詞彙/慣用語/常用句 → 正計時說一次 → 檢討並記錄（是連中文都無法敘述？還是英文詞彙/句子要加強？）",
        "③ 用雅思哥 App 了解常考題型與主題",
      ]},
      { h: "1. 建立答題架構", items: [
        "像中文作文的起承轉合，考試時看到題目就立刻選定一種架構",
        "短題：先覆述題目、延伸，舉正面例子，結語",
        "長題：先覆述題目、延伸，舉正面例子 1,2,3…，舉反例 1,2,3…，結語",
        "用心智圖、便利貼彙整答題內容，分成小模塊能「跨題」排列組合",
      ]},
      { h: "2. 充實語料內容（串題法）", items: [
        "內容來源用現成資源拼湊成自用筆記即可，省時省力（例：找「爬山」主題就看國家地理、外國登山 YouTuber）",
        "有效串題：不論題目問什麼，都給同樣的核心答案，只改首尾段",
        "例：最喜歡的隨身物品／收過最喜歡的生日禮物／近期購買的物品 → 核心都答「一本書」",
        "例：最喜歡的運動／做過最困難的事／最喜歡和家人做的事 → 核心都答「滑雪」",
        "進階：與自身熟悉的經驗連結，「集中學習」相關詞彙（挑兩三樣運動，學設備器材、動作的說法）",
      ]},
      { h: "高分秘訣", items: [
        "長度：適合單字量較少者，從架構下手，多舉幾個例子比深度解釋單一例子容易準備且易得高分",
        "深度：利用「慣用語」（片語或短語），一個回答內展現一至兩個道地用法，成為亮點",
        "聽中國補教網站（小站、考滿分）的免費公開課：針對單一知識點的幾分鐘講解，有基礎後聽特別有感",
      ]},
    ],
  },
];

// ============================================================
// 平行閱讀法：核心規則（整理自《最新雅思閱讀勝經——平行閱讀法》第1章）
// 這是「閱讀拆解檢核」功能的規則來源，AI 依這些規則核對 Christine 的拆解。
// ============================================================

// 一、三種語言重現（定位機制）
const READING_REAPPEARANCE = [
  {
    id: "aa", name: "AA 語言重現", short: "原詞重現",
    def: "題目的關鍵詞 A 在原文中以完全相同的形式 A 出現，原封不動地重現。",
    how: "最好定位的一種。優先找「特殊關鍵詞」：數字、年份、人名、地名、專有名詞、大寫字、斜體字——這些幾乎不會被改寫。",
    example: "題目問 1993 年有幾個城市競爭 → 原文的 1993 原樣出現，答案就在附近。",
  },
  {
    id: "ab", name: "AB 語言重現", short: "同義替換",
    def: "題目的關鍵詞 A 在原文中以同義詞 B 的形式出現。",
    how: "考的是單字量，主要憑理解去定位。要學會根據關鍵詞的「含義」回原文定位，不是找一模一樣的字。連數字也可能被替換（題目 three quarters ↔ 原文 75%）。",
    example: "題目 technological developments ↔ 原文 mechanisation，表達相同含義 → 判斷題答 TRUE。",
  },
  {
    id: "rel", name: "關係重現", short: "句子結構重現",
    def: "把定位對象從「詞」升級到「句子結構」，靠邏輯關係定位。這是最關鍵的一類，也是閱讀技巧的完美體現。",
    how: "能越過生詞造成的閱讀障礙——就算句子裡有不認識的字也能作答。核心原則：「結果相同，原因必相同」（僅適用於雅思閱讀）。從大局著手，利用句子結構的相似性找答案。",
    example: "原文 Paper is biodegradable, SO it does not pose threat... ／題目 Paper is less threatening BECAUSE it is ___ → 結果相同，所以 because 後的原因必定是 biodegradable，那個生詞其實就是答案。",
  },
];

// 二、七類信號詞（判斷文章方向與答案位置）
const READING_SIGNALS = [
  { id: "sig-turn", name: "轉折信號詞", dir: "前後方向相反",
    words: ["but", "however", "yet", "in fact", "whereas", "on the other hand"],
    note: "轉折詞出現就意味著方向或含義發生變化。看到它就知道後半句要翻盤。" },
  { id: "sig-conc", name: "讓步信號詞", dir: "前後方向相反（同轉折）",
    words: ["although", "though", "while", "albeit", "despite", "in spite of", "nevertheless", "nonetheless"],
    note: "公式：although A（正／負），B（負／正）。可根據前半句方向判斷後半句方向。注意 while 在雅思閱讀中最常見的意思是 although（儘管、雖然）。" },
  { id: "sig-para", name: "並列信號詞", dir: "前後方向相同",
    words: ["and", "also", "as well as", "in addition", "furthermore", "moreover", "besides"],
    note: "前後內容方向一致，可互相印證。" },
  { id: "sig-key", name: "特殊關鍵詞", dir: "定位錨點",
    words: ["數字", "年份", "百分比", "人名", "地名", "專有名詞", "大寫字", "斜體字"],
    note: "AA 重現最好用的定位點，通常原封不動出現在原文。做題時第一個找它。" },
  { id: "sig-comp", name: "比較信號詞", dir: "比較相同點／對比不同點",
    words: ["as...as", "like", "parallel（相同）", "more than", "unlike", "on the other hand", "in contrast with", "than（不同）"],
    note: "也可透過時間或地點的差異造成強對比（例：once… / Now… 是時間對比；dry inland areas ↔ on the coast 是地點對比）。找出：比較的雙方、比較點、比較的方向。" },
  { id: "sig-eg", name: "舉例信號詞", dir: "前後意思相同",
    words: ["for example", "for instance", "like", "such as", "破折號 —", "冒號 :"],
    note: "舉例是對上文的解釋說明，信號詞前後內容意思相同——看不懂上文時，用例子反推。" },
  { id: "sig-cause", name: "因果信號詞", dir: "前因後果／前果後因",
    words: ["because", "because of", "so", "therefore", "thus", "as a result", "result in", "lead to"],
    note: "因果關係往往會重現在文章裡。掌握住就能迴避生詞干擾——這是關係重現最常用的入口。" },
];

// 三、平行閱讀法五步驟（第3章核心方法論：「多題並舉，一遍閱讀」）
const READING_PARALLEL_STEPS = [
  { id: "s1", step: "略讀 Skimming", do: "讀文章標題與各段首句，快速掌握大意與架構。", watch: "不要細讀，這步只是建立地圖。" },
  { id: "s2", step: "精讀問題 Reading Questions Intensively", do: "同時記住前 2–3 類題型「第一道題」的關鍵詞（人名、地名、時間、數字、生詞）。", watch: "若有 4–5 種題型，初期只記前 3 種的首題，等一類做完再追加。" },
  { id: "s3", step: "掃讀原文 Scanning", do: "帶著這幾個關鍵詞回原文找語言重現（AA／AB／關係重現）。", watch: "手上同時握著好幾題往下讀，這就是「平行」的意思。" },
  { id: "s4", step: "精讀重現處 Reading Intensively", do: "一發現重現，立刻字斟句酌讀上下文、分析語法，得出答案。", watch: "只在重現處精讀，其他地方不必逐字看。" },
  { id: "s5", step: "精讀下一題 Reading the Next Question", do: "完成某題型第 N 題後，立刻補上該題型第 N+1 題的關鍵詞，繼續帶著各題型「第一道未完成的題」往下讀。", watch: "永遠不回頭。手上的題目做完一題就補一題。" },
];

// 四、核心原則（做題心法）
const READING_PRINCIPLES = [
  { id: "p1", title: "有序的無序性", body: "雅思閱讀題型「之間」沒有先後順序（無序），但每一類題型「內部」有先後順序（有序）。所以要穿梭做題，不要按題號順序做。" },
  { id: "p2", title: "預測、並行、不回頭", body: "正確執行時，全程只需完整閱讀原文「一遍」就能解決所有題型。如果還在為了某個題型回頭翻找，代表平行處理沒到位。" },
  { id: "p3", title: "排除法（選擇題／標題題／配對題）", body: "特別留意含「絕對詞」（only, always, all, invariably, never）的選項，以及與原文無關的新概念、結構相似但概念不同的「偷換概念」選項。" },
  { id: "p4", title: "邏輯一致性（填空／判斷題）", body: "確認題目與原文的邏輯關係是否重合。原文是「A 導致 B」，題目問「因為 B 所以 A」→ 拆解錯誤，判斷題應為 FALSE。" },
  { id: "p5", title: "結果相同，原因必相同", body: "關係重現的核心原則（僅適用於雅思閱讀）。用它可以直接跳過生詞得出答案。" },
];

// 五、拆解檢核的檢查點（AI 依此評估 Christine 的拆解是否完全）
// 用在「閱讀 → 拆解檢核」功能：她填完各欄，AI 逐項判斷並給拆解完成度
const READING_CHECKPOINTS = [
  { id: "cp1", key: "keywords", label: "定位詞選得對嗎", hint: "有沒有優先挑特殊關鍵詞（數字/年份/專有名詞）？挑的詞會不會太常見而無法定位？" },
  { id: "cp2", key: "reappearance", label: "重現類型判斷對嗎", hint: "這題是 AA 原詞重現、AB 同義替換，還是關係重現？只依賴原詞、沒認出 AB 同義替換是最常見的失敗。" },
  { id: "cp3", key: "location", label: "定位句找對了嗎", hint: "定位到的原文句子是否真的對應題目？還是被相似字誤導（偷換概念）？" },
  { id: "cp4", key: "signal", label: "信號詞有抓到嗎", hint: "定位句附近有沒有轉折/讓步/因果/比較信號詞？看到 but/however 要意識到後方才是重點。" },
  { id: "cp5", key: "logic", label: "邏輯關係重合嗎", hint: "題目與原文的邏輯方向一致嗎？原文「A導致B」而題目說「因為B所以A」就是不重合。" },
  { id: "cp6", key: "elimination", label: "排除法用到了嗎", hint: "（選擇/標題/配對題）有沒有排除掉含絕對詞 only/always/all 或偷換概念的選項？" },
  { id: "cp7", key: "onepass", label: "有沒有重複閱讀", hint: "這題是一遍讀完就解決，還是為了它回頭又翻了一次原文？回頭＝平行處理不徹底。" },
];

// 六、閱讀八大題型（第2章）——拆解檢核的「題型」下拉選單用
// 不同題型的拆解重點不同，AI 檢核時會依題型調整判準
const READING_Q_TYPES = [
  { id: "qt-choice", name: "選擇題", focus: "運用排除法。留意含絕對詞（only/always/all）或偷換概念的選項。" },
  { id: "qt-summary", name: "SUMMARY 填空題", focus: "先定位起始位置，特別留意 AB 同義替換。" },
  { id: "qt-tfng", name: "判斷題 T/F/NG", focus: "邏輯關係必須完全重合。留意歸納總結、偷換概念、絕對詞。原文「A導致B」而題目說「因為B所以A」→ FALSE。" },
  { id: "qt-heading", name: "標題選擇題 Headings", focus: "分析段落結構（總分、分總、對比）。找段落主旨句，不是找細節。" },
  { id: "qt-short", name: "簡答題", focus: "注意字數限制。答案通常原文照抄。" },
  { id: "qt-sentence", name: "句子填空題", focus: "先判斷空格詞性，再靠語言重現定位。" },
  { id: "qt-diagram", name: "圖表填空題", focus: "圖表標示常是特殊關鍵詞（AA 重現），最好定位。" },
  { id: "qt-match", name: "配對題", focus: "因果配對、從屬配對。留意原文順序與題目順序不一致。" },
];

// 七、定位詞類型——拆解檢核的「你挑的定位詞是哪一種」下拉選單用
// 排序即優先序：越上面越好定位
const KEYWORD_TYPES = [
  { id: "kw-num", label: "數字／年份／百分比", good: true },
  { id: "kw-proper", label: "人名／地名／專有名詞／大寫字", good: true },
  { id: "kw-tech", label: "專業術語／生詞（不太可能被替換）", good: true },
  { id: "kw-noun", label: "一般名詞（可能被同義替換）", good: false },
  { id: "kw-verb", label: "動詞／形容詞（很可能被同義替換）", good: false },
  { id: "kw-struct", label: "整個句子結構／邏輯關係", good: true },
  { id: "kw-none", label: "沒特別挑，直接讀下去找", good: false },
];

// ============================================================
// 錯因分類（聽力/閱讀/文法檢討用，整理自 Christine 的備考指南）
// 練習紀錄裡每題錯誤都要歸到一類，久了就能看出弱點模式
// 【v2.2.5 新增 grammar】給文法頁 EGIU 練習紀錄用。分類儘量對齊 ENGLISH_GRAMMAR
// 既有的 category（past_tense/subject_verb/preposition/other），這樣「最常犯的
// 錯因」統計才能跟她自己的文法錯題庫看到同一套分類；另外加兩個 EGIU 特有的
// 情況（規則忘記/沒吃透），因為 Grammar in Use 涵蓋的文法範圍比那 4 類更廣
// （時態、子句、被動、條件句…都會在 145 單元裡出現）。
// ============================================================
const IELTS_ERROR_CAUSES = {
  listening: [
    { id: "l-vocab", label: "生字不懂" },
    { id: "l-turn", label: "轉折語氣沒聽出來" },
    { id: "l-lost", label: "恍神跳掉一小段" },
    { id: "l-sure", label: "當下很有把握但就是錯" },
    { id: "l-speed", label: "語速跟不上" },
    { id: "l-spell", label: "拼字/數字寫錯" },
    { id: "l-scan", label: "審題太慢，來不及看題" },
  ],
  reading: [
    { id: "r-locate", label: "定位點找錯" },
    { id: "r-syn", label: "同義替換沒看出來（AB 重現）" },
    { id: "r-signal", label: "信號詞漏看，方向判斷反了" },
    { id: "r-long", label: "長句拆解錯誤" },
    { id: "r-vocab", label: "生字不懂" },
    { id: "r-time", label: "時間不夠沒寫完" },
    { id: "r-guess", label: "猜的（就算猜對也要記）" },
  ],
  grammar: [
    { id: "g-tense", label: "過去式（時態判斷錯誤）" },
    { id: "g-agree", label: "主詞動詞一致忘記檢查" },
    { id: "g-prep", label: "介系詞固定搭配記錯" },
    { id: "g-other", label: "其他文法規則" },
    { id: "g-forgot", label: "規則忘記了，需要重新複習" },
    { id: "g-unsure", label: "規則有印象但不確定怎麼用" },
  ],
};

// ============================================================
// 寫作 Task 2：Simon 的四種題型與對應寫法
// ============================================================
const WRITING_TASK2_TYPES = [
  {
    id: "t2-opinion", name: "Opinion（意見題）",
    cue: "To what extent do you agree or disagree? / What is your view?",
    rule: "只問你的意見，不是別人的意見，不必寫兩面。在 introduction 就把立場講清楚，其餘篇幅拿來解釋它。",
    plan: [
      "Introduction：1 句介紹主題 + 1 句表明立場（可以 strong opinion 或 balanced opinion）",
      "Main 1：用一個理由支持你的意見",
      "Main 2：用另一個理由支持你的意見",
      "Conclusion：重述／總結你的意見",
    ],
    tip: "立場強烈時（completely agree/disagree）完全不用提反方觀點。若題目最後一行是「What is your view of…?」，就專心回答那一行。",
  },
  {
    id: "t2-discuss", name: "Discussion（討論題）",
    cue: "Discuss both these views and give your own opinion.",
    rule: "兩邊都要寫，而且篇幅要差不多。題目若也要你的意見，不必多開一段——在引言和結論講清楚你同意哪一邊即可。",
    plan: [
      "Introduction：介紹主題 + 表明你偏向哪一邊",
      "Main 1：On the one hand… 第一種觀點",
      "Main 2：On the other hand… 第二種觀點",
      "Conclusion：總結兩邊 + 重述立場",
    ],
    tip: "「Do the advantages outweigh the disadvantages?」嚴格說是 opinion 題，但考官會期待看到平衡的雙面討論——寫成 discussion opinion 最好也最容易。",
  },
  {
    id: "t2-problem", name: "Problem & Solution（問題解決題）",
    cue: "What problems does this cause? What can be done? / Suggest measures…",
    rule: "最簡單的一型：一段寫問題，一段寫解法。問「causes」或「effects」時，那些都算進「問題」那一段。",
    plan: [
      "Introduction：介紹主題 + 概括回答",
      "Main 1：問題／困難／成因",
      "Main 2：解決方法／措施",
      "Conclusion：重述／總結",
    ],
    tip: "注意題目用什麼字代替 problem 和 solution（difficulties, measures, steps…），答題時要對準題目的用字。",
  },
  {
    id: "t2-2part", name: "2-Part Question（兩部分問題）",
    cue: "Why could this be? Should governments…? / Why…? What factors…?",
    rule: "就是回答兩個問題，一段一個。引言要對「兩個問題」都給出概括答案。",
    plan: [
      "Introduction：介紹主題 + 對兩個問題都給概括答案",
      "Main 1：回答第一個問題",
      "Main 2：回答第二個問題",
      "Conclusion：總結兩個答案（重述引言的回答）",
    ],
    tip: "常用句型：It is true that…（介紹主題）+ There could be several reasons why this is the case, and I believe that…（同時回答兩問）。抽象主題（如 happiness）也是這個結構，主體段照樣要有 topic sentence + 展開。",
  },
];

// ============================================================
// Simon 13 句黃金法則（四段式的逐句配置）
// 注意：這是方法論不是規定，題目需要時可調整。
// ============================================================
const WRITING_13_SENTENCES = [
  { id: "s-intro", para: "開頭段 Introduction", count: 2, lines: [
    "① 引入主題：把題目內容用自己的話重新表述",
    "② 總結性回答＋明確表明立場",
  ]},
  { id: "s-body1", para: "主體段 1", count: 5, lines: [
    "① 主題句 Topic Sentence：概括本段核心",
    "② 第一個支撐論據／原因",
    "③ 針對上述論據給細節、解釋或舉例",
    "④ 第二個論據／進一步深入解釋",
    "⑤ 結果、後果或段落總結",
  ]},
  { id: "s-body2", para: "主體段 2", count: 5, lines: [
    "① 主題句：帶出本段主題",
    "② 解釋說明主要觀點",
    "③ 深入解釋觀點細節",
    "④ 該觀點帶來的具體後果或影響",
    "⑤ 具體實例佐證（可以是個人觀察，也可以是自己編的例子）",
  ]},
  { id: "s-concl", para: "結論段 Conclusion", count: 1, lines: [
    "① 改述 paraphrase 開頭段的立場與答案",
  ]},
];

// ============================================================
// 寫作筆記架構（Christine 自己的 Task 1 / Task 2 筆記格式）
// ============================================================
const WRITING_FRAMEWORKS = [
  {
    id: "fw-task2", task: "Task 2", title: "Task 2 筆記架構",
    rows: [
      ["introduction", "主題（分話題）＋立場（分題型）"],
      ["body 1", "topic sentence → 1. reason → why, more, examples　2. →"],
      ["body 2", "1. →　2. →"],
      ["conclusion", "重現改寫 introduction"],
    ],
    note: "Simon 的 13 句法：引言 2 句、主體段各 5 句、結論 1 句 → 自然超過 250 字。這不是規定，是他的方法；把任務想成「只要寫 13 句」就沒那麼可怕。",
  },
  {
    id: "fw-task1", task: "Task 1", title: "Task 1 筆記架構（大部分圖表題）",
    rows: [
      ["paraphrase topic", "改寫題目敘述，不要照抄"],
      ["overview", "1. 趨勢　2. 最特別的點"],
      ["body 1", "overview 第 1 點的延伸（數據支撐）"],
      ["body 2", "overview 第 2 點的延伸（數據支撐）"],
    ],
    note: "整理每種圖表的「動詞／名詞／形容詞」三欄詞彙表。Task 1 範文多在 150–190 字之間，重點是 overview 要點出趨勢與最特別的點，主體段用具體數字支撐。",
  },
];

// ============================================================
// Task 1 圖表詞彙（動詞／名詞／形容詞三欄，雅思 Task 1 高頻）
// ============================================================
const TASK1_VOCAB = [
  // 上升
  { id: "t1v01", type: "verb", trend: "up", word: "rise / rose / risen", meaning: "上升", example: "Prices rose by approximately 2%." },
  { id: "t1v02", type: "verb", trend: "up", word: "increase", meaning: "增加", example: "Waste production increased more than eightfold." },
  { id: "t1v03", type: "verb", trend: "up", word: "jump to", meaning: "躍升至（劇烈）", example: "House prices jumped to around 12% above the 1989 average." },
  { id: "t1v04", type: "verb", trend: "up", word: "grow / see rapid growth", meaning: "成長／快速成長", example: "Spending saw rapid growth in these countries." },
  { id: "t1v05", type: "verb", trend: "up", word: "double / triple / eightfold", meaning: "倍數成長", example: "The number almost doubled to about 70 per 1000 people." },
  { id: "t1v06", type: "verb", trend: "up", word: "overtake", meaning: "超越（交叉點）", example: "2006 marks the point at which mobile expenditure overtook landline." },
  { id: "t1v07", type: "verb", trend: "up", word: "peak at", meaning: "達到高峰", example: "Net migration peaked at almost 250,000 people in 2004." },
  { id: "t1v08", type: "verb", trend: "up", word: "reach", meaning: "達到", example: "Expenditure on mobile phones had reached around $750." },
  // 下降
  { id: "t1v09", type: "verb", trend: "down", word: "fall / fell / fallen", meaning: "下降", example: "Spending on landline phones fell steadily." },
  { id: "t1v10", type: "verb", trend: "down", word: "drop by", meaning: "下降了（幅度）", example: "The cost dropped by around 7%." },
  { id: "t1v11", type: "verb", trend: "down", word: "decline", meaning: "下滑", example: "A dramatic decline in precipitation." },
  { id: "t1v12", type: "verb", trend: "down", word: "cut / reduce", meaning: "削減", example: "Korea cut its waste output by 12 million tonnes." },
  { id: "t1v13", type: "verb", trend: "down", word: "narrow", meaning: "（差距）縮小", example: "The gap between these two proportions narrows." },
  // 持平／波動
  { id: "t1v14", type: "verb", trend: "flat", word: "remain stable / steady", meaning: "維持穩定", example: "Prices in Frankfurt remained stable." },
  { id: "t1v15", type: "verb", trend: "flat", word: "stay roughly the same", meaning: "大致維持不變", example: "Temperatures stay roughly the same for the next four months." },
  { id: "t1v16", type: "verb", trend: "flat", word: "fluctuate", meaning: "波動", example: "The number of people emigrating fluctuated." },
  { id: "t1v17", type: "verb", trend: "flat", word: "level off / plateau", meaning: "趨於平緩", example: "The figures levelled off after 2005." },
  // 名詞
  { id: "t1v18", type: "noun", word: "proportion / percentage", meaning: "比例／百分比", example: "A noticeably larger proportion of people aged under 20." },
  { id: "t1v19", type: "noun", word: "figure(s)", meaning: "數據（避免一直說 number）", example: "The equivalent figure for India was only 2%." },
  { id: "t1v20", type: "noun", word: "expenditure / spending", meaning: "支出", example: "Average yearly spending on landlines dropped." },
  { id: "t1v21", type: "noun", word: "peak", meaning: "高峰", example: "Oil prices reached a peak of approximately $130 per barrel." },
  { id: "t1v22", type: "noun", word: "cohort / age bracket", meaning: "組別／年齡層", example: "Each five-year age bracket above this contained a smaller proportion." },
  { id: "t1v23", type: "noun", word: "correlation", meaning: "相關性", example: "A strong correlation (93.6%) is suggested." },
  // 形容詞／副詞
  { id: "t1v24", type: "adj", word: "significant(ly)", meaning: "顯著地", example: "France had a significantly larger percentage of elderly inhabitants." },
  { id: "t1v25", type: "adj", word: "noticeable / noticeably", meaning: "明顯地", example: "It is also noticeable that the figures tend to be fairly similar." },
  { id: "t1v26", type: "adj", word: "dramatic(ally)", meaning: "劇烈地", example: "Japan is expected to see the most dramatic changes." },
  { id: "t1v27", type: "adj", word: "steady / steadily", meaning: "穩定地", example: "The figures increased steadily." },
  { id: "t1v28", type: "adj", word: "gradual(ly)", meaning: "逐漸地", example: "The proportions rose gradually over the next 50 years." },
  { id: "t1v29", type: "adj", word: "marginally / slightly", meaning: "些微地", example: "Playing computer games is marginally more popular." },
  { id: "t1v30", type: "adj", word: "approximately / roughly / just over / just under", meaning: "大約／略高於／略低於", example: "Just over 60% of students are supported by their employers." },
  { id: "t1v31", type: "adj", word: "respectively", meaning: "分別地", example: "The figures were about 25% and 23% respectively." },
  { id: "t1v32", type: "adj", word: "by far the", meaning: "遠遠是最…（用在最高級）", example: "The USA is by far the most successful medal winning nation." },
];

// ============================================================
// Task 2 高分詞彙（來自 Simon 範文解析的詞彙筆記）
// 格式：{ id, word, meaning, usage, topic }
// ============================================================
const TASK2_PHRASES = [
  { id: "t2p01", word: "It is true that…", meaning: "確實…（引言起手式）", usage: "介紹主題最安全的開頭，接著用 While I agree…, I believe… 表明立場", topic: "通用" },
  { id: "t2p02", word: "There could be several reasons why this is the case", meaning: "可能有幾個原因", usage: "2-part question 引言的概括回答", topic: "通用" },
  { id: "t2p03", word: "it is pointless to do", meaning: "做…是沒有意義的", usage: "反駁對方立場", topic: "通用" },
  { id: "t2p04", word: "it is absurd to argue that", meaning: "主張…很荒謬", usage: "強烈反對時使用", topic: "通用" },
  { id: "t2p05", word: "compelling reason", meaning: "強而有力的理由", usage: "= convincing reason", topic: "通用" },
  { id: "t2p06", word: "far outweigh", meaning: "遠遠超過", usage: "the benefits far outweigh the drawbacks", topic: "通用" },
  { id: "t2p07", word: "dismiss ... as ...", meaning: "認為…不重要而不予理會", usage: "we should not dismiss all traditional ideas as irrelevant", topic: "傳統與現代" },
  { id: "t2p08", word: "incompatible", meaning: "不相容的（兩者有根本差異而無法並存）", usage: "traditional values incompatible with the needs of younger people", topic: "傳統與現代" },
  { id: "t2p09", word: "outdated", meaning: "過時的", usage: "some traditional ideas are outdated", topic: "傳統與現代" },
  { id: "t2p10", word: "breadwinner", meaning: "家中負擔生計的人（賺錢的那個）", usage: "more women than ever are the breadwinners in their families", topic: "家庭/性別" },
  { id: "t2p11", word: "gender roles", meaning: "性別角色", usage: "traditional fixed roles of men and women have changed", topic: "家庭/性別" },
  { id: "t2p12", word: "equal rights movements", meaning: "平權運動", usage: "常用在性別議題", topic: "家庭/性別" },
  { id: "t2p13", word: "sacrifice their careers", meaning: "犧牲職涯", usage: "women are not put under pressure to sacrifice their careers", topic: "家庭/性別" },
  { id: "t2p14", word: "assume", meaning: "承擔（責任）", usage: "assume childcare responsibilities（不是「假設」的意思）", topic: "家庭/性別" },
  { id: "t2p15", word: "subsidize / subsidy", meaning: "補貼（動詞／名詞）", usage: "governments should promote local film-making by subsidizing the industry", topic: "政府/藝術" },
  { id: "t2p16", word: "dominate the market", meaning: "主導市場", usage: "foreign productions that currently dominate the market", topic: "政府/藝術" },
  { id: "t2p17", word: "heritage", meaning: "文化遺產", usage: "these artworks represent culture, heritage and history", topic: "政府/藝術" },
  { id: "t2p18", word: "infrastructure", meaning: "基礎建設", usage: "budgets need to be spent on education, healthcare, infrastructure", topic: "政府/藝術" },
  { id: "t2p19", word: "luxury", meaning: "奢侈品／奢侈的享受", usage: "the work of creative artists is a luxury", topic: "政府/藝術" },
  { id: "t2p20", word: "cultural identity", meaning: "文化認同", usage: "traditional styles connect us to our cultural identity", topic: "文化/語言" },
  { id: "t2p21", word: "preserve", meaning: "保存、保護", usage: "governments should preserve languages that are less widely spoken", topic: "文化/語言" },
  { id: "t2p22", word: "extinction / die out", meaning: "滅絕／消失", usage: "動物與語言題都能用", topic: "環境/文化" },
  { id: "t2p23", word: "exploit", meaning: "剝削、過度開發", usage: "we do not need to exploit or destroy every last square metre of land", topic: "環境" },
  { id: "t2p24", word: "natural habitats", meaning: "自然棲地", usage: "protection of natural habitats ensures the survival of wild animals", topic: "環境" },
  { id: "t2p25", word: "stabilise", meaning: "使穩定", usage: "rainforests absorb carbon dioxide and stabilise the Earth's climate", topic: "環境" },
  { id: "t2p26", word: "exhaust fumes / emissions", meaning: "廢氣／排放", usage: "exhaust fumes from vehicles lead to global warming", topic: "環境" },
  { id: "t2p27", word: "devastating", meaning: "毀滅性的", usage: "may have a devastating effect on the planet", topic: "環境" },
  { id: "t2p28", word: "contaminate", meaning: "污染", usage: "waste contaminates the earth and pollutes rivers", topic: "環境" },
  { id: "t2p29", word: "mitigate", meaning: "減輕", usage: "societies can take steps to mitigate these potential problems（mitigate the risk/effects of…）", topic: "社會" },
  { id: "t2p30", word: "anticipate", meaning: "預期、預料", usage: "several related problems can be anticipated", topic: "社會" },
  { id: "t2p31", word: "pension", meaning: "退休金", usage: "more people of retirement age eligible to receive a pension", topic: "社會" },
  { id: "t2p32", word: "tax burden", meaning: "稅務負擔", usage: "an ageing population will mean a greater tax burden for working adults", topic: "社會" },
  { id: "t2p33", word: "deterrent", meaning: "嚇阻（物）", usage: "penalties can act as a deterrent", topic: "犯罪/交通" },
  { id: "t2p34", word: "disciplined", meaning: "守規矩的（obeying the rules）", usage: "drivers become more disciplined and alert", topic: "犯罪/交通" },
  { id: "t2p35", word: "congestion", meaning: "壅塞", usage: "reduce both air pollution and traffic congestion", topic: "城市/交通" },
  { id: "t2p36", word: "curb", meaning: "抑制", usage: "the congestion charge has helped to curb the traffic problem", topic: "城市/交通" },
  { id: "t2p37", word: "affordable / social housing", meaning: "平價住宅／社會住宅", usage: "invest money in the building of affordable housing", topic: "城市" },
  { id: "t2p38", word: "on a volunteer basis", meaning: "以志願的形式（on a … basis 以…為基礎）", usage: "charge on an annual basis：以年為單位收費", topic: "工作/青少年" },
  { id: "t2p39", word: "obliging / oblige", meaning: "強迫", usage: "society has nothing to gain from obliging young people to do unpaid work", topic: "工作/青少年" },
  { id: "t2p40", word: "resentment", meaning: "怨恨（= hate）", usage: "doing this can only lead to resentment amongst young people", topic: "工作/青少年" },
  { id: "t2p41", word: "compulsory", meaning: "強制的", usage: "we should not make this compulsory（compulsory education 義務教育）", topic: "教育" },
  { id: "t2p42", word: "well-educated workforce", meaning: "受過良好教育的勞動力", usage: "This will result in a well-educated workforce, and in turn a more prosperous nation.", topic: "教育" },
  { id: "t2p43", word: "concession", meaning: "讓步／優惠", usage: "I do not believe that any financial concessions should be made", topic: "教育" },
  { id: "t2p44", word: "prospects", meaning: "前景", usage: "This kind of inequality would harm the prospects of others.", topic: "教育/平權" },
  { id: "t2p45", word: "demotivate", meaning: "使失去動力", usage: "inequality would be more likely to demotivate people", topic: "教育/平權" },
  { id: "t2p46", word: "privileged", meaning: "享有特權的", usage: "those from privileged backgrounds", topic: "教育/平權" },
  { id: "t2p47", word: "the odds of success", meaning: "成功的機率", usage: "the odds of success were stacked in favour of…", topic: "通用" },
  { id: "t2p48", word: "a range of / a variety of", meaning: "一系列的／各種的", usage: "a range of other feelings, from excitement to peacefulness", topic: "通用" },
  { id: "t2p49", word: "derive (satisfaction) from", meaning: "從…獲得（滿足感）", usage: "= stem from / come from", topic: "通用" },
  { id: "t2p50", word: "sense of + N", meaning: "…感", usage: "sense of direction 方向感、sense of satisfaction 滿足感、sense of community 社群感", topic: "通用" },
  { id: "t2p51", word: "the majority of / the minority of", meaning: "大多數／少數", usage: "the majority of people would like to be happy in their lives", topic: "通用" },
  { id: "t2p52", word: "virtual worlds", meaning: "虛擬世界", usage: "users are transported into virtual worlds", topic: "科技" },
  { id: "t2p53", word: "addictive", meaning: "使人上癮的", usage: "gaming can be highly addictive", topic: "科技" },
  { id: "t2p54", word: "sedentary lifestyle", meaning: "久坐的生活型態", usage: "the rise in obesity has been linked to the sedentary lifestyle", topic: "科技/健康" },
  { id: "t2p55", word: "logical thinking", meaning: "邏輯思考", usage: "games encourage imagination, concentration and logical thinking", topic: "科技" },
  { id: "t2p56", word: "broaden your horizons", meaning: "開拓視野", usage: "= open your mind，博物館/教育題常用", topic: "教育/旅遊" },
  { id: "t2p57", word: "spectacular", meaning: "壯觀的", usage: "museums are designed to be visually spectacular", topic: "旅遊/文化" },
  { id: "t2p58", word: "delight in", meaning: "非常喜歡（delight in doing sth）", usage: "children delight in singing with others", topic: "音樂/文化" },
  { id: "t2p59", word: "essentially", meaning: "本質上（= basically / fundamentally）", usage: "pop music is essentially a commercial product", topic: "通用" },
  { id: "t2p60", word: "predominant", meaning: "佔主導地位的", usage: "if pop music became so predominant that national styles disappeared", topic: "文化" },
];

// ============================================================
// Simon 的雅思寫作 24 大主題清單（用來檢查自己準備到哪）
// ============================================================
const IELTS_TOPIC_LIST = [
  "Advertising 廣告",
  "Animal Rights 動物權（動物實驗、素食、動物園）",
  "Cities 城市（都市化、城市生活問題）",
  "Crime 犯罪（警察、刑罰/監獄、更生、死刑）",
  "Education 教育（留學、科技、開發中國家教育、高教、在家自學、體罰、單一性別教育、能力分班）",
  "Environment 環境（全球暖化、人類影響、垃圾、回收、核能）",
  "Family 家庭（家庭規模、雙薪父母、對孩子的負面影響、離婚、老人照護）",
  "Gender 性別（性別與教育、性別與工作、家庭角色）",
  "Genetic Engineering 基因工程（正反面、基改食品）",
  "Global Issues 全球議題（開發中國家問題、移民、多元文化社會、全球化）",
  "Government and Society 政府與社會（公共服務、審查制度、公共場所監視器）",
  "Guns and Weapons 槍枝武器（持槍、核武、軍隊）",
  "Health 健康（飲食、運動、公醫制度、私人醫療、另類療法、壓力）",
  "Housing and Architecture 住宅與建築（國宅、老建築、綠建築）",
  "International Language 國際語言（英語作為國際語言）",
  "Money 金錢（金錢與社會、消費主義）",
  "Personal Development 個人發展（幸福、成功、先天或後天）",
  "Sport and Leisure 運動休閒（職業運動、運動員薪水、運動與政治）",
  "Tourism 旅遊（正面、對環境的負面影響、旅遊的未來）",
  "Traditions and Modern Life 傳統與現代（傳統技藝流失、傳統習俗）",
  "Transport 交通（交通問題與解方、大眾運輸、道路安全）",
  "Television, Internet and Mobile Phones 電視網路手機（正反面、網路 vs 報紙書籍）",
  "Water 水（乾淨水的重要、供水、水應該免費、瓶裝水）",
  "Work 工作（一生一職、自雇、失業、工作生活平衡、科技與工作、童工）",
];

// ============================================================
// 口說語料庫（串題用）——基底為空，內容由 Christine 在 App 內新增，
// 存進 data-user.json 的 speakingNotes，啟動時 mergeUserData 併回這個陣列。
// 格式：{ id, core, topics:[可以套用的題目], nouns, verbs, idioms, note }
// ============================================================
const SPEAKING_NOTES = [];

// ============================================================
// 預設週計畫範本（依 Christine 的試算表格式：四科 × 週一～週日 + 其他書籍材料）
// 首頁計畫表用這個當「新增一週」的起手範本
// ============================================================
const PLAN_SKILLS = [
  { id: "listening", label: "🎧 聽力", color: "#2D5BE3" },
  { id: "reading", label: "📖 閱讀", color: "#1A7F4B" },
  { id: "writing", label: "✍️ 寫作", color: "#B45309" },
  { id: "speaking", label: "🎙️ 口說", color: "#C0392B" },
  { id: "material", label: "📚 其他書籍材料", color: "#6B6860" },
];

// 計畫表使用提醒（來自試算表的備註）
const PLAN_TIPS = [
  "可把「計畫」與「實際完成的紀錄」分開看：勾選代表實際完成",
  "適時檢討排定計畫與完成程度的落差",
  "把做題的分數也一併寫上，讓念書進步更有感（沒進步也更警惕自己 xd）",
];

// ============================================================
// 18 週備考大表（v2.1.0 新增）
// 起算 2026-07-20（週一）→ 考試 2026-11-21（週六）＝ 共 18 週，目標總分 7.0
//
// 【內容來源】Christine 的備考指南＋外部 AI 顧問整理的「長跑型」節奏，
//   已依她的實際生活調整：
//   - 平日下班約 19:00、約 00:00 睡 → 每天約 2–2.5 小時
//   - 週三晚上 Cambly（口說）
//   - ⚠️ 週四晚上 21:00 有德文家教 1.5 小時 → 週四「不排任何英文任務」
//     （EGIU 每日一單元是背景習慣，由文法頁的進度棋盤追蹤，不佔計畫格）
//   - 週末保留彈性，只各排 1–2 項
//
// 【四階段】W1–4 建立方法（不限時）→ W5–9 提量＋部分限時 →
//           W10–14 全限時＋模考開始 → W15–18 每週模考＋衝刺
//
// 【使用方式】english.html 的週計畫表在第一次開啟「本週或未來週」時，
//   自動把該週項目帶入 planItems（標記 fromPlan），她只需打勾，不用手動輸入。
//   已帶入的週記錄在 planImportedWeeks（隨進度同步），刪掉的項目不會自己長回來。
//
// 【材料說明】劍橋真題編號（劍10→劍20）照「由舊到新」原則排，實際手邊有哪幾本
//   可自行替換，週數節奏不變。EGIU＝English Grammar in Use（145 Units）：
//   平日 1 單元、假日可 2，每週六快速複習本週單元，W16 完成全部 145。
//
// 欄位：week=該週週一日期（計畫表的 key）、no=第幾週、phase=階段、
//       egiu=本週 EGIU 範圍、items=[[skill, day, text], ...]，day: 0=週一…6=週日
// ============================================================
const IELTS_PLAN_START = '2026-07-20';
const IELTS_PLAN_TOTAL_WEEKS = 18;
const IELTS_STUDY_PLAN = [
  { week: '2026-07-20', no: 1, phase: '第一階段・建立方法（W1–4）', egiu: 'Unit 1–9', items: [
    ['reading', 0, '平行閱讀法五步驟精讀＋劍10 T1 P1 不限時拆解'],
    ['listening', 1, '劍10 T1 S1–S2 精聽訂正＋Shadowing 10分鐘'],
    ['speaking', 2, 'Cambly＋課後把語料丟收集箱'],
    ['writing', 4, 'Simon Task 2 四段結構＋13句法熟讀（先不寫全篇）'],
    ['reading', 5, '劍10 T1 P2 不限時＋拆解檢核'],
    ['writing', 6, 'Task 2 Opinion 模板背誦＋每週回顧'],
    ['material', 5, 'EGIU Unit 1–9（平日1單元、假日可2，週六快速複習）'],
  ]},
  { week: '2026-07-27', no: 2, phase: '第一階段・建立方法（W1–4）', egiu: 'Unit 10–18', items: [
    ['reading', 0, '劍10 T1 P3 不限時＋拆解檢核'],
    ['listening', 1, '劍10 T1 S3–S4 精聽訂正＋Shadowing'],
    ['speaking', 2, 'Cambly＋建立第1份核心語料（書／滑雪…）'],
    ['writing', 4, 'Simon Task 1 結構：改寫題目＋Overview 寫法'],
    ['reading', 5, '劍10 T2 P1 不限時'],
    ['writing', 6, 'Task 2 Discussion 模板＋每週回顧'],
    ['material', 5, 'EGIU Unit 10–18（週六複習）'],
  ]},
  { week: '2026-08-03', no: 3, phase: '第一階段・建立方法（W1–4）', egiu: 'Unit 19–27', items: [
    ['reading', 0, '劍10 T2 P2 不限時＋拆解檢核'],
    ['listening', 1, '劍10 T2 聽力整回不限時訂正＋Shadowing'],
    ['speaking', 2, 'Cambly＋核心語料第2份＋自錄15分鐘'],
    ['writing', 4, 'Task 1 圖表詞彙（Bar／Line）＋範例改寫'],
    ['reading', 5, '劍10 T2 P3 不限時'],
    ['writing', 6, 'Task 2 Problem/Solution 模板＋每週回顧'],
    ['material', 5, 'EGIU Unit 19–27（週六複習）'],
  ]},
  { week: '2026-08-10', no: 4, phase: '第一階段・建立方法（W1–4）', egiu: 'Unit 28–36', items: [
    ['reading', 0, '劍10 T3 P1–P2 不限時（開始加快節奏）'],
    ['listening', 1, '劍10 T3 聽力＋錯因記進練習紀錄'],
    ['speaking', 2, 'Cambly＋自錄15分鐘×1'],
    ['writing', 4, 'Task 2 2-Part 模板＋第一篇不限時 Task 2'],
    ['reading', 5, '劍10 T3 P3＋拆解檢核'],
    ['writing', 6, '訂正本週 Task 2（訂正比多寫一篇有效）＋每週回顧'],
    ['material', 5, 'EGIU Unit 28–36（週六複習）'],
  ]},
  { week: '2026-08-17', no: 5, phase: '第二階段・提量＋部分限時（W5–9）', egiu: 'Unit 37–45', items: [
    ['reading', 0, '劍11 T1 P1 單篇計時20分鐘（開始部分限時）'],
    ['listening', 1, '劍11 T1 聽力整回計時＋完整訂正流程（約90分）'],
    ['speaking', 2, 'Cambly＋核心語料第3份'],
    ['writing', 4, 'Task 1 一篇不限時＋對照範文自我檢查'],
    ['reading', 5, '劍11 T1 P2–P3 不限時'],
    ['writing', 6, 'Task 1 訂正重寫＋每週回顧'],
    ['material', 5, 'EGIU Unit 37–45（週六複習）'],
  ]},
  { week: '2026-08-24', no: 6, phase: '第二階段・提量＋部分限時（W5–9）', egiu: 'Unit 46–54', items: [
    ['reading', 0, '劍11 T2 P1–P2 各計時20分鐘'],
    ['listening', 1, '劍11 T2 聽力計時＋Shadowing'],
    ['speaking', 2, 'Cambly＋自錄15分鐘×2（本週起固定）'],
    ['writing', 4, 'Task 2 一篇不限時（plan 10分鐘要做滿）'],
    ['reading', 5, '劍11 T2 P3＋拆解檢核'],
    ['writing', 6, 'Task 2 訂正＋每週回顧'],
    ['material', 5, 'EGIU Unit 46–54（週六複習）'],
  ]},
  { week: '2026-08-31', no: 7, phase: '第二階段・提量＋部分限時（W5–9）', egiu: 'Unit 55–63', items: [
    ['reading', 0, '劍11 T3 P1–P2 計時'],
    ['listening', 1, '劍11 T3 聽力計時＋回顧錯因 Top 3'],
    ['speaking', 2, 'Cambly＋核心語料第4份'],
    ['writing', 4, 'Task 1 一篇（30分鐘內）'],
    ['reading', 5, '劍11 T4 P1–P2 計時'],
    ['writing', 6, '訂正＋每週回顧'],
    ['material', 5, 'EGIU Unit 55–63（週六複習）'],
  ]},
  { week: '2026-09-07', no: 8, phase: '第二階段・提量＋部分限時（W5–9）', egiu: 'Unit 64–72', items: [
    ['reading', 0, '劍12 T1 P1–P3 每篇20分鐘'],
    ['listening', 1, '劍12 T1 聽力計時訂正'],
    ['speaking', 2, 'Cambly＋自錄（Part 2 計時2分鐘）'],
    ['writing', 4, 'Task 2 一篇 60分鐘內'],
    ['reading', 5, '劍12 T2 閱讀整回（記錄總耗時，不強制60分）'],
    ['writing', 6, 'Task 2 訂正＋每週回顧'],
    ['material', 5, 'EGIU Unit 64–72（週六複習）'],
  ]},
  { week: '2026-09-14', no: 9, phase: '第二階段・提量＋部分限時（W5–9）', egiu: 'Unit 73–81', items: [
    ['reading', 0, '劍12 T3 閱讀整回（記錄總耗時）'],
    ['listening', 1, '劍12 T3 聽力計時＋場景詞整理'],
    ['speaking', 2, 'Cambly＋核心語料第5份'],
    ['writing', 4, 'Task 1 30分鐘限時'],
    ['reading', 5, '劍13 T1 閱讀整回'],
    ['writing', 6, '訂正＋Phase 2 總回顧（列出弱點清單）'],
    ['material', 5, 'EGIU Unit 73–81（週六複習）'],
  ]},
  { week: '2026-09-21', no: 10, phase: '第三階段・全限時＋模考（W10–14）', egiu: 'Unit 82–90', items: [
    ['reading', 0, '劍13 T2 閱讀整回 60分鐘限時（首次全限時）'],
    ['listening', 1, '劍13 T2 聽力整回30分＋90分訂正'],
    ['speaking', 2, 'Cambly＋自錄×2'],
    ['writing', 4, 'Task 2 40分鐘限時（首次）'],
    ['reading', 5, '限時結果檢討＋錯題全部過拆解檢核'],
    ['writing', 6, 'Task 2 訂正重寫＋每週回顧'],
    ['material', 5, 'EGIU Unit 82–90（週六複習）'],
  ]},
  { week: '2026-09-28', no: 11, phase: '第三階段・全限時＋模考（W10–14）', egiu: 'Unit 91–99', items: [
    ['reading', 0, '劍13 T3 閱讀 60分鐘'],
    ['listening', 1, '劍13 T4 聽力30分＋訂正'],
    ['speaking', 2, 'Cambly＋口說模考（Part 1–3 全程錄音）'],
    ['writing', 4, 'Task 1 20分＋Task 2 40分（連寫60分鐘）'],
    ['reading', 5, '錯題整理＋弱題型專練'],
    ['writing', 6, '訂正＋每週回顧'],
    ['material', 5, 'EGIU Unit 91–99（週六複習）'],
  ]},
  { week: '2026-10-05', no: 12, phase: '第三階段・全限時＋模考（W10–14）', egiu: 'Unit 100–108', items: [
    ['reading', 0, '【模考1】劍18 T1 聽力＋閱讀連做 → 成績記進練習紀錄'],
    ['listening', 1, '模考1 聽力完整訂正'],
    ['speaking', 2, 'Cambly＋弱點題型口說練習'],
    ['writing', 4, '【模考1】Task 1＋2 連寫 60分鐘'],
    ['reading', 5, '模考1 閱讀完整訂正＋拆解檢核'],
    ['writing', 6, '模考1 總檢討（四科弱點清單）＋每週回顧'],
    ['material', 5, 'EGIU Unit 100–108（週六複習）'],
  ]},
  { week: '2026-10-12', no: 13, phase: '第三階段・全限時＋模考（W10–14）', egiu: 'Unit 109–117', items: [
    ['reading', 0, '針對模考1弱點：弱題型專練（劍14 挑題）'],
    ['listening', 1, '弱 Section 專練＋場景詞'],
    ['speaking', 2, 'Cambly＋自錄×2'],
    ['writing', 4, 'Task 2 弱題型一篇 40分鐘'],
    ['reading', 5, '劍14 T1 閱讀 60分鐘'],
    ['writing', 6, '訂正＋每週回顧'],
    ['material', 5, 'EGIU Unit 109–117（週六複習）'],
  ]},
  { week: '2026-10-19', no: 14, phase: '第三階段・全限時＋模考（W10–14）', egiu: 'Unit 118–126', items: [
    ['reading', 0, '劍14 T2 閱讀 60分鐘'],
    ['listening', 1, '劍14 T2 聽力30分＋訂正'],
    ['speaking', 2, 'Cambly＋口說模考第2次'],
    ['writing', 4, '【模考2】Task 1＋2 連寫 60分鐘'],
    ['reading', 5, '【模考2】劍18 T2 聽力＋閱讀連做'],
    ['writing', 6, '模考2 總檢討＋每週回顧'],
    ['material', 5, 'EGIU Unit 118–126（週六複習）'],
  ]},
  { week: '2026-10-26', no: 15, phase: '第四階段・每週模考衝刺（W15–18）', egiu: 'Unit 127–135', items: [
    ['reading', 0, '模考2 弱點補強專練'],
    ['listening', 1, '劍15 T1 聽力＋訂正'],
    ['speaking', 2, 'Cambly＋串題總演練（一份語料對五題）'],
    ['writing', 4, 'Task 1 各圖表模板總複習＋一篇 20分鐘'],
    ['reading', 5, '【模考3】劍19 T1 聽力＋閱讀'],
    ['writing', 6, '模考3 檢討＋每週回顧'],
    ['material', 5, 'EGIU Unit 127–135（週六複習）'],
  ]},
  { week: '2026-11-02', no: 16, phase: '第四階段・每週模考衝刺（W15–18）', egiu: 'Unit 136–145', items: [
    ['reading', 0, '模考3 弱點專練'],
    ['listening', 1, '劍15 T2 聽力 30分鐘'],
    ['speaking', 2, 'Cambly＋自錄（考試流程完整跑一次）'],
    ['writing', 4, '【模考4】Task 1＋2 連寫 60分鐘'],
    ['reading', 5, '【模考4】劍19 T2 聽力＋閱讀'],
    ['writing', 6, '模考4 檢討＋每週回顧'],
    ['material', 5, 'EGIU Unit 136–145（週六複習）→ 145 全部完成！'],
  ]},
  { week: '2026-11-09', no: 17, phase: '第四階段・每週模考衝刺（W15–18）', egiu: '總複習（只翻答錯過的單元）', items: [
    ['reading', 0, '【模考5】劍20 T1 聽力＋閱讀（最後一次全模考）'],
    ['listening', 1, '模考5 訂正＋聽力錯因總瀏覽'],
    ['speaking', 2, 'Cambly＋考場流程演練'],
    ['writing', 4, 'Task 2 高頻主題 plan 練習×3（只 plan 不寫全篇）'],
    ['reading', 5, '拆解檢核紀錄總回顧（看平均分與猜題率）'],
    ['writing', 6, '模考5 檢討＋每週回顧'],
    ['material', 5, 'EGIU：只翻答錯過的單元'],
  ]},
  { week: '2026-11-16', no: 18, phase: '考前週（11/21 週六考試）', egiu: '考前休息，不排新單元', items: [
    ['reading', 0, '錯題本／錯因 Top 3 總複習（不做新題）'],
    ['listening', 1, '輕量：Shadowing＋場景詞掃讀'],
    ['speaking', 2, 'Cambly（考前最後調整）＋語料快速過一遍'],
    ['writing', 4, '模板默寫一次（Task 1＋2 各題型開頭結尾）'],
    ['reading', 5, '準備考試用品、早睡；平行閱讀法五步驟心中過一遍'],
    ['writing', 6, '11/21（六）考試日！加油 🎉'],
  ]},
];

// ============================================================
// Paraphrase Bank／改寫語料庫（v2.2.0，英文 App 雅思口說區）
//
// 【設計】依 IELTS 語境整理「一個核心概念 → 多個可替換表達」，並標語域(register)。
// - 固定資料放這裡（IELTS_PARAPHRASES）；收集箱新增的走 data-user.json 的 paraphrases，
//   由 core.js mergeUserData() 以 id 去重合併進來（新增 id 前綴 upara_，永不衝突）。
// - register 只有三值：
//     spoken  = 主要適合口說／較自然的會話
//     formal  = 主要適合正式寫作／較正式語境
//     neutral = 口說與寫作通常都可使用
// - ⚠️ 近義詞不是所有句子都能互換！每筆的 note 與例句保留使用限制，出題也靠這個防呆。
//
// 【出題邏輯（純本機，離線可用）】不用「同概念其他表達」當干擾項（它們往往都對），
//   而是從「其他 concept」抽 register 相同、語意不符的表達當干擾項；湊不到 2 個就跳題。
//   詳見 english.html 的 paraphrasePracticePool() / nextParaphraseQuestion()。
// ============================================================
const PARAPHRASE_TOPICS = [
  { id: 'holidays and travel', label: '🧳 旅遊假期' },
  { id: 'work', label: '💼 工作' },
  { id: 'feelings and opinions', label: '💭 感受與觀點' },
  { id: 'cost and value', label: '💰 費用與價值' },
  { id: 'frequency', label: '🔁 頻率' },
  { id: 'environment', label: '🌱 環境' },
];
const PARAPHRASE_REGISTERS = ['spoken', 'formal', 'neutral'];

const IELTS_PARAPHRASES = [
  // ===== cost and value =====
  { id: "para_expensive_001", concept: "very expensive", topics: ["cost and value", "holidays and travel"],
    original: "The trip was very expensive.",
    speakingExample: "The whole trip cost an arm and a leg.",
    writingExample: "The trip was relatively costly compared with other options.",
    expressions: [
      { text: "cost an arm and a leg", register: "spoken", note: "口語慣用語，很生動；不適合正式寫作。" },
      { text: "cost a fortune", register: "spoken", note: "口語誇飾，強調花很多錢。" },
      { text: "costly", register: "formal", note: "適合正式寫作，中性偏正式。" },
      { text: "pricey", register: "spoken", note: "口語，比 expensive 更隨意。" },
    ] },
  { id: "para_cheap_001", concept: "cheap / good value", topics: ["cost and value"],
    original: "The hotel was cheap.",
    speakingExample: "The hotel was really good value for money.",
    writingExample: "The accommodation was reasonably priced.",
    expressions: [
      { text: "good value for money", register: "neutral", note: "正面說法，比 cheap 得體，口說寫作皆可。" },
      { text: "reasonably priced", register: "formal", note: "適合寫作，中性禮貌。" },
      { text: "affordable", register: "neutral", note: "口說寫作皆可，強調負擔得起。" },
      { text: "a bargain", register: "spoken", note: "口語，指划算的好康。" },
    ] },
  { id: "para_afford_001", concept: "can barely afford", topics: ["cost and value", "work"],
    original: "I could barely afford it.",
    speakingExample: "It was so pricey I could barely afford it.",
    writingExample: "The cost was almost beyond my budget.",
    expressions: [
      { text: "could barely afford", register: "neutral", note: "口說寫作皆可。" },
      { text: "beyond my budget", register: "formal", note: "偏正式，適合寫作。" },
      { text: "stretch my budget", register: "spoken", note: "口語，指預算被撐到極限。" },
    ] },

  // ===== holidays and travel =====
  { id: "para_relax_001", concept: "relax / de-stress", topics: ["holidays and travel", "feelings and opinions"],
    original: "I go on holiday to relax.",
    speakingExample: "I travel mainly to unwind after a busy period at work.",
    writingExample: "Many people take holidays in order to unwind and recharge.",
    expressions: [
      { text: "unwind", register: "neutral", note: "比 relax 更道地，口說寫作皆可；常搭 after work。" },
      { text: "recharge", register: "neutral", note: "指補充精力，常與 unwind 連用。" },
      { text: "de-stress", register: "spoken", note: "口語，強調釋放壓力。" },
      { text: "wind down", register: "spoken", note: "口語片語動詞，指慢慢放鬆下來。" },
    ] },
  { id: "para_scenery_001", concept: "see something different / new surroundings", topics: ["holidays and travel"],
    original: "I like to see something different.",
    speakingExample: "I love travelling because I get to enjoy a change of scenery.",
    writingExample: "A holiday offers a welcome change of scenery.",
    expressions: [
      { text: "a change of scenery", register: "neutral", note: "指換個環境；口說寫作皆可。注意這是名詞片語。" },
      { text: "a change of pace", register: "neutral", note: "指換個生活步調，語意稍不同（步調≠風景），別當完全等義。" },
    ] },
  { id: "para_broaden_001", concept: "learn about new cultures", topics: ["holidays and travel", "feelings and opinions"],
    original: "Travelling helps me learn about new cultures.",
    speakingExample: "Travelling really helps me broaden my horizons.",
    writingExample: "Travelling abroad can broaden one's horizons.",
    expressions: [
      { text: "broaden my horizons", register: "neutral", note: "指開闊眼界；口說寫作皆可。所有格隨主詞變（my/one's）。" },
      { text: "gain a new perspective", register: "formal", note: "偏正式，指獲得新視角。" },
      { text: "experience different cultures", register: "neutral", note: "較直白的中性說法。" },
    ] },
  { id: "para_holiday_001", concept: "holiday / time away from work", topics: ["holidays and travel", "work"],
    original: "I need a holiday.",
    speakingExample: "I really need some time off work.",
    writingExample: "Employees are entitled to regular periods of paid leave.",
    expressions: [
      { text: "vacation", register: "neutral", note: "美式用語；英式 IELTS 情境 holiday 更常見，但 vacation 也接受。" },
      { text: "time off work", register: "spoken", note: "口語，指請假／不上班的時間。" },
      { text: "a break from work", register: "spoken", note: "口語，強調暫時脫離工作。" },
      { text: "annual leave", register: "formal", note: "正式用語（年假），適合寫作或正式口說。" },
    ] },
  { id: "para_cuisine_001", concept: "food from a particular culture", topics: ["holidays and travel", "feelings and opinions"],
    original: "I like food from other countries.",
    speakingExample: "One of my favourite things about travelling is trying the local cuisine.",
    writingExample: "Sampling local cuisine is a highlight of overseas travel.",
    expressions: [
      { text: "cuisine", register: "formal", note: "指某文化的整體飲食風格，比 food 正式；不可用於指單一道菜。" },
      { text: "local delicacies", register: "neutral", note: "指當地特色美食（尤指珍稀或特別的）。" },
    ] },

  // ===== feelings and opinions =====
  { id: "para_contemplate_001", concept: "think deeply about something", topics: ["feelings and opinions"],
    original: "I like to think about things carefully.",
    speakingExample: "I often take time to contemplate my future plans.",
    writingExample: "It is worth contemplating the long-term consequences.",
    expressions: [
      { text: "contemplate", register: "formal", note: "偏正式，指深思；後可接名詞或動名詞。口語用會顯得較文謅謅。" },
      { text: "reflect on", register: "neutral", note: "指回顧省思；口說寫作皆可。" },
      { text: "mull over", register: "spoken", note: "口語片語，指反覆思量。" },
    ] },
  { id: "para_notmention_001", concept: "in addition / and also", topics: ["feelings and opinions"],
    original: "It is cheap, and it is also convenient.",
    speakingExample: "It's affordable, not to mention really convenient.",
    writingExample: "The policy is cost-effective; in addition, it is easy to implement.",
    expressions: [
      { text: "not to mention", register: "spoken", note: "口語連接語，用來追加一個更強的點；後接名詞片語，別接完整子句。" },
      { text: "in addition", register: "formal", note: "適合寫作的連接詞，句首用，後加逗號。" },
      { text: "on top of that", register: "spoken", note: "口語，指此外、加上這點。" },
      { text: "furthermore", register: "formal", note: "正式書面連接詞。" },
    ] },
  { id: "para_opinion_001", concept: "in my opinion", topics: ["feelings and opinions"],
    original: "In my opinion, it is a good idea.",
    speakingExample: "If you ask me, it's definitely worth it.",
    writingExample: "From my perspective, the benefits outweigh the drawbacks.",
    expressions: [
      { text: "if you ask me", register: "spoken", note: "口語，引出個人看法；不適合正式寫作。" },
      { text: "from my perspective", register: "formal", note: "適合寫作，比 in my opinion 更有變化。" },
      { text: "as far as I'm concerned", register: "neutral", note: "口說寫作皆可，語氣稍強。" },
    ] },
  { id: "para_enjoy_001", concept: "really enjoy / love doing", topics: ["feelings and opinions"],
    original: "I really like hiking.",
    speakingExample: "I'm really into hiking these days.",
    writingExample: "Hiking is one of my greatest passions.",
    expressions: [
      { text: "be really into", register: "spoken", note: "口語，指很熱衷某事；後接名詞或動名詞。" },
      { text: "be keen on", register: "neutral", note: "口說寫作皆可，指熱衷／喜愛。" },
      { text: "have a passion for", register: "formal", note: "偏正式，語氣較強。" },
    ] },

  // ===== work =====
  { id: "para_busy_001", concept: "very busy at work", topics: ["work", "feelings and opinions"],
    original: "I am very busy at work.",
    speakingExample: "I've been snowed under at work lately.",
    writingExample: "Employees often have a heavy workload during peak periods.",
    expressions: [
      { text: "snowed under", register: "spoken", note: "口語慣用語，指被工作淹沒；不適合正式寫作。" },
      { text: "have a heavy workload", register: "formal", note: "適合寫作的中性說法。" },
      { text: "swamped", register: "spoken", note: "口語，指忙翻了。" },
    ] },
  { id: "para_challenging_001", concept: "difficult / challenging", topics: ["work", "feelings and opinions"],
    original: "My job is difficult.",
    speakingExample: "My job can be pretty demanding at times.",
    writingExample: "The role is intellectually challenging.",
    expressions: [
      { text: "demanding", register: "neutral", note: "指要求高、耗費心力；口說寫作皆可，比 difficult 得體。" },
      { text: "challenging", register: "neutral", note: "中性偏正面，指有挑戰性（不全是負面）。" },
      { text: "tough", register: "spoken", note: "口語，指辛苦、難搞。" },
    ] },
  { id: "para_rewarding_001", concept: "a job that gives satisfaction", topics: ["work", "feelings and opinions"],
    original: "My job makes me feel good.",
    speakingExample: "My job is really rewarding, even when it's hard.",
    writingExample: "Teaching is widely regarded as a rewarding profession.",
    expressions: [
      { text: "rewarding", register: "neutral", note: "指有成就感的；口說寫作皆可（注意：指心理回報，不是薪水高）。" },
      { text: "fulfilling", register: "formal", note: "偏正式，指讓人有滿足感的。" },
    ] },

  // ===== frequency =====
  { id: "para_often_001", concept: "as often as possible", topics: ["frequency", "holidays and travel"],
    original: "I travel whenever I can.",
    speakingExample: "I try to travel as often as I can.",
    writingExample: "People should exercise as frequently as possible.",
    expressions: [
      { text: "as often as I can", register: "spoken", note: "口語自然說法；主詞可換（as often as they can 等）。" },
      { text: "as frequently as possible", register: "formal", note: "適合寫作，比較正式。" },
      { text: "whenever I get the chance", register: "spoken", note: "口語，指一有機會就。" },
    ] },
  { id: "para_sometimes_001", concept: "sometimes / occasionally", topics: ["frequency"],
    original: "I sometimes go to the gym.",
    speakingExample: "I go to the gym every now and then.",
    writingExample: "People occasionally overlook the long-term effects.",
    expressions: [
      { text: "every now and then", register: "spoken", note: "口語，指偶爾、不定期。" },
      { text: "occasionally", register: "neutral", note: "口說寫作皆可。" },
      { text: "from time to time", register: "neutral", note: "口說寫作皆可，指時不時。" },
    ] },
  { id: "para_usually_001", concept: "usually / most of the time", topics: ["frequency"],
    original: "I usually stay at home.",
    speakingExample: "I tend to stay in most of the time.",
    writingExample: "People generally prefer convenience over cost.",
    expressions: [
      { text: "tend to", register: "neutral", note: "指傾向於（習慣性）；口說寫作皆可，後接原形動詞。" },
      { text: "most of the time", register: "spoken", note: "口語，指大部分時候。" },
      { text: "generally", register: "formal", note: "適合寫作的副詞。" },
    ] },

  // ===== environment =====
  { id: "para_litter_001", concept: "rubbish / litter（用法不同，勿混用）", topics: ["environment"],
    original: "There is a lot of rubbish on the street.",
    speakingExample: "People shouldn't drop litter in the park.",
    writingExample: "Littering in public spaces is a persistent problem.",
    expressions: [
      { text: "litter", register: "neutral", note: "⚠️ 與 rubbish 不完全等義！litter 專指「亂丟在公共場所的垃圾」，也可當動詞（drop litter／littering）。不可代換所有 rubbish（家裡的垃圾不叫 litter）。" },
      { text: "rubbish", register: "neutral", note: "英式泛指垃圾（不可數）；美式常用 trash/garbage。" },
      { text: "waste", register: "formal", note: "偏正式，指廢棄物（工業/家庭），寫作常用。" },
    ] },
  { id: "para_pollution_001", concept: "cause pollution / harm the environment", topics: ["environment"],
    original: "Cars cause a lot of pollution.",
    speakingExample: "Cars give off a lot of pollution.",
    writingExample: "Vehicles emit significant amounts of greenhouse gases.",
    expressions: [
      { text: "give off", register: "spoken", note: "口語片語動詞，指排放（氣體/味道）。" },
      { text: "emit", register: "formal", note: "正式用語，適合寫作；後接 emissions/gases。" },
      { text: "harm the environment", register: "neutral", note: "中性直白，口說寫作皆可。" },
    ] },
  { id: "para_reduce_001", concept: "reduce / cut down", topics: ["environment", "cost and value"],
    original: "We should reduce waste.",
    speakingExample: "We should cut down on single-use plastic.",
    writingExample: "Governments should reduce carbon emissions.",
    expressions: [
      { text: "cut down on", register: "spoken", note: "口語片語動詞，指減少（用量）；後接名詞。" },
      { text: "reduce", register: "neutral", note: "口說寫作皆可，中性。" },
      { text: "curb", register: "formal", note: "正式用語，指抑制／遏止（成長、排放）。" },
    ] },
  { id: "para_sustainable_001", concept: "environmentally friendly", topics: ["environment"],
    original: "This product is good for the environment.",
    speakingExample: "This packaging is really eco-friendly.",
    writingExample: "Sustainable practices are essential for long-term development.",
    expressions: [
      { text: "eco-friendly", register: "neutral", note: "口說寫作皆可，指環保的。" },
      { text: "sustainable", register: "formal", note: "偏正式，指可永續的（雅思環境題高頻）。" },
      { text: "green", register: "spoken", note: "口語，指環保的（green energy 等）。" },
    ] },
];
