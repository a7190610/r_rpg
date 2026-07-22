export const RO_DATABASE_ITEMS3 = {
  consumables: [
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
