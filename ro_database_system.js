// === 引擎防呆預設值區 ===
const FALLBACK_RARITY = {
  common: { name: '普通', color: 'text-gray-300', bg: 'bg-gray-500/20', multi: 1 },
  uncommon: { name: '優秀', color: 'text-green-400', bg: 'bg-green-500/20', multi: 1.5 },
  rare: { name: '稀有', color: 'text-blue-400', bg: 'bg-blue-500/20', multi: 2.5 },
  epic: { name: '史詩', color: 'text-purple-400', bg: 'bg-purple-500/20', multi: 4 },
  legendary: { name: '傳說', color: 'text-yellow-400', bg: 'bg-yellow-500/20', multi: 7 },
};

const FALLBACK_EQUIPMENT_SLOTS = ['helm', 'armor', 'weapon', 'shield', 'garment', 'shoes', 'acc1', 'acc2'];
const FALLBACK_SLOT_NAMES = { helm:'頭飾', armor:'鎧甲', weapon:'武器', shield:'盾牌/副手', garment:'披肩', shoes:'鞋靴', acc1:'飾品', acc2:'飾品' };
const FALLBACK_SLOT_ICONS = { helm:'👑', armor:'👕', weapon:'⚔️', shield:'🛡️', garment:'🧥', shoes:'👢', acc1:'💍', acc2:'💍' };

const FALLBACK_CLASSES_INFO = {
  novice: { name: '初心者', icon: '🥚', primaryStat: 'str', hpMulti: 1.0, spMulti: 1.0, atkMulti: 1.0, defMulti: 1.0, advClasses: ['swordman', 'magician', 'thief', 'acolyte', 'archer', 'merchant'] },
  swordman: { name: '劍士', icon: '🛡️', primaryStat: 'str', hpMulti: 1.5, spMulti: 0.8, atkMulti: 1.0, defMulti: 1.2, advClasses: ['knight', 'crusader'] },
  magician: { name: '魔法師', icon: '🔮', primaryStat: 'int', hpMulti: 0.8, spMulti: 2.0, atkMulti: 1.5, defMulti: 0.7, advClasses: ['wizard', 'sage'] },
  thief: { name: '盜賊', icon: '🗡️', primaryStat: 'agi', hpMulti: 1.0, spMulti: 1.0, atkMulti: 1.2, defMulti: 0.9 },
  acolyte: { name: '服事', icon: '✨', primaryStat: 'int', hpMulti: 1.2, spMulti: 1.5, atkMulti: 0.9, defMulti: 1.1 },
  archer: { name: '弓箭手', icon: '🏹', primaryStat: 'dex', hpMulti: 0.9, spMulti: 1.0, atkMulti: 1.3, defMulti: 0.8 },
  merchant: { name: '商人', icon: '💰', primaryStat: 'str', hpMulti: 1.3, spMulti: 0.8, atkMulti: 1.1, defMulti: 1.1 }
};

const DEFAULT_SIZE_PENALTY = {
  dagger: { small: 1.0, medium: 0.75, large: 0.5 },
  sword: { small: 0.75, medium: 1.0, large: 0.75 },
  twohand_sword: { small: 0.75, medium: 0.75, large: 1.0 },
  spear: { small: 0.75, medium: 0.75, large: 1.0 },
  axe: { small: 0.5, medium: 0.75, large: 1.0 },
  mace: { small: 0.75, medium: 1.0, large: 1.0 },
  bow: { small: 1.0, medium: 1.0, large: 0.75 },
  katar: { small: 0.75, medium: 1.0, large: 0.75 },
  book: { small: 1.0, medium: 1.0, large: 0.5 },
  knuckle: { small: 1.0, medium: 1.0, large: 0.75 },
  instrument: { small: 0.75, medium: 1.0, large: 0.75 },
  whip: { small: 0.75, medium: 1.0, large: 0.5 },
  barehand: { small: 1.0, medium: 1.0, large: 1.0 }
};

