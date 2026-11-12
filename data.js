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
    id: 'aobaba', image: null, imageAlt: null, area: 'tsushima', diets: [], type: 'takeaway', icon: 'bowl',
    name: { en: 'AoBaba · Okayama University', ja: 'アオババ 岡山大学店' },
    cuisine: { en: 'Vietnamese street food', ja: 'ベトナムの屋台料理' },
    description: { en: 'A Vietnamese food stall that opened in front of Okayama University Tsushima campus in summer 2018. Enjoy pho, bun bo Hue, bun cha and more at the stall for just 500 yen. The spicy Vietnamese chicken rice grilled on the hot plate right in front is also hugely popular! Hearty Vietnamese set meals are also available to take away or eat on the spot. Open irregularly, but generally on Mondays and Thursdays (except university holidays) from around 11:00 to 14:00, in the plaza between Seven-Eleven and L-café.', ja: '岡山大学の前でベトナム屋台！本場の味を屋台で味わってください！岡山大学津島キャンパスに2018年夏、ベトナム屋台がOPEN！フォーやブンボーフエ、ブンチャーなど屋台で低価格500円で楽しめます。目の前の鉄板で焼きスパイシーな香りが漂うベトナムチキンライスも大人気！ボリューム満点のベトナム弁当もいろいろおかずが替わり、テイクアウトやその場で食べてもOK！不定期ですが、大学の休み期間以外は、月木曜日に営業しています。11:00〜14:00頃まで、セブンイレブンさんとL-caféさんの間の広場でのんびりと営業しています。' },
    note: { en: 'Vegan and halal options are not confirmed. Broth, fish sauce, meat and cooking methods need checking. Confirm the next stall date before going.', ja: 'ビーガン・ハラール対応は未確認です。だし、魚醤、肉類、調理方法を確認してください。次の出店日も事前に確認しましょう。' },
    address: { en: '1-1-1 Tsushima Naka, Kita-ku, Okayama · campus stall', ja: '岡山県岡山市北区津島中1丁目1番1号' },
    evidence: { en: 'Official operator page · dietary options unconfirmed', ja: '運営会社の店舗ページ・食事対応は未確認' },
    source: 'https://www.aobaba.jp/okayama_u', sourceLabel: { en: 'Official shop information', ja: '公式店舗情報' }, phone: '090-6149-9072'
  },
  {
    id: 'milenga', image: null, imageAlt: null, area: 'city', diets: ['halal'], type: 'dinein', icon: 'bowl',
    name: { en: 'Milenga', ja: 'ミレンガ' },
    cuisine: { en: 'Halal Indian home-style cuisine', ja: 'ハラール・インド家庭料理' },
    description: { en: "'Milenga' means 'Let's meet' in Hindi. This is the only restaurant in Okayama certified by the Halal Certificate Institute in India. Authentic Indian home-style food is made by international staff representing seven countries. All dishes are handmade with fresh vegetables, meats, and authentic spices. Both vegetarian and non-vegetarian meals are available at reasonable prices. A prayer room is also available. Recommended dish: Daily Thali + Chai tea.", ja: '「ミレンガ」はヒンディ语で「出会いましょう」を意味します。インドのハラール認証機構（Halal Certificate Institute India）の認証を受ける岡山で唯一のレストランです。7か国の国際スタッフが本場のインド家庭料理を手作りしています。新鮮な野菜・肉・本格スパイスで、ビーガン・非ビーガン料理ともお手頃価格で提供しています。礼拝室も完備。おすすめ：デイリータリー+チャイティー' },
    note: { en: 'Operating hours: Mon-Sat 11:30-20:20, Sun/holidays 11:30-17:20. Please confirm current operating status before visiting. Seating for large and small groups as well as individuals is available.', ja: '営業時間：月〜土 11:30〜20:20、日・祝 11:30〜17:20。訪問前に最新の営業状況を確認してください。大人数から個人まで席が利用できます。' },
    address: { en: 'Oka Bldg. 1F, 1-3-3 Nodaya-cho, Kita-ku, Okayama City', ja: '岡山市北区野田町1-3-3 オカビル1F' },
    evidence: { en: 'Halal certification listed by local tourism guide', ja: '地域観光案内にハラール認証の記載' },
    source: 'https://okayamahealthtourism.com/food/okayama-city/milenga/', sourceLabel: { en: 'Local tourism listing', ja: '地域観光案内' }, phone: '086-206-2289'
  },
  {
    id: 'restoran-halal', image: null, imageAlt: null, area: 'city', diets: ['halal'], type: 'dinein', icon: 'bowl',
    name: { en: 'Restoran Halal', ja: 'レストランハラール' },
    cuisine: { en: 'Halal restaurant', ja: 'ハラール料理' },
    description: { en: 'A halal restaurant in Okayama. Please contact the restaurant directly for current menu, hours and reservation information.', ja: '岡山にあるハラールレストランです。現在のメニュー・営業時間・予約については、直接店舗へお問い合わせください。' },
    note: { en: 'Dietary details and group seating need confirmation. Please contact the restaurant before visiting.', ja: '食事対応の詳細やグループの席は要確認です。訪問前に店舗へお問い合わせください。' },
    address: { en: 'Kita-ku, Okayama City (please confirm with the restaurant)', ja: '岡山市北区（店舗へ要確認）' },
    evidence: { en: 'Listed as a halal dining option', ja: 'ハラール Dining の候補として掲載' },
    source: 'https://maps.app.goo.gl/exk8Ld43sY9u7RjY8', sourceLabel: { en: 'Google Maps', ja: 'Googleマップ' }, phone: null
  },
  {
    id: 'rakuda-kitchen', image: null, imageAlt: null, area: 'city', diets: [], type: 'dinein', icon: 'bowl',
    name: { en: 'Rakuda no Kitchen', ja: 'ラクダのキッチン' },
    cuisine: { en: 'Restaurant', ja: 'レストラン' },
    description: { en: 'A restaurant in Okayama. Please contact the restaurant directly for current menu, hours and reservation information.', ja: '岡山にあるレストランです。現在のメニュー・営業時間・予約については、直接店舗へお問い合わせください。' },
    note: { en: 'Dietary details and group seating need confirmation. Please contact the restaurant before visiting.', ja: '食事対応の詳細やグループの席は要確認です。訪問前に店舗へお問い合わせください。' },
    address: { en: 'Okayama City (please confirm with the restaurant)', ja: '岡山市（店舗へ要確認）' },
    evidence: { en: 'Listed as a dining option', ja: '食事の候補として掲載' },
    source: 'https://maps.app.goo.gl/HRSKioG3Grnr5zVDA', sourceLabel: { en: 'Google Maps', ja: 'Googleマップ' }, phone: null
  }
];
