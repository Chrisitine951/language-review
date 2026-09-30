// ============================================================
// data-de.js — 德文資料庫（german.html 專用）
// 最後更新：2026-09-30（v3.0.0 英德拆檔）
//
// 【為什麼拆】原本英文和德文的資料全在一個 data.js 裡，造成兩個問題：
//   ① 整理其中一種語言時要連另一種一起貼給 AI，而且有改錯對方資料的風險
//   ② 這支 App 根本用不到另一種語言的內容，白載入
// 這個檔案只有德文內容，english.html 不會載入它。名詞字典另外在 data-de-nouns.js。
//
// 【維護方式】直接修改此檔對應區塊，只由對話中的 AI 批次整理更新。
//   改之前一定要先把 GitHub 上的現行版本貼給 AI（那份才是 ground truth）。
//   改完檢查：node -c 語法檢查 ＋ 各陣列 id 無重複。
// ============================================================

// ============================================================
// 德文單字庫（含定冠詞）
// 【v2.1.0 整理】word 欄位一律「不含冠詞」，冠詞獨立放 article 欄位
//   （以前 word 含冠詞會讓 App 顯示「das das Kind」，靠顯示層 deSplitWord 擋著；
//    這次直接把資料清乾淨）。動詞補上 conjugation 六人稱現在式變化：
//   { ich, du, 'er/sie/es', wir, ihr, 'sie/Sie' }。
//   標「⚠️家教核對」的是強變化/少見動詞，變化已盡量填正確但請家教確認。
// ============================================================
const GERMAN_VOCABULARY = [
  // 問候
  { id: "de001", article: "", pos: "問候語", word: "Hallo", meaning: "你好", category: "greeting", example: "Hallo, ich bin Christine!" },
  { id: "de002", article: "", pos: "問候語", word: "Tschüss", meaning: "再見", category: "greeting", example: "Tschüss! Bis morgen!" },
  { id: "de003", article: "", pos: "問候語", word: "Danke", meaning: "謝謝", category: "greeting", example: "Danke, das ist sehr nett." },
  { id: "de004", article: "", pos: "問候語", word: "Bitte", meaning: "請／不客氣", category: "greeting", example: "Kaffee, bitte." },
  { id: "de005", article: "", pos: "慣用語", word: "Freut mich", meaning: "很高興認識你", category: "greeting", example: "Freut mich, David!" },
  { id: "de006", article: "", pos: "副詞（答語）", word: "Ja", meaning: "是", category: "greeting", example: "Ja, ich komme aus Taiwan." },
  { id: "de007", article: "", pos: "副詞（答語）", word: "Nein", meaning: "不", category: "greeting", example: "Nein, das stimmt nicht." },
  { id: "de008", article: "", pos: "連接詞", word: "und", meaning: "和", category: "greeting", example: "Tee und Kekse, bitte!" },
  { id: "de009", article: "", pos: "連接詞", word: "oder", meaning: "或是", category: "greeting", example: "Kaffee oder Tee?" },
  // 人物
  { id: "de010", article: "der", pos: "陽性名詞", word: "Mann", meaning: "男人", category: "people", example: "Der Mann heißt David." },
  { id: "de011", article: "die", pos: "陰性名詞", word: "Frau", meaning: "女人／太太", category: "people", example: "Die Frau kommt aus Japan." },
  { id: "de012", article: "der", pos: "陽性名詞", word: "Vater", meaning: "父親", category: "people", example: "Mein Vater heißt Thomas." },
  { id: "de013", article: "die", pos: "陰性名詞", word: "Mutter", meaning: "母親", category: "people", example: "Meine Mutter kommt aus Taipeh." },
  { id: "de014", article: "der", pos: "陽性名詞", word: "Name", meaning: "名字", category: "people", example: "Mein Name ist Christine." },
  { id: "de015", article: "die", pos: "陰性名詞", word: "Katze", meaning: "貓", category: "people", example: "Die Katze ist süß." },
  { id: "de016", article: "der", pos: "陽性名詞", word: "Vogel", meaning: "鳥", category: "nature", example: "Der Vogel singt schön." },
  // 食物飲料
  { id: "de017", article: "der", pos: "陽性名詞", word: "Kaffee", meaning: "咖啡", category: "food", example: "Kaffee mit Zucker, bitte." },
  { id: "de018", article: "der", pos: "陽性名詞", word: "Tee", meaning: "茶", category: "food", example: "Ich möchte Tee." },
  { id: "de019", article: "das", pos: "中性名詞", word: "Wasser", meaning: "水", category: "food", example: "Wasser und Kekse, bitte." },
  { id: "de020", article: "der", pos: "陽性名詞", word: "Zucker", meaning: "糖", category: "food", example: "Kaffee mit Zucker." },
  { id: "de021", article: "die", pos: "複數名詞", word: "Kekse", meaning: "餅乾（複數）", category: "food", example: "Tee und Kekse, bitte!" },
  { id: "de022", article: "die", pos: "陰性名詞", word: "Tasse", meaning: "杯子", category: "food", example: "Eine Tasse Kaffee, bitte." },
  { id: "de023", article: "der", pos: "陽性名詞", word: "Salat", meaning: "沙拉", category: "food", example: "Der Salat ist frisch." },
  { id: "de024", article: "die", pos: "陰性名詞", word: "Tomate", meaning: "番茄", category: "food", example: "Die Tomate ist rot." },
  { id: "de025", article: "die", pos: "陰性名詞", word: "Olive", meaning: "橄欖", category: "food", example: "Die Olive ist grün." },
  { id: "de026", article: "die", pos: "陰性名詞", word: "Milch", meaning: "牛奶", category: "food", example: "Ich trinke Milch." },
  // 物品
  { id: "de027", article: "das", pos: "中性名詞", word: "Messer", meaning: "刀子", category: "objects", example: "Das Messer ist scharf." },
  { id: "de028", article: "die", pos: "陰性名詞", word: "Lampe", meaning: "燈", category: "objects", example: "Die Lampe ist neu." },
  { id: "de029", article: "die", pos: "陰性名詞", word: "Hose", meaning: "褲子", category: "objects", example: "Die Hose ist blau." },
  { id: "de030", article: "das", pos: "中性名詞", word: "Bett", meaning: "床", category: "objects", example: "Das Bett ist groß." },
  { id: "de031", article: "das", pos: "中性名詞", word: "Buch", meaning: "書", category: "objects", example: "Das Buch ist interessant." },
  { id: "de032", article: "der", pos: "陽性名詞", word: "Ofen", meaning: "烤箱", category: "objects", example: "Der Ofen ist heiß." },
  { id: "de033", article: "die", pos: "陰性名詞", word: "Vase", meaning: "花瓶", category: "objects", example: "Die Vase ist schön." },
  { id: "de034", article: "das", pos: "中性名詞", word: "Video", meaning: "影片", category: "objects", example: "Das Video ist interessant." },
  { id: "de035", article: "der", pos: "陽性名詞", word: "Spiegel", meaning: "鏡子", category: "objects", example: "Der Spiegel ist groß." },
  // 身體
  { id: "de036", article: "die", pos: "陰性名詞", word: "Hand", meaning: "手", category: "body", example: "Die Hand ist sauber." },
  { id: "de037", article: "die", pos: "陰性名詞", word: "Nase", meaning: "鼻子", category: "body", example: "Meine Nase ist kalt." },
  { id: "de038", article: "das", pos: "中性名詞", word: "Auge", meaning: "眼睛", category: "body", example: "Das Auge ist blau." },
  { id: "de039", article: "das", pos: "中性名詞", word: "Haar", meaning: "頭髮（單根）", category: "body", example: "Das Haar ist lang." },
  { id: "de040", article: "der", pos: "陽性名詞", word: "Finger", meaning: "手指", category: "body", example: "Der Finger ist lang." },
  // 地點
  { id: "de041", article: "die", pos: "陰性名詞", word: "Schule", meaning: "學校", category: "places", example: "Die Schule ist groß." },
  { id: "de042", article: "die", pos: "陰性名詞", word: "Stadt", meaning: "城市", category: "places", example: "Die Stadt ist schön." },
  { id: "de043", article: "das", pos: "中性名詞", word: "Zimmer", meaning: "房間", category: "places", example: "Das Zimmer ist klein." },
  { id: "de044", article: "das", pos: "中性名詞", word: "Haus", meaning: "房子", category: "places", example: "Das Haus ist groß." },
  { id: "de045", article: "die", pos: "陰性名詞", word: "Straße", meaning: "街道", category: "places", example: "Die Straße ist lang." },
  { id: "de046", article: "die", pos: "陰性名詞", word: "Zeit", meaning: "時間", category: "time", example: "Die Zeit vergeht schnell." },
  // 自然
  { id: "de047", article: "das", pos: "中性名詞", word: "Meer", meaning: "海洋", category: "nature", example: "Das Meer ist tief." },
  { id: "de048", article: "das", pos: "中性名詞", word: "Boot", meaning: "船", category: "nature", example: "Das Boot ist klein." },
  { id: "de049", article: "die", pos: "陰性名詞", word: "Sonne", meaning: "太陽", category: "nature", example: "Die Sonne scheint." },
  { id: "de050", article: "die", pos: "陰性名詞", word: "Rose", meaning: "玫瑰", category: "nature", example: "Die Rose ist rot." },
  // 動詞（v2.1.0 補 conjugation 六人稱現在式）
  { id: "de051", article: "", pos: "動詞", word: "heißen", meaning: "叫做（名字）", category: "verb", example: "Ich heiße Christine.", conjugation: { "ich": "heiße", "du": "heißt", "er/sie/es": "heißt", "wir": "heißen", "ihr": "heißt", "sie/Sie": "heißen" } },
  { id: "de052", article: "", pos: "動詞", word: "kommen", meaning: "來自", category: "verb", example: "Ich komme aus Taiwan.", conjugation: { "ich": "komme", "du": "kommst", "er/sie/es": "kommt", "wir": "kommen", "ihr": "kommt", "sie/Sie": "kommen" } },
  { id: "de053", article: "", pos: "動詞", word: "sein", meaning: "是（be 動詞）", category: "verb", example: "Ich bin Anna.", conjugation: { "ich": "bin", "du": "bist", "er/sie/es": "ist", "wir": "sind", "ihr": "seid", "sie/Sie": "sind" } },
  { id: "de054", article: "", pos: "動詞", word: "sehen", meaning: "看見", category: "verb", example: "Ich sehe die Lampe.", note: "⚠️家教核對：強變化，du/er 母音變 e→ie（siehst/sieht）", conjugation: { "ich": "sehe", "du": "siehst", "er/sie/es": "sieht", "wir": "sehen", "ihr": "seht", "sie/Sie": "sehen" } },
  { id: "de055", article: "", pos: "動詞", word: "trinken", meaning: "喝", category: "verb", example: "Ich trinke Tee.", conjugation: { "ich": "trinke", "du": "trinkst", "er/sie/es": "trinkt", "wir": "trinken", "ihr": "trinkt", "sie/Sie": "trinken" } },
  { id: "de056", article: "", pos: "動詞", word: "spielen", meaning: "玩", category: "verb", example: "Die Kinder spielen.", conjugation: { "ich": "spiele", "du": "spielst", "er/sie/es": "spielt", "wir": "spielen", "ihr": "spielt", "sie/Sie": "spielen" } },
  { id: "de057", article: "", pos: "動詞", word: "lernen", meaning: "學習", category: "verb", example: "Ich lerne Deutsch.", conjugation: { "ich": "lerne", "du": "lernst", "er/sie/es": "lernt", "wir": "lernen", "ihr": "lernt", "sie/Sie": "lernen" } },
  { id: "de058", article: "", pos: "動詞", word: "gehen", meaning: "去、走", category: "verb", example: "Ich gehe zur Schule.", conjugation: { "ich": "gehe", "du": "gehst", "er/sie/es": "geht", "wir": "gehen", "ihr": "geht", "sie/Sie": "gehen" } },
  { id: "de059", article: "", pos: "動詞", word: "müssen", meaning: "必須", category: "verb", example: "Ich muss lernen.", note: "⚠️家教核對：情態動詞，ich/er 同形無字尾（muss）", conjugation: { "ich": "muss", "du": "musst", "er/sie/es": "muss", "wir": "müssen", "ihr": "müsst", "sie/Sie": "müssen" } },
  // 形容詞 / 時間
  { id: "de060", article: "", pos: "形容詞", word: "schön", meaning: "漂亮的", category: "adjective", example: "Das ist sehr schön!" },
  { id: "de061", article: "", pos: "形容詞", word: "gut", meaning: "好的", category: "adjective", example: "Das Buch ist gut." },
  { id: "de062", article: "", pos: "形容詞", word: "groß", meaning: "大的", category: "adjective", example: "Das Haus ist groß." },
  { id: "de063", article: "", pos: "形容詞", word: "klein", meaning: "小的", category: "adjective", example: "Das Zimmer ist klein." },
  { id: "de064", article: "", pos: "形容詞", word: "neu", meaning: "新的", category: "adjective", example: "Die Lampe ist neu." },
  { id: "de065", article: "", pos: "形容詞", word: "alt", meaning: "舊的、年老的", category: "adjective", example: "Das Buch ist alt." },
  { id: "de066", article: "", pos: "副詞", word: "heute", meaning: "今天", category: "time", example: "Heute ist Montag." },
  { id: "de067", article: "", pos: "副詞", word: "morgen", meaning: "明天", category: "time", example: "Bis morgen!" },
  { id: "de068", article: "der", pos: "陽性名詞", word: "Tag", meaning: "日子、天", category: "time", example: "Der Tag ist schön." },
  { id: "de069", article: "das", pos: "中性名詞", word: "Jahr", meaning: "年", category: "time", example: "Das Jahr 2026." },
  { id: "de070", article: "der", pos: "陽性名詞", word: "Monat", meaning: "月份", category: "time", example: "Der Monat Mai ist schön." },
  // === 第26堂補充（Glynis — 德文練習）===
  { id: "de071", article: "das", pos: "中性名詞", word: "Kind", meaning: "小孩", category: "people", example: "Das Kind ist süß.", note: "中性名詞：德文歷史上小孩被視為「物」而非男/女性，所以是 das。" },
  { id: "de072", article: "die", pos: "複數名詞", word: "Häuser", meaning: "房子（複數）", category: "places", example: "Die Häuser sind groß.", note: "規則提示：德文名詞複數，定冠詞一律用 die，不論單數時是 der/die/das（單數是 das Haus）。" },
  { id: "de073", article: "der", pos: "陽性名詞", word: "Umlaut", meaning: "變母音（ä, ö, ü）", category: "other", example: "Der Umlaut ist wichtig für die richtige Aussprache." },
  // === 手寫筆記補充（CH/重音/前綴章節）===
  { id: "de074", article: "der", pos: "陽性名詞", word: "Himmel", meaning: "天空", category: "nature", example: "Der Himmel ist blau." },
  { id: "de075", article: "die", pos: "陰性名詞", word: "Chance", meaning: "機會", category: "other", example: "Das ist eine gute Chance." },
  { id: "de076", article: "der", pos: "陽性名詞", word: "Charme", meaning: "魅力", category: "other", example: "Er hat viel Charme." },
  { id: "de077", article: "der", pos: "陽性名詞", word: "Chef", meaning: "老闆", category: "people", example: "Der Chef ist nett.", note: "陰性：die Chefin（女老闆）" },
  { id: "de078", article: "der", pos: "陽性名詞", word: "Chor", meaning: "合唱團", category: "other", example: "Der Chor singt schön." },
  { id: "de079", article: "der", pos: "陽性名詞", word: "Charakter", meaning: "性格", category: "other", example: "Sein Charakter ist freundlich." },
  { id: "de080", article: "der", pos: "陽性名詞", word: "Nationalismus", meaning: "國家主義", category: "other", example: "Nationalismus ist ein wichtiges Thema.", note: "字尾 -ismus：N. + ismus ⇒ XX主義" },
  { id: "de081", article: "der", pos: "陽性名詞", word: "Lehrer", meaning: "老師", category: "people", example: "Der Lehrer ist freundlich.", note: "陰性：die Lehrerin（女老師）" },
  { id: "de082", article: "der", pos: "陽性名詞", word: "Juli", meaning: "七月", category: "time", example: "Der Juli ist warm." },
  { id: "de083", article: "", pos: "動詞", word: "haben", meaning: "有", category: "verb", example: "Ich habe ein Buch.", note: "不規則動詞：ich habe、du hast、er hat", conjugation: { "ich": "habe", "du": "hast", "er/sie/es": "hat", "wir": "haben", "ihr": "habt", "sie/Sie": "haben" } },
  { id: "de084", article: "", pos: "動詞", word: "machen", meaning: "做", category: "verb", example: "Ich mache meine Hausaufgaben.", note: "也常用於：Urlaub machen（渡假）、Fotos machen（拍照）、Pause machen（休息）；做決定是用 treffen，不是 machen", conjugation: { "ich": "mache", "du": "machst", "er/sie/es": "macht", "wir": "machen", "ihr": "macht", "sie/Sie": "machen" } },
  { id: "de085", article: "", pos: "動詞", word: "lachen", meaning: "笑", category: "verb", example: "Die Kinder lachen.", conjugation: { "ich": "lache", "du": "lachst", "er/sie/es": "lacht", "wir": "lachen", "ihr": "lacht", "sie/Sie": "lachen" } },
  { id: "de086", article: "", pos: "動詞", word: "denken", meaning: "思考", category: "verb", example: "Ich denke nach.", conjugation: { "ich": "denke", "du": "denkst", "er/sie/es": "denkt", "wir": "denken", "ihr": "denkt", "sie/Sie": "denken" } },
  { id: "de087", article: "", pos: "動詞", word: "bringen", meaning: "帶來", category: "verb", example: "Ich bringe das Buch.", conjugation: { "ich": "bringe", "du": "bringst", "er/sie/es": "bringt", "wir": "bringen", "ihr": "bringt", "sie/Sie": "bringen" } },
  { id: "de088", article: "", pos: "動詞", word: "verstehen", meaning: "理解", category: "verb", example: "Ich verstehe das nicht.", note: "不可分前綴 ver-，重音不在 ver- 上", conjugation: { "ich": "verstehe", "du": "verstehst", "er/sie/es": "versteht", "wir": "verstehen", "ihr": "versteht", "sie/Sie": "verstehen" } },
  { id: "de089", article: "", pos: "動詞", word: "beginnen", meaning: "開始", category: "verb", example: "Der Unterricht beginnt.", note: "不可分前綴 be-，重音不在 be- 上", conjugation: { "ich": "beginne", "du": "beginnst", "er/sie/es": "beginnt", "wir": "beginnen", "ihr": "beginnt", "sie/Sie": "beginnen" } },
  { id: "de090", article: "", pos: "動詞", word: "aufstehen", meaning: "起床", category: "verb", example: "Ich stehe um 7 Uhr auf.", note: "可分動詞：變位時前綴 auf- 分離到句尾（Ich stehe um 7 Uhr auf.）。下表直接寫成分離後的完整形式。", conjugation: { "ich": "stehe auf", "du": "stehst auf", "er/sie/es": "steht auf", "wir": "stehen auf", "ihr": "steht auf", "sie/Sie": "stehen auf" } },
  { id: "de091", article: "", pos: "動詞", word: "einkaufen", meaning: "購物", category: "verb", example: "Ich gehe einkaufen.", note: "可分動詞：變位時前綴 ein- 分離到句尾（Ich kaufe im Supermarkt ein.）。下表直接寫成分離後的完整形式。", conjugation: { "ich": "kaufe ein", "du": "kaufst ein", "er/sie/es": "kauft ein", "wir": "kaufen ein", "ihr": "kauft ein", "sie/Sie": "kaufen ein" } },
  { id: "de092", article: "", pos: "形容詞", word: "lang", meaning: "長的", category: "adjective", example: "Der Weg ist lang." },
  { id: "de093", article: "", pos: "副詞", word: "nicht", meaning: "不", category: "other", example: "Ich verstehe das nicht." },
  // === App 句型補充：家人與食物詞彙 ===
  { id: "de094", article: "die", pos: "陰性名詞", word: "Tochter", meaning: "女兒", category: "people", example: "Das ist meine Tochter, Lisa." },
  { id: "de095", article: "der", pos: "陽性名詞", word: "Bruder", meaning: "兄弟", category: "people", example: "Das ist mein Bruder, Max." },
  { id: "de096", article: "der", pos: "陽性名詞", word: "Sohn", meaning: "兒子", category: "people", example: "Mein Sohn ist lustig!" },
  { id: "de097", article: "der", pos: "陽性名詞", word: "Papa", meaning: "爸爸", category: "people", example: "Das ist mein Papa, David." },
  { id: "de098", article: "die", pos: "陰性名詞", word: "Wurst", meaning: "香腸", category: "food", example: "Die Wurst ist lecker und billig!" },
  { id: "de099", article: "das", pos: "中性名詞", word: "Schnitzel", meaning: "炸肉排", category: "food", example: "Das Schnitzel ist frisch." },
  { id: "de100", article: "die", pos: "陰性名詞", word: "Pizza", meaning: "披薩", category: "food", example: "Meine Pizza ist gut!" },
  { id: "de101", article: "", pos: "形容詞", word: "lustig", meaning: "有趣的", category: "adjective", example: "Mein Sohn ist lustig!" },
  { id: "de102", article: "", pos: "形容詞", word: "hungrig", meaning: "飢餓的", category: "adjective", example: "Ich bin hungrig." },
  { id: "de103", article: "", pos: "形容詞", word: "frisch", meaning: "新鮮的", category: "adjective", example: "Das Schnitzel ist frisch." },
  { id: "de104", article: "", pos: "形容詞", word: "lecker", meaning: "美味的", category: "adjective", example: "Die Wurst ist lecker!" },
  { id: "de105", article: "", pos: "形容詞", word: "billig", meaning: "便宜的", category: "adjective", example: "Die Wurst ist billig." },
  // === 道別語（App 補充）===
  { id: "de106", article: "", pos: "慣用語（道別）", word: "Auf Wiedersehen", meaning: "再見（正式，期待下次相見）", category: "greeting", example: "Auf Wiedersehen, bis bald!" },
  { id: "de107", article: "", pos: "慣用語（道別）", word: "Bis bald", meaning: "不久後見（時間已確定，如下週）", category: "greeting", example: "Bis bald, nächste Woche!" },
  { id: "de108", article: "", pos: "慣用語（道別）", word: "Bis später", meaning: "待會見（時間不確定，可能幾小時後）", category: "greeting", example: "Bis später!" },
  { id: "de109", article: "", pos: "慣用語（道別）", word: "Bis morgen", meaning: "明天見", category: "greeting", example: "Bis morgen!" },
  { id: "de110", article: "", pos: "慣用語（道別）", word: "Bis dann", meaning: "到時候見", category: "greeting", example: "Bis dann!" },
  // === 第28批補充（問路情境 + 格位文法練習 + 作文批改單字）===
  { id: "de111", article: "der", pos: "陽性名詞", word: "Bahnhof", meaning: "火車站", category: "places", example: "Wo ist der Bahnhof?" },
  { id: "de112", article: "der", pos: "陽性名詞", word: "Park", meaning: "公園", category: "places", example: "Der Park ist da drüben." },
  { id: "de113", article: "das", pos: "中性名詞", word: "Hotel", meaning: "酒店、飯店", category: "places", example: "Das Hotel ist klein und billig." },
  { id: "de114", article: "das", pos: "中性名詞", word: "Café", meaning: "咖啡館", category: "places", example: "Hallo, wo ist das Café?" },
  { id: "de115", article: "", pos: "副詞片語", word: "da drüben", meaning: "在那邊", category: "other", example: "Der Park ist da drüben." },
  { id: "de116", article: "das", pos: "中性名詞", word: "Hobby", meaning: "興趣", category: "other", example: "Meine Hobbys sind Singen und Schwimmen.", note: "複數形式：Hobbys" },
  { id: "de117", article: "das", pos: "中性名詞（動詞名詞化）", word: "Singen", meaning: "唱歌（動詞名詞化）", category: "verb", example: "Singen macht Spaß.", note: "動詞 singen 名詞化後首字大寫、加冠詞 das" },
  { id: "de118", article: "das", pos: "中性名詞（動詞名詞化）", word: "Schwimmen", meaning: "游泳（動詞名詞化）", category: "verb", example: "Ich genieße das Schwimmen.", note: "動詞 schwimmen 名詞化後首字大寫、加冠詞 das" },
  { id: "de119", article: "", pos: "形容詞", word: "schwarz", meaning: "黑色的", category: "adjective", example: "Ich habe schwarze Haare." },
  { id: "de120", article: "", pos: "形容詞", word: "braun", meaning: "棕色的", category: "adjective", example: "Ich habe braune Augen." },
  { id: "de121", article: "die", pos: "陰性名詞", word: "Forschung", meaning: "研究", category: "other", example: "Ich arbeite an einem Forschungsinstitut.", note: "動詞：forschen（做研究）" },
  { id: "de122", article: "der", pos: "陽性名詞", word: "Forscher / die Forscherin", meaning: "研究員／女研究員", category: "people", example: "Ich bin Forscherin.", note: "女性說話者要用陰性形式 Forscherin，不能用 Forscher" },
  { id: "de123", article: "das", pos: "中性名詞", word: "Forschungsinstitut", meaning: "研究機構", category: "places", example: "Ich arbeite derzeit an einem Forschungsinstitut." },
  { id: "de124", article: "der", pos: "陽性名詞", word: "Ingenieur / die Ingenieurin", meaning: "工程師／女工程師", category: "people", example: "Sie arbeitet als Ingenieurin." },
  { id: "de125", article: "die", pos: "陰性名詞", word: "Qualitätssicherungsingenieurin", meaning: "品質保證工程師（女性）", category: "people", example: "Meine Mutter arbeitet als Qualitätssicherungsingenieurin." },
  { id: "de126", article: "der", pos: "陽性名詞", word: "Kontakt", meaning: "聯絡", category: "other", example: "Wir haben weniger Kontakt.", note: "動詞：kontaktieren（聯絡某人）" },
  { id: "de127", article: "das", pos: "中性名詞", word: "Verhältnis", meaning: "關係", category: "other", example: "Früher hatten wir ein sehr gutes Verhältnis." },
  { id: "de128", article: "", pos: "動詞", word: "ziehen", meaning: "搬家、移動", category: "verb", example: "Er ist nach Taipeh gezogen.", note: "⚠️家教核對：衍生詞 umziehen（搬家）；完成式用 sein（ist gezogen）", conjugation: { "ich": "ziehe", "du": "ziehst", "er/sie/es": "zieht", "wir": "ziehen", "ihr": "zieht", "sie/Sie": "ziehen" } },
  { id: "de129", article: "der", pos: "陽性名詞", word: "Ruhestand", meaning: "退休生活", category: "other", example: "Mein Vater ist im Ruhestand." },
  { id: "de130", article: "", pos: "動詞", word: "genießen", meaning: "享受", category: "verb", example: "Ich genieße das Wochenende.", conjugation: { "ich": "genieße", "du": "genießt", "er/sie/es": "genießt", "wir": "genießen", "ihr": "genießt", "sie/Sie": "genießen" } },
  { id: "de131", article: "die", pos: "複數名詞", word: "Eltern", meaning: "父母（複數名詞）", category: "people", example: "Meine Eltern leben in Hsinchu." },
  { id: "de132", article: "", pos: "名詞（陽性／陰性）", word: "Taiwaner / Taiwanerin", meaning: "台灣男性／台灣女性", category: "people", example: "Er ist Taiwaner. Sie ist Taiwanerin." },
  { id: "de133", article: "die", pos: "陰性名詞", word: "Fuhoustraße", meaning: "福後街（街道名稱，陰性名詞）", category: "places", example: "Ihre Adresse ist Fuhoustraße 45." },
  { id: "de134", article: "der", pos: "陽性名詞", word: "Affe / die Affen", meaning: "猴子（單數／複數）", category: "nature", example: "Es ist affenheiß!", note: "affen- 當形容詞前綴是誇飾用法（超級⋯），字面是「猴子的」" },
  { id: "de135", article: "der", pos: "陽性名詞", word: "Weg", meaning: "路徑、路", category: "places", example: "Der Weg ist lang.", note: "注意：副詞 weg（消失、離開）拼法相同但詞性不同，如 Ich schmelze weg（我要融化了）" },
  { id: "de136", article: "", pos: "動詞", word: "schmelzen", meaning: "融化", category: "verb", example: "Ich schmelze weg!", note: "⚠️家教核對：強變化，du/er 母音變 e→i（schmilzt）", conjugation: { "ich": "schmelze", "du": "schmilzt", "er/sie/es": "schmilzt", "wir": "schmelzen", "ihr": "schmelzt", "sie/Sie": "schmelzen" } },
  { id: "de137", article: "", pos: "動詞", word: "sterben", meaning: "死", category: "verb", example: "Ich sterbe vor Hitze.", note: "⚠️家教核對：強變化，du/er 母音變 e→i（stirbst/stirbt）", conjugation: { "ich": "sterbe", "du": "stirbst", "er/sie/es": "stirbt", "wir": "sterben", "ihr": "sterbt", "sie/Sie": "sterben" } },
  { id: "de138", article: "", pos: "形容詞", word: "heiß", meaning: "熱的", category: "adjective", example: "Mir ist heiß." },
  { id: "de139", article: "", pos: "形容詞", word: "kalt", meaning: "冷的", category: "adjective", example: "Mir ist kalt." },
  { id: "de140", article: "", pos: "代名詞（Dativ）", word: "mir", meaning: "對我（ich 的 Dativ 第三格形式）", category: "other", example: "Mir ist heiß.", note: "表達身體/天氣感受時用 Dativ 代名詞 mir，因為「我」是接受感受的對象" },
  { id: "de141", article: "", pos: "形容詞", word: "nieder / niedrig", meaning: "低的", category: "adjective", example: "die Niederlande", note: "nieder 是 niedrig 的另一種說法，常見於複合詞（如 die Niederlande 荷蘭，字面「低地國」）" },
];

