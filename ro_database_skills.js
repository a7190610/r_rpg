export const RO_DATABASE_SKILLS = {
  // 核心欄位定義 (加上 sk_ 前綴)
  keys: ['sk_id', 'sk_name', 'sk_icon', 'sk_type', 'sk_maxLv', 'sk_reqJobLv', 'sk_desc', 'sk_extras'],

  // 資料陣列
  data: {
    // 【初心者】
    novice: [
      ['n_basic',    '基本技能', '📖', 'passive', 10, 1, (lv) => `全屬性微幅增加 ${lv}`, { passiveAttr: (lv) => ({ str: lv, agi: lv, vit: lv, int: lv, dex: lv, luk: lv }) } ],
      ['n_playdead', '裝死',     '👻', 'active',  1,  5, (lv) => `消耗 10 SP，瞬間回復 20% HP，並清除怪物仇恨`, { spCost: (lv) => 10, healHpPct: 0.2, clearAggro: true } ],
      ['n_firstaid', '急救',     '🩹', 'active',  1,  8, (lv) => `消耗 3 SP，回復 15 HP`, { spCost: (lv) => 3, healPower: (lv) => 15 } ]
    ],

    // ================= 一轉職業 =================
    swordman: [
      ['s_bash',     '狂擊',         '⚔️', 'active',  10, 1,  (lv) => `消耗 ${5+lv*2} SP，造成 ${150+lv*30}% 物理傷害，Lv5以上高機率暈眩`, { spCost: (lv) => 5+lv*2, dmgMulti: (lv) => 1.5+lv*0.3, hits: 1, stunChance: (lv) => lv>=5 ? lv*2.5 : 0 } ],
      ['s_magnum',   '怒爆',         '🌋', 'active',  10, 15, (lv) => `消耗 ${15+lv} SP，造成 ${200+lv*20}% 火屬性範圍傷害，附加10秒火屬性攻擊`, { spCost: (lv) => 15+lv, dmgMulti: (lv) => 2.0+lv*0.2, hits: 1, fireEnchant: true, knockback: true } ],
      ['s_regen',    'HP回復力向上', '❤️', 'passive', 10, 5,  (lv) => `每 10 秒回復 ${lv*5} + (MaxHP*${lv*0.2}%) 生命`, { passiveAttr: (lv) => ({ hpRegenMulti: 1+lv*0.1, hpRegenFlat: lv*5 }) } ],
      ['s_mastery1', '單手劍修練',   '🗡️', 'passive', 10, 10, (lv) => `裝備單手劍時基礎攻擊力增加 ${lv*4}`, { passiveAttr: (lv) => ({ skAtk: lv*4, weaponReq: 'sword' }) } ],
      ['s_mastery2', '雙手劍修練',   '🗡️', 'passive', 10, 10, (lv) => `裝備雙手劍時基礎攻擊力增加 ${lv*4}`, { passiveAttr: (lv) => ({ skAtk: lv*4, weaponReq: 'two_handed_sword' }) } ],
      ['s_provoke',  '挑釁',         '💢', 'active',  10, 10, (lv) => `怪物防禦力下降 ${lv*5}%，但攻擊力上升 ${lv*2}%`, {} ],
      ['s_endure',   '霸體',         '🛡️', 'active',  10, 20, (lv) => `受擊時不會停頓，且MDEF提升 ${lv}，承受 ${lv*7} 次攻擊後失效`, { buffDuration: 7, passiveAttr: (lv) => ({ mdef: lv, antiFlinch: true }) } ]
    ],
    magician: [
      ['m_coldbolt',   '冰箭術',   '❄️', 'active',  10, 1,  (lv) => `消耗 ${10+lv*2} SP，造成 ${lv} 段 ${100}% 冰魔法傷害`, { spCost: (lv) => 10+lv*2, dmgMulti: (lv) => 1.0, hits: (lv) => lv, element: 'water' } ],
      ['m_firebolt',   '火箭術',   '🔥', 'active',  10, 10, (lv) => `消耗 ${12+lv*2} SP，造成 ${lv} 段 ${100}% 火魔法傷害`, { spCost: (lv) => 12+lv*2, dmgMulti: (lv) => 1.0, hits: (lv) => lv, element: 'fire' } ],
      ['m_lightning',  '雷擊術',   '⚡', 'active',  10, 10, (lv) => `消耗 ${10+lv*2} SP，造成 ${lv} 段 ${100}% 風魔法傷害`, { spCost: (lv) => 10+lv*2, dmgMulti: (lv) => 1.0, hits: (lv) => lv, element: 'wind' } ],
      ['m_soulstrike', '聖靈召喚', '👻', 'active',  10, 5,  (lv) => `消耗 ${15+lv} SP，造成 ${Math.floor(lv/2)+1} 段念屬性傷害，對不死系加成`, { spCost: (lv) => 15+lv, dmgMulti: (lv) => 1.0, hits: (lv) => Math.floor(lv/2)+1, element: 'ghost' } ],
      ['m_zen',        '禪心',     '🧘', 'passive', 10, 15, (lv) => `每 10 秒額外回復 ${lv*3} + (MaxSP*${lv*0.2}%) SP`, { passiveAttr: (lv) => ({ spRegenMulti: 1+lv*0.1, spRegenFlat: lv*3 }) } ],
      ['m_firewall',   '火牆術',   '🧱', 'active',  10, 20, (lv) => `消耗 40 SP，建立火牆，阻擋敵人並造成 ${50+lv*5}% 火屬性傷害 ${lv*3} 次`, { spCost: 40, dmgMulti: (lv) => 0.5+lv*0.05, hits: (lv) => lv*3, element: 'fire', blockAggro: true } ],
      ['m_frost',      '冰凍術',   '🧊', 'active',  10, 15, (lv) => `消耗 25 SP，造成 ${100+lv*10}% 水屬性傷害，${lv*6}% 機率冰凍敵人`, { spCost: 25, dmgMulti: (lv) => 1.0+lv*0.1, hits: 1, freezeChance: (lv) => 30+lv*3, element: 'water' } ]
    ],
    thief: [
      ['t_double',  '二刀連擊', '⚔️', 'passive', 10, 1,  (lv) => `裝備短劍時，普攻有 ${lv*5}% 機率造成雙倍傷害`, { passiveAttr: (lv) => ({ doubleHitChance: lv*5, weaponReq: 'dagger' }) } ],
      ['t_flee',    '殘影',     '💨', 'passive', 10, 15, (lv) => `FLEE (迴避率) 額外提升 ${lv*3} 點`, { passiveAttr: (lv) => ({ flee: lv*3 }) } ],
      ['t_steal',   '偷竊',     '🧤', 'active',  10, 5,  (lv) => `消耗 10 SP，機率從怪物身上額外獲得一件物品 (視DEX與等級)`, { spCost: 10, dropBonusActive: (lv) => lv*5 } ],
      ['t_hide',    '隱匿',     '🥷', 'active',  10, 10, (lv) => `消耗 10 SP 潛入地下，閃避大部分攻擊，持續時間視等級而定`, { spCost: 10, buffAttr: (lv) => ({ invulnerable: true }) } ],
      ['t_envenom', '施毒',     '☠️', 'active',  10, 10, (lv) => `消耗 15 SP，造成 ${15+lv*15} 基礎加成與 ${150}% 傷害，高機率附加劇毒`, { spCost: 15, dmgMulti: 1.5, flatDmg: (lv) => 15+lv*15, hits: 1, poisonChance: (lv) => 10+lv*4 } ],
      ['t_detox',   '解毒',     '🌿', 'active',  1,  15, (lv) => `消耗 10 SP，解除自身或目標的毒屬性狀態`, { spCost: 10, curePoison: true } ],
      ['t_sand',    '撒沙',     '⏳', 'active',  5,  20, (lv) => `消耗 9 SP，造成 130% 地屬性傷害，並有 ${lv*10}% 機率致盲`, { spCost: 9, dmgMulti: 1.3, hits: 1, blindChance: (lv) => lv*10, element: 'earth' } ]
    ],
    acolyte: [
      ['a_heal',     '治癒術',     '✨', 'active', 10, 1,  (lv) => `消耗 ${13+lv*3} SP，回復生命 (基於INT與等級)，對不死系造成等量聖傷害`, { spCost: (lv) => 13+lv*3, healPower: (lv) => 150+lv*50, holyDmgMulti: 1.0, element: 'holy' } ],
      ['a_bless',    '天使之賜福', '👼', 'active', 10, 15, (lv) => `消耗 ${10+lv*4} SP，提升 STR/INT/DEX 各 ${lv} 點，解除詛咒`, { spCost: (lv) => 10+lv*4, buffAttr: (lv) => ({ str: lv, int: lv, dex: lv }) } ],
      ['a_agi',      '加速術',     '🏃', 'active', 10, 20, (lv) => `消耗 ${15+lv*3} SP，提升 AGI ${lv} 點，移動速度增加`, { spCost: (lv) => 15+lv*3, buffAttr: (lv) => ({ agi: lv, flee: lv*2, moveSpeedPct: 25 }) } ],
      ['a_holy',     '神聖之光',   '🌟', 'active', 1,  5,  (lv) => `消耗 15 SP，造成 125% 聖屬性魔法傷害，吟唱短暫`, { spCost: 15, dmgMulti: 1.25, hits: 1, element: 'holy' } ],
      ['a_pneuma',   '光之障壁',   '🛡️', 'active', 1,  25, (lv) => `消耗 10 SP，創造 3x3 結界，完全免疫所有遠程物理攻擊`, { spCost: 10, blockRangeChance: 100 } ],
      ['a_ruwach',   '光獵',       '👁️', 'active', 1,  10, (lv) => `消耗 10 SP，找出周圍隱匿的敵人並造成 145% 聖屬性傷害`, { spCost: 10, dmgMulti: 1.45, hits: 1, revealStealth: true, element: 'holy' } ],
      ['a_teleport', '瞬間移動',   '🌀', 'active', 2,  10, (lv) => `消耗 ${10-lv*1} SP，隨機傳送或回儲存點`, { spCost: (lv) => 10-lv*1 } ]
    ],
    archer: [
      ['ar_double',    '二連矢',   '🏹', 'active',  10, 1,  (lv) => `消耗 ${8+lv*2} SP，連續射出兩箭，單下 ${90+lv*10}% 傷害`, { spCost: (lv) => 8+lv*2, dmgMulti: (lv) => 0.9+lv*0.1, hits: 2, weaponReq: 'bow' } ],
      ['ar_owl',       '鴞梟之眼', '🦉', 'passive', 10, 5,  (lv) => `常駐狀態，DEX 額外提升 ${lv} 點`, { passiveAttr: (lv) => ({ dex: lv }) } ],
      ['ar_vulture',   '蒼鷹之眼', '🦅', 'passive', 10, 10, (lv) => `HIT (命中率) 提升 ${lv} 點，弓箭射程增加 ${lv} 格`, { passiveAttr: (lv) => ({ hit: lv, rangeBonus: lv }) } ],
      ['ar_shower',    '箭雨',     '🌧️', 'active',  10, 15, (lv) => `消耗 ${15+lv*3} SP，對範圍造成 ${100+lv*20}% 傷害，強制擊退目標`, { spCost: (lv) => 15+lv*3, dmgMulti: (lv) => 1.0+lv*0.2, hits: 1, knockback: true } ],
      ['ar_attention', '心神凝聚', '🎯', 'active',  10, 20, (lv) => `消耗 ${20+lv*5} SP，提升 AGI 與 DEX 各 ${lv}%，並探測隱形`, { spCost: (lv) => 20+lv*5, buffAttr: (lv) => ({ agiPct: lv, dexPct: lv }), revealStealth: true } ],
      ['ar_craft',     '製造箭',   '🛠️', 'active',  1,  25, (lv) => `消耗 10 SP，將收集到的材料製作成特定屬性箭矢`, { spCost: 10 } ],
      ['ar_charge',    '衝鋒箭',   '💨', 'active',  1,  30, (lv) => `消耗 15 SP，造成 150% 傷害並將敵人擊退 6 格`, { spCost: 15, dmgMulti: 1.5, hits: 1, knockback: true } ]
    ],
    merchant: [
      ['me_mammonite',  '金錢攻擊',   '🪙', 'active',  10, 1,  (lv) => `消耗 ${lv*100} Zeny，造成 ${150+lv*50}% 強力物理傷害`, { zenyCost: (lv) => lv*100, dmgMulti: (lv) => 1.5+lv*0.5, hits: 1 } ],
      ['me_weight',     '負重量上升', '🎒', 'passive', 10, 5,  (lv) => `最大負重量增加 ${lv*200}`, { passiveAttr: (lv) => ({ weightBonus: lv*200 }) } ],
      ['me_discount',   '低價買進',   '📉', 'passive', 10, 10, (lv) => `從 NPC 購買道具時，價格降低 ${lv*2.4}%`, { passiveAttr: (lv) => ({ buyPriceDiscount: lv*2.4 }) } ],
      ['me_overcharge', '高價賣出',   '📈', 'passive', 10, 10, (lv) => `將道具賣給 NPC 時，價格提升 ${lv*2.4}%`, { passiveAttr: (lv) => ({ sellPriceBonus: lv*2.4 }) } ],
      ['me_cart',       '手推車使用', '🛒', 'passive', 10, 15, (lv) => `可租借手推車，隨等級降低推車減速懲罰`, { passiveAttr: (lv) => ({ cartEnable: true }) } ],
      ['me_vending',    '露天商店',   '🏪', 'active',  10, 15, (lv) => `可開設商店販售物品，最高可賣 ${lv+2} 種商品`, {} ],
      ['me_loud',       '大聲呼喊',   '🗣️', 'active',  1,  20, (lv) => `消耗 8 SP，短時間內提升 4 點 STR`, { spCost: 8, buffAttr: (lv) => ({ str: 4 }) } ]
    ],

    // ================= 二轉 (2-1) =================
    knight: [
      ['k_pierce',    '連刺攻擊',   '🔱', 'active',  10, 1,  (lv) => `消耗 7 SP，對小/中/大型分別造成 1/2/3 段 ${100+lv*10}% 傷害`, { spCost: 7, dmgMulti: (lv) => 1.0+lv*0.1, hits: 3, weaponReq: 'spear' } ], 
      ['k_bowling',   '怪物互擊',   '💥', 'active',  10, 15, (lv) => `消耗 ${15+lv*2} SP，擊退敵人互撞，造成兩段 ${100+lv*40}% 範圍傷害`, { spCost: (lv) => 15+lv*2, dmgMulti: (lv) => 1.0+lv*0.4, hits: 2, knockback: true } ],
      ['k_quicken',   '雙手劍增壓', '⚡', 'active',  10, 10, (lv) => `消耗 ${20+lv*4} SP，裝備雙手劍時 ASPD 提升 30%`, { spCost: (lv) => 20+lv*4, buffAttr: (lv) => ({ aspdBonusPct: 30, weaponReq: 'two_handed_sword' }) } ], 
      ['k_pecopeco',  '騎乘術',     '🦤', 'passive', 1,  20, (lv) => `可騎乘大嘴鳥，體型修正為大型，長矛傷害提升`, { passiveAttr: (lv) => ({ moveSpeedPct: 25, sizeModifier: 'large' }) } ],
      ['k_cavalry',   '騎乘攻擊',   '🏇', 'passive', 5,  25, (lv) => `恢復騎乘大嘴鳥時下降的攻擊速度 (最高恢復100%)`, {} ],
      ['k_spearmast', '長矛修練',   '🔱', 'passive', 10, 5,  (lv) => `裝備長矛時攻擊力增加 ${lv*4}，騎乘時增加 ${lv*5}`, { passiveAttr: (lv) => ({ skAtk: lv*4, weaponReq: 'spear' }) } ],
      ['k_brandish',  '迴旋擊',     '🌪️', 'active',  10, 25, (lv) => `消耗 12 SP，騎乘長矛專用，對扇形範圍造成 ${100+lv*20}% 傷害`, { spCost: 12, dmgMulti: (lv) => 1.0+lv*0.2, hits: 1, weaponReq: 'spear' } ]
    ],
    wizard: [
      ['w_storm',      '暴風雪',   '❄️', 'active', 10, 1,  (lv) => `消耗 ${40+lv*5} SP，造成 10 段 ${140+lv*40}% 冰傷害，高機率冰凍`, { spCost: (lv) => 40+lv*5, dmgMulti: (lv) => 1.4+lv*0.4, hits: 10, freezeChance: (lv) => lv*6, element: 'water' } ],
      ['w_lov',        '怒雷強擊', '🌩️', 'active', 10, 10, (lv) => `消耗 ${40+lv*4} SP，4 波共 40 段 ${80+lv*20}% 風傷害，機率致盲`, { spCost: (lv) => 40+lv*4, dmgMulti: (lv) => 0.8+lv*0.2, hits: 10, blindChance: (lv) => lv*4, element: 'wind' } ],
      ['w_meteor',     '隕石術',   '☄️', 'active', 10, 15, (lv) => `消耗 ${30+lv*5} SP，降下 ${Math.floor(lv/2)+2} 顆隕石，每顆 ${100+lv*50}% 火傷害`, { spCost: (lv) => 30+lv*5, dmgMulti: (lv) => 1.0+lv*0.5, hits: (lv) => Math.floor(lv/2)+2, stunChance: (lv) => lv*3, element: 'fire' } ],
      ['w_jt',         '雷鳴術',   '⚡', 'active', 10, 20, (lv) => `消耗 ${15+lv*3} SP，發射 ${lv+2} 發雷球，每發 100% 傷害並強力擊退`, { spCost: (lv) => 15+lv*3, dmgMulti: 1.0, hits: (lv) => lv+2, element: 'wind', knockback: true } ],
      ['w_quagmire',   '泥沼地',   '🕳️', 'active', 5,  15, (lv) => `減少範圍內敵人 AGI 與 DEX 各 ${lv*10}%，並解除加速狀態`, {} ],
      ['w_earthspike', '地震術',   '⛰️', 'active', 5,  5,  (lv) => `消耗 ${10+lv*2} SP，從地面突刺造成 ${lv} 段 100% 地屬性傷害`, { spCost: (lv) => 10+lv*2, dmgMulti: 1.0, hits: (lv) => lv, element: 'earth' } ],
      ['w_sense',      '怪物情報', '👁️', 'active', 1,  5,  (lv) => `消耗 10 SP，獲取目標魔物的血量、屬性與弱點`, {} ]
    ],
    assassin: [
      ['as_sonic',     '音速投擲', '🌪️', 'active',  10, 1,  (lv) => `消耗 34 SP，瞬間八連擊造成 ${300+lv*60}% 傷害，${10+lv*2}% 暈眩`, { spCost: 34, dmgMulti: (lv) => (3.0+lv*0.6)/8, hits: 8, stunChance: (lv) => 10+lv*2 } ],
      ['as_katar',     '拳刃修練', '🗡️', 'passive', 10, 10, (lv) => `裝備拳刃時 ATK 提升 ${lv*3}，暴擊率倍增`, { passiveAttr: (lv) => ({ skAtk: lv*3, critMulti: 2.0, weaponReq: 'katar' }) } ],
      ['as_grimtooth', '無影之牙', '🦇', 'active',  5,  15, (lv) => `隱匿時使用，消耗 3 SP 對範圍造成 ${100+lv*20}% 傷害`, { spCost: 3, dmgMulti: (lv) => 1.0+lv*0.2, hits: 1, requiresHide: true } ],
      ['as_cloak',     '偽裝',     '🥷', 'active',  10, 5,  (lv) => `消耗 15 SP，貼牆時可完全隱形並移動`, { buffAttr: (lv) => ({ sneak: true }) } ],
      ['as_enchant',   '塗毒',     '🧪', 'active',  10, 10, (lv) => `消耗 20 SP，將武器屬性轉為毒屬性，普攻機率使敵人中毒`, { spCost: 20, buffAttr: (lv) => ({ element: 'poison', poisonChance: lv*2 }) } ],
      ['as_venom',     '毒性感染', '☠️', 'active',  5,  20, (lv) => `對已中毒的敵人造成強力爆發毒屬性傷害`, {} ],
      ['as_right',     '右手修練', '🗡️', 'passive', 5,  10, (lv) => `裝備雙刀時，恢復右手因雙持降低的傷害 (最高100%)`, {} ],
      ['as_left',      '左手修練', '🗡️', 'passive', 5,  10, (lv) => `裝備雙刀時，恢復左手因雙持降低的傷害 (最高80%)`, {} ]
    ],
    priest: [
      ['pr_magnus', '十字驅魔攻擊', '✝️', 'active', 10, 15, (lv) => `消耗 ${40+lv*5} SP (需藍礦)，對不死/惡魔造成 ${lv} 段毀滅聖傷害`, { spCost: (lv) => 40+lv*5, dmgMulti: (lv) => 1.0+lv*0.3, hits: (lv) => lv, targetRace: ['undead', 'demon'], element: 'holy' } ],
      ['pr_magni',  '聖母之頌歌',   '🎵', 'active', 5,  5,  (lv) => `消耗 40 SP，全隊 SP 自然回復速度提升 2 倍`, { spCost: 40, buffAttr: (lv) => ({ spRegenMulti: 2.0 }) } ],
      ['pr_kyrie',  '霸邪之陣',     '🛡️', 'active', 10, 10, (lv) => `消耗 20 SP，賦予防護罩抵擋 ${lv*3} 次或 MaxHP ${10+lv*2}% 的傷害`, { spCost: 20, buffAttr: (lv) => ({ shieldHits: lv*3, shieldHpPct: 10+lv*2 }) } ],
      ['pr_lex',    '神威祈福',     '✨', 'active', 5,  15, (lv) => `消耗 20 SP，隊友物理攻擊力直接提升 ${lv*5} 點`, { spCost: 20, buffAttr: (lv) => ({ flatAtk: lv*5 }) } ],
      ['pr_res',    '復活術',       '👼', 'active', 4,  20, (lv) => `消耗 60 SP (需藍礦)，復活隊友並恢復 ${lv*20}% HP`, {} ],
      ['pr_asper',  '灑水祈福',     '💧', 'active', 5,  10, (lv) => `消耗 20 SP (需聖水)，將隊友武器屬性轉為聖屬性`, { spCost: 20, buffAttr: (lv) => ({ element: 'holy' }) } ],
      ['pr_sanct',  '光耀之堂',     '🌟', 'active', 10, 20, (lv) => `消耗 30 SP (需藍礦)，範圍內每秒恢復 777 HP，對不死造成傷害`, {} ],
      ['pr_lexa',   '轉生術',       '✝️', 'active', 10, 15, (lv) => `機率一擊必殺不死系怪物，失敗則造成聖屬性傷害`, {} ]
    ],
    hunter: [
      ['ht_blitz',      '閃電衝擊', '🦅', 'active',  5,  1,  (lv) => `老鷹造成無視防禦與迴避的 ${lv} 段強制無屬性傷害`, { dmgMulti: 1.0, hits: (lv) => lv, ignoreDef: true, ignoreFlee: true } ],
      ['ht_falcon',     '獵鷹尋笛', '🦉', 'passive', 1,  10, (lv) => `普攻時視 LUK 機率自動觸發閃電衝擊 (需裝備弓與老鷹)`, {} ],
      ['ht_trap_clay',  '爆炎陷阱', '💥', 'active',  5,  20, (lv) => `消耗 15 SP，設置陷阱造成大範圍火屬性傷害 (視DEX/INT)`, { spCost: 15, dmgMulti: (lv) => 2.0+lv*1.0, element: 'fire' } ],
      ['ht_trap_frost', '霜凍陷阱', '❄️', 'active',  5,  15, (lv) => `造成水屬性傷害並高機率冰凍範圍內的敵人`, { element: 'water' } ],
      ['ht_trap_ankle', '定位陷阱', '⛓️', 'active',  5,  10, (lv) => `將踩到的魔物完全定身 ${lv*4} 秒`, {} ],
      ['ht_beast',      '野獸剋星', '🐺', 'passive', 10, 5,  (lv) => `對動物系與昆蟲系魔物傷害增加 ${lv*4}%`, { passiveAttr: (lv) => ({ raceDmgBonus: { beast: lv*4, insect: lv*4 } }) } ],
      ['ht_phobia',     '滑動陷阱', '💨', 'active',  5,  10, (lv) => `將踩到的魔物強制向前滑動並受到少量傷害`, {} ]
    ],
    blacksmith: [
      ['bs_cart',         '手推車終結技', '🛒', 'active',  10, 15, (lv) => `消耗 ${150*lv} Zeny，造成最高 ${150+lv*150}% 強制無屬性必中傷害`, { zenyCost: (lv) => 150*lv, spCost: 15, dmgMulti: (lv) => 1.5+lv*1.5, hits: 1, ignoreDef: true, ignoreFlee: true } ],
      ['bs_adrenalin',    '速度激發',     '⚡', 'active',  5,  5,  (lv) => `消耗 30 SP，裝備斧/鈍器時全隊 ASPD 大幅提升 30%`, { spCost: 30, buffAttr: (lv) => ({ aspdBonusPct: 30, weaponReq: ['axe', 'mace'] }) } ],
      ['bs_weapon',       '武器研究',     '🔨', 'passive', 10, 10, (lv) => `基礎攻擊力與命中率各提升 ${lv*2}，提高鍛造成功率`, { passiveAttr: (lv) => ({ skAtk: lv*2, hit: lv*2 }) } ],
      ['bs_max_power',    '無視體型攻擊', '💪', 'active',  5,  20, (lv) => `消耗 20 SP，武器對所有體型皆發揮 100% 傷害`, { spCost: 20, buffAttr: (lv) => ({ ignoreSizePenalty: true }) } ],
      ['bs_power_thrust', '凶砍',         '🪓', 'active',  5,  15, (lv) => `消耗 15 SP，全隊武器攻擊力提升 ${lv*5}%，但武器有機率損壞`, { spCost: 15, buffAttr: (lv) => ({ atkPct: lv*5 }) } ],
      ['bs_hammer',       '大地之擊',     '⛰️', 'active',  5,  25, (lv) => `敲擊地面造成範圍傷害並機率暈眩`, {} ],
      ['bs_ore',          '尋找礦石',     '💎', 'passive', 1,  10, (lv) => `打怪時有機率額外掉落各種礦石`, {} ]
    ],

    // ================= 二轉 (2-2) =================
    crusader: [
      ['cr_cross',        '聖十字審判', '✨', 'active',  10, 1,  (lv) => `反噬自身 20% HP，對周圍造成 ${100+lv*40}% (ATK+MATK) 聖屬性傷害 3 段`, { spCost: (lv) => 20+lv*3, hpCostPct: 0.2, dmgMulti: (lv) => 1.0+lv*0.4, hits: 3, element: 'holy' } ],
      ['cr_faith',        '信任',       '🛡️', 'passive', 10, 5,  (lv) => `最大 HP 永久增加 ${lv*200}，神聖抗性增加 ${lv*5}%`, { passiveAttr: (lv) => ({ maxHpFlat: lv*200, holyResist: lv*5 }) } ],
      ['cr_guard',        '自動防禦',   '🛡️', 'active',  10, 10, (lv) => `裝備盾牌時，受擊有 ${lv*3}% 機率完全格擋傷害`, { buffAttr: (lv) => ({ blockChance: lv*3, weaponReq: 'shield' }) } ],
      ['cr_shield_chain', '連續盾擊',   '🛡️', 'active',  5,  15, (lv) => `消耗 ${28+lv*3} SP，丟擲盾牌造成 5 段傷害 (受盾重影響)`, { spCost: (lv) => 28+lv*3, dmgMulti: (lv) => 1.0+lv*0.3, hits: 5, weaponReq: 'shield' } ],
      ['cr_holy_cross',   '聖十字攻擊', '✝️', 'active',  6,  10, (lv) => `雙手劍專用，造成 ${100+lv*35}% 聖屬性傷害，機率致盲`, {} ],
      ['cr_sacrifice',    '捨命護衛',   '🩸', 'active',  5,  25, (lv) => `與隊友連線，代為承受其受到的所有傷害`, {} ],
      ['cr_peco',         '騎乘術(十字軍)', '🦤', 'passive', 1,  10, (lv) => `可騎乘大嘴鳥，增加移動速度與負重`, {} ]
    ],
    sage: [
      ['sa_spell',   '魔法懲罰',   '📖', 'active',  5,  1,  (lv) => `中斷敵方詠唱，吸收其 ${lv*20}% SP 轉為自身 HP`, { interruptCast: true } ],
      ['sa_auto',    '自動念咒',   '🔥', 'active',  10, 10, (lv) => `近戰普攻時有 ${lv*2}% 機率免詠唱觸發設定的元素箭`, { buffAttr: (lv) => ({ autoSpellChance: lv*2 }) } ],
      ['sa_free',    '自由施法',   '🏃', 'passive', 10, 5,  (lv) => `施法期間可以移動且繼續普攻，維持 ${lv*5}% 的速度`, { passiveAttr: (lv) => ({ castMoveSpeedPct: lv*5, castAspdPct: lv*5 }) } ],
      ['sa_heavens', '崩裂術',     '⛰️', 'active',  5,  15, (lv) => `消耗 ${20+lv*4} SP，範圍造成 ${lv} 段 100% 地屬性魔法傷害`, { spCost: (lv) => 20+lv*4, dmgMulti: 1.0, hits: (lv) => lv, element: 'earth' } ],
      ['sa_volcano', '火元素領域', '🌋', 'active',  5,  20, (lv) => `地上鋪設領域，範圍內火屬性傷害增加，且無法被冰凍`, {} ],
      ['sa_deluge',  '水元素領域', '🌊', 'active',  5,  20, (lv) => `地上鋪設領域，範圍內水屬性傷害增加，可使用水屬性技能`, {} ],
      ['sa_whirl',   '風元素領域', '🌪️', 'active',  5,  20, (lv) => `地上鋪設領域，範圍內風屬性傷害增加，FLEE 提升`, {} ],
      ['sa_land',    '地元素領域', '🧱', 'active',  5,  25, (lv) => `無效化範圍內所有地面魔法與陷阱 (地領)`, {} ]
    ],
    rogue: [
      ['rg_raid',        '背刺',         '🔪', 'active',  10, 1,  (lv) => `從敵人背後必定命中造成 ${300+lv*40}% 傷害`, { dmgMulti: (lv) => 3.0+lv*0.4, hits: 1, ignoreFlee: true } ],
      ['rg_snatch',      '強奪',         '💰', 'passive', 10, 10, (lv) => `普攻有 ${lv*2}% 機率自動偷竊，掉寶率額外提升 ${lv}%`, { passiveAttr: (lv) => ({ autoStealChance: lv*2, dropBonus: lv }) } ],
      ['rg_tunnel',      '潛遁',         '🥷', 'passive', 5,  5,  (lv) => `隱匿狀態下可移動，並提升偷襲時的暴擊率`, { passiveAttr: (lv) => ({ sneakAttackCrit: 20 }) } ],
      ['rg_plagiarism',  '抄襲',         '📝', 'passive', 10, 20, (lv) => `受到攻擊技能後永久記憶該技能 (上限1招)，自由使用。`, { passiveAttr: (lv) => ({ enablePlagiarism: true, maxPlagiarismLv: lv }) } ],
      ['rg_strip_weap',  '卸除武器',     '🗡️', 'active',  5,  15, (lv) => `機率強制卸除敵方武器，使其攻擊力大幅下降`, {} ],
      ['rg_strip_shld',  '卸除盾牌',     '🛡️', 'active',  5,  15, (lv) => `機率強制卸除敵方盾牌，使其防禦力下降`, {} ],
      ['rg_sword',       '單手劍修練(流氓)', '⚔️', 'passive', 10, 10, (lv) => `裝備單手劍時攻擊力增加 ${lv*4}`, {} ]
    ],
    monk: [
      ['mo_ashura', '阿修羅霸凰拳', '👊', 'active',  5,  25, (lv) => `消耗所有 SP，造成毀滅性真實傷害，施放後 5 分鐘無法回魔`, { spCost: 9999, dmgMulti: (lv) => 8.0+lv*2.0, hits: 1, ignoreDef: true, ignoreFlee: true } ],
      ['mo_dodge',  '移花接木',     '🍃', 'passive', 10, 5,  (lv) => `FLEE 提升 ${lv*1.5}，受擊時機率減免傷害`, { passiveAttr: (lv) => ({ flee: lv*1.5 }) } ],
      ['mo_invest', '浸透勁',       '💥', 'active',  5,  10, (lv) => `消耗 1 氣球，無視防禦造成 ${100+lv*75}% 傷害，敵方防禦越高傷害越大`, { dmgMulti: (lv) => 1.0+lv*0.75, hits: 1, ignoreDef: true, defScaling: true } ],
      ['mo_sphere', '蓄氣',         '🔮', 'active',  5,  5,  (lv) => `主動聚集氣球，每顆氣球增加 3 ATK (最高 5 顆)`, {} ],
      ['mo_finger', '彈指神功',     '🎯', 'active',  5,  15, (lv) => `消耗所有氣球，遠距離投擲，每顆氣球造成 ${100+lv*50}% 傷害`, { hits: (lv) => lv } ],
      ['mo_combo1', '六合拳',       '🤛', 'passive', 10, 10, (lv) => `普攻時機率自動觸發三連擊，為連技的起手式`, {} ],
      ['mo_combo2', '連環全身掌',   '🤜', 'active',  5,  15, (lv) => `接在六合拳之後施放，造成 4 段傷害`, {} ],
      ['mo_combo3', '猛龍誇強',     '🐉', 'active',  5,  20, (lv) => `接在連環全身掌之後，造成巨大傷害並擊退`, {} ]
    ],
    bard_dancer: [ 
      ['bd_vulcan',  '奧義箭亂舞',   '🎸', 'active',  10, 1,  (lv) => `裝備樂器/鞭子，發出 9 段共 ${300+lv*100}% 物理傷害`, { dmgMulti: (lv) => (3.0+lv*1.0)/9, hits: 9 } ],
      ['bd_bragi',   '布萊奇之詩',   '🎵', 'active',  10, 10, (lv) => `全隊技能冷卻時間與詠唱減少 (受INT/DEX加成)`, {} ],
      ['bd_apple',   '伊登的蘋果',   '🍎', 'active',  10, 15, (lv) => `全隊 MaxHP 提升 ${lv*2}% 並每秒大幅恢復生命`, {} ],
      ['bd_music',   '樂器/練習曲修練', '🎺', 'passive', 10, 5,  (lv) => `裝備樂器或鞭子時，基礎攻擊力增加 ${lv*3}`, { passiveAttr: (lv) => ({ skAtk: lv*3 }) } ],
      ['bd_joke',    '冷笑話',       '🥶', 'active',  5,  20, (lv) => `全畫面機率性將敵人與隊友冰凍`, {} ],
      ['bd_tarot',   '塔羅牌命運',   '🃏', 'active',  5,  25, (lv) => `隨機抽取一張塔羅牌，對敵人造成各種強大異常狀態或傷害`, {} ],
      ['bd_lullaby', '搖籃曲',       '💤', 'active',  1,  20, (lv) => `大範圍使敵人陷入睡眠狀態`, {} ]
    ],
    alchemist: [
      ['al_acid',    '強酸侵蝕',     '🧪', 'active',  5,  1,  (lv) => `消耗強酸瓶，造成傷害並極高機率破壞敵方防具造成出血`, { dmgMulti: (lv) => 1.0+lv*0.4, hits: 1, bleedChance: (lv) => lv*10 } ],
      ['al_potion',  '知識藥水',     '💊', 'passive', 10, 5,  (lv) => `藥水回復量提升 ${lv*5}%，並增加負重量`, { passiveAttr: (lv) => ({ potionEff: lv*5, weightBonus: lv*100 }) } ],
      ['al_homun',   '生命體呼喚',   '🐥', 'active',  1,  15, (lv) => `召喚生命體協助攻擊，生命體擁有獨立技能與 AI`, {} ],
      ['al_demo',    '火煙瓶投擲',   '🔥', 'active',  5,  20, (lv) => `消耗火煙瓶，引發 5x5 火災造成多段持續魔法傷害與裝備破壞`, { hits: 5, element: 'fire' } ],
      ['al_ad_bomb', '強酸火煙瓶投擲', '💥', 'active',  10, 25, (lv) => `(AD) 同時投擲強酸與火煙，依據敵人 VIT 造成多段巨大毀滅傷害`, { hits: 10, vitScaling: true } ],
      ['al_plant',   '召喚植物',     '🌿', 'active',  5,  10, (lv) => `消耗植物瓶，召喚固定砲塔植物協助攻擊`, {} ],
      ['al_axe',     '斧頭修練',     '🪓', 'passive', 10, 5,  (lv) => `裝備斧頭時攻擊力增加 ${lv*3}`, {} ]
    ],

    // ================= 三轉職業 =================
    rune_knight: [
      ['rk_spear',        '百矛穿刺',     '☄️', 'active',  10, 1,  (lv) => `消耗 60 SP，造成 ${800+lv*120}% 爆發物理傷害，機率觸發長矛飛迴鏢`, { spCost: 60, dmgMulti: (lv) => 8.0+lv*1.2, hits: 1, weaponReq: 'spear' } ],
      ['rk_ignition',     '風暴衝擊',     '🌪️', 'active',  5,  5,  (lv) => `引爆符文對廣範圍造成 ${300+lv*100}% 物理傷害，可觸發爆擊`, { spCost: 50, dmgMulti: (lv) => 3.0+lv*1.0, hits: 1, canCrit: true } ],
      ['rk_rune',         '盧恩精熟',     '🪨', 'passive', 10, 10, (lv) => `解鎖盧恩石製造，全屬性 +${lv*2}`, { passiveAttr: (lv) => ({ allStat: lv*2 }) } ],
      ['rk_breath_fire',  '龍之吐息(火)', '🔥', 'active',  10, 15, (lv) => `根據【目前HP與MaxSP】造成巨大火屬性真實傷害`, { spCost: 50, hpSpScalingDmg: true, element: 'fire', ignoreDef: true } ],
      ['rk_breath_water', '龍之吐息(水)', '💧', 'active',  10, 20, (lv) => `根據【目前HP與MaxSP】造成巨大水屬性真實傷害，並機率結冰`, { spCost: 50, hpSpScalingDmg: true, element: 'water', ignoreDef: true } ],
      ['rk_enchant',      '附魔之刃',     '✨', 'active',  5,  10, (lv) => `將自身 MATK 轉化為普攻額外傷害`, { spCost: 40, buffDuration: 60, buffAttr: (lv) => ({ magicToMeleeBonus: lv*20 }) } ],
      ['rk_dragon',       '龍騎乘',       '🐉', 'passive', 5,  5,  (lv) => `騎乘飛龍，解除體型懲罰並增加 ${lv*200} 負重`, { passiveAttr: (lv) => ({ weightBonus: lv*200, sizeModifier: 'large' }) } ],
      ['rk_crush',        '粉碎擊',       '💥', 'active',  5,  10, (lv) => `裝備雙手劍時造成 ${500+lv*100}% 破甲傷害`, { spCost: 30, dmgMulti: (lv) => 5.0+lv*1.0, hits: 1, weaponReq: 'two_handed_sword' } ]
    ],
    warlock: [
      ['wl_crimson', '碧血隕石', '☄️', 'active',  5,  1,  (lv) => `造成大範圍 ${1300+lv*700}% 火魔法，中心傷害最高`, { spCost: 80, dmgMulti: (lv) => 13.0+lv*7.0, hits: 1, element: 'fire' } ],
      ['wl_chain',   '連鎖電擊', '⚡', 'active',  5,  5,  (lv) => `單體風魔法，若有其他敵人則來回彈跳，每下 ${500+lv*100}% 傷害`, { spCost: 60, dmgMulti: (lv) => 5.0+lv*1.0, hits: 5, element: 'wind' } ],
      ['wl_jack',    '凍僵術',   '🧊', 'active',  5,  10, (lv) => `以自身為中心造成廣範圍水魔法傷害，對冰凍目標傷害大增`, { spCost: 70, dmgMulti: (lv) => 10.0+lv*2.0, hits: 1, element: 'water' } ],
      ['wl_earth',   '地牛翻身', '⛰️', 'active',  5,  10, (lv) => `大範圍地屬性傷害並卸除敵方裝備`, { spCost: 80, dmgMulti: (lv) => 15.0+lv*2.0, hits: 1, element: 'earth', stripChance: (lv) => lv*5 } ],
      ['wl_tetra',   '四屬漩渦', '🌀', 'active',  5,  15, (lv) => `召喚四屬元素對單體造成 4 段毀滅級魔法傷害`, { spCost: 120, dmgMulti: (lv) => (20.0+lv*10.0)/4, hits: 4 } ],
      ['wl_soul',    '靈魂爆炸', '👻', 'active',  5,  10, (lv) => `對念屬性或被監獄困住的敵人造成巨大念魔法傷害`, { spCost: 50, dmgMulti: (lv) => 8.0+lv*2.0, hits: 1, element: 'ghost' } ],
      ['wl_read',    '讀取魔咒', '📖', 'passive', 5,  5,  (lv) => `將魔法儲存於魔導書中瞬間釋放，MaxSP 增加 ${lv*5}%`, { passiveAttr: (lv) => ({ maxSpPct: lv*5 }) } ],
      ['wl_comet',   '彗星',     '🌠', 'active',  5,  20, (lv) => `消耗大量 SP 降下彗星，造成極大範圍火/無屬性傷害，並陷入燃燒`, { spCost: 150, dmgMulti: (lv) => 25.0+lv*5.0, hits: 1 } ]
    ],
    guillotine_cross: [
      ['gx_cross',    '十字斬',     '❌', 'active',  5,  1,  (lv) => `造成 ${1200+lv*300}% 物理傷害，對毒屬性目標傷害大幅提升`, { spCost: 25, dmgMulti: (lv) => 12.0+lv*3.0, hits: 2 } ],
      ['gx_rolling',  '迴旋刃',     '🌪️', 'active',  5,  5,  (lv) => `對周圍造成 ${300+lv*100}% 傷害並累積迴圈次數 (上限10次)`, { spCost: 30, dmgMulti: (lv) => 3.0+lv*1.0, hits: 1, buildStack: 'rolling' } ],
      ['gx_crs',      '迴旋十字斬', '🌀', 'active',  5,  15, (lv) => `消耗次數，滿層時造成 ${500+lv*200+1000}% 極大遠程傷害`, { spCost: 40, dmgMulti: 15.0, hits: 1, requireStack: 'rolling' } ],
      ['gx_research', '新毒研究',   '🧪', 'passive', 10, 10, (lv) => `十字斬威力上升 ${lv*5}%，毒屬性耐性增加`, { passiveAttr: (lv) => ({ poisonResist: lv*5, skillDmgBonus: { gx_cross: lv*5 } }) } ],
      ['gx_illusion', '幻影步',     '👻', 'active',  5,  10, (lv) => `短時間內閃避極大幅度提升，免疫部分魔法`, { spCost: 50, buffDuration: 10, buffAttr: (lv) => ({ flee: 250, mDmgReduction: 50 }) } ],
      ['gx_dark',     '暗黑爪痕',   '爪', 'active',  5,  20, (lv) => `給予敵人印記，5秒內使其受到的近戰物理傷害變成 2.5 倍`, { spCost: 60, debuffDuration: 5, debuffAttr: (lv) => ({ recvMeleeDmgMulti: 2.5 }) } ],
      ['gx_poison',   '劇毒強制',   '☠️', 'active',  5,  15, (lv) => `強行將新毒效果注入敵方體內，造成猛烈毒性爆發`, { spCost: 40, dmgMulti: (lv) => 5.0+lv*1.0, element: 'poison' } ],
      ['gx_hallu',    '幻影幻覺',   '👁️', 'active',  5,  10, (lv) => `降低目標命中與攻速，並造成持續百分比傷害`, {} ]
    ],
    arch_bishop: [
      ['ab_judex',    '審判',       '⚔️', 'active',  5,  1,  (lv) => `對小範圍造成 ${300+lv*70}% 聖魔法，吟唱極快`, { spCost: 40, dmgMulti: (lv) => 3.0+lv*0.7, hits: 3, element: 'holy' } ],
      ['ab_adoramus', '謳歌',       '💠', 'active',  10, 15, (lv) => `消耗藍礦，對單體造成 ${500+lv*100}% 強力聖魔法，並造成目盲`, { spCost: 60, dmgMulti: (lv) => 5.0+lv*1.0, hits: 1, element: 'holy' } ],
      ['ab_highheal', '高階治癒術', '✨', 'active',  5,  5,  (lv) => `極大幅度恢復單體生命，並附加持續恢復效果`, { spCost: 70, healPower: (lv) => 800+lv*200, hotPower: (lv) => 100+lv*50 } ],
      ['ab_sacra',    '聖典',       '📜', 'passive', 5,  10, (lv) => `常駐減少全隊固定詠唱時間 ${lv*10}%`, { passiveAttr: (lv) => ({ fixCastTimeReduction: lv*10 }) } ],
      ['ab_coluseo',  '燦爛聖光',   '💖', 'active',  3,  10, (lv) => `瞬間恢復全畫面隊友的大量 HP`, { spCost: 150, healPower: (lv) => 1000+lv*300 } ],
      ['ab_prae',     '聖母之祈福', '🛡️', 'active',  10, 15, (lv) => `為全隊施加防護盾，抵擋 ${lv*2} 次攻擊`, {} ],
      ['ab_expi',     '解除',       '🔓', 'active',  5,  5,  (lv) => `賦予隊友無視防禦力 ${lv*5}% 的增益效果`, {} ],
      ['ab_duple',    '雙向聖光',   '⚖️', 'active',  10, 10, (lv) => `普攻時機率額外觸發聖屬性物理或魔法打擊`, {} ]
    ],
    ranger: [
      ['ra_storm',   '箭風暴',   '🌪️', 'active',  10, 1,  (lv) => `對超大範圍造成 ${1000+lv*80}% 物理傷害`, { spCost: 40, dmgMulti: (lv) => 10.0+lv*0.8, hits: 1, weaponReq: 'bow' } ],
      ['ra_aim',     '瞄準標靶', '🎯', 'active',  10, 10, (lv) => `目標體型越大/被定身時傷害越高，最高 5 段毀滅打擊`, { spCost: 50, dmgMulti: (lv) => 5.0+lv*1.0, hits: 5, weaponReq: 'bow' } ],
      ['ra_warg',    '狼突擊',   '🐺', 'passive', 5,  5,  (lv) => `普攻視 LUK 機率召喚狼協同攻擊`, { passiveAttr: (lv) => ({ autoWargChance: lv*3 }) } ],
      ['ra_ride',    '狼騎乘',   '🐺', 'passive', 3,  5,  (lv) => `騎乘狼，大幅提升移動速度`, {} ],
      ['ra_camo',    '偽裝戰術', '🌿', 'active',  5,  10, (lv) => `隱藏氣息，提升爆擊率與遠程傷害，移動時半透明`, {} ],
      ['ra_unlimit', '無極限',   '💥', 'active',  5,  20, (lv) => `1 分鐘內遠程傷害提升 ${lv*50}%，但防禦與迴避降至1`, { spCost: 100, buffDuration: 60, buffAttr: (lv) => ({ rangeDmgPct: lv*50, def: -999, flee: -999 }) } ],
      ['ra_breeze',  '微風懼刃', '🍃', 'active',  5,  15, (lv) => `普攻時有機率射出多支箭矢，增加連擊判定`, {} ],
      ['ra_trap',    '陷阱研究', '🕸️', 'passive', 5,  5,  (lv) => `增加陷阱傷害與自身 INT，並擴展陷阱設置距離`, { passiveAttr: (lv) => ({ int: lv*2 }) } ]
    ],
    mechanic: [
      ['mc_axe',     '斧頭迴旋風暴', '🪓', 'active',  5,  1,  (lv) => `裝備斧頭時對周圍造成 ${300+lv*100}% 傷害，外圈敵人受更高傷害`, { spCost: 40, dmgMulti: (lv) => 3.0+lv*1.0, hits: 6, weaponReq: 'axe' } ],
      ['mc_cannon',  '加農砲攻擊',   '💣', 'active',  5,  5,  (lv) => `魔導甲發射砲彈造成 ${700+lv*300}% 無視迴避範圍傷害`, { spCost: 50, dmgMulti: (lv) => 7.0+lv*3.0, hits: 1, ignoreFlee: true, mechaOnly: true } ],
      ['mc_vulcan',  '火神砲',       '🔥', 'active',  3,  10, (lv) => `對單體造成連續物理打擊 (依DEX提升傷害)`, { spCost: 30, dmgMulti: (lv) => 0.7+lv*0.7, hits: 5, mechaOnly: true } ],
      ['mc_license', '魔導甲執照',   '🤖', 'passive', 5,  5,  (lv) => `搭乘魔導甲，攻擊力與防禦力大幅提升`, { passiveAttr: (lv) => ({ skAtk: lv*10, def: lv*10, mechaSuit: true }) } ],
      ['mc_magma',   '岩漿噴發',     '🌋', 'active',  5,  15, (lv) => `引發地底岩漿，對範圍造成持續火屬性傷害與暈眩`, { spCost: 50, element: 'fire' } ],
      ['mc_hover',   '懸浮',         '🛸', 'active',  1,  10, (lv) => `機甲懸浮於空中，免疫地面陷阱與部分魔法`, {} ],
      ['mc_shape',   '形體轉換',     '🛡️', 'active',  4,  15, (lv) => `將機甲防禦屬性轉換為 火/水/風/地，降低對應傷害`, {} ],
      ['mc_faw',     '白銀狙擊手',   '🔫', 'active',  5,  10, (lv) => `設置自動攻擊砲塔，協助輸出物理傷害`, {} ]
    ],
    royal_guard: [
      ['rg_over',    '支配烙印',   '🔱', 'active',  5,  1,  (lv) => `十字攻擊，先刺穿再揮砍，造成兩段巨大傷害與擊退`, { spCost: 60, dmgMulti: (lv) => 8.0+lv*2.0, hits: 2, weaponReq: 'spear', knockback: true } ],
      ['rg_cannon',  '加農砲長矛', '☄️', 'active',  5,  5,  (lv) => `對直線敵人造成 ${500+lv*100}% 遠程物理傷害 (受STR影響)`, { spCost: 40, dmgMulti: (lv) => 5.0+lv*1.0, hits: 1, weaponReq: 'spear' } ],
      ['rg_genesis', '創世之光',   '🌟', 'active',  10, 15, (lv) => `消耗 HP/SP，引導聖光造成極大聖屬性魔法傷害`, { spCost: 80, hpCostPct: 0.1, dmgMulti: (lv) => 10.0+lv*2.0, hits: 1, element: 'holy' } ],
      ['rg_earth',   '大地毀滅',   '💥', 'active',  5,  10, (lv) => `用盾牌重擊地面，造成範圍傷害並降低敵人防禦/攻速`, { spCost: 60, dmgMulti: (lv) => 5.0+lv*1.0, hits: 1, weaponReq: 'shield' } ],
      ['rg_shield',  '盾牌壓擊',   '🛡️', 'active',  5,  5,  (lv) => `單體巨額傷害並高機率使敵人暈眩`, {} ],
      ['rg_inspire', '靈感',       '✨', 'active',  5,  20, (lv) => `解除自身異常，極大提升全素質、攻擊力與最大生命，持續扣除HP`, {} ],
      ['rg_banding', '結盟',       '🤝', 'active',  5,  10, (lv) => `與周圍皇家禁衛隊結盟，增加物理攻擊力與防禦力`, {} ],
      ['rg_pinpoint','精準攻擊',   '🎯', 'active',  5,  15, (lv) => `瞬間突進並必定爆擊造成傷害，機率破壞敵人裝備`, {} ]
    ],
    sorcerer: [
      ['so_psychic', '超自然波',       '🌌', 'active',  5,  1,  (lv) => `大範圍無視魔法迴避，造成 7 段極高念屬性/無屬性傷害`, { spCost: 80, dmgMulti: (lv) => (10.0+lv*2.0)/7, hits: 7, element: 'neutral' } ],
      ['so_diamond', '鑽石星塵',       '❄️', 'active',  5,  5,  (lv) => `範圍水屬性魔法，機率造成敵人[結冰]狀態`, { spCost: 60, dmgMulti: (lv) => 10.0+lv*2.0, hits: 1, element: 'water' } ],
      ['so_earth',   '大地墳場',       '⛰️', 'active',  5,  5,  (lv) => `範圍地屬性魔法，機率造成敵人防禦力下降並[出血]`, { spCost: 65, dmgMulti: (lv) => 10.0+lv*2.0, hits: 1, element: 'earth' } ],
      ['so_varetyr', '狂風雷暴',       '⚡', 'active',  5,  10, (lv) => `召喚雷電長矛，造成物理與魔法混合風屬性傷害，機率暈眩`, { spCost: 70, dmgMulti: (lv) => 12.0+lv*2.0, hits: 1, element: 'wind' } ],
      ['so_fist',    '雙倍投擲(魔法拳)','👊', 'active',  5,  10, (lv) => `將詠唱中的元素箭轉化，接下來數次普攻造成極高魔法爆發傷害`, {} ],
      ['so_warmer',  '極限空虛(暖風)', '♨️', 'active',  5,  15, (lv) => `範圍內解除冰凍/結冰，並每秒恢復隊友 HP`, {} ],
      ['so_striking','打擊強化',       '⚔️', 'active',  5,  15, (lv) => `提升自身與隊友的物理攻擊力與暴擊率`, {} ],
      ['so_spirit',  '精靈控制',       '🧚', 'passive', 3,  5,  (lv) => `召喚四大元素精靈，並根據精靈模式獲得強大素質或攻擊加成`, {} ]
    ],
    shadow_chaser: [
      ['sc_fatal',     '致命威脅', '🔪', 'active',  10, 1,  (lv) => `瞬間逼近造成 ${600+lv*150}% 傷害，裝備短劍發揮極限威力`, { spCost: 40, dmgMulti: (lv) => 6.0+lv*1.5, hits: 1, ignoreFlee: true } ],
      ['sc_triangle',  '三角射擊', '🏹', 'active',  10, 5,  (lv) => `射出三發箭矢共造成 ${300+lv*100}% 傷害，高機率擊退`, { spCost: 50, dmgMulti: (lv) => 3.0+lv*1.0, hits: 3, weaponReq: 'bow' } ],
      ['sc_feint',     '虛擊炸彈', '💣', 'active',  3,  10, (lv) => `留下替身並向後退隱匿，替身爆炸造成大範圍物理傷害`, {} ],
      ['sc_shadow',    '魅影形態', '🎭', 'active',  5,  10, (lv) => `藏匿於敵方影子中，將自身受到的傷害轉移給該敵人`, {} ],
      ['sc_reproduce', '複製',     '📝', 'passive', 10, 5,  (lv) => `能學習其他職業的三轉技能 (上限1招)`, {} ],
      ['sc_mask_ign',  '無知面具', '🎭', 'active',  3,  15, (lv) => `降低目標 SP，並使其短時間內無法使用技能`, {} ],
      ['sc_mask_weak', '虛弱面具', '🎭', 'active',  3,  15, (lv) => `解除目標的武器與盾牌，並降低 MaxHP`, {} ],
      ['sc_invis',     '隱形',     '🥷', 'active',  5,  20, (lv) => `進入完全隱形狀態，普攻必定爆擊但持續消耗 SP`, {} ]
    ],
    sura: [
      ['su_dragon',    '雙龍腳',     '🐉', 'active', 10, 1,  (lv) => `作為連技起手，造成兩次打擊並使敵人短暫僵直`, {} ],
      ['su_empire',    '大纏崩墜',   '💥', 'active', 5,  5,  (lv) => `接在雙龍腳之後，將敵人定身並造成巨額傷害`, {} ],
      ['su_tiger',     '虎砲',       '🐯', 'active', 10, 10, (lv) => `消耗大量 HP，根據消耗的 HP 造成範圍巨大真實爆發傷害`, { spCost: 50, hpCostPct: 0.2, hpSpScalingDmg: true, hits: 1 } ],
      ['su_hell',      '羅剎破凰擊', '🔥', 'active', 10, 15, (lv) => `消耗氣球與剩餘 SP，HP越低傷害越高，無視防禦的單體毀滅打擊`, { spCost: 100, hpCostPct: 0.1, dmgMulti: (lv) => 15.0+lv*3.0, hits: 1, ignoreDef: true } ],
      ['su_skynet',    '天羅地網',   '🌪️', 'active', 5,  5,  (lv) => `對周圍瘋狂旋轉攻擊，造成多段傷害並擊退敵人`, { spCost: 15, dmgMulti: (lv) => 4.0+lv*1.0, hits: 4 } ],
      ['su_cure',      '點穴-活',    '✨', 'active', 5,  10, (lv) => `恢復自身與隊友生命，並解除各種負面狀態`, {} ],
      ['su_rising',    '潛龍昇天',   '🐉', 'active', 10, 20, (lv) => `MaxHP 與 MaxSP 大幅增加，攻速提升，並維持滿氣球狀態`, {} ],
      ['su_lightning', '閃電步',     '⚡', 'active', 5,  10, (lv) => `被遠程攻擊鎖定時瞬間移動至目標身邊反擊`, {} ]
    ],
    minstrel_wanderer: [
      ['mw_rain',    '大暴雨',         '🌧️', 'active',  5,  1,  (lv) => `消耗 70 SP，降下箭雨造成 ${lv*12} 段物理傷害 (受AGI/DEX影響)`, { spCost: 70, dmgMulti: 1.0, hits: (lv) => lv*12, weaponReq: 'bow' } ],
      ['mw_metal',   '金屬狂嘯',       '🎸', 'active',  5,  5,  (lv) => `造成巨大單體魔法傷害，同時吸收目標 SP`, {} ],
      ['mw_lessons', '聲樂課程',       '📖', 'passive', 10, 5,  (lv) => `增加所有歌曲/舞蹈持續時間，MaxSP 提升`, { passiveAttr: (lv) => ({ maxSpPct: lv*2 }) } ],
      ['mw_echo',    '絕望之歌(迴音)', '🎤', 'active',  5,  10, (lv) => `範圍魔法傷害並機率使敵人陷入恐懼`, {} ],
      ['mw_gloomy',  '憂鬱的微風',     '🍃', 'active',  5,  15, (lv) => `降低目標攻速與迴避，但部分特定職業技能傷害翻倍`, {} ],
      ['mw_swing',   '搖擺舞',         '💃', 'active',  5,  10, (lv) => `全隊 ASPD 大幅提升，移動速度增加`, {} ],
      ['mw_siren',   '賽壬之音',       '🧜‍♀️', 'active',  5,  15, (lv) => `魅惑周圍的敵人，使其無法攻擊施法者`, {} ],
      ['mw_reverb',  '殘響',           '🎼', 'active',  5,  20, (lv) => `在地面設置殘響，觸碰或手動引爆時造成魔法混合傷害`, {} ]
    ],
    genetic: [
      ['ge_tornado', '手推車龍捲風',   '🌪️', 'active',  5,  1,  (lv) => `消耗 40 SP，旋轉推車造成 ${500+lv*100}% 物理傷害與擊退`, { spCost: 40, dmgMulti: (lv) => 5.0+lv*1.0, hits: 1, knockback: true } ],
      ['ge_cannon',  '手推車加農砲',   '💣', 'active',  5,  5,  (lv) => `消耗 50 SP，發射砲彈造成視 INT 影響的極大遠程無屬性物理傷害`, { spCost: 50, dmgMulti: (lv) => 8.0+lv*1.5, hits: 1, scalingStats: ['int'] } ],
      ['ge_weed',    '瘋狂野草',       '🌿', 'active',  10, 15, (lv) => `大範圍地屬性傷害，消除所有地面魔法(地領/光壁)`, { spCost: 80, dmgMulti: (lv) => 6.0+lv*1.0, hits: 1, element: 'earth', removeGroundEffects: true } ],
      ['ge_hell',    '地獄植物',       '🥀', 'active',  5,  10, (lv) => `召喚食人植物攻擊周圍敵人，造成無視防禦的固定傷害與出血`, {} ],
      ['ge_blood',   '吸血植物',       '🩸', 'active',  5,  5,  (lv) => `將吸血種子植入敵人，持續吸取 HP 轉移給施法者`, {} ],
      ['ge_spore',   '孢子爆炸',       '🍄', 'active',  5,  10, (lv) => `附著炸彈孢子，數秒後引爆造成廣範圍極高傷害`, {} ],
      ['ge_howl',    '曼陀羅嚎叫',     '😱', 'active',  5,  15, (lv) => `降低周圍敵人 INT 並增加其固定詠唱時間`, {} ],
      ['ge_research','基因研究',       '🧬', 'passive', 10, 5,  (lv) => `增加藥水恢復量、調配成功率與 MaxSP`, {} ]
    ],

    // ================= 四轉職業 =================
    dragon_knight: [
      ['dk_hack',    '橫掃斬',         '⚔️', 'active',  10, 1,  (lv) => `消耗 70 SP，範圍劈砍造成 ${1500+lv*300}% 傷害，無視部分物理防禦`, { spCost: 70, dmgMulti: (lv) => 15.0+lv*3.0, hits: 2, ignoreDefPct: 30 } ],
      ['dk_madness', '狂暴斬擊',       '🐉', 'active',  10, 5,  (lv) => `消耗 80 SP，造成 ${2000+lv*500}% 物理爆發，依賴武器重量`, { spCost: 80, dmgMulti: (lv) => 20.0+lv*5.0, hits: 1, critBonus: 50 } ],
      ['dk_servant', '侍從武器',       '🗡️', 'active',  5,  10, (lv) => `召喚虛空幻影武器隨機攻擊鎖定的敵人`, {} ],
      ['dk_aura',    '龍之光環',       '✨', 'passive', 10, 10, (lv) => `全屬性超幅提升，物理攻擊力極限突破`, { passiveAttr: (lv) => ({ atkPct: lv*2, str: lv*3 }) } ],
      ['dk_vigor',   '活力',           '💪', 'passive', 10, 15, (lv) => `依據自身 MaxHP 大幅增加近戰物理技能的最終傷害`, {} ],
      ['dk_breath',  '龍之吐息(四轉)', '🔥', 'active',  10, 20, (lv) => `終極吐息，造成毀滅性範圍傷害，受 Vigor 影響`, {} ],
      ['dk_storm',   '風暴斬擊',       '🌪️', 'active',  5,  15, (lv) => `連續兩次十字範圍揮砍，造成極高 AP 爆發傷害`, {} ],
      ['dk_pierce',  '衝鋒突刺',       '🔱', 'active',  5,  15, (lv) => `騎乘狀態限定，瞬間突刺造成多段穿甲傷害`, {} ]
    ],
    arch_mage: [
      ['am_arrow',     '緋紅流星(碧血箭)', '☄️', 'active',  10, 1,  (lv) => `降下火隕石，造成 ${2500+lv*300}% 火屬性魔法傷害`, { spCost: 100, dmgMulti: (lv) => 25.0+lv*3.0, hits: 1, element: 'fire' } ],
      ['am_cannon',    '風暴加農砲',       '🌪️', 'active',  10, 5,  (lv) => `發射風暴球體，造成多段風屬性魔法傷害`, { spCost: 100, dmgMulti: (lv) => 10.0+lv*2.0, hits: 3, element: 'wind' } ],
      ['am_slash',     '冰凍斬',           '🧊', 'active',  10, 5,  (lv) => `凝聚冰刃斬擊，造成水魔法傷害並降低敵人魔法防禦`, {} ],
      ['am_rock',      '岩石崩落',         '⛰️', 'active',  10, 5,  (lv) => `召喚巨石砸擊，對單體及其周圍造成極高地屬性傷害`, {} ],
      ['am_astral',    '星辰打擊',         '🌠', 'active',  10, 15, (lv) => `召喚群星隕落，無屬性極致魔法，消耗 AP 爆發`, {} ],
      ['am_climax',    '巔峰(魔力極限)',   '🔮', 'active',  5,  20, (lv) => `進入巔峰狀態，接下來的四轉魔法產生型態變化與倍率暴增`, {} ],
      ['am_staff',     '雙手杖修練',       '🪄', 'passive', 10, 10, (lv) => `裝備雙手杖時，無視目標極高比例 MDEF`, {} ],
      ['am_hurricane', '毀滅風暴',         '🌀', 'active',  10, 15, (lv) => `創造毀滅龍捲風，大範圍席捲所有敵人`, {} ]
    ],
    shadow_cross: [
      ['sc_savage',  '野蠻衝擊',     '💥', 'active',  10, 1,  (lv) => `消耗 60 SP，暴擊時造成 ${1800+lv*400}% 致命傷害，隱匿時發動威力加倍`, { spCost: 60, dmgMulti: (lv) => 18.0+lv*4.0, hits: 1, canCrit: true } ],
      ['sc_exceed',  '暗影超越',     '🌑', 'active',  5,  5,  (lv) => `短時間內解除攻速上限限制，普攻與技能速度狂飆`, {} ],
      ['sc_knife',   '舞動匕首',     '🔪', 'active',  5,  10, (lv) => `召喚暗影匕首環繞自身，每秒對靠近的敵人造成傷害`, {} ],
      ['sc_claw',    '致命暗影爪',   '爪', 'active',  10, 15, (lv) => `消耗 AP 的終極斬擊，附帶極高無視防禦與爆擊加成`, {} ],
      ['sc_venom',   '強效劇毒',     '🧪', 'passive', 10, 10, (lv) => `提升所有毒屬性技能傷害，新毒效果增強`, {} ],
      ['sc_eternal', '永恆斬',       '❌', 'active',  10, 5,  (lv) => `十字斬的四轉進化版，連擊次數與傷害翻倍`, {} ],
      ['sc_sense',   '暗影直覺',     '👁️', 'passive', 10, 5,  (lv) => `永久提升迴避與爆擊傷害，並機率閃避指向技能`, {} ],
      ['sc_envenom', '劇毒暗影',     '☠️', 'active',  5,  15, (lv) => `將武器浸泡在極致深淵毒液中，普攻附加真實毒傷`, {} ]
    ],
    cardinal: [
      ['ca_arbitrium',  '仲裁聖光', '⚖️', 'active',  10, 1,  (lv) => `對目標及其周圍造成巨大聖屬魔法傷害，隨後觸發二次爆炸`, { spCost: 90, dmgMulti: (lv) => 20.0+lv*4.0, hits: 2, element: 'holy' } ],
      ['ca_pneumaticus','氣穴風暴', '🌪️', 'active',  10, 5,  (lv) => `無屬性魔法爆發，對聖屬性抗性高的敵人造成毀滅打擊`, {} ],
      ['ca_dilectio',   '神聖治癒', '💖', 'active',  10, 10, (lv) => `消耗 AP，極大範圍全隊究極恢復，並賦予超量護盾`, {} ],
      ['ca_presens',    '敏銳洞察', '👁️', 'active',  5,  15, (lv) => `提升全隊 CRI 與 爆擊傷害`, {} ],
      ['ca_argutus',    '銳利武器', '🗡️', 'active',  5,  15, (lv) => `提升全隊 HIT 與 遠程/近戰物理傷害比例`, {} ],
      ['ca_fidus',      '堅定信仰', '⛪', 'passive', 10, 5,  (lv) => `聖屬性魔法傷害提升 ${lv*5}%，SP 回復力倍增`, { passiveAttr: (lv) => ({ holyDmgPct: lv*5 }) } ],
      ['ca_benedictum', '祝福',     '👼', 'active',  5,  20, (lv) => `全面提升全隊所有素質 (四轉版天賜)`, {} ],
      ['ca_reliquia',   '聖物',     '🛡️', 'active',  5,  20, (lv) => `召喚聖物區域，區域內隊友免疫大部分異常狀態`, {} ]
    ],
    windhawk: [
      ['wh_gale',     '狂風暴雨(Gale Storm)', '🌪️', 'active',  10, 1,  (lv) => `連續射擊造成大範圍風/無屬性傷害，裝備專用弓傷害提升`, { spCost: 80, dmgMulti: (lv) => 20.0+lv*5.0, hits: 1 } ],
      ['wh_hawk',     '老鷹衝刺',             '🦅', 'active',  10, 5,  (lv) => `指揮四轉獵鷹衝撞，造成極端暴力的單體無視防禦物理傷害`, {} ],
      ['wh_calamity', '災厄狂風',             '🍃', 'active',  5,  15, (lv) => `消耗 AP，進入極限射擊狀態，所有遠程傷害無限制飆升`, {} ],
      ['wh_crescive', '新月之箭',             '🏹', 'active',  10, 10, (lv) => `累積能量射出一發穿透極強的箭矢，隨蓄力段數增加倍率`, {} ],
      ['wh_nature',   '自然親和',             '🍃', 'passive', 10, 5,  (lv) => `遠程物理傷害提升 ${lv*4}%，獵鷹傷害倍增`, { passiveAttr: (lv) => ({ rangeDmgPct: lv*4 }) } ],
      ['wh_trap',     '進階陷阱',             '🕸️', 'active',  5,  10, (lv) => `設置能束縛 Boss 級魔物的強效陷阱，並附帶屬性減抗`, {} ],
      ['wh_sign',     '風之印記',             '🌀', 'active',  5,  20, (lv) => `標記敵人，使其受到的遠程物理與老鷹傷害暴增`, {} ],
      ['wh_sharp',    '銳利射擊(強化)',       '🎯', 'passive', 10, 5,  (lv) => `提升爆擊率，使弓箭普攻有機率造成範圍濺射傷害`, {} ]
    ],
    meister: [
      ['ms_stomp',   '戰斧踏伐',   '🪓', 'active',  10, 1,  (lv) => `巨斧重擊地面造成 ${2500+lv*400}% 範圍爆發，無視部分防禦`, { spCost: 80, dmgMulti: (lv) => 25.0+lv*4.0, hits: 1, weaponReq: 'axe' } ],
      ['ms_spark',   '火花衝擊',   '💥', 'active',  10, 5,  (lv) => `魔導甲全開，發射高能粒子砲造成無/火屬性連續傷害`, {} ],
      ['ms_abm',     '愛國者飛彈', '🚀', 'active',  10, 10, (lv) => `鎖定範圍內所有敵人發射導彈，大範圍洗地打擊`, {} ],
      ['ms_rush',    '衝刺地震',   '🏃', 'active',  10, 15, (lv) => `消耗 AP，機甲高速衝撞並引發強烈地震，極度控場`, {} ],
      ['ms_machine', '製造機甲',   '🤖', 'passive', 5,  5,  (lv) => `允許召喚並搭乘最新型四轉超級魔導甲，解鎖專屬武裝`, {} ],
      ['ms_upgrade', '升級套件',   '⚙️', 'passive', 10, 10, (lv) => `提升所有機甲技能傷害 ${lv*3}%，機甲血量上升`, { passiveAttr: (lv) => ({ mechDmgPct: lv*3 }) } ],
      ['ms_mastery', '機甲大師',   '🛠️', 'passive', 10, 5,  (lv) => `雙手斧與機甲武器基礎攻擊力與防禦穿透力大幅提高`, {} ],
      ['ms_vulcan',  '火神砲升級', '🔥', 'passive', 5,  15, (lv) => `使火神砲成為範圍攻擊，並附帶燃燒狀態`, {} ]
    ],
    imperial_guard: [
      ['ig_cross',     '聖十字雨', '🌧️', 'active',  10, 1,  (lv) => `降下聖光造成 ${1500+lv*300}% 物理/魔法混合聖傷害，並為友軍回血`, { spCost: 70, dmgMulti: (lv) => 15.0+lv*3.0, hits: 5, element: 'holy' } ],
      ['ig_overslash', '超越斬',   '⚔️', 'active',  10, 5,  (lv) => `持盾與槍瞬間進行霸體突破斬擊，爆發極高單體傷害`, {} ],
      ['ig_judgment',  '末日審判', '⚖️', 'active',  10, 15, (lv) => `消耗 AP，造成全螢幕 ${3000+lv*500}% 單體與擴散聖屬性制裁`, { spCost: 100, dmgMulti: (lv) => 30.0+lv*5.0, hits: 1, element: 'holy' } ],
      ['ig_shield',    '神聖護盾', '🛡️', 'active',  5,  10, (lv) => `張開神聖領域，大幅降低全隊受到的所有物理/魔法傷害`, {} ],
      ['ig_mastery',   '槍劍精通', '🔱', 'passive', 10, 5,  (lv) => `同時裝備單手槍與盾牌時，攻擊力與爆擊率翻倍`, {} ],
      ['ig_aura',      '帝國光環', '✨', 'active',  5,  20, (lv) => `提升自身與周圍隊友的最終傷害減免，並增加聖屬性攻擊力`, {} ],
      ['ig_stance',    '守衛姿態', '🛡️', 'active',  5,  10, (lv) => `進入防禦姿態，移動速度下降但獲得無敵格擋機率`, {} ],
      ['ig_shoot',     '盾牌射擊', '🎯', 'active',  10, 5,  (lv) => `投擲出帶有聖光之力的盾牌，遠距離強力打擊`, {} ]
    ],
    elemental_master: [
      ['em_diamond',   '鑽石風暴',     '❄️', 'active',  10, 1,  (lv) => `強化版鑽石星塵，極大範圍冰凍並造成毀滅水魔法傷害`, {} ],
      ['em_terra',     '大地驅動',     '⛰️', 'active',  10, 5,  (lv) => `撕裂大地，造成多段地魔法傷害並卸除敵軍裝備與護盾`, {} ],
      ['em_venom',     '劇毒沼澤',     '☠️', 'active',  10, 10, (lv) => `毒屬性頂級魔法，在地面生成致死沼澤，持續扣除百分比HP`, {} ],
      ['em_conflag',   '大火災',       '🔥', 'active',  10, 15, (lv) => `召喚隕石後引發大範圍火災，使區域內敵人受到雙倍火傷`, {} ],
      ['em_lightning', '雷電領域',     '⚡', 'active',  10, 15, (lv) => `消耗 AP，展開絕對雷電領域，每秒自動落雷轟炸敵人`, {} ],
      ['em_magic',     '精靈魔法精通', '📖', 'passive', 10, 5,  (lv) => `四大屬性魔法倍率大幅上升，無視敵人 MDEF`, {} ],
      ['em_spirit',    '元素精靈大師', '🧚', 'passive', 5,  10, (lv) => `召喚四轉精靈王，精靈王擁有獨立高倍率 AI 攻擊技能`, {} ],
      ['em_burst',     '元素爆發',     '💥', 'active',  5,  20, (lv) => `獻祭精靈王，瞬間對全畫面造成破萬倍率真實魔法傷害`, {} ]
    ],
    abyss_chaser: [
      ['ac_dagger',  '深淵短劍',     '🗡️', 'active',  10, 1,  (lv) => `從陰影中造成 ${2200+lv*300}% 物理傷害，受致命威脅加成`, { spCost: 50, dmgMulti: (lv) => 22.0+lv*3.0, hits: 1, weaponReq: 'dagger' } ],
      ['ac_stab',    '靈巧刺擊',     '🔪', 'active',  10, 5,  (lv) => `無視體型與防禦的高速刺擊，機率秒殺低血量怪物`, {} ],
      ['ac_frenzy',  '狂亂射擊',     '🏹', 'active',  10, 10, (lv) => `裝備弓時連續射出無數暗影箭，單體爆發極高`, {} ],
      ['ac_square',  '深淵領域',     '🌌', 'active',  5,  15, (lv) => `展開深淵空間，範圍內敵人魔法與物理防禦歸零`, {} ],
      ['ac_mastery', '魔劍/暗器修練','⚔️', 'passive', 10, 5,  (lv) => `雙持武器或弓箭時，傷害獲得獨立倍率乘算`, {} ],
      ['ac_strike',  '深淵打擊',     '💥', 'active',  10, 15, (lv) => `消耗 AP 釋放深淵炸彈，造成擴散性魔法與物理混合傷害`, {} ],
      ['ac_smash',   '暗影粉碎',     '🌑', 'active',  5,  20, (lv) => `卸除並破壞敵方身上所有增益狀態與裝備`, {} ],
      ['ac_chain',   '連鎖反應',     '⛓️', 'passive', 5,  10, (lv) => `使用深淵技能時，高機率無消耗自動追加一次同樣技能`, {} ]
    ],
    inquisitor: [
      ['iq_oleum',     '聖油洗禮',   '🏺', 'active',  10, 1,  (lv) => `潑灑聖油，造成物理傷害並使敵人受到的火/聖屬性傷害翻倍`, { spCost: 80, dmgMulti: (lv) => 5.0+lv*2.0, hits: 5 } ],
      ['iq_explosion', '爆炸爆破',   '💥', 'active',  10, 5,  (lv) => `在浸滿聖油的敵人身上點火，引發毀滅性連鎖爆發`, {} ],
      ['iq_massive',   '巨型火爆',   '🔥', 'active',  10, 10, (lv) => `虎砲進化版，根據自身 MaxHP 與失去血量，對大範圍造成真傷`, {} ],
      ['iq_judge',     '終極審判',   '⚖️', 'active',  10, 15, (lv) => `消耗 AP 與剩餘所有 SP，阿修羅的四轉進化，神級真實傷害`, { spCost: 150, dmgMulti: (lv) => 30.0+lv*5.0, hits: 1, ignoreDef: true } ],
      ['iq_faith',     '堅定信仰',   '🛡️', 'passive', 10, 5,  (lv) => `提升 MaxHP，並使自身受到的魔法與物理傷害減免上限提高`, {} ],
      ['iq_oil',       '神聖之油',   '🧪', 'active',  5,  10, (lv) => `為自身與隊友塗抹聖油，獲得霸體與近戰物理反彈`, {} ],
      ['iq_physical',  '肉體強化',   '💪', 'passive', 10, 5,  (lv) => `力量與體力極限突破，空手或裝備拳套時基礎攻擊力暴增`, {} ],
      ['iq_aura',      '審判者光環', '✨', 'active',  5,  20, (lv) => `開啟光環，周圍不死與惡魔系敵人持續扣除大量血量`, {} ]
    ],
    troubadour_trouvere: [
      ['tt_rhythm',   '節奏射擊',   '🏹', 'active',  10, 1,  (lv) => `跟隨節拍快速射出高傷害箭矢，連擊次數隨節奏增快`, {} ],
      ['tt_rose',     '玫瑰花箭',   '🌹', 'active',  10, 5,  (lv) => `射出玫瑰造成範圍爆炸 ${1600+lv*200}% 物理傷害`, { spCost: 60, dmgMulti: (lv) => 16.0+lv*2.0, hits: 2 } ],
      ['tt_fury',     '金屬狂怒',   '🎸', 'active',  10, 10, (lv) => `金屬狂嘯進化，音波造成極大範圍無屬性魔法爆發`, {} ],
      ['tt_symphony', '神秘交響曲', '🎼', 'active',  5,  15, (lv) => `消耗 AP 演奏終極交響，使全畫面敵人攻防歸零，隊友無敵 3 秒`, {} ],
      ['tt_blend',    '混合音效',   '🎛️', 'active',  5,  10, (lv) => `可將兩首三轉合唱曲的效果獨立釋放，無需另一半職業配合`, {} ],
      ['tt_stage',    '舞台禮儀',   '🎭', 'passive', 10, 5,  (lv) => `技能 SP 消耗減少 ${lv*2}%，演奏時免疫斷詠唱與大部分異常`, { passiveAttr: (lv) => ({ spCostReduction: lv*2 }) } ],
      ['tt_encore',   '安可',       '👏', 'active',  1,  20, (lv) => `瞬間重置所有四轉技能的冷卻時間`, {} ],
      ['tt_mastery',  '吟遊大師',   '🎻', 'passive', 10, 5,  (lv) => `樂器與鞭子攻擊力增加，音符類魔法傷害獲得 INT/DEX 雙加成`, {} ]
    ],
    biolo: [
      ['bi_pharmacy',  '生化製藥',     '🧪', 'active',  5,  5,  (lv) => `能瞬間大量製造最高階的恢復藥水與生化爆炸瓶`, {} ],
      ['bi_creeper',   '爆炸藤蔓',     '🌿', 'active',  10, 1,  (lv) => `召喚藤蔓纏繞敵人並引爆，造成 ${2000+lv*300}% 物理爆發`, { spCost: 75, dmgMulti: (lv) => 20.0+lv*3.0, hits: 1, element: 'earth' } ],
      ['bi_acid_water','強酸領域-水',  '💧', 'active',  10, 5,  (lv) => `消耗四轉強酸瓶，佈置大範圍水屬性強酸，使敵人裝備溶毀`, {} ],
      ['bi_acid_wind', '強酸領域-風',  '🌪️', 'active',  10, 5,  (lv) => `消耗四轉強酸瓶，佈置大範圍風屬性強酸，附帶連續僵直雷擊`, {} ],
      ['bi_report',    '研究報告',     '📜', 'passive', 10, 10, (lv) => `提升四轉強酸瓶與爆炸藤蔓的最終傷害，增加 INT/STR`, {} ],
      ['bi_mutant',    '突變植物',     '🥀', 'active',  5,  15, (lv) => `召喚突變巨花王，巨花擁有超高血量並會自動吞噬周圍怪物`, {} ],
      ['bi_armor',     '生化裝甲',     '🛡️', 'active',  5,  10, (lv) => `用藤蔓將自身包覆，獲得巨額護盾並反彈近戰物理傷害`, {} ],
      ['bi_genetic',   '基因改造',     '🧬', 'passive', 5,  20, (lv) => `生命體全能力解放，攻防血量翻倍，並使其攻擊附帶吸血效果`, {} ]
    ]
  }
};