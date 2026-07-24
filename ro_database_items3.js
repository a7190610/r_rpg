export const RO_DATABASE_ITEMS3 = {
  // 欄位定義 (加上 i3_ 前綴)
  keys: ['i3_id', 'i3_name', 'i3_icon', 'i3_type', 'i3_cost', 'i3_desc', 'i3_attr'],

  // 資料陣列對齊
  data: {
    consumables: [
      // ================= 商城道具 (高級 Zeny 區) =================
      
      // [經驗與掉寶加成]
      [ 'expBoost',           '戰鬥教範',         '📚', 'buff',        15000, '60分鐘內 Base 經驗值 +50%',               { duration: 3600000, expMulti: 1.5 } ],
      [ 'expBoostPremium',    '高級戰鬥教範',     '📖', 'buff',        40000, '60分鐘內 Base 經驗值 +100%',              { duration: 3600000, expMulti: 2.0 } ],
      [ 'jobExpBoost',        '職業教範',         '🎓', 'buff',        15000, '60分鐘內 Job 經驗值 +50%',                { duration: 3600000, jobExpMulti: 1.5 } ],
      [ 'jobExpBoostPremium', '高級職業教範',     '🎓', 'buff',        35000, '60分鐘內 Job 經驗值 +100%',               { duration: 3600000, jobExpMulti: 2.0 } ],
      [ 'dropBoost',          '掉寶糖果',         '🍬', 'buff',        15000, '60分鐘內裝備與道具掉落率 +50%',           { duration: 3600000, dropMulti: 1.5 } ],
      [ 'dropBoostPremium',   '掉寶率倍增糖',     '🍭', 'buff',        40000, '60分鐘內裝備與道具掉落率 +100%',          { duration: 3600000, dropMulti: 2.0 } ],

      // [屬性與能力強化卷軸]
      [ 'strScroll',          '力量卷軸',         '💪', 'buff',        50000, '1小時內 STR +30',                         { duration: 3600000, buffAttrs: { str: 30 } } ],
      [ 'agiScroll',          '敏捷卷軸',         '🏃', 'buff',        50000, '1小時內 AGI +30',                         { duration: 3600000, buffAttrs: { agi: 30 } } ],
      [ 'vitScroll',          '體力卷軸',         '🛡️', 'buff',        50000, '1小時內 VIT +30',                         { duration: 3600000, buffAttrs: { vit: 30 } } ],
      [ 'intScroll',          '智力卷軸',         '🧠', 'buff',        50000, '1小時內 INT +30',                         { duration: 3600000, buffAttrs: { int: 30 } } ],
      [ 'dexScroll',          '靈巧卷軸',         '🎯', 'buff',        50000, '1小時內 DEX +30',                         { duration: 3600000, buffAttrs: { dex: 30 } } ],
      [ 'lukScroll',          '幸運卷軸',         '🍀', 'buff',        50000, '1小時內 LUK +30',                         { duration: 3600000, buffAttrs: { luk: 30 } } ],
      [ 'fleeScroll',         '迴避卷軸',         '💨', 'buff',        60000, '1小時內 迴避率 +50',                      { duration: 3600000, buffAttrs: { flee: 50 } } ],
      [ 'hitScroll',          '鷹眼卷軸',         '🦅', 'buff',        60000, '1小時內 命中率 +50',                      { duration: 3600000, buffAttrs: { hit: 50 } } ],
      [ 'tyrBlessing',        '提爾的祝福',       '⚡', 'buff',       200000, '1小時內 ATK/MATK +50，命中與迴避 +30',    { duration: 3600000, buffAttrs: { atk: 50, matk: 50, hit: 30, flee: 30 } } ],

      // [特殊系統道具與特權]
      [ 'maxWeightScroll',    '健身房隨身包',     '🎒', 'consumable', 250000, '永久擴充 10 格背包空間上限',            { special: 'addInventory' } ],
      [ 'bossRadar',          '凸透鏡(首領雷達)', '📡', 'buff',       100000, '1小時內 遭遇精英怪與王機率大幅提升',      { duration: 3600000, buffAttrs: { bossEncounterMulti: 3.0 } } ],
      [ 'tokenOfSiegfried',   '齊格弗里德之證',   '🏅', 'consumable', 120000, '角色死亡時可原地滿血滿魔復活 (免死金牌)', { special: 'autoResurrect' } ],
      [ 'safeguardShield',    '防爆卷軸',         '🛡️', 'consumable', 300000, '鐵匠精煉失敗時，保護裝備不爆裂 (消耗品)', { special: 'protectUpgrade' } ],
      [ 'enrichElunium',      '濃縮鋁',           '💎', 'consumable', 150000, '精煉防具時提升成功機率',                  { special: 'upgradeArmorBonus' } ],
      [ 'enrichOridecon',     '濃縮神之金屬',     '💠', 'consumable', 150000, '精煉武器時提升成功機率',                  { special: 'upgradeWeaponBonus' } ],
      [ 'vipCard',            '尊榮VIP特權',      '👑', 'buff',       999999, '24小時內 經驗/掉寶加倍、全素質+20',       { duration: 86400000, expMulti: 2.0, dropMulti: 2.0, buffAttrs: { allStat: 20 } } ]
    ]
  }
};