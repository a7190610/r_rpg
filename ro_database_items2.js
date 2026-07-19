// ==========================================
// 消耗品 (Consumables) - 商城與一般道具
// ==========================================
export const RO_DATABASE_ITEMS2 = {
  consumables: [
    // ================= 一般商店 (Zeny) =================
    
    // [基礎恢復 - 藥水類]
    { id: 'novicePotion', icon: '🍼', name: '初學者藥水', desc: '回復 50 HP (新手專用)', cost: 10, type: 'consumable', healHp: 50 },
    { id: 'redPotion', icon: '🍷', name: '紅色藥水', desc: '回復 250 HP', cost: 50, type: 'consumable', healHp: 250 },
    { id: 'orangePotion', icon: '🍹', name: '橙色藥水', desc: '回復 500 HP', cost: 200, type: 'consumable', healHp: 500 },
    { id: 'yellowPotion', icon: '🧃', name: '黃色藥水', desc: '回復 1000 HP', cost: 550, type: 'consumable', healHp: 1000 },
    { id: 'whitePotion', icon: '🥛', name: '白色藥水', desc: '回復 2500 HP', cost: 1200, type: 'consumable', healHp: 2500 },
    { id: 'bluePotion', icon: '🧪', name: '藍色藥水', desc: '回復 250 SP', cost: 1500, type: 'consumable', healSp: 250 },

    // [進階恢復 - 纖細藥水類 (較輕重量/更好效果)]
    { id: 'slimRedPotion', icon: '🩸', name: '纖細紅色藥水', desc: '回復 350 HP', cost: 100, type: 'consumable', healHp: 350 },
    { id: 'slimYellowPotion', icon: '🧋', name: '纖細黃色藥水', desc: '回復 1500 HP', cost: 800, type: 'consumable', healHp: 1500 },
    { id: 'slimWhitePotion', icon: '🍼', name: '纖細白色藥水', desc: '回復 4000 HP', cost: 3000, type: 'consumable', healHp: 4000 },

    // [食物與水果]
    { id: 'apple', icon: '🍎', name: '蘋果', desc: '回復 50 HP', cost: 15, type: 'consumable', healHp: 50 },
    { id: 'banana', icon: '🍌', name: '香蕉', desc: '回復 30 HP', cost: 15, type: 'consumable', healHp: 30 },
    { id: 'carrot', icon: '🥕', name: '胡蘿蔔', desc: '回復 40 HP', cost: 15, type: 'consumable', healHp: 40 },
    { id: 'sweetPotato', icon: '🍠', name: '蕃薯', desc: '回復 60 HP', cost: 20, type: 'consumable', healHp: 60 },
    { id: 'pumpkin', icon: '🎃', name: '南瓜', desc: '回復 80 HP', cost: 25, type: 'consumable', healHp: 80 },
    { id: 'meat', icon: '🥩', name: '肉', desc: '回復 100 HP', cost: 50, type: 'consumable', healHp: 100 },
    { id: 'icecream', icon: '🍦', name: '冰淇淋', desc: '回復 300 HP', cost: 150, type: 'consumable', healHp: 300 },
    { id: 'grape', icon: '🍇', name: '葡萄', desc: '回復 15 SP', cost: 150, type: 'consumable', healSp: 15 },
    { id: 'strawberry', icon: '🍓', name: '草莓', desc: '回復 30 SP', cost: 300, type: 'consumable', healSp: 30 },
    { id: 'lemon', icon: '🍋', name: '檸檬', desc: '回復 50 SP', cost: 500, type: 'consumable', healSp: 50 },

    // [果汁與特調]
    { id: 'appleJuice', icon: '🧃', name: '蘋果汁', desc: '回復 70 HP', cost: 30, type: 'consumable', healHp: 70 },
    { id: 'bananaJuice', icon: '🥤', name: '香蕉汁', desc: '回復 50 HP', cost: 30, type: 'consumable', healHp: 50 },
    { id: 'grapeJuice', icon: '🍷', name: '葡萄汁', desc: '回復 30 SP', cost: 400, type: 'consumable', healSp: 30 },
    { id: 'carrotJuice', icon: '🍹', name: '胡蘿蔔汁', desc: '回復 60 HP', cost: 30, type: 'consumable', healHp: 60 },

    // [藥草類]
    { id: 'greenHerb', icon: '🌿', name: '綠色藥草', desc: '回復 50 HP', cost: 50, type: 'consumable', healHp: 50 },
    { id: 'redHerb', icon: '🍁', name: '紅色藥草', desc: '回復 80 HP', cost: 60, type: 'consumable', healHp: 80 },
    { id: 'yellowHerb', icon: '🍂', name: '黃色藥草', desc: '回復 300 HP', cost: 250, type: 'consumable', healHp: 300 },
    { id: 'whiteHerb', icon: '💮', name: '白色藥草', desc: '回復 1000 HP', cost: 800, type: 'consumable', healHp: 1000 },
    { id: 'blueHerb', icon: '🌱', name: '藍色藥草', desc: '回復 100 SP', cost: 1000, type: 'consumable', healSp: 100 },
    { id: 'hinalleLeaflet', icon: '🍃', name: '天地樹葉子', desc: '復活死亡狀態的隊友', cost: 4000, type: 'consumable', special: 'resurrect' },

    // [高級恢復 - 稀有掉落與合成]
    { id: 'honey', icon: '🍯', name: '蜂蜜', desc: '回復 500 HP / 100 SP', cost: 2000, type: 'consumable', healHp: 500, healSp: 100 },
    { id: 'royalJelly', icon: '🐝', name: '蜂膠', desc: '回復 1000 HP / 250 SP，解除部分負面狀態', cost: 5000, type: 'consumable', healHp: 1000, healSp: 250 },
    { id: 'mastela', icon: '🍑', name: '瑪絲黛拉果實', desc: '回復 3000 HP', cost: 8000, type: 'consumable', healHp: 3000 },
    { id: 'yggSeed', icon: '🌰', name: '天地樹芽', desc: '回復 50% 最大 HP 與 SP', cost: 30000, type: 'consumable', healHpPct: 0.5, healSpPct: 0.5 },
    { id: 'yggBerry', icon: '🌳', name: '天地樹果實', desc: '完全回復 HP 與 SP', cost: 80000, type: 'consumable', healHpPct: 1.0, healSpPct: 1.0 },

    // [狀態解除與解毒]
    { id: 'greenPotion', icon: '🧪', name: '綠色藥水', desc: '解除中毒狀態', cost: 50, type: 'consumable', special: 'curePoison' },
    { id: 'holyWater', icon: '💧', name: '聖水', desc: '解除詛咒狀態', cost: 200, type: 'consumable', special: 'cureCurse' },
    { id: 'panacea', icon: '💊', name: '萬能藥', desc: '解除多種異常狀態，並回復 500 HP', cost: 1000, type: 'consumable', healHp: 500, special: 'cureAll' },

    // [戰鬥與輔助功能道具]
    { id: 'flyWing', icon: '🕊️', name: '蒼蠅翅膀', desc: '瞬間換怪 (跳過目前戰鬥)', cost: 50, type: 'consumable' },
    { id: 'butterflyWing', icon: '🦋', name: '蝴蝶翅膀', desc: '脫離戰鬥回到安全區 (滿血滿魔)', cost: 300, type: 'consumable' },
    { id: 'concentration', icon: '🟢', name: '集中藥水', desc: '30分鐘內微幅增加攻速 (ASPD+10%)', cost: 800, type: 'buff', duration: 1800000, buffAttrs: { aspdBonusPct: 10 } },
    { id: 'awake', icon: '🟡', name: '覺醒藥水', desc: '30分鐘內大幅增加攻速 (ASPD+20%)', cost: 1500, type: 'buff', duration: 1800000, buffAttrs: { aspdBonusPct: 20 } },
    { id: 'berserk', icon: '🔴', name: '菠色克藥水', desc: '30分鐘內極大幅增加攻速 (ASPD+30%)', cost: 3000, type: 'buff', duration: 1800000, buffAttrs: { aspdBonusPct: 30 } },

    // [戰鬥強化 - 箱子與特調液]
    { id: 'aloevera', icon: '🌵', name: '蘆薈汁液', desc: '10分鐘內挑釁自己，物理攻擊力 +10%', cost: 4000, type: 'buff', duration: 600000, buffAttrs: { atkPct: 10 } },
    { id: 'anodyne', icon: '🍵', name: '止痛藥', desc: '10分鐘內賦予霸體狀態，防禦力 +15%', cost: 5000, type: 'buff', duration: 600000, buffAttrs: { defPct: 15 } },
    { id: 'abrasive', icon: '✨', name: '研磨劑', desc: '10分鐘內武器銳利化，暴擊率 +30', cost: 8000, type: 'buff', duration: 600000, buffAttrs: { crit: 30 } },
    { id: 'boxOfResentment', icon: '📦', name: '怨恨之箱', desc: '20分鐘內 ATK +20', cost: 12000, type: 'buff', duration: 1200000, buffAttrs: { atk: 20 } },
    { id: 'boxOfGloom', icon: '📦', name: '憂鬱之箱', desc: '20分鐘內 迴避率(Flee) +20', cost: 10000, type: 'buff', duration: 1200000, buffAttrs: { flee: 20 } },
    { id: 'boxOfSunlight', icon: '📦', name: '日光之箱', desc: '20分鐘內 命中率(Hit) +20', cost: 10000, type: 'buff', duration: 1200000, buffAttrs: { hit: 20 } },

    // [元素抵抗藥水]
    { id: 'fireResist', icon: '🔥', name: '火屬性抵抗藥', desc: '20分鐘內減少火屬性傷害 (暫代DEF+10%)', cost: 5000, type: 'buff', duration: 1200000, buffAttrs: { defPct: 10 } },
    { id: 'waterResist', icon: '💧', name: '水屬性抵抗藥', desc: '20分鐘內減少水屬性傷害 (暫代MDEF+10%)', cost: 5000, type: 'buff', duration: 1200000, buffAttrs: { mdefPct: 10 } },
    { id: 'earthResist', icon: '🪨', name: '地屬性抵抗藥', desc: '20分鐘內減少地屬性傷害 (暫代MaxHP+5%)', cost: 5000, type: 'buff', duration: 1200000, buffAttrs: { maxHpPct: 5 } },
    { id: 'windResist', icon: '🌪️', name: '風屬性抵抗藥', desc: '20分鐘內減少風屬性傷害 (暫代Flee+10)', cost: 5000, type: 'buff', duration: 1200000, buffAttrs: { flee: 10 } },

    // [元素附加卷軸 (賦予武器屬性)]
    { id: 'fireConverter', icon: '📜', name: '火屬性附加卷軸', desc: '20分鐘內攻擊轉為火屬性 (暫代ATK+10%)', cost: 8000, type: 'buff', duration: 1200000, buffAttrs: { atkPct: 10 } },
    { id: 'waterConverter', icon: '📜', name: '水屬性附加卷軸', desc: '20分鐘內攻擊轉為水屬性 (暫代ATK+10%)', cost: 8000, type: 'buff', duration: 1200000, buffAttrs: { atkPct: 10 } },
    { id: 'earthConverter', icon: '📜', name: '地屬性附加卷軸', desc: '20分鐘內攻擊轉為地屬性 (暫代ATK+10%)', cost: 8000, type: 'buff', duration: 1200000, buffAttrs: { atkPct: 10 } },
    { id: 'windConverter', icon: '📜', name: '風屬性附加卷軸', desc: '20分鐘內攻擊轉為風屬性 (暫代ATK+10%)', cost: 8000, type: 'buff', duration: 1200000, buffAttrs: { atkPct: 10 } },

    // [RO 經典料理 - Level 5 (持續20分鐘)]
    { id: 'friedMonkeyTail', icon: '🍲', name: '炒猴子尾巴 (Lv.5)', desc: '20分鐘內 STR +5', cost: 8000, type: 'buff', duration: 1200000, buffAttrs: { str: 5 } },
    { id: 'tentacleCheese', icon: '🧀', name: '觸角起司 (Lv.5)', desc: '20分鐘內 AGI +5', cost: 8000, type: 'buff', duration: 1200000, buffAttrs: { agi: 5 } },
    { id: 'friedSweetPotato', icon: '🍠', name: '炸蕃薯 (Lv.5)', desc: '20分鐘內 VIT +5', cost: 8000, type: 'buff', duration: 1200000, buffAttrs: { vit: 5 } },
    { id: 'grapeExtract', icon: '🍹', name: '葡萄果汁萃取液 (Lv.5)', desc: '20分鐘內 INT +5', cost: 8000, type: 'buff', duration: 1200000, buffAttrs: { int: 5 } },
    { id: 'fruitMix', icon: '🍧', name: '綜合水果冰 (Lv.5)', desc: '20分鐘內 DEX +5', cost: 8000, type: 'buff', duration: 1200000, buffAttrs: { dex: 5 } },
    { id: 'friedEgg', icon: '🍳', name: '煎蛋 (Lv.5)', desc: '20分鐘內 LUK +5', cost: 8000, type: 'buff', duration: 1200000, buffAttrs: { luk: 5 } },

    // [RO 經典料理 - Level 10 (持續30分鐘)]
    { id: 'bearFoots', icon: '🍖', name: '熊掌烤肉 (Lv.10)', desc: '30分鐘內 STR +10', cost: 25000, type: 'buff', duration: 1800000, buffAttrs: { str: 10 } },
    { id: 'broiledTentacle', icon: '🍢', name: '烤觸角 (Lv.10)', desc: '30分鐘內 AGI +10', cost: 25000, type: 'buff', duration: 1800000, buffAttrs: { agi: 10 } },
    { id: 'marinatedMushroom', icon: '🍄', name: '涼拌蘑菇 (Lv.10)', desc: '30分鐘內 VIT +10', cost: 25000, type: 'buff', duration: 1800000, buffAttrs: { vit: 10 } },
    { id: 'royalJellyTea', icon: '🫖', name: '蜂蜜花草茶 (Lv.10)', desc: '30分鐘內 INT +10', cost: 25000, type: 'buff', duration: 1800000, buffAttrs: { int: 10 } },
    { id: 'hwergelmirTonic', icon: '🥂', name: '赫瓦格密爾之酒 (Lv.10)', desc: '30分鐘內 DEX +10', cost: 25000, type: 'buff', duration: 1800000, buffAttrs: { dex: 10 } },
    { id: 'nineTailsTails', icon: '🍲', name: '九尾狐尾巴料理 (Lv.10)', desc: '30分鐘內 LUK +10', cost: 25000, type: 'buff', duration: 1800000, buffAttrs: { luk: 10 } },

    // ================= 商城道具 (高級 Zeny 區) =================
    
    // [經驗與掉寶加成]
    { id: 'expBoost', icon: '📚', name: '戰鬥教範', desc: '60分鐘內 Base 經驗值 +50%', cost: 15000, type: 'buff', duration: 3600000, expMulti: 1.5 },
    { id: 'expBoostPremium', icon: '📖', name: '高級戰鬥教範', desc: '60分鐘內 Base 經驗值 +100%', cost: 40000, type: 'buff', duration: 3600000, expMulti: 2.0 },
    { id: 'jobExpBoost', icon: '🎓', name: '職業教範', desc: '60分鐘內 Job 經驗值 +50%', cost: 15000, type: 'buff', duration: 3600000, jobExpMulti: 1.5 },
    { id: 'jobExpBoostPremium', icon: '🎓', name: '高級職業教範', desc: '60分鐘內 Job 經驗值 +100%', cost: 35000, type: 'buff', duration: 3600000, jobExpMulti: 2.0 },
    { id: 'dropBoost', icon: '🍬', name: '掉寶糖果', desc: '60分鐘內裝備與道具掉落率 +50%', cost: 15000, type: 'buff', duration: 3600000, dropMulti: 1.5 },
    { id: 'dropBoostPremium', icon: '🍭', name: '掉寶率倍增糖', desc: '60分鐘內裝備與道具掉落率 +100%', cost: 40000, type: 'buff', duration: 3600000, dropMulti: 2.0 },
    
    // [長效生存增益 (大生命/大魔力)]
    { id: 'hpIncreasePotion', icon: '❤️‍🔥', name: '大生命水', desc: '1小時內 MaxHP 提升 20%，每秒微幅恢復', cost: 45000, type: 'buff', duration: 3600000, buffAttrs: { maxHpPct: 20 } },
    { id: 'spIncreasePotion', icon: '💙', name: '大魔力水', desc: '1小時內 MaxSP 提升 20%，每秒微幅恢復', cost: 45000, type: 'buff', duration: 3600000, buffAttrs: { maxSpPct: 20 } },
    { id: 'defPotion', icon: '🛡️', name: '防禦藥水', desc: '1小時內 物理防禦力提升 20%', cost: 35000, type: 'buff', duration: 3600000, buffAttrs: { defPct: 20 } },
    { id: 'mdefPotion', icon: '🔮', name: '魔防藥水', desc: '1小時內 魔法防禦力提升 20%', cost: 35000, type: 'buff', duration: 3600000, buffAttrs: { mdefPct: 20 } },
    { id: 'guyakPudding', icon: '🍮', name: '九夜葛布丁', desc: '1小時內 移動速度與攻速大幅提升 (ASPD+15%)', cost: 50000, type: 'buff', duration: 3600000, buffAttrs: { aspdBonusPct: 15, flee: 30 } },

    // [自動化輔助與便利服務]
    { id: 'autoHp', icon: '❤️', name: '生命保險 (初級)', desc: '1小時內低於50%自動喝紅水', cost: 10000, type: 'buff', duration: 3600000, autoHpThreshold: 0.5 },
    { id: 'autoHpPremium', icon: '💖', name: '生命保險 (高級)', desc: '1小時內低於80%自動喝高階藥水', cost: 30000, type: 'buff', duration: 3600000, autoHpThreshold: 0.8 },
    { id: 'autoSp', icon: '💧', name: '魔力保險 (初級)', desc: '1小時內低於50%自動喝藍水', cost: 10000, type: 'buff', duration: 3600000, autoSpThreshold: 0.5 },
    { id: 'autoSpPremium', icon: '💦', name: '魔力保險 (高級)', desc: '1小時內低於80%自動喝高階藥水', cost: 30000, type: 'buff', duration: 3600000, autoSpThreshold: 0.8 },
    { id: 'infinityFlyWing', icon: '♾️', name: '無限蒼蠅翅膀', desc: '2小時內可無限次瞬間換怪', cost: 150000, type: 'buff', duration: 7200000, special: 'infiniteFlyWing' },
    
    // [商城能力增幅卷軸 - 1小時長效]
    { id: 'allStatScroll', icon: '🌟', name: '全能增幅卷軸 (祝福)', desc: '1小時內 全素質 +15', cost: 150000, type: 'buff', duration: 3600000, buffAttrs: { allStat: 15 } },
    { id: 'atkScroll', icon: '⚔️', name: '戰神降臨卷軸', desc: '1小時內 物理攻擊 +20%', cost: 80000, type: 'buff', duration: 3600000, buffAttrs: { atkPct: 20 } },
    { id: 'matkScroll', icon: '🪄', name: '魔神降臨卷軸', desc: '1小時內 魔法攻擊 +20%', cost: 80000, type: 'buff', duration: 3600000, buffAttrs: { matkBonusPct: 20 } },
    { id: 'defScroll', icon: '🏰', name: '守護之盾卷軸', desc: '1小時內 防禦力 +30%', cost: 50000, type: 'buff', duration: 3600000, buffAttrs: { defPct: 30 } },
    { id: 'critScroll', icon: '💥', name: '致命一擊卷軸', desc: '1小時內 暴擊機率 +20', cost: 60000, type: 'buff', duration: 3600000, buffAttrs: { crit: 20 } },
    { id: 'fleeScroll', icon: '💨', name: '風之步卷軸', desc: '1小時內 迴避率 +50', cost: 60000, type: 'buff', duration: 3600000, buffAttrs: { flee: 50 } },
    { id: 'hitScroll', icon: '🦅', name: '鷹眼卷軸', desc: '1小時內 命中率 +50', cost: 60000, type: 'buff', duration: 3600000, buffAttrs: { hit: 50 } },
    { id: 'tyrBlessing', icon: '⚡', name: '提爾的祝福', desc: '1小時內 ATK/MATK +50，命中與迴避 +30', cost: 200000, type: 'buff', duration: 3600000, buffAttrs: { atk: 50, matk: 50, hit: 30, flee: 30 } },

    // [特殊系統道具與特權]
    { id: 'maxWeightScroll', icon: '🎒', name: '健身房隨身包', desc: '永久擴充 10 格背包空間上限', cost: 250000, type: 'consumable', special: 'addInventory' },
    { id: 'bossRadar', icon: '📡', name: '凸透鏡 (首領雷達)', desc: '1小時內 遭遇精英怪與王機率大幅提升', cost: 100000, type: 'buff', duration: 3600000, buffAttrs: { bossEncounterMulti: 3.0 } },
    { id: 'tokenOfSiegfried', icon: '🏅', name: '齊格弗里德之證', desc: '角色死亡時可原地滿血滿魔復活 (免死金牌)', cost: 120000, type: 'consumable', special: 'autoResurrect' },
    { id: 'safeguardShield', icon: '🛡️', name: '防爆卷軸', desc: '鐵匠精煉失敗時，保護裝備不爆裂 (消耗品)', cost: 300000, type: 'consumable', special: 'protectUpgrade' },
    { id: 'enrichElunium', icon: '💎', name: '濃縮鋁', desc: '精煉防具時提升成功機率', cost: 150000, type: 'consumable', special: 'upgradeArmorBonus' },
    { id: 'enrichOridecon', icon: '💠', name: '濃縮神之金屬', desc: '精煉武器時提升成功機率', cost: 150000, type: 'consumable', special: 'upgradeWeaponBonus' },
    { id: 'vipCard', icon: '👑', name: '尊榮 VIP 特權', desc: '24小時內 經驗/掉寶加倍、全素質+20', cost: 999999, type: 'buff', duration: 86400000, expMulti: 2.0, dropMulti: 2.0, buffAttrs: { allStat: 20 } },
  ]
};

