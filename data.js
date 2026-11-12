// Editorial data. English names/summaries are our translations, not official English titles.
// reviewedAt means a public web-source review, not an interview or a visit.
export const reviewedAt = '2026-11-12';
export const sources = {
  clubs: 'https://support.st.okayama-u.ac.jp/clubs/',
  joining: 'https://www.okayama-u.ac.jp/eng/campus_life/Events_and_Activities.html',
  campusBook: 'https://support.st.okayama-u.ac.jp/eng/h.html',
  foodGuide: 'https://okayama-kanko.net/sightseeing/news/9111/',
  foodCulture: 'https://www.okayama-kanko.jp/asset/inbound-support/manual-jitumu.pdf',
  facilities: 'https://www.okayama-u.ac.jp/tp/life/seikatu_d4.html',
  lcafe: 'https://www.ipec.okayama-u.ac.jp/lcafe/'
};
const official = id => `https://support.st.okayama-u.ac.jp/clubs/club/${id}`;
export const clubs = [
  {
    id: 'wizards', image: './assets/clubs/wizards.webp', imageAlt: { en: "AI-generated scene of a cheerleading team practising with yellow pom-poms.", ja: "黄色のポンポンを持って練習するチアチームのAI生成イメージ。" }, category: 'sports', icon: 'spark', tone: 'gold', beginner: true,
    name: { en: 'WIZARDS', ja: 'WIZARDS' },
    subtitle: { en: 'Cheerleading', ja: '応援団総部チアリーダー' },
    summary: { en: 'Build a performance together through cheerleading. The club’s public introduction welcomes beginners.', ja: '一人ひとりの力を合わせて演技をつくるチアリーディング。公式紹介では初心者も歓迎しています。' },
    detail: { en: 'WIZARDS practises cheerleading and takes part in cheering and performances. The official listing describes regular activities on Monday, Tuesday, Friday and Saturday. Confirm the current schedule before visiting.', ja: 'チアリーディングの練習や応援・演技に取り組む部活動です。公式掲載では月・火・金・土の週4回活動。見学前に最新の予定を確認してください。' },
    schedule: { en: 'Mon / Tue / Fri / Sat — confirm current times', ja: '月・火・金・土（時間は要確認）' },
    location: { en: 'Tsushima campus · confirm meeting point', ja: '津島キャンパス（集合場所は要確認）' },
    source: official(55), questions: { en: 'Ask how safety instructions are shared, which activities you can try and whether your study period fits the club.', ja: '安全の説明方法、体験できる練習、留学期間に合った参加方法を相談しましょう。' }
  },
  {
    id: 'photography', image: './assets/clubs/photography.webp', imageAlt: { en: "AI-generated scene of students sharing photographs on a tree-lined campus.", ja: "並木道で撮影した写真を見せあう学生たちのAI生成イメージ。" }, category: 'culture', icon: 'camera', tone: 'blue', beginner: true,
    name: { en: 'Photography Club', ja: '写真部' }, subtitle: { en: 'Find a different perspective', ja: '日常を、新しい視点で' },
    summary: { en: 'Share photographs, join photo outings and exhibit your work. The public introduction also welcomes students without a camera.', ja: '写真を持ち寄る例会や撮影会、展覧会を行っています。公式紹介では、カメラを持っていない方も歓迎しています。' },
    detail: { en: 'Members discuss their photographs in regular meetings and organise photo outings and exhibitions. The official listing gives Monday and Thursday meetings from 17:30 in Room 210 of the cultural club building.', ja: '例会で写真について意見を交わし、撮影会や展覧会を企画します。公式掲載では月・木17:30から、文化系クラブ棟210号室で活動しています。' },
    schedule: { en: 'Mon / Thu from 17:30 — confirm before visiting', ja: '月・木17:30〜（見学前に要確認）' }, location: { en: 'Cultural club building · Room 210', ja: '文化系クラブ棟210号室' },
    source: official(32), questions: { en: 'Ask about joining a photo outing and what equipment you need.', ja: '撮影会への参加方法や、必要な機材について聞いてみましょう。' }
  },
  {
    id: 'tea', image: './assets/clubs/tea.webp', imageAlt: { en: "AI-generated scene of students learning tea ceremony in a tatami room.", ja: "和室で茶道を学ぶ学生たちのAI生成イメージ。" }, category: 'culture', icon: 'tea', tone: 'sage', beginner: true,
    name: { en: 'Tea Ceremony Club', ja: '茶道部' }, subtitle: { en: 'A moment of shared hospitality', ja: 'お茶を通して、お互いを知る' },
    summary: { en: 'Learn Urasenke tea ceremony through practice and tea gatherings. Many members begin at university.', ja: '裏千家の茶道を学び、お稽古やお茶会に取り組みます。大学から茶道を始めた部員もいます。' },
    detail: { en: 'A teacher leads Wednesday practice; members learn together on Friday and Saturday. The public introduction welcomes students to observe. Ask about the sweets and other ingredients if you have dietary needs.', ja: '水曜日は先生の指導、金・土曜日は部員同士で教えあってお稽古をしています。公式紹介では見学も案内しています。食事の希望がある方は、お菓子などの原材料も相談しましょう。' },
    schedule: { en: 'Wed / Fri / Sat — see official listing for times', ja: '水・金・土（時間は公式ページへ）' }, location: { en: 'New BOX building · 1st floor', ja: '新BOX棟1階' },
    source: official(30), questions: { en: 'Ask about observing, language support and ingredients in tea sweets.', ja: '見学方法、言語のサポート、お菓子の原材料を相談しましょう。' }
  },
  {
    id: 'cycling', image: './assets/clubs/cycling.webp', imageAlt: { en: "AI-generated scene of students with bicycles and helmets on a riverside path.", ja: "川沿いで自転車とともに休憩する学生たちのAI生成イメージ。" }, category: 'outdoors', icon: 'bike', tone: 'sage', beginner: true,
    name: { en: 'Cycling Club', ja: 'サイクリング部' }, subtitle: { en: 'Explore beyond the campus', ja: 'キャンパスの、その先へ' },
    summary: { en: 'Ride to scenic places and explore together. The club says many members started cycling at university.', ja: '景色のよい場所へ、仲間と自転車で出かける活動です。公式紹介によると、大学から始めた部員も多くいます。' },
    detail: { en: 'The club describes local rides, camping and longer trips during university holidays. Its published regular days are Wednesday and Saturday, subject to change.', ja: '近郊でのサイクリングやキャンプ、長期休暇の旅行などに取り組んでいます。公式掲載の通常活動日は水・土ですが、変更があります。' },
    schedule: { en: 'Wed / Sat — subject to change', ja: '水・土（変更あり）' }, location: { en: 'Off campus · southern Okayama and beyond', ja: '学外・岡山県南部など' },
    source: official(64), questions: { en: 'Ask about bicycle equipment, ride distance, costs and traffic-safety guidance.', ja: '自転車などの装備、走行距離、費用、安全面の説明を確認しましょう。' }
  },
  {
    id: 'wind', image: './assets/clubs/wind.webp', imageAlt: { en: "AI-generated scene of university students rehearsing wind instruments.", ja: "管楽器の合奏練習に取り組む学生たちのAI生成イメージ。" }, category: 'music', icon: 'music', tone: 'blue', beginner: false,
    name: { en: 'Wind Orchestra', ja: '応援団総部吹奏楽団' }, subtitle: { en: 'Make music, together', ja: '音を重ねて、ひとつの演奏へ' },
    summary: { en: 'A student-run wind ensemble with concerts, festivals and university cheering activities throughout the year.', ja: '演奏から運営まで学生主体で活動する吹奏楽団。演奏会や学祭、応援活動に取り組んでいます。' },
    detail: { en: 'The public introduction describes summer and regular concerts, competitions and joint cheering with WIZARDS and the cheering squad. Ask the ensemble about your instrument and experience.', ja: '公式紹介ではサマーコンサートや定期演奏会、コンクールのほか、WIZARDS・應援團との応援活動も案内しています。担当楽器や経験について相談しましょう。' },
    schedule: { en: 'Contact the club for current practice days', ja: '現在の練習日は団体へ確認' }, location: { en: 'Confirm venue with the ensemble', ja: '活動場所は団体へ確認' },
    source: official(56), questions: { en: 'Ask about instrument availability, rehearsals and the concert schedule.', ja: '楽器の用意、練習日程、演奏会への参加について確認しましょう。' }
  },
  {
    id: 'kyudo', image: './assets/clubs/kyudo.webp', imageAlt: { en: "AI-generated scene of a student practising in a Japanese archery dojo.", ja: "弓道場で稽古に取り組む学生のAI生成イメージ。" }, category: 'sports', icon: 'target', tone: 'gold', beginner: true,
    name: { en: 'Kyudo Club', ja: '弓道部' }, subtitle: { en: 'Practise focus and technique', ja: '集中と技術を、少しずつ' },
    summary: { en: 'Practise Japanese archery with members who learn from one another. The official introduction welcomes beginners and experienced archers.', ja: '部員同士で教えあいながら日本の弓道に取り組みます。公式紹介では初心者から経験者まで参加しています。' },
    detail: { en: 'The club describes group practice on Wednesday and Saturday, alongside individual practice. Ask about observing first, equipment, safety instructions and your available study period.', ja: '公式掲載では水・土の合同練習に加え、個人練習にも取り組んでいます。まずは見学、用具、安全の説明、在籍期間に合った活動について相談しましょう。' },
    schedule: { en: 'Wed / Sat group practice — confirm current times', ja: '合同練習は水・土（時間は要確認）' }, location: { en: 'Tsushima campus · confirm dojo access', ja: '津島キャンパス（道場への行き方は要確認）' },
    source: official(58), questions: { en: 'Ask about equipment, safe participation and joining for a short stay.', ja: '必要な用具、安全面、短期間での参加について相談しましょう。' }
  },
  {
    id: 'ecolo', image: './assets/clubs/ecolo.webp', imageAlt: { en: "AI-generated scene of students taking part in a campus clean-up.", ja: "キャンパスで清掃活動をする学生たちのAI生成イメージ。" }, category: 'community', icon: 'leaf', tone: 'sage', beginner: true,
    name: { en: 'ECOLO', ja: '環境部ECOLO' }, subtitle: { en: 'Environment & community', ja: '環境と地域をつなぐ' },
    summary: { en: 'Think about the environment through local clean-ups, community events and reuse activities.', ja: '清掃活動や地域のイベント、リユースの取り組みを通じて、身近な環境について考えます。' },
    detail: { en: 'The public introduction describes Tuesday meetings, campus and station-area clean-ups, and a reuse market. Participation in individual events is described as optional.', ja: '公式紹介では火曜日の部会、学内や岡山駅周辺の清掃、リサイクル市などを案内しています。個別のイベントへの参加は任意とされています。' },
    schedule: { en: 'Tue meetings · event dates vary', ja: '火曜日に部会・イベントは随時' }, location: { en: 'On campus and in the community', ja: '学内・地域の活動場所' },
    source: official(21), questions: { en: 'Ask which upcoming activities fit your language level and timetable.', ja: '参加しやすい活動や、授業・言語面に合う参加方法を聞いてみましょう。' }
  },
  {
    id: 'badminton', image: './assets/clubs/badminton.webp', imageAlt: { en: "AI-generated scene of students practising badminton in a gym.", ja: "体育館でバドミントンを練習する学生たちのAI生成イメージ。" }, category: 'sports', icon: 'racket', tone: 'blue', beginner: false,
    name: { en: 'Badminton Club', ja: 'バドミントン部' }, subtitle: { en: 'Explore a racket sport', ja: 'ラケットスポーツに出会う' },
    summary: { en: 'Listed in the university’s official club directory. Ask the club about its current activities and participation conditions.', ja: '大学の公認クラブ一覧に掲載されています。現在の活動内容や参加条件は、団体へ確認してください。' },
    detail: { en: 'The official directory confirms this club’s listing but does not provide detailed practice information on the page reviewed. Current schedule, experience requirements and visitor arrangements need direct confirmation.', ja: '確認した公認クラブページには、詳しい練習情報が掲載されていませんでした。活動日、経験の条件、見学の受け入れ方法は直接確認が必要です。' },
    schedule: { en: 'Not confirmed · ask the club', ja: '未確認・団体へお問い合わせ' }, location: { en: 'Not confirmed · ask the club', ja: '未確認・団体へお問い合わせ' },
    source: official(81), questions: { en: 'Ask about practice days, experience requirements and the observation process.', ja: '練習日、経験の条件、見学の手順を確認しましょう。' }
  }
];

