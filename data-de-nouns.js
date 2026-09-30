// ============================================================
// data-de-nouns.js — 德文名詞字典（性別 + 複數）
// 建立：2026-09-04（v1.0.0，第 1 批：A1 第二課／第三課講義 + 8/20、8/27 課堂筆記）
//
// 【這個檔案是什麼】german.html 的「名詞查詢」用的參考字典。
//   和 data.js 的 GERMAN_VOCABULARY 分開，理由有兩個：
//   ① GERMAN_VOCABULARY 是「我課堂上遇到的字」，會進單字卡複習排程；
//      這裡是「A1 參考字典」，只給查詢用，不進複習池（否則會突然多出幾百張卡）。
//   ② data.js 已經很大，名詞字典預計會長到 300 筆以上，分開比較好管理。
//
// 【欄位】
//   article  der/die/das
//   plural   複數主格「完整單字」（不是 -e / -¨er 這種代碼，避免變音推錯）
//            null = 不可數／通常無複數形（UI 顯示「無複數形」）
//   topic    主題分類（查詢頁的篩選用）
//   src      來源：L2/L3 = 第二課／第三課講義，note = 課堂筆記，A1 = 標準 A1 詞表
//   verify   true = 複數形我沒有百分之百把握，UI 會標 ⚠️，請家教核對
//   note     陷阱提醒（選填）
//
// 【維護規則】只由對話中的 AI 批次更新，App 不改寫此檔（同 data.js 的鐵則）。
// ============================================================

