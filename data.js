// ============================================================
// data.js — Language Review App 資料檔
// 最後更新：2026-07-09（雅思導向整理：移除15個冷門字→data-removed.js；德文加詞性；新增字根庫）
// 更新方式：直接修改此檔案對應區塊，主程式 app.html 不需動
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
  { id: "en077", word: "went (go)", meaning: "去（go 的過去式）", partOfSpeech: "v.", source: "cambly", example: "I went to Japan last year." },
  { id: "en078", word: "came (come)", meaning: "來（come 的過去式）", partOfSpeech: "v.", source: "cambly", example: "She came to my office this morning." },
  { id: "en079", word: "saw (see)", meaning: "看見（see 的過去式）", partOfSpeech: "v.", source: "cambly", example: "I saw a beautiful temple yesterday." },
  { id: "en080", word: "took (take)", meaning: "搭乘（take 的過去式）", partOfSpeech: "v.", source: "cambly", example: "We took the MRT to Taipei." },
  { id: "en081", word: "bought (buy)", meaning: "買（buy 的過去式）", partOfSpeech: "v.", source: "cambly", example: "She bought a lot of souvenirs in Korea." },
  { id: "en082", word: "told (tell)", meaning: "告訴（tell 的過去式）", partOfSpeech: "v.", source: "cambly", example: "She told me the news." },
  { id: "en083", word: "made (make)", meaning: "製作（make 的過去式）", partOfSpeech: "v.", source: "cambly", example: "She made a presentation last week." },
  { id: "en084", word: "thought (think)", meaning: "認為（think 的過去式）", partOfSpeech: "v.", source: "cambly", example: "I thought it was a good idea." },
  { id: "en085", word: "found (find)", meaning: "發現（find 的過去式）", partOfSpeech: "v.", source: "cambly", example: "We found a nice café near the temple." },
  { id: "en086", word: "chose (choose)", meaning: "選擇（choose 的過去式）", partOfSpeech: "v.", source: "cambly", example: "I chose to go to Universal Studios." },
  { id: "en087", word: "woke up (wake up)", meaning: "醒來（wake up 的過去式）", partOfSpeech: "v.", source: "cambly", example: "I just woke up when you called." },
  { id: "en088", word: "brought (bring)", meaning: "帶來（bring 的過去式）", partOfSpeech: "v.", source: "cambly", example: "I brought my camera on the trip." },
  { id: "en089", word: "rode (ride)", meaning: "乘坐（ride 的過去式）", partOfSpeech: "v.", source: "cambly", example: "I rode many rides at Universal Studios." },
  { id: "en090", word: "had (have)", meaning: "有／吃（have 的過去式）", partOfSpeech: "v.", source: "cambly", example: "I had lunch with my brother yesterday." },

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

  // === 不規則動詞三態練習清單（2026-07-22 自己整理，搬自 english.html 內建種子）===
  // 【注意】單字庫裡 en077-en090 已經有一批「過去式(原形)」格式的不規則動詞條目
  // （例如 en081 "bought (buy)"），跟這批新資料格式不同、但教的是同一件事，
  // 兩邊並存不衝突，只是未來想整理成一致格式時可以參考這裡合併。
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
  { id: "de090", article: "", pos: "動詞", word: "aufstehen", meaning: "起床", category: "verb", example: "Ich stehe um 7 Uhr auf.", note: "⚠️家教核對：可分動詞，造句時前綴 auf- 要移到句尾（Ich stehe...auf）。這裡的變化只填動詞本體，實際用時前綴分離。", conjugation: { "ich": "stehe", "du": "stehst", "er/sie/es": "steht", "wir": "stehen", "ihr": "steht", "sie/Sie": "stehen" } },
  { id: "de091", article: "", pos: "動詞", word: "einkaufen", meaning: "購物", category: "verb", example: "Ich gehe einkaufen.", note: "⚠️家教核對：可分動詞，造句時前綴 ein- 要移到句尾（Ich kaufe...ein）。這裡的變化只填動詞本體，實際用時前綴分離。", conjugation: { "ich": "kaufe", "du": "kaufst", "er/sie/es": "kauft", "wir": "kaufen", "ihr": "kauft", "sie/Sie": "kaufen" } },
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

// ============================================================
// 日記記錄（新增區）
// ============================================================
const DIARY_ENTRIES = [];

// ============================================================
// Engoo 閱讀記錄（新增區）
// ============================================================
const READING_RECORDS = [];

// ============================================================
// 複習排程（由 App 自動管理，請勿手動修改）
// ============================================================
const REVIEW_SCHEDULE = [];

// ============================================================
// App 設定
// ============================================================
const APP_CONFIG = {
  version: "1.0.0",
  lastUpdated: "2026-07-09",
  defaultLang: "en",
};