const DEFAULT_ELEMENT_MOD = {
  fire: { earth: 1.5, undead: 1.5, water: 0.5, fire: 0.25 },
  water: { fire: 1.5, wind: 0.5, water: 0.25 },
  wind: { water: 1.5, earth: 0.5, wind: 0.25 },
  earth: { wind: 1.5, fire: 0.5, earth: 0.25 },
  holy: { undead: 1.5, dark: 1.5, holy: 0.25 },
  dark: { holy: 1.5, angel: 1.5, dark: 0.25 },
  poison: { earth: 1.25, fire: 1.25, wind: 1.25, poison: 0, undead: 0 },
  ghost: { ghost: 1.5, neutral: 0.25 },
  neutral: { ghost: 0.25 }
};

// ====== 1. 全域系統設定檔 (SETTINGS) ======
export const SETTINGS = {
  // 裝備稀有度名稱、顏色與屬性加成倍率 (multi)
  RARITY: {
    common: { name: '普通', color: 'text-gray-300', bg: 'bg-gray-500/20', multi: 1 },
    uncommon: { name: '優秀', color: 'text-green-400', bg: 'bg-green-500/20', multi: 1.5 },
    rare: { name: '稀有', color: 'text-blue-400', bg: 'bg-blue-500/20', multi: 2.5 },
    epic: { name: '史詩', color: 'text-purple-400', bg: 'bg-purple-500/20', multi: 4 },
    legendary: { name: '傳說', color: 'text-yellow-400', bg: 'bg-yellow-500/20', multi: 7 },
  },
  // 裝備欄位定義
  EQUIPMENT_SLOTS: ['helm', 'armor', 'weapon', 'shield', 'garment', 'shoes', 'acc1', 'acc2'],
  SLOT_NAMES: { helm:'頭飾', armor:'鎧甲', weapon:'武器', shield:'盾牌/副手', garment:'披肩', shoes:'鞋靴', acc1:'飾品', acc2:'飾品' },
  SLOT_ICONS: { helm:'👑', armor:'👕', weapon:'⚔️', shield:'🛡️', garment:'🧥', shoes:'👢', acc1:'💍', acc2:'💍' },
  // 稀有度掉落機率 (大於該數值即中獎，從大排到小)
  DROP_RATES: { legendary: 0.98, epic: 0.90, rare: 0.70, uncommon: 0.40 },
  // 創角初始狀態 (包含基本素質與四轉特性素質)
  DEFAULT_STATE: {
    name: '初心者', classType: 'novice', jobTier: 1, level: 1, exp: 0, jobLevel: 1, jobExp: 0, hp: 50, sp: 10, gold: 0, cash: 0,
    attributes: { points: 48, str: 1, agi: 1, vit: 1, int: 1, dex: 1, luk: 1 },
    traits: { points: 0, pow: 0, sta: 0, wis: 0, spl: 0, con: 0, crt: 0 }, // 四轉特性素質預設
    skills: { points: 1 }, 
    equipment: { helm: null, armor: null, weapon: null, shield: null, garment: null, shoes: null, acc1: null, acc2: null },
    consumables: { redPotion: 50, flyWing: 10 }, 
    buffs: { awake: 0 }, inventory: []
  }
};

// ====== 2. 職業發展設定 (CLASSES) ======
export const CLASSES = {
  novice: { name: '初心者', job2: '一轉', icon: '🥚', primaryStat: 'str', hpMulti: 1.0, spMulti: 1.0, atkMulti: 1.0, defMulti: 1.0, advClasses: ['swordman', 'magician', 'thief', 'acolyte', 'archer', 'merchant'] },
  swordman: { name: '劍士', job2: '騎士', icon: '🛡️', primaryStat: 'str', hpMulti: 1.5, spMulti: 0.8, atkMulti: 1.0, defMulti: 1.2 },
  magician: { name: '魔法師', job2: '巫師', icon: '🔮', primaryStat: 'int', hpMulti: 0.8, spMulti: 2.0, atkMulti: 1.5, defMulti: 0.7 },
  thief: { name: '盜賊', job2: '刺客', icon: '🗡️', primaryStat: 'agi', hpMulti: 1.0, spMulti: 1.0, atkMulti: 1.2, defMulti: 0.9 },
  acolyte: { name: '服事', job2: '祭司', icon: '✨', primaryStat: 'int', hpMulti: 1.2, spMulti: 1.5, atkMulti: 0.9, defMulti: 1.1 },
  archer: { name: '弓箭手', job2: '獵人', icon: '🏹', primaryStat: 'dex', hpMulti: 0.9, spMulti: 1.0, atkMulti: 1.3, defMulti: 0.8 },
  merchant: { name: '商人', job2: '鐵匠', icon: '💰', primaryStat: 'str', hpMulti: 1.3, spMulti: 0.8, atkMulti: 1.1, defMulti: 1.1 }
};

