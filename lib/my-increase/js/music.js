const musicUrl = 'https://music.163.com/song/media/outer/url?id=';
const isPostPage = location.href.includes('html');
const SESSION_MUSIC_KEY = 'musics'

const trailsInTheSkyIndex = [
  {
    name: 'Shine of Eidos ~空の軌跡~',
    artist: 'Falcom Sound Team jdk',
    url: musicUrl + '41632781.mp3',
    cover: 'https://p1.music.126.net/m3yyqtddDZfC_qzx27aF1A==/3310629513111899.jpg',
  },
  {
    name: '告白',
    artist: 'Falcom Sound Team jdk',
    url: musicUrl + '731409.mp3',
    cover: 'https://p1.music.126.net/kn6ugISTonvqJh3LHLaPtQ==/599233837187278.jpg',
  },
  {
    name: '商業都市ボース',
    artist: 'Falcom Sound Team jdk',
    url: musicUrl + '32544980.mp3',
    cover: 'https://p1.music.126.net/NuWd2zsFAfV2W2BriUee2g==/7998947094134491.jpg',
  },
  {
    name: '陽だまりにて和む猫',
    artist: 'Falcom Sound Team jdk',
    url: musicUrl + '32544976.mp3',
    cover: 'https://p2.music.126.net/NuWd2zsFAfV2W2BriUee2g==/7998947094134491.jpg',
  },
  {
    name: '星の在り処 Guitar Ver',
    artist: 'Falcom Sound Team jdk',
    url: musicUrl + '730600.mp3',
    cover: 'https://p2.music.126.net/-D5kuypDn312GzKW2Q2Ydg==/566248488352545.jpg',
  },
  {
    name: '地方都市ロレント',
    artist: 'Falcom Sound Team jdk',
    url: musicUrl + '32544970.mp3',
    cover: 'https://p2.music.126.net/NuWd2zsFAfV2W2BriUee2g==/7998947094134491.jpg',
  },
  {
    name: '旅立ちの小径',
    artist: 'Falcom Sound Team jdk',
    url: musicUrl + '32544969.mp3',
    cover: 'https://p1.music.126.net/NuWd2zsFAfV2W2BriUee2g==/7998947094134491.jpg',
  },
  {
    name: 'ル＝ロックルへようこそ',
    artist: 'Falcom Sound Team jdk',
    url: musicUrl + '27599021.mp3',
    cover: 'https://p2.music.126.net/twY0WPlP1vlXVYqxPKKxTA==/5737251673811669.jpg',
  },
  {
    name: '风を共に舞う気持ち',
    artist: 'Falcom Sound Team jdk',
    url: musicUrl + '731419.mp3',
    cover: 'https://p2.music.126.net/kn6ugISTonvqJh3LHLaPtQ==/599233837187278.jpg',
  },
  {
    name: '王都グランセル',
    artist: 'Falcom Sound Team jdk',
    url: musicUrl + '731355.mp3',
    cover: 'https://p1.music.126.net/kn6ugISTonvqJh3LHLaPtQ==/599233837187278.jpg',
  },
  {
    name: '夢の続き',
    artist: 'Falcom Sound Team jdk',
    url: musicUrl + '27599031.mp3',
    cover: 'https://p2.music.126.net/twY0WPlP1vlXVYqxPKKxTA==/5737251673811669.jpg',
  },
  {
    name: '鉱山町マインツ',
    artist: 'Falcom Sound Team jdk',
    url: musicUrl + '729638.mp3',
    cover: 'https://p1.music.126.net/hGpCV5mULMdv1GZotEzMzA==/623423092996393.jpg',
  },
];

