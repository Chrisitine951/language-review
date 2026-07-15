// ============================================================
// grimm-data.js — 格林字根 App 主資料庫
// 版本：資料批次 1（2026-07-15，來源：Christine 的劉鎮英文影片筆記，
// 由 AI 用自己的話改寫整理；不逐字轉錄影片內容）
// 結構：SOUND_RULES（轉音規則）→ LETTER_GUIDE（A–Z 字母指南）
//       → GRIMM_ROOTS（字根）→ AFFIXES（字首字尾）
// 注意：本檔只由 AI 在對話中批次更新，App 永遠不改寫此檔。
// 修改後必跑：node -c 語法檢查、id 不重複、引用完整性（見 DESIGN.md）
// ============================================================

// ==== 第一層：SOUND_RULES 轉音規則本體 ====
const SOUND_RULES = [
  {
    id: "sr01",
    title: "母音通轉 a / e / i / o / u / y",
    letters: ["a", "e", "i", "o", "u", "y"],
    articulation: "母音",
    explanation: "六個母音（含 y）在同族單字之間可以互相替換，而且不限一換一：一個母音換兩個、兩個換一個都很常見。常用來變化時態、詞性，或衍生出意義相近的同族字。",
    examplePairs: [
      { from: "sing", to: "song", note: "i↔o，動詞變名詞（過去式 sang、分詞 sung 也是母音在變）" },
      { from: "hot", to: "heat", note: "o↔ea，形容詞變名詞" },
      { from: "sit", to: "seat", note: "i↔ea，坐↔座位" },
      { from: "bite", to: "bait", note: "i↔ai，咬↔誘餌（同族還有 bitter、beetle）" },
      { from: "hurry", to: "hurricane", note: "y↔i，颶風＝hurry＋come，來得快去得快" },
      { from: "long", to: "linger", note: "o↔i，並伴隨字母壓縮（longer→linger 逗留）" }
    ]
  },
  {
    id: "sr02",
    title: "唇音互換 b / p / f / v / w",
    letters: ["b", "p", "f", "v", "w"],
    articulation: "唇音（雙唇音、唇齒音）",
    explanation: "發音都靠嘴唇的 b、p、f、v 可以互相轉換；古代 v 與 w 被視為同一個字母，所以 w 也算這一組。這是把簡單字變成複雜字最常用的一條規則。",
    examplePairs: [
      { from: "foot", to: "boot", note: "f↔b，腳↔穿在腳上的長靴" },
      { from: "pot", to: "bottle", note: "p↔b，罐子↔瓶子（tt 第二個無意義）" },
      { from: "ball", to: "vol-", note: "b↔v，會旋轉的東西必是球狀→vol＝旋轉" },
      { from: "break", to: "wreck", note: "b→v→w，打破↔船難、殘骸" },
      { from: "alps", to: "album", note: "p↔b，白色的山↔空白的地方" }
    ]
  },
  {
    id: "sr03",
    title: "舌音互換 d / t / s",
    letters: ["d", "t", "s"],
    articulation: "舌音（舌尖抵住或靠近牙齒）",
    explanation: "d、t、s 發音時舌頭位置幾乎相同，很容易互換。最常出現在過去式變化、詞性轉換，以及字根衍生的時候。",
    examplePairs: [
      { from: "send", to: "sent", note: "d↔t，過去式（spend→spent 同理）" },
      { from: "wise", to: "wit", note: "s↔t，形容詞（睿智的）變名詞（機智）" },
      { from: "potion", to: "poison", note: "t↔s，藥水↔毒藥（毒藥本質也是一種藥水）" },
      { from: "sit", to: "session", note: "t↔ss，一群人坐著→會議、場次" },
      { from: "mind", to: "mental", note: "d↔t 再加 -al，心靈→心理的" }
    ]
  },
  {
    id: "sr04",
    title: "喉音互換 g / k / c",
    letters: ["g", "k", "c"],
    articulation: "喉音（從喉嚨、軟顎發出）",
    explanation: "g、k、c 都從喉嚨發出，三個音可以互相替換，是同一組兄弟姊妹音。",
    examplePairs: [
      { from: "bag", to: "basket", note: "g↔k，袋子↔小袋子（-et 表小）＝籃子" },
      { from: "corn", to: "kernel", note: "c↔k，穀物↔小穀粒、核心" },
      { from: "blanc", to: "blank", note: "c↔k，白（白朗峰的白）↔空白" },
      { from: "sneak", to: "smuggle", note: "k↔g（加上 n↔m），潛行↔走私" }
    ]
  },
  {
    id: "sr05",
    title: "鼻音互換 n / m",
    letters: ["n", "m"],
    articulation: "鼻音",
    explanation: "古代語言常把 n 與 m 視為同一個音，兩個鼻音可以互換。",
    examplePairs: [
      { from: "come", to: "hurricane", note: "m↔n，hurry＋come→hurricane" },
      { from: "snake", to: "smuggle", note: "n↔m，蛇行潛入↔走私" }
    ]
  },
  {
    id: "sr06",
    title: "流音互換 l / r（可省略）",
    letters: ["l", "r"],
    articulation: "流音",
    explanation: "l 與 r 發音位置相近，常互相轉換；兩個流音連在一起不好發音時，拼字上常省略其中一個（通常是 r）。",
    examplePairs: [
      { from: "bar", to: "pile", note: "r↔l（加上 b↔p），一根根木頭↔堆積" },
      { from: "circle", to: "cycle", note: "r 與 l 連讀不便，省略 r，圓↔循環" }
    ]
  },
  {
    id: "sr07",
    title: "雙子音規則（結構）",
    letters: [],
    articulation: "拼字結構規則",
    explanation: "單字裡出現連續兩個相同子音（tt、rr、ss、dd…）時，第二個通常不具意義，只是加強語氣或維持音節結構。拆字根時看第一個子音（含）之前就好。",
    examplePairs: [
      { from: "sit", to: "settle", note: "tt 的第二個 t 無意義，核心仍是「坐」→安頓" },
      { from: "bar", to: "barrier", note: "rr 的第二個 r 無意義，木棒組成的障礙物" },
      { from: "bat", to: "battle", note: "tt 強調動作反覆：反覆敲打→戰役" },
      { from: "pot", to: "bottle", note: "tt 無意義，p↔b，罐子→瓶子" }
    ]
  },
  {
    id: "sr08",
    title: "a＋重複子音＝加強語氣（結構）",
    letters: [],
    articulation: "拼字結構規則",
    explanation: "單字開頭是 a 加上重複子音（ac-、as-、ad-、af-、al-…）時，開頭的 a 與第一個子音通常只是加強語氣、沒有實質意義，真正的字根從後面開始。",
    examplePairs: [
      { from: "sume", to: "assume", note: "as- 加強語氣，核心是 sume（吸食、接受）→假設" },
      { from: "cur", to: "accurate", note: "ac- 加強語氣，核心是 cur（關心、注意）→精準的" },
      { from: "value", to: "available", note: "開頭 a＋v 為加強，核心來自 value→可被利用的" }
    ]
  }
,
  {
    id: "sr09",
    title: "喉音弱化 c / k ↔ h",
    letters: ["c", "k", "h"],
    articulation: "喉音 → 氣音",
    explanation: "同一個古老的字在拉丁文裡保留 c/k 的音，傳到英文卻弱化成 h。所以一個拉丁借來的難字，常常在英文裡有一個 h 開頭的簡單兄弟字。認出這條規則，等於幫大量雅思單字找到「你本來就會的親戚」。",
    examplePairs: [
      { from: "heart", to: "cord", note: "h↔c，心→cordial（發自內心的）、record（一再放在心上）" },
      { from: "guest", to: "host", note: "h↔g／c，客人→hospital（招待病人的地方）、hostile（外來者也可能是敵人）" },
      { from: "have", to: "cap", note: "h↔c，拿在手上→capture、accept、receive" },
      { from: "horn", to: "corn", note: "h↔c，角→unicorn（一隻角的獸）；與穀物的 corn 只是碰巧同形" }
    ]
  }
];

