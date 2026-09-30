// ============================================================
// data-en.js — 英文／雅思資料庫（english.html 專用）
// 最後更新：2026-09-30（v3.0.0 英德拆檔）
//
// 【為什麼拆】原本英文和德文的資料全在一個 data.js 裡，造成兩個問題：
//   ① 整理其中一種語言時要連另一種一起貼給 AI，而且有改錯對方資料的風險
//   ② 這支 App 根本用不到另一種語言的內容，白載入
// 這個檔案只有英文內容，german.html 不會載入它。
//
// 【維護方式】直接修改此檔對應區塊，只由對話中的 AI 批次整理更新。
//   改之前一定要先把 GitHub 上的現行版本貼給 AI（那份才是 ground truth）。
//   改完檢查：node -c 語法檢查 ＋ 各陣列 id 無重複。
// ============================================================

// ============================================================
// 英文單字庫（從24堂 Cambly 課程完整整理）
// 格式：{ id, word, meaning, partOfSpeech, source, example }
// ============================================================
const ENGLISH_VOCABULARY = [
  // === 工作 / 產業 ===
  { id: "en001", word: "industrial analyst", meaning: "產業分析師", partOfSpeech: "n.", source: "cambly", example: "I am an industrial analyst researching the chemical industry." },
  { id: "en002", word: "semiconductor", meaning: "半導體", partOfSpeech: "n.", source: "cambly", example: "Taiwan is a global leader in semiconductor production." },
  { id: "en003", word: "non-profit organization", meaning: "非營利組織", partOfSpeech: "n.", source: "cambly", example: "Our company is a non-profit research organization." },
  { id: "en004", word: "consortium", meaning: "財團法人", partOfSpeech: "n.", source: "cambly", example: "We are a consortium that bridges industry and government." },
  { id: "en005", word: "supply chain", meaning: "供應鏈", partOfSpeech: "n.", source: "cambly", example: "The global supply chain was disrupted by COVID-19." },
  { id: "en006", word: "revenue", meaning: "營收", partOfSpeech: "n.", source: "cambly", example: "The company's revenue grew by 20% last year." },
  { id: "en007", word: "stakeholder", meaning: "利害關係人", partOfSpeech: "n.", source: "cambly", example: "We need to update all stakeholders on the project status." },
  { id: "en008", word: "redundant", meaning: "被取代的（AI）", partOfSpeech: "adj.", source: "cambly", example: "AI might make some jobs redundant in the future." },
  { id: "en009", word: "rewarding", meaning: "有成就感的", partOfSpeech: "adj.", source: "cambly", example: "Teaching is a very rewarding job." },
  { id: "en010", word: "headquarters", meaning: "總部", partOfSpeech: "n.", source: "cambly", example: "Many companies have their headquarters in Taipei." },
  // === 環境 / 科技 ===
  { id: "en011", word: "emission", meaning: "排放（廢氣）", partOfSpeech: "n.", source: "cambly", example: "The factory has high carbon emission levels." },
  { id: "en012", word: "carbon capture", meaning: "碳捕捉", partOfSpeech: "n.", source: "cambly", example: "Carbon capture technology is used to reduce CO2 emissions." },
  { id: "en013", word: "metal-organic framework", meaning: "金屬有機框架（MOF）", partOfSpeech: "n.", source: "cambly", example: "Metal-organic frameworks won the Nobel Prize last year." },
  { id: "en014", word: "heavy industry", meaning: "重工業", partOfSpeech: "n.", source: "cambly", example: "Cement and steel are considered heavy industries." },
  { id: "en015", word: "renewable energy", meaning: "再生能源", partOfSpeech: "n.", source: "cambly", example: "The Netherlands is famous for renewable energy." },
  { id: "en016", word: "composite", meaning: "複合材料", partOfSpeech: "n.", source: "cambly", example: "A composite of carbon fiber and polymer is lighter than metal." },
  { id: "en017", word: "carbon fiber", meaning: "碳纖維", partOfSpeech: "n.", source: "cambly", example: "Carbon fiber is strong but much lighter than steel." },
  { id: "en018", word: "prototype", meaning: "原型", partOfSpeech: "n.", source: "cambly", example: "Rapid prototyping is one advantage of 3D printing." },
  { id: "en019", word: "orbit", meaning: "軌道", partOfSpeech: "n.", source: "cambly", example: "The rocket failed to reach orbit and crashed into the ocean." },
  { id: "en020", word: "microplastics", meaning: "微塑膠", partOfSpeech: "n.", source: "cambly", example: "Bottled water may contain microplastics." },
  { id: "en021", word: "continental plates", meaning: "板塊", partOfSpeech: "n.", source: "cambly", example: "Taiwan sits between two continental plates, causing earthquakes." },
  { id: "en022", word: "terrain", meaning: "地形", partOfSpeech: "n.", source: "cambly", example: "Taiwan has diverse terrain: ocean, mountains, and plains." },
  // === 旅遊 / 交通 ===
  { id: "en023", word: "itinerary", meaning: "行程表", partOfSpeech: "n.", source: "cambly", example: "I always plan a detailed itinerary before traveling." },
  { id: "en024", word: "accommodation", meaning: "住宿", partOfSpeech: "n.", source: "cambly", example: "We booked accommodation near the city center." },
  { id: "en025", word: "tourist attraction", meaning: "觀光景點", partOfSpeech: "n.", source: "cambly", example: "That hot spring village is a popular tourist attraction." },
  { id: "en026", word: "shuttle bus", meaning: "接駁車", partOfSpeech: "n.", source: "cambly", example: "You have to take a shuttle bus to reach the mountain restaurant." },
  { id: "en027", word: "road trip", meaning: "公路旅行", partOfSpeech: "n.", source: "cambly", example: "We planned a road trip across the US." },
  { id: "en028", word: "overtourism", meaning: "過度觀光", partOfSpeech: "n.", source: "cambly", example: "Overtourism has become a problem in Venice." },
  { id: "en029", word: "resort", meaning: "度假村", partOfSpeech: "n.", source: "cambly", example: "We stayed at a beach resort in Mexico." },
  { id: "en030", word: "ski resort", meaning: "滑雪場", partOfSpeech: "n.", source: "cambly", example: "Zao is a famous ski resort in northeastern Japan." },
  { id: "en031", word: "ferry boat", meaning: "渡船", partOfSpeech: "n.", source: "cambly", example: "We took a ferry boat to Nami Island." },
  // === 文化 / 台灣 ===
  { id: "en032", word: "tomb sweeping day", meaning: "清明節", partOfSpeech: "n.", source: "cambly", example: "Tomb Sweeping Day is on April 4th in Taiwan." },
  { id: "en033", word: "folk beliefs", meaning: "民間信仰", partOfSpeech: "n.", source: "cambly", example: "Going to the temple is part of folk beliefs." },
  { id: "en034", word: "ancestor", meaning: "祖先", partOfSpeech: "n.", source: "cambly", example: "We pray for our ancestors to bless us." },
  { id: "en035", word: "indigenous people", meaning: "原住民", partOfSpeech: "n.", source: "cambly", example: "Indigenous people use feathers to show their royalty." },
  { id: "en036", word: "multicultural", meaning: "多元文化的", partOfSpeech: "adj.", source: "cambly", example: "Taiwan is a multicultural country." },
  { id: "en037", word: "colonisation", meaning: "殖民", partOfSpeech: "n.", source: "cambly", example: "Taiwan has a history of colonisation by Spain and Japan." },
  { id: "en039", word: "fortune-telling", meaning: "算命", partOfSpeech: "n.", source: "cambly", example: "Fortune-telling is a common practice in Taiwan." },
  { id: "en040", word: "born and raised", meaning: "土生土長", partOfSpeech: "phrase", source: "cambly", example: "I'm Taiwanese, born and raised in Hsinchu." },
  // === 自然 / 科學 ===
  { id: "en042", word: "wingspan", meaning: "翼展", partOfSpeech: "n.", source: "cambly", example: "The wingspan of this eagle is almost 116 cm." },
  { id: "en043", word: "endangered", meaning: "瀕危的", partOfSpeech: "adj.", source: "cambly", example: "These eagles are an endangered species." },
  { id: "en044", word: "species", meaning: "物種", partOfSpeech: "n.", source: "cambly", example: "This documentary is about an endangered species." },
  { id: "en045", word: "raise awareness", meaning: "提高大眾意識", partOfSpeech: "phrase", source: "cambly", example: "The film's goal is to raise awareness about eagles." },
  { id: "en046", word: "documentary", meaning: "紀錄片", partOfSpeech: "n.", source: "cambly", example: "It's a documentary about eagles in Taiwan." },
  // === 健康 / 醫美 ===
  { id: "en047", word: "medical aesthetics", meaning: "醫療美容", partOfSpeech: "n.", source: "cambly", example: "I went to Korea for some medical aesthetics treatment." },
  { id: "en048", word: "collagen", meaning: "膠原蛋白", partOfSpeech: "n.", source: "cambly", example: "RLT improves collagen production for smoother skin." },
  { id: "en049", word: "inflammation", meaning: "發炎", partOfSpeech: "n.", source: "cambly", example: "RLT helps reduce skin inflammation." },
  { id: "en050", word: "regenerate", meaning: "再生", partOfSpeech: "v.", source: "cambly", example: "Red light therapy helps the skin regenerate." },
  { id: "en051", word: "skeptical", meaning: "懷疑的", partOfSpeech: "adj.", source: "cambly", example: "I'm skeptical about whether RLT really works." },
  { id: "en052", word: "hydrated", meaning: "補充水分的", partOfSpeech: "adj.", source: "cambly", example: "Try to stay hydrated by drinking water throughout the day." },
  { id: "en053", word: "flush out", meaning: "排出（毒素）", partOfSpeech: "v.", source: "cambly", example: "Drinking water helps flush out toxins from the body." },
  // === 地緣政治 ===
  { id: "en054", word: "geopolitics", meaning: "地緣政治", partOfSpeech: "n.", source: "cambly", example: "Taiwan plays a key role in global geopolitics." },
  { id: "en055", word: "sanction", meaning: "制裁", partOfSpeech: "n./v.", source: "cambly", example: "The US imposed sanctions on several countries." },
  { id: "en056", word: "sovereignty", meaning: "主權", partOfSpeech: "n.", source: "cambly", example: "Taiwan's sovereignty is a sensitive issue." },
  { id: "en057", word: "precarious", meaning: "不穩定的", partOfSpeech: "adj.", source: "cambly", example: "The geopolitical situation in the Taiwan Strait is precarious." },
  { id: "en058", word: "drone", meaning: "無人機", partOfSpeech: "n.", source: "cambly", example: "Drones are now used in both military and civilian settings." },
  { id: "en059", word: "anchor", meaning: "核心支柱", partOfSpeech: "n.", source: "cambly", example: "Taiwan is an anchor for global semiconductor production." },
  // === MBTI / 心理 ===
  { id: "en060", word: "intuitive", meaning: "直覺型的", partOfSpeech: "adj.", source: "cambly", example: "Intuitive people tend to think abstractly." },
  { id: "en061", word: "empathy", meaning: "同理心", partOfSpeech: "n.", source: "cambly", example: "F types tend to have strong empathy for others." },
  { id: "en062", word: "predestination", meaning: "命中注定", partOfSpeech: "n.", source: "cambly", example: "Do you believe in predestination or free will?" },
  { id: "en063", word: "parallel universe", meaning: "平行宇宙", partOfSpeech: "n.", source: "cambly", example: "In a parallel universe, another version of you exists." },
  { id: "en064", word: "set in stone", meaning: "不可改變的", partOfSpeech: "phrase", source: "cambly", example: "Nothing is set in stone — things can always change." },
  { id: "en065", word: "codependency", meaning: "過度依賴", partOfSpeech: "n.", source: "cambly", example: "Codependency means you can't function without someone." },
  { id: "en066", word: "FOMO", meaning: "錯失恐懼", partOfSpeech: "n.", source: "cambly", example: "I feel FOMO knowing another me might be a billionaire." },
  // === 飲食 ===
  { id: "en067", word: "pescatarian", meaning: "海鮮素食者", partOfSpeech: "n.", source: "cambly", example: "Someone who eats seafood but not meat is pescatarian." },
  { id: "en068", word: "vegan", meaning: "純素者", partOfSpeech: "n./adj.", source: "cambly", example: "Vegans don't eat any animal products, including eggs." },
  { id: "en069", word: "bubble tea", meaning: "珍珠奶茶", partOfSpeech: "n.", source: "cambly", example: "Bubble tea was invented in Taiwan." },
  { id: "en070", word: "broth", meaning: "湯底（清湯）", partOfSpeech: "n.", source: "cambly", example: "The Taiwanese soup has a Chinese medicine broth." },
  { id: "en071", word: "savory", meaning: "鹹味的", partOfSpeech: "adj.", source: "cambly", example: "Thai food has both sweet and savory flavors." },
  // === 電競 ===
  { id: "en073", word: "e-sports", meaning: "電競", partOfSpeech: "n.", source: "cambly", example: "League of Legends is one of the biggest e-sports in the world." },
  { id: "en074", word: "global champion", meaning: "全球冠軍", partOfSpeech: "n.", source: "cambly", example: "T1 has won six global championships." },
  { id: "en075", word: "roster", meaning: "陣容名單", partOfSpeech: "n.", source: "cambly", example: "The team announced a new roster for the season." },
  { id: "en076", word: "tournament", meaning: "錦標賽", partOfSpeech: "n.", source: "cambly", example: "The LCK tournament is held in Korea." },
  // === 不規則動詞過去式（重點！）===
  { id: "en078", word: "come", meaning: "來", partOfSpeech: "v.", source: "cambly", example: "She came to my office this morning.", pastTense: "came", pastParticiple: "come" },
  { id: "en079", word: "see", meaning: "看見", partOfSpeech: "v.", source: "cambly", example: "I saw a beautiful temple yesterday.", pastTense: "saw", pastParticiple: "seen" },
  { id: "en082", word: "tell", meaning: "告訴", partOfSpeech: "v.", source: "cambly", example: "She told me the news.", pastTense: "told", pastParticiple: "told" },
  { id: "en083", word: "make", meaning: "製作", partOfSpeech: "v.", source: "cambly", example: "She made a presentation last week.", pastTense: "made", pastParticiple: "made" },
  { id: "en085", word: "find", meaning: "發現", partOfSpeech: "v.", source: "cambly", example: "We found a nice café near the temple.", pastTense: "found", pastParticiple: "found" },
  { id: "en086", word: "choose", meaning: "選擇", partOfSpeech: "v.", source: "cambly", example: "I chose to go to Universal Studios.", pastTense: "chose", pastParticiple: "chosen" },
  { id: "en087", word: "wake up", meaning: "醒來", partOfSpeech: "v.", source: "cambly", example: "I just woke up when you called.", pastTense: "woke up", pastParticiple: "woken up" },
  { id: "en088", word: "bring", meaning: "帶來", partOfSpeech: "v.", source: "cambly", example: "I brought my camera on the trip.", pastTense: "brought", pastParticiple: "brought" },
  { id: "en089", word: "ride", meaning: "騎乘、搭乘", partOfSpeech: "v.", source: "cambly", example: "I rode many rides at Universal Studios.", pastTense: "rode", pastParticiple: "ridden" },
  { id: "en090", word: "have", meaning: "有／吃", partOfSpeech: "v.", source: "cambly", example: "I had lunch with my brother yesterday.", pastTense: "had", pastParticiple: "had" },

  // === 第23堂補充（Uzma）===
  { id: "en091", word: "carbon dioxide", meaning: "二氧化碳", partOfSpeech: "n.", source: "cambly", example: "Heavy industries emit large amounts of carbon dioxide." },
  { id: "en092", word: "filter", meaning: "過濾器／過濾", partOfSpeech: "n./v.", source: "cambly", example: "This material can act as a filter to purify water." },

  // === 第22堂補充（TJ 歐洲）===
  { id: "en093", word: "historic", meaning: "具有歷史意義的", partOfSpeech: "adj.", source: "cambly", example: "Florence has many historic buildings." },
  { id: "en094", word: "hike", meaning: "健行", partOfSpeech: "n.", source: "cambly", example: "You need waterproof shoes for this hike." },
  { id: "en095", word: "sight", meaning: "景點", partOfSpeech: "n.", source: "cambly", example: "She showed me the sights in Sydney." },
  { id: "en096", word: "complain", meaning: "抱怨", partOfSpeech: "v.", source: "cambly", example: "My friend is constantly complaining about her boyfriend." },
  { id: "en097", word: "continent", meaning: "洲、大陸", partOfSpeech: "n.", source: "cambly", example: "Europe is the world's most visited continent." },
  { id: "en098", word: "German / Germany", meaning: "德國人的／德國", partOfSpeech: "adj./n.", source: "cambly", example: "German culture is very interesting." },
  { id: "en099", word: "British / the UK", meaning: "英國人的／英國", partOfSpeech: "adj./n.", source: "cambly", example: "British people drink a lot of tea." },
  { id: "en100", word: "Italian / Italy", meaning: "義大利人的／義大利", partOfSpeech: "adj./n.", source: "cambly", example: "Italian food is very popular worldwide." },

  // === 第21堂補充（TJ 熊鷹）===
  { id: "en101", word: "professor", meaning: "教授", partOfSpeech: "n.", source: "cambly", example: "A university teacher is called a professor." },
  { id: "en102", word: "feather", meaning: "羽毛", partOfSpeech: "n.", source: "cambly", example: "The feather is just a symbol of royalty." },
  { id: "en103", word: "proceeds", meaning: "收益", partOfSpeech: "n.", source: "cambly", example: "All proceeds will be used to protect these eagles." },
  { id: "en104", word: "lifespan", meaning: "壽命", partOfSpeech: "n.", source: "cambly", example: "The documentary covers the eagle's lifespan." },
  { id: "en105", word: "flying squirrel", meaning: "飛鼠", partOfSpeech: "n.", source: "cambly", example: "Eagles in Taiwan eat flying squirrels." },

  // === 第20堂補充（Lelo MBTI）===
  { id: "en108", word: "Buddhist", meaning: "佛教徒的", partOfSpeech: "adj./n.", source: "cambly", example: "My grandma is Buddhist and eats vegetarian food." },
  { id: "en109", word: "vegetarian diet", meaning: "素食飲食", partOfSpeech: "n.", source: "cambly", example: "I mostly follow a vegetarian diet." },
  { id: "en110", word: "plant-based diet", meaning: "植物性飲食", partOfSpeech: "n.", source: "cambly", example: "A plant-based diet means less meat, more vegetables." },
  { id: "en111", word: "observant", meaning: "觀察型的", partOfSpeech: "adj.", source: "cambly", example: "Observant people describe exactly what they see." },
  { id: "en112", word: "abstract thinking", meaning: "抽象思維", partOfSpeech: "n.", source: "cambly", example: "N types in MBTI are known for abstract thinking." },
  { id: "en113", word: "Type A / Type B", meaning: "A型（計畫型）/ B型（隨性型）人格", partOfSpeech: "n.", source: "cambly", example: "Type A people plan every detail of their trips." },

  // === 第19堂補充（Lelo 感官）===
  { id: "en114", word: "outline", meaning: "大綱", partOfSpeech: "n.", source: "cambly", example: "Write an outline before starting your report." },
  { id: "en115", word: "summary", meaning: "摘要", partOfSpeech: "n.", source: "cambly", example: "Give me a summary of the main points." },
  { id: "en116", word: "seminar", meaning: "研討會（小型）", partOfSpeech: "n.", source: "cambly", example: "We had a seminar about chemical recycling." },
  { id: "en117", word: "conference", meaning: "會議（大型）", partOfSpeech: "n.", source: "cambly", example: "I presented at an international conference." },
  { id: "en118", word: "experiments", meaning: "實驗", partOfSpeech: "n.", source: "cambly", example: "In university, I did many experiments in the lab." },
  { id: "en119", word: "resume", meaning: "履歷", partOfSpeech: "n.", source: "cambly", example: "I sent my resume to the HR department." },
  { id: "en120", word: "heightened senses", meaning: "感官增強", partOfSpeech: "phrase", source: "cambly", example: "When you close your eyes, your other senses are heightened." },
  { id: "en122", word: "beard", meaning: "鬍子（下巴）", partOfSpeech: "n.", source: "cambly", example: "He has a beard and a mustache." },
  { id: "en123", word: "mustache", meaning: "鬍子（上唇）", partOfSpeech: "n.", source: "cambly", example: "A mustache is the hair above the upper lip." },
  { id: "en125", word: "boiled water", meaning: "煮沸的水", partOfSpeech: "n.", source: "cambly", example: "In Taiwan, we drink boiled and filtered tap water." },
  { id: "en126", word: "survey", meaning: "調查、問卷", partOfSpeech: "n.", source: "cambly", example: "According to a survey, 70% prefer bottled water." },
  { id: "en127", word: "sip", meaning: "小口喝", partOfSpeech: "n./v.", source: "cambly", example: "I took a sip of water at the start of class." },

  // === 第18堂補充（Lisa 醫美）===
  { id: "en130", word: "acne", meaning: "痘痘", partOfSpeech: "n.", source: "cambly", example: "RLT is claimed to help reduce acne." },
  { id: "en131", word: "wrinkle", meaning: "皺紋", partOfSpeech: "n.", source: "cambly", example: "Fine lines and wrinkles can be reduced with RLT." },
  { id: "en132", word: "follicle", meaning: "毛囊", partOfSpeech: "n.", source: "cambly", example: "RLT can protect hair follicles and reduce hair loss." },
  { id: "en133", word: "pores", meaning: "毛孔", partOfSpeech: "n.", source: "cambly", example: "Cleanse your face to open up your pores." },
  { id: "en134", word: "infrared", meaning: "紅外線", partOfSpeech: "adj./n.", source: "cambly", example: "Near-infrared light can penetrate deeper into skin." },
  { id: "en135", word: "cosmetics", meaning: "化妝品", partOfSpeech: "n.", source: "cambly", example: "K-pop stars use a lot of cosmetics." },

  // === 第17堂補充（Lisa Marie 文化）===
  { id: "en136", word: "gemstones", meaning: "寶石", partOfSpeech: "n.", source: "cambly", example: "They decorated the temple with gemstones." },
  { id: "en137", word: "glistens", meaning: "閃閃發亮", partOfSpeech: "v.", source: "cambly", example: "The temple glistens when the sunlight hits it." },
  { id: "en138", word: "ornate", meaning: "裝飾華麗的", partOfSpeech: "adj.", source: "cambly", example: "The temples in Thailand are very ornate." },
  { id: "en139", word: "equator", meaning: "赤道", partOfSpeech: "n.", source: "cambly", example: "Countries near the equator are always hot." },
  { id: "en140", word: "monsoon", meaning: "季風", partOfSpeech: "n.", source: "cambly", example: "Taiwan is affected by the monsoon season." },
  { id: "en141", word: "cold front", meaning: "冷鋒", partOfSpeech: "n.", source: "cambly", example: "A cold front is moving in this week." },
  { id: "en142", word: "humidity", meaning: "濕度", partOfSpeech: "n.", source: "cambly", example: "The humidity in Taiwan is very high in summer." },
  { id: "en143", word: "bless", meaning: "保佑", partOfSpeech: "v.", source: "cambly", example: "We pray for our ancestors to bless us." },
  { id: "en144", word: "national holiday", meaning: "國定假日", partOfSpeech: "n.", source: "cambly", example: "October 10th is Taiwan's national holiday." },
  { id: "en145", word: "life updates", meaning: "近況分享", partOfSpeech: "n.", source: "cambly", example: "We share life updates during family gatherings." },
  { id: "en146", word: "pagoda", meaning: "塔（佛塔）", partOfSpeech: "n.", source: "cambly", example: "The Thai temple has a beautiful pagoda." },

  // === 第16堂補充（Nintendo Museum）===
  { id: "en147", word: "halls of residence", meaning: "宿舍", partOfSpeech: "n.", source: "cambly", example: "I stay in my company's halls of residence during the week." },
  { id: "en148", word: "interactive", meaning: "互動的", partOfSpeech: "adj.", source: "cambly", example: "The Nintendo Museum has many interactive exhibits." },
  { id: "en149", word: "exhibit", meaning: "展覽品", partOfSpeech: "n.", source: "cambly", example: "You can find exhibits from the NES to the Switch there." },
  { id: "en150", word: "influential", meaning: "有影響力的", partOfSpeech: "adj.", source: "cambly", example: "Nintendo is one of the most influential gaming companies." },
  { id: "en151", word: "console", meaning: "遊戲主機", partOfSpeech: "n.", source: "cambly", example: "Nintendo has made many different consoles over the years." },
  { id: "en152", word: "lottery system", meaning: "抽籤制度", partOfSpeech: "n.", source: "cambly", example: "You need to enter a lottery three months before visiting." },
  { id: "en153", word: "south of Taipei", meaning: "在台北南方（方位說法）", partOfSpeech: "phrase", source: "cambly", example: "Hsinchu is south of Taipei, not southern Taiwan." },

  // === 第15堂補充（Robin Lea 首爾）===
  { id: "en154", word: "host", meaning: "主持人", partOfSpeech: "n.", source: "cambly", example: "The host of the fan event spoke in Korean." },
  { id: "en155", word: "fun vs funny", meaning: "fun=好玩 vs funny=好笑", partOfSpeech: "—", source: "cambly", example: "The event was fun (enjoyable), not just funny (humorous)." },
  { id: "en156", word: "sensitive to smells", meaning: "對氣味敏感", partOfSpeech: "phrase", source: "cambly", example: "I'm sensitive to smells, so I can't have pets." },
  { id: "en158", word: "vulnerable", meaning: "脆弱的", partOfSpeech: "adj.", source: "cambly", example: "Fish are vulnerable to temperature changes." },

  // === 第14堂補充（Lyn Rose 韓劇）===
  { id: "en159", word: "versatile", meaning: "多才多藝的", partOfSpeech: "adj.", source: "cambly", example: "IU is a versatile actress who can play many different roles." },
  { id: "en160", word: "actress", meaning: "女演員", partOfSpeech: "n.", source: "cambly", example: "A woman actor is called an actress." },
  { id: "en161", word: "autism", meaning: "自閉症", partOfSpeech: "n.", source: "cambly", example: "The Extraordinary Lawyer Woo features a character with autism." },
  { id: "en162", word: "adolescent", meaning: "青少年", partOfSpeech: "n.", source: "cambly", example: "Justin Bieber was an adolescent when he became famous." },
  { id: "en163", word: "familiarise yourself with", meaning: "熟悉某事", partOfSpeech: "phrase", source: "cambly", example: "I'd better familiarise myself with the bus route first." },

  // === 第13堂補充（Anita 台灣食物）===
  { id: "en164", word: "chit chat", meaning: "閒聊", partOfSpeech: "n.", source: "cambly", example: "We can just have some chit chat today." },
  { id: "en166", word: "public transportation", meaning: "大眾運輸", partOfSpeech: "n.", source: "cambly", example: "Hsinchu's public transportation isn't very convenient." },
  { id: "en167", word: "limited seats", meaning: "名額有限", partOfSpeech: "n.", source: "cambly", example: "Students must study hard because of limited school seats." },
  { id: "en168", word: "compassionate", meaning: "富同情心的", partOfSpeech: "adj.", source: "cambly", example: "Taiwanese people are known for being kind and compassionate." },
  { id: "en169", word: "northern lights / aurora", meaning: "北極光", partOfSpeech: "n.", source: "cambly", example: "You can see the aurora borealis in Yellowknife, Canada." },

  // === 第11堂補充（Kat 日本）===
  { id: "en170", word: "world-class", meaning: "世界頂級的", partOfSpeech: "adj.", source: "cambly", example: "Japan has a world-class railway system." },
  { id: "en171", word: "welfare", meaning: "福利（政府補助）", partOfSpeech: "n.", source: "cambly", example: "Finland has one of the best welfare systems in the world." },
  { id: "en172", word: "equality", meaning: "平等", partOfSpeech: "n.", source: "cambly", example: "Sweden ranks highly in terms of gender equality." },
  { id: "en173", word: "high cost of living", meaning: "高生活費", partOfSpeech: "phrase", source: "cambly", example: "Sweden has a very high cost of living." },
  { id: "en174", word: "defense", meaning: "國防", partOfSpeech: "n.", source: "cambly", example: "Military measures for protecting a country are called defense." },
  { id: "en175", word: "desire", meaning: "渴望", partOfSpeech: "n.", source: "cambly", example: "My biggest desire is to travel to Europe someday." },
  { id: "en176", word: "pension", meaning: "退休金", partOfSpeech: "n.", source: "cambly", example: "The government pays a pension to retired workers." },
  { id: "en177", word: "jealous", meaning: "嫉妒的", partOfSpeech: "adj.", source: "cambly", example: "I feel jealous that my parents went to Japan for cherry blossoms." },
  { id: "en178", word: "considering my options", meaning: "考慮我的選擇", partOfSpeech: "phrase", source: "cambly", example: "I'm still considering my options for studying abroad." },

  // === 第10堂補充（Kay + TJ）===
  { id: "en179", word: "chemist", meaning: "化學師", partOfSpeech: "n.", source: "cambly", example: "A person who works with chemistry is called a chemist." },
  { id: "en180", word: "arcade", meaning: "電玩遊樂場", partOfSpeech: "n.", source: "cambly", example: "After lunch, we went to an arcade to play games." },
  { id: "en181", word: "pick up", meaning: "接（某人）", partOfSpeech: "phrasal v.", source: "cambly", example: "I picked up my brother at 1 PM." },

  // === 第9堂補充（Kristina 歐洲）===
  { id: "en182", word: "integrated into the culture", meaning: "融入文化", partOfSpeech: "phrase", source: "cambly", example: "Different cultures have been integrated into Taiwanese society." },
  { id: "en183", word: "hygiene", meaning: "衛生習慣", partOfSpeech: "n.", source: "cambly", example: "Good hygiene is important for health and social situations." },
  { id: "en184", word: "bidet", meaning: "坐浴桶", partOfSpeech: "n.", source: "cambly", example: "European countries commonly have bidets in bathrooms." },
  { id: "en187", word: "art therapy", meaning: "藝術治療", partOfSpeech: "n.", source: "cambly", example: "Art therapy helps people express emotions through creativity." },
  { id: "en188", word: "rapidly collect data", meaning: "快速收集資料", partOfSpeech: "phrase", source: "cambly", example: "We need to rapidly collect data for our industry reports." },

  // === 第8堂補充（Craig 政治）===
  { id: "en190", word: "vaccine", meaning: "疫苗", partOfSpeech: "n.", source: "cambly", example: "The government bought vaccines for all Taiwanese citizens." },
  { id: "en191", word: "speech", meaning: "演講", partOfSpeech: "n.", source: "cambly", example: "I need to give a speech to our industry clients." },
  { id: "en192", word: "stressful", meaning: "有壓力的", partOfSpeech: "adj.", source: "cambly", example: "Giving presentations to customers is stressful." },
  { id: "en193", word: "refreshing flavor", meaning: "清爽的口味", partOfSpeech: "phrase", source: "cambly", example: "I like refreshing flavors, not heavy or thick ones." },

  // === 第7堂補充（Robin Lea LOL）===
  { id: "en194", word: "characteristics", meaning: "特徵、特性", partOfSpeech: "n.", source: "cambly", example: "The game has certain characteristics that make it unique." },
  { id: "en195", word: "former president", meaning: "前總統", partOfSpeech: "n.", source: "cambly", example: "Our former president also uses Threads every day." },
  { id: "en196", word: "traffic statistics", meaning: "流量統計", partOfSpeech: "n.", source: "cambly", example: "Taiwan has the highest Threads usage according to statistics." },

  // === 第6堂補充（Lisa Marie 飲水）===
  { id: "en197", word: "jet lag", meaning: "時差感", partOfSpeech: "n.", source: "cambly", example: "I had terrible jet lag after flying from Taiwan to the US." },
  { id: "en198", word: "toxin", meaning: "毒素", partOfSpeech: "n.", source: "cambly", example: "Water helps remove toxins from your body." },
  { id: "en199", word: "regulate", meaning: "調節", partOfSpeech: "v.", source: "cambly", example: "Water helps regulate body temperature." },
  { id: "en200", word: "mouthful", meaning: "一口（份量）", partOfSpeech: "n.", source: "cambly", example: "I took two mouthfuls of water after finishing each task." },

  // === 第5堂補充（Zoe 台灣地理）===
  { id: "en201", word: "geographical features", meaning: "地理特徵", partOfSpeech: "n.", source: "cambly", example: "Taiwan has many different geographical features." },
  { id: "en202", word: "a variety of", meaning: "各種各樣的", partOfSpeech: "phrase", source: "cambly", example: "The mountains have a variety of trees due to the altitude." },

  // === 第4堂補充（Sabina 半導體）===
  { id: "en203", word: "highly educated", meaning: "高學歷的", partOfSpeech: "adj.", source: "cambly", example: "Hsinchu has many highly educated engineers." },
  { id: "en204", word: "euthanasia", meaning: "安樂死", partOfSpeech: "n.", source: "cambly", example: "Switzerland offers euthanasia legally, known as death tourism." },

  // === 第3堂補充（Denisse 廟宇）===
  { id: "en205", word: "nightmare", meaning: "惡夢", partOfSpeech: "n.", source: "cambly", example: "I had a nightmare that my mom passed away." },
  { id: "en206", word: "vivid", meaning: "生動逼真的", partOfSpeech: "adj.", source: "cambly", example: "The nightmare was so vivid it felt completely real." },

  // === 第2堂補充（Sabina + Sarah）===
  { id: "en207", word: "software developer", meaning: "軟體開發師", partOfSpeech: "n.", source: "cambly", example: "My teacher used to be a software developer." },
  { id: "en208", word: "hallucination (AI)", meaning: "AI幻覺（錯誤答案）", partOfSpeech: "n.", source: "cambly", example: "Sometimes AI gives hallucinations—wrong answers that sound confident." },

  // === 第1堂補充（初次上課）===
  { id: "en209", word: "exhibition", meaning: "展覽", partOfSpeech: "n.", source: "cambly", example: "I went to the US for a business trip to attend an exhibition." },

  // === 第25堂補充（Glynis — 工作介紹與移民人生）===
  { id: "en210", word: "routine report", meaning: "例行性報告", partOfSpeech: "n.", source: "cambly", example: "We need to write a routine report every month." },
  { id: "en211", word: "annual report", meaning: "年度報告", partOfSpeech: "n.", source: "cambly", example: "The annual report summarizes the whole year's research." },
  { id: "en212", word: "domain", meaning: "（研究）領域", partOfSpeech: "n.", source: "cambly", example: "I get excited when I research a new domain in the industry." },
  { id: "en213", word: "immigrate", meaning: "移民", partOfSpeech: "v.", source: "cambly", example: "My parents immigrated to South Africa after the war." },

  // === 第26堂補充（Glynis — 德文練習與家族介紹）===
  { id: "en214", word: "paternal", meaning: "父系的", partOfSpeech: "adj.", source: "cambly", example: "My paternal grandmother lives in Taipei." },
  { id: "en215", word: "maternal", meaning: "母系的", partOfSpeech: "adj.", source: "cambly", example: "My maternal grandmother lives in Changhua." },
  { id: "en216", word: "close-knit family", meaning: "緊密的家庭關係", partOfSpeech: "phrase", source: "cambly", example: "We are a close-knit family because we grew up together." },
  { id: "en217", word: "foster carer", meaning: "寄養家庭照顧者", partOfSpeech: "n.", source: "cambly", example: "She became a foster carer to help children whose parents can't look after them." },
  { id: "en218", word: "trauma", meaning: "創傷", partOfSpeech: "n.", source: "cambly", example: "Many foster children have experienced trauma." },
  { id: "en219", word: "charity", meaning: "慈善機構", partOfSpeech: "n.", source: "cambly", example: "She wants to volunteer for a charity that helps troubled teenagers." },
  { id: "en220", word: "impulse", meaning: "衝動", partOfSpeech: "n.", source: "cambly", example: "Teenagers sometimes act on impulse without thinking it through." },
  { id: "en221", word: "pass away", meaning: "過世（委婉說法）", partOfSpeech: "phrase", source: "cambly", example: "My paternal grandfather passed away a long time ago." },
  { id: "en222", word: "transcript", meaning: "逐字稿、文字稿", partOfSpeech: "n.", source: "cambly", example: "Reading the transcript while listening really helps with pronunciation." },
  { id: "en223", word: "siblings", meaning: "兄弟姊妹", partOfSpeech: "n.", source: "cambly", example: "My grandma's four children are all siblings." },

  // === 第27堂補充（Lyn Rose — AI科技、杜拜旅遊、職涯與個性）===
  { id: "en224", word: "flaunt", meaning: "炫耀、大肆展示", partOfSpeech: "v.", source: "cambly", example: "In Dubai, wealthy people flaunt their luxury cars and designer clothes." },
  { id: "en225", word: "affordability", meaning: "負擔能力、可負擔性", partOfSpeech: "n.", source: "cambly", example: "Dubai attracts people who have the affordability to enjoy luxury." },
  { id: "en226", word: "misinformation", meaning: "錯誤資訊（非惡意）", partOfSpeech: "n.", source: "cambly", example: "AI-powered misinformation is seen as the world's greatest short-term threat." },
  { id: "en227", word: "verbatim", meaning: "逐字地、一字不差地", partOfSpeech: "adv./adj.", source: "cambly", example: "You can't copy AI's answer verbatim; you need to paraphrase it." },
  { id: "en228", word: "paraphrase", meaning: "改寫、換句話說", partOfSpeech: "v./n.", source: "cambly", example: "Always paraphrase AI answers in your own words instead of copying them." },
  { id: "en229", word: "sales pitch", meaning: "推銷話術（先打招呼再進入正題）", partOfSpeech: "n.", source: "cambly", example: "At the exhibition, I had to do a sales pitch to get companies to talk to me." },
  { id: "en230", word: "extrovert / introvert", meaning: "外向者 / 內向者", partOfSpeech: "n.", source: "cambly", example: "I'm an extrovert by nature, but I was shy about speaking English." },
  { id: "en231", word: "akin to", meaning: "類似於、近似", partOfSpeech: "phrase", source: "cambly", example: "My accent is more akin to American pronunciation." },
  { id: "en232", word: "short-sighted", meaning: "短視的、目光短淺的", partOfSpeech: "adj.", source: "cambly", example: "Copying AI answers to get a good grade is very short-sighted." },
  { id: "en233", word: "pros and cons", meaning: "優缺點、利弊", partOfSpeech: "phrase", source: "cambly", example: "There are pros and cons to using AI in your work." },
  { id: "en234", word: "optimistic / pessimistic", meaning: "樂觀的 / 悲觀的", partOfSpeech: "adj.", source: "cambly", example: "38% of CEOs were optimistic about the global economy." },
  { id: "en235", word: "inflation", meaning: "通貨膨脹", partOfSpeech: "n.", source: "cambly", example: "Last year the world was dealing with high inflation and rising interest rates." },
  { id: "en236", word: "interest rate", meaning: "利率", partOfSpeech: "n.", source: "cambly", example: "Rising interest rates affect businesses and consumers." },
  { id: "en237", word: "energy efficiency", meaning: "能源效率", partOfSpeech: "n.", source: "cambly", example: "More than 75% of executives have begun changes to increase energy efficiency." },

  // === 第28堂補充（TJ — AI 應用、Engoo 理財文章 Saving Money Is Easier With Goals）===
  { id: "en239", word: "digital closet", meaning: "數位衣櫥（也可說 online closet）", partOfSpeech: "n.", source: "cambly", example: "I built a digital closet where I upload pictures of my clothes." },
  { id: "en240", word: "prompt", meaning: "提示詞、給 AI 的指令", partOfSpeech: "n.", source: "cambly", example: "You have to write clear prompts to get what you want from AI." },
  { id: "en241", word: "annual membership", meaning: "年費會員資格", partOfSpeech: "n.", source: "cambly", example: "I bought an annual membership for Claude." },
  { id: "en242", word: "experienced", meaning: "有經驗的（不是 older）", partOfSpeech: "adj.", source: "cambly", example: "They are more experienced players, so they teach me how to play." },
  { id: "en243", word: "finance", meaning: "金融、財務", partOfSpeech: "n.", source: "engoo", example: "The finance minister will announce the government's new project tomorrow." },
  { id: "en244", word: "back up", meaning: "以事實或證據支持", partOfSpeech: "phrasal v.", source: "engoo", example: "There is no scientific evidence to back up your claims." },
  { id: "en245", word: "proportion", meaning: "比例（整體中的一部分）", partOfSpeech: "n.", source: "engoo", example: "The proportion of those with clear goals who saved regularly was 75%." },
  { id: "en246", word: "debt", meaning: "債務（b 不發音，唸 /dɛt/）", partOfSpeech: "n.", source: "engoo", example: "We had to take on a lot of debt to buy our house." },
  { id: "en247", word: "owe", meaning: "欠（錢）", partOfSpeech: "v.", source: "cambly", example: "If I owe you money, I have to give you money.", note: "owe（欠）vs own（擁有）只差一個字母，意思完全不同！" },
  { id: "en248", word: "own", meaning: "擁有", partOfSpeech: "v.", source: "cambly", example: "They own the house, but they still owe the bank money." },
  { id: "en249", word: "mortgage", meaning: "房貸", partOfSpeech: "n.", source: "cambly", example: "When you buy a house, you have to pay the mortgage." },
  { id: "en250", word: "expense", meaning: "開銷、花費", partOfSpeech: "n.", source: "engoo", example: "I live quite far from the office, so travel is a significant expense." },
  { id: "en251", word: "automatic", meaning: "自動的", partOfSpeech: "adj.", source: "engoo", example: "She recommended setting up an automatic transfer to a savings account." },
  { id: "en252", word: "configure", meaning: "設定（動詞；名詞是 configuration）", partOfSpeech: "v.", source: "cambly", example: "You just need to configure the amount, and it buys the stock automatically." },
  { id: "en253", word: "strict", meaning: "嚴格的", partOfSpeech: "adj.", source: "engoo", example: "I am not strict when it comes to budgeting and saving." },
  { id: "en254", word: "budgeting", meaning: "編列預算、控管開支", partOfSpeech: "n.", source: "engoo", example: "How strict are you when it comes to budgeting and saving?" },
  { id: "en255", word: "emergency fund", meaning: "緊急預備金", partOfSpeech: "n.", source: "engoo", example: "An emergency fund is money for something unexpected, like a medical situation." },
  { id: "en256", word: "financial literacy", meaning: "理財知識、金融素養", partOfSpeech: "n.", source: "engoo", example: "Do you think financial literacy should be taught in schools?" },
  { id: "en257", word: "decade", meaning: "十年", partOfSpeech: "n.", source: "engoo", example: "The proportion of greenhouse gases has been rising over the last few decades." },
  { id: "en258", word: "contraction", meaning: "縮寫形（如 weren't、I'm）", partOfSpeech: "n.", source: "cambly", example: "Don't forget contractions when reading: 'were not' becomes 'weren't'." },
  { id: "en259", word: "pay yourself first", meaning: "先支付自己（先存錢再花錢的理財原則）", partOfSpeech: "phrase", source: "cambly", example: "The best money advice I've heard is: pay yourself first." },
  { id: "en260", word: "achieve a goal", meaning: "達成目標（不是 attend）", partOfSpeech: "phrase", source: "cambly", example: "You need to save that money to achieve your goals." },
  { id: "en261", word: "high-risk investing", meaning: "高風險投資", partOfSpeech: "n.", source: "cambly", example: "If you want to do some high-risk investing, you need to know you might lose money." },

  // === 不規則動詞三態練習清單（2026-07-22 自己整理；2026-07-23 與 en077-090 統一格式）===
  // 【格式統一】原本 en077-090 是「過去式(原形)」的舊格式（例如 "bought (buy)"）。
  // 2026-07-23 整理：其中 go/take/buy/think 4 個跟這批新格式重複，已移除
  // （原始內容封存到 data-removed.js）；其餘 10 個（come/see/tell/make/find/
  // choose/wake up/bring/ride/have）已就地改成這批新格式（word=原形、
  // 補上 pastTense/pastParticiple），id 保持不變。現在整個單字庫只有一種
  // 不規則動詞格式，練習池由 english.html 的 irregularVerbPool() 自動抓取。
  { id: "en262", word: "teach", meaning: "教導", partOfSpeech: "v.", source: "other", example: "My teacher taught me this word yesterday.", pastTense: "taught", pastParticiple: "taught" },
  { id: "en263", word: "catch", meaning: "抓住、趕上", partOfSpeech: "v.", source: "other", example: "I caught the last bus home.", pastTense: "caught", pastParticiple: "caught" },
  { id: "en264", word: "buy", meaning: "購買", partOfSpeech: "v.", source: "other", example: "I bought a dress yesterday.", pastTense: "bought", pastParticiple: "bought" },
  { id: "en265", word: "think", meaning: "思考、認為", partOfSpeech: "v.", source: "other", example: "I thought it was a good idea.", pastTense: "thought", pastParticiple: "thought" },
  { id: "en266", word: "fall", meaning: "跌倒、落下", partOfSpeech: "v.", source: "other", example: "Prices fell sharply last month.", pastTense: "fell", pastParticiple: "fallen" },
  { id: "en267", word: "throw", meaning: "丟擲", partOfSpeech: "v.", source: "other", example: "He threw the ball across the yard.", pastTense: "threw", pastParticiple: "thrown" },
  { id: "en268", word: "fly", meaning: "飛", partOfSpeech: "v.", source: "other", example: "We flew to Japan last year.", pastTense: "flew", pastParticiple: "flown" },
  { id: "en269", word: "take", meaning: "拿取、搭乘", partOfSpeech: "v.", source: "other", example: "We took the MRT to Taipei.", pastTense: "took", pastParticiple: "taken" },
  { id: "en270", word: "go", meaning: "去", partOfSpeech: "v.", source: "other", example: "Yesterday, I went shopping.", pastTense: "went", pastParticiple: "gone" },
  { id: "en271", word: "sleep", meaning: "睡覺", partOfSpeech: "v.", source: "other", example: "I slept well after the shower.", pastTense: "slept", pastParticiple: "slept" },
  { id: "en272", word: "leave", meaning: "離開、留下", partOfSpeech: "v.", source: "other", example: "She left the office early.", pastTense: "left", pastParticiple: "left" },
  { id: "en273", word: "spend", meaning: "花費（時間/金錢）", partOfSpeech: "v.", source: "other", example: "I spent a lot of money on the trip.", pastTense: "spent", pastParticiple: "spent" },
  { id: "en274", word: "hurt", meaning: "傷害、受傷", partOfSpeech: "v.", source: "other", example: "I hurt my leg while hiking.", pastTense: "hurt", pastParticiple: "hurt" },
  { id: "en275", word: "cost", meaning: "花費（金錢）", partOfSpeech: "v.", source: "other", example: "The trip cost more than I expected.", pastTense: "cost", pastParticiple: "cost" },
];