// ============================================================
// 德文文法題庫（新增：格位 Akkusativ / Dativ / Genitiv、子句、作文批改重點）
// 格式：{ id, category, rule, example, explanation, mastered }
// ============================================================
const GERMAN_GRAMMAR = [
  { id: "gg001", category: "case_akkusativ", rule: "haben 後面接受詞要用 Akkusativ（第四格）", example: "Ich habe einen Freund. (Freund 是陽性名詞 der Freund → einen Freund)", explanation: "陽性名詞在 Akkusativ 格中，定冠詞 der→den，不定冠詞 ein→einen。", mastered: false },
  { id: "gg002", category: "clause", rule: "nachdem + 子句，表示「在⋯之後」，是從屬連接詞", example: "Nachdem er nach Taipeh gezogen ist, haben wir weniger Kontakt.", explanation: "nachdem 帶出的從屬子句動詞要放在句尾（gezogen ist），後面的主要子句要用倒裝語序（動詞在主詞之前）。", mastered: false },
  { id: "gg003", category: "case_genitiv", rule: "wegen + Genitiv（第二格），表示「因為⋯」", example: "wegen der Arbeit = 因為工作的關係", explanation: "wegen 後面接名詞要變成 Genitiv 格，陰性名詞 die Arbeit → der Arbeit。", mastered: false },
  { id: "gg004", category: "case_dativ", rule: "von 後面固定接 Dativ（第三格）", example: "Er kommt von der Schule.", explanation: "介系詞 von 恆定要求 Dativ 格，陰性名詞 die → der。", mastered: false },
  { id: "gg005", category: "case_dativ", rule: "陰性名詞在 Dativ 與 Genitiv 格時，冠詞 die 變成 der", example: "die Arbeit → wegen der Arbeit（Genitiv）；von der Schule（Dativ）", explanation: "這點容易混淆，因為 der 同時也是陽性主格冠詞，要依上下文判斷格位。", mastered: false },
  { id: "gg006", category: "case_dativ", rule: "陽性／中性名詞在 Dativ 格時，冠詞 der/das 變成 dem", example: "Ich arbeite an einem Forschungsinstitut.（das Forschungsinstitut → einem Forschungsinstitut，Dativ）", explanation: "an + Dativ 表示「在某機構工作」，中性 das→dem，不定冠詞 ein→einem。", mastered: false },
  { id: "gg007", category: "idiom", rule: "描述身體感受（冷、熱）用 Dativ 代名詞 + ist + 形容詞", example: "Mir ist heiß.（我覺得熱）／Mir ist kalt.（我覺得冷）", explanation: "Mir 是 ich 的 Dativ 形式。因為冷熱感受是外在環境作用在「我」身上，所以「我」是接受者（Dativ），而不是主動的主詞。", mastered: false },
  { id: "gg008", category: "idiom", rule: "vor + Dativ 可表示「因為（強烈的感受）」，常用於誇飾表達", example: "Ich sterbe vor Hitze.（熱死了）", explanation: "這裡的 vor 不是「之前」而是表達被強烈感受淹沒，類似 vor Angst zittern（怕得發抖）。sterben（死）要做第一人稱變化 sterbe。", mastered: false },
  { id: "gg009", category: "idiom", rule: "affen- 當形容詞前綴是誇飾用法（超級⋯）", example: "Es ist affenheiß!（超級熱！）／affenkalt（超級冷）", explanation: "字面意思是「猴子的」，但口語中是誇飾程度的用法。die Affen（複數猴子）、der Affe（單數猴子）。", mastered: false },
  { id: "gg010", category: "idiom", rule: "schmelzen（融化）+ weg（消失、離開，副詞）", example: "Ich schmelze weg!（我要融化了！）", explanation: "der Weg（路徑，名詞）和 weg（消失、離開，副詞）拼法相同但詞性不同，要依上下文分辨。", mastered: false },
  { id: "gg011", category: "essay_correction", rule: "兩個完整句子（各自有主詞和動詞）要用句號分開，不要只用逗號連接", example: "❌ Mein Vater heißt Cello, er ist... → ✅ Mein Vater heißt Cello. Er ist...", explanation: "這是常見的 run-on sentence 錯誤，德文寫作和英文一樣要避免只用逗號連接兩個完整句子。", mastered: false },
  { id: "gg012", category: "essay_correction", rule: "描述過去的關係狀態，可用簡單過去式或 hatten + 名詞的簡化說法", example: "Früher standen wir uns sehr nahe. 或 Früher hatten wir ein sehr gutes Verhältnis.", explanation: "兩種說法都正確。gutes 的字尾 -es 是因為 Verhältnis 是中性名詞，在 Akkusativ 格且前面接不定冠詞 ein 時，形容詞字尾要加 -es（ein gutes Verhältnis）。", mastered: false },
  { id: "gg013", category: "case_akkusativ", rule: "ziehen nach + 城市，或大部分無冠詞的國家名稱", example: "nach Berlin ziehen／nach Taipeh ziehen／nach Taiwan ziehen", explanation: "大部分國家名稱沒有冠詞（Deutschland, Japan, China, Taiwan, Frankreich, Österreich），直接用 nach + 國名，和搬去城市的用法一樣。", mastered: false },
  { id: "gg014", category: "case_akkusativ", rule: "少數陰性冠詞的國家搬去時用 in + Akkusativ", example: "in die Schweiz ziehen（搬去瑞士）", explanation: "少數國家有陰性冠詞 die（die Schweiz, die Türkei, die USA, die Niederlande），這類國家不用 nach，而是用 in + Akkusativ（陰性 die 在 Akkusativ 格中維持不變）。", mastered: false },
  { id: "gg015", category: "case_akkusativ", rule: "少數陽性冠詞國家搬去時，der 要變成 den", example: "in den Iran ziehen（搬去伊朗）", explanation: "der Iran 是少數有陽性冠詞的國家名稱，在 Akkusativ 格中冠詞 der 要變成 den。", mastered: false },
  { id: "gg016", category: "vocab_pattern", rule: "als + 職業（不加冠詞）表示「擔任⋯」", example: "Sie arbeitet als Ingenieurin.", explanation: "als 後面接職業名稱時不加冠詞，且職業名詞要依主詞性別使用陽性或陰性形式。", mastered: false },
  { id: "gg017", category: "vocab_pattern", rule: "女性從事某職業時，職業名詞字尾要加 -in 變成陰性形式", example: "❌ Ich bin Forscher. → ✅ Ich bin Forscherin.（說話者是女性）", explanation: "der Forscher（男研究員）→ die Forscherin（女研究員），這是德文職業名詞陰陽性變化的固定規則，和 der Lehrer → die Lehrerin 一樣。", mastered: false },
  { id: "gg018", category: "vocab_pattern", rule: "nieder 是 niedrig（低的）的另一種說法，常見於複合詞", example: "die Niederlande（荷蘭，字面「低地國」）", explanation: "nieder- 前綴常用來構成表示「低、下」相關的複合詞。", mastered: false },
];