// ==== 第二層：LETTER_GUIDE A–Z 字母指南（固定 26 筆）====
const LETTER_GUIDE = [
  { letter: "A", soundRuleIds: ["sr01", "sr08"],
    meaningNotes: "母音之首，可與 e/i/o/u/y 通轉。單字開頭的 a＋重複子音（ac-、as-、ad-…）通常只是加強語氣。alp / blanc 帶出「白色」的形象（阿爾卑斯山的雪）。",
    rootIds: ["gr001", "gr019", "gr020"] },
  { letter: "B", soundRuleIds: ["sr02", "sr07"],
    meaningNotes: "形象一：木頭、木棍（很像中文的木字旁）——條狀物、阻擋、打擊、分支都從這裡來。形象二：球、圓形、漲大——大寫 B 像兩個球、小寫 b 像一個球，容器與球體的觀念由此延伸。",
    rootIds: ["gr002", "gr003", "gr004", "gr005", "gr006", "gr021"] },
  { letter: "C", soundRuleIds: ["sr04", "sr09"],
    meaningNotes: "喉音，可與 g/k 互換。發音時舌頭彎曲，帶出「彎曲→圓→跑→核心」一整串形象：curve、circle、occur、core 都是一家人。另外拉丁的 c 傳到英文常弱化成 h（cord↔heart、cap↔have），所以 c 開頭的難字往往有個 h 開頭的簡單兄弟。",
    rootIds: ["gr007", "gr008", "gr009", "gr010", "gr022", "gr023", "gr024"] },
  { letter: "D", soundRuleIds: ["sr03"],
    meaningNotes: "舌音，與 t/s 互換，最常見於過去式（send→sent）與詞性變化（mind→mental）。拉丁的 d 字根往往在英文有 t 的兄弟：dict（說）↔teach、duc（引導）↔tow、dent（牙）↔tooth。字首 dis- 表「分離、否定」。",
    rootIds: ["gr025", "gr026", "gr027"] },
  { letter: "E", soundRuleIds: ["sr01"],
    meaningNotes: "母音通轉成員。字首 e-/ex- 表「出去」、en- 表「動作化、令其如何」；字尾 -ee 表「被…的人或物」、-et/-el 表「小」。",
    rootIds: ["gr028"] },
  { letter: "F", soundRuleIds: ["sr02"],
    meaningNotes: "唇音，最常與 b 互換：foot→boot、break→fracture/fragile。拉丁的 f 字根常對應英文的 b：fer（帶）↔bear。",
    rootIds: ["gr011", "gr029", "gr030", "gr031", "gr032"] },
  { letter: "G", soundRuleIds: ["sr04"],
    meaningNotes: "喉音，與 k/c 互換（bag→basket）。拉丁的 g 字根常有英文的 k 兄弟：gen（生）↔kin（親族）。go 放在字尾也有「動作化」的味道（embargo＝令其禁止出入）。",
    rootIds: ["gr033", "gr034", "gr035"] },
  { letter: "H", soundRuleIds: ["sr09"],
    meaningNotes: "在格林法則裡 h 是關鍵：拉丁保留 c/k 的音，傳到英文卻弱化成 h。所以看到 h 開頭的簡單字，常常能找到一個 c/k 開頭的拉丁難字親戚：heart↔cord、guest↔host、have↔cap、horn↔corn。",
    rootIds: ["gr036", "gr037"] },
  { letter: "I", soundRuleIds: ["sr01"],
    meaningNotes: "母音通轉成員。字首 in- 有兩個意思：「在內、進入」（involve、incident）與「否定」（invisible、incredible），要看上下文。字尾 -ity 是名詞字尾、-ious 表「多」。",
    rootIds: ["gr038"] },
  { letter: "J", soundRuleIds: [],
    meaningNotes: "拉丁文原本沒有 j，寫成 i，所以 j 的字根常與 i/y 相通（junct 連接 ↔ yoke 牛軛）。三大字根：ject（丟）、jur/jus（法律）、junct（連接），都是雅思高頻。",
    rootIds: ["gr039", "gr040", "gr041"] },
  { letter: "K", soundRuleIds: ["sr04", "sr09"],
    meaningNotes: "喉音，與 g/c 互換（corn→kernel、blanc→blank）。k 開頭的英文簡單字常是拉丁 g/c 字根的本家兄弟：kin↔gen、know↔cogn。know 開頭那個不發音的 k 就是字根留下的化石。",
    rootIds: ["gr042", "gr043"] },
  { letter: "L", soundRuleIds: ["sr06"],
    meaningNotes: "流音，與 r 互換；r、l 相連不好發音時常省略 r（circle→cycle）。字尾 -let/-el 表「小」；-le 有時表「動作反覆」（battle）。",
    rootIds: ["gr044", "gr045"] },
  { letter: "M", soundRuleIds: ["sr05"],
    meaningNotes: "鼻音，與 n 互換。埃及象形文字中 M 是山的形狀：山上有霧（mist）→潮濕（moist）→看不清就神祕（mystery）。拉丁字根 mit/miss（送）、mot/mob（動）、manu（手）是雅思高頻。",
    rootIds: ["gr012", "gr046", "gr047", "gr048"] },
  { letter: "N", soundRuleIds: ["sr05"],
    meaningNotes: "鼻音，與 m 互換；發音弱時常被忽略（infringe 的核心其實是 frag）。un- 的 U 向上、N 向下，形象上代表否定。拉丁字根 nat（生）、nov（新）、nom（名）分別對應英文的 kin/gen、new、name。",
    rootIds: ["gr049", "gr050", "gr051"] },
  { letter: "O", soundRuleIds: ["sr01"],
    meaningNotes: "母音通轉成員。字首 ob-/oc- 表「向下」（occident＝太陽落下的地方，正好與 orient＝太陽升起的地方相對）；字尾 -ous 表「多」、-ory 表「地方」。",
    rootIds: ["gr052", "gr053"] },
  { letter: "P", soundRuleIds: ["sr02"],
    meaningNotes: "唇音，與 b/f/v 互換（pot→bottle、bar→pile）。拉丁的 p 字根常對應英文的 f：ped（腳）↔foot、port（帶）↔ford。",
    rootIds: ["gr013", "gr014", "gr054", "gr055", "gr056"] },
  { letter: "Q", soundRuleIds: [],
    meaningNotes: "英文的 q 幾乎永遠跟著 u。拉丁的 qu- 對應到英文的 f-／wh-，這是格林法則最有名的一組：quattuor↔four、quid↔what。核心字根 quest/quir（尋求）。",
    rootIds: ["gr057", "gr058"] },
  { letter: "R", soundRuleIds: ["sr06"],
    meaningNotes: "流音，與 l 互換，有時因發音不便被省略。字首 re- 表「再次、重複、回來」（repeat、recycle、revolve）。字根 rupt（破）與 reg/rect（直、統治，↔英文 right）是雅思常客。",
    rootIds: ["gr059", "gr060"] },
  { letter: "S", soundRuleIds: ["sr03"],
    meaningNotes: "舌音，與 d/t 互換（wise→wit）。字首 se- 表「分開、遠離」（separate、secure）。spect（看）、struct（建）、sta/sist（站↔stand）、scrib（寫）都是雅思閱讀的高頻字根。",
    rootIds: ["gr015", "gr016", "gr017", "gr061", "gr062", "gr063", "gr064", "gr065", "gr066", "gr067"] },
  { letter: "T", soundRuleIds: ["sr03"],
    meaningNotes: "舌音，與 d/s 互換。雙寫 tt 時第二個 t 無意義（battle、bottle、settle）。拉丁 t 字根常有英文 d 的兄弟：tract（拉）↔drag/draw。",
    rootIds: ["gr068", "gr069", "gr070"] },
  { letter: "U", soundRuleIds: ["sr01"],
    meaningNotes: "母音通轉成員。字首 un- 表否定；字尾 -um 表「地方」（museum、album）。字根 uni（一）就是英文的 one。",
    rootIds: ["gr071", "gr072"] },
  { letter: "V", soundRuleIds: ["sr02"],
    meaningNotes: "唇音；古代 v 與 w 被視為同一個字母，這解釋了 vid/vis（看）↔wise/wit（知）為什麼是同一家。vol＝旋轉（會旋轉的東西必是球狀→與 ball 同源，b↔v）。",
    rootIds: ["gr018", "gr073", "gr074", "gr075", "gr076", "gr077"] },
  { letter: "W", soundRuleIds: ["sr02"],
    meaningNotes: "古代與 v 通用，因此可經由 v 參與唇音互換（break→wreck）。w 開頭的英文簡單字常對應 v 開頭的拉丁難字：wise/wit↔vid/vis（看）。",
    rootIds: ["gr078"] },
  { letter: "X", soundRuleIds: [],
    meaningNotes: "英文沒有 x 開頭的字根，x 主要出現在字首 ex-（出去、向外）：evolve、expedition、export、extract。字中的 x 常是 c+s 或 g+s 的合寫。",
    rootIds: [] },
  { letter: "Y", soundRuleIds: ["sr01"],
    meaningNotes: "可當母音使用，參與母音通轉（hurry→hurricane）。字尾 -y 接名詞後表「多」（sunny、windy、cloudy），接動詞後成名詞。古代 y 與 i、j 相通，所以 yoke（軛）與 junct（連接）是親戚。",
    rootIds: [] },
  { letter: "Z", soundRuleIds: [],
    meaningNotes: "英文本家幾乎沒有 z 開頭的字，z 開頭多是希臘借字。z 的發音屬於舌音一家（與 s 最近）。最實用的字根是 zo/zoo（動物、生命）。",
    rootIds: ["gr079"] }
];

