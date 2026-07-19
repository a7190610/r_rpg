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
    // 修正: 將四轉 warlock 改為正確的 arch_mage 以對應三轉的 advClasses
    arch_mage: { name: '禁咒魔導士', icon: '☄️', primaryStat: 'int', hpMulti: 2.5, spMulti: 5.0, atkMulti: 4.0, defMulti: 1.5, isJob2: true, maxJob: 60, reqBaseLv: 200, reqJobLv: 70, advClasses: [] },
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
}; // 修正: 補上結尾的分號與大括號，確實閉合 export const RO_DATABASE_CLASSES