// ============================================================
// 德文發音規則（從 PDF 講義與手寫筆記整理）
// ============================================================
const GERMAN_PRONUNCIATION = [
  { id: "pr001", title: "Ä ä — 發「欸」", rule: "類似中文「欸」的音，嘴巴略開。", examples: [{ word: "Mädchen", pronunciation: "欸-tchen", meaning: "女生" }, { word: "spät", pronunciation: "speh-t", meaning: "晚的" }], notes: "想像說「欸？」時的嘴型。" },
  { id: "pr002", title: "Ö ö — 圓唇發「ㄝ」", rule: "嘴巴保持「喔」的圓唇形狀，但發「ㄝ」的音。", examples: [{ word: "schön", pronunciation: "sh-ö-n", meaning: "漂亮的" }, { word: "Österreich", pronunciation: "Ö-sterreich", meaning: "奧地利" }], notes: "先說「喔」，嘴唇保持圓，但改發「ㄝ」。" },
  { id: "pr003", title: "Ü ü — 圓唇發「衣」（即注音ㄩ）", rule: "嘴型像「衣」，但發「烏」的音。", examples: [{ word: "müde", pronunciation: "mü-de", meaning: "累的" }, { word: "München", pronunciation: "Mün-chen", meaning: "慕尼黑" }], notes: "和中文注音ㄩ幾乎相同！" },
  { id: "pr004", title: "ß — 永遠發 [s]，前面是長音", rule: "ß 永遠發清音 [s]，且前面母音一定是長音或複合母音。", examples: [{ word: "Straße", pronunciation: "Strah-se", meaning: "街道" }, { word: "heißen", pronunciation: "hei-sen", meaning: "叫做" }], notes: "ß 和 ss 的差別：ß 前是長音；ss 前是短音。" },
  { id: "pr005", title: "長音①：母音 + 單子音", rule: "母音後面只有一個子音，通常發長音。", examples: [{ word: "Name", pronunciation: "Nah-me", meaning: "名字" }, { word: "Ofen", pronunciation: "Oh-fen", meaning: "烤箱" }], notes: "長音要拉長。" },
  { id: "pr006", title: "長音②：母音 + h（h 不發音）", rule: "母音後面跟著 h，h 不發音，只負責把前面母音拉長。", examples: [{ word: "sehen", pronunciation: "ze-en", meaning: "看見" }, { word: "Zahl", pronunciation: "tsahl", meaning: "數字" }], notes: "這個 h 叫「延長 h」，千萬不要把 h 發出來！" },
  { id: "pr007", title: "長音③：雙母音（aa / ee / oo）", rule: "aa、ee、oo 都是長音。", examples: [{ word: "Haar", pronunciation: "Hahr", meaning: "頭髮" }, { word: "Meer", pronunciation: "Mehr", meaning: "海洋" }, { word: "Boot", pronunciation: "Boht", meaning: "船" }], notes: "這類字比較少，背起來就好。" },
  { id: "pr008", title: "長音④：ie 永遠是長 i", rule: "ie 永遠發長音 [iː]，類似中文「衣」拉長。", examples: [{ word: "Liebe", pronunciation: "Lee-be", meaning: "愛" }, { word: "Wien", pronunciation: "Veen", meaning: "維也納" }, { word: "spielen", pronunciation: "Shpee-len", meaning: "玩" }], notes: "ie 裡面有 e，e 讓 i 變長。" },
  { id: "pr009", title: "短音①：母音 + 雙子音", rule: "母音後面有雙子音，通常發短音。", examples: [{ word: "Mann", pronunciation: "Man（短a）", meaning: "男人" }, { word: "Bett", pronunciation: "Bet（短e）", meaning: "床" }, { word: "Mutter", pronunciation: "Mu-ter（短u）", meaning: "母親" }], notes: "短音要短促有力，不要拖。" },
  { id: "pr010", title: "短音②：ck 和 tz 前必短音", rule: "母音後面跟著 ck 或 tz，前面的母音一定是短音。", examples: [{ word: "backen", pronunciation: "ba-ken（短a）", meaning: "烘焙" }, { word: "Katze", pronunciation: "Kat-se（短a）", meaning: "貓" }], notes: "ck 前面一定短！" },
  { id: "pr011", title: "ss vs ß：短音 vs 長音", rule: "ss 前面的母音是短音；ß 前面的母音是長音或複合母音。", examples: [{ word: "müssen", pronunciation: "mü-sen（短ü）", meaning: "必須" }, { word: "Straße", pronunciation: "Strah-se（長a）", meaning: "街道" }], notes: "這是分辨 ss 和 ß 的最重要規則！" },
  { id: "pr012", title: "複合母音 ei → [ai]", rule: "ei 發 [ai]，類似英文 eye 的音。", examples: [{ word: "mein", pronunciation: "main", meaning: "我的" }, { word: "heißen", pronunciation: "hai-sen", meaning: "叫做" }], notes: "最常見的複合母音！" },
  { id: "pr013", title: "複合母音 eu / äu → [ɔy]", rule: "eu 和 äu 都發 [ɔy]，類似英文 boy 的音。", examples: [{ word: "heute", pronunciation: "hoy-te", meaning: "今天" }, { word: "Häuser", pronunciation: "Hoy-zer", meaning: "房子複數" }], notes: "äu 是 au 的變音版，但發音和 eu 一樣。" },
  { id: "pr014", title: "複合母音 au → [au]", rule: "au 發 [au]，類似英文 how 的音。", examples: [{ word: "Haus", pronunciation: "House（短）", meaning: "房子" }, { word: "laufen", pronunciation: "lau-fen", meaning: "跑" }], notes: "au 要短促。" },
  { id: "pr015", title: "W → 發英文 V 的音 [v]", rule: "德文的 W 不發英文 W，而是發英文 V 的音。", examples: [{ word: "Wasser", pronunciation: "Va-ser", meaning: "水" }, { word: "Wien", pronunciation: "Veen", meaning: "維也納" }], notes: "台灣人最容易發錯！W 要咬唇發 [v]。" },
  { id: "pr016", title: "V → 通常發 [f]，外來語發 [v]", rule: "德文原生詞的 V 發 [f]；外來語的 V 發 [v]。", examples: [{ word: "Vater", pronunciation: "Fah-ter", meaning: "父親" }, { word: "Vase", pronunciation: "Vah-ze（外來語）", meaning: "花瓶" }], notes: "外來語通常可以從詞義猜測。" },
  { id: "pr017", title: "Z → 永遠發 [ts]（注音ㄘ）", rule: "德文 Z 永遠發 [ts]，類似中文注音的「ㄘ」。", examples: [{ word: "Zeit", pronunciation: "Tsait", meaning: "時間" }, { word: "zehn", pronunciation: "Tsen", meaning: "十" }, { word: "Zimmer", pronunciation: "Tsi-mer", meaning: "房間" }], notes: "絕對不要發英文 Z 的音！" },
  { id: "pr018", title: "S：字首+母音=濁音，字尾=清音", rule: "S 在字首接母音時發濁音 [z]；在字尾時發清音 [s]。", examples: [{ word: "Sonne", pronunciation: "Zo-ne（字首）", meaning: "太陽" }, { word: "Bus", pronunciation: "Buss（字尾）", meaning: "公車" }], notes: "字首的 S 像英文 Z；字尾的 S 像注音ㄙ。" },
  { id: "pr019", title: "SCH → 永遠發 [ʃ]（英文 sh）", rule: "sch 這個組合永遠發 [ʃ]，類似英文 sh 的音。", examples: [{ word: "Schule", pronunciation: "Shoo-le", meaning: "學校" }, { word: "schön", pronunciation: "Shö-n", meaning: "漂亮的" }], notes: "SCH = SH，這個規則很固定。" },
  { id: "pr020", title: "ST / SP 字首 → [ʃt] / [ʃp]", rule: "st 和 sp 在字首時，s 要發 [ʃ]。", examples: [{ word: "Stadt", pronunciation: "Shtadt", meaning: "城市" }, { word: "spielen", pronunciation: "Shpee-len", meaning: "玩" }], notes: "只有在字首才這樣！" },
  { id: "pr021", title: "CH①：ich 音 [ç]（e/i/ä/ö/ü/ei/ie 後）", rule: "ch 出現在 e、i、ä、ö、ü、ei、ie 之後，發軟摩擦音 [ç]。", examples: [{ word: "ich", pronunciation: "ikh（軟）", meaning: "我" }, { word: "nicht", pronunciation: "nikht（軟）", meaning: "不" }, { word: "Milch", pronunciation: "Milkh（軟）", meaning: "牛奶" }, { word: "leicht", pronunciation: "laikht（軟）", meaning: "容易的／輕的" }, { word: "siechen", pronunciation: "ziikhen（軟）", meaning: "因長期患病而日益虛弱" }], notes: "有人說像貓咪嘶嘶聲，舌頭往前。" },
  { id: "pr022", title: "CH②：ach 音 [x]（a/o/u/au 後）", rule: "ch 出現在 a、o、u、au 之後，發喉嚨後方的摩擦音 [x]。", examples: [{ word: "Bach", pronunciation: "Bakh（硬）", meaning: "小溪" }, { word: "machen", pronunciation: "ma-khen（硬）", meaning: "做" }, { word: "lachen", pronunciation: "la-khen（硬）", meaning: "笑" }, { word: "Buch", pronunciation: "Bukh（硬）", meaning: "書" }], notes: "有點像清嗓子的聲音。" },
  { id: "pr023", title: "CH③：外來語 ch → [k] 或 [ʃ]", rule: "外來語中 ch 可能發 [k]（希臘文）或 [ʃ]（法文）。", examples: [{ word: "Chaos", pronunciation: "Ka-os", meaning: "混亂" }, { word: "Chor", pronunciation: "Kor", meaning: "合唱團" }, { word: "Charakter", pronunciation: "Ka-rak-ter", meaning: "性格" }, { word: "Chef", pronunciation: "Shef", meaning: "老闆" }, { word: "Chance", pronunciation: "Shangs", meaning: "機會" }, { word: "Charme", pronunciation: "Sharm", meaning: "魅力" }], notes: "Chaos／Chor／Charakter 是希臘文外來語，發 [k]；Chef／Chance／Charme 是法文外來語，發 [ʃ]。重音通常延用外來語原本的重音位置。" },
  { id: "pr024", title: "重音：大部分德文字重音在第一音節", rule: "德文大多數詞的重音在第一個音節。外來語後綴重音在後面。", examples: [{ word: "MUTter", pronunciation: "MU-ter", meaning: "母親（重MU）" }, { word: "LEHrer", pronunciation: "LEH-rer", meaning: "老師（重LEH）" }, { word: "SCHUle", pronunciation: "SHU-le", meaning: "學校（重SHU）" }, { word: "naTION", pronunciation: "na-TION", meaning: "國家（重TION）" }, { word: "reviSION", pronunciation: "re-vi-SION", meaning: "修訂（重SION）" }, { word: "NationaLISmus", pronunciation: "na-tsio-na-LIS-mus", meaning: "國家主義（重LIS）" }], notes: "外來語後綴（-tion/-sion/-ismus）重音在後面，其他大部分重音在第一音節。" },
  { id: "pr025", title: "R — 喉音／小舌音的 R", rule: "德文的 R 多發小舌顫音（喉嚨後方摩擦音），和英文、中文的捲舌 R 完全不同，是台灣學習者公認最難的發音之一。", examples: [{ word: "sehr", pronunciation: "ze-eh（喉音R）", meaning: "非常" }, { word: "Tür", pronunciation: "tühr（喉音R）", meaning: "門" }], notes: "建議找德文母語人士的發音影片反覆模仿練習；不同地區（如德國南部、北部）發音也略有差異。初學重點：不要念成英文美式 R；不需要一開始就完全像德國人；可以先模仿清痰的喉嚨摩擦感覺來抓發音位置。" },
  { id: "pr026", title: "tsch — 發 [tʃ]（接近英文 ch）", rule: "tsch 這個組合發 [tʃ]，接近英文 ch 的音。", examples: [{ word: "Deutsch", pronunciation: "doitch", meaning: "德文" }, { word: "tschüss", pronunciation: "tchüss", meaning: "再見" }], notes: "tschüss 是非正式但很通用的道別語，對任何人都能用，朋友、長輩都可以說。" },
  { id: "pr027", title: "h①：字首的正常子音發音", rule: "h 出現在字首（不是接在母音後面延長母音時），要正常發音，類似中文的「ㄏ」。", examples: [{ word: "Haus", pronunciation: "house", meaning: "房子" }, { word: "haben", pronunciation: "hah-ben", meaning: "有（ich habe）" }], notes: "對比 pr006：h 出現在母音「後面」時不發音，只負責拉長母音（如 sehen）；但 h 在字首時是正常子音，要發出來。" },
  { id: "pr028", title: "j — 發 [j]（接近英文 y）", rule: "j 發 [j]，接近英文字母 y 的音，不是英文 j（juice）的音。", examples: [{ word: "ja", pronunciation: "yah", meaning: "是" }, { word: "Jahr", pronunciation: "yahr", meaning: "年" }, { word: "Juli", pronunciation: "yoo-lee", meaning: "七月" }], notes: "千萬不要發成英文 j（像 juice 開頭）的音。" },
  { id: "pr029", title: "ng — 發 [ŋ]（鼻音）", rule: "ng 整組發鼻音 [ŋ]，類似注音「ㄥ」的尾音，不要把 g 額外發出來。", examples: [{ word: "lang", pronunciation: "lung（鼻音）", meaning: "長的" }, { word: "Finger", pronunciation: "fing-er", meaning: "手指" }, { word: "bringen", pronunciation: "bring-en", meaning: "帶來" }], notes: "整個 ng 是一個鼻音單位，發音時舌根抵住軟顎。" },
  { id: "pr030", title: "nk — 發 [ŋk]", rule: "nk 先發鼻音 [ŋ]，再接著清楚發出 [k]。", examples: [{ word: "trinken", pronunciation: "tring-ken", meaning: "喝" }, { word: "denken", pronunciation: "deng-ken", meaning: "思考" }], notes: "和 ng 的差別在於 nk 後面多了清楚的 k 音，要發出來。" },
  { id: "pr031", title: "非重讀 e — 弱化成 [ə]", rule: "非重讀的 e（通常在字尾）會弱化成模糊的 [ə] 音，類似輕聲的「ㄜ」。", examples: [{ word: "bitte", pronunciation: "bit-tə", meaning: "請（來自 ich bitten + e 變化而來）" }, { word: "Lehrer", pronunciation: "lehr-ɐ（字尾 -er 發 /ɐ/）", meaning: "老師（陰性：die Lehrerin 女老師）" }, { word: "gehen", pronunciation: "geh-ən", meaning: "去" }], notes: "字尾 -er 常發成模糊的 /ɐ/ 音，不是英文捲舌的 er。職業名詞陰性常加 -in：der Lehrer → die Lehrerin。" },
  { id: "pr032", title: "重音規則：不可分前綴（be-/ge-/ver-/zer-/ent-）不重讀", rule: "be-、ge-、ver-、zer-、ent- 這些不可分前綴通常不重讀，重音落在後面的字根上。", examples: [{ word: "verSTEhen", pronunciation: "fer-SHTEH-en", meaning: "理解" }, { word: "beGINnen", pronunciation: "be-GIN-nen", meaning: "開始" }], notes: "這些前綴是「不可分」的，動詞變化時前綴不會跟字根分開。" },
  { id: "pr033", title: "重音規則：可分前綴要重讀", rule: "可分前綴（如 auf-、ein-）通常要重讀，和不可分前綴恰好相反。", examples: [{ word: "AUFstehen", pronunciation: "AUF-shteh-en", meaning: "起床" }, { word: "EINkaufen", pronunciation: "EIN-kau-fen", meaning: "購物" }], notes: "可分前綴在造句時還會分開、移到句尾，這部分等之後上到文法時會再詳細介紹。" },
];