// ==== 第三層：GRIMM_ROOTS 字根本體 ====
// variants：同源變體（全小寫），本機查詢用「子字串比對」，
// 太短的變體（少於 3 個字母）只在整字相等時才算命中。
const GRIMM_ROOTS = [
  {
    id: "gr001",
    source: "notes",
    root: "alp / blanc",
    variants: ["alp", "blanc", "blank"],
    meaning: "白色；空白",
    origin: "阿爾卑斯山（Alps）／白朗峰（Mont Blanc）終年積雪的白",
    soundRuleId: "sr02",
    letter: "A",
    examples: [
      { word: "album", breakdown: "alb(白) + um(地方)", meaning: "原指可以貼東西的空白處→相簿、專輯" },
      { word: "blank", breakdown: "blanc 的 c↔k", meaning: "空白的（實際的空白，也指腦中一片空白）" },
      { word: "blanket", breakdown: "blanc(白) + et(小)", meaning: "白色羊毛做的毯子" },
      { word: "blame", breakdown: "blanc 的引申", meaning: "給人白眼（眼白多、眼神兇）→責備" }
    ],
    note: "alps→album 是唇音 p↔b；blanc→blank 是喉音 c↔k，一個字根同時示範兩條規則。"
  },
  {
    id: "gr002",
    source: "notes",
    root: "bar",
    variants: ["bar", "ban"],
    meaning: "細長的木棍、門栓；引申為禁止、阻擋",
    origin: "木棍的形象（B 很像中文的木字旁）",
    soundRuleId: "sr02",
    letter: "B",
    examples: [
      { word: "ban", breakdown: "bar 的引申", meaning: "門栓可以關門→禁止" },
      { word: "barrier", breakdown: "bar(木棒) + rier（rr 第二個無意義）", meaning: "由木棒組成的障礙物" },
      { word: "bare", breakdown: "bar 的引申", meaning: "去掉枝葉的光禿木頭→赤裸的、光禿的" },
      { word: "embargo", breakdown: "em(令其) + bar(栓住) + go", meaning: "令其禁止出入→封港、禁運" },
      { word: "pile", breakdown: "b↔p、r↔l", meaning: "一根根木頭堆起來→堆積" }
    ],
    note: ""
  },
  {
    id: "gr003",
    source: "notes",
    root: "bat / beat",
    variants: ["bat", "beat"],
    meaning: "木棒；用棒子敲打",
    origin: "較粗糙的木棒的形象",
    soundRuleId: "sr03",
    letter: "B",
    examples: [
      { word: "brave", breakdown: "bar/bat 的引申", meaning: "古代敢拿木棒跟人打仗的人→勇敢的" },
      { word: "debate", breakdown: "de(打倒) + bat(棒)", meaning: "想像用木棒把對方打倒→辯論" },
      { word: "battle", breakdown: "bat + tle（tt 表反覆）", meaning: "反覆敲打的過程→戰役" },
      { word: "board", breakdown: "bat 的 t↔d", meaning: "把木頭切成一片片→木板、甲板" },
      { word: "border", breakdown: "board 的引申", meaning: "座位間隔板的概念→邊界" },
      { word: "bud", breakdown: "bat 的 t↔d", meaning: "植物發芽像小木棒冒出來→芽" },
      { word: "botany", breakdown: "bud 的引申", meaning: "從「芽」的概念→植物學" }
    ],
    note: ""
  },
  {
    id: "gr004",
    source: "notes",
    root: "br-",
    variants: ["branch", "brother", "bridge"],
    meaning: "分支、分出去",
    origin: "樹木分枝的形象",
    soundRuleId: "sr02",
    letter: "B",
    examples: [
      { word: "brother", breakdown: "br(分支) + other", meaning: "家族的分支→兄弟" },
      { word: "branch", breakdown: "br(分支)", meaning: "樹的分支→樹枝、分店" },
      { word: "bridge", breakdown: "br(分支)", meaning: "分支出去連接兩岸→橋" }
    ],
    note: ""
  },
  {
    id: "gr005",
    source: "notes",
    root: "ball（球形）",
    variants: ["ball", "bul", "belly", "bald", "bold"],
    meaning: "球、圓形、漲大",
    origin: "大寫 B 像兩個球、小寫 b 像一個球",
    soundRuleId: "sr02",
    letter: "B",
    examples: [
      { word: "bag", breakdown: "圓形容器", meaning: "圓的袋子" },
      { word: "basket", breakdown: "bag 的 g↔k + et(小)", meaning: "小袋子→籃子" },
      { word: "bucket", breakdown: "bag 的 g↔k + et(小)", meaning: "裝水的小皮袋→水桶" },
      { word: "package", breakdown: "pack(b↔p) + age(名詞)", meaning: "包成一捆→包裹" },
      { word: "belly", breakdown: "球形的引申", meaning: "肚子突起像球→肚子" },
      { word: "bullet", breakdown: "bul(圓) + let(小)", meaning: "早期槍用的小圓鐵珠→子彈" },
      { word: "bulb", breakdown: "圓而凸的形象", meaning: "燈泡；植物球莖" },
      { word: "bald", breakdown: "像燈泡一樣亮", meaning: "禿頭的" },
      { word: "bold", breakdown: "漲大、厚實的觀念", meaning: "大膽的；（字體）粗體的" }
    ],
    note: ""
  },
  {
    id: "gr006",
    source: "notes",
    root: "break / frag",
    variants: ["break", "brake", "frag", "fring", "fract", "wreck"],
    meaning: "打破、破壞",
    origin: "break（打破）這個簡單字",
    soundRuleId: "sr02",
    letter: "B",
    examples: [
      { word: "brake", breakdown: "break 的母音變化", meaning: "打破速度→煞車" },
      { word: "wreck", breakdown: "b→v→w（古代 v＝w）", meaning: "破壞→船難、殘骸" },
      { word: "infringe", breakdown: "in + fring(b↔f，n 弱化混入)", meaning: "打破法律→違反" },
      { word: "fracture", breakdown: "fract(b↔f、k↔c)", meaning: "骨頭破掉→骨折" },
      { word: "fragile", breakdown: "frag(b↔f、k↔g)", meaning: "容易破的→易碎的、脆弱的" }
    ],
    note: "一個 break 同時示範唇音（b↔f↔w）與喉音（k↔c↔g）的轉換。"
  },
  {
    id: "gr007",
    source: "notes",
    root: "cur / circ / cyc",
    variants: ["cur", "circ", "cycl", "curv", "curl", "crab", "cradle", "crown"],
    meaning: "彎曲；圓；跑（跑步時肢體彎曲）",
    origin: "發 c 的音時舌頭彎曲的形象",
    soundRuleId: "sr06",
    letter: "C",
    examples: [
      { word: "curve", breakdown: "curv(彎)", meaning: "曲線" },
      { word: "curl", breakdown: "cur(彎) + l", meaning: "捲毛、捲曲" },
      { word: "circus", breakdown: "circ(圓) + us", meaning: "圓形帳篷→馬戲團" },
      { word: "circle", breakdown: "circ(圓) + le", meaning: "圓圈" },
      { word: "circulate", breakdown: "circ(圓) + ulate(動詞)", meaning: "繞圈→循環、流通" },
      { word: "recycle", breakdown: "re(再) + cycle(circle 省略 r)", meaning: "再次循環→回收" },
      { word: "occur", breakdown: "oc(朝向) + cur(跑)", meaning: "跑過來撞上你→發生" },
      { word: "crab", breakdown: "cr(彎) 的形象", meaning: "身體彎、橫著爬→螃蟹" },
      { word: "crown", breakdown: "cr(圓) 的形象", meaning: "圓形→皇冠" },
      { word: "cradle", breakdown: "cr(彎) 的形象", meaning: "彎曲弧形→搖籃" }
    ],
    note: "古代字母有左右來回的寫法，所以 cur- 與 cru- 常見字母位置互換。"
  },
  {
    id: "gr008",
    source: "notes",
    root: "cor / cour",
    variants: ["cor", "cour", "core"],
    meaning: "核心；心；勇氣（西洋人認為心代表勇氣）",
    origin: "彎曲圍繞出的中心（與 cur 家族同源，母音通轉）",
    soundRuleId: "sr01",
    letter: "C",
    examples: [
      { word: "core", breakdown: "彎曲圍出的中心", meaning: "核心" },
      { word: "courage", breakdown: "cour(心) + age(名詞)", meaning: "心＝勇氣" },
      { word: "encourage", breakdown: "en(令其) + courage(勇氣)", meaning: "令其有勇氣→鼓勵" },
      { word: "discourage", breakdown: "dis(遠離) + courage(勇氣)", meaning: "遠離勇氣→使沮喪、勸阻" },
      { word: "courageous", breakdown: "courage + ous(多)", meaning: "多勇氣的→勇敢的（注意重音後移）" }
    ],
    note: "cur 也有「關心、注意」的意思：accurate（ac- 加強＋cur）＝很注意→精準的；curious＝多關心→好奇的。"
  },
  {
    id: "gr009",
    source: "notes",
    root: "cident",
    variants: ["cident"],
    meaning: "落下（坐下去＝掉下去）",
    origin: "源自 sit（坐）的變形：s→c、t→d",
    soundRuleId: "sr03",
    letter: "C",
    examples: [
      { word: "occident", breakdown: "oc(向下) + cident(落下)", meaning: "太陽落下的地方→西方" },
      { word: "accident", breakdown: "ac(加強) + cident(落下)", meaning: "意料之外掉下來的事→意外" },
      { word: "incident", breakdown: "in(在內) + cident(落下)", meaning: "意料之中發生的事→事件" }
    ],
    note: ""
  },
  {
    id: "gr010",
    source: "notes",
    root: "corn / kern",
    variants: ["corn", "kern"],
    meaning: "穀物；穀粒、核心",
    origin: "corn（穀物）這個簡單字",
    soundRuleId: "sr04",
    letter: "C",
    examples: [
      { word: "kernel", breakdown: "kern(c↔k、o↔e) + el(小)", meaning: "小穀粒→果仁、核心" }
    ],
    note: ""
  },
  {
    id: "gr011",
    source: "notes",
    root: "foot / boot",
    variants: ["foot", "boot"],
    meaning: "腳；靴子",
    origin: "foot（腳）這個簡單字",
    soundRuleId: "sr02",
    letter: "F",
    examples: [
      { word: "boot", breakdown: "foot 的 f↔b", meaning: "穿在腳上→長靴" },
      { word: "booty", breakdown: "boot 的引申", meaning: "海盜穿靴子搶來的東西→戰利品" },
      { word: "boutique", breakdown: "booty 的引申", meaning: "賣好東西（戰利品）的店→精品店" },
      { word: "sabotage", breakdown: "sabot(木鞋) + age", meaning: "15 世紀工人把木鞋丟進織布機搞破壞→蓄意破壞" }
    ],
    note: "sabot（木鞋）連回 boot，也是唇音轉換的例子。"
  },
  {
    id: "gr012",
    source: "notes",
    root: "m（山的形象）",
    variants: ["mist", "moist", "myst", "mount"],
    meaning: "山；霧；潮濕；神祕",
    origin: "埃及象形文字中 M 的形狀代表山",
    soundRuleId: "sr01",
    letter: "M",
    examples: [
      { word: "mist", breakdown: "山上的霧", meaning: "霧" },
      { word: "moist", breakdown: "mist 的母音變化", meaning: "有霧的地方→潮濕的" },
      { word: "mystery", breakdown: "myst(霧) + ery(地方)", meaning: "起霧看不清的地方→神祕" }
    ],
    note: ""
  },
  {
    id: "gr013",
    source: "notes",
    root: "ped / pad",
    variants: ["ped", "pad"],
    meaning: "腳；行走",
    origin: "feet（腳）的形象",
    soundRuleId: "sr01",
    letter: "P",
    examples: [
      { word: "paddle", breakdown: "pad(腳) + dle（dd 加強）", meaning: "腳踩的地方→踏板；划槳" },
      { word: "expedition", breakdown: "ex(出去) + ped(走) + ition", meaning: "走路出去→遠征、探險" }
    ],
    note: ""
  },
  {
    id: "gr014",
    source: "notes",
    root: "pot",
    variants: ["pot", "bottl", "potion", "poison"],
    meaning: "罐子、容器",
    origin: "pot（罐子）這個簡單字",
    soundRuleId: "sr02",
    letter: "P",
    examples: [
      { word: "bottle", breakdown: "pot 的 p↔b + tle（tt 無意義）", meaning: "瓶子" },
      { word: "butler", breakdown: "bottle 的 o↔u + er(人)", meaning: "最早是幫主人開瓶的人→男管家" },
      { word: "potion", breakdown: "pot(罐) + ion", meaning: "一罐藥水→藥水" },
      { word: "poison", breakdown: "potion 的 t↔s", meaning: "毒藥（本質也是一種藥水）" }
    ],
    note: ""
  },
  {
    id: "gr015",
    source: "notes",
    root: "sit / sed",
    variants: ["sit", "seat", "sess", "settl", "saddl", "sedan"],
    meaning: "坐",
    origin: "sit（坐）這個簡單字",
    soundRuleId: "sr03",
    letter: "S",
    examples: [
      { word: "seat", breakdown: "sit 的 i↔ea", meaning: "座位" },
      { word: "saddle", breakdown: "sit 的變形 + dle（dd 加強）", meaning: "馬鞍（坐在馬上的地方）" },
      { word: "settee", breakdown: "set + t(加強) + ee(被坐的東西)", meaning: "長靠椅、小沙發" },
      { word: "sedan", breakdown: "sed(坐) + an", meaning: "坐的車→轎車" },
      { word: "session", breakdown: "sit 的 t↔ss + ion", meaning: "一群人坐著→會議、場次" },
      { word: "settle", breakdown: "sit + tle（tt 無意義）", meaning: "坐下來→安頓、定居、解決" }
    ],
    note: "cident（落下）也是 sit 的遠親：坐下去＝掉下去。"
  },
  {
    id: "gr016",
    source: "notes",
    root: "sume",
    variants: ["sume", "sump"],
    meaning: "吸食、吃進去；接受",
    origin: "吸食、吃東西的聲音",
    soundRuleId: "sr08",
    letter: "S",
    examples: [
      { word: "assume", breakdown: "as(加強) + sume(接受)", meaning: "未經證實就先接受的想法→假設、假定" }
    ],
    note: ""
  },
  {
    id: "gr017",
    source: "notes",
    root: "snake / sneak",
    variants: ["snake", "sneak", "smuggl"],
    meaning: "蛇；像蛇一樣潛行",
    origin: "snake（蛇）這個簡單字",
    soundRuleId: "sr05",
    letter: "S",
    examples: [
      { word: "sneak", breakdown: "snake 的母音變化", meaning: "潛行、偷偷摸摸" },
      { word: "smuggle", breakdown: "sneak 的 n↔m、k↔g", meaning: "像蛇一樣偷偷潛入→走私" }
    ],
    note: ""
  },
  {
    id: "gr018",
    source: "notes",
    root: "vol",
    variants: ["vol"],
    meaning: "旋轉",
    origin: "ball 的 b↔v：西洋人認為會旋轉的東西必然是球狀的",
    soundRuleId: "sr02",
    letter: "V",
    examples: [
      { word: "involve", breakdown: "in(在內) + vol(旋轉)", meaning: "在內部旋轉→捲入、牽涉" },
      { word: "evolve", breakdown: "e(向外) + vol(旋轉)", meaning: "向外旋轉前進→進化" },
      { word: "revolve", breakdown: "re(一再) + vol(旋轉)", meaning: "旋轉" },
      { word: "revolution", breakdown: "re + vol + ution", meaning: "政權的輪轉→革命" }
    ],
    note: ""
  },
  {
    id: "gr019",
    source: "etymology",
    root: "aud / audi",
    variants: ["aud"],
    meaning: "聽",
    origin: "拉丁 audire（聽）",
    soundRuleId: "sr01",
    letter: "A",
    examples: [
      { word: "audio", breakdown: "aud(聽) + io", meaning: "音訊、聲音的" },
      { word: "audience", breakdown: "aud(聽) + ience", meaning: "聽的人→觀眾、聽眾" },
      { word: "audible", breakdown: "aud(聽) + ible(可被)", meaning: "聽得見的" },
      { word: "auditorium", breakdown: "aud(聽) + orium(地方)", meaning: "聽的地方→禮堂" },
      { word: "audit", breakdown: "aud(聽)", meaning: "古代查帳是「聽」報告→稽核、旁聽" }
    ],
    note: "-orium／-ory 都是「地方」，跟 factory、mystery 同一組字尾。"
  },
  {
    id: "gr020",
    source: "etymology",
    root: "ann / enn",
    variants: ["ann", "enn"],
    meaning: "年",
    origin: "拉丁 annus（年）",
    soundRuleId: "sr01",
    letter: "A",
    examples: [
      { word: "annual", breakdown: "ann(年) + al(形容詞)", meaning: "每年的" },
      { word: "anniversary", breakdown: "ann(年) + vers(轉) + ary", meaning: "年度轉回同一天→週年" },
      { word: "biennial", breakdown: "bi(二) + enn(年) + ial", meaning: "兩年一次的" }
    ],
    note: "ann→enn 是母音通轉；anniversary 裡的 vers 就是 vol 那一家的「轉」（見 gr074）。"
  },
  {
    id: "gr021",
    source: "etymology",
    root: "bio",
    variants: ["bio"],
    meaning: "生命",
    origin: "希臘 bios（生命）",
    soundRuleId: "sr01",
    letter: "B",
    examples: [
      { word: "biology", breakdown: "bio(生命) + logy(學問)", meaning: "生物學" },
      { word: "biography", breakdown: "bio(生命) + graph(寫) + y", meaning: "寫某人的一生→傳記" },
      { word: "antibiotic", breakdown: "anti(對抗) + bio(生命) + tic", meaning: "對抗（細菌）生命→抗生素" },
      { word: "biodiversity", breakdown: "bio(生命) + divers(多樣) + ity", meaning: "生物多樣性" }
    ],
    note: "雅思環境類文章的常客：biodiversity、biofuel、biomass。"
  },
  {
    id: "gr022",
    source: "etymology",
    root: "cap / cept / ceive",
    variants: ["cap", "cept", "ceive", "cip"],
    meaning: "拿、抓住",
    origin: "拉丁 capere（拿），與英文 have、heave 同源（c↔h）",
    soundRuleId: "sr09",
    letter: "C",
    examples: [
      { word: "capture", breakdown: "cap(抓) + ture", meaning: "抓住→捕捉" },
      { word: "accept", breakdown: "ac(加強) + cept(拿)", meaning: "把它拿過來→接受" },
      { word: "receive", breakdown: "re(回來) + ceive(拿)", meaning: "拿回來→收到" },
      { word: "concept", breakdown: "con(一起) + cept(拿)", meaning: "把想法抓在一起→概念" },
      { word: "capable", breakdown: "cap(抓) + able(可被)", meaning: "抓得住的→有能力的" },
      { word: "participate", breakdown: "part(部分) + cip(拿) + ate", meaning: "拿一份→參與" }
    ],
    note: "簡單字連結：have（擁有＝拿在手上）。ac- 是加強語氣的 a＋重複子音（見 sr08）。"
  },
  {
    id: "gr023",
    source: "etymology",
    root: "cred",
    variants: ["cred"],
    meaning: "相信",
    origin: "拉丁 credere（相信）",
    soundRuleId: "sr03",
    letter: "C",
    examples: [
      { word: "credit", breakdown: "cred(相信)", meaning: "信用、賒帳（別人相信你會還）" },
      { word: "incredible", breakdown: "in(不) + cred(信) + ible(可被)", meaning: "不能被相信的→難以置信的" },
      { word: "credential", breakdown: "cred(信) + ential", meaning: "讓人相信你的東西→證件、資歷" }
    ],
    note: ""
  },
  {
    id: "gr024",
    source: "etymology",
    root: "cord / cardi",
    variants: ["cord", "cardi"],
    meaning: "心",
    origin: "拉丁 cor / cordis（心），與英文 heart 同源（c↔h）",
    soundRuleId: "sr09",
    letter: "C",
    examples: [
      { word: "cordial", breakdown: "cord(心) + ial", meaning: "發自內心的→熱誠的" },
      { word: "accord", breakdown: "ac(加強) + cord(心)", meaning: "心在一起→一致、協議" },
      { word: "cardiac", breakdown: "cardi(心) + ac", meaning: "心臟的" },
      { word: "record", breakdown: "re(再) + cord(心)", meaning: "一再放在心上→記錄" }
    ],
    note: "簡單字連結：heart（c↔h）。跟 cour（勇氣，gr008）是同一顆心：core→courage→cordial。"
  },
  {
    id: "gr025",
    source: "etymology",
    root: "dict",
    variants: ["dict"],
    meaning: "說",
    origin: "拉丁 dicere（說），與英文 teach、token 同源（d↔t）",
    soundRuleId: "sr03",
    letter: "D",
    examples: [
      { word: "predict", breakdown: "pre(預先) + dict(說)", meaning: "先說→預測" },
      { word: "dictate", breakdown: "dict(說) + ate(動詞)", meaning: "說出來讓人寫→口述、命令" },
      { word: "contradict", breakdown: "contra(相反) + dict(說)", meaning: "說相反的話→反駁、牴觸" },
      { word: "dedicate", breakdown: "de(向下) + dic(說) + ate", meaning: "鄭重宣告→奉獻" },
      { word: "index", breakdown: "in(向內) + dic(指出)", meaning: "指出東西在哪→索引、指數" }
    ],
    note: "簡單字連結：teach（教＝說給人聽，d↔t 舌音）。"
  },
  {
    id: "gr026",
    source: "etymology",
    root: "duc / duct",
    variants: ["duc", "duct"],
    meaning: "引導、帶領",
    origin: "拉丁 ducere（引導），與英文 tow、tug 同源（d↔t）",
    soundRuleId: "sr03",
    letter: "D",
    examples: [
      { word: "conduct", breakdown: "con(一起) + duct(帶)", meaning: "帶著大家→指揮、進行" },
      { word: "produce", breakdown: "pro(向前) + duc(帶)", meaning: "帶出來→生產" },
      { word: "reduce", breakdown: "re(向回) + duc(帶)", meaning: "帶回去（往下）→減少" },
      { word: "educate", breakdown: "e(出去) + duc(引導) + ate", meaning: "把潛力引導出來→教育" },
      { word: "introduce", breakdown: "intro(向內) + duc(帶)", meaning: "帶進來→介紹、引進" }
    ],
    note: "簡單字連結：tow（拖、拉，d↔t 舌音）。"
  },
  {
    id: "gr027",
    source: "etymology",
    root: "dent",
    variants: ["dent"],
    meaning: "牙齒",
    origin: "拉丁 dens / dentis（牙），與英文 tooth 同源（d↔t）",
    soundRuleId: "sr03",
    letter: "D",
    examples: [
      { word: "dentist", breakdown: "dent(牙) + ist(人)", meaning: "牙醫" },
      { word: "dental", breakdown: "dent(牙) + al(形容詞)", meaning: "牙齒的" },
      { word: "trident", breakdown: "tri(三) + dent(齒)", meaning: "三根齒→三叉戟" },
      { word: "indent", breakdown: "in(向內) + dent(齒)", meaning: "咬出一個凹口→縮排、凹痕" }
    ],
    note: "簡單字連結：tooth（d↔t 舌音）。-al 形容詞字尾跟 mental 同一組。"
  },
  {
    id: "gr028",
    source: "etymology",
    root: "equ",
    variants: ["equ"],
    meaning: "相等、平均",
    origin: "拉丁 aequus（平的、相等的）",
    soundRuleId: "sr01",
    letter: "E",
    examples: [
      { word: "equal", breakdown: "equ(相等) + al", meaning: "相等的" },
      { word: "equator", breakdown: "equ(平分) + ator", meaning: "把地球平分的線→赤道" },
      { word: "adequate", breakdown: "ad(朝向) + equ(相等) + ate", meaning: "跟需求相等→足夠的" },
      { word: "equivalent", breakdown: "equi(相等) + val(價值) + ent", meaning: "價值相等的→等同的" },
      { word: "equity", breakdown: "equ(公平) + ity(名詞)", meaning: "公平；（股票）權益" }
    ],
    note: "拼字提醒：ae→e 的壓縮（aequus→equal），跟 curious→curiosity 的壓縮是同一種現象。"
  },
  {
    id: "gr029",
    source: "etymology",
    root: "fer",
    variants: ["fer"],
    meaning: "攜帶、承載",
    origin: "拉丁 ferre（帶），與英文 bear 同源（f↔b）",
    soundRuleId: "sr02",
    letter: "F",
    examples: [
      { word: "transfer", breakdown: "trans(橫越) + fer(帶)", meaning: "帶過去→轉移、轉帳" },
      { word: "prefer", breakdown: "pre(向前) + fer(帶)", meaning: "把它帶到前面→更喜歡" },
      { word: "refer", breakdown: "re(回) + fer(帶)", meaning: "帶回去查→參照、提及" },
      { word: "offer", breakdown: "of(朝向) + fer(帶)", meaning: "帶到你面前→提供" },
      { word: "suffer", breakdown: "suf(在下) + fer(承載)", meaning: "在下面扛著→受苦" },
      { word: "fertile", breakdown: "fer(承載) + ile", meaning: "能結果實的→肥沃的" }
    ],
    note: "簡單字連結：bear（承受、生育，f↔b 唇音）。這是整份資料庫最漂亮的唇音例子之一。"
  },
  {
    id: "gr030",
    source: "etymology",
    root: "fac / fect / fic",
    variants: ["fac", "fect", "fic", "fit"],
    meaning: "做、製造",
    origin: "拉丁 facere（做），與英文 do 同源",
    soundRuleId: "sr02",
    letter: "F",
    examples: [
      { word: "factory", breakdown: "fac(做) + ory(地方)", meaning: "做東西的地方→工廠" },
      { word: "effect", breakdown: "ef(出來) + fect(做)", meaning: "做出來的結果→效果" },
      { word: "perfect", breakdown: "per(徹底) + fect(做)", meaning: "徹底做完→完美的" },
      { word: "difficult", breakdown: "dif(不) + fic(做) + ult", meaning: "不好做的→困難的" },
      { word: "sufficient", breakdown: "suf(在下) + fic(做) + ient", meaning: "做到底了→足夠的" },
      { word: "benefit", breakdown: "bene(好) + fit(做)", meaning: "做好事→利益、好處" }
    ],
    note: "簡單字連結：do。factory 的 -ory 就是你筆記裡「地方」的字尾。"
  },
  {
    id: "gr031",
    source: "etymology",
    root: "flu / flux",
    variants: ["flu", "flux"],
    meaning: "流動",
    origin: "拉丁 fluere（流），與英文 flow 形象相通",
    soundRuleId: "sr06",
    letter: "F",
    examples: [
      { word: "fluent", breakdown: "flu(流) + ent", meaning: "話像水一樣流→流利的" },
      { word: "influence", breakdown: "in(向內) + flu(流) + ence", meaning: "流進來的力量→影響" },
      { word: "fluid", breakdown: "flu(流) + id", meaning: "流體、液體" },
      { word: "influenza", breakdown: "in(向內) + flu(流)", meaning: "古人以為星象「流」下來使人生病→流感（縮寫 flu）" }
    ],
    note: "簡單字連結：flow。"
  },
  {
    id: "gr032",
    source: "etymology",
    root: "form",
    variants: ["form"],
    meaning: "形狀、樣子",
    origin: "拉丁 forma（形狀）",
    soundRuleId: "sr02",
    letter: "F",
    examples: [
      { word: "inform", breakdown: "in(向內) + form(形)", meaning: "在心裡形成概念→通知、告知" },
      { word: "reform", breakdown: "re(再) + form(形)", meaning: "重新塑形→改革" },
      { word: "transform", breakdown: "trans(橫越) + form(形)", meaning: "換一個形狀→轉變" },
      { word: "uniform", breakdown: "uni(一) + form(形)", meaning: "同一個樣子→制服；一致的" },
      { word: "formula", breakdown: "form(形) + ula(小)", meaning: "小小的固定形式→公式、配方" }
    ],
    note: "-ula 是「小」的字尾，跟 -et／-let／-el 同一組概念。"
  },
  {
    id: "gr033",
    source: "etymology",
    root: "gen / gn",
    variants: ["gen", "gener", "genu"],
    meaning: "生、產生、種類",
    origin: "拉丁 genus / 希臘 genos（種族、出生），與英文 kin（親族）同源（g↔k）",
    soundRuleId: "sr04",
    letter: "G",
    examples: [
      { word: "generate", breakdown: "gen(生) + ate(動詞)", meaning: "產生、發電" },
      { word: "generation", breakdown: "gen(生) + ation", meaning: "生出來的一代→世代" },
      { word: "gene", breakdown: "gen(生)", meaning: "決定生出什麼的東西→基因" },
      { word: "genuine", breakdown: "genu(生) + ine", meaning: "天生就是的→真正的" },
      { word: "pregnant", breakdown: "pre(之前) + gn(生) + ant", meaning: "生之前的狀態→懷孕的" }
    ],
    note: "簡單字連結：kin（親族）、kind（種類）——g↔k 喉音互換。nat（gr049）也是同一家人。"
  },
  {
    id: "gr034",
    source: "etymology",
    root: "grad / gress",
    variants: ["grad", "gress", "gree"],
    meaning: "走、階梯",
    origin: "拉丁 gradus（步伐、階梯）",
    soundRuleId: "sr03",
    letter: "G",
    examples: [
      { word: "graduate", breakdown: "grad(階梯) + ate", meaning: "走完階梯→畢業" },
      { word: "gradual", breakdown: "grad(步) + ual", meaning: "一步一步的→逐漸的" },
      { word: "progress", breakdown: "pro(向前) + gress(走)", meaning: "往前走→進步" },
      { word: "aggressive", breakdown: "ag(加強) + gress(走) + ive", meaning: "一直朝人走過去→侵略的、積極的" },
      { word: "ingredient", breakdown: "in(進入) + gred(走) + ient", meaning: "走進鍋子裡的東西→材料" }
    ],
    note: "d↔ss 是舌音互換（grad→gress），跟 sit→session 同一招。"
  },
  {
    id: "gr035",
    source: "etymology",
    root: "graph / gram",
    variants: ["graph", "gram"],
    meaning: "寫、畫、記錄",
    origin: "希臘 graphein（刻、寫），與英文 carve 同源（g↔c）",
    soundRuleId: "sr04",
    letter: "G",
    examples: [
      { word: "photograph", breakdown: "photo(光) + graph(畫)", meaning: "用光畫出來→照片" },
      { word: "biography", breakdown: "bio(生命) + graph(寫)", meaning: "傳記" },
      { word: "program", breakdown: "pro(向前) + gram(寫)", meaning: "預先寫好的→節目、程式" },
      { word: "diagram", breakdown: "dia(穿過) + gram(畫)", meaning: "圖表" },
      { word: "graphic", breakdown: "graph(畫) + ic", meaning: "圖像的；（描述）生動的" }
    ],
    note: "簡單字連結：carve（刻）——古代「寫」就是刻。graph／gram 是唇音以外的 ph↔m 變體，同一個希臘字根的兩種形式。"
  },
  {
    id: "gr036",
    source: "etymology",
    root: "host / hosp",
    variants: ["host", "hosp"],
    meaning: "客人、主人；招待",
    origin: "拉丁 hospes（主人／客人），與英文 guest 同源（h↔g）",
    soundRuleId: "sr09",
    letter: "H",
    examples: [
      { word: "hospital", breakdown: "hosp(招待) + al", meaning: "招待（病）人的地方→醫院" },
      { word: "hotel", breakdown: "host 的變形 + el", meaning: "招待客人的地方→旅館" },
      { word: "hospitality", breakdown: "hosp(招待) + ity(名詞)", meaning: "好客、款待" },
      { word: "hostile", breakdown: "host(外來者) + ile", meaning: "外來者也可能是敵人→有敵意的" }
    ],
    note: "簡單字連結：guest（客人，h↔g）。同一個字根同時生出「醫院」與「敵意」，因為古代「陌生人」既是客也是敵。"
  },
  {
    id: "gr037",
    source: "etymology",
    root: "hydr",
    variants: ["hydr"],
    meaning: "水",
    origin: "希臘 hydor（水），與英文 water 同源",
    soundRuleId: "sr01",
    letter: "H",
    examples: [
      { word: "hydrogen", breakdown: "hydr(水) + gen(生)", meaning: "生出水的元素→氫" },
      { word: "dehydrate", breakdown: "de(去除) + hydr(水) + ate", meaning: "把水拿掉→脫水" },
      { word: "hydraulic", breakdown: "hydr(水) + aulic", meaning: "液壓的" },
      { word: "hydroelectric", breakdown: "hydro(水) + electric(電)", meaning: "水力發電的" }
    ],
    note: "簡單字連結：water。雅思環境／能源題常見：hydroelectric、hydration。"
  },
  {
    id: "gr038",
    source: "etymology",
    root: "it / itin",
    variants: ["itiner", "ambit", "transit", "initi"],
    meaning: "走、去",
    origin: "拉丁 ire / itum（走）",
    soundRuleId: "sr03",
    letter: "I",
    examples: [
      { word: "transit", breakdown: "trans(橫越) + it(走)", meaning: "走過去→運輸、過境" },
      { word: "exit", breakdown: "ex(出去) + it(走)", meaning: "走出去→出口" },
      { word: "initial", breakdown: "in(進入) + it(走) + ial", meaning: "剛走進來的→最初的" },
      { word: "ambitious", breakdown: "ambi(四處) + it(走) + ious(多)", meaning: "古羅馬人四處拉票→有野心的" },
      { word: "itinerary", breakdown: "itin(走) + ary(地方)", meaning: "要走的路線→行程表" }
    ],
    note: "it 只有兩個字母，混在別的字裡完全認不出來（waiting 裡也有 it），所以本機比對只認 itiner／ambit／transit／initi 這幾個長變體；查 exit、circuit 要靠 AI 拆解。"
  },
  {
    id: "gr039",
    source: "etymology",
    root: "ject",
    variants: ["ject"],
    meaning: "丟、投擲",
    origin: "拉丁 jacere（丟）",
    soundRuleId: "sr04",
    letter: "J",
    examples: [
      { word: "project", breakdown: "pro(向前) + ject(丟)", meaning: "往前丟出去→計畫、投影" },
      { word: "reject", breakdown: "re(向回) + ject(丟)", meaning: "丟回去→拒絕" },
      { word: "inject", breakdown: "in(向內) + ject(丟)", meaning: "丟進去→注射" },
      { word: "object", breakdown: "ob(朝向) + ject(丟)", meaning: "丟到你面前的東西→物體；反對" },
      { word: "subject", breakdown: "sub(在下) + ject(丟)", meaning: "被丟在底下→主題；臣服的" }
    ],
    note: "J 在拉丁文原本寫成 I，所以 ject 跟 it（走）是不同字根，別搞混。"
  },
  {
    id: "gr040",
    source: "etymology",
    root: "jur / jus / judg",
    variants: ["jur", "jus", "judg", "judic"],
    meaning: "法律、公正",
    origin: "拉丁 ius / iuris（法律、權利）",
    soundRuleId: "sr03",
    letter: "J",
    examples: [
      { word: "justice", breakdown: "jus(公正) + ice", meaning: "正義、司法" },
      { word: "jury", breakdown: "jur(法) + y", meaning: "宣誓的人們→陪審團" },
      { word: "injury", breakdown: "in(不) + jur(公正) + y", meaning: "不公正的對待→傷害" },
      { word: "adjust", breakdown: "ad(朝向) + just(正)", meaning: "弄到正確的位置→調整" },
      { word: "prejudice", breakdown: "pre(預先) + judic(判斷)", meaning: "先判斷→偏見" }
    ],
    note: ""
  },
  {
    id: "gr041",
    source: "etymology",
    root: "junct / join",
    variants: ["junct", "join", "jug"],
    meaning: "連接、結合",
    origin: "拉丁 iungere（連接），與英文 yoke（牛軛）同源（j↔y）",
    soundRuleId: "sr04",
    letter: "J",
    examples: [
      { word: "join", breakdown: "join(接)", meaning: "加入、連接" },
      { word: "joint", breakdown: "join(接) + t", meaning: "接起來的地方→關節、接頭" },
      { word: "junction", breakdown: "junct(接) + ion", meaning: "交會處、交流道" },
      { word: "adjacent", breakdown: "ad(朝向) + jac(靠) + ent", meaning: "靠在一起的→鄰接的" },
      { word: "conjunction", breakdown: "con(一起) + junct(接) + ion", meaning: "把句子接起來→連接詞" }
    ],
    note: "簡單字連結：yoke（把兩頭牛連起來的軛）——古代 i／j／y 三個字母不分家。"
  },
  {
    id: "gr042",
    source: "etymology",
    root: "kin / king",
    variants: ["kin", "king"],
    meaning: "親族、天生的種類",
    origin: "古英文 cynn（家族），與拉丁 gen（生）同源（k↔g）",
    soundRuleId: "sr04",
    letter: "K",
    examples: [
      { word: "kin", breakdown: "kin(親族)", meaning: "親屬（next of kin＝最近親）" },
      { word: "kind", breakdown: "kin(同族) + d", meaning: "同一族的→種類；（對自己人）親切的" },
      { word: "king", breakdown: "kin(family) + g", meaning: "家族的首領→國王" },
      { word: "kindergarten", breakdown: "kinder(小孩) + garten(花園)", meaning: "德文借字：小孩的花園→幼稚園" }
    ],
    note: "這是 gen（gr033）的英文兄弟：kin↔gen 就是喉音 k↔g。kind 同時有「種類」和「親切」兩個意思，因為古人對「自己人」才親切。"
  },
  {
    id: "gr043",
    source: "etymology",
    root: "gno / cogn / know",
    variants: ["gno", "cogn", "know", "notic", "notif"],
    meaning: "知道、認識",
    origin: "拉丁 gnoscere / 希臘 gnosis，與英文 know 同源（g↔k↔c）",
    soundRuleId: "sr04",
    letter: "K",
    examples: [
      { word: "know", breakdown: "know(知)", meaning: "知道（k 不發音，但拼字保留了字根）" },
      { word: "recognize", breakdown: "re(再) + cogn(知) + ize", meaning: "再次知道→認出" },
      { word: "diagnose", breakdown: "dia(徹底) + gno(知) + se", meaning: "徹底查清楚→診斷" },
      { word: "ignore", breakdown: "i(不) + gno(知) + re", meaning: "假裝不知道→忽視" },
      { word: "notice", breakdown: "not(知) + ice", meaning: "注意到、通知" }
    ],
    note: "簡單字連結：know。knowledge 開頭那個不發音的 k，就是喉音字根留下的化石。"
  },
  {
    id: "gr044",
    source: "etymology",
    root: "log / logue",
    variants: ["log"],
    meaning: "說話、道理、學問",
    origin: "希臘 logos（話語、道理）",
    soundRuleId: "sr06",
    letter: "L",
    examples: [
      { word: "dialogue", breakdown: "dia(之間) + logue(說)", meaning: "兩人之間說話→對話" },
      { word: "logic", breakdown: "log(道理) + ic", meaning: "邏輯" },
      { word: "apology", breakdown: "apo(離開) + log(說) + y", meaning: "說話把自己撇清→道歉" },
      { word: "biology", breakdown: "bio(生命) + logy(學問)", meaning: "生物學" },
      { word: "catalogue", breakdown: "cata(向下) + logue(列說)", meaning: "一條條列下來→目錄" }
    ],
    note: "-logy 結尾一律是「某某學」，雅思閱讀看到就知道是學科名。"
  },
  {
    id: "gr045",
    source: "etymology",
    root: "lect / leg",
    variants: ["lect", "leg", "lig"],
    meaning: "收集、挑選；讀",
    origin: "拉丁 legere（收集、挑、讀）",
    soundRuleId: "sr04",
    letter: "L",
    examples: [
      { word: "collect", breakdown: "col(一起) + lect(收)", meaning: "收集" },
      { word: "select", breakdown: "se(分開) + lect(挑)", meaning: "挑出來→選擇" },
      { word: "elect", breakdown: "e(出來) + lect(挑)", meaning: "挑出來→選舉" },
      { word: "lecture", breakdown: "lect(讀) + ure", meaning: "把書讀給人聽→講課" },
      { word: "intelligent", breakdown: "intel(之間) + lig(挑) + ent", meaning: "能在選項之間挑對的→聰明的" }
    ],
    note: "se-（分開）就是你筆記裡 separate、secure 的那個字首。"
  },
  {
    id: "gr046",
    source: "etymology",
    root: "mit / miss",
    variants: ["mit", "miss"],
    meaning: "送出、放出",
    origin: "拉丁 mittere（送）",
    soundRuleId: "sr03",
    letter: "M",
    examples: [
      { word: "admit", breakdown: "ad(朝向) + mit(送)", meaning: "讓他進來→承認、准許入場" },
      { word: "permit", breakdown: "per(通過) + mit(送)", meaning: "讓它通過→允許" },
      { word: "submit", breakdown: "sub(在下) + mit(送)", meaning: "送到（上級）下面→提交、屈服" },
      { word: "mission", breakdown: "miss(送) + ion", meaning: "被派出去的事→任務" },
      { word: "dismiss", breakdown: "dis(離開) + miss(送)", meaning: "送走→解散、開除" },
      { word: "promise", breakdown: "pro(向前) + mis(送)", meaning: "預先送出去的話→承諾" }
    ],
    note: "t↔ss 是舌音互換，跟 sit→session 同一招。"
  },
  {
    id: "gr047",
    source: "etymology",
    root: "mot / mob / mov",
    variants: ["mot", "mob", "mov"],
    meaning: "動",
    origin: "拉丁 movere（動）",
    soundRuleId: "sr02",
    letter: "M",
    examples: [
      { word: "motion", breakdown: "mot(動) + ion", meaning: "動作、運動" },
      { word: "motive", breakdown: "mot(動) + ive", meaning: "讓你行動的東西→動機" },
      { word: "mobile", breakdown: "mob(動) + ile", meaning: "會動的→行動的、手機" },
      { word: "remove", breakdown: "re(離開) + mov(動)", meaning: "移走→移除" },
      { word: "emotion", breakdown: "e(出來) + mot(動) + ion", meaning: "心裡動出來的→情緒" },
      { word: "promote", breakdown: "pro(向前) + mot(動)", meaning: "往前推→升職、推廣" }
    ],
    note: "mot／mob／mov 三種拼法互換，正是唇音 b↔v 加上母音通轉。"
  },
  {
    id: "gr048",
    source: "etymology",
    root: "man / manu",
    variants: ["manu", "manip"],
    meaning: "手",
    origin: "拉丁 manus（手）",
    soundRuleId: "sr05",
    letter: "M",
    examples: [
      { word: "manual", breakdown: "manu(手) + al", meaning: "用手的→手動的；手冊" },
      { word: "manufacture", breakdown: "manu(手) + fact(做) + ure", meaning: "用手做→製造" },
      { word: "manuscript", breakdown: "manu(手) + script(寫)", meaning: "手寫的→手稿" },
      { word: "manage", breakdown: "man(手) + age", meaning: "用手駕馭（馬）→管理" },
      { word: "manipulate", breakdown: "manip(手) + ulate(動詞)", meaning: "用手擺弄→操縱" }
    ],
    note: "man 太短會誤判（human、many 都含 man），本機比對只認 manu／manip。"
  },
  {
    id: "gr049",
    source: "etymology",
    root: "nat / nasc",
    variants: ["nat", "nasc"],
    meaning: "出生",
    origin: "拉丁 nasci（出生），與 gen（生）同源",
    soundRuleId: "sr05",
    letter: "N",
    examples: [
      { word: "nature", breakdown: "nat(生) + ure", meaning: "天生的樣子→自然、本性" },
      { word: "native", breakdown: "nat(生) + ive", meaning: "出生在那裡的→本地的、母語的" },
      { word: "nation", breakdown: "nat(生) + ion", meaning: "同一批生出來的人→國家、民族" },
      { word: "innate", breakdown: "in(在內) + nat(生)", meaning: "生下來就在裡面的→天生的" }
    ],
    note: "跟 gen（gr033）、kin（gr042）是同一個印歐字根的三種面貌：g→n 的變化發生在拉丁文內部（gnasci→nasci）。"
  },
  {
    id: "gr050",
    source: "etymology",
    root: "nov",
    variants: ["nov"],
    meaning: "新",
    origin: "拉丁 novus（新），與英文 new 同源",
    soundRuleId: "sr02",
    letter: "N",
    examples: [
      { word: "novel", breakdown: "nov(新) + el", meaning: "新奇的；（新的故事）小說" },
      { word: "innovate", breakdown: "in(進入) + nov(新) + ate", meaning: "把新東西弄進來→創新" },
      { word: "renovate", breakdown: "re(再) + nov(新) + ate", meaning: "弄成新的→翻新" },
      { word: "novice", breakdown: "nov(新) + ice", meaning: "新來的人→新手" }
    ],
    note: "簡單字連結：new（nov↔new 是同一個字，只是母音與 v／w 的變化——古代 v 就是 w）。"
  },
  {
    id: "gr051",
    source: "etymology",
    root: "nom / nym / nomin",
    variants: ["nomin", "nym"],
    meaning: "名字",
    origin: "拉丁 nomen / 希臘 onyma（名字），與英文 name 同源",
    soundRuleId: "sr05",
    letter: "N",
    examples: [
      { word: "nominate", breakdown: "nomin(名) + ate(動詞)", meaning: "點名→提名" },
      { word: "synonym", breakdown: "syn(相同) + nym(名)", meaning: "同樣的名字→同義字" },
      { word: "anonymous", breakdown: "an(沒有) + onym(名) + ous", meaning: "沒有名字的→匿名的" },
      { word: "renown", breakdown: "re(一再) + nown(名)", meaning: "名字被一再提起→名聲" }
    ],
    note: "簡單字連結：name。雅思寫作常用 synonym（同義字替換）就是這個字根。"
  },
  {
    id: "gr052",
    source: "etymology",
    root: "ori / ort",
    variants: ["orig", "orient"],
    meaning: "升起、開始",
    origin: "拉丁 oriri（升起）",
    soundRuleId: "sr01",
    letter: "O",
    examples: [
      { word: "origin", breakdown: "ori(升起) + gin", meaning: "事情升起的地方→起源" },
      { word: "original", breakdown: "orig(起源) + al", meaning: "最初的、原創的" },
      { word: "orient", breakdown: "ori(升起) + ent", meaning: "太陽升起的地方→東方；定位" },
      { word: "aboriginal", breakdown: "ab(從) + orig(起源) + inal", meaning: "從最初就在的→原住民的" }
    ],
    note: "跟 occident（西方，gr009）正好是一對：太陽升起 orient（東）／太陽落下 occident（西）。"
  },
  {
    id: "gr053",
    source: "etymology",
    root: "oper",
    variants: ["oper"],
    meaning: "工作、勞力",
    origin: "拉丁 opus / operis（工作）",
    soundRuleId: "sr02",
    letter: "O",
    examples: [
      { word: "operate", breakdown: "oper(工作) + ate(動詞)", meaning: "運作、操作、開刀" },
      { word: "cooperate", breakdown: "co(一起) + oper(工作) + ate", meaning: "一起工作→合作" },
      { word: "opera", breakdown: "oper(作品)", meaning: "（音樂的）作品→歌劇" }
    ],
    note: ""
  },
  {
    id: "gr054",
    source: "etymology",
    root: "port",
    variants: ["port"],
    meaning: "帶、搬運；港口",
    origin: "拉丁 portare（帶），與英文 ford（淺灘）、fare（通行）同源（p↔f）",
    soundRuleId: "sr02",
    letter: "P",
    examples: [
      { word: "export", breakdown: "ex(出去) + port(帶)", meaning: "帶出國→出口" },
      { word: "import", breakdown: "im(進來) + port(帶)", meaning: "帶進國內→進口" },
      { word: "transport", breakdown: "trans(橫越) + port(帶)", meaning: "帶過去→運輸" },
      { word: "portable", breakdown: "port(帶) + able(可被)", meaning: "可以被帶著走的→可攜式的" },
      { word: "opportunity", breakdown: "op(朝向) + port(港) + unity", meaning: "風正好吹向港口→機會" }
    ],
    note: "簡單字連結：ford（p↔f 唇音）。opportunity 的形象：古代船要等對的風才進得了港，那就是「機會」。"
  },
  {
    id: "gr055",
    source: "etymology",
    root: "pos / pon",
    variants: ["pos", "pon"],
    meaning: "放置",
    origin: "拉丁 ponere / positum（放）",
    soundRuleId: "sr05",
    letter: "P",
    examples: [
      { word: "compose", breakdown: "com(一起) + pos(放)", meaning: "放在一起→組成、作曲" },
      { word: "propose", breakdown: "pro(向前) + pos(放)", meaning: "放到前面來→提議、求婚" },
      { word: "expose", breakdown: "ex(出去) + pos(放)", meaning: "放到外面→暴露" },
      { word: "position", breakdown: "pos(放) + ition", meaning: "放的地方→位置" },
      { word: "component", breakdown: "com(一起) + pon(放) + ent", meaning: "被放在一起的東西→組件" },
      { word: "opponent", breakdown: "op(相對) + pon(放) + ent", meaning: "放在你對面的人→對手" }
    ],
    note: "s↔n 的變化是拉丁動詞本身的兩種詞幹（ponere／positum），不是轉音；記住兩種拼法都是「放」就好。"
  },
  {
    id: "gr056",
    source: "etymology",
    root: "press",
    variants: ["press", "print"],
    meaning: "壓",
    origin: "拉丁 premere / pressum（壓）",
    soundRuleId: "sr03",
    letter: "P",
    examples: [
      { word: "express", breakdown: "ex(出去) + press(壓)", meaning: "把心裡的擠出來→表達；快遞" },
      { word: "impress", breakdown: "im(向內) + press(壓)", meaning: "壓進心裡→留下印象" },
      { word: "depress", breakdown: "de(向下) + press(壓)", meaning: "往下壓→使沮喪、蕭條" },
      { word: "pressure", breakdown: "press(壓) + ure", meaning: "壓力" },
      { word: "print", breakdown: "press 的變形", meaning: "壓上去→印刷" }
    ],
    note: ""
  },
  {
    id: "gr057",
    source: "etymology",
    root: "quest / quir / quisit",
    variants: ["quest", "quir", "quisit", "quer"],
    meaning: "尋求、問",
    origin: "拉丁 quaerere（尋找、問）",
    soundRuleId: "sr04",
    letter: "Q",
    examples: [
      { word: "question", breakdown: "quest(問) + ion", meaning: "問題" },
      { word: "request", breakdown: "re(再) + quest(求)", meaning: "一再地求→請求" },
      { word: "require", breakdown: "re(再) + quir(求)", meaning: "一再要求→需要" },
      { word: "acquire", breakdown: "ac(加強) + quir(求)", meaning: "求到手→取得、習得" },
      { word: "inquire", breakdown: "in(向內) + quir(問)", meaning: "深入問→詢問" },
      { word: "conquer", breakdown: "con(徹底) + quer(求)", meaning: "徹底求到手→征服" }
    ],
    note: "ae→e／ui 的母音壓縮（quaerere→quest／quir），跟 curious→curiosity 同樣是壓縮現象。"
  },
  {
    id: "gr058",
    source: "etymology",
    root: "quad / quart",
    variants: ["quad", "quart", "quar"],
    meaning: "四",
    origin: "拉丁 quattuor（四），與英文 four 同源（qu↔f）",
    soundRuleId: "sr02",
    letter: "Q",
    examples: [
      { word: "quarter", breakdown: "quart(四) + er", meaning: "四分之一；一季" },
      { word: "quadrant", breakdown: "quad(四) + rant", meaning: "象限、四分之一圓" },
      { word: "square", breakdown: "s + quar(四)", meaning: "四邊形→正方形、廣場" }
    ],
    note: "簡單字連結：four。拉丁 qu- 對應英文 f-／wh-（quattuor↔four、quid↔what），這是格林法則裡最有名的一組對應。"
  },
  {
    id: "gr059",
    source: "etymology",
    root: "rupt",
    variants: ["rupt"],
    meaning: "破、斷裂",
    origin: "拉丁 rumpere / ruptum（打破）",
    soundRuleId: "sr02",
    letter: "R",
    examples: [
      { word: "interrupt", breakdown: "inter(之間) + rupt(斷)", meaning: "從中間打斷→打斷" },
      { word: "corrupt", breakdown: "cor(徹底) + rupt(破)", meaning: "徹底壞掉→腐敗的" },
      { word: "bankrupt", breakdown: "bank(銀行、長凳) + rupt(破)", meaning: "古代錢莊倒了就砸爛長凳→破產" },
      { word: "erupt", breakdown: "e(出來) + rupt(破)", meaning: "破出來→火山爆發" },
      { word: "abrupt", breakdown: "ab(離開) + rupt(斷)", meaning: "突然斷開→突然的" }
    ],
    note: "跟 break／frag（gr006）意思相同但來源不同：break 是英文本家的字，rupt 是拉丁借來的。"
  },
  {
    id: "gr060",
    source: "etymology",
    root: "reg / rect",
    variants: ["reg", "rect"],
    meaning: "統治；直的、正的",
    origin: "拉丁 regere（統治、拉直），與英文 right 同源（g↔gh）",
    soundRuleId: "sr04",
    letter: "R",
    examples: [
      { word: "regular", breakdown: "reg(直、規矩) + ular", meaning: "照規矩來的→規律的" },
      { word: "direct", breakdown: "di(分開) + rect(直)", meaning: "拉直指過去→直接的、指導" },
      { word: "correct", breakdown: "cor(徹底) + rect(正)", meaning: "弄正→正確的、改正" },
      { word: "region", breakdown: "reg(統治) + ion", meaning: "被統治的範圍→區域" },
      { word: "regime", breakdown: "reg(統治) + ime", meaning: "政權、體制" }
    ],
    note: "簡單字連結：right（正確的、右邊的）——古人認為「直」就是「對」。"
  },
  {
    id: "gr061",
    source: "etymology",
    root: "spect / spec",
    variants: ["spect", "spec", "spic"],
    meaning: "看",
    origin: "拉丁 specere（看）",
    soundRuleId: "sr04",
    letter: "S",
    examples: [
      { word: "inspect", breakdown: "in(向內) + spect(看)", meaning: "看進去→檢查" },
      { word: "respect", breakdown: "re(再) + spect(看)", meaning: "一再回頭看→尊敬" },
      { word: "expect", breakdown: "ex(出去) + (s)pect(看)", meaning: "往外看（等它來）→期待" },
      { word: "perspective", breakdown: "per(穿過) + spect(看) + ive", meaning: "看穿過去→視角、觀點" },
      { word: "spectacle", breakdown: "spect(看) + acle", meaning: "值得看的→奇觀（spectacles＝眼鏡）" },
      { word: "species", breakdown: "spec(看) + ies", meaning: "看起來一樣的一群→物種" }
    ],
    note: "雅思閱讀最高頻的字根之一。suspect＝從下面偷看→懷疑。"
  },
  {
    id: "gr062",
    source: "etymology",
    root: "scrib / script",
    variants: ["scrib", "script", "scrip"],
    meaning: "寫、刻",
    origin: "拉丁 scribere（刻、寫）",
    soundRuleId: "sr02",
    letter: "S",
    examples: [
      { word: "describe", breakdown: "de(向下) + scrib(寫)", meaning: "寫下來→描述" },
      { word: "prescribe", breakdown: "pre(預先) + scrib(寫)", meaning: "先寫下來→開處方、規定" },
      { word: "subscribe", breakdown: "sub(在下) + scrib(寫)", meaning: "在下面簽名→訂閱" },
      { word: "manuscript", breakdown: "manu(手) + script(寫)", meaning: "手稿" },
      { word: "script", breakdown: "script(寫)", meaning: "寫下來的東西→劇本、腳本" }
    ],
    note: "跟 graph（gr035）意思相同：一個來自拉丁、一個來自希臘。"
  },
  {
    id: "gr063",
    source: "etymology",
    root: "struct",
    variants: ["struct", "stru"],
    meaning: "建造、堆疊",
    origin: "拉丁 struere（堆起來、建造）",
    soundRuleId: "sr03",
    letter: "S",
    examples: [
      { word: "structure", breakdown: "struct(建) + ure", meaning: "建起來的東西→結構、建築" },
      { word: "construct", breakdown: "con(一起) + struct(建)", meaning: "堆在一起→建造" },
      { word: "instruct", breakdown: "in(向內) + struct(建)", meaning: "在心裡建起來→教導、指示" },
      { word: "destroy", breakdown: "de(去除) + stroy(建)", meaning: "把建好的拆掉→摧毀" },
      { word: "infrastructure", breakdown: "infra(下面) + structure(結構)", meaning: "底層的建設→基礎設施" }
    ],
    note: "雅思都市／發展類文章必考：infrastructure、construction。"
  },
  {
    id: "gr064",
    source: "etymology",
    root: "sta / sist / stitut",
    variants: ["stat", "stab", "sist", "stitut"],
    meaning: "站、立",
    origin: "拉丁 stare（站），與英文 stand 同源",
    soundRuleId: "sr03",
    letter: "S",
    examples: [
      { word: "stable", breakdown: "sta(站) + ble", meaning: "站得穩的→穩定的" },
      { word: "statue", breakdown: "sta(立) + tue", meaning: "立在那裡的→雕像" },
      { word: "status", breakdown: "sta(站) + tus", meaning: "站的位置→地位、狀態" },
      { word: "assist", breakdown: "as(加強) + sist(站)", meaning: "站到旁邊（幫忙）→協助" },
      { word: "resist", breakdown: "re(相對) + sist(站)", meaning: "站著對抗→抵抗" },
      { word: "constitute", breakdown: "con(一起) + stitut(立)", meaning: "一起立起來→構成、制定" }
    ],
    note: "簡單字連結：stand。as-／re- 前面的用法跟你筆記裡 assume（as- 加強）一模一樣。"
  },
  {
    id: "gr065",
    source: "etymology",
    root: "spir",
    variants: ["spir"],
    meaning: "呼吸",
    origin: "拉丁 spirare（呼吸）",
    soundRuleId: "sr02",
    letter: "S",
    examples: [
      { word: "inspire", breakdown: "in(向內) + spir(氣)", meaning: "把一口氣吹進你心裡→啟發" },
      { word: "expire", breakdown: "ex(出去) + (s)pir(氣)", meaning: "把最後一口氣呼出去→到期、斷氣" },
      { word: "spirit", breakdown: "spir(氣) + it", meaning: "氣→精神、靈魂" },
      { word: "conspire", breakdown: "con(一起) + spir(呼吸)", meaning: "湊在一起呼吸（咬耳朵）→密謀" },
      { word: "respiratory", breakdown: "re(反覆) + spir(呼吸) + atory", meaning: "呼吸的（系統）" }
    ],
    note: "形象記法：「氣」既是空氣也是精神，所以 spirit 同時指烈酒（蒸餾出的精華）。"
  },
  {
    id: "gr066",
    source: "etymology",
    root: "sent / sens",
    variants: ["sent", "sens"],
    meaning: "感覺",
    origin: "拉丁 sentire（感覺）",
    soundRuleId: "sr03",
    letter: "S",
    examples: [
      { word: "sense", breakdown: "sens(感覺)", meaning: "感官、感覺、意義" },
      { word: "sensitive", breakdown: "sens(感覺) + itive", meaning: "很有感的→敏感的" },
      { word: "consent", breakdown: "con(一起) + sent(感覺)", meaning: "感覺一致→同意" },
      { word: "sentiment", breakdown: "sent(感覺) + iment", meaning: "情緒、情感" },
      { word: "resent", breakdown: "re(反覆) + sent(感覺)", meaning: "一再回想那種感覺→怨恨" }
    ],
    note: "t↔s 舌音互換（sentire→sens-），跟 potion→poison 同一招。"
  },
  {
    id: "gr067",
    source: "etymology",
    root: "solv / solut",
    variants: ["solv", "solut"],
    meaning: "鬆開、解開",
    origin: "拉丁 solvere（鬆開）",
    soundRuleId: "sr02",
    letter: "S",
    examples: [
      { word: "solve", breakdown: "solv(解開)", meaning: "解決" },
      { word: "solution", breakdown: "solut(解) + ion", meaning: "解答；（把東西溶開的）溶液" },
      { word: "dissolve", breakdown: "dis(分開) + solv(鬆)", meaning: "鬆散開→溶解、解散" },
      { word: "absolute", breakdown: "ab(離開) + solut(鬆)", meaning: "從一切束縛鬆開→絕對的" }
    ],
    note: "solution 一字兩義（解答／溶液）其實同源：都是「把糾結的東西鬆開」。"
  },
  {
    id: "gr068",
    source: "etymology",
    root: "tract",
    variants: ["tract", "treat"],
    meaning: "拉、拖",
    origin: "拉丁 trahere / tractum（拉），與英文 draw、drag 同源（t↔d）",
    soundRuleId: "sr03",
    letter: "T",
    examples: [
      { word: "attract", breakdown: "at(朝向) + tract(拉)", meaning: "把你拉過來→吸引" },
      { word: "extract", breakdown: "ex(出去) + tract(拉)", meaning: "拉出來→提取、萃取" },
      { word: "contract", breakdown: "con(一起) + tract(拉)", meaning: "拉在一起→合約；收縮" },
      { word: "subtract", breakdown: "sub(在下) + tract(拉)", meaning: "從下面拉走→減去" },
      { word: "tractor", breakdown: "tract(拉) + or(物)", meaning: "拉東西的機器→曳引機" }
    ],
    note: "簡單字連結：drag／draw（t↔d 舌音）。at- 是 a＋重複子音的加強語氣。"
  },
  {
    id: "gr069",
    source: "etymology",
    root: "tain / ten / tent",
    variants: ["tain", "tent", "tenan", "tenur"],
    meaning: "握住、保持",
    origin: "拉丁 tenere（握），與英文 thin（拉長變細）同源",
    soundRuleId: "sr03",
    letter: "T",
    examples: [
      { word: "contain", breakdown: "con(一起) + tain(握)", meaning: "全握在裡面→包含" },
      { word: "maintain", breakdown: "main(手) + tain(握)", meaning: "用手握住→維持" },
      { word: "obtain", breakdown: "ob(朝向) + tain(握)", meaning: "握到手→取得" },
      { word: "tenant", breakdown: "ten(握) + ant(人)", meaning: "握有（使用權）的人→房客" },
      { word: "content", breakdown: "con(一起) + tent(握)", meaning: "握在裡面的東西→內容；滿足的" },
      { word: "continent", breakdown: "con(一起) + tin(握) + ent", meaning: "連在一起的陸地→大陸" }
    ],
    note: "maintain 的 main 就是拉丁的 manu（手，gr048）：用手保持住。本機比對刻意不收 ten／tin 兩個短變體（它們會命中 listen、meeting 這類無關的字），所以 continent、tenant 要靠 AI 拆解。"
  },
  {
    id: "gr070",
    source: "etymology",
    root: "terr",
    variants: ["terr"],
    meaning: "土地",
    origin: "拉丁 terra（土地）",
    soundRuleId: "sr06",
    letter: "T",
    examples: [
      { word: "territory", breakdown: "terr(土地) + ory(地方)", meaning: "領土、地盤" },
      { word: "terrain", breakdown: "terr(土地) + ain", meaning: "地形、地勢" },
      { word: "Mediterranean", breakdown: "medi(中間) + terr(陸地) + anean", meaning: "陸地中間的海→地中海" },
      { word: "terrace", breakdown: "terr(土) + ace", meaning: "堆土做成的平台→陽台、梯田" }
    ],
    note: "rr 的第二個 r 沒有意義（雙子音規則），核心是 ter。"
  },
  {
    id: "gr071",
    source: "etymology",
    root: "uni",
    variants: ["unit", "unif", "univ"],
    meaning: "一、單一",
    origin: "拉丁 unus（一），與英文 one 同源",
    soundRuleId: "sr01",
    letter: "U",
    examples: [
      { word: "unique", breakdown: "uni(一) + que", meaning: "只有一個的→獨特的" },
      { word: "unite", breakdown: "uni(一) + te", meaning: "合成一個→聯合" },
      { word: "universe", breakdown: "uni(一) + vers(轉)", meaning: "全部繞著一個中心轉→宇宙" },
      { word: "uniform", breakdown: "uni(一) + form(形)", meaning: "同一個樣子→制服；一致的" },
      { word: "union", breakdown: "uni(一) + on", meaning: "合為一體→聯盟、工會" }
    ],
    note: "簡單字連結：one。university＝把所有學問轉成一個整體的地方。"
  },
  {
    id: "gr072",
    source: "etymology",
    root: "urb",
    variants: ["urb"],
    meaning: "城市",
    origin: "拉丁 urbs（城市）",
    soundRuleId: "sr02",
    letter: "U",
    examples: [
      { word: "urban", breakdown: "urb(城市) + an", meaning: "城市的" },
      { word: "suburb", breakdown: "sub(在下、附近) + urb(城市)", meaning: "城市旁邊→郊區" },
      { word: "urbanization", breakdown: "urban(城市的) + ization", meaning: "都市化" }
    ],
    note: "雅思都市／人口類文章的核心字：urbanization、urban sprawl。"
  },
  {
    id: "gr073",
    source: "etymology",
    root: "vid / vis",
    variants: ["vid", "vis"],
    meaning: "看",
    origin: "拉丁 videre（看），與英文 wit、wise 同源（v↔w）",
    soundRuleId: "sr02",
    letter: "V",
    examples: [
      { word: "vision", breakdown: "vis(看) + ion", meaning: "視力、願景" },
      { word: "visible", breakdown: "vis(看) + ible(可被)", meaning: "可以被看見的" },
      { word: "evidence", breakdown: "e(出來) + vid(看) + ence", meaning: "看得出來的東西→證據" },
      { word: "provide", breakdown: "pro(預先) + vid(看)", meaning: "預先看到並準備好→提供" },
      { word: "supervise", breakdown: "super(在上) + vis(看)", meaning: "在上面看著→監督" },
      { word: "advise", breakdown: "ad(朝向) + vis(看)", meaning: "讓他看見→建議" }
    ],
    note: "簡單字連結：wise／wit（你筆記裡的 wise→wit）——古代 v 就是 w，所以「看見」與「知道」是同一個字根。"
  },
  {
    id: "gr074",
    source: "etymology",
    root: "vert / vers",
    variants: ["vert", "vers"],
    meaning: "轉",
    origin: "拉丁 vertere（轉），與英文 -ward（方向）同源",
    soundRuleId: "sr02",
    letter: "V",
    examples: [
      { word: "convert", breakdown: "con(徹底) + vert(轉)", meaning: "整個轉過去→轉換、改信" },
      { word: "reverse", breakdown: "re(向回) + vers(轉)", meaning: "轉回去→倒轉、相反" },
      { word: "universe", breakdown: "uni(一) + vers(轉)", meaning: "宇宙" },
      { word: "version", breakdown: "vers(轉) + ion", meaning: "轉換過的樣子→版本" },
      { word: "advertise", breakdown: "ad(朝向) + vert(轉)", meaning: "把大家的注意力轉過來→廣告" },
      { word: "diverse", breakdown: "di(分開) + vers(轉)", meaning: "各轉各的方向→多樣的" }
    ],
    note: "跟 vol（旋轉，gr018）是不同字根但形象相同：vol 是球在轉，vert 是方向在轉。"
  },
  {
    id: "gr075",
    source: "etymology",
    root: "voc / vok",
    variants: ["voc", "vok"],
    meaning: "叫、聲音",
    origin: "拉丁 vox / vocare（聲音、呼叫），與英文 voice 同源",
    soundRuleId: "sr04",
    letter: "V",
    examples: [
      { word: "vocal", breakdown: "voc(聲) + al", meaning: "聲音的、大聲表達的" },
      { word: "vocabulary", breakdown: "voc(叫) + abulary", meaning: "叫得出名字的字→字彙" },
      { word: "advocate", breakdown: "ad(朝向) + voc(叫) + ate", meaning: "為某事發聲→提倡、擁護" },
      { word: "provoke", breakdown: "pro(向前) + vok(叫)", meaning: "把（怒氣）叫出來→激怒、引發" }
    ],
    note: "簡單字連結：voice。c↔k 喉音互換（voc／vok 兩種拼法）。"
  },
  {
    id: "gr076",
    source: "etymology",
    root: "ven / vent",
    variants: ["ven", "vent"],
    meaning: "來",
    origin: "拉丁 venire（來），與英文 come 同源",
    soundRuleId: "sr02",
    letter: "V",
    examples: [
      { word: "event", breakdown: "e(出來) + vent(來)", meaning: "跑出來的事→事件、活動" },
      { word: "prevent", breakdown: "pre(預先) + vent(來)", meaning: "先來擋著→預防" },
      { word: "invent", breakdown: "in(進入) + vent(來)", meaning: "（想法）走進來→發明" },
      { word: "convention", breakdown: "con(一起) + vent(來) + ion", meaning: "大家一起來→大會；慣例" },
      { word: "adventure", breakdown: "ad(朝向) + vent(來) + ure", meaning: "即將到來的事→冒險" },
      { word: "revenue", breakdown: "re(回) + ven(來)", meaning: "回流進來的錢→收入、稅收" }
    ],
    note: "簡單字連結：come——你筆記裡 come→hurricane 的那個 come。"
  },
  {
    id: "gr077",
    source: "etymology",
    root: "val / vail",
    variants: ["val", "vail"],
    meaning: "強壯；價值",
    origin: "拉丁 valere（強壯、值得）",
    soundRuleId: "sr06",
    letter: "V",
    examples: [
      { word: "value", breakdown: "val(值)", meaning: "價值" },
      { word: "valid", breakdown: "val(強) + id", meaning: "站得住腳的→有效的" },
      { word: "evaluate", breakdown: "e(出來) + val(值) + uate", meaning: "把價值算出來→評估" },
      { word: "available", breakdown: "a+v(加強) + ail(值) + able(可被)", meaning: "可以被利用的→可用的" },
      { word: "prevail", breakdown: "pre(在前) + vail(強)", meaning: "比較強的勝出→盛行、佔上風" }
    ],
    note: "available 就是你筆記裡「a＋重複子音加強語氣」的例子（見 sr08）。"
  },
  {
    id: "gr078",
    source: "etymology",
    root: "wit / wis",
    variants: ["wit", "wis"],
    meaning: "知道、看見",
    origin: "古英文 witan（知道），與拉丁 vid／vis（看）同源（w↔v）",
    soundRuleId: "sr02",
    letter: "W",
    examples: [
      { word: "wise", breakdown: "wis(知)", meaning: "睿智的" },
      { word: "wit", breakdown: "wit(知)", meaning: "機智（wise 的 s↔t 舌音互換）" },
      { word: "wisdom", breakdown: "wis(知) + dom(狀態)", meaning: "智慧" },
      { word: "witness", breakdown: "wit(知) + ness", meaning: "知道（看到）的人→目擊者、見證" }
    ],
    note: "這是 vid／vis（gr073）的英文本家版本：wise↔vision 是同一個字根，v 與 w 在古代不分。你筆記裡的 wise→wit 正是這一家。"
  },
  {
    id: "gr079",
    source: "etymology",
    root: "zo / zoo",
    variants: ["zoo", "zoa", "zoic"],
    meaning: "動物、生命",
    origin: "希臘 zoion（動物），與 bio（生命）概念相通",
    soundRuleId: "sr03",
    letter: "Z",
    examples: [
      { word: "zoo", breakdown: "zoo(動物)", meaning: "動物園（zoological garden 的縮寫）" },
      { word: "zoology", breakdown: "zoo(動物) + logy(學問)", meaning: "動物學" },
      { word: "protozoa", breakdown: "proto(最初) + zoa(生物)", meaning: "最原始的生物→原生動物" }
    ],
    note: "希臘 z 對應英文的 s／d 系列子音（舌音一家）。Z 開頭的字根在英文裡本來就很少，這是最實用的一個。"
  }
];

