const navLinks = [
  {
    id: "cocktails",
    title: "カクテル",
  },
  {
    id: "about",
    title: "私たちについて",
  },
  {
    id: "work",
    title: "アートの世界",
  },
  {
    id: "contact",
    title: "お問い合わせ",
  },
];

const cocktailLists = [
  {
    name: "シャペル・ヒル・シラーズ",
    country: "オーストラリア",
    detail: "バトル",
    price: "¥1,500",
  },
  {
    name: "カテナ・マルベック",
    country: "オーストラリア",
    detail: "バトル",
    price: "¥7,300",
  },
  {
    name: "ライノ・ペールエール",
    country: "カナダ",
    detail: "750ml",
    price: "¥3,000",
  },
  {
    name: "アイリッシュ・ギネス",
    country: "アイルランド",
    detail: "600ml",
    price: "¥4,300",
  },
];

const mockTailLists = [
  {
    name: "トロピカル・ブルーム",
    country: "アメリカ",
    detail: "バトル",
    price: "¥1,500",
  },
  {
    name: "パッションフルーツ・ミント",
    country: "アメリカ",
    detail: "バトル",
    price: "¥7,300",
  },
  {
    name: "シトラス・グロウ",
    country: "カナダ",
    detail: "750ml",
    price: "¥3,000",
  },
  {
    name: "ラベンダー・フィズ",
    country: "アイルランド",
    detail: "600ml",
    price: "¥4,300",
  },
];

const profileLists = [
  {
    imgPath: "/images/profile1.png",
  },
  {
    imgPath: "/images/profile2.png",
  },
  {
    imgPath: "/images/profile3.png",
  },
  {
    imgPath: "/images/profile4.png",
  },
];

const featureLists = [
  "絶妙なバランスのブレンド",
  "完璧に装飾された一杯",
  "いつでもキンキンに冷たい",
  "熟練のシェイクとステア",
];

const goodLists = [
  "厳選された素材",
  "シグネチャー技法",
  "バーテンダーの技術が光る",
  "フレッシュな風味が広がる",
];

const storeInfo = {
  heading: "店舗情報",
  address: "〒90210 カリフォルニア州ロサンゼルス、Raq通り456番404号",
  contact: {
    phone: "(555) 987-6543",
    email: "hello@cocktail.com",
  },
};

const openingHours = [
  { day: "月〜木", time: "11:00〜24:00" },
  { day: "金", time: "11:00〜26:00" },
  { day: "土", time: "9:00〜26:00" },
  { day: "日", time: "9:00〜25:00" },
];

const socials = [
  {
    name: "インスタグラム",
    icon: "/images/insta.png",
    url: "#",
  },
  {
    name: "X（旧Twitter）",
    icon: "/images/x.png",
    url: "#",
  },
  {
    name: "フェイスブック",
    icon: "/images/fb.png",
    url: "#",
  },
];

const sliderLists = [
  {
    id: 1,
    name: "クラシック・モヒート",
    image: "/images/drink1.png",
    title: "シンプルな材料、力強い味わい",
    description:
      "テキーラ、ライムジュース、オレンジリキュールで作られるマルガリータは、簡単でありながら個性豊かな味わい。夏の夜に最適な、塩の縁取りで仕上げて。",
  },
  {
    id: 2,
    name: "ラズベリー・モヒート",
    image: "/images/drink2.png",
    title: "爽やかな定番、決して外れない",
    description:
      "マルガリータは、酸味のライム、滑らかなテキーラ、ほんのり甘さが絶妙に調和した定番カクテル。シェイク、フローズン、オン・ザ・ロック…いつでも爽やか。",
  },
  {
    id: 3,
    name: "バイオレット・ブリーズ",
    image: "/images/drink3.png",
    title: "シンプルな材料、力強い味わい",
    description:
      "テキーラ、ライムジュース、オレンジリキュールで作られるマルガリータは、簡単でありながら個性豊かな味わい。夏の夜に最適な、塩の縁取りで仕上げて。",
  },
  {
    id: 4,
    name: "キュラソー・モヒート",
    image: "/images/drink4.png",
    title: "丁寧に作り、愛情込めて注ぐ",
    description:
      "お祝いの時も、静かにくつろぐ時も、新鮮な材料とこだわりをもって、一杯一杯を心を込めて提供します。",
  },
];

export {
  navLinks,
  cocktailLists,
  mockTailLists,
  profileLists,
  featureLists,
  goodLists,
  openingHours,
  storeInfo,
  socials,
  sliderLists,
};
