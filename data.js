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
    id: 'wizards', image: 'https://support.st.okayama-u.ac.jp/storage/files/55/69ce45afb2f91.jpg', imageAlt: { en: 'Official photo of the WIZARDS cheerleading team.', ja: 'WIZARDSの公式写真。' }, category: 'sports', icon: 'spark', tone: 'gold', beginner: true,
    name: { en: 'WIZARDS', ja: 'WIZARDS' },
    subtitle: { en: 'Cheerleading', ja: '応援団総部チアリーダー' },
    summary: { en: 'Okayama University cheerleading team WIZARDS activities 4 times a week (Mon/Tue/Fri/Sat). Beginners are very welcome! With the motto "Energy, Courage, Smiles WIZARDS", we practice daily to create performances that bring smiles and encouragement to many people.', ja: '岡山大学チアリーダーWIZARDSは週４回（月・火・金・土）活動しています。初心者でも大歓迎♪「元気・勇気・笑顔WIZARDS」をモットーにたくさんの人を笑顔にし、背中を押せるような演技ができるよう日々練習に励んでいます！' },
    detail: { en: 'The club practices cheerleading and takes part in cheering and performances four times a week (Monday, Tuesday, Friday and Saturday). Beginners are explicitly welcome. The motto is "Energy, Courage, Smiles WIZARDS".', ja: '週4回（月・火・金・土）の活動でチアリーディングの練習や応援・演技に取り組んでいます。初心者でも大歓迎で、「元気・勇気・笑顔WIZARDS」をモットーに、たくさんの人を笑顔にし、背中を押せるような演技ができるよう日々練習に励んでいます。' },
    schedule: { en: 'Mon / Tue / Fri / Sat — confirm current times', ja: '月・火・金・土（時間は要確認）' },
    location: { en: 'Tsushima campus · confirm meeting point', ja: '津島キャンパス（集合場所は要確認）' },
    source: official(55), questions: { en: 'Ask how safety instructions are shared, which activities you can try and whether your study period fits the club.', ja: '安全の説明方法、体験できる練習、留学期間に合った参加方法を相談しましょう。' }
  },
  {
    id: 'photography', image: 'https://support.st.okayama-u.ac.jp/storage/files/32/6618dff73f300.JPG', imageAlt: { en: 'Official photo of the Photography Club.', ja: '写真部の公式写真。' }, category: 'culture', icon: 'camera', tone: 'blue', beginner: true,
    name: { en: 'Photography Club', ja: '写真部' }, subtitle: { en: 'Find a different perspective', ja: '日常を、新しい視点で' },
    summary: { en: "Wouldn't you like to start a hobby you can enjoy for a lifetime? We hold regular meetings, group photo outings, exhibitions and retreats. Even if you don't own a camera, if you're interested in photography, you're very welcome!", ja: '一生楽しめる趣味、始めてみませんか？主に例会、集撮、展覧会、合宿等の活動を行っています。カメラを持っていない人でも、「写真を始めたい」「写真に興味がある」なら大歓迎です！' },
    detail: { en: 'We are the Okayama University Tsushima Photography Club. We mainly hold regular meetings, group photo outings, exhibitions and retreats. At weekly meetings, members bring their own photographs, exchange opinions and choose the best shot of the day. Group photo outings are held once a month. Four exhibitions are held yearly (spring, summer, festival and winter). Retreats take place twice a year. Even without a camera, anyone interested in starting photography is welcome. Please come visit the club room!', ja: '岡山大学津島写真部です！主に、例会、集撮、展覧会、合宿等の活動を行っています。週に2回の例会では各自が撮影した写真を持ち寄って意見を出し合い、その日のベスト写真を決めています。集撮と呼ばれる撮影会を月に1回行っています。展覧会は春展・夏展・学祭展、冬展の4回を1年間で行います。合宿は春休みと夏休みの2回行われます。カメラを持っていない人でも、「写真を始めたい」「写真に興味がある」という人なら大歓迎です！ぜひ1度部室へ来てみてください！' },
    schedule: { en: 'Mon / Thu from 17:30 — confirm before visiting', ja: '月・木17:30〜（見学前に要確認）' }, location: { en: 'Cultural club building · Room 210', ja: '文化系クラブ棟210号室' },
    source: official(32), questions: { en: 'Ask about joining a photo outing and what equipment you need.', ja: '撮影会への参加方法や、必要な機材について聞いてみましょう。' }
  },
  {
    id: 'tea', image: 'https://support.st.okayama-u.ac.jp/storage/files/30/tsushima-sadou/6616595319d09.jpg', imageAlt: { en: 'Official photo of the Tea Ceremony Club.', ja: '茶道部の公式写真。' }, category: 'culture', icon: 'tea', tone: 'sage', beginner: true,
    name: { en: 'Tea Ceremony Club', ja: '茶道部' }, subtitle: { en: 'A moment of shared hospitality', ja: 'お茶を通して、お互いを知る' },
    summary: { en: 'New students, upperclassmen and even graduate students are all welcome!! We look forward to your joining if you are interested in the tea ceremony.', ja: '新入生、二回生以上、大学院の方も大歓迎!! 茶道に興味のあるみなさまの入部をお待ちしております。' },
    detail: { en: 'New students, upperclassmen and graduate students are all welcome. We look forward to welcoming anyone interested in the Japanese tea ceremony.', ja: '新入生、二回生以上、大学院の方も大歓迎!! 茶道に興味のあるみなさまの入部をお待ちしております。' },
    schedule: { en: 'Wed / Fri / Sat — see official listing for times', ja: '水・金・土（時間は公式ページへ）' }, location: { en: 'New BOX building · 1st floor', ja: '新BOX棟1階' },
    source: official(30), questions: { en: 'Ask about observing, language support and ingredients in tea sweets.', ja: '見学方法、言語のサポート、お菓子の原材料を相談しましょう。' }
  },
  {
    id: 'cycling', image: 'https://support.st.okayama-u.ac.jp/storage/files/64/6a4500a8e410a.jpg', imageAlt: { en: 'Official photo of the Cycling Club.', ja: 'サイクリング部の公式写真。' }, category: 'outdoors', icon: 'bike', tone: 'sage', beginner: true,
    name: { en: 'Cycling Club', ja: 'サイクリング部' }, subtitle: { en: 'Explore beyond the campus', ja: 'キャンパスの、その先へ' },
    summary: { en: "Hello! We're the Okayama University Cycling Club! Most of our members are beginners who started cycling at university, and we enjoy our activities at a relaxed pace every day. During long holidays like spring and summer break, we travel all over Japan by bicycle! Why not experience the refreshing thrill and sense of accomplishment that only cycling can offer? We're recruiting people who'll enjoy cycling with us!!!", ja: 'こんにちは！岡山大学サイクリング部です！私たちサイクリング部は部員の多くが大学からサイクリングを始めた初心者で、日々のんびりと活動をしています。また、春休みや夏休みの長期休暇には、自転車で日本全国を旅しています！景色のきれいな山や海でのサイクリングやキャンプは忘れられない記憶になること間違いなし！サイクリングでしか味わえない爽快感や達成感を経験してみませんか？？一緒にサイクリングを楽しんでくれる人募集してます！！！' },
    detail: { en: "Most members started cycling at university as beginners. The club meets on Wednesdays and Saturdays, and during long holidays members travel across Japan by bicycle. If you are interested, please feel free to contact us via the official X (formerly Twitter) or Instagram!", ja: '部員の多くが大学からサイクリングを始めた初心者で、日々のんびりと活動しています。春休みや夏休みの長期休暇には自転車で日本全国を旅しています。活動日時は毎週水曜日・土曜日で、変更があります。興味がある人はサイクリング部公式X(旧Twitter)またはInstagramまで気軽に連絡ください！' },
    schedule: { en: 'Wed / Sat — subject to change', ja: '水・土（変更あり）' }, location: { en: 'Off campus · southern Okayama and beyond', ja: '学外・岡山県南部など' },
    source: official(64), questions: { en: 'Ask about bicycle equipment, ride distance, costs and traffic-safety guidance.', ja: '自転車などの装備、走行距離、費用、安全面の説明を確認しましょう。' }
  },
  {
    id: 'wind', image: 'https://support.st.okayama-u.ac.jp/storage/files/56/6618749c2d6d1.jpg', imageAlt: { en: 'Official photo of the Wind Orchestra.', ja: '応援団総部吹奏楽団の公式写真。' }, category: 'music', icon: 'music', tone: 'blue', beginner: false,
    name: { en: 'Wind Orchestra', ja: '応援団総部吹奏楽団' }, subtitle: { en: 'Make music, together', ja: '音を重ねて、ひとつの演奏へ' },
    summary: { en: 'Founded in 1992. Performance, conducting and management are all run by students. With the University Wind Orchestra Festival, competitions, summer concerts, campus festivals and regular concerts, there are many performance opportunities throughout the year. As part of the Cheering Squad General Department, we also actively take part in cheering activities.', ja: '1992年創部。演奏も指揮も運営も、全て学生主体で活動しています。大学吹奏楽フェスティバル、コンクール、サマーコンサート、学祭、定期演奏会など、年間を通してたくさんの演奏機会があります。應援團、チアリーダーWIZARDS、吹奏楽団の3団体で構成される応援団総部の一員として、応援活動にも積極的に取り組んでいます。' },
    detail: { en: 'Founded in 1992, the ensemble is entirely student-run for performance, conducting and management. It takes part in the University Wind Orchestra Festival, competitions, summer concerts, campus festivals and regular concerts, and also joins cheering activities as part of the Cheering Squad General Department together with the cheering squad and WIZARDS.', ja: '1992年創部。演奏も指揮も運営も、全て学生主体で活動しています。大学吹奏楽フェスティバル、コンクール、サマーコンサート、学祭、定期演奏会など、年間を通してたくさんの演奏機会があります。應援團、チアリーダーWIZARDS、吹奏楽団の3団体で構成される応援団総部の一員として、応援活動にも積極的に取り組んでいます。' },
    schedule: { en: 'Contact the club for current practice days', ja: '現在の練習日は団体へ確認' }, location: { en: 'Confirm venue with the ensemble', ja: '活動場所は団体へ確認' },
    source: official(56), questions: { en: 'Ask about instrument availability, rehearsals and the concert schedule.', ja: '楽器の用意、練習日程、演奏会への参加について確認しましょう。' }
  },
  {
    id: 'kyudo', image: 'https://support.st.okayama-u.ac.jp/storage/files/58/665436f9cc527.jpeg', imageAlt: { en: 'Official photo of the Kyudo Club.', ja: '弓道部の公式写真。' }, category: 'sports', icon: 'target', tone: 'gold', beginner: true,
    name: { en: 'Kyudo Club', ja: '弓道部' }, subtitle: { en: 'Practise focus and technique', ja: '集中と技術を、少しずつ' },
    summary: { en: 'From beginners to experienced archers, we all enjoy kyudo together and encourage one another to improve. Upperclassmen teach the basics carefully, so even those with no experience can go on to excel in tournaments. We also actively take part in competitions and practice matches, and sometimes interact with other universities. The club’s greatest goal is to win the Chugoku-Shikoku Championship.', ja: '初心者から経験者まで、みんなで弓道を楽しみ、お互いに高めあっています。先輩が基礎から丁寧に指導をするため、未経験者も大会等で活躍しています。大会、練習試合にも積極的に参加しており、他大学と関わることもあります。部の最大目標は中四国大会優勝です。' },
    detail: { en: 'From beginners to experienced archers, members enjoy kyudo together and raise one another’s level. Because upperclassmen give careful instruction from the basics, even those without experience can excel in competitions. The club actively enters tournaments and practice matches, sometimes with other universities, and its top goal is to win the Chugoku-Shikoku Championship.', ja: '初心者から経験者まで、みんなで弓道を楽しみ、お互いに高めあっています。先輩が基礎から丁寧に指導をするため、未経験者も大会等で活躍しています。大会、練習試合にも積極的に参加しており、他大学と関わることもあります。部の最大目標は中四国大会優勝です。' },
    schedule: { en: 'Wed / Sat group practice — confirm current times', ja: '合同練習は水・土（時間は要確認）' }, location: { en: 'Tsushima campus · confirm dojo access', ja: '津島キャンパス（道場への行き方は要確認）' },
    source: official(58), questions: { en: 'Ask about equipment, safe participation and joining for a short stay.', ja: '必要な用具、安全面、短期間での参加について相談しましょう。' }
  },
  {
    id: 'ecolo', image: 'https://support.st.okayama-u.ac.jp/storage/files/21/661a6ac289e93.jpg', imageAlt: { en: 'Official photo of the ECOLO environment club.', ja: '環境部ECOLOの公式写真。' }, category: 'community', icon: 'leaf', tone: 'sage', beginner: true,
    name: { en: 'ECOLO', ja: '環境部ECOLO' }, subtitle: { en: 'Environment & community', ja: '環境と地域をつなぐ' },
    summary: { en: 'We carry out a wide range of activities that help you feel closer to “the environment.” We think about the environment and take part in various related activities. Our everyday activities include occasional clean-ups around Okayama University and the Okayama station area, and participation in events run by environmental organisations and public community centres.', ja: '「“環境”に親しみを持てる様々な活動を行っています。」私たちは環境について考え、環境に関わる様々な活動を行っています。普段の活動としては、不定期に行っている岡山大学内・岡山駅周辺でのゴミ拾い活動、環境についての取り組みを行う団体や公民館などが行うイベントへの参加があります！' },
    detail: { en: 'We carry out diverse activities that make the environment approachable. Regular activities include occasional clean-ups around campus and the Okayama station area, and taking part in events hosted by environmental groups and public community centres.', ja: '「“環境”に親しみを持てる様々な活動を行っています。」私たちは環境について考え、環境に関わる様々な活動を行っています。普段の活動としては、不定期に行っている岡山大学内・岡山駅周辺でのゴミ拾い活動、環境についての取り組みを行う団体や公民館などが行うイベントへの参加があります！' },
    schedule: { en: 'Tue meetings · event dates vary', ja: '火曜日に部会・イベントは随時' }, location: { en: 'On campus and in the community', ja: '学内・地域の活動場所' },
    source: official(21), questions: { en: 'Ask which upcoming activities fit your language level and timetable.', ja: '参加しやすい活動や、授業・言語面に合う参加方法を聞いてみましょう。' }
  },
  {
    id: 'badminton', image: null, imageAlt: null, category: 'sports', icon: 'racket', tone: 'blue', beginner: false,
    name: { en: 'Badminton Club', ja: 'バドミントン部' }, subtitle: { en: 'Explore a racket sport', ja: 'ラケットスポーツに出会う' },
    summary: { en: "Listed in the university's official club directory. The official page currently provides no introduction text or photo, so please ask the club about its current activities and participation conditions.", ja: '大学の公認クラブ一覧に掲載されています。公式ページには現在、紹介文や写真が掲載されていないため、現在の活動内容や参加条件は、団体へ確認してください。' },
    detail: { en: "The official club directory confirms this club's listing, but the page reviewed has no introduction text and no photo. The current schedule, experience requirements and visitor arrangements need direct confirmation with the club.", ja: '公認クラブ一覧に掲載されていますが、確認した公式ページには紹介文や写真の掲載はありません。活動日、経験の条件、見学の受け入れ方法は直接確認が必要です。' },
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
