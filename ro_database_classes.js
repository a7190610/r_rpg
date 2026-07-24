export const RO_DATABASE_CLASSES = {
  // 欄位定義
  keys: [
    'c_id',                 'c_name',         'c_icon', 'c_primaryStat', 'c_hpMulti', 'c_spMulti', 'c_atkMulti', 'c_defMulti', 'c_isJob2', 'c_maxJob', 'c_reqBaseLv', 'c_reqJobLv', 'c_advClasses'
  ],

  // 資料陣列對齊
  data: [
    // 【初心者】
    ['novice',              '初心者',       '🥚', 'str', 1.0, 1.0, 1.0, 1.0, false, 10,   1,  1, ['swordman', 'magician', 'thief', 'acolyte', 'archer', 'merchant'] ],
    
    // 【一轉職業】(1st Job) - 條件: 初心者 Job 10
    ['swordman',            '劍士',         '🛡️', 'str', 1.5, 0.8, 1.0, 1.2, false, 50,   1, 10, ['knight', 'crusader'] ],
    ['magician',            '魔法師',       '🔮', 'int', 0.8, 2.0, 1.5, 0.7, false, 50,   1, 10, ['wizard', 'sage'] ],
    ['thief',               '盜賊',         '🗡️', 'agi', 1.0, 1.0, 1.2, 0.9, false, 50,   1, 10, ['assassin', 'rogue'] ],
    ['acolyte',             '服事',         '✨', 'int', 1.2, 1.5, 0.9, 1.1, false, 50,   1, 10, ['priest', 'monk'] ],
    ['archer',              '弓箭手',       '🏹', 'dex', 0.9, 1.0, 1.3, 0.8, false, 50,   1, 10, ['hunter', 'bard'] ],
    ['merchant',            '商人',         '💰', 'str', 1.3, 0.8, 1.1, 1.1, false, 50,   1, 10, ['blacksmith', 'alchemist'] ],
    
    // 【二轉 2-1】 - 條件: 一轉 Job 40
    ['knight',              '騎士',         '🏇', 'str', 2.5, 0.8, 1.3, 1.5, true,  70,   1, 40, ['rune_knight'] ],
    ['wizard',              '巫師',         '🧙', 'int', 1.0, 2.5, 2.0, 0.8, true,  70,   1, 40, ['warlock'] ],
    ['assassin',            '十字刺客',     '🥷', 'agi', 1.5, 1.0, 1.5, 1.0, true,  70,   1, 40, ['guillotine_cross'] ],
    ['priest',              '神官',         '⛪', 'int', 1.5, 2.0, 1.0, 1.3, true,  70,   1, 40, ['arch_bishop'] ],
    ['hunter',              '神射手',       '🦅', 'dex', 1.2, 1.2, 1.6, 0.9, true,  70,   1, 40, ['ranger'] ],
    ['blacksmith',          '神工匠',       '🔨', 'str', 1.8, 1.0, 1.3, 1.2, true,  70,   1, 40, ['mechanic'] ],
    
    // 【二轉 2-2】 - 條件: 一轉 Job 40
    ['crusader',            '十字軍',       '🛡️', 'vit', 2.8, 1.2, 1.1, 1.8, true,  70,   1, 40, ['royal_guard'] ],
    ['sage',                '智者',         '📖', 'int', 1.2, 2.2, 1.8, 1.0, true,  70,   1, 40, ['sorcerer'] ],
    ['rogue',               '神行太保',     '🎭', 'agi', 1.6, 1.2, 1.4, 1.1, true,  70,   1, 40, ['shadow_chaser'] ],
    ['monk',                '武術宗師',     '👊', 'str', 1.6, 1.5, 1.8, 1.2, true,  70,   1, 40, ['sura'] ],
    ['bard',                '吟遊詩人',     '🎸', 'dex', 1.3, 1.5, 1.4, 1.0, true,  70,   1, 40, ['minstrel_wanderer'] ],
    ['alchemist',           '鍊金術師',     '🧪', 'str', 1.7, 1.2, 1.2, 1.3, true,  70,   1, 40, ['genetic'] ],
  
    // 【三轉】 - 條件: 二轉 Base 90, Job 50
    ['rune_knight',         '盧恩騎士',     '🐉', 'str', 3.5, 1.0, 1.5, 1.8, true,  70,  90, 50, ['dragon_knight'] ],
    ['warlock',             '咒術士',       '☄️', 'int', 1.5, 3.5, 2.5, 1.0, true,  70,  90, 50, ['arch_mage'] ],
    ['guillotine_cross',    '十字斬首者',   '🔪', 'agi', 2.0, 1.2, 2.0, 1.2, true,  70,  90, 50, ['shadow_cross'] ],
    ['arch_bishop',         '大主教',       '✝️', 'int', 2.0, 2.8, 1.2, 1.5, true,  70,  90, 50, ['cardinal'] ],
    ['ranger',              '遊俠',         '🐺', 'dex', 1.8, 1.5, 2.2, 1.0, true,  70,  90, 50, ['windhawk'] ],
    ['mechanic',            '機械工匠',     '🤖', 'str', 2.8, 1.5, 1.8, 1.8, true,  70,  90, 50, ['meister'] ],
    ['royal_guard',         '皇家禁衛隊',   '🛡️', 'vit', 4.0, 1.5, 1.4, 2.5, true,  70,  90, 50, ['imperial_guard'] ],
    ['sorcerer',            '妖術師',       '🌌', 'int', 1.8, 3.0, 2.2, 1.2, true,  70,  90, 50, ['elemental_master'] ],
    ['shadow_chaser',       '魅影追蹤者',   '🎭', 'agi', 2.2, 1.5, 1.8, 1.5, true,  70,  90, 50, ['abyss_chaser'] ],
    ['sura',                '修羅',         '🔥', 'str', 2.5, 2.0, 2.5, 1.5, true,  70,  90, 50, ['inquisitor'] ],
    ['minstrel_wanderer',   '宮廷樂師',     '🎻', 'dex', 2.0, 2.2, 1.8, 1.2, true,  70,  90, 50, ['troubadour_trouvere'] ],
    ['genetic',             '基因學者',     '🧬', 'str', 2.4, 1.8, 1.6, 1.6, true,  70,  90, 50, ['biolo'] ],
  
    // 【四轉】 - 條件: 三轉 Base 200, Job 70
    ['dragon_knight',       '龍騎士',       '🐲', 'str', 5.0, 1.5, 2.5, 2.5, true,  60, 200, 70, [] ],
    ['arch_mage',           '禁咒魔導士',   '☄️', 'int', 2.5, 5.0, 4.0, 1.5, true,  60, 200, 70, [] ],
    ['shadow_cross',        '十字影武',     '💀', 'agi', 3.0, 1.8, 3.5, 1.8, true,  60, 200, 70, [] ],
    ['cardinal',            '樞機主教',     '⚖️', 'int', 3.0, 4.0, 1.8, 2.0, true,  60, 200, 70, [] ],
    ['windhawk',            '風鷹狩獵者',   '🌪️', 'dex', 2.8, 2.0, 3.8, 1.5, true,  60, 200, 70, [] ],
    ['meister',             '機甲神匠',     '⚙️', 'str', 4.0, 2.2, 3.0, 2.5, true,  60, 200, 70, [] ],
    ['imperial_guard',      '帝國聖衛軍',   '🏰', 'vit', 6.0, 2.0, 2.2, 3.5, true,  60, 200, 70, [] ],
    ['elemental_master',    '元素支配者',   '🌌', 'int', 2.8, 4.5, 3.5, 1.8, true,  60, 200, 70, [] ],
    ['abyss_chaser',        '深淵追跡者',   '🌑', 'agi', 3.5, 2.2, 3.0, 2.2, true,  60, 200, 70, [] ],
    ['inquisitor',          '審判者',       '🔥', 'str', 4.0, 2.8, 4.0, 2.2, true,  60, 200, 70, [] ],
    ['troubadour_trouvere', '樂之絃音',     '🎼', 'dex', 3.0, 3.0, 2.8, 1.8, true,  60, 200, 70, [] ],
    ['biolo',               '生命締造者',   '🧬', 'str', 3.5, 2.5, 2.5, 2.5, true,  60, 200, 70, [] ]
  ]
};