// ====== 3. 額外資料庫：RO 素質規則資料庫 (STAT_RULES) ======
export const STAT_RULES = {
  WEIGHT_LIMIT: {
    base: 2000,
    perStr: 30,
    penalty: {
      recoverStop: { threshold: 0.70, text: "比例超過70%時會令HP/SP無法自然恢復" },
      skillStop: { threshold: 0.90, text: "超過90%時更無法使用技能" }
    }
  },
  DERIVED_LIMITS: {
    fleeMaxRate: 0.95, // 迴避率計算結果最高為 95%
    perfectDodge: { text: "不受目標命中率和數量影響，無上限，可迴避暴擊但無法迴避技能" },
    criticalDamageMulti: 1.40, // 暴擊時傷害 +40% 且無視迴避
    katarCriticalDouble: true, // 裝備拳刃時暴擊率變成雙倍
    aspdMaxBefore3rd: 190, // 三轉前攻速最高 190
    aspdMaxAfter3rd: 193   // 三轉後攻速最高 193
  },
  
  // 新增：四轉特性素質 (Trait Stats)
  TRAIT_STATS: {
    POW: { 
      name: '威力', 
      per1: { atk: 5, statusDurationReduce: ['無力感'] }, 
      per3: { pAtk: 1 } 
    },
    STA: { 
      name: '體力', 
      per1: { res: 1, statusDurationReduce: ['漆黑', '猛毒'] }, 
      per3: { res: 5 } 
    },
    WIS: { 
      name: '智慧', 
      per1: { mres: 1, statusDurationReduce: ['急流', '惆悵'] }, 
      per3: { mres: 5 } 
    },
    SPL: { 
      name: '咒語', 
      per1: { matk: 5, statusDurationReduce: ['火災', '寂靜'] }, 
      per3: { sMatk: 1 } 
    },
    CON: { 
      name: '集中', 
      per1: { hit: 2, flee: 2 }, 
      per5: { pAtk: 1, sMatk: 1 } 
    },
    CRT: { 
      name: '創意', 
      per1: { hPlus: 1, statusDurationReduce: ['急凍', '晶化', '厄運'] }, 
      per3: { cRate: 1 } 
    }
  },

  // 新增：特性素質衍生面板數值說明
  TRAIT_DERIVED: {
    pAtk: { name: '特性物理攻擊力', desc: '增加普通攻擊和技能造成的物理傷害。' },
    res: { name: '物理抗性', desc: '減少所受到的物理傷害。' },
    sMatk: { name: '特性魔法攻擊力', desc: '增加技能造成的魔法傷害。' },
    mres: { name: '魔法抗性', desc: '減少所受到的魔法傷害。' },
    hPlus: { name: '特性治癒恢復量', desc: '增加部分治癒技能的恢復量及效果。' },
    cRate: { name: '暴擊傷害比例', desc: '增加暴擊傷害。' },
    tStatusPoint: { name: '特性素質點數', desc: '用作提升特性素質，所需點數顯示在每項素質右方。' }
  }
};

