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
  // 創角初始狀態
  DEFAULT_STATE: {
    name: '初心者', classType: 'novice', jobTier: 1, level: 1, exp: 0, jobLevel: 1, jobExp: 0, hp: 50, sp: 10, gold: 0, cash: 0,
    attributes: { points: 0, str: 1, agi: 1, vit: 1, int: 1, dex: 1, luk: 1 },
    skills: { points: 1 }, 
    equipment: { helm: null, armor: null, weapon: null, shield: null, garment: null, shoes: null, acc1: null, acc2: null },
    consumables: { redPotion: 10, flyWing: 10 }, // 預設給的新手物資
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

// ====== 3. 消耗品特殊效果 (加在現有 ITEMS 裡面) ======
// 未來前端不用再寫死 if (id === 'redPotion') 補 250，而是直接讀取 healHp 屬性
/*
export const ITEMS = {
  consumables: [
    { id: 'redPotion', name: '紅色藥水', icon: '🍷', healHp: 250 },
    { id: 'whitePotion', name: '白色藥水', icon: '🍶', healHp: 1500 },
    { id: 'bluePotion', name: '藍色藥水', icon: '🧪', healSp: 100 },
    { id: 'flyWing', name: '蒼蠅翅膀', icon: '🕊️', effect: 'teleport' },
    { id: 'awakePotion', name: '覺醒藥水', icon: '⚡', effect: 'awake', duration: 1800000 }
  ], ... 
*/