// ============================================================
// 英文文法題庫（從課程錯誤整理，26堂課老師修正）
// 格式：{ id, category, rule, wrong, correct, explanation, mastered }
// ============================================================
const ENGLISH_GRAMMAR = [
  // === 過去式（你最常犯的錯誤）===
  { id: "gr001", category: "past_tense", rule: "go → went", wrong: "I go to Japan last year.", correct: "I went to Japan last year.", explanation: "go 的過去式是 went。有 last year 就是過去式信號。", mastered: false },
  { id: "gr002", category: "past_tense", rule: "wake up → woke up", wrong: "I just wake up.", correct: "I just woke up.", explanation: "wake up 的過去式是 woke up。這是你很常犯的錯誤！", mastered: false },
  { id: "gr003", category: "past_tense", rule: "come → came", wrong: "I just come back from Japan.", correct: "I just came back from Japan.", explanation: "come 的過去式是 came。", mastered: false },
  { id: "gr004", category: "past_tense", rule: "bring → brought", wrong: "I bring my camera.", correct: "I brought my camera.", explanation: "bring 的過去式是 brought。描述旅行時帶了什麼，用過去式。", mastered: false },
  { id: "gr005", category: "past_tense", rule: "will + 原形（不是過去式）", wrong: "I will told her.", correct: "I will tell her.", explanation: "will 後面接原形動詞，不是過去式。told 是 tell 的過去式，這裡不適用。", mastered: false },
  { id: "gr006", category: "past_tense", rule: "choose → chose + to + 原形", wrong: "I choose to, to went to Universal.", correct: "I chose to go to Universal.", explanation: "choose 的過去式是 chose，後面接 to + 原形動詞 go。", mastered: false },
  { id: "gr007", category: "past_tense", rule: "ride → rode（遊樂設施）", wrong: "I play many facilities at Universal.", correct: "I rode many rides at Universal.", explanation: "遊樂設施用 ride（乘坐），而且要過去式 rode。設施叫 rides，不是 facilities。", mastered: false },
  { id: "gr008", category: "past_tense", rule: "現在完成進行式：I've been doing", wrong: "I already do this work past two years.", correct: "I've been doing this work for the past two years.", explanation: "從過去一直持續到現在，用 have been + V-ing。", mastered: false },
  { id: "gr009", category: "past_tense", rule: "went shopping（不是 just shopping）", wrong: "We just shopping.", correct: "We went shopping.", explanation: "shopping 前面要有動詞，正確說法是 went shopping。", mastered: false },
  { id: "gr010", category: "past_tense", rule: "plan to travel（不是 traveling）", wrong: "I plan to traveling to Korea.", correct: "I planned to travel to Korea.", explanation: "plan to 後接原形動詞 travel，不是 traveling。描述過去計畫用 planned。", mastered: false },
  { id: "gr036", category: "past_tense", rule: "begin → began（不規則過去式）", wrong: "I just learned maybe two weeks, so I just begin.", correct: "I just learned maybe two weeks ago, so I just began.", explanation: "begin 的過去式是不規則變化 began，且需要加 ago 表示「幾週前」。", mastered: false },
  { id: "gr037", category: "past_tense", rule: "現在完成進行式：have been doing（再加強練習）", wrong: "I already do this work two years.", correct: "I have already been doing this work for two years.", explanation: "從過去持續到現在的動作要用現在完成進行式 have been + V-ing，並加 for 表示期間長度。這和你 gr008 的錯誤是同一個模式，這個句型還需要多練習！", mastered: false },
  // === 主詞動詞一致 ===
  { id: "gr011", category: "subject_verb", rule: "one team has（單數）", wrong: "So, one team have five people.", correct: "So, one team has five people.", explanation: "one team 是第三人稱單數，have 要改成 has。", mastered: false },
  { id: "gr012", category: "subject_verb", rule: "my company has", wrong: "My company have many clients.", correct: "My company has many clients.", explanation: "My company 是單數，have → has。", mastered: false },
  { id: "gr013", category: "subject_verb", rule: "she plans（第三人稱加 s）", wrong: "she plan to change her work.", correct: "She plans to change her job.", explanation: "第三人稱單數現在式加 -s。", mastered: false },
  { id: "gr014", category: "subject_verb", rule: "It also has（第三人稱單數）", wrong: "It also have the stock in US.", correct: "It also has stock in the US.", explanation: "It 是第三人稱單數，have → has。", mastered: false },
  { id: "gr015", category: "subject_verb", rule: "my parents are staying（複數進行式）", wrong: "my parents is stay in Hsinchu.", correct: "My parents are staying in Hsinchu.", explanation: "parents 是複數，is → are，進行中的狀態用 are staying。", mastered: false },
  { id: "gr016", category: "subject_verb", rule: "Taiwan has many mountains", wrong: "because Taiwan have many mountains.", correct: "because Taiwan has many mountains.", explanation: "Taiwan 是第三人稱單數，have → has。", mastered: false },
  { id: "gr017", category: "subject_verb", rule: "speaking and writing are harder", wrong: "speaking and write is more hard.", correct: "Speaking and writing are harder.", explanation: "兩個動名詞當主詞，用複數 are。比較級用 harder，不是 more hard。", mastered: false },
  { id: "gr038", category: "subject_verb", rule: "grandma has（單數第三人稱）", wrong: "My grandma have seven grandchildren.", correct: "My grandma has seven grandchildren.", explanation: "grandma 是第三人稱單數，have 要改成 has。這是你重複出現的錯誤類型，務必多練習！", mastered: false },
  { id: "gr039", category: "subject_verb", rule: "children are（複數動詞，注意跟上面相反方向）", wrong: "because his brother's children is also older than me.", correct: "because his brother's children are also older than me.", explanation: "children 是複數名詞，動詞要用 are，不是 is。這次方向相反——上一題是單數誤用 have，這題是複數誤用 is，要小心分辨主詞單複數。", mastered: false },
  // === 介系詞 ===
  { id: "gr018", category: "preposition", rule: "in the car（不是 on）", wrong: "Right now, it's on the car.", correct: "Right now, I'm in the car.", explanation: "在車子裡用 in，不用 on。on 是用在大型交通工具：on the bus, on the train。", mastered: false },
  { id: "gr019", category: "preposition", rule: "in the chemical industry（工作領域用 in）", wrong: "I'm an industry analyst about chemical industry.", correct: "I'm an industrial analyst in the chemical industry.", explanation: "在某個產業工作用 in the + industry。", mastered: false },
  { id: "gr020", category: "preposition", rule: "different from（不是 different to）", wrong: "it's very different to right now's work.", correct: "It's very different from my work right now.", explanation: "different 後面接 from。", mastered: false },
  { id: "gr021", category: "preposition", rule: "south of Taipei（方位用 south of）", wrong: "it's a city south than Taipei.", correct: "Hsinchu is south of Taipei.", explanation: "描述相對位置用 south of，不是 south than。", mastered: false },
  { id: "gr022", category: "preposition", rule: "in March（月份用 in）", wrong: "I applied to go at March.", correct: "I applied to go in March.", explanation: "月份前用 in，不用 at。", mastered: false },
  { id: "gr023", category: "preposition", rule: "sensitive to（不是 for）", wrong: "sensitive for the smell.", correct: "sensitive to the smell.", explanation: "sensitive 後面固定搭配 to。", mastered: false },
  { id: "gr024", category: "preposition", rule: "famous for（不是 about）", wrong: "famous about renewable energy.", correct: "famous for renewable energy.", explanation: "famous 後面接 for，表示以某事聞名。", mastered: false },
  { id: "gr025", category: "preposition", rule: "in front of（不是 before）", wrong: "cry before your friend.", correct: "cry in front of your friends.", explanation: "在某人面前用 in front of，before 是時間上的之前。", mastered: false },
  { id: "gr040", category: "preposition", rule: "study + 受詞（不加 about）", wrong: "I study about the chemical industry.", correct: "I study the chemical industry.", explanation: "study 是及物動詞，後面直接加受詞，不需要 about。", mastered: false },
  { id: "gr041", category: "preposition", rule: "work as + 職稱（不是 work in）", wrong: "Actually, I work in an industrial analyst.", correct: "Actually, I work as an industrial analyst.", explanation: "描述職業要用 work as + 職稱，不是 work in。", mastered: false },
  { id: "gr042", category: "preposition", rule: "live in + 地點", wrong: "and they are living Taipei.", correct: "and they are living in Taipei.", explanation: "live 後面接地點要加介系詞 in。", mastered: false },
  // === 冠詞 / 其他 ===
  { id: "gr026", category: "other", rule: "I was born（不是 I'm born）", wrong: "I'm born in Taiwan.", correct: "I was born in Taiwan.", explanation: "出生是過去發生的事，用過去式 was born。", mastered: false },
  { id: "gr027", category: "other", rule: "the most famous（最高級加 the）", wrong: "It's most famous company.", correct: "It's the most famous company.", explanation: "最高級前面要加定冠詞 the。", mastered: false },
  { id: "gr028", category: "other", rule: "I'm an analyst（職業用 a/an）", wrong: "I'm the industry analyst.", correct: "I'm an industrial analyst.", explanation: "初次介紹職業用不定冠詞 a/an。analyst 以母音開頭，用 an。", mastered: false },
  { id: "gr029", category: "other", rule: "better（不是 more better）", wrong: "It's more better.", correct: "It's better.", explanation: "比較級已經有 -er，不需要再加 more。", mastered: false },
  { id: "gr030", category: "other", rule: "another（不是 an other）", wrong: "an other master's degree.", correct: "another master's degree.", explanation: "another 是一個字，不是 an + other。", mastered: false },
  { id: "gr031", category: "other", rule: "a lot of research（不是 many）", wrong: "I need to do many research.", correct: "I need to do a lot of research.", explanation: "research 是不可數名詞，不能用 many，要用 a lot of 或 much。", mastered: false },
  { id: "gr032", category: "other", rule: "listen to（不是 hear/will）", wrong: "I will hear that song.", correct: "I will listen to that song.", explanation: "主動去聽用 listen to，hear 是被動聽到。", mastered: false },
  { id: "gr033", category: "other", rule: "gain experience（不是 do）", wrong: "Do many experience.", correct: "Gain a lot of experience.", explanation: "experience 要用 gain 或 get，不用 do。", mastered: false },
  { id: "gr034", category: "other", rule: "communicate in Chinese（不是 communication use）", wrong: "we communication use Chinese.", correct: "We communicate in Chinese.", explanation: "communication 是名詞，這裡需要動詞 communicate。語言前用介系詞 in。", mastered: false },
  { id: "gr035", category: "other", rule: "go on a business trip（不是 got）", wrong: "I got a business trip.", correct: "I went on a business trip.", explanation: "出差的固定說法是 go on a business trip。", mastered: false },
  { id: "gr043", category: "other", rule: "被動過去式：were born（不是 are born）", wrong: "So, why are you born in South America?", correct: "So, why were you born in South America?", explanation: "be born 是被動語態，描述過去出生的事實要用過去式 were，不是現在式 are。這跟你 gr026 的「I was born」是同一個重點，這個句型反覆出現要特別注意！", mastered: false },
  { id: "gr044", category: "other", rule: "after + 動名詞（graduating）", wrong: "Sometimes, because it's my first work after graduate.", correct: "Sometimes, because it's my first job after graduating.", explanation: "介系詞 after 後面要接動名詞（-ing），graduate 要改成 graduating；work 改成 job 更自然道地。", mastered: false },
  { id: "gr045", category: "other", rule: "現在進行式：am staying（暫住狀態，不用現在簡單式）", wrong: "I just finished my lunch and I stay in my grandma's house.", correct: "I just finished my lunch and I am staying in my grandma's house.", explanation: "描述目前暫住、暫時的狀態要用現在進行式 am staying，而不是現在簡單式 stay。同一句中也不要混用過去式和現在式。", mastered: false },
  { id: "gr046", category: "other", rule: "start/begin + 動名詞（-ing 形式）", wrong: "I started study for the English.", correct: "I started studying English.", explanation: "start 和 begin 後面接動詞時，要用動名詞形式（-ing），不用原形。另外 study English 不需要 'for'，直接接受詞即可。", mastered: false },
  { id: "gr047", category: "past_tense", rule: "過去事件全程用過去式（feel→felt, it's→it was）", wrong: "At the beginning of that trip, I feel very nervous because it's my first time.", correct: "At the beginning of that trip, I felt very nervous because it was my first time.", explanation: "描述過去的經歷時，整個敘述都要維持過去式。feel→felt、it's→it was，不能中途換回現在式。這是你反覆出現的錯誤，請特別注意！", mastered: false },
  { id: "gr048", category: "past_tense", rule: "過去的動作 + for + 時間長度（stay→stayed for）", wrong: "I went to America, stay 10 days.", correct: "I went to America and stayed for 10 days.", explanation: "stay 在這句是過去式要改 stayed；描述持續了多久的時間用 'for + 數字'（for 10 days），不能直接加數字。", mastered: false },
  // === 第28堂（TJ — AI 話題與理財文章）===
  { id: "gr049", category: "other", rule: "I'm not surprised（be + 形容詞，不是 didn't）", wrong: "I didn't surprise because I am one of that many people.", correct: "I'm not surprised because I am one of those people.", explanation: "surprised 是形容詞，表達「我不驚訝」要用 be 動詞否定：I'm not surprised，不能用 didn't surprise（那會變成「我沒有使人驚訝」）。", mastered: false },
  { id: "gr050", category: "other", rule: "avoid + 動名詞（不是 avoid to）", wrong: "If you want to make more money, you can't avoid to borrow money.", correct: "If you want to make more money, you can't avoid borrowing money.", explanation: "avoid 後面接動詞時固定用動名詞（-ing）：avoid borrowing。這和 gr046 的 start studying 是同一類規則（動詞 + V-ing）。", mastered: false },
  { id: "gr051", category: "other", rule: "produce（動詞）vs product（名詞）", wrong: "I need to product many report.", correct: "I need to produce many reports.", explanation: "product 是名詞（產品），動詞是 produce（製作、產出）。另外 report 可數，many 後面要加複數 reports。這堂課你說了好幾次 product 當動詞，要特別注意！", mastered: false },
  { id: "gr052", category: "other", rule: "spend a lot of time（time 不可數，不是 many times）", wrong: "I spend many times in Korea.", correct: "I spend a lot of time in Korea.", explanation: "表示「花很多時間」時 time 是不可數名詞，用 a lot of time 或 much time。times（複數）意思會變成「很多次」。", mastered: false },
  { id: "gr053", category: "other", rule: "achieve your goals（不是 attend）", wrong: "You need to save your money to attend that goal.", correct: "You need to save that money to achieve your goals.", explanation: "「達成目標」的固定搭配是 achieve a goal。attend 是「出席、參加」（attend a meeting）。", mastered: false },
  { id: "gr054", category: "other", rule: "buy/have + 名詞（membership），不是 pay the version", wrong: "I pay the annual version.", correct: "I bought an annual membership.", explanation: "訂閱制服務的說法是 buy/have a membership 或 subscription。描述已完成的購買用過去式 bought。", mastered: false },
];