const trailsInTheSkyRest = [
  {
    name: '消え行く星',
    artist: 'Falcom Sound Team jdk',
    url: musicUrl + '32544987.mp3',
    cover: 'https://p1.music.126.net/NuWd2zsFAfV2W2BriUee2g==/7998947094134491.jpg',
  },
  {
    name: '惨劇の真相',
    artist: 'Falcom Sound Team jdk',
    url: musicUrl + '27599055.mp3',
    cover: 'https://p2.music.126.net/twY0WPlP1vlXVYqxPKKxTA==/5737251673811669.jpg',
  },
  {
    name: '碧き雫 Aoki Shizuku',
    artist: 'Falcom Sound Team jdk',
    url: musicUrl + '729348.mp3',
    cover: 'https://p1.music.126.net/yWth-RAxizRGzGmV9MClPg==/706985976706570.jpg',
  },
  {
    name: '胸の中に',
    artist: 'Falcom Sound Team jdk',
    url: musicUrl + '32544978.mp3',
    cover: 'https://p2.music.126.net/NuWd2zsFAfV2W2BriUee2g==/7998947094134491.jpg',
  },
  {
    name: '王城',
    artist: 'Falcom Sound Team jdk',
    url: musicUrl + '32574010.mp3',
    cover: 'https://p1.music.126.net/NuWd2zsFAfV2W2BriUee2g==/7998947094134491.jpg',
  },
  {
    name: '工房都市ツァイス',
    artist: 'Falcom Sound Team jdk',
    url: musicUrl + '731333.mp3',
    cover: 'https://p2.music.126.net/kn6ugISTonvqJh3LHLaPtQ==/599233837187278.jpg',
  },
  {
    name: '踏み出す勇気',
    artist: 'Falcom Sound Team jdk',
    url: musicUrl + '729820.mp3',
    cover: 'https://p2.music.126.net/hGpCV5mULMdv1GZotEzMzA==/623423092996393.jpg',
  },
  {
    name: 'LOST HARMONY AMONG PEOPLE',
    artist: 'Falcom Sound Team jdk',
    url: musicUrl + '729957.mp3',
    cover: 'https://p1.music.126.net/vAVkm3vd_TLiBukkJBsm7w==/624522604624169.jpg',
  },
  {
    name: '银の意志',
    artist: 'Falcom Sound Team jdk',
    url: musicUrl + '731379.mp3',
    cover: 'https://p1.music.126.net/kn6ugISTonvqJh3LHLaPtQ==/599233837187278.jpg',
  },
  {
    name: '空を见上げて',
    artist: 'Falcom Sound Team jdk',
    url: musicUrl + '730635.mp3',
    cover: 'https://p2.music.126.net/-D5kuypDn312GzKW2Q2Ydg==/566248488352545.jpg',
  },
  {
    name: 'I swear...',
    artist: 'Falcom Sound Team jdk',
    url: musicUrl + '730633.mp3',
    cover: 'https://p1.music.126.net/-D5kuypDn312GzKW2Q2Ydg==/566248488352545.jpg',
  },
  {
    name: 'Seize The Truth!',
    artist: 'Falcom Sound Team jdk',
    url: musicUrl + '28987394.mp3',
    cover: 'https://p1.music.126.net/5JEih3uafHBw7PlqeutzdA==/8989607068764579.jpg',
  },
  {
    name: '零の軌跡',
    artist: 'Falcom Sound Team jdk',
    url: musicUrl + '729835.mp3',
    cover: 'https://p1.music.126.net/hGpCV5mULMdv1GZotEzMzA==/623423092996393.jpg',
  },
  {
    name: '海港都市ルーアン',
    artist: 'Falcom Sound Team jdk',
    url: musicUrl + '731291.mp3',
    cover: 'https://p2.music.126.net/kn6ugISTonvqJh3LHLaPtQ==/599233837187278.jpg',
  },
  {
    name: '絆の在り処',
    artist: 'Falcom Sound Team jdk',
    url: musicUrl + '27599060.mp3',
    cover: 'https://p1.music.126.net/twY0WPlP1vlXVYqxPKKxTA==/5737251673811669.jpg',
  },
];