const GERMAN_NOUNS = [
  // ===== 家庭 Familie（第二課）=====
  { id: "dn001", word: "Vater", article: "der", plural: "Väter", meaning: "父親", topic: "家庭", src: "L2", verify: false, note: "不規則複數：變音 a→ä" },
  { id: "dn002", word: "Mutter", article: "die", plural: "Mütter", meaning: "母親", topic: "家庭", src: "L2", verify: false, note: "-er 結尾卻是陰性，是 -er 規則的著名反例" },
  { id: "dn003", word: "Eltern", article: "die", plural: "Eltern", meaning: "父母", topic: "家庭", src: "L2", verify: false, note: "只有複數形，沒有單數。要講一位時用 der Vater／die Mutter／ein Elternteil" },
  { id: "dn004", word: "Elternteil", article: "der", plural: "Elternteile", meaning: "父母其中一人", topic: "家庭", src: "L2", verify: true, note: "Duden 收 der 也收 das，der 較常見" },
  { id: "dn005", word: "Mann", article: "der", plural: "Männer", meaning: "男人、丈夫", topic: "家庭", src: "L2", verify: false, note: "不規則複數：變音＋-er" },
  { id: "dn006", word: "Frau", article: "die", plural: "Frauen", meaning: "女人、太太", topic: "家庭", src: "L2", verify: false },
  { id: "dn007", word: "Kind", article: "das", plural: "Kinder", meaning: "小孩", topic: "家庭", src: "L2", verify: false, note: "中性：德文歷史上小孩被視為「物」而非男/女性" },
  { id: "dn008", word: "Schwester", article: "die", plural: "Schwestern", meaning: "姐妹", topic: "家庭", src: "L2", verify: false, note: "又一個 -er 結尾的陰性名詞" },
  { id: "dn009", word: "Bruder", article: "der", plural: "Brüder", meaning: "兄弟", topic: "家庭", src: "A1", verify: false },
  { id: "dn010", word: "Familie", article: "die", plural: "Familien", meaning: "家庭", topic: "家庭", src: "L2", verify: false },
  { id: "dn011", word: "Foto", article: "das", plural: "Fotos", meaning: "照片", topic: "家庭", src: "L2", verify: false },
  { id: "dn012", word: "Familienfoto", article: "das", plural: "Familienfotos", meaning: "全家福", topic: "家庭", src: "L2", verify: false, note: "複合名詞（Kompositum）：性別由最後一個名詞決定，Foto 是中性 → das Familienfoto" },

  // ===== 職業 Berufe（第二課）=====
  { id: "dn013", word: "Beruf", article: "der", plural: "Berufe", meaning: "職業", topic: "職業", src: "L2", verify: false, note: "Was sind Sie von Beruf?（您的職業是什麼？）" },
  { id: "dn014", word: "Ingenieur", article: "der", plural: "Ingenieure", meaning: "工程師（男）", topic: "職業", src: "L2", verify: false, note: "-eur 是法文外來字尾，唸 [ø:ɐ]" },
  { id: "dn015", word: "Ingenieurin", article: "die", plural: "Ingenieurinnen", meaning: "工程師（女）", topic: "職業", src: "L2", verify: false },
  { id: "dn016", word: "Lehrer", article: "der", plural: "Lehrer", meaning: "老師（男）", topic: "職業", src: "L2", verify: false, note: "單複數同形，只看冠詞：der Lehrer / die Lehrer" },
  { id: "dn017", word: "Lehrerin", article: "die", plural: "Lehrerinnen", meaning: "老師（女）", topic: "職業", src: "L2", verify: false },
  { id: "dn018", word: "Student", article: "der", plural: "Studenten", meaning: "大學生（男）", topic: "職業", src: "L2", verify: false, note: "職業不一定是 -er 結尾，Student/Polizist/Ingenieur 都不是" },
  { id: "dn019", word: "Studentin", article: "die", plural: "Studentinnen", meaning: "大學生（女）", topic: "職業", src: "L2", verify: false },
  { id: "dn020", word: "Arzt", article: "der", plural: "Ärzte", meaning: "醫師（男）", topic: "職業", src: "L2", verify: false },
  { id: "dn021", word: "Ärztin", article: "die", plural: "Ärztinnen", meaning: "醫師（女）", topic: "職業", src: "L2", verify: false, note: "陰性不是 Arztin，字根也要變音：Ärztin" },
  { id: "dn022", word: "Koch", article: "der", plural: "Köche", meaning: "廚師（男）", topic: "職業", src: "L2", verify: false },
  { id: "dn023", word: "Köchin", article: "die", plural: "Köchinnen", meaning: "廚師（女）", topic: "職業", src: "L2", verify: false },
  { id: "dn024", word: "Verkäufer", article: "der", plural: "Verkäufer", meaning: "店員（男）", topic: "職業", src: "L2", verify: false },
  { id: "dn025", word: "Verkäuferin", article: "die", plural: "Verkäuferinnen", meaning: "店員（女）", topic: "職業", src: "L2", verify: false },
  { id: "dn026", word: "Hausfrau", article: "die", plural: "Hausfrauen", meaning: "家庭主婦", topic: "職業", src: "L2", verify: false },
  { id: "dn027", word: "Polizist", article: "der", plural: "Polizisten", meaning: "警察（男）", topic: "職業", src: "L2", verify: false, note: "-ist 結尾一律陽性" },

  // ===== 物品 Dinge（第二課）=====
  { id: "dn028", word: "Buch", article: "das", plural: "Bücher", meaning: "書", topic: "物品", src: "L2", verify: false, note: "不規則複數：變音＋-er" },
  { id: "dn029", word: "Kugelschreiber", article: "der", plural: "Kugelschreiber", meaning: "原子筆", topic: "物品", src: "L2", verify: false, note: "口語常簡稱 der Kuli" },
  { id: "dn030", word: "Stift", article: "der", plural: "Stifte", meaning: "筆", topic: "物品", src: "L2", verify: false },
  { id: "dn031", word: "Tasche", article: "die", plural: "Taschen", meaning: "包包、口袋", topic: "物品", src: "L2", verify: false },
  { id: "dn032", word: "Medikament", article: "das", plural: "Medikamente", meaning: "藥", topic: "物品", src: "L2", verify: false, note: "-ment 結尾一律中性；Medikamente nehmen ＝吃藥" },

  // ===== 抽象與感受（第二課 haben 固定搭配）=====
  { id: "dn033", word: "Hunger", article: "der", plural: null, meaning: "飢餓", topic: "抽象/感受", src: "L2", verify: false, note: "Ich habe Hunger.（我肚子餓）固定搭配不加冠詞" },
  { id: "dn034", word: "Durst", article: "der", plural: null, meaning: "口渴", topic: "抽象/感受", src: "L2", verify: false, note: "Ich habe Durst.（我口渴）" },
  { id: "dn035", word: "Angst", article: "die", plural: "Ängste", meaning: "害怕", topic: "抽象/感受", src: "L2", verify: false, note: "Ich habe Angst.（我害怕）" },
  { id: "dn036", word: "Frage", article: "die", plural: "Fragen", meaning: "問題", topic: "抽象/感受", src: "L2", verify: false, note: "Ich habe eine Frage.（我有一個問題）" },
  { id: "dn037", word: "Glück", article: "das", plural: null, meaning: "幸運、幸福", topic: "抽象/感受", src: "L2", verify: false, note: "Ich habe Glück.（我很幸運）" },
  { id: "dn038", word: "Zeit", article: "die", plural: "Zeiten", meaning: "時間", topic: "抽象/感受", src: "L2", verify: false, note: "Ich habe keine Zeit.（我沒有時間）／sich Zeit nehmen ＝撥出時間" },
  { id: "dn039", word: "Platz", article: "der", plural: "Plätze", meaning: "座位、位置、廣場", topic: "抽象/感受", src: "L2", verify: false, note: "Nehmen Sie Platz!（請坐）" },
  { id: "dn040", word: "Urlaub", article: "der", plural: "Urlaube", meaning: "假期", topic: "抽象/感受", src: "L2", verify: true, note: "複數極少用；Urlaub machen ＝渡假" },
  { id: "dn041", word: "Ratschlag", article: "der", plural: "Ratschläge", meaning: "建議", topic: "抽象/感受", src: "note", verify: false },
  { id: "dn042", word: "Beispiel", article: "das", plural: "Beispiele", meaning: "例子", topic: "抽象/感受", src: "note", verify: false, note: "zum Beispiel ＝ z. B.（舉例來說）" },
  { id: "dn043", word: "Mitte", article: "die", plural: null, meaning: "中間、中央", topic: "抽象/感受", src: "note", verify: true, note: "複數 die Mitten 極少用" },

  // ===== 交通（第二課 nehmen 搭配 + 8/20 筆記）=====
  { id: "dn044", word: "Bus", article: "der", plural: "Busse", meaning: "公車", topic: "交通", src: "L2", verify: false, note: "den Bus nehmen ＝搭公車／Ich fahre mit dem Bus.（用 Dativ）" },
  { id: "dn045", word: "Zug", article: "der", plural: "Züge", meaning: "火車", topic: "交通", src: "L2", verify: false, note: "den Zug nehmen ＝搭火車" },

  // ===== 語言與溝通（第二課 + 8/20 筆記）=====
  { id: "dn046", word: "Sprache", article: "die", plural: "Sprachen", meaning: "語言", topic: "語言與溝通", src: "L2", verify: false, note: "語言名稱本身前面不加冠詞：Ich spreche Deutsch.（不是 das Deutsch）" },
  { id: "dn047", word: "Musik", article: "die", plural: null, meaning: "音樂", topic: "語言與溝通", src: "L2", verify: false, note: "-ik 結尾傾向陰性；über Musik sprechen ＝談論音樂" },

  // ===== 學業（第二課）=====
  { id: "dn048", word: "Maschinenbau", article: "der", plural: null, meaning: "機械工程", topic: "學業", src: "L2", verify: false, note: "複合名詞：Maschine ＋ Bau，der Bau 決定性別" },
  { id: "dn049", word: "Studiengebühr", article: "die", plural: "Studiengebühren", meaning: "學費", topic: "學業", src: "L2", verify: false, note: "實際上通常用複數 die Studiengebühren" },
  { id: "dn050", word: "Universität", article: "die", plural: "Universitäten", meaning: "大學", topic: "學業", src: "note", verify: false, note: "-tät 結尾一律陰性；口語簡稱 die Uni。地點用 an der Universität" },
  { id: "dn051", word: "Bibliothek", article: "die", plural: "Bibliotheken", meaning: "圖書館", topic: "學業", src: "note", verify: false, note: "地點是 in der Bibliothek（陰性用 in der，不是 im）" },

  // ===== 其他（第二課）=====
  { id: "dn052", word: "Tür", article: "die", plural: "Türen", meaning: "門", topic: "物品", src: "L2", verify: false, note: "Schließen Sie die Tür!（請關門）" },
  { id: "dn053", word: "Bahnhof", article: "der", plural: "Bahnhöfe", meaning: "火車站", topic: "地點", src: "L2", verify: false },

  // ===== 天氣 Wetter（第三課 + 8/27 筆記）=====
  { id: "dn054", word: "Wetter", article: "das", plural: null, meaning: "天氣", topic: "天氣", src: "L3", verify: false, note: "Wie ist das Wetter?（天氣怎麼樣？）" },
  { id: "dn055", word: "Wetterbericht", article: "der", plural: "Wetterberichte", meaning: "天氣預報", topic: "天氣", src: "L3", verify: false },
  { id: "dn056", word: "Wettervorhersage", article: "die", plural: "Wettervorhersagen", meaning: "天氣預報", topic: "天氣", src: "note", verify: false, note: "vorhersagen（預言）＝ vor ＋ sagen；名詞化後是陰性 die Vorhersage" },
  { id: "dn057", word: "Wetterstation", article: "die", plural: "Wetterstationen", meaning: "氣象站", topic: "天氣", src: "note", verify: false, note: "-tion 結尾一律陰性" },
  { id: "dn058", word: "Wetterkarte", article: "die", plural: "Wetterkarten", meaning: "氣象圖", topic: "天氣", src: "note", verify: false },
  { id: "dn059", word: "Wetteränderung", article: "die", plural: "Wetteränderungen", meaning: "天氣變化", topic: "天氣", src: "note", verify: false, note: "ändern（改變）→ -ung 名詞化，-ung 結尾一律陰性" },
  { id: "dn060", word: "Temperatur", article: "die", plural: "Temperaturen", meaning: "溫度", topic: "天氣", src: "L3", verify: false, note: "Wie ist die Temperatur?／Wie viel Grad sind es?" },
  { id: "dn061", word: "Sonne", article: "die", plural: "Sonnen", meaning: "太陽", topic: "天氣", src: "L3", verify: false, note: "Die Sonne scheint.（出太陽）" },
  { id: "dn062", word: "Sturm", article: "der", plural: "Stürme", meaning: "暴風、風暴", topic: "天氣", src: "L3", verify: false, note: "Es gibt heute Sturm.（今天有暴風）" },
  { id: "dn063", word: "Hagel", article: "der", plural: null, meaning: "冰雹", topic: "天氣", src: "L3", verify: false },
  { id: "dn064", word: "Regen", article: "der", plural: null, meaning: "雨", topic: "天氣", src: "L3", verify: false, note: "名詞 der Regen ≠ 動詞 regnen。「正在下雨」是 Es regnet.，不是 Es ist Regen." },
  { id: "dn065", word: "Schnee", article: "der", plural: null, meaning: "雪", topic: "天氣", src: "L3", verify: false, note: "「正在下雪」是 Es schneit.，不是 Der Schnee schneit." },
  { id: "dn066", word: "Wind", article: "der", plural: "Winde", meaning: "風", topic: "天氣", src: "L3", verify: false },
  { id: "dn067", word: "Wolke", article: "die", plural: "Wolken", meaning: "雲", topic: "天氣", src: "L3", verify: false },
  { id: "dn068", word: "Nebel", article: "der", plural: "Nebel", meaning: "霧", topic: "天氣", src: "L3", verify: false, note: "單複數同形；形容詞是 neblig（有霧的）" },
  { id: "dn069", word: "Gewitter", article: "das", plural: "Gewitter", meaning: "雷雨、雷暴", topic: "天氣", src: "L3", verify: false, note: "Ge- 前綴傾向中性，這裡符合" },
  { id: "dn070", word: "Himmel", article: "der", plural: "Himmel", meaning: "天空", topic: "天氣", src: "L3", verify: false },
  { id: "dn071", word: "Grad", article: "der", plural: "Grade", meaning: "度（溫度）", topic: "天氣", src: "L3", verify: false, note: "講溫度時不變複數：Es sind 23 Grad.（不是 Grade）" },
  { id: "dn072", word: "Minus", article: "das", plural: null, meaning: "負數、負號", topic: "天氣", src: "L3", verify: false, note: "Es sind minus fünf Grad.（零下五度）" },

  // ===== 四季 Jahreszeiten（第三課）=====
  { id: "dn073", word: "Frühling", article: "der", plural: "Frühlinge", meaning: "春天", topic: "四季", src: "L3", verify: false, note: "-ling 結尾一律陽性（früh 早的 ＋ -ling）" },
  { id: "dn074", word: "Sommer", article: "der", plural: "Sommer", meaning: "夏天", topic: "四季", src: "L3", verify: false, note: "形容詞 sommerlich ＝夏日般的" },
  { id: "dn075", word: "Herbst", article: "der", plural: "Herbste", meaning: "秋天", topic: "四季", src: "L3", verify: false },
  { id: "dn076", word: "Winter", article: "der", plural: "Winter", meaning: "冬天", topic: "四季", src: "L3", verify: false, note: "四季全部是 der！所以「在冬天」＝ in dem Winter ＝ im Winter" },
  { id: "dn077", word: "Jahreszeit", article: "die", plural: "Jahreszeiten", meaning: "季節", topic: "四季", src: "L3", verify: false },

  // ===== 一天中的時間 Tageszeiten（第三課）=====
  { id: "dn078", word: "Morgen", article: "der", plural: "Morgen", meaning: "早晨", topic: "時間", src: "L3", verify: false, note: "⚠️ 名詞 der Morgen（早晨）≠ 副詞 morgen（明天）！am Morgen ＝在早上" },
  { id: "dn079", word: "Vormittag", article: "der", plural: "Vormittage", meaning: "上午", topic: "時間", src: "L3", verify: false, note: "morgen Vormittag ＝明天上午" },
  { id: "dn080", word: "Mittag", article: "der", plural: "Mittage", meaning: "中午", topic: "時間", src: "L3", verify: false },
  { id: "dn081", word: "Nachmittag", article: "der", plural: "Nachmittage", meaning: "下午", topic: "時間", src: "L3", verify: false },
  { id: "dn082", word: "Abend", article: "der", plural: "Abende", meaning: "晚上", topic: "時間", src: "L3", verify: false, note: "am Abend ＝在晚上" },
  { id: "dn083", word: "Nacht", article: "die", plural: "Nächte", meaning: "夜晚", topic: "時間", src: "L3", verify: false, note: "唯一不是陽性的時段詞；in der Nacht ＝在夜裡（陰性用 in der）" },
  { id: "dn084", word: "Tag", article: "der", plural: "Tage", meaning: "日子、天", topic: "時間", src: "L3", verify: false, note: "jeden Tag ＝每天（Akkusativ）" },
  { id: "dn085", word: "Woche", article: "die", plural: "Wochen", meaning: "週、星期", topic: "時間", src: "L3", verify: false, note: "dreimal pro Woche ＝一週三次" },
  { id: "dn086", word: "Stunde", article: "die", plural: "Stunden", meaning: "小時", topic: "時間", src: "L3", verify: false, note: "Zwei Stunden.（兩個小時）— 回答 wie lange 用的" },
  { id: "dn087", word: "Jahr", article: "das", plural: "Jahre", meaning: "年", topic: "時間", src: "L3", verify: false, note: "Ich muss noch ca. zwei Jahre studieren." },

  // ===== 地點（第三課 + 8/20 筆記的 im / in der 練習）=====
  { id: "dn088", word: "Supermarkt", article: "der", plural: "Supermärkte", meaning: "超市", topic: "地點", src: "L3", verify: false, note: "Es gibt einen Supermarkt.（es gibt ＋ Akkusativ，der → einen）" },
  { id: "dn089", word: "Restaurant", article: "das", plural: "Restaurants", meaning: "餐廳", topic: "地點", src: "L3", verify: false },
  { id: "dn090", word: "Café", article: "das", plural: "Cafés", meaning: "咖啡館", topic: "地點", src: "note", verify: false, note: "im Café（in dem Café）" },
  { id: "dn091", word: "Kino", article: "das", plural: "Kinos", meaning: "電影院", topic: "地點", src: "note", verify: false, note: "im Kino" },
  { id: "dn092", word: "Theater", article: "das", plural: "Theater", meaning: "劇院", topic: "地點", src: "note", verify: false, note: "im Theater；-er 結尾卻是中性，又一個反例" },
  { id: "dn093", word: "Museum", article: "das", plural: "Museen", meaning: "博物館", topic: "地點", src: "note", verify: false, note: "-um 結尾一律中性；複數不規則：Museen" },
  { id: "dn094", word: "Hotel", article: "das", plural: "Hotels", meaning: "飯店、酒店", topic: "地點", src: "note", verify: false, note: "im Hotel" },
  { id: "dn095", word: "Krankenhaus", article: "das", plural: "Krankenhäuser", meaning: "醫院", topic: "地點", src: "note", verify: false, note: "im Krankenhaus；複合名詞尾字 Haus 是中性" },
  { id: "dn096", word: "Büro", article: "das", plural: "Büros", meaning: "辦公室", topic: "地點", src: "note", verify: false, note: "im Büro" },
  { id: "dn097", word: "Geschäft", article: "das", plural: "Geschäfte", meaning: "商店、生意", topic: "地點", src: "note", verify: false, note: "im Geschäft；Ge- 前綴傾向中性" },
  { id: "dn098", word: "Fitnessstudio", article: "das", plural: "Fitnessstudios", meaning: "健身房", topic: "地點", src: "L3", verify: false, note: "ins Fitnessstudio gehen（去健身房，用 in ＋ Akkusativ）" },
];

// ============================================================
// 主題清單（查詢頁篩選用；順序＝顯示順序）
// 加新主題時要同步加到這裡，否則篩選鈕不會出現
// ============================================================
const GERMAN_NOUN_TOPICS = ["家庭", "職業", "物品", "抽象/感受", "時間", "四季", "天氣", "地點", "交通", "語言與溝通", "學業"];

// 來源標籤的顯示文字
const GERMAN_NOUN_SRC_LABEL = { L2: "第二課", L3: "第三課", note: "課堂筆記", A1: "A1 詞表" };