// ==========================================
// 1. 職業樹與素質成長資料庫 (包含 2-1 與 2-2 轉)
// ==========================================
export const RO_DATABASE_CLASSES = {
  CLASSES: {
    // 【初心者】
    novice: { name: '初心者', icon: '🥚', primaryStat: 'str', hpMulti: 1.0, spMulti: 1.0, atkMulti: 1.0, defMulti: 1.0, isJob2: false, maxJob: 10, reqBaseLv: 1, reqJobLv: 1, advClasses: ['swordman', 'magician', 'thief', 'acolyte', 'archer', 'merchant'] },
    
    // 【一轉職業】(1st Job) - 條件: 初心者 Job 10
    swordman: { name: '劍士', icon: '🛡️', primaryStat: 'str', hpMulti: 1.5, spMulti: 0.8, atkMulti: 1.0, defMulti: 1.2, isJob2: false, maxJob: 50, reqBaseLv: 1, reqJobLv: 10, advClasses: ['knight', 'crusader'] },
    magician: { name: '魔法師', icon: '🔮', primaryStat: 'int', hpMulti: 0.8, spMulti: 2.0, atkMulti: 1.5, defMulti: 0.7, isJob2: false, maxJob: 50, reqBaseLv: 1, reqJobLv: 10, advClasses: ['wizard', 'sage'] },
    thief: { name: '盜賊', icon: '🗡️', primaryStat: 'agi', hpMulti: 1.0, spMulti: 1.0, atkMulti: 1.2, defMulti: 0.9, isJob2: false, maxJob: 50, reqBaseLv: 1, reqJobLv: 10, advClasses: ['assassin', 'rogue'] },
    acolyte: { name: '服事', icon: '✨', primaryStat: 'int', hpMulti: 1.2, spMulti: 1.5, atkMulti: 0.9, defMulti: 1.1, isJob2: false, maxJob: 50, reqBaseLv: 1, reqJobLv: 10, advClasses: ['priest', 'monk'] },
    archer: { name: '弓箭手', icon: '🏹', primaryStat: 'dex', hpMulti: 0.9, spMulti: 1.0, atkMulti: 1.3, defMulti: 0.8, isJob2: false, maxJob: 50, reqBaseLv: 1, reqJobLv: 10, advClasses: ['hunter', 'bard'] },
    merchant: { name: '商人', icon: '💰', primaryStat: 'str', hpMulti: 1.3, spMulti: 0.8, atkMulti: 1.1, defMulti: 1.1, isJob2: false, maxJob: 50, reqBaseLv: 1, reqJobLv: 10, advClasses: ['blacksmith', 'alchemist'] },
    
    // 【二轉 2-1】 - 條件: 一轉 Job 40
    knight: { name: '騎士', icon: '🏇', primaryStat: 'str', hpMulti: 2.5, spMulti: 0.8, atkMulti: 1.3, defMulti: 1.5, isJob2: true, maxJob: 70, reqBaseLv: 1, reqJobLv: 40, advClasses: ['rune_knight'] },
    wizard: { name: '巫師', icon: '🧙', primaryStat: 'int', hpMulti: 1.0, spMulti: 2.5, atkMulti: 2.0, defMulti: 0.8, isJob2: true, maxJob: 70, reqBaseLv: 1, reqJobLv: 40, advClasses: ['warlock'] },
    assassin: { name: '十字刺客', icon: '🥷', primaryStat: 'agi', hpMulti: 1.5, spMulti: 1.0, atkMulti: 1.5, defMulti: 1.0, isJob2: true, maxJob: 70, reqBaseLv: 1, reqJobLv: 40, advClasses: ['guillotine_cross'] },
    priest: { name: '神官', icon: '⛪', primaryStat: 'int', hpMulti: 1.5, spMulti: 2.0, atkMulti: 1.0, defMulti: 1.3, isJob2: true, maxJob: 70, reqBaseLv: 1, reqJobLv: 40, advClasses: ['arch_bishop'] },
    hunter: { name: '神射手', icon: '🦅', primaryStat: 'dex', hpMulti: 1.2, spMulti: 1.2, atkMulti: 1.6, defMulti: 0.9, isJob2: true, maxJob: 70, reqBaseLv: 1, reqJobLv: 40, advClasses: ['ranger'] },
    blacksmith: { name: '神工匠', icon: '🔨', primaryStat: 'str', hpMulti: 1.8, spMulti: 1.0, atkMulti: 1.3, defMulti: 1.2, isJob2: true, maxJob: 70, reqBaseLv: 1, reqJobLv: 40, advClasses: ['mechanic'] },
    
    // 【二轉 2-2】 - 條件: 一轉 Job 40
    crusader: { name: '十字軍', icon: '🛡️', primaryStat: 'vit', hpMulti: 2.8, spMulti: 1.2, atkMulti: 1.1, defMulti: 1.8, isJob2: true, maxJob: 70, reqBaseLv: 1, reqJobLv: 40, advClasses: ['royal_guard'] },
    sage: { name: '智者', icon: '📖', primaryStat: 'int', hpMulti: 1.2, spMulti: 2.2, atkMulti: 1.8, defMulti: 1.0, isJob2: true, maxJob: 70, reqBaseLv: 1, reqJobLv: 40, advClasses: ['sorcerer'] },
    rogue: { name: '神行太保', icon: '🎭', primaryStat: 'agi', hpMulti: 1.6, spMulti: 1.2, atkMulti: 1.4, defMulti: 1.1, isJob2: true, maxJob: 70, reqBaseLv: 1, reqJobLv: 40, advClasses: ['shadow_chaser'] },
    monk: { name: '武術宗師', icon: '👊', primaryStat: 'str', hpMulti: 1.6, spMulti: 1.5, atkMulti: 1.8, defMulti: 1.2, isJob2: true, maxJob: 70, reqBaseLv: 1, reqJobLv: 40, advClasses: ['sura'] },
    bard: { name: '吟遊詩人', icon: '🎸', primaryStat: 'dex', hpMulti: 1.3, spMulti: 1.5, atkMulti: 1.4, defMulti: 1.0, isJob2: true, maxJob: 70, reqBaseLv: 1, reqJobLv: 40, advClasses: ['minstrel_wanderer'] },
    alchemist: { name: '鍊金術師', icon: '🧪', primaryStat: 'str', hpMulti: 1.7, spMulti: 1.2, atkMulti: 1.2, defMulti: 1.3, isJob2: true, maxJob: 70, reqBaseLv: 1, reqJobLv: 40, advClasses: ['genetic'] },

    // 【三轉】 - 條件: 二轉 Base 90, Job 50
    rune_knight: { name: '盧恩騎士', icon: '🐉', primaryStat: 'str', hpMulti: 3.5, spMulti: 1.0, atkMulti: 1.5, defMulti: 1.8, isJob2: true, maxJob: 70, reqBaseLv: 90, reqJobLv: 50, advClasses: ['dragon_knight'] },
    warlock: { name: '咒術士', icon: '☄️', primaryStat: 'int', hpMulti: 1.5, spMulti: 3.5, atkMulti: 2.5, defMulti: 1.0, isJob2: true, maxJob: 70, reqBaseLv: 90, reqJobLv: 50, advClasses: ['arch_mage'] },
    guillotine_cross: { name: '十字斬首者', icon: '🔪', primaryStat: 'agi', hpMulti: 2.0, spMulti: 1.2, atkMulti: 2.0, defMulti: 1.2, isJob2: true, maxJob: 70, reqBaseLv: 90, reqJobLv: 50, advClasses: ['shadow_cross'] },
    arch_bishop: { name: '大主教', icon: '✝️', primaryStat: 'int', hpMulti: 2.0, spMulti: 2.8, atkMulti: 1.2, defMulti: 1.5, isJob2: true, maxJob: 70, reqBaseLv: 90, reqJobLv: 50, advClasses: ['cardinal'] },
    ranger: { name: '遊俠', icon: '🐺', primaryStat: 'dex', hpMulti: 1.8, spMulti: 1.5, atkMulti: 2.2, defMulti: 1.0, isJob2: true, maxJob: 70, reqBaseLv: 90, reqJobLv: 50, advClasses: ['windhawk'] },
    mechanic: { name: '機械工匠', icon: '🤖', primaryStat: 'str', hpMulti: 2.8, spMulti: 1.5, atkMulti: 1.8, defMulti: 1.8, isJob2: true, maxJob: 70, reqBaseLv: 90, reqJobLv: 50, advClasses: ['meister'] },
    royal_guard: { name: '皇家禁衛隊', icon: '🛡️', primaryStat: 'vit', hpMulti: 4.0, spMulti: 1.5, atkMulti: 1.4, defMulti: 2.5, isJob2: true, maxJob: 70, reqBaseLv: 90, reqJobLv: 50, advClasses: ['imperial_guard'] },
    sorcerer: { name: '妖術師', icon: '🌌', primaryStat: 'int', hpMulti: 1.8, spMulti: 3.0, atkMulti: 2.2, defMulti: 1.2, isJob2: true, maxJob: 70, reqBaseLv: 90, reqJobLv: 50, advClasses: ['elemental_master'] },
    shadow_chaser: { name: '魅影追蹤者', icon: '🎭', primaryStat: 'agi', hpMulti: 2.2, spMulti: 1.5, atkMulti: 1.8, defMulti: 1.5, isJob2: true, maxJob: 70, reqBaseLv: 90, reqJobLv: 50, advClasses: ['abyss_chaser'] },
    sura: { name: '修羅', icon: '🔥', primaryStat: 'str', hpMulti: 2.5, spMulti: 2.0, atkMulti: 2.5, defMulti: 1.5, isJob2: true, maxJob: 70, reqBaseLv: 90, reqJobLv: 50, advClasses: ['inquisitor'] },
    minstrel_wanderer: { name: '宮廷樂師', icon: '🎻', primaryStat: 'dex', hpMulti: 2.0, spMulti: 2.2, atkMulti: 1.8, defMulti: 1.2, isJob2: true, maxJob: 70, reqBaseLv: 90, reqJobLv: 50, advClasses: ['troubadour_trouvere'] },
    genetic: { name: '基因學者', icon: '🧬', primaryStat: 'str', hpMulti: 2.4, spMulti: 1.8, atkMulti: 1.6, defMulti: 1.6, isJob2: true, maxJob: 70, reqBaseLv: 90, reqJobLv: 50, advClasses: ['biolo'] },

    // 【四轉】 - 條件: 三轉 Base 200, Job 70
    dragon_knight: { name: '龍騎士', icon: '🐲', primaryStat: 'str', hpMulti: 5.0, spMulti: 1.5, atkMulti: 2.5, defMulti: 2.5, isJob2: true, maxJob: 60, reqBaseLv: 200, reqJobLv: 70, advClasses: [] },
    warlock: { name: '禁咒魔導士', icon: '☄️', primaryStat: 'int', hpMulti: 2.5, spMulti: 5.0, atkMulti: 4.0, defMulti: 1.5, isJob2: true, maxJob: 60, reqBaseLv: 200, reqJobLv: 70, advClasses: [] },
    shadow_cross: { name: '十字影武', icon: '💀', primaryStat: 'agi', hpMulti: 3.0, spMulti: 1.8, atkMulti: 3.5, defMulti: 1.8, isJob2: true, maxJob: 60, reqBaseLv: 200, reqJobLv: 70, advClasses: [] },
    cardinal: { name: '樞機主教', icon: '⚖️', primaryStat: 'int', hpMulti: 3.0, spMulti: 4.0, atkMulti: 1.8, defMulti: 2.0, isJob2: true, maxJob: 60, reqBaseLv: 200, reqJobLv: 70, advClasses: [] },
    windhawk: { name: '風鷹狩獵者', icon: '🌪️', primaryStat: 'dex', hpMulti: 2.8, spMulti: 2.0, atkMulti: 3.8, defMulti: 1.5, isJob2: true, maxJob: 60, reqBaseLv: 200, reqJobLv: 70, advClasses: [] },
    meister: { name: '機甲神匠', icon: '⚙️', primaryStat: 'str', hpMulti: 4.0, spMulti: 2.2, atkMulti: 3.0, defMulti: 2.5, isJob2: true, maxJob: 60, reqBaseLv: 200, reqJobLv: 70, advClasses: [] },
    imperial_guard: { name: '帝國聖衛軍', icon: '🏰', primaryStat: 'vit', hpMulti: 6.0, spMulti: 2.0, atkMulti: 2.2, defMulti: 3.5, isJob2: true, maxJob: 60, reqBaseLv: 200, reqJobLv: 70, advClasses: [] },
    elemental_master: { name: '元素支配者', icon: '🌌', primaryStat: 'int', hpMulti: 2.8, spMulti: 4.5, atkMulti: 3.5, defMulti: 1.8, isJob2: true, maxJob: 60, reqBaseLv: 200, reqJobLv: 70, advClasses: [] },
    abyss_chaser: { name: '深淵追跡者', icon: '🌑', primaryStat: 'agi', hpMulti: 3.5, spMulti: 2.2, atkMulti: 3.0, defMulti: 2.2, isJob2: true, maxJob: 60, reqBaseLv: 200, reqJobLv: 70, advClasses: [] },
    inquisitor: { name: '審判者', icon: '🔥', primaryStat: 'str', hpMulti: 4.0, spMulti: 2.8, atkMulti: 4.0, defMulti: 2.2, isJob2: true, maxJob: 60, reqBaseLv: 200, reqJobLv: 70, advClasses: [] },
    troubadour_trouvere: { name: '樂之絃音', icon: '🎼', primaryStat: 'dex', hpMulti: 3.0, spMulti: 3.0, atkMulti: 2.8, defMulti: 1.8, isJob2: true, maxJob: 60, reqBaseLv: 200, reqJobLv: 70, advClasses: [] },
    biolo: { name: '生命締造者', icon: '🧬', primaryStat: 'str', hpMulti: 3.5, spMulti: 2.5, atkMulti: 2.5, defMulti: 2.5, isJob2: true, maxJob: 60, reqBaseLv: 200, reqJobLv: 70, advClasses: [] },
  }
};