const japaneseMusics = [
  {
    name: 'オトノナルホウヘ→',
    artist: 'Goose house',
    url: musicUrl + '28258450.mp3',
    cover: 'https://p2.music.126.net/gCdqXAxSZY_lMBRVjwHMtg==/5829610650645258.jpg',
  },
  {
    name: '光るなら',
    artist: 'Goose house',
    url: musicUrl + '29732992.mp3',
    cover: 'https://p1.music.126.net/TM6SM2-ppcd1F66YyjR-Eg==/2537672838610591.jpg',
  },
  {
    name: 'この指とまれ',
    artist: 'Goose house',
    url: musicUrl + '26380612.mp3',
    cover: 'https://p1.music.126.net/aOyhYVrMNax9xL8T8RM2xA==/2294680767227904.jpg',
  },
  {
    name: '恋はヒラひらり',
    artist: 'Goose house',
    url: musicUrl + '28258452.mp3',
    cover: 'https://p2.music.126.net/gCdqXAxSZY_lMBRVjwHMtg==/5829610650645258.jpg',
  },
  {
    name: 'インドア系ならトラックメイカー',
    artist: 'Yunomi / nicamoq',
    url: musicUrl + '424262056.mp3',
    cover: 'https://p1.music.126.net/F8QUlvMbIa5DG0Gu6wop_g==/3416182637666433.jpg',
  },
  {
    name: 'You & Me',
    artist: '紗希 / Rie fu',
    url: musicUrl + '26136870.mp3',
    cover: 'https://p2.music.126.net/dXZcS_NHBLC3wAaqKyEnFA==/18719185464701003.jpg',
  },
  {
    name: '僕らの手には何もないけど',
    artist: 'RAM WIRE',
    url: musicUrl + '32317208.mp3',
    cover: 'https://p1.music.126.net/V1o9XDhAnI1ayWW5elJwFQ==/109951163338252165.jpg',
  },
  {
    name: 'ツギハギスタッカート',
    artist: 'nameless',
    url: musicUrl + '38689090.mp3',
    cover: 'https://p2.music.126.net/Q7o5JZusviFWxfIZxPfc5g==/109951163338335039.jpg',
  },
  {
    name: '妄想感傷代償連盟',
    artist: 'ShakingHigh',
    url: musicUrl + '492190182.mp3',
    cover: 'https://p2.music.126.net/Lqy8E3EdhrsUW1wls-u6RQ==/109951162980401984.jpg',
  },
  {
    name: 'アスノヨゾラ哨戒班',
    artist: 'ShakingHigh',
    url: musicUrl + '487588762.mp3',
    cover: 'https://p2.music.126.net/ShMHjfrVDcC_pByePRgibA==/109951162961273628.jpg',
  },
];

const chinesePopMusics = [
  {
    name: '如果...阳光',
    artist: '冯曦妤',
    url: musicUrl + '229012.mp3',
    cover: 'https://p1.music.126.net/Iua_elJj1HGxlQWVfqK7Og==/17868163463382835.jpg',
  },
  {
    name: '慢慢',
    artist: '张学友',
    url: musicUrl + '189315.mp3',
    cover: 'https://p1.music.126.net/KkEfoix3ZrxIvJlEcLziow==/84662395339598.jpg',
  },
  {
    name: '遥远的她',
    artist: '张学友',
    url: musicUrl + '191232.mp3',
    cover: 'https://p1.music.126.net/rxyLRMZdqzHdxyP5cl8qQA==/43980465112095.jpg',
  },
  {
    name: '遥远的你',
    artist: '花僮',
    url: musicUrl + '1329399401.mp3',
    cover: 'https://p2.music.126.net/VyRSGM-jGKELVeDfACDIwA==/109951163693292184.jpg',
  },
  {
    name: '最初的我',
    artist: '幼稚园杀手',
    url: musicUrl + '511182346.mp3',
    cover: 'https://p2.music.126.net/sj0nUfkHR_T4figkP11EJQ==/109951163037601331.jpg',
  },
  {
    name: '喜欢两个人',
    artist: '彭佳慧',
    url: musicUrl + '280765.mp3',
    cover: 'https://p2.music.126.net/GpsgjHB_9XgtrBVXt8XX4w==/93458488373078.jpg',
  },
  {
    name: '一生爱你一个',
    artist: '郑伊健',
    url: musicUrl + '192587.mp3',
    cover: 'https://p2.music.126.net/aXpiBT_8eh7X9Vlb2rHiaQ==/65970697683576.jpg',
  },
  {
    name: '只会因你唱',
    artist: '郑伊健',
    url: musicUrl + '193353.mp3',
    cover: 'https://p2.music.126.net/GczQxLBL7RIiY2_mb36mLQ==/54975581405879.jpg',
  },
  {
    name: '画纸上的戒指',
    artist: '傅颖 / 小肥',
    url: musicUrl + '229292.mp3',
    cover: 'https://p2.music.126.net/VC-v_o2GilI50yBUXH-dzw==/25288767440000.jpg',
  },
];