// ====== 4. 轉生後升級經驗值需求表 (EXP_TABLE) ======
export const EXP_TABLE = [
  0, 0,
  // 2 - 20
  658, 1073, 1783, 2608, 3782, 4478, 4935, 5330, 5839, 6404, 
  6965, 7060, 7328, 7708, 8431, 9149, 9578, 10004, 10427, 
  // 21 - 40
  11874, 12571, 13385, 14315, 15724, 17124, 18034, 19179, 20316, 21447, 
  22571, 23687, 24797, 25900, 27231, 28085, 30334, 31988, 33632, 34687, 
  // 41 - 60
  39106, 40845, 41956, 44291, 45998, 46472, 48771, 51056, 53933, 56792, 
  59031, 61256, 63467, 65665, 67848, 70018, 72766, 74317, 76447, 78562, 
  // 61 - 80
  86427, 87416, 90889, 95582, 99008, 103646, 108256, 111611, 116167, 134106, 
  155583, 169658, 187272, 196347, 204165, 215526, 224430, 232088, 237325, 257972, 
  // 81 - 99
  280415, 304811, 331329, 360154, 391487, 425546, 462568, 502811, 546555, 594105, 
  645792, 701975, 763046, 829431, 901591, 980029, 1065291, 1157971, 1258714,
  // 100 - 120
  1272747, 1354202, 1440870, 1533085, 1631202, 1735598, 1846676, 1964863, 2090614, 2224413, 
  2366775, 2518248, 2679415, 2850897, 3033354, 3227488, 3434047, 3653826, 3887670, 4136480, 4401214, 
  // 121 - 140
  4755467, 5138234, 5551810, 5998675, 6481508, 7003204, 7566891, 8175950, 8834032, 9545083, 
  10313366, 11143488, 12040427, 13009560, 14056699, 15188122, 16410613, 17731503, 19158711, 20700795, 
  // 141 - 160
  22367001, 24167320, 26112547, 28214345, 30485317, 32939080, 35590346, 38455012, 41550255, 44894635, 
  48508204, 52412629, 56631321, 61189576, 66114724, 71436298, 77186205, 83398922, 90111701, 97364791, 
  // 161 - 180
  105201683, 113669366, 122818613, 132704283, 143385650, 154926760, 167396814, 180870583, 195428856, 211158924, 
  228155105, 246519309, 266361648, 287801097, 310966207, 320295193, 329904048, 339801169, 349995204, 360495060, 
  // 181 - 200
  371309911, 382449208, 393922684, 405740364, 417912574, 430449951, 443363449, 456664352, 470364282, 484475210, 
  499009466, 513979749, 529399141, 545281115, 561639548, 578488734, 595843396, 613718697, 632130257, 651094164, 
  // 201 - 220
  653047446, 655006588, 656971607, 658942521, 660919348, 662902106, 664890812, 666885484, 668886140, 670892798, 
  672905476, 674924192, 676948964, 678979810, 681016749, 683059799, 685108978, 687164304, 689225796, 691293473, 
  // 221 - 240
  788074559, 898404997, 1024181696, 1167567133, 1331026531, 1517370245, 1729802079, 1971974370, 2248050781, 2562777890, 
  2927566794, 3330586145, 3796868205, 4328429753, 4934409918, 5625227306, 6412759128, 7310545405, 8334021761, 9500784807, 
  // 241 - 260
  10830894679, 12347219934, 14075830724, 16046447024, 18292949608, 20853962553, 23773517310, 27101809733, 30896063095, 35221511928, 
  43181573623, 52940609261, 64905186953, 79573759204, 97557428784, 119605407689, 146636229826, 179776017766, 220405397781, 270217017679, 
  // 261 - 275
  283727868563, 297914261991, 312809975091, 328450473845, 344872997537, 353494822479, 362332193038, 371390497864, 380675260310, 390192141818, 
  397995984654, 405955904348, 414075022434, 422356522883, 430803653341
];
// ====== 7. 職業升級經驗值需求表 (JOBEXP_TABLE) ======
// 陣列索引 (Index) 即為當前等級。0 與 1 不需要升級經驗，因此預設為 0。

// 初心者 (0) Job Lv.1 - 10
export const JOBEXP_TABLE0 = [
  0, 0, 
  12, 22, 35, 50, 113, 188, 256, 335, 425
];

// 一轉 (1) Job Lv.1 - 50
export const JOBEXP_TABLE1 = [
  0, 0, 
  100, 200, 350, 550, 800, 1100, 1450, 1850, 2300, 
  2800, 3350, 3950, 4600, 5300, 6050, 6850, 7700, 8600, 9550, 
  10550, 11600, 12700, 13850, 15050, 16300, 17600, 18950, 20350, 21800, 
  23300, 24850, 26450, 28100, 29800, 31550, 33350, 35200, 37100, 39050, 
  41050, 43100, 45200, 47350, 49550, 51800, 54100, 56450, 58850, 61300
];

// 二轉 (2) Job Lv.1 - 70
export const JOBEXP_TABLE2 = [
  0, 0, 
  1354, 1624, 1949, 2339, 2807, 3368, 4042, 4850, 5820, 
  6984, 8381, 10057, 12069, 14483, 17379, 20855, 25026, 30031, 36037, 
  43245, 51894, 55163, 58638, 62333, 66260, 70434, 74871, 79588, 84602, 
  89932, 95598, 101620, 108023, 114828, 122062, 129752, 137926, 146616, 155853, 
  165671, 176109, 187203, 198997, 211534, 224861, 239027, 254086, 270093, 287109, 
  305197, 324424, 344863, 366589, 389684, 414234, 440331, 468072, 497561, 528907, 
  562228, 597649, 635300, 675324, 717870, 763096, 811171, 862274, 916598, 974343
];