// ==== 第四層：AFFIXES 字首字尾 ====
// type: "prefix"（字首）或 "suffix"（字尾）
// variants：比對用（全小寫、不含連字號）
const AFFIXES = [
  {
    id: "af01", affix: "ab- / se- / dis-", type: "prefix",
    variants: ["ab", "se", "dis"],
    meaning: "分離、離開、否定",
    examples: [
      { word: "abroad", breakdown: "ab(離開) + road(路)", meaning: "離開原本走的路→國外" },
      { word: "separate", breakdown: "se(分開) + parate", meaning: "把成雙成對的分開→分開" },
      { word: "secure", breakdown: "se(遠離) + cure(擔心)", meaning: "遠離擔心→安全的" },
      { word: "discourage", breakdown: "dis(遠離) + courage(勇氣)", meaning: "遠離勇氣→使沮喪" }
    ],
    note: ""
  },
  {
    id: "af02", affix: "un-", type: "prefix",
    variants: ["un"],
    meaning: "否定",
    examples: [
      { word: "unable", breakdown: "un(否定) + able(能)", meaning: "不能的" }
    ],
    note: "形象記法：U 向上、N 向下，方向相反＝否定。"
  },
  {
    id: "af03", affix: "en- / em-", type: "prefix",
    variants: ["en", "em"],
    meaning: "動作化、令其如何",
    examples: [
      { word: "enable", breakdown: "en(令其) + able(能)", meaning: "令其能夠" },
      { word: "encourage", breakdown: "en(令其) + courage(勇氣)", meaning: "令其有勇氣→鼓勵" },
      { word: "embargo", breakdown: "em(令其) + bar(栓) + go", meaning: "令其禁止出入→封港、禁運" }
    ],
    note: ""
  },
  {
    id: "af04", affix: "re-", type: "prefix",
    variants: ["re"],
    meaning: "再次、重複、回來",
    examples: [
      { word: "repeat", breakdown: "re(再) + peat", meaning: "重複" },
      { word: "revolve", breakdown: "re(一再) + volve(旋轉)", meaning: "旋轉" },
      { word: "recycle", breakdown: "re(再) + cycle(循環)", meaning: "使其再次循環→回收" }
    ],
    note: ""
  },
  {
    id: "af05", affix: "ex- / e-", type: "prefix",
    variants: ["ex"],
    meaning: "出去、向外",
    examples: [
      { word: "evolve", breakdown: "e(向外) + volve(旋轉)", meaning: "向外旋轉前進→進化" },
      { word: "expedition", breakdown: "ex(出去) + ped(走) + ition", meaning: "走路出去→遠征" }
    ],
    note: ""
  },
  {
    id: "af06", affix: "com- / con-", type: "prefix",
    variants: ["com", "con"],
    meaning: "一起、共同（源自 come）",
    examples: [
      { word: "compete", breakdown: "com(一起) + pete", meaning: "大家一起比賽→競爭" }
    ],
    note: ""
  },
  {
    id: "af07", affix: "ob- / oc-", type: "prefix",
    variants: ["ob", "oc"],
    meaning: "向下；朝向",
    examples: [
      { word: "occident", breakdown: "oc(向下) + cident(落下)", meaning: "太陽落下的地方→西方" }
    ],
    note: ""
  },
  {
    id: "af08", affix: "in-", type: "prefix",
    variants: ["in"],
    meaning: "在內、進入",
    examples: [
      { word: "involve", breakdown: "in(在內) + volve(旋轉)", meaning: "在內部旋轉→牽涉" },
      { word: "incident", breakdown: "in(在內) + cident(落下)", meaning: "在預料之內發生的事→事件" }
    ],
    note: ""
  },
  {
    id: "af09", affix: "-et / -let / -el", type: "suffix",
    variants: ["et", "let", "el"],
    meaning: "小",
    examples: [
      { word: "booklet", breakdown: "book + let(小)", meaning: "小手冊" },
      { word: "bullet", breakdown: "bul(圓) + let(小)", meaning: "小鐵珠→子彈" },
      { word: "kernel", breakdown: "kern(穀) + el(小)", meaning: "小穀粒→核心" },
      { word: "beetle", breakdown: "bite 的變形 + le(小)", meaning: "會咬人的小昆蟲→甲蟲" }
    ],
    note: ""
  },
  {
    id: "af10", affix: "-y / -ous / -ious", type: "suffix",
    variants: ["ous", "ious"],
    meaning: "多（形容詞字尾）",
    examples: [
      { word: "sunny", breakdown: "sun + ny(多)", meaning: "多陽光的（windy、cloudy 同理）" },
      { word: "courageous", breakdown: "courage + ous(多)", meaning: "多勇氣的→勇敢的" },
      { word: "curious", breakdown: "cur(關心) + ious(多)", meaning: "多關心的→好奇的" }
    ],
    note: "單字加 -ous 變長後，重音通常往後移（courage→courageous）。"
  },
  {
    id: "af11", affix: "-ee", type: "suffix",
    variants: ["ee"],
    meaning: "被…的人或物（被動）",
    examples: [
      { word: "employee", breakdown: "employ + ee(被…的人)", meaning: "被僱用的人→員工" },
      { word: "settee", breakdown: "set(坐) + t + ee(被坐的東西)", meaning: "長靠椅、小沙發" }
    ],
    note: ""
  },
  {
    id: "af12", affix: "-able", type: "suffix",
    variants: ["able"],
    meaning: "可以被…的（帶被動意味）",
    examples: [
      { word: "available", breakdown: "a+v(加強，源自 value) + able", meaning: "可以被利用的→可用的" }
    ],
    note: ""
  },
  {
    id: "af13", affix: "-um / -ery / -ory / -ary", type: "suffix",
    variants: ["um", "ery", "ory", "ary"],
    meaning: "地方（名詞字尾）",
    examples: [
      { word: "museum", breakdown: "muse(女神) + um(地方)", meaning: "女神住的地方→博物館" },
      { word: "album", breakdown: "alb(白) + um(地方)", meaning: "空白的地方→相簿" },
      { word: "factory", breakdown: "fact(做) + ory(地方)", meaning: "做東西的地方→工廠" },
      { word: "mystery", breakdown: "myst(霧) + ery(地方)", meaning: "多霧、看不清的地方→神祕" }
    ],
    note: ""
  },
  {
    id: "af14", affix: "-er", type: "suffix",
    variants: ["er"],
    meaning: "人、物；有時表動作反覆",
    examples: [
      { word: "butler", breakdown: "bottle 的變形 + er(人)", meaning: "幫主人開瓶的人→男管家" },
      { word: "barrier", breakdown: "bar(木棒) + rier", meaning: "木棒組成的障礙物" }
    ],
    note: "字尾 -le 有時也表反覆：battle＝反覆敲打。"
  },
  {
    id: "af15", affix: "-ity / -age", type: "suffix",
    variants: ["ity", "age"],
    meaning: "名詞字尾",
    examples: [
      { word: "curiosity", breakdown: "curious 的 ou 壓縮成 o + ity", meaning: "好奇心" },
      { word: "package", breakdown: "pack + age(名詞)", meaning: "包裹" },
      { word: "courage", breakdown: "cour(心) + age(名詞)", meaning: "勇氣" }
    ],
    note: ""
  },
  {
    id: "af16", affix: "-al", type: "suffix",
    variants: ["al"],
    meaning: "形容詞字尾",
    examples: [
      { word: "mental", breakdown: "mind 的 d↔t + al", meaning: "心理的" }
    ],
    note: ""
  },
  {
    id: "af17", affix: "-ate", type: "suffix",
    variants: ["ate"],
    meaning: "動詞或形容詞字尾",
    examples: [
      { word: "circulate", breakdown: "circ(圓) + ulate(動詞)", meaning: "循環、流通" }
    ],
    note: ""
  }
];