// ============================================================
// 字根字首字尾庫（雅思高頻，內建45組；App查詢的新字根存在 data-user.json）
// 格式：{ id, type: "root"|"prefix"|"suffix", root, meaning, origin, examples: [{word, meaning}] }
// ============================================================
const WORD_ROOTS = [
  // === 字根（30組）===
  { id: "rt001", type: "root", root: "spect", meaning: "看", origin: "拉丁文 specere", examples: [{ word: "inspect", meaning: "檢查（往裡看）" }, { word: "perspective", meaning: "觀點（透過…看）" }, { word: "prospect", meaning: "前景（往前看）" }] },
  { id: "rt002", type: "root", root: "port", meaning: "攜帶、運送", origin: "拉丁文 portare", examples: [{ word: "transport", meaning: "運輸（帶過去）" }, { word: "export", meaning: "出口（帶出去）" }, { word: "portable", meaning: "可攜帶的" }] },
  { id: "rt003", type: "root", root: "dict", meaning: "說", origin: "拉丁文 dicere", examples: [{ word: "predict", meaning: "預測（先說）" }, { word: "contradict", meaning: "反駁（對著說）" }, { word: "dictate", meaning: "口述、命令" }] },
  { id: "rt004", type: "root", root: "ject", meaning: "投擲", origin: "拉丁文 jacere", examples: [{ word: "reject", meaning: "拒絕（丟回去）" }, { word: "inject", meaning: "注射（丟進去）" }, { word: "project", meaning: "專案、投射（往前丟）" }] },
  { id: "rt005", type: "root", root: "duct / duc", meaning: "引導", origin: "拉丁文 ducere", examples: [{ word: "produce", meaning: "生產（引導出來）" }, { word: "reduce", meaning: "減少（引導回去）" }, { word: "conduct", meaning: "執行、引導" }] },
  { id: "rt006", type: "root", root: "struct", meaning: "建造", origin: "拉丁文 struere", examples: [{ word: "structure", meaning: "結構" }, { word: "construct", meaning: "建造" }, { word: "infrastructure", meaning: "基礎建設" }] },
  { id: "rt007", type: "root", root: "form", meaning: "形狀", origin: "拉丁文 forma", examples: [{ word: "transform", meaning: "轉變（改變形狀）" }, { word: "conform", meaning: "遵從（形狀一致）" }, { word: "uniform", meaning: "制服、一致的" }] },
  { id: "rt008", type: "root", root: "vert / vers", meaning: "轉", origin: "拉丁文 vertere", examples: [{ word: "convert", meaning: "轉換" }, { word: "reverse", meaning: "反轉" }, { word: "diverse", meaning: "多樣的（轉向不同）" }] },
  { id: "rt009", type: "root", root: "mit / miss", meaning: "送出", origin: "拉丁文 mittere", examples: [{ word: "submit", meaning: "提交（送到下面）" }, { word: "emit", meaning: "排放（送出去，雅思環境題常見）" }, { word: "transmission", meaning: "傳輸" }] },
  { id: "rt010", type: "root", root: "cede / cess", meaning: "走、讓", origin: "拉丁文 cedere", examples: [{ word: "process", meaning: "過程（往前走）" }, { word: "access", meaning: "取得、進入" }, { word: "exceed", meaning: "超過（走出界）" }] },
  { id: "rt011", type: "root", root: "pos / pon", meaning: "放置", origin: "拉丁文 ponere", examples: [{ word: "impose", meaning: "強加（放上去）" }, { word: "dispose", meaning: "處置（分開放）" }, { word: "component", meaning: "零件（放在一起的）" }] },
  { id: "rt012", type: "root", root: "tract", meaning: "拉", origin: "拉丁文 trahere", examples: [{ word: "attract", meaning: "吸引（拉過來）" }, { word: "extract", meaning: "提取（拉出來）" }, { word: "contract", meaning: "合約、收縮" }] },
  { id: "rt013", type: "root", root: "scrib / script", meaning: "寫", origin: "拉丁文 scribere", examples: [{ word: "describe", meaning: "描述" }, { word: "prescription", meaning: "處方（預先寫好）" }, { word: "transcript", meaning: "逐字稿" }] },
  { id: "rt014", type: "root", root: "graph / gram", meaning: "寫、圖", origin: "希臘文 graphein", examples: [{ word: "graph", meaning: "圖表（雅思Task 1必備）" }, { word: "demographic", meaning: "人口統計的" }, { word: "diagram", meaning: "示意圖" }] },
  { id: "rt015", type: "root", root: "log / logy", meaning: "話語、學問", origin: "希臘文 logos", examples: [{ word: "technology", meaning: "科技" }, { word: "apology", meaning: "道歉" }, { word: "ecology", meaning: "生態學" }] },
  { id: "rt016", type: "root", root: "bio", meaning: "生命", origin: "希臘文 bios", examples: [{ word: "biology", meaning: "生物學" }, { word: "biodiversity", meaning: "生物多樣性（雅思環境題高頻）" }, { word: "antibiotic", meaning: "抗生素" }] },
  { id: "rt017", type: "root", root: "geo", meaning: "地球、土地", origin: "希臘文 gē", examples: [{ word: "geography", meaning: "地理" }, { word: "geopolitics", meaning: "地緣政治" }, { word: "geothermal", meaning: "地熱的" }] },
  { id: "rt018", type: "root", root: "chron", meaning: "時間", origin: "希臘文 chronos", examples: [{ word: "chronic", meaning: "慢性的" }, { word: "chronological", meaning: "按時間順序的" }, { word: "synchronize", meaning: "同步" }] },
  { id: "rt019", type: "root", root: "vis / vid", meaning: "看", origin: "拉丁文 videre", examples: [{ word: "visible", meaning: "可見的" }, { word: "evident", meaning: "明顯的" }, { word: "revise", meaning: "修訂（再看一次）" }] },
  { id: "rt020", type: "root", root: "aud", meaning: "聽", origin: "拉丁文 audire", examples: [{ word: "audience", meaning: "觀眾" }, { word: "audit", meaning: "審核" }, { word: "audible", meaning: "聽得見的" }] },
  { id: "rt021", type: "root", root: "cap / cept", meaning: "拿、抓", origin: "拉丁文 capere", examples: [{ word: "capture", meaning: "捕捉（carbon capture碳捕捉！）" }, { word: "concept", meaning: "概念" }, { word: "capacity", meaning: "容量、能力" }] },
  { id: "rt022", type: "root", root: "fer", meaning: "帶、運", origin: "拉丁文 ferre", examples: [{ word: "transfer", meaning: "轉移" }, { word: "prefer", meaning: "偏好（帶到前面）" }, { word: "fertile", meaning: "肥沃的" }] },
  { id: "rt023", type: "root", root: "gen", meaning: "產生、出生", origin: "拉丁文 genus", examples: [{ word: "generate", meaning: "產生（發電也用這個字）" }, { word: "gene", meaning: "基因" }, { word: "generation", meaning: "世代" }] },
  { id: "rt024", type: "root", root: "mort", meaning: "死", origin: "拉丁文 mors", examples: [{ word: "mortgage", meaning: "房貸（字面：死的抵押）" }, { word: "mortality", meaning: "死亡率" }, { word: "immortal", meaning: "不朽的" }] },
  { id: "rt025", type: "root", root: "viv / vit", meaning: "活", origin: "拉丁文 vivere", examples: [{ word: "survive", meaning: "存活" }, { word: "vivid", meaning: "生動的" }, { word: "vital", meaning: "至關重要的" }] },
  { id: "rt026", type: "root", root: "cred", meaning: "相信", origin: "拉丁文 credere", examples: [{ word: "credible", meaning: "可信的" }, { word: "credit", meaning: "信用" }, { word: "incredible", meaning: "難以置信的" }] },
  { id: "rt027", type: "root", root: "sens / sent", meaning: "感覺", origin: "拉丁文 sentire", examples: [{ word: "sensitive", meaning: "敏感的" }, { word: "consensus", meaning: "共識（一起感覺）" }, { word: "sentiment", meaning: "情緒、觀點" }] },
  { id: "rt028", type: "root", root: "rupt", meaning: "破裂", origin: "拉丁文 rumpere", examples: [{ word: "disrupt", meaning: "擾亂（供應鏈中斷常用）" }, { word: "erupt", meaning: "爆發" }, { word: "bankrupt", meaning: "破產的" }] },
  { id: "rt029", type: "root", root: "flu", meaning: "流動", origin: "拉丁文 fluere", examples: [{ word: "fluent", meaning: "流利的" }, { word: "influence", meaning: "影響（流進去）" }, { word: "fluctuate", meaning: "波動（雅思Task 1圖表高頻！）" }] },
  { id: "rt030", type: "root", root: "press", meaning: "壓", origin: "拉丁文 premere", examples: [{ word: "pressure", meaning: "壓力" }, { word: "impress", meaning: "使印象深刻（壓進心裡）" }, { word: "suppress", meaning: "壓制" }] },
  // === 字首（10組）===
  { id: "rt031", type: "prefix", root: "re-", meaning: "再、回", origin: "拉丁文", examples: [{ word: "renewable", meaning: "可再生的" }, { word: "recycle", meaning: "回收" }, { word: "restore", meaning: "恢復" }] },
  { id: "rt032", type: "prefix", root: "trans-", meaning: "跨越、轉換", origin: "拉丁文", examples: [{ word: "transition", meaning: "轉型（能源轉型energy transition）" }, { word: "translate", meaning: "翻譯" }, { word: "transnational", meaning: "跨國的" }] },
  { id: "rt033", type: "prefix", root: "sub-", meaning: "在下面", origin: "拉丁文", examples: [{ word: "subsidy", meaning: "補貼" }, { word: "substantial", meaning: "大量的（雅思寫作好字）" }, { word: "suburb", meaning: "郊區" }] },
  { id: "rt034", type: "prefix", root: "inter-", meaning: "之間", origin: "拉丁文", examples: [{ word: "international", meaning: "國際的" }, { word: "interact", meaning: "互動" }, { word: "intervene", meaning: "介入" }] },
  { id: "rt035", type: "prefix", root: "ex- / e-", meaning: "出、外", origin: "拉丁文", examples: [{ word: "export", meaning: "出口" }, { word: "expand", meaning: "擴張" }, { word: "extract", meaning: "提取" }] },
  { id: "rt036", type: "prefix", root: "con- / com-", meaning: "一起", origin: "拉丁文", examples: [{ word: "collaborate", meaning: "合作" }, { word: "consume", meaning: "消耗" }, { word: "compound", meaning: "化合物" }] },
  { id: "rt037", type: "prefix", root: "de-", meaning: "向下、去除", origin: "拉丁文", examples: [{ word: "decline", meaning: "下降（Task 1高頻）" }, { word: "decarbonize", meaning: "去碳化（你的工作領域！）" }, { word: "deforestation", meaning: "森林砍伐" }] },
  { id: "rt038", type: "prefix", root: "anti-", meaning: "對抗", origin: "希臘文", examples: [{ word: "antibiotic", meaning: "抗生素" }, { word: "antisocial", meaning: "反社會的" }, { word: "antibody", meaning: "抗體" }] },
  { id: "rt039", type: "prefix", root: "over- / under-", meaning: "過度／不足", origin: "古英文", examples: [{ word: "overtourism", meaning: "過度觀光" }, { word: "underestimate", meaning: "低估" }, { word: "overconsumption", meaning: "過度消費" }] },
  { id: "rt040", type: "prefix", root: "un- / in- / im-", meaning: "否定", origin: "古英文／拉丁文", examples: [{ word: "unemployment", meaning: "失業（雅思社會題高頻）" }, { word: "inevitable", meaning: "不可避免的" }, { word: "impossible", meaning: "不可能的" }] },
  // === 字尾（5組）===
  { id: "rt041", type: "suffix", root: "-tion / -sion", meaning: "名詞化（動作、狀態）", origin: "拉丁文", examples: [{ word: "pollution", meaning: "污染" }, { word: "emission", meaning: "排放" }, { word: "urbanization", meaning: "都市化（雅思高頻）" }] },
  { id: "rt042", type: "suffix", root: "-able / -ible", meaning: "可以…的", origin: "拉丁文", examples: [{ word: "sustainable", meaning: "永續的（雅思環境題必備）" }, { word: "affordable", meaning: "負擔得起的" }, { word: "renewable", meaning: "可再生的" }] },
  { id: "rt043", type: "suffix", root: "-ment", meaning: "名詞化（結果、手段）", origin: "拉丁文", examples: [{ word: "environment", meaning: "環境" }, { word: "investment", meaning: "投資" }, { word: "development", meaning: "發展" }] },
  { id: "rt044", type: "suffix", root: "-ive", meaning: "形容詞化（有…性質的）", origin: "拉丁文", examples: [{ word: "effective", meaning: "有效的" }, { word: "innovative", meaning: "創新的" }, { word: "competitive", meaning: "有競爭力的" }] },
  { id: "rt045", type: "suffix", root: "-ity", meaning: "名詞化（性質）", origin: "拉丁文", examples: [{ word: "sustainability", meaning: "永續性" }, { word: "productivity", meaning: "生產力" }, { word: "diversity", meaning: "多樣性" }] },
];