const chineseAncientMusics = [
  {
    name: '棠梨煎雪',
    artist: '银临',
    url: musicUrl + '28188427.mp3',
    cover: 'https://p1.music.126.net/LBnYDAUED2mD1veBvBnC8g==/5859297464524710.jpg',
  },
  {
    name: '江湖写照',
    artist: '六音',
    url: musicUrl + '439142093.mp3',
    cover: 'https://p2.music.126.net/FBwGGenU-lF646huIzGa7A==/109951162805300098.jpg',
  },
  {
    name: '杏花弦外雨',
    artist: 'CRITTY / 司夏',
    url: musicUrl + '32957012.mp3',
    cover: 'https://p2.music.126.net/iwZ6w7D5C8WXgnjcohHb0Q==/7799935488436943.jpg',
  },
  {
    name: '牵丝戏',
    artist: '银临 / Aki阿杰',
    url: musicUrl + '30352891.mp3',
    cover: 'https://p1.music.126.net/Nd86SOcyCxU5Qu7jdZn_MQ==/7725168696876736.jpg',
  },
  {
    name: '锦鲤抄',
    artist: '银临 / 云の泣',
    url: musicUrl + '28138493.mp3',
    cover: 'https://p2.music.126.net/Lytc68amE03j7AbmoLQPUA==/19063332602423891.jpg',
  },
  {
    name: '旧南阁子',
    artist: '引月兮',
    url: musicUrl + '34152625.mp3',
    cover: 'https://p2.music.126.net/dbNkAQmHi2TUzgkE7Zox1A==/3318326092881882.jpg',
  },
  {
    name: '沧海映雪歌',
    artist: '引月兮',
    url: musicUrl + '31877684.mp3',
    cover: 'https://p1.music.126.net/aMZS6jTuJg3J_eaykzUP7w==/2931298000136969.jpg',
  },
  {
    name: '江山雪',
    artist: '小爱的妈',
    url: musicUrl + '29747554.mp3',
    cover: 'https://p2.music.126.net/H38CQgfRajZzfU3Ha98T8w==/6621259023592775.jpg',
  },
  {
    name: '眉间雪',
    artist: '晴愔',
    url: musicUrl + '29572089.mp3',
    cover: 'https://p1.music.126.net/fhxLLN4eqbX1bW9eGaTmSg==/2538772349388939.jpg',
  },
  {
    name: '恰雪来故',
    artist: '晴愔',
    url: musicUrl + '30065000.mp3',
    cover: 'https://p1.music.126.net/Kog7y33jJpr3R2foHGuXhQ==/2539871862571110.jpg',
  },
  {
    name: '愿以百年挽朝夕',
    artist: '许多葵',
    url: musicUrl + '35566987.mp3',
    cover: 'https://p1.music.126.net/ztGNor75kNp5Y8lHayJBBg==/17638365532870780.jpg',
  },
  {
    name: '我与自己唱相守',
    artist: '云の泣',
    url: musicUrl + '28427631.mp3',
    cover: 'https://p1.music.126.net/D22IKBn-eUq-EebVSbAuJA==/5934064255276851.jpg',
  },
  {
    name: '一身诗意千寻瀑',
    artist: '不才',
    url: musicUrl + '28798308.mp3',
    cover: 'https://p2.music.126.net/5vLpAQplaeMwEuhDO0HXww==/5852700394904058.jpg',
  },
  {
    name: '倾尽天下',
    artist: '河图',
    url: musicUrl + '27571867.mp3',
    cover: 'https://p2.music.126.net/nlocSgc4D7T-h6S3f6IybQ==/6003333487842277.jpg',
  },
  {
    name: '隐',
    artist: '河图',
    url: musicUrl + '28452037.mp3',
    cover: 'https://p2.music.126.net/RB2IpsG1ajiQbF_HfR35IQ==/5953855464601395.jpg',
  },
  {
    name: '无垢',
    artist: 'NL不分',
    url: musicUrl + '31191505.mp3',
    cover: 'https://p2.music.126.net/ly2FJHh5-lYMdC3NZxvavQ==/7714173580661848.jpg',
  },
  {
    name: '河山陪酒',
    artist: 'Padalecki小明',
    url: musicUrl + '32957751.mp3',
    cover: 'https://p2.music.126.net/Ony8josUxaUWYTszx8M6TQ==/7928578348870292.jpg',
  },
  {
    name: '嘱酒问世歌',
    artist: '叶憬炎',
    url: musicUrl + '423104409.mp3',
    cover: 'https://p1.music.126.net/0p5an1N6aKaT_hLEUKZsdw==/109951162951278841.jpg',
  },
  {
    name: '逍遥',
    artist: '俺酱',
    url: musicUrl + '35447612.mp3',
    cover: 'https://p2.music.126.net/CnofgDyfEAg0RJhyH52fpg==/3430476279524821.jpg',
  },
  {
    name: '笑醉狂',
    artist: '温崇正',
    url: musicUrl + '33314012.mp3',
    cover: 'https://p2.music.126.net/xphtETT9CVE-IjRzGx20YA==/7969260279094350.jpg',
  },
  {
    name: '天下无狗',
    artist: '小义学长',
    url: musicUrl + '432430770.mp3',
    cover: 'https://p1.music.126.net/IduHDI7262H1uBqA2M77-w==/17706535254105616.jpg',
  },
  {
    name: '当醉',
    artist: '沐清晏',
    url: musicUrl + '34218179.mp3',
    cover: 'https://p1.music.126.net/dbNkAQmHi2TUzgkE7Zox1A==/3318326092881882.jpg',
  },
  {
    name: '醉狂草',
    artist: '贰婶',
    url: musicUrl + '35448338.mp3',
    cover: 'https://p2.music.126.net/LKnGU66RzU1bE_8R_Sq2-A==/3339216814771789.jpg',
  },
  {
    name: '侠说',
    artist: '兰芽yaya / 司空先生',
    url: musicUrl + '449117577.mp3',
    cover: 'https://p2.music.126.net/btZSFb0icX1d2SfLPr5Ijg==/109951163106738128.jpg',
  },
  {
    name: '寸心笑傲',
    artist: '绯村柯北',
    url: musicUrl + '28592868.mp3',
    cover: 'https://p1.music.126.net/L9CfhB8IUN06kfpIY1C5gQ==/6061607604380494.jpg',
  },
  {
    name: '天命风流',
    artist: '绯村柯北',
    url: musicUrl + '27506267.mp3',
    cover: 'https://p2.music.126.net/YboZSeacBwA903I4KGUwJA==/3099523278774775.jpg',
  },
  {
    name: '江湖意',
    artist: '群星',
    url: musicUrl + '28285725.mp3',
    cover: 'https://p2.music.126.net/RDQy2q05vy6SArA9W2LZ-Q==/3295236350128133.jpg',
  },
];

const randomMusicList = (function() {
  let randomMusic = [
    japaneseMusics,
    chinesePopMusics,
    chineseAncientMusics,
  ][Math.floor(Math.random() * 3)];

  return [
    ...randomMusic,
    ...trailsInTheSkyIndex,
    ...trailsInTheSkyRest,
  ];
})();

const orderMusicList = (function() {
  let randomMusic = [
    japaneseMusics,
    chinesePopMusics,
    chineseAncientMusics,
  ][getOrderMusicList()];

  return [
    ...randomMusic,
    ...trailsInTheSkyIndex,
    ...trailsInTheSkyRest,
  ];
})();

const allMusics = [
  ...japaneseMusics,
  ...chinesePopMusics,
  ...chineseAncientMusics,
  ...trailsInTheSkyIndex,
  ...trailsInTheSkyRest,
];

const ap = new APlayer({
  container: document.getElementById('aplayer'),
  fixed: true,
  order: isPostPage ? 'list' : 'random',
  autoplay: isPostPage ? false : true,
  audio: isPostPage ? orderMusicList : trailsInTheSkyIndex,
});

function getOrderMusicList() {
  let sessionValue = sessionStorage.getItem(SESSION_MUSIC_KEY)
  if(!sessionValue || sessionValue == '2') {
    sessionStorage.setItem(SESSION_MUSIC_KEY, 0)
    return sessionStorage.getItem(SESSION_MUSIC_KEY)
  }
  sessionValue = parseInt(sessionValue) + 1
  sessionStorage.setItem(SESSION_MUSIC_KEY, sessionValue)
  return sessionValue
}