// 三轉 (3) Job Lv.1 - 70
export const JOBEXP_TABLE3 = [
  0, 0, 
  12800, 16384, 20971, 26843, 34359, 43980, 56294, 72057, 92233, 
  118059, 151115, 193428, 247588, 316912, 405648, 519229, 664613, 850705, 1088903, 
  1393796, 1784059, 2283596, 2923003, 3741444, 4231573, 4785909, 5412863, 6121948, 6923924, 
  7830958, 8856813, 10017056, 11329290, 12813427, 14491986, 16390436, 18537584, 20966007, 23712554, 
  26818899, 30332175, 34305690, 38799735, 43882500, 49631108, 56132783, 63486178, 71802867, 81209043, 
  91847428, 103879441, 117487647, 132878529, 150285617, 169973033, 192239500, 217422874, 245905271, 278118862, 
  319836691, 367812195, 422984024, 486431628, 559396372, 632361116, 705325860, 778290604, 851255348, 924220092
];

// 四轉 (4) Job Lv.1 - 60
export const JOBEXP_TABLE4 = [
  0, 0, 
  4700000, 5522500, 6488938, 7624502, 8958789, 10526577, 12368729, 14533256, 17076576, 
  20064977, 23576347, 27702208, 32550095, 38246361, 44939475, 52803883, 62044562, 72902360, 85660274, 
  100650821, 118264715, 138961040, 163279222, 191853086, 216793987, 244977206, 276824243, 312811394, 353476875, 
  399428869, 451354622, 510030723, 576334717, 651258230, 735921800, 831591634, 939698547, 1061859358, 1199901074, 
  1355888214, 1532153682, 1731333660, 1956407036, 2210739951, 2498136145, 2822893843, 3189870043, 3604553149, 4073145058, 
  4480459564, 4928505520, 5421356072, 5963491679, 6559840847, 7543816974, 8675389520, 9976697948, 11473202640, 13194183036
];
// ====== 5. 遊戲公式計算 (FORMULAS) ======
export const FORMULAS = {
  // 狀態升級花費: 經典 RO 公式 (當前數值-1)/10 取整 + 2
  getStatCost: (currentStat) => Math.floor((currentStat - 1) / 10) + 2,

  // Base 經驗值需求公式
  getBaseExpReq: (lv) => Math.floor(Math.pow(lv, 3) * 2.5 + lv * 150 + 100),
  
  // Job 經驗值需求公式
  getJobExpReq: (jobLv, isJob2) => {
    if (isJob2) return Math.floor(Math.pow(jobLv, 3.2) * 3 + jobLv * 300);
    return Math.floor(Math.pow(jobLv, 2.8) * 2 + jobLv * 100);
  },

  // ==========================================
  //      以下為全新整合：RO 核心素質計算公式
  // ==========================================

  /**
   * 1. 計算素質物理攻擊力 (Status ATK)
   * @param {Object} attrs - 六大基本素質 {str, agi, vit, int, dex, luk}
   * @param {number} lv - 基礎等級 (Base Level)
   * @param {boolean} isRanged - 是否為遠距離武器 (如長弓)
   * @param {Object} traits - 四轉特性素質 {pow, sta, wis, spl, con, crt}
   */
  calculateStatusATK: (attrs, lv, isRanged = false, traits = {}) => {
    const str = attrs.str || 1;
    const dex = attrs.dex || 1;
    const luk = attrs.luk || 1;
    const pow = traits.pow || 0;

    let atk = 0;
    if (isRanged) {
      // 遠距離武器公式：DEX + STR/5 + LUK/3 + BaseLv/4
      atk = dex + Math.floor(str / 5) + Math.floor(luk / 3) + Math.floor(lv / 4);
    } else {
      // 近距離武器公式：STR + DEX/5 + LUK/3 + BaseLv/4
      atk = str + Math.floor(dex / 5) + Math.floor(luk / 3) + Math.floor(lv / 4);
    }
    
    // 四轉 POW 加成：每 1 點 POW 物理攻擊力 +5
    atk += (pow * 5);
    return atk;
  },

  /**
   * 2. 計算特性物理攻擊力 (P.Atk) - 四轉機制
   */
  calculatePAtk: (traits = {}) => {
    const pow = traits.pow || 0;
    const con = traits.con || 0;
    // 每 3 點 POW 增加 1 P.Atk，每 5 點 CON 增加 1 P.Atk
    return Math.floor(pow / 3) + Math.floor(con / 5);
  },

  /**
   * 3. 計算素質魔法攻擊力 (Status MATK)
   */
  calculateStatusMATK: (attrs, lv, traits = {}) => {
    const int = attrs.int || 1;
    const dex = attrs.dex || 1;
    const luk = attrs.luk || 1;
    const spl = traits.spl || 0;

    // 公式：INT*1.5 + DEX/5 + LUK/3 + BaseLv/4
    let matk = Math.floor(int * 1.5) + Math.floor(dex / 5) + Math.floor(luk / 3) + Math.floor(lv / 4);
    
    // 四轉 SPL 加成：每 1 點 SPL 魔法攻擊力 +5
    matk += (spl * 5);
    return matk;
  },

  /**
   * 4. 計算特性魔法攻擊力 (S.Matk) - 四轉機制
   */
  calculateSMatk: (traits = {}) => {
    const spl = traits.spl || 0;
    const con = traits.con || 0;
    // 每 3 點 SPL 增加 1 S.Matk，每 5 點 CON 增加 1 S.Matk
    return Math.floor(spl / 3) + Math.floor(con / 5);
  },

  /**
   * 5. 計算素質物理防禦力 (Status DEF)
   */
  calculateStatusDEF: (attrs, lv) => {
    const vit = attrs.vit || 1;
    const agi = attrs.agi || 1;
    // 公式：BaseLv/2 + VIT/2 + AGI/5
    return Math.floor(lv / 2) + Math.floor(vit / 2) + Math.floor(agi / 5);
  },

  /**
   * 6. 計算物理抗性 (Res) - 四轉機制
   */
  calculateRes: (traits = {}) => {
    const sta = traits.sta || 0;
    // 每 1 點 STA 增加 1 Res，每 3 點 STA 額外增加 5 Res
    return sta + (Math.floor(sta / 3) * 5);
  },

  /**
   * 7. 計算素質魔法防禦力 (Status MDEF)
   */
  calculateStatusMDEF: (attrs, lv) => {
    const int = attrs.int || 1;
    const vit = attrs.vit || 1;
    const dex = attrs.dex || 1;
    // 公式：INT + VIT/5 + DEX/5 + BaseLv/4
    return int + Math.floor(vit / 5) + Math.floor(dex / 5) + Math.floor(lv / 4);
  },

  /**
   * 8. 計算魔法抗性 (Mres) - 四轉機制
   */
  calculateMres: (traits = {}) => {
    const wis = traits.wis || 0;
    // 每 1 點 WIS 增加 1 Mres，每 3 點 WIS 額外增加 5 Mres
    return wis + (Math.floor(wis / 3) * 5);
  },

  /**
   * 9. 計算命中率 (HIT)
   */
  calculateHIT: (attrs, lv, traits = {}) => {
    const dex = attrs.dex || 1;
    const luk = attrs.luk || 1;
    const con = traits.con || 0;
    // 公式：BaseLv + DEX + LUK/3 + CON*2
    return lv + dex + Math.floor(luk / 3) + (con * 2);
  },

  /**
   * 10. 計算迴避率 (FLEE)
   */
  calculateFLEE: (attrs, lv, traits = {}) => {
    const agi = attrs.agi || 1;
    const luk = attrs.luk || 1;
    const con = traits.con || 0;
    // 公式：BaseLv + AGI + LUK/5 + CON*2
    return lv + agi + Math.floor(luk / 5) + (con * 2);
  },

  /**
   * 11. 計算完全迴避 (Perfect Dodge)
   */
  calculatePerfectDodge: (attrs) => {
    const luk = attrs.luk || 1;
    // 每 10 點 LUK 增加 1 完全迴避
    return Math.floor(luk / 10);
  },

  /**
   * 12. 計算暴擊率 (Critical Rate)
   */
  calculateCRIT: (attrs) => {
    const luk = attrs.luk || 1;
    // 基礎暴擊率為 1，每 1 點 LUK 增加 0.3
    return 1 + (luk * 0.3);
  },

  /**
   * 13. 計算最大血量 (MaxHP)
   * @param {number} lv - 當前等級
   * @param {number} hpMulti - 職業血量倍率 (來自 CLASSES，如劍士 1.5)
   * @param {Object} attrs - 基本素質
   */
  calculateMaxHP: (lv, hpMulti, attrs) => {
    const vit = attrs.vit || 1;
    // RO基礎血量趨勢模擬 (等級*50 + 基礎100) * 職業乘數 * (1 + VIT * 1%)
    const baseCurve = lv * 50 + 100;
    return Math.floor(baseCurve * hpMulti * (1 + vit * 0.01));
  },

  /**
   * 14. 計算最大魔力 (MaxSP)
   * @param {number} lv - 當前等級
   * @param {number} spMulti - 職業魔力倍率 (來自 CLASSES，如法師 2.0)
   * @param {Object} attrs - 基本素質
   */
  calculateMaxSP: (lv, spMulti, attrs) => {
    const int = attrs.int || 1;
    // RO基礎魔力趨勢模擬 (等級*10 + 基礎20) * 職業乘數 * (1 + INT * 1%)
    const baseCurve = lv * 10 + 20;
    return Math.floor(baseCurve * spMulti * (1 + int * 0.01));
  },

  /**
   * 15. 計算最大負重量 (Max Weight)
   */
  calculateMaxWeight: (attrs) => {
    const str = attrs.str || 1;
    return 2000 + (str * 30); // 基礎負重 2000 + 每點 STR 增加 30
  },

  /**
   * 16. 計算 HP 自然恢復量 (HP Regen)
   */
  calculateHPRegen: (attrs, maxHP) => {
    const vit = attrs.vit || 1;
    // 基礎 1 + VIT/5 + 每 200 最大血量額外 +1
    return 1 + Math.floor(vit / 5) + Math.floor(maxHP / 200);
  },

  /**
   * 17. 計算 SP 自然恢復量 (SP Regen)
   */
  calculateSPRegen: (attrs, maxSP) => {
    const int = attrs.int || 1;
    let regen = 1;
    
    // 每 6 點 INT 增加 1
    regen += Math.floor(int / 6);
    
    // 達到 120 後的加成機制
    if (int >= 120) {
      regen += 4; // 達到 120 時額外 +4
      regen += Math.floor((int - 120) / 2); // 達到 120 後每 2 點再 +1
    }
    
    // 每 100 最大魔力增加 1
    regen += Math.floor(maxSP / 100);
    return regen;
  },

  /**
   * 18. 四轉其餘特性加成計算 (H.Plus 與 C.Rate)
   */
  calculateTraitAdditions: (traits = {}) => {
    const crt = traits.crt || 0;
    return {
      hPlus: crt,                  // 每 1 點 CRT 增加 1 H.Plus
      cRate: Math.floor(crt / 3)   // 每 3 點 CRT 增加 1 C.Rate
    };
  },
  /**
   * 19. 計算攻擊速度與實際攻擊間隔 (ASPD 系統)
   * @param {number} aspd - 玩家的面板 ASPD (最高 193)
   * @returns {Object} 包含每秒攻擊次數 (aps) 與攻擊間隔毫秒 (intervalMs)
   */
  calculateAttackSpeed: (aspd) => {
    // 防呆：確保 ASPD 介於 1 到 193 之間 (三轉/四轉上限)
    const cappedASPD = Math.min(Math.max(aspd, 1), 193); 
    
    // RO 經典公式：每秒攻擊次數 = 50 / (200 - ASPD)
    const attacksPerSecond = 50 / (200 - cappedASPD);
    
    // 攻擊間隔時間 (毫秒) = 1000 / 每秒攻擊次數
    const attackIntervalMs = Math.floor(1000 / attacksPerSecond);

    return {
      aspd: cappedASPD,
      aps: Number(attacksPerSecond.toFixed(2)), // 取小數點後兩位，方便 UI 顯示
      intervalMs: attackIntervalMs              // 給遊戲引擎用的毫秒延遲
    };
  }
};


