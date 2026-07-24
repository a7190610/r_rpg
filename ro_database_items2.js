export const RO_DATABASE_ITEMS2 = {
  // 欄位定義 (加上 i2_ 前綴)
  keys: ['i2_id', 'i2_name', 'i2_icon', 'i2_type', 'i2_cost', 'i2_desc', 'i2_attr'],

  // 資料陣列對齊
  data: {
    consumables: [
      // ================= 一般商店 (Zeny) =================
      
      // [基礎恢復 - 藥水類]
      [ 'novicePotion',     '初學者藥水',           '🍼', 'consumable',    10, '回復 50 HP (新手專用)',                  { healHp: 50 } ],
      [ 'redPotion',        '紅色藥水',             '🍷', 'consumable',    50, '回復 250 HP',                            { healHp: 250 } ],
      [ 'orangePotion',     '橙色藥水',             '🍹', 'consumable',   200, '回復 500 HP',                            { healHp: 500 } ],
      [ 'yellowPotion',     '黃色藥水',             '🧃', 'consumable',   550, '回復 1000 HP',                           { healHp: 1000 } ],
      [ 'whitePotion',      '白色藥水',             '🥛', 'consumable',  1200, '回復 2500 HP',                           { healHp: 2500 } ],
      [ 'bluePotion',       '藍色藥水',             '🧪', 'consumable',  1500, '回復 250 SP',                            { healSp: 250 } ],

      // [進階恢復 - 纖細藥水類 (較輕重量/更好效果)]
      [ 'slimRedPotion',    '纖細紅色藥水',         '🩸', 'consumable',   100, '回復 350 HP',                            { healHp: 350 } ],
      [ 'slimYellowPotion', '纖細黃色藥水',         '🧋', 'consumable',   800, '回復 1500 HP',                           { healHp: 1500 } ],
      [ 'slimWhitePotion',  '纖細白色藥水',         '🍼', 'consumable',  3000, '回復 4000 HP',                           { healHp: 4000 } ],

      // [食物與水果]
      [ 'apple',            '蘋果',                 '🍎', 'consumable',    15, '回復 50 HP',                             { healHp: 50 } ],
      [ 'banana',           '香蕉',                 '🍌', 'consumable',    15, '回復 30 HP',                             { healHp: 30 } ],
      [ 'carrot',           '胡蘿蔔',               '🥕', 'consumable',    15, '回復 40 HP',                             { healHp: 40 } ],
      [ 'sweetPotato',      '蕃薯',                 '🍠', 'consumable',    20, '回復 60 HP',                             { healHp: 60 } ],
      [ 'pumpkin',          '南瓜',                 '🎃', 'consumable',    25, '回復 80 HP',                             { healHp: 80 } ],
      [ 'meat',             '肉',                   '🥩', 'consumable',    50, '回復 100 HP',                            { healHp: 100 } ],
      [ 'icecream',         '冰淇淋',               '🍦', 'consumable',   150, '回復 300 HP',                            { healHp: 300 } ],
      [ 'grape',            '葡萄',                 '🍇', 'consumable',   150, '回復 15 SP',                             { healSp: 15 } ],
      [ 'strawberry',       '草莓',                 '🍓', 'consumable',   300, '回復 30 SP',                             { healSp: 30 } ],
      [ 'lemon',            '檸檬',                 '🍋', 'consumable',   500, '回復 50 SP',                             { healSp: 50 } ],

      // [果汁與特調]
      [ 'appleJuice',       '蘋果汁',               '🧃', 'consumable',    30, '回復 70 HP',                             { healHp: 70 } ],
      [ 'bananaJuice',      '香蕉汁',               '🥤', 'consumable',    30, '回復 50 HP',                             { healHp: 50 } ],
      [ 'grapeJuice',       '葡萄汁',               '🍷', 'consumable',   400, '回復 30 SP',                             { healSp: 30 } ],
      [ 'carrotJuice',      '胡蘿蔔汁',             '🍹', 'consumable',    30, '回復 60 HP',                             { healHp: 60 } ],

      // [藥草類]
      [ 'greenHerb',        '綠色藥草',             '🌿', 'consumable',    50, '回復 50 HP',                             { healHp: 50 } ],
      [ 'redHerb',          '紅色藥草',             '🍁', 'consumable',    60, '回復 80 HP',                             { healHp: 80 } ],
      [ 'yellowHerb',       '黃色藥草',             '🍂', 'consumable',   250, '回復 300 HP',                            { healHp: 300 } ],
      [ 'whiteHerb',        '白色藥草',             '💮', 'consumable',   800, '回復 1000 HP',                           { healHp: 1000 } ],
      [ 'blueHerb',         '藍色藥草',             '🌱', 'consumable',  1000, '回復 100 SP',                            { healSp: 100 } ],
      [ 'hinalleLeaflet',   '天地樹葉子',           '🍃', 'consumable',  4000, '復活死亡狀態的隊友',                     { special: 'resurrect' } ],

      // [高級恢復 - 稀有掉落與合成]
      [ 'honey',            '蜂蜜',                 '🍯', 'consumable',  2000, '回復 500 HP / 100 SP',                   { healHp: 500, healSp: 100 } ],
      [ 'royalJelly',       '蜂膠',                 '🐝', 'consumable',  5000, '回復 1000 HP / 250 SP，解除部分負面狀態',{ healHp: 1000, healSp: 250 } ],
      [ 'mastela',          '瑪絲黛拉果實',         '🍑', 'consumable',  8000, '回復 3000 HP',                           { healHp: 3000 } ],
      [ 'yggSeed',          '天地樹芽',             '🌰', 'consumable', 30000, '回復 50% 最大 HP 與 SP',                 { healHpPct: 0.5, healSpPct: 0.5 } ],
      [ 'yggBerry',         '天地樹果實',           '🌳', 'consumable', 80000, '完全回復 HP 與 SP',                      { healHpPct: 1.0, healSpPct: 1.0 } ],

      // [狀態解除與解毒]
      [ 'greenPotion',      '綠色藥水',             '🧪', 'consumable',    50, '解除中毒狀態',                           { special: 'curePoison' } ],
      [ 'holyWater',        '聖水',                 '💧', 'consumable',   200, '解除詛咒狀態',                           { special: 'cureCurse' } ],
      [ 'panacea',          '萬能藥',               '💊', 'consumable',  1000, '解除多種異常狀態，並回復 500 HP',        { healHp: 500, special: 'cureAll' } ],

      // [戰鬥與輔助功能道具]
      [ 'flyWing',          '蒼蠅翅膀',             '🕊️', 'consumable',    50, '瞬間換怪 (跳過目前戰鬥)',                {} ],
      [ 'butterflyWing',    '蝴蝶翅膀',             '🦋', 'consumable',   300, '脫離戰鬥回到安全區 (滿血滿魔)',          {} ],
      [ 'concentration',    '集中藥水',             '🟢', 'buff',         800, '30分鐘內微幅增加攻速 (ASPD+10%)',        { duration: 1800000, buffAttrs: { aspdBonusPct: 10 } } ],
      [ 'awake',            '覺醒藥水',             '🟡', 'buff',        1500, '30分鐘內大幅增加攻速 (ASPD+20%)',        { duration: 1800000, buffAttrs: { aspdBonusPct: 20 } } ],
      [ 'berserk',          '菠色克藥水',           '🔴', 'buff',        3000, '30分鐘內極大幅增加攻速 (ASPD+30%)',      { duration: 1800000, buffAttrs: { aspdBonusPct: 30 } } ],

      // [戰鬥強化 - 箱子與特調液]
      [ 'aloevera',         '蘆薈汁液',             '🌵', 'buff',        4000, '10分鐘內挑釁自己，物理攻擊力 +10%',      { duration: 600000, buffAttrs: { atkPct: 10 } } ],
      [ 'anodyne',          '止痛藥',               '🍵', 'buff',        5000, '10分鐘內賦予霸體狀態，防禦力 +15%',      { duration: 600000, buffAttrs: { defPct: 15 } } ],
      [ 'abrasive',         '研磨劑',               '✨', 'buff',        8000, '10分鐘內武器銳利化，暴擊率 +30',          { duration: 600000, buffAttrs: { crit: 30 } } ],
      [ 'boxOfResentment',  '怨恨之箱',             '📦', 'buff',       12000, '20分鐘內 ATK +20',                       { duration: 1200000, buffAttrs: { atk: 20 } } ],
      [ 'boxOfGloom',       '憂鬱之箱',             '📦', 'buff',       10000, '20分鐘內 迴避率(Flee) +20',              { duration: 1200000, buffAttrs: { flee: 20 } } ],
      [ 'boxOfSunlight',    '日光之箱',             '📦', 'buff',       10000, '20分鐘內 命中率(Hit) +20',               { duration: 1200000, buffAttrs: { hit: 20 } } ],

      // [元素抵抗藥水]
      [ 'fireResist',       '火屬性抵抗藥',         '🔥', 'buff',        5000, '20分鐘內減少火屬性傷害 (暫代DEF+10%)',   { duration: 1200000, buffAttrs: { defPct: 10 } } ],
      [ 'waterResist',      '水屬性抵抗藥',         '💧', 'buff',        5000, '20分鐘內減少水屬性傷害 (暫代MDEF+10%)',  { duration: 1200000, buffAttrs: { mdefPct: 10 } } ],
      [ 'earthResist',      '地屬性抵抗藥',         '🪨', 'buff',        5000, '20分鐘內減少地屬性傷害 (暫代MaxHP+5%)',  { duration: 1200000, buffAttrs: { maxHpPct: 5 } } ],
      [ 'windResist',       '風屬性抵抗藥',         '🌪️', 'buff',        5000, '20分鐘內減少風屬性傷害 (暫代Flee+10)',   { duration: 1200000, buffAttrs: { flee: 10 } } ],

      // [元素附加卷軸 (賦予武器屬性)]
      [ 'fireConverter',    '火屬性附加卷軸',       '📜', 'buff',        8000, '20分鐘內攻擊轉為火屬性 (暫代ATK+10%)',   { duration: 1200000, buffAttrs: { atkPct: 10 } } ],
      [ 'waterConverter',   '水屬性附加卷軸',       '📜', 'buff',        8000, '20分鐘內攻擊轉為水屬性 (暫代ATK+10%)',   { duration: 1200000, buffAttrs: { atkPct: 10 } } ],
      [ 'earthConverter',   '地屬性附加卷軸',       '📜', 'buff',        8000, '20分鐘內攻擊轉為地屬性 (暫代ATK+10%)',   { duration: 1200000, buffAttrs: { atkPct: 10 } } ],
      [ 'windConverter',    '風屬性附加卷軸',       '📜', 'buff',        8000, '20分鐘內攻擊轉為風屬性 (暫代ATK+10%)',   { duration: 1200000, buffAttrs: { atkPct: 10 } } ],

      // [RO 經典料理 - Level 5 (持續20分鐘)]
      [ 'friedMonkeyTail',  '炒猴子尾巴 (Lv.5)',    '🍲', 'buff',        8000, '20分鐘內 STR +5',                        { duration: 1200000, buffAttrs: { str: 5 } } ],
      [ 'tentacleCheese',   '觸角起司 (Lv.5)',      '🧀', 'buff',        8000, '20分鐘內 AGI +5',                        { duration: 1200000, buffAttrs: { agi: 5 } } ],
      [ 'friedSweetPotato', '炸蕃薯 (Lv.5)',        '🍠', 'buff',        8000, '20分鐘內 VIT +5',                        { duration: 1200000, buffAttrs: { vit: 5 } } ],
      [ 'grapeExtract',     '葡萄果汁萃取液 (Lv.5)','🍹', 'buff',        8000, '20分鐘內 INT +5',                        { duration: 1200000, buffAttrs: { int: 5 } } ],
      [ 'fruitMix',         '綜合水果冰 (Lv.5)',    '🍧', 'buff',        8000, '20分鐘內 DEX +5',                        { duration: 1200000, buffAttrs: { dex: 5 } } ],
      [ 'friedEgg',         '煎蛋 (Lv.5)',          '🍳', 'buff',        8000, '20分鐘內 LUK +5',                        { duration: 1200000, buffAttrs: { luk: 5 } } ],

      // [RO 經典料理 - Level 10 (持續30分鐘)]
      [ 'bearFoots',        '熊掌烤肉 (Lv.10)',     '🍖', 'buff',       25000, '30分鐘內 STR +10',                       { duration: 1800000, buffAttrs: { str: 10 } } ],
      [ 'broiledTentacle',  '烤觸角 (Lv.10)',       '🍢', 'buff',       25000, '30分鐘內 AGI +10',                       { duration: 1800000, buffAttrs: { agi: 10 } } ],
      [ 'marinatedMushroom','涼拌蘑菇 (Lv.10)',     '🍄', 'buff',       25000, '30分鐘內 VIT +10',                       { duration: 1800000, buffAttrs: { vit: 10 } } ],
      [ 'royalJellyTea',    '蜂蜜花草茶 (Lv.10)',   '🫖', 'buff',       25000, '30分鐘內 INT +10',                       { duration: 1800000, buffAttrs: { int: 10 } } ],
      [ 'hwergelmirTonic',  '赫瓦格密爾之酒 (Lv.10)','🥂', 'buff',       25000, '30分鐘內 DEX +10',                       { duration: 1800000, buffAttrs: { dex: 10 } } ],
      [ 'nineTailsTails',   '九尾狐尾巴料理 (Lv.10)','🍲', 'buff',       25000, '30分鐘內 LUK +10',                       { duration: 1800000, buffAttrs: { luk: 10 } } ]
    ]
  }
};