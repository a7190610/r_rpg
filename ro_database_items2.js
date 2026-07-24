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
  ]
};