// ============================================================
// 德文句型庫（來自 App 截圖，依單元分組；單字已拆出放入 GERMAN_VOCABULARY）
// 格式：{ id, stage, part, unitTitle, german, chinese }
// ============================================================
const GERMAN_SENTENCES = [
  // === 第1階段，第2部分：介紹自己和問好 ===
  { id: "s001", stage: 1, part: 2, unitTitle: "介紹自己和問好", german: "Hallo, ich komme aus Tokio!", chinese: "你好，我來自東京！" },
  { id: "s002", stage: 1, part: 2, unitTitle: "介紹自己和問好", german: "Ich bin Anna, und du?", chinese: "我是安娜，你呢？" },
  { id: "s003", stage: 1, part: 2, unitTitle: "介紹自己和問好", german: "Freut mich, David!", chinese: "很高興認識你，大衛！" },
  { id: "s004", stage: 1, part: 2, unitTitle: "介紹自己和問好", german: "Toronto oder Paris?", chinese: "多倫多還是巴黎？" },
  { id: "s005", stage: 1, part: 2, unitTitle: "介紹自己和問好", german: "Hallo, ich bin David!", chinese: "你好，我是大衛！" },
  // === 第1階段，第3部分：介紹你的家人 ===
  { id: "s006", stage: 1, part: 3, unitTitle: "介紹你的家人", german: "Das ist meine Tochter, Lisa.", chinese: "這是我的女兒，麗莎。" },
  { id: "s007", stage: 1, part: 3, unitTitle: "介紹你的家人", german: "Hallo, das ist mein Bruder, Max.", chinese: "你好，這是我的兄弟，馬克斯。" },
  { id: "s008", stage: 1, part: 3, unitTitle: "介紹你的家人", german: "Mein Sohn ist lustig!", chinese: "我的兒子很有趣！" },
  { id: "s009", stage: 1, part: 3, unitTitle: "介紹你的家人", german: "Ich bin Mia.", chinese: "我是米婭。" },
  { id: "s010", stage: 1, part: 3, unitTitle: "介紹你的家人", german: "Das ist mein Papa, David.", chinese: "這是我的爸爸，大衛。" },
  // === 第1階段，第4部分：談論食物 ===
  { id: "s011", stage: 1, part: 4, unitTitle: "談論食物", german: "Die Wurst ist lecker und billig!", chinese: "香腸很美味，也很便宜！" },
  { id: "s012", stage: 1, part: 4, unitTitle: "談論食物", german: "Ich bin hungrig.", chinese: "我很餓。" },
  { id: "s013", stage: 1, part: 4, unitTitle: "談論食物", german: "Das Schnitzel ist frisch.", chinese: "炸肉排很新鮮。" },
  { id: "s014", stage: 1, part: 4, unitTitle: "談論食物", german: "Der Salat ist lecker!", chinese: "沙拉很美味！" },
  { id: "s015", stage: 1, part: 4, unitTitle: "談論食物", german: "Meine Pizza ist gut!", chinese: "我的披薩很好吃！" },
  // === 第1階段，第5部分：問路 ===
  { id: "s016", stage: 1, part: 5, unitTitle: "問路", german: "Die Stadt ist groß und schön!", chinese: "城市很大，也很漂亮！" },
  { id: "s017", stage: 1, part: 5, unitTitle: "問路", german: "Wo ist der Bahnhof?", chinese: "火車站在哪裡？" },
  { id: "s018", stage: 1, part: 5, unitTitle: "問路", german: "Der Park ist da drüben.", chinese: "公園在那邊。" },
  { id: "s019", stage: 1, part: 5, unitTitle: "問路", german: "Das Hotel ist klein und billig.", chinese: "酒店很小，也很便宜。" },
  { id: "s020", stage: 1, part: 5, unitTitle: "問路", german: "Hallo, wo ist das Café?", chinese: "你好，咖啡館在哪裡？" },
  // === 自我介紹（作文修正版，含格位文法練習）===
  { id: "s021", stage: 1, part: 6, unitTitle: "自我介紹（作文修正版）", german: "Ich heiße Christine. Ich komme aus Taiwan und wohne jetzt in Hsinchu.", chinese: "我叫克莉絲汀。我來自台灣，現在住在新竹。" },
  { id: "s022", stage: 1, part: 6, unitTitle: "自我介紹（作文修正版）", german: "Ich bin Forscherin. Ich arbeite derzeit an einem Forschungsinstitut.", chinese: "我是研究員。我目前在一間研究機構工作。" },
  { id: "s023", stage: 1, part: 6, unitTitle: "自我介紹（作文修正版）", german: "Ich habe einen Freund namens Murray. Er ist Taiwaner.", chinese: "我有一個男朋友，名叫Murray。他是台灣人。" },
  { id: "s024", stage: 1, part: 6, unitTitle: "自我介紹（作文修正版）", german: "Ich habe schwarze Haare und braune Augen.", chinese: "我有黑色頭髮和棕色眼睛。" },
  { id: "s025", stage: 1, part: 6, unitTitle: "自我介紹（作文修正版）", german: "Meine Eltern leben in Hsinchu.", chinese: "我的父母住在新竹。" },
  { id: "s026", stage: 1, part: 6, unitTitle: "自我介紹（作文修正版）", german: "Mein Vater heißt Cello. Er ist 59 Jahre alt und im Ruhestand.", chinese: "我爸爸叫Cello。他59歲，已經退休了。" },
  { id: "s027", stage: 1, part: 6, unitTitle: "自我介紹（作文修正版）", german: "Früher standen wir uns sehr nahe, aber nachdem er wegen der Arbeit nach Taipeh gezogen ist, haben wir weniger Kontakt.", chinese: "以前我們感情很好，但自從他因為工作搬去台北之後，我們的聯絡變少了。" },
  { id: "s028", stage: 1, part: 6, unitTitle: "自我介紹（作文修正版）", german: "Ich besuche ihn aber immer noch manchmal in Taipeh.", chinese: "但我仍然有時候會去台北看他。" },
];