export const restaurants = [
  {
    id: 'shah-arena', image: './assets/dining/shah-arena.webp', imageAlt: { en: "AI-generated example of a catering meal with rice, curry, vegetables and flatbread; not an actual menu.", ja: "ライスやカレー、野菜、パンを組み合わせたケータリングのAI生成イメージ。実際の商品ではありません。" }, area: 'tsushima', diets: ['halal'], type: 'takeaway', icon: 'bag',
    name: { en: 'Shah Arena', ja: 'Shah Arena（シャーアリーナ）' },
    cuisine: { en: 'Halal groceries & catering', ja: 'ハラール食材・ケータリング' },
    description: { en: 'The local tourism guide lists halal-certified grocery products and catering. An option to ask about when planning a shared meal on campus.', ja: '地域の観光案内で、ハラール認証商品の販売とケータリングが紹介されています。学内で一緒に食べる際の相談先の候補です。' },
    note: { en: 'This is a shop/catering service, not a confirmed dine-in restaurant. Confirm order deadlines, delivery, ingredients and certification for the specific product or meal.', ja: '店内飲食を確認したレストランではなく、販売・ケータリングの候補です。注文期限、配達、料理ごとの原材料や認証を確認してください。' },
    address: { en: '4-19-16 Tsushima Higashi, Kita-ku, Okayama', ja: '岡山市北区津島東4-19-16' },
    evidence: { en: 'Halal products / catering listed by local tourism guide', ja: '地域観光案内にハラール商品・ケータリングの記載' },
    source: 'https://okayamahealthtourism.com/food/okayama-city/shah-arena/', sourceLabel: { en: 'Local tourism listing', ja: '地域観光案内' }, phone: '086-250-3292'
  },
  {
    id: 'aobaba', image: './assets/dining/aobaba.webp', imageAlt: { en: "AI-generated example of Vietnamese pho with herbs and lime; not an actual restaurant dish.", ja: "ハーブやライムを添えたベトナムのフォーのAI生成イメージ。実際の提供料理ではありません。" }, area: 'tsushima', diets: [], type: 'takeaway', icon: 'bowl',
    name: { en: 'AoBaba · Okayama University', ja: 'アオババ 岡山大学店' },
    cuisine: { en: 'Vietnamese street food', ja: 'ベトナムの屋台料理' },
    description: { en: 'The operator lists a campus food stall near L-café. A place to explore Vietnamese food culture together; stall dates are irregular.', ja: '運営会社がL-café付近の学内屋台として案内しています。ベトナムの食文化に触れる候補ですが、出店日は不定期です。' },
    note: { en: 'Vegan and halal options are not confirmed. Broth, fish sauce, meat and cooking methods need checking. Confirm the next stall date before going.', ja: 'ビーガン・ハラール対応は未確認です。だし、魚醤、肉類、調理方法を確認してください。次の出店日も事前に確認しましょう。' },
    address: { en: '1-1-1 Tsushima Naka, Kita-ku, Okayama · campus stall', ja: '岡山市北区津島中1-1-1・学内屋台' },
    evidence: { en: 'Official operator page · dietary options unconfirmed', ja: '運営会社の店舗ページ・食事対応は未確認' },
    source: 'https://www.aobaba.jp/okayama_u', sourceLabel: { en: 'Official shop information', ja: '公式店舗情報' }, phone: '090-6149-9072'
  },
  {
    id: 'muscat', image: './assets/dining/muscat.webp', imageAlt: { en: "AI-generated example of a cafeteria meal tray; not an actual menu.", ja: "ごはんや小鉢を載せた食堂のトレーのAI生成イメージ。実際の提供メニューではありません。" }, area: 'tsushima', diets: [], type: 'dinein', icon: 'table',
    name: { en: 'Muscat Cafeteria', ja: 'マスカットカフェテリア' },
    cuisine: { en: 'Campus cafeteria', ja: '学内の生協食堂' },
    description: { en: 'A university co-op cafeteria on Tsushima campus. Check the daily menu and ingredient information with staff before choosing a meal.', ja: '津島キャンパスにある生協食堂です。その日のメニューや原材料について、料理を選ぶ前にスタッフへ確認しましょう。' },
    note: { en: 'No standing vegan or halal meal service was confirmed in the sources reviewed. Do not assume a vegetable-looking dish has no animal ingredients or broth.', ja: '確認した情報では、常設のビーガン・ハラール料理の提供を確認できませんでした。野菜中心に見える料理でも、だしなどの原材料を確認してください。' },
    address: { en: 'Muscat Union, Tsushima campus, Okayama University', ja: '岡山大学津島キャンパス・マスカットユニオン' },
    evidence: { en: 'University facilities information · dietary options unconfirmed', ja: '大学の施設案内・食事対応は未確認' },
    source: sources.facilities, extraSource: 'https://www.univcoop.or.jp/cooperation/cooperation_525.html', sourceLabel: { en: 'University facilities information', ja: '大学の施設案内' }, phone: null
  },
  {
    id: 'peach', image: './assets/dining/peach.webp', imageAlt: { en: "AI-generated example of a plant-based grain and vegetable bowl; not an actual restaurant dish.", ja: "野菜や穀物を使ったプラントベース料理のAI生成イメージ。実際の提供料理ではありません。" }, area: 'city', diets: ['vegan'], type: 'dinein', icon: 'leaf',
    name: { en: 'Plant-Based Cafe PEACH', ja: 'Plant-Based Cafe PEACH' },
    cuisine: { en: '100% plant-based · reservation only', ja: '植物性100%の料理・完全予約制' },
    description: { en: 'The official site states that its food uses no meat, fish, eggs, dairy or honey. Service is irregular and by advance reservation only.', ja: '公式サイトで、肉・魚・卵・乳製品・はちみつを使わない料理と案内されています。不定期営業・完全予約制です。' },
    note: { en: 'Book before visiting and check current availability. Vegan food does not by itself establish halal status or allergen suitability; ask about your individual needs.', ja: '来店前の予約と営業確認が必要です。ビーガン料理でも、ハラールやアレルギーへの適合を意味するわけではありません。個別の希望を相談してください。' },
    address: { en: 'K&K Omotecho Building 1F, 3-20-7 Omotecho, Kita-ku, Okayama', ja: '岡山市北区表町3-20-7 K&K表町ビル1F' },
    evidence: { en: 'Plant-based ingredients stated on the official site', ja: '公式サイトに植物性100%の原材料方針を記載' },
    source: 'https://cafe-peach.com/', sourceLabel: { en: 'Official website / reservations', ja: '公式サイト・予約案内' }, phone: null
  },
  {
    id: 'salt', image: './assets/dining/salt.webp', imageAlt: { en: "AI-generated example of a Japanese seasonal vegetable meal; not an actual restaurant dish.", ja: "玄米や季節の野菜を使った和食のAI生成イメージ。実際の提供料理ではありません。" }, area: 'city', diets: ['vegan'], type: 'dinein', icon: 'bowl',
    name: { en: 'SALT · Ishikawa Shokudo', ja: 'SALT－石川食堂' },
    cuisine: { en: 'Seasonal Japanese meals · ask about vegan options', ja: '季節の和食・ビーガン料理は要相談' },
    description: { en: 'The local tourism guide lists vegan options. The restaurant’s own menu also includes fish, so discuss a suitable meal in advance.', ja: '地域の観光案内にはビーガン料理の記載があります。店舗公式メニューには魚料理もあるため、希望する料理を事前に相談してください。' },
    note: { en: 'Ask specifically about broth, egg, dairy, seasonings and shared preparation. Availability and group seating need advance confirmation; this is not an all-vegan restaurant.', ja: 'だし、卵、乳製品、調味料、調理器具の共用を具体的に確認しましょう。提供可否とグループの席は要相談です。全品ビーガンのお店ではありません。' },
    address: { en: '2-12-14 Marunouchi, Kita-ku, Okayama', ja: '岡山市北区丸の内2-12-14' },
    evidence: { en: 'Vegan option listed by local tourism guide · confirm in advance', ja: '地域観光案内にビーガン料理の記載・事前確認が必要' },
    source: 'https://salt-ishikawa.com/', extraSource: 'https://okayamahealthtourism.com/food/okayama-city/salt-ishikawa-shokudo/', sourceLabel: { en: 'Official restaurant website', ja: '店舗公式サイト' }, phone: '086-238-9910'
  }
];
