export const RO_DATABASE_SYSTEM = {
  // ==========================================
  // 1. 遊戲基礎設定與防呆上限 (唯一設定處)
  // ==========================================
  SETTINGS: {
    MAX_LEVEL: 275,
    MAX_JOB_LEVEL: 70,
    MAX_STATS: { 
      base: 99,   // 一轉、二轉最高素質
      job3: 130,  // 三轉最高素質
      job4: 130   // 四轉最高素質
    },
    INVENTORY_SLOTS: 100, // 初始背包格數
    EQUIPMENT_SLOTS: ['helm', 'armor', 'weapon', 'shield', 'garment', 'shoes', 'acc1', 'acc2'],
    
    RARITY: {
      common:   { name: '普通', color: 'text-gray-300',  bg: 'bg-gray-500/20',   multi: 1 },
      uncommon: { name: '優秀', color: 'text-green-400', bg: 'bg-green-500/20',  multi: 1.5 },
      rare:     { name: '稀有', color: 'text-blue-400',  bg: 'bg-blue-500/20',   multi: 2.0 },
      epic:     { name: '史詩', color: 'text-purple-400',bg: 'bg-purple-500/20', multi: 3.0 },
      legend:   { name: '傳說', color: 'text-orange-400',bg: 'bg-orange-500/20', multi: 5.0 }
    }
  },

  // ==========================================
  // 2. 系統統一運算核心 (單一真理來源)
  // ==========================================
  FORMULAS: {
    // ---------------- [經驗與升級曲線] ----------------
    // 狀態升級花費: (當前數值-1)/10 取整 + 2
    getStatCost: (currentStat) => Math.floor((currentStat - 1) / 10) + 2,

    // Base 經驗值需求公式
    getBaseExpReq: (lv) => {
      if (lv <= 0) return 0;
      return Math.floor(Math.pow(lv, 3) * 2.5 + lv * 150 + 100);
    },
    
    // Job 經驗值需求公式 (根據職業階級 jobTier: 0~4 給予不同曲線)
    getJobExpReq: (jobLv, jobTier = 1) => {
      if (jobLv <= 0) return 0;
      
      // 容錯：若傳入的是布林值(isJob2)，則自動轉換
      let tier = typeof jobTier === 'boolean' ? (jobTier ? 2 : 1) : jobTier;

      switch(tier) {
        case 0: return Math.floor(25 * jobLv * jobLv + 25 * jobLv + 50); // 初心者
        case 1: return Math.floor(Math.pow(jobLv, 2.8) * 2 + jobLv * 100); // 一轉
        case 2: return Math.floor(Math.pow(jobLv, 3.2) * 3 + jobLv * 300); // 二/進階二轉
        case 3: return Math.floor(Math.pow(jobLv, 3.5) * 5 + jobLv * 500); // 三轉
        case 4: return Math.floor(Math.pow(jobLv, 3.8) * 8 + jobLv * 1000); // 四轉
        default: return Math.floor(Math.pow(jobLv, 2.8) * 2 + jobLv * 100);
      }
    },

    // ---------------- [戰鬥素質統一公式] ----------------
    calculateMaxHP: (lv, hpMulti, attrs) => {
      const vit = attrs.vit || 1;
      const baseCurve = lv * 50 + 100;
      return Math.floor(baseCurve * hpMulti * (1 + vit * 0.01));
    },
    calculateMaxSP: (lv, spMulti, attrs) => {
      const int = attrs.int || 1;
      const baseCurve = lv * 10 + 20;
      return Math.floor(baseCurve * spMulti * (1 + int * 0.01));
    },
    calculateATK: (attrs, lv, traits = {}) => {
      const str = attrs.str || 1; const dex = attrs.dex || 1; const luk = attrs.luk || 1;
      const pow = traits.pow || 0;
      return Math.floor(lv + str + (dex / 5) + (luk / 3) + (pow * 5));
    },
    calculateMATK: (attrs, lv, traits = {}) => {
      const int = attrs.int || 1; const dex = attrs.dex || 1;
      const spl = traits.spl || 0;
      return Math.floor(lv + int + (dex / 5) + (spl * 5));
    },
    calculateDEF: (attrs, lv, traits = {}) => {
      const vit = attrs.vit || 1; const agi = attrs.agi || 1;
      const sta = traits.sta || 0;
      return Math.floor((lv / 2) + (vit / 2) + (agi / 5) + (sta * 5));
    },
    calculateMDEF: (attrs, lv, traits = {}) => {
      const int = attrs.int || 1; const vit = attrs.vit || 1;
      const wis = traits.wis || 0;
      return Math.floor(int + (lv / 4) + (vit / 5) + (wis * 5));
    },
    calculateHIT: (attrs, lv, traits = {}) => {
      const dex = attrs.dex || 1; const luk = attrs.luk || 1;
      const con = traits.con || 0;
      return Math.floor(lv + dex + (luk / 3) + (con * 2));
    },
    calculateFLEE: (attrs, lv, traits = {}) => {
      const agi = attrs.agi || 1; const luk = attrs.luk || 1;
      const con = traits.con || 0;
      return Math.floor(lv + agi + (luk / 5) + (con * 2));
    },
    calculateCRIT: (attrs) => {
      const luk = attrs.luk || 1;
      return Math.floor(1 + (luk * 0.3));
    },
    calculateASPD: (attrs, weaponBaseSpeed = 150) => {
      const agi = attrs.agi || 1; const dex = attrs.dex || 1;
      let aspd = weaponBaseSpeed + Math.sqrt(agi * 10 + dex);
      return Math.min(193, Math.floor(aspd)); 
    },
    calculateWeight: (attrs) => {
      const str = attrs.str || 1;
      return 2000 + (str * 30);
    },

    // ---------------- [武器與屬性機制] ----------------
    checkWeaponRequirement: (weaponType, requiredTypes) => {
      if (!requiredTypes || requiredTypes === 'all') return true;
      const wType = weaponType || 'barehand'; 
      if (typeof requiredTypes === 'string') return wType === requiredTypes;
      if (Array.isArray(requiredTypes)) return requiredTypes.includes(wType);
      return false;
    },
    calculateSizePenalty: (weaponType, monsterSize, sizeModTable) => {
       const wType = weaponType || 'barehand';
       const mSize = monsterSize || 'medium'; 
       if (!sizeModTable || !sizeModTable[wType]) return 1.0;
       return sizeModTable[wType][mSize] || 1.0;
    },
    calculateElementMultiplier: (atkElement, defElement, elementModTable) => {
       const aEle = atkElement || 'neutral';
       const dEle = defElement || 'neutral';
       if (!elementModTable || !elementModTable[aEle]) return 1.0;
       return elementModTable[aEle][dEle] || 1.0;
    },

    // ---------------- [進階技能傷害結算器] ----------------
    /**
     * @param {number} rawDamage - 經過 (ATK * 技能倍率) 算出來的原始傷害
     * @param {Object} attackerStats - 攻擊方的面板素質 (包含目前的 HP/SP/MaxHP等)
     * @param {Object} targetStats - 被攻擊方的面板素質 (包含 DEF/MDEF 等)
     * @param {Object} skillExtras - 技能資料庫中經過 getSkillStats() 解出的純數值 attr 物件
     * @returns {number} 最終判定後的實際傷害值
     */
    calculateFinalSkillDamage: (rawDamage, attackerStats, targetStats, skillExtras) => {
      const extras = skillExtras || {};
      let finalDamage = rawDamage;

      // 1. 處理「無視防禦」
      let effectiveDef = targetStats.def || 0;
      if (extras.ignoreDef) {
        effectiveDef = 0;
      } else if (extras.ignoreDefPct) {
        effectiveDef = Math.floor(effectiveDef * (1 - (extras.ignoreDefPct / 100)));
      }

      // 2. 扣除防禦減傷
      finalDamage = Math.max(1, finalDamage - effectiveDef);

      // 3. 處理「防禦力轉換傷害」(例如：武僧-浸透勁 defScaling)
      if (extras.defScaling) {
        finalDamage += Math.floor((targetStats.def || 0) * 1.5);
      }

      // 4. 處理「自身血量/魔力上限增傷」(例如：龍騎士-龍之吐息、修羅-虎砲)
      if (extras.hpSpScalingDmg) {
        const currentHp = attackerStats.hp || 1;
        const maxHp = attackerStats.maxHp || 1;
        const maxSp = attackerStats.maxSp || 1;
        finalDamage += Math.floor((currentHp / maxHp) * maxSp * 2.5);
      }

      // 5. 處理「特定素質增傷」(例如：基因學者-手推車加農砲 scalingStats: ['int'])
      if (extras.scalingStats && Array.isArray(extras.scalingStats)) {
        extras.scalingStats.forEach(stat => {
           const statValue = attackerStats[stat] || 0;
           finalDamage += (statValue * 5); 
        });
      }

      // 保底傷害 1
      return Math.max(1, Math.floor(finalDamage));
    }
  },

  // ==========================================
  // 3. 靜態相剋對照表
  // ==========================================
  DEFAULT_SIZE_PENALTY: {
    'barehand': { small: 1.0, medium: 1.0, large: 1.0 },
    'dagger': { small: 1.0, medium: 0.75, large: 0.5 },
    'sword': { small: 0.75, medium: 1.0, large: 0.75 },
    'two_handed_sword': { small: 0.75, medium: 0.75, large: 1.0 },
    'spear': { small: 0.75, medium: 0.75, large: 1.0 },
    'axe': { small: 0.5, medium: 0.75, large: 1.0 },
    'mace': { small: 0.75, medium: 1.0, large: 1.0 },
    'rod': { small: 1.0, medium: 1.0, large: 1.0 },
    'bow': { small: 1.0, medium: 1.0, large: 0.75 },
    'katar': { small: 0.75, medium: 1.0, large: 0.75 }
  },

  DEFAULT_ELEMENT_MOD: {
    'neutral': { neutral: 1.0, water: 1.0, earth: 1.0, fire: 1.0, wind: 1.0, poison: 1.0, holy: 1.0, shadow: 1.0, ghost: 0.7, undead: 1.0 },
    'water': { neutral: 1.0, water: 0.25, earth: 1.0, fire: 1.5, wind: 0.5, poison: 1.0, holy: 1.0, shadow: 1.0, ghost: 1.0, undead: 1.0 },
    'earth': { neutral: 1.0, water: 0.5, earth: 0.25, fire: 1.0, wind: 1.5, poison: 1.0, holy: 1.0, shadow: 1.0, ghost: 1.0, undead: 1.0 },
    'fire': { neutral: 1.0, water: 0.5, earth: 1.5, fire: 0.25, wind: 1.0, poison: 1.0, holy: 1.0, shadow: 1.0, ghost: 1.0, undead: 1.5 },
    'wind': { neutral: 1.0, water: 1.5, earth: 0.5, fire: 1.0, wind: 0.25, poison: 1.0, holy: 1.0, shadow: 1.0, ghost: 1.0, undead: 1.0 },
    'poison': { neutral: 1.0, water: 1.0, earth: 1.0, fire: 1.0, wind: 1.0, poison: 0.0, holy: 0.5, shadow: 0.5, ghost: 1.0, undead: 0.5 },
    'holy': { neutral: 1.0, water: 1.0, earth: 1.0, fire: 1.0, wind: 1.0, poison: 1.0, holy: 0.0, shadow: 1.5, ghost: 1.0, undead: 2.0 },
    'shadow': { neutral: 1.0, water: 1.0, earth: 1.0, fire: 1.0, wind: 1.0, poison: 1.0, holy: 1.5, shadow: 0.0, ghost: 1.0, undead: -0.5 },
    'ghost': { neutral: 0.5, water: 1.0, earth: 1.0, fire: 1.0, wind: 1.0, poison: 1.0, holy: 1.0, shadow: 1.0, ghost: 1.5, undead: 1.0 }
  }
};