// ============================================================
// Cambly 課程記錄（完整 28 堂歷史）
// ============================================================
const SPEAKING_RECORDS = [
  { id: 1,  date: "2026/01/20", tutor: "Daniel / Jessie Mae / Mik", topic: "初次上課，自我介紹、Universal Studios" },
  { id: 2,  date: "2026/01/22", tutor: "Sabina / Sarah",             topic: "歐洲留學計劃、工作面試話題" },
  { id: 3,  date: "2026/01/27", tutor: "Denisse",                    topic: "夢境、台灣民間信仰、算命" },
  { id: 4,  date: "2026/01/29", tutor: "Sabina",                     topic: "世界局勢、台灣半導體、克羅埃西亞" },
  { id: 5,  date: "2026/02/08", tutor: "Zoe Campbell x2",            topic: "台灣地理、新竹、登山、電玩" },
  { id: 6,  date: "2026/02/15", tutor: "Lisa Marie / Charlene",      topic: "台灣食物、飲用水、健康話題" },
  { id: 7,  date: "2026/02/22", tutor: "Robin Lea / Palmaria / Vicki", topic: "LOL 電競、初認識課程" },
  { id: 8,  date: "2026/03/07", tutor: "Craig",                      topic: "台灣食物、飲用水、政治話題" },
  { id: 9,  date: "2026/03/22", tutor: "Kristina x3",                topic: "眼睫毛、殖民歷史、歐洲旅遊建議" },
  { id: 10, date: "2026/03/28", tutor: "Kay Sokolowski / TJ",        topic: "求職對談 + 過去式練習" },
  { id: 11, date: "2026/04/05", tutor: "Kat x2",                     topic: "日本旅遊、台灣美食、各國比較" },
  { id: 12, date: "2026/04/18", tutor: "Kay Sokolowski",             topic: "旅遊對談、交通方式" },
  { id: 13, date: "2026/04/19", tutor: "Anita / Nikita",             topic: "台灣食物、軟球、新竹競爭環境" },
  { id: 14, date: "2026/04/23", tutor: "Lyn Rose",                   topic: "韓劇推薦、音樂、等飛機" },
  { id: 15, date: "2026/04/26", tutor: "Robin Lea",                  topic: "首爾旅遊、LOL 粉絲活動" },
  { id: 16, date: "2026/05/03", tutor: "Juliet / Tiffany",           topic: "League of Legends + Nintendo Museum" },
  { id: 17, date: "2026/05/10", tutor: "Lisa Marie",                 topic: "台灣文化、節日、旅遊、家庭" },
  { id: 18, date: "2026/05/16", tutor: "Lisa Levine",                topic: "美容保養、Red Light Therapy" },
  { id: 19, date: "2026/05/16", tutor: "Lelo",                       topic: "感官描述、身體特徵詞彙、飲用水文章" },
  { id: 20, date: "2026/05/24", tutor: "Lelo",                       topic: "MBTI、飲食習慣、平行宇宙與人生哲學" },
  { id: 21, date: "2026/06/01", tutor: "TJ",                         topic: "《飛吧！熊鷹》紀錄片 + 台灣原住民文化" },
  { id: 22, date: "2026/06/01", tutor: "TJ",                         topic: "歐洲熱門旅遊國家 + 詞性複習" },
  { id: 23, date: "2026/06/07", tutor: "Uzma",                       topic: "化工產業介紹、碳捕捉技術、MOF 材料" },
  { id: 24, date: "2026/06/07", tutor: "Jen",                        topic: "3D 列印火箭（Terran 1）、複合材料與航太應用" },
  { id: 25, date: "2026/06/14", tutor: "Glynis Jaeschke",            topic: "工作介紹（產業分析師）、Glynis 的南非／德國／英國移民人生故事、天氣比較" },
  { id: 26, date: "2026/06/20", tutor: "Glynis Jaeschke",            topic: "德文問候語練習、家族成員介紹（父系／母系）、Glynis 的寄養家庭照顧工作" },
  { id: 27, date: "2026/06/21", tutor: "Lyn Rose",                   topic: "AI科技的利與弊、杜拜旅遊文化、赴美出差克服英語恐懼、個人性格（外向/內向）" },
  { id: 28, date: "2026/07/08", tutor: "TJ",                         topic: "用 Claude 打造數位衣櫥、Engoo 理財文章（存錢目標調查）、投資與理財觀念" }, // 日期為估計值，請 Christine 確認
];
