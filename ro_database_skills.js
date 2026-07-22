const RO_DATABASE_SKILLS = {
    SKILLS: {
      // 【初心者】
      novice: [
        { id: 'n_basic', name: '基本技能', icon: '📖', type: 'passive', maxLv: 10, reqJobLv: 1, desc: (lv) => `全屬性微幅增加 ${lv}`, passiveAttr: (lv) => ({ str: lv, agi: lv, vit: lv, int: lv, dex: lv, luk: lv }) },
        { id: 'n_playdead', name: '裝死', icon: '👻', type: 'active', maxLv: 1, reqJobLv: 5, desc: (lv) => `消耗 10 SP，瞬間回復 20% HP，並清除怪物仇恨`, spCost: (lv) => 10, healHpPct: 0.2, clearAggro: true },
        { id: 'n_firstaid', name: '急救', icon: '🩹', type: 'active', maxLv: 1, reqJobLv: 8, desc: (lv) => `消耗 3 SP，回復 15 HP`, spCost: (lv) => 3, healPower: (lv) => 15 }
      ],

      // ================= 一轉職業 =================
      swordman: [
        { id: 's_bash', name: '狂擊', icon: '⚔️', type: 'active', maxLv: 10, reqJobLv: 1, desc: (lv) => `消耗 ${5+lv*2} SP，造成 ${150+lv*30}% 物理傷害，Lv5以上高機率暈眩`, spCost: (lv) => 5+lv*2, dmgMulti: (lv) => 1.5+lv*0.3, hits: 1, stunChance: (lv) => lv>=5 ? lv*2.5 : 0 },
        { id: 's_magnum', name: '怒爆', icon: '🌋', type: 'active', maxLv: 10, reqJobLv: 15, desc: (lv) => `消耗 ${15+lv} SP，造成 ${200+lv*20}% 火屬性範圍傷害，附加10秒火屬性攻擊`, spCost: (lv) => 15+lv, dmgMulti: (lv) => 2.0+lv*0.2, hits: 1, fireEnchant: true, knockback: true },
        { id: 's_regen', name: 'HP回復力向上', icon: '❤️', type: 'passive', maxLv: 10, reqJobLv: 5, desc: (lv) => `每 10 秒回復 ${lv*5} + (MaxHP*${lv*0.2}%) 生命`, passiveAttr: (lv) => ({ hpRegenMulti: 1+lv*0.1, hpRegenFlat: lv*5 }) },
        { id: 's_mastery1', name: '單手劍修練', icon: '🗡️', type: 'passive', maxLv: 10, reqJobLv: 10, desc: (lv) => `裝備單手劍時基礎攻擊力增加 ${lv*4}`, passiveAttr: (lv) => ({ skAtk: lv*4, weaponReq: 'sword' }) },
        { id: 's_mastery2', name: '雙手劍修練', icon: '🗡️', type: 'passive', maxLv: 10, reqJobLv: 10, desc: (lv) => `裝備雙手劍時基礎攻擊力增加 ${lv*4}`, passiveAttr: (lv) => ({ skAtk: lv*4, weaponReq: 'two_handed_sword' }) },
        { id: 's_provoke', name: '挑釁', icon: '💢', type: 'active', maxLv: 10, reqJobLv: 10, desc: (lv) => `怪物防禦力下降 ${lv*5}%，但攻擊力上升 ${lv*2}%` },
        { id: 's_endure', name: '霸體', icon: '🛡️', type: 'active', maxLv: 10, reqJobLv: 20, desc: (lv) => `受擊時不會停頓，且MDEF提升 ${lv}，承受 ${lv*7} 次攻擊後失效`, buffDuration: 7, passiveAttr: (lv) => ({ mdef: lv, antiFlinch: true }) }
      ],
      magician: [
        { id: 'm_coldbolt', name: '冰箭術', icon: '❄️', type: 'active', maxLv: 10, reqJobLv: 1, desc: (lv) => `消耗 ${10+lv*2} SP，造成 ${lv} 段 ${100}% 冰魔法傷害`, spCost: (lv) => 10+lv*2, dmgMulti: (lv) => 1.0, hits: (lv) => lv, element: 'water' },
        { id: 'm_firebolt', name: '火箭術', icon: '🔥', type: 'active', maxLv: 10, reqJobLv: 10, desc: (lv) => `消耗 ${12+lv*2} SP，造成 ${lv} 段 ${100}% 火魔法傷害`, spCost: (lv) => 12+lv*2, dmgMulti: (lv) => 1.0, hits: (lv) => lv, element: 'fire' },
        { id: 'm_lightning', name: '雷擊術', icon: '⚡', type: 'active', maxLv: 10, reqJobLv: 10, desc: (lv) => `消耗 ${10+lv*2} SP，造成 ${lv} 段 ${100}% 風魔法傷害`, spCost: (lv) => 10+lv*2, dmgMulti: (lv) => 1.0, hits: (lv) => lv, element: 'wind' },
        { id: 'm_soulstrike', name: '聖靈召喚', icon: '👻', type: 'active', maxLv: 10, reqJobLv: 5, desc: (lv) => `消耗 ${15+lv} SP，造成 ${Math.floor(lv/2)+1} 段念屬性傷害，對不死系加成`, spCost: (lv) => 15+lv, dmgMulti: (lv) => 1.0, hits: (lv) => Math.floor(lv/2)+1, element: 'ghost' },
        { id: 'm_zen', name: '禪心', icon: '🧘', type: 'passive', maxLv: 10, reqJobLv: 15, desc: (lv) => `每 10 秒額外回復 ${lv*3} + (MaxSP*${lv*0.2}%) SP`, passiveAttr: (lv) => ({ spRegenMulti: 1+lv*0.1, spRegenFlat: lv*3 }) },
        { id: 'm_firewall', name: '火牆術', icon: '🧱', type: 'active', maxLv: 10, reqJobLv: 20, desc: (lv) => `消耗 40 SP，建立火牆，阻擋敵人並造成 ${50+lv*5}% 火屬性傷害 ${lv*3} 次`, spCost: 40, dmgMulti: (lv) => 0.5+lv*0.05, hits: (lv) => lv*3, element: 'fire', blockAggro: true },
        { id: 'm_frost', name: '冰凍術', icon: '🧊', type: 'active', maxLv: 10, reqJobLv: 15, desc: (lv) => `消耗 25 SP，造成 ${100+lv*10}% 水屬性傷害，${lv*6}% 機率冰凍敵人`, spCost: 25, dmgMulti: (lv) => 1.0+lv*0.1, hits: 1, freezeChance: (lv) => 30+lv*3, element: 'water' }
      ],
      thief: [
        { id: 't_double', name: '二刀連擊', icon: '⚔️', type: 'passive', maxLv: 10, reqJobLv: 1, desc: (lv) => `裝備短劍時，普攻有 ${lv*5}% 機率造成雙倍傷害`, passiveAttr: (lv) => ({ doubleHitChance: lv*5, weaponReq: 'dagger' }) },
        { id: 't_flee', name: '殘影', icon: '💨', type: 'passive', maxLv: 10, reqJobLv: 15, desc: (lv) => `FLEE (迴避率) 額外提升 ${lv*3} 點`, passiveAttr: (lv) => ({ flee: lv*3 }) },
        { id: 't_steal', name: '偷竊', icon: '🧤', type: 'active', maxLv: 10, reqJobLv: 5, desc: (lv) => `消耗 10 SP，機率從怪物身上額外獲得一件物品 (視DEX與等級)`, spCost: 10, dropBonusActive: (lv) => lv*5 },
        { id: 't_hide', name: '隱匿', icon: '🥷', type: 'active', maxLv: 10, reqJobLv: 10, desc: (lv) => `消耗 10 SP 潛入地下，閃避大部分攻擊，持續時間視等級而定`, spCost: 10, buffAttr: (lv) => ({ invulnerable: true }) },
        { id: 't_envenom', name: '施毒', icon: '☠️', type: 'active', maxLv: 10, reqJobLv: 10, desc: (lv) => `消耗 15 SP，造成 ${15+lv*15} 基礎加成與 ${150}% 傷害，高機率附加劇毒`, spCost: 15, dmgMulti: 1.5, flatDmg: (lv) => 15+lv*15, hits: 1, poisonChance: (lv) => 10+lv*4 },
        { id: 't_detox', name: '解毒', icon: '🌿', type: 'active', maxLv: 1, reqJobLv: 15, desc: (lv) => `消耗 10 SP，解除自身或目標的毒屬性狀態`, spCost: 10, curePoison: true },
        { id: 't_sand', name: '撒沙', icon: '⏳', type: 'active', maxLv: 5, reqJobLv: 20, desc: (lv) => `消耗 9 SP，造成 130% 地屬性傷害，並有 ${lv*10}% 機率致盲`, spCost: 9, dmgMulti: 1.3, hits: 1, blindChance: (lv) => lv*10, element: 'earth' }
      ],
      acolyte: [
        { id: 'a_heal', name: '治癒術', icon: '✨', type: 'active', maxLv: 10, reqJobLv: 1, desc: (lv) => `消耗 ${13+lv*3} SP，回復生命 (基於INT與等級)，對不死系造成等量聖傷害`, spCost: (lv) => 13+lv*3, healPower: (lv) => 150+lv*50, holyDmgMulti: 1.0, element: 'holy' },
        { id: 'a_bless', name: '天使之賜福', icon: '👼', type: 'active', maxLv: 10, reqJobLv: 15, desc: (lv) => `消耗 ${10+lv*4} SP，提升 STR/INT/DEX 各 ${lv} 點，解除詛咒`, spCost: (lv) => 10+lv*4, buffAttr: (lv) => ({ str: lv, int: lv, dex: lv }) },
        { id: 'a_agi', name: '加速術', icon: '🏃', type: 'active', maxLv: 10, reqJobLv: 20, desc: (lv) => `消耗 ${15+lv*3} SP，提升 AGI ${lv} 點，移動速度增加`, spCost: (lv) => 15+lv*3, buffAttr: (lv) => ({ agi: lv, flee: lv*2, moveSpeedPct: 25 }) },
        { id: 'a_holy', name: '神聖之光', icon: '🌟', type: 'active', maxLv: 1, reqJobLv: 5, desc: (lv) => `消耗 15 SP，造成 125% 聖屬性魔法傷害，吟唱短暫`, spCost: 15, dmgMulti: 1.25, hits: 1, element: 'holy' },
        { id: 'a_pneuma', name: '光之障壁', icon: '🛡️', type: 'active', maxLv: 1, reqJobLv: 25, desc: (lv) => `消耗 10 SP，創造 3x3 結界，完全免疫所有遠程物理攻擊`, spCost: 10, blockRangeChance: 100 },
        { id: 'a_ruwach', name: '光獵', icon: '👁️', type: 'active', maxLv: 1, reqJobLv: 10, desc: (lv) => `消耗 10 SP，找出周圍隱匿的敵人並造成 145% 聖屬性傷害`, spCost: 10, dmgMulti: 1.45, hits: 1, revealStealth: true, element: 'holy' },
        { id: 'a_teleport', name: '瞬間移動', icon: '🌀', type: 'active', maxLv: 2, reqJobLv: 10, desc: (lv) => `消耗 ${10-lv*1} SP，隨機傳送或回儲存點`, spCost: (lv) => 10-lv*1 }
      ],
      archer: [
        { id: 'ar_double', name: '二連矢', icon: '🏹', type: 'active', maxLv: 10, reqJobLv: 1, desc: (lv) => `消耗 ${8+lv*2} SP，連續射出兩箭，單下 ${90+lv*10}% 傷害`, spCost: (lv) => 8+lv*2, dmgMulti: (lv) => 0.9+lv*0.1, hits: 2, weaponReq: 'bow' },
        { id: 'ar_owl', name: '鴞梟之眼', icon: '🦉', type: 'passive', maxLv: 10, reqJobLv: 5, desc: (lv) => `常駐狀態，DEX 額外提升 ${lv} 點`, passiveAttr: (lv) => ({ dex: lv }) },
        { id: 'ar_vulture', name: '蒼鷹之眼', icon: '🦅', type: 'passive', maxLv: 10, reqJobLv: 10, desc: (lv) => `HIT (命中率) 提升 ${lv} 點，弓箭射程增加 ${lv} 格`, passiveAttr: (lv) => ({ hit: lv, rangeBonus: lv }) },
        { id: 'ar_shower', name: '箭雨', icon: '🌧️', type: 'active', maxLv: 10, reqJobLv: 15, desc: (lv) => `消耗 ${15+lv*3} SP，對範圍造成 ${100+lv*20}% 傷害，強制擊退目標`, spCost: (lv) => 15+lv*3, dmgMulti: (lv) => 1.0+lv*0.2, hits: 1, knockback: true },
        { id: 'ar_attention', name: '心神凝聚', icon: '🎯', type: 'active', maxLv: 10, reqJobLv: 20, desc: (lv) => `消耗 ${20+lv*5} SP，提升 AGI 與 DEX 各 ${lv}%，並探測隱形`, spCost: (lv) => 20+lv*5, buffAttr: (lv) => ({ agiPct: lv, dexPct: lv }), revealStealth: true },
        { id: 'ar_craft', name: '製造箭', icon: '🛠️', type: 'active', maxLv: 1, reqJobLv: 25, desc: (lv) => `消耗 10 SP，將收集到的材料製作成特定屬性箭矢`, spCost: 10 },
        { id: 'ar_charge', name: '衝鋒箭', icon: '💨', type: 'active', maxLv: 1, reqJobLv: 30, desc: (lv) => `消耗 15 SP，造成 150% 傷害並將敵人擊退 6 格`, spCost: 15, dmgMulti: 1.5, hits: 1, knockback: true }
      ],
      merchant: [
        { id: 'me_mammonite', name: '金錢攻擊', icon: '🪙', type: 'active', maxLv: 10, reqJobLv: 1, desc: (lv) => `消耗 ${lv*100} Zeny，造成 ${150+lv*50}% 強力物理傷害`, zenyCost: (lv) => lv*100, dmgMulti: (lv) => 1.5+lv*0.5, hits: 1 },
        { id: 'me_weight', name: '負重量上升', icon: '🎒', type: 'passive', maxLv: 10, reqJobLv: 5, desc: (lv) => `最大負重量增加 ${lv*200}`, passiveAttr: (lv) => ({ weightBonus: lv*200 }) },
        { id: 'me_discount', name: '低價買進', icon: '📉', type: 'passive', maxLv: 10, reqJobLv: 10, desc: (lv) => `從 NPC 購買道具時，價格降低 ${lv*2.4}%`, passiveAttr: (lv) => ({ buyPriceDiscount: lv*2.4 }) },
        { id: 'me_overcharge', name: '高價賣出', icon: '📈', type: 'passive', maxLv: 10, reqJobLv: 10, desc: (lv) => `將道具賣給 NPC 時，價格提升 ${lv*2.4}%`, passiveAttr: (lv) => ({ sellPriceBonus: lv*2.4 }) },
        { id: 'me_cart', name: '手推車使用', icon: '🛒', type: 'passive', maxLv: 10, reqJobLv: 15, desc: (lv) => `可租借手推車，隨等級降低推車減速懲罰`, passiveAttr: (lv) => ({ cartEnable: true }) },
        { id: 'me_vending', name: '露天商店', icon: '🏪', type: 'active', maxLv: 10, reqJobLv: 15, desc: (lv) => `可開設商店販售物品，最高可賣 ${lv+2} 種商品` },
        { id: 'me_loud', name: '大聲呼喊', icon: '🗣️', type: 'active', maxLv: 1, reqJobLv: 20, desc: (lv) => `消耗 8 SP，短時間內提升 4 點 STR`, spCost: 8, buffAttr: (lv) => ({ str: 4 }) }
      ],

      // ================= 二轉 (2-1) =================
      knight: [
        { id: 'k_pierce', name: '連刺攻擊', icon: '🔱', type: 'active', maxLv: 10, reqJobLv: 1, desc: (lv) => `消耗 7 SP，對小/中/大型分別造成 1/2/3 段 ${100+lv*10}% 傷害`, spCost: 7, dmgMulti: (lv) => 1.0+lv*0.1, hits: 3, weaponReq: 'spear' }, 
        { id: 'k_bowling', name: '怪物互擊', icon: '💥', type: 'active', maxLv: 10, reqJobLv: 15, desc: (lv) => `消耗 ${15+lv*2} SP，擊退敵人互撞，造成兩段 ${100+lv*40}% 範圍傷害`, spCost: (lv) => 15+lv*2, dmgMulti: (lv) => 1.0+lv*0.4, hits: 2, knockback: true },
        { id: 'k_quicken', name: '雙手劍增壓', icon: '⚡', type: 'active', maxLv: 10, reqJobLv: 10, desc: (lv) => `消耗 ${20+lv*4} SP，裝備雙手劍時 ASPD 提升 30%`, spCost: (lv) => 20+lv*4, buffAttr: (lv) => ({ aspdBonusPct: 30, weaponReq: 'two_handed_sword' }) }, 
        { id: 'k_pecopeco', name: '騎乘術', icon: '🦤', type: 'passive', maxLv: 1, reqJobLv: 20, desc: (lv) => `可騎乘大嘴鳥，體型修正為大型，長矛傷害提升`, passiveAttr: (lv) => ({ moveSpeedPct: 25, sizeModifier: 'large' }) },
        { id: 'k_cavalry', name: '騎乘攻擊', icon: '🏇', type: 'passive', maxLv: 5, reqJobLv: 25, desc: (lv) => `恢復騎乘大嘴鳥時下降的攻擊速度 (最高恢復100%)` },
        { id: 'k_spearmast', name: '長矛修練', icon: '🔱', type: 'passive', maxLv: 10, reqJobLv: 5, desc: (lv) => `裝備長矛時攻擊力增加 ${lv*4}，騎乘時增加 ${lv*5}`, passiveAttr: (lv) => ({ skAtk: lv*4, weaponReq: 'spear' }) },
        { id: 'k_brandish', name: '迴旋擊', icon: '🌪️', type: 'active', maxLv: 10, reqJobLv: 25, desc: (lv) => `消耗 12 SP，騎乘長矛專用，對扇形範圍造成 ${100+lv*20}% 傷害`, spCost: 12, dmgMulti: (lv) => 1.0+lv*0.2, hits: 1, weaponReq: 'spear' }
      ],
      wizard: [
        { id: 'w_storm', name: '暴風雪', icon: '❄️', type: 'active', maxLv: 10, reqJobLv: 1, desc: (lv) => `消耗 ${40+lv*5} SP，造成 10 段 ${140+lv*40}% 冰傷害，高機率冰凍`, spCost: (lv) => 40+lv*5, dmgMulti: (lv) => 1.4+lv*0.4, hits: 10, freezeChance: (lv) => lv*6, element: 'water' },
        { id: 'w_lov', name: '怒雷強擊', icon: '🌩️', type: 'active', maxLv: 10, reqJobLv: 10, desc: (lv) => `消耗 ${40+lv*4} SP，4 波共 40 段 ${80+lv*20}% 風傷害，機率致盲`, spCost: (lv) => 40+lv*4, dmgMulti: (lv) => 0.8+lv*0.2, hits: 10, blindChance: (lv) => lv*4, element: 'wind' },
        { id: 'w_meteor', name: '隕石術', icon: '☄️', type: 'active', maxLv: 10, reqJobLv: 15, desc: (lv) => `消耗 ${30+lv*5} SP，降下 ${Math.floor(lv/2)+2} 顆隕石，每顆 ${100+lv*50}% 火傷害`, spCost: (lv) => 30+lv*5, dmgMulti: (lv) => 1.0+lv*0.5, hits: (lv) => Math.floor(lv/2)+2, stunChance: (lv) => lv*3, element: 'fire' },
        { id: 'w_jt', name: '雷鳴術', icon: '⚡', type: 'active', maxLv: 10, reqJobLv: 20, desc: (lv) => `消耗 ${15+lv*3} SP，發射 ${lv+2} 發雷球，每發 100% 傷害並強力擊退`, spCost: (lv) => 15+lv*3, dmgMulti: 1.0, hits: (lv) => lv+2, element: 'wind', knockback: true },
        { id: 'w_quagmire', name: '泥沼地', icon: '🕳️', type: 'active', maxLv: 5, reqJobLv: 15, desc: (lv) => `減少範圍內敵人 AGI 與 DEX 各 ${lv*10}%，並解除加速狀態` },
        { id: 'w_earthspike', name: '地震術', icon: '⛰️', type: 'active', maxLv: 5, reqJobLv: 5, desc: (lv) => `消耗 ${10+lv*2} SP，從地面突刺造成 ${lv} 段 100% 地屬性傷害`, spCost: (lv) => 10+lv*2, dmgMulti: 1.0, hits: (lv) => lv, element: 'earth' },
        { id: 'w_sense', name: '怪物情報', icon: '👁️', type: 'active', maxLv: 1, reqJobLv: 5, desc: (lv) => `消耗 10 SP，獲取目標魔物的血量、屬性與弱點` }
      ],
      assassin: [
        { id: 'as_sonic', name: '音速投擲', icon: '🌪️', type: 'active', maxLv: 10, reqJobLv: 1, desc: (lv) => `消耗 34 SP，瞬間八連擊造成 ${300+lv*60}% 傷害，${10+lv*2}% 暈眩`, spCost: 34, dmgMulti: (lv) => (3.0+lv*0.6)/8, hits: 8, stunChance: (lv) => 10+lv*2 },
        { id: 'as_katar', name: '拳刃修練', icon: '🗡️', type: 'passive', maxLv: 10, reqJobLv: 10, desc: (lv) => `裝備拳刃時 ATK 提升 ${lv*3}，暴擊率倍增`, passiveAttr: (lv) => ({ skAtk: lv*3, critMulti: 2.0, weaponReq: 'katar' }) },
        { id: 'as_grimtooth', name: '無影之牙', icon: '🦇', type: 'active', maxLv: 5, reqJobLv: 15, desc: (lv) => `隱匿時使用，消耗 3 SP 對範圍造成 ${100+lv*20}% 傷害`, spCost: 3, dmgMulti: (lv) => 1.0+lv*0.2, hits: 1, requiresHide: true },
        { id: 'as_cloak', name: '偽裝', icon: '🥷', type: 'active', maxLv: 10, reqJobLv: 5, desc: (lv) => `消耗 15 SP，貼牆時可完全隱形並移動`, buffAttr: (lv) => ({ sneak: true }) },
        { id: 'as_enchant', name: '塗毒', icon: '🧪', type: 'active', maxLv: 10, reqJobLv: 10, desc: (lv) => `消耗 20 SP，將武器屬性轉為毒屬性，普攻機率使敵人中毒`, spCost: 20, buffAttr: (lv) => ({ element: 'poison', poisonChance: lv*2 }) },
        { id: 'as_venom', name: '毒性感染', icon: '☠️', type: 'active', maxLv: 5, reqJobLv: 20, desc: (lv) => `對已中毒的敵人造成強力爆發毒屬性傷害` },
        { id: 'as_right', name: '右手修練', icon: '🗡️', type: 'passive', maxLv: 5, reqJobLv: 10, desc: (lv) => `裝備雙刀時，恢復右手因雙持降低的傷害 (最高100%)` },
        { id: 'as_left', name: '左手修練', icon: '🗡️', type: 'passive', maxLv: 5, reqJobLv: 10, desc: (lv) => `裝備雙刀時，恢復左手因雙持降低的傷害 (最高80%)` }
      ],
      priest: [
        { id: 'pr_magnus', name: '十字驅魔攻擊', icon: '✝️', type: 'active', maxLv: 10, reqJobLv: 15, desc: (lv) => `消耗 ${40+lv*5} SP (需藍礦)，對不死/惡魔造成 ${lv} 段毀滅聖傷害`, spCost: (lv) => 40+lv*5, dmgMulti: (lv) => 1.0+lv*0.3, hits: (lv) => lv, targetRace: ['undead', 'demon'], element: 'holy' },
        { id: 'pr_magni', name: '聖母之頌歌', icon: '🎵', type: 'active', maxLv: 5, reqJobLv: 5, desc: (lv) => `消耗 40 SP，全隊 SP 自然回復速度提升 2 倍`, spCost: 40, buffAttr: (lv) => ({ spRegenMulti: 2.0 }) },
        { id: 'pr_kyrie', name: '霸邪之陣', icon: '🛡️', type: 'active', maxLv: 10, reqJobLv: 10, desc: (lv) => `消耗 20 SP，賦予防護罩抵擋 ${lv*3} 次或 MaxHP ${10+lv*2}% 的傷害`, spCost: 20, buffAttr: (lv) => ({ shieldHits: lv*3, shieldHpPct: 10+lv*2 }) },
        { id: 'pr_lex', name: '神威祈福', icon: '✨', type: 'active', maxLv: 5, reqJobLv: 15, desc: (lv) => `消耗 20 SP，隊友物理攻擊力直接提升 ${lv*5} 點`, spCost: 20, buffAttr: (lv) => ({ flatAtk: lv*5 }) },
        { id: 'pr_res', name: '復活術', icon: '👼', type: 'active', maxLv: 4, reqJobLv: 20, desc: (lv) => `消耗 60 SP (需藍礦)，復活隊友並恢復 ${lv*20}% HP` },
        { id: 'pr_asper', name: '灑水祈福', icon: '💧', type: 'active', maxLv: 5, reqJobLv: 10, desc: (lv) => `消耗 20 SP (需聖水)，將隊友武器屬性轉為聖屬性`, spCost: 20, buffAttr: (lv) => ({ element: 'holy' }) },
        { id: 'pr_sanct', name: '光耀之堂', icon: '🌟', type: 'active', maxLv: 10, reqJobLv: 20, desc: (lv) => `消耗 30 SP (需藍礦)，範圍內每秒恢復 777 HP，對不死造成傷害` },
        { id: 'pr_lexa', name: '轉生術', icon: '✝️', type: 'active', maxLv: 10, reqJobLv: 15, desc: (lv) => `機率一擊必殺不死系怪物，失敗則造成聖屬性傷害` }
      ],
      hunter: [
        { id: 'ht_blitz', name: '閃電衝擊', icon: '🦅', type: 'active', maxLv: 5, reqJobLv: 1, desc: (lv) => `老鷹造成無視防禦與迴避的 ${lv} 段強制無屬性傷害`, dmgMulti: 1.0, hits: (lv) => lv, ignoreDef: true, ignoreFlee: true },
        { id: 'ht_falcon', name: '獵鷹尋笛', icon: '🦉', type: 'passive', maxLv: 1, reqJobLv: 10, desc: (lv) => `普攻時視 LUK 機率自動觸發閃電衝擊 (需裝備弓與老鷹)` },
        { id: 'ht_trap_clay', name: '爆炎陷阱', icon: '💥', type: 'active', maxLv: 5, reqJobLv: 20, desc: (lv) => `消耗 15 SP，設置陷阱造成大範圍火屬性傷害 (視DEX/INT)`, spCost: 15, dmgMulti: (lv) => 2.0+lv*1.0, element: 'fire' },
        { id: 'ht_trap_frost', name: '霜凍陷阱', icon: '❄️', type: 'active', maxLv: 5, reqJobLv: 15, desc: (lv) => `造成水屬性傷害並高機率冰凍範圍內的敵人`, element: 'water' },
        { id: 'ht_trap_ankle', name: '定位陷阱', icon: '⛓️', type: 'active', maxLv: 5, reqJobLv: 10, desc: (lv) => `將踩到的魔物完全定身 ${lv*4} 秒` },
        { id: 'ht_beast', name: '野獸剋星', icon: '🐺', type: 'passive', maxLv: 10, reqJobLv: 5, desc: (lv) => `對動物系與昆蟲系魔物傷害增加 ${lv*4}%`, passiveAttr: (lv) => ({ raceDmgBonus: { beast: lv*4, insect: lv*4 } }) },
        { id: 'ht_phobia', name: '滑動陷阱', icon: '💨', type: 'active', maxLv: 5, reqJobLv: 10, desc: (lv) => `將踩到的魔物強制向前滑動並受到少量傷害` }
      ],
      blacksmith: [
        { id: 'bs_cart', name: '手推車終結技', icon: '🛒', type: 'active', maxLv: 10, reqJobLv: 15, desc: (lv) => `消耗 ${150*lv} Zeny，造成最高 ${150+lv*150}% 強制無屬性必中傷害`, zenyCost: (lv) => 150*lv, spCost: 15, dmgMulti: (lv) => 1.5+lv*1.5, hits: 1, ignoreDef: true, ignoreFlee: true },
        { id: 'bs_adrenalin', name: '速度激發', icon: '⚡', type: 'active', maxLv: 5, reqJobLv: 5, desc: (lv) => `消耗 30 SP，裝備斧/鈍器時全隊 ASPD 大幅提升 30%`, spCost: 30, buffAttr: (lv) => ({ aspdBonusPct: 30, weaponReq: ['axe', 'mace'] }) },
        { id: 'bs_weapon', name: '武器研究', icon: '🔨', type: 'passive', maxLv: 10, reqJobLv: 10, desc: (lv) => `基礎攻擊力與命中率各提升 ${lv*2}，提高鍛造成功率`, passiveAttr: (lv) => ({ skAtk: lv*2, hit: lv*2 }) },
        { id: 'bs_max_power', name: '無視體型攻擊', icon: '💪', type: 'active', maxLv: 5, reqJobLv: 20, desc: (lv) => `消耗 20 SP，武器對所有體型皆發揮 100% 傷害`, spCost: 20, buffAttr: (lv) => ({ ignoreSizePenalty: true }) },
        { id: 'bs_power_thrust', name: '凶砍', icon: '🪓', type: 'active', maxLv: 5, reqJobLv: 15, desc: (lv) => `消耗 15 SP，全隊武器攻擊力提升 ${lv*5}%，但武器有機率損壞`, spCost: 15, buffAttr: (lv) => ({ atkPct: lv*5 }) },
        { id: 'bs_hammer', name: '大地之擊', icon: '⛰️', type: 'active', maxLv: 5, reqJobLv: 25, desc: (lv) => `敲擊地面造成範圍傷害並機率暈眩` },
        { id: 'bs_ore', name: '尋找礦石', icon: '💎', type: 'passive', maxLv: 1, reqJobLv: 10, desc: (lv) => `打怪時有機率額外掉落各種礦石` }
      ],

      // ================= 二轉 (2-2) =================
      crusader: [
        { id: 'cr_cross', name: '聖十字審判', icon: '✨', type: 'active', maxLv: 10, reqJobLv: 1, desc: (lv) => `反噬自身 20% HP，對周圍造成 ${100+lv*40}% (ATK+MATK) 聖屬性傷害 3 段`, spCost: (lv) => 20+lv*3, hpCostPct: 0.2, dmgMulti: (lv) => 1.0+lv*0.4, hits: 3, element: 'holy' },
        { id: 'cr_faith', name: '信任', icon: '🛡️', type: 'passive', maxLv: 10, reqJobLv: 5, desc: (lv) => `最大 HP 永久增加 ${lv*200}，神聖抗性增加 ${lv*5}%`, passiveAttr: (lv) => ({ maxHpFlat: lv*200, holyResist: lv*5 }) },
        { id: 'cr_guard', name: '自動防禦', icon: '🛡️', type: 'active', maxLv: 10, reqJobLv: 10, desc: (lv) => `裝備盾牌時，受擊有 ${lv*3}% 機率完全格擋傷害`, buffAttr: (lv) => ({ blockChance: lv*3, weaponReq: 'shield' }) },
        { id: 'cr_shield_chain', name: '連續盾擊', icon: '🛡️', type: 'active', maxLv: 5, reqJobLv: 15, desc: (lv) => `消耗 ${28+lv*3} SP，丟擲盾牌造成 5 段傷害 (受盾重影響)`, spCost: (lv) => 28+lv*3, dmgMulti: (lv) => 1.0+lv*0.3, hits: 5, weaponReq: 'shield' },
        { id: 'cr_holy_cross', name: '聖十字攻擊', icon: '✝️', type: 'active', maxLv: 6, reqJobLv: 10, desc: (lv) => `雙手劍專用，造成 ${100+lv*35}% 聖屬性傷害，機率致盲` },
        { id: 'cr_sacrifice', name: '捨命護衛', icon: '🩸', type: 'active', maxLv: 5, reqJobLv: 25, desc: (lv) => `與隊友連線，代為承受其受到的所有傷害` },
        { id: 'cr_peco', name: '騎乘術(十字軍)', icon: '🦤', type: 'passive', maxLv: 1, reqJobLv: 10, desc: (lv) => `可騎乘大嘴鳥，增加移動速度與負重` }
      ],
      sage: [
        { id: 'sa_spell', name: '魔法懲罰', icon: '📖', type: 'active', maxLv: 5, reqJobLv: 1, desc: (lv) => `中斷敵方詠唱，吸收其 ${lv*20}% SP 轉為自身 HP`, interruptCast: true },
        { id: 'sa_auto', name: '自動念咒', icon: '🔥', type: 'active', maxLv: 10, reqJobLv: 10, desc: (lv) => `近戰普攻時有 ${lv*2}% 機率免詠唱觸發設定的元素箭`, buffAttr: (lv) => ({ autoSpellChance: lv*2 }) },
        { id: 'sa_free', name: '自由施法', icon: '🏃', type: 'passive', maxLv: 10, reqJobLv: 5, desc: (lv) => `施法期間可以移動且繼續普攻，維持 ${lv*5}% 的速度`, passiveAttr: (lv) => ({ castMoveSpeedPct: lv*5, castAspdPct: lv*5 }) },
        { id: 'sa_heavens', name: '崩裂術', icon: '⛰️', type: 'active', maxLv: 5, reqJobLv: 15, desc: (lv) => `消耗 ${20+lv*4} SP，範圍造成 ${lv} 段 100% 地屬性魔法傷害`, spCost: (lv) => 20+lv*4, dmgMulti: 1.0, hits: (lv) => lv, element: 'earth' },
        { id: 'sa_volcano', name: '火元素領域', icon: '🌋', type: 'active', maxLv: 5, reqJobLv: 20, desc: (lv) => `地上鋪設領域，範圍內火屬性傷害增加，且無法被冰凍` },
        { id: 'sa_deluge', name: '水元素領域', icon: '🌊', type: 'active', maxLv: 5, reqJobLv: 20, desc: (lv) => `地上鋪設領域，範圍內水屬性傷害增加，可使用水屬性技能` },
        { id: 'sa_whirl', name: '風元素領域', icon: '🌪️', type: 'active', maxLv: 5, reqJobLv: 20, desc: (lv) => `地上鋪設領域，範圍內風屬性傷害增加，FLEE 提升` },
        { id: 'sa_land', name: '地元素領域', icon: '🧱', type: 'active', maxLv: 5, reqJobLv: 25, desc: (lv) => `無效化範圍內所有地面魔法與陷阱 (地領)` }
      ],
      rogue: [
        { id: 'rg_raid', name: '背刺', icon: '🔪', type: 'active', maxLv: 10, reqJobLv: 1, desc: (lv) => `從敵人背後必定命中造成 ${300+lv*40}% 傷害`, dmgMulti: (lv) => 3.0+lv*0.4, hits: 1, ignoreFlee: true },
        { id: 'rg_snatch', name: '強奪', icon: '💰', type: 'passive', maxLv: 10, reqJobLv: 10, desc: (lv) => `普攻有 ${lv*2}% 機率自動偷竊，掉寶率額外提升 ${lv}%`, passiveAttr: (lv) => ({ autoStealChance: lv*2, dropBonus: lv }) },
        { id: 'rg_tunnel', name: '潛遁', icon: '🥷', type: 'passive', maxLv: 5, reqJobLv: 5, desc: (lv) => `隱匿狀態下可移動，並提升偷襲時的暴擊率`, passiveAttr: (lv) => ({ sneakAttackCrit: 20 }) },
        { id: 'rg_plagiarism', name: '抄襲', icon: '📝', type: 'passive', maxLv: 10, reqJobLv: 20, desc: (lv) => `受到攻擊技能後永久記憶該技能 (上限1招)，自由使用。`, passiveAttr: (lv) => ({ enablePlagiarism: true, maxPlagiarismLv: lv }) },
        { id: 'rg_strip_weap', name: '卸除武器', icon: '🗡️', type: 'active', maxLv: 5, reqJobLv: 15, desc: (lv) => `機率強制卸除敵方武器，使其攻擊力大幅下降` },
        { id: 'rg_strip_shld', name: '卸除盾牌', icon: '🛡️', type: 'active', maxLv: 5, reqJobLv: 15, desc: (lv) => `機率強制卸除敵方盾牌，使其防禦力下降` },
        { id: 'rg_sword', name: '單手劍修練(流氓)', icon: '⚔️', type: 'passive', maxLv: 10, reqJobLv: 10, desc: (lv) => `裝備單手劍時攻擊力增加 ${lv*4}` }
      ],
      monk: [
        { id: 'mo_ashura', name: '阿修羅霸凰拳', icon: '👊', type: 'active', maxLv: 5, reqJobLv: 25, desc: (lv) => `消耗所有 SP，造成毀滅性真實傷害，施放後 5 分鐘無法回魔`, spCost: 9999, dmgMulti: (lv) => 8.0+lv*2.0, hits: 1, ignoreDef: true, ignoreFlee: true },
        { id: 'mo_dodge', name: '移花接木', icon: '🍃', type: 'passive', maxLv: 10, reqJobLv: 5, desc: (lv) => `FLEE 提升 ${lv*1.5}，受擊時機率減免傷害`, passiveAttr: (lv) => ({ flee: lv*1.5 }) },
        { id: 'mo_invest', name: '浸透勁', icon: '💥', type: 'active', maxLv: 5, reqJobLv: 10, desc: (lv) => `消耗 1 氣球，無視防禦造成 ${100+lv*75}% 傷害，敵方防禦越高傷害越大`, dmgMulti: (lv) => 1.0+lv*0.75, hits: 1, ignoreDef: true, defScaling: true },
        { id: 'mo_sphere', name: '蓄氣', icon: '🔮', type: 'active', maxLv: 5, reqJobLv: 5, desc: (lv) => `主動聚集氣球，每顆氣球增加 3 ATK (最高 5 顆)` },
        { id: 'mo_finger', name: '彈指神功', icon: '🎯', type: 'active', maxLv: 5, reqJobLv: 15, desc: (lv) => `消耗所有氣球，遠距離投擲，每顆氣球造成 ${100+lv*50}% 傷害`, hits: (lv) => lv },
        { id: 'mo_combo1', name: '六合拳', icon: '🤛', type: 'passive', maxLv: 10, reqJobLv: 10, desc: (lv) => `普攻時機率自動觸發三連擊，為連技的起手式` },
        { id: 'mo_combo2', name: '連環全身掌', icon: '🤜', type: 'active', maxLv: 5, reqJobLv: 15, desc: (lv) => `接在六合拳之後施放，造成 4 段傷害` },
        { id: 'mo_combo3', name: '猛龍誇強', icon: '🐉', type: 'active', maxLv: 5, reqJobLv: 20, desc: (lv) => `接在連環全身掌之後，造成巨大傷害並擊退` }
      ],
      bard_dancer: [ 
        { id: 'bd_vulcan', name: '奧義箭亂舞', icon: '🎸', type: 'active', maxLv: 10, reqJobLv: 1, desc: (lv) => `裝備樂器/鞭子，發出 9 段共 ${300+lv*100}% 物理傷害`, dmgMulti: (lv) => (3.0+lv*1.0)/9, hits: 9 },
        { id: 'bd_bragi', name: '布萊奇之詩', icon: '🎵', type: 'active', maxLv: 10, reqJobLv: 10, desc: (lv) => `全隊技能冷卻時間與詠唱減少 (受INT/DEX加成)` },
        { id: 'bd_apple', name: '伊登的蘋果', icon: '🍎', type: 'active', maxLv: 10, reqJobLv: 15, desc: (lv) => `全隊 MaxHP 提升 ${lv*2}% 並每秒大幅恢復生命` },
        { id: 'bd_music', name: '樂器/練習曲修練', icon: '🎺', type: 'passive', maxLv: 10, reqJobLv: 5, desc: (lv) => `裝備樂器或鞭子時，基礎攻擊力增加 ${lv*3}`, passiveAttr: (lv) => ({ skAtk: lv*3 }) },
        { id: 'bd_joke', name: '冷笑話', icon: '🥶', type: 'active', maxLv: 5, reqJobLv: 20, desc: (lv) => `全畫面機率性將敵人與隊友冰凍` },
        { id: 'bd_tarot', name: '塔羅牌命運', icon: '🃏', type: 'active', maxLv: 5, reqJobLv: 25, desc: (lv) => `隨機抽取一張塔羅牌，對敵人造成各種強大異常狀態或傷害` },
        { id: 'bd_lullaby', name: '搖籃曲', icon: '💤', type: 'active', maxLv: 1, reqJobLv: 20, desc: (lv) => `大範圍使敵人陷入睡眠狀態` }
      ],
      alchemist: [
        { id: 'al_acid', name: '強酸侵蝕', icon: '🧪', type: 'active', maxLv: 5, reqJobLv: 1, desc: (lv) => `消耗強酸瓶，造成傷害並極高機率破壞敵方防具造成出血`, dmgMulti: (lv) => 1.0+lv*0.4, hits: 1, bleedChance: (lv) => lv*10 },
        { id: 'al_potion', name: '知識藥水', icon: '💊', type: 'passive', maxLv: 10, reqJobLv: 5, desc: (lv) => `藥水回復量提升 ${lv*5}%，並增加負重量`, passiveAttr: (lv) => ({ potionEff: lv*5, weightBonus: lv*100 }) },
        { id: 'al_homun', name: '生命體呼喚', icon: '🐥', type: 'active', maxLv: 1, reqJobLv: 15, desc: (lv) => `召喚生命體協助攻擊，生命體擁有獨立技能與 AI` },
        { id: 'al_demo', name: '火煙瓶投擲', icon: '🔥', type: 'active', maxLv: 5, reqJobLv: 20, desc: (lv) => `消耗火煙瓶，引發 5x5 火災造成多段持續魔法傷害與裝備破壞`, hits: 5, element: 'fire' },
        { id: 'al_ad_bomb', name: '強酸火煙瓶投擲', icon: '💥', type: 'active', maxLv: 10, reqJobLv: 25, desc: (lv) => `(AD) 同時投擲強酸與火煙，依據敵人 VIT 造成多段巨大毀滅傷害`, hits: 10, vitScaling: true },
        { id: 'al_plant', name: '召喚植物', icon: '🌿', type: 'active', maxLv: 5, reqJobLv: 10, desc: (lv) => `消耗植物瓶，召喚固定砲塔植物協助攻擊` },
        { id: 'al_axe', name: '斧頭修練', icon: '🪓', type: 'passive', maxLv: 10, reqJobLv: 5, desc: (lv) => `裝備斧頭時攻擊力增加 ${lv*3}` }
      ],

// ================= 三轉職業 =================
      rune_knight: [
        { id: 'rk_spear', name: '百矛穿刺', icon: '☄️', type: 'active', maxLv: 10, reqJobLv: 1, desc: (lv) => `消耗 60 SP，造成 ${800+lv*120}% 爆發物理傷害，機率觸發長矛飛迴鏢`, spCost: 60, dmgMulti: (lv) => 8.0+lv*1.2, hits: 1, weaponReq: 'spear' },
        { id: 'rk_ignition', name: '風暴衝擊', icon: '🌪️', type: 'active', maxLv: 5, reqJobLv: 5, desc: (lv) => `引爆符文對廣範圍造成 ${300+lv*100}% 物理傷害，可觸發爆擊`, spCost: 50, dmgMulti: (lv) => 3.0+lv*1.0, hits: 1, canCrit: true },
        { id: 'rk_rune', name: '盧恩精熟', icon: '🪨', type: 'passive', maxLv: 10, reqJobLv: 10, desc: (lv) => `解鎖盧恩石製造，全屬性 +${lv*2}`, passiveAttr: (lv) => ({ allStat: lv*2 }) },
        { id: 'rk_breath_fire', name: '龍之吐息(火)', icon: '🔥', type: 'active', maxLv: 10, reqJobLv: 15, desc: (lv) => `根據【目前HP與MaxSP】造成巨大火屬性真實傷害`, spCost: 50, hpSpScalingDmg: true, element: 'fire', ignoreDef: true },
        { id: 'rk_breath_water', name: '龍之吐息(水)', icon: '💧', type: 'active', maxLv: 10, reqJobLv: 20, desc: (lv) => `根據【目前HP與MaxSP】造成巨大水屬性真實傷害，並機率結冰`, spCost: 50, hpSpScalingDmg: true, element: 'water', ignoreDef: true },
        { id: 'rk_enchant', name: '附魔之刃', icon: '✨', type: 'active', maxLv: 5, reqJobLv: 10, desc: (lv) => `將自身 MATK 轉化為普攻額外傷害`, spCost: 40, buffDuration: 60, buffAttr: (lv) => ({ magicToMeleeBonus: lv*20 }) },
        { id: 'rk_dragon', name: '龍騎乘', icon: '🐉', type: 'passive', maxLv: 5, reqJobLv: 5, desc: (lv) => `騎乘飛龍，解除體型懲罰並增加 ${lv*200} 負重`, passiveAttr: (lv) => ({ weightBonus: lv*200, sizeModifier: 'large' }) },
        { id: 'rk_crush', name: '粉碎擊', icon: '💥', type: 'active', maxLv: 5, reqJobLv: 10, desc: (lv) => `裝備雙手劍時造成 ${500+lv*100}% 破甲傷害`, spCost: 30, dmgMulti: (lv) => 5.0+lv*1.0, hits: 1, weaponReq: 'two_handed_sword' }
      ],
      warlock: [
        { id: 'wl_crimson', name: '碧血隕石', icon: '☄️', type: 'active', maxLv: 5, reqJobLv: 1, desc: (lv) => `造成大範圍 ${1300+lv*700}% 火魔法，中心傷害最高`, spCost: 80, dmgMulti: (lv) => 13.0+lv*7.0, hits: 1, element: 'fire' },
        { id: 'wl_chain', name: '連鎖電擊', icon: '⚡', type: 'active', maxLv: 5, reqJobLv: 5, desc: (lv) => `單體風魔法，若有其他敵人則來回彈跳，每下 ${500+lv*100}% 傷害`, spCost: 60, dmgMulti: (lv) => 5.0+lv*1.0, hits: 5, element: 'wind' },
        { id: 'wl_jack', name: '凍僵術', icon: '🧊', type: 'active', maxLv: 5, reqJobLv: 10, desc: (lv) => `以自身為中心造成廣範圍水魔法傷害，對冰凍目標傷害大增`, spCost: 70, dmgMulti: (lv) => 10.0+lv*2.0, hits: 1, element: 'water' },
        { id: 'wl_earth', name: '地牛翻身', icon: '⛰️', type: 'active', maxLv: 5, reqJobLv: 10, desc: (lv) => `大範圍地屬性傷害並卸除敵方裝備`, spCost: 80, dmgMulti: (lv) => 15.0+lv*2.0, hits: 1, element: 'earth', stripChance: (lv) => lv*5 },
        { id: 'wl_tetra', name: '四屬漩渦', icon: '🌀', type: 'active', maxLv: 5, reqJobLv: 15, desc: (lv) => `召喚四屬元素對單體造成 4 段毀滅級魔法傷害`, spCost: 120, dmgMulti: (lv) => (20.0+lv*10.0)/4, hits: 4 },
        { id: 'wl_soul', name: '靈魂爆炸', icon: '👻', type: 'active', maxLv: 5, reqJobLv: 10, desc: (lv) => `對念屬性或被監獄困住的敵人造成巨大念魔法傷害`, spCost: 50, dmgMulti: (lv) => 8.0+lv*2.0, hits: 1, element: 'ghost' },
        { id: 'wl_read', name: '讀取魔咒', icon: '📖', type: 'passive', maxLv: 5, reqJobLv: 5, desc: (lv) => `將魔法儲存於魔導書中瞬間釋放，MaxSP 增加 ${lv*5}%`, passiveAttr: (lv) => ({ maxSpPct: lv*5 }) },
        { id: 'wl_comet', name: '彗星', icon: '🌠', type: 'active', maxLv: 5, reqJobLv: 20, desc: (lv) => `消耗大量 SP 降下彗星，造成極大範圍火/無屬性傷害，並陷入燃燒`, spCost: 150, dmgMulti: (lv) => 25.0+lv*5.0, hits: 1 }
      ],
      guillotine_cross: [
        { id: 'gx_cross', name: '十字斬', icon: '❌', type: 'active', maxLv: 5, reqJobLv: 1, desc: (lv) => `造成 ${1200+lv*300}% 物理傷害，對毒屬性目標傷害大幅提升`, spCost: 25, dmgMulti: (lv) => 12.0+lv*3.0, hits: 2 },
        { id: 'gx_rolling', name: '迴旋刃', icon: '🌪️', type: 'active', maxLv: 5, reqJobLv: 5, desc: (lv) => `對周圍造成 ${300+lv*100}% 傷害並累積迴圈次數 (上限10次)`, spCost: 30, dmgMulti: (lv) => 3.0+lv*1.0, hits: 1, buildStack: 'rolling' },
        { id: 'gx_crs', name: '迴旋十字斬', icon: '🌀', type: 'active', maxLv: 5, reqJobLv: 15, desc: (lv) => `消耗次數，滿層時造成 ${500+lv*200+1000}% 極大遠程傷害`, spCost: 40, dmgMulti: 15.0, hits: 1, requireStack: 'rolling' },
        { id: 'gx_research', name: '新毒研究', icon: '🧪', type: 'passive', maxLv: 10, reqJobLv: 10, desc: (lv) => `十字斬威力上升 ${lv*5}%，毒屬性耐性增加`, passiveAttr: (lv) => ({ poisonResist: lv*5, skillDmgBonus: { gx_cross: lv*5 } }) },
        { id: 'gx_illusion', name: '幻影步', icon: '👻', type: 'active', maxLv: 5, reqJobLv: 10, desc: (lv) => `短時間內閃避極大幅度提升，免疫部分魔法`, spCost: 50, buffDuration: 10, buffAttr: (lv) => ({ flee: 250, mDmgReduction: 50 }) },
        { id: 'gx_dark', name: '暗黑爪痕', icon: '爪', type: 'active', maxLv: 5, reqJobLv: 20, desc: (lv) => `給予敵人印記，5秒內使其受到的近戰物理傷害變成 2.5 倍`, spCost: 60, debuffDuration: 5, debuffAttr: (lv) => ({ recvMeleeDmgMulti: 2.5 }) },
        { id: 'gx_poison', name: '劇毒強制', icon: '☠️', type: 'active', maxLv: 5, reqJobLv: 15, desc: (lv) => `強行將新毒效果注入敵方體內，造成猛烈毒性爆發`, spCost: 40, dmgMulti: (lv) => 5.0+lv*1.0, element: 'poison' },
        { id: 'gx_hallu', name: '幻影幻覺', icon: '👁️', type: 'active', maxLv: 5, reqJobLv: 10, desc: (lv) => `降低目標命中與攻速，並造成持續百分比傷害` }
      ],
      arch_bishop: [
        { id: 'ab_judex', name: '審判', icon: '⚔️', type: 'active', maxLv: 5, reqJobLv: 1, desc: (lv) => `對小範圍造成 ${300+lv*70}% 聖魔法，吟唱極快`, spCost: 40, dmgMulti: (lv) => 3.0+lv*0.7, hits: 3, element: 'holy' },
        { id: 'ab_adoramus', name: '謳歌', icon: '💠', type: 'active', maxLv: 10, reqJobLv: 15, desc: (lv) => `消耗藍礦，對單體造成 ${500+lv*100}% 強力聖魔法，並造成目盲`, spCost: 60, dmgMulti: (lv) => 5.0+lv*1.0, hits: 1, element: 'holy' },
        { id: 'ab_highheal', name: '高階治癒術', icon: '✨', type: 'active', maxLv: 5, reqJobLv: 5, desc: (lv) => `極大幅度恢復單體生命，並附加持續恢復效果`, spCost: 70, healPower: (lv) => 800+lv*200, hotPower: (lv) => 100+lv*50 },
        { id: 'ab_sacra', name: '聖典', icon: '📜', type: 'passive', maxLv: 5, reqJobLv: 10, desc: (lv) => `常駐減少全隊固定詠唱時間 ${lv*10}%`, passiveAttr: (lv) => ({ fixCastTimeReduction: lv*10 }) },
        { id: 'ab_coluseo', name: '燦爛聖光', icon: '💖', type: 'active', maxLv: 3, reqJobLv: 10, desc: (lv) => `瞬間恢復全畫面隊友的大量 HP`, spCost: 150, healPower: (lv) => 1000+lv*300 },
        { id: 'ab_prae', name: '聖母之祈福', icon: '🛡️', type: 'active', maxLv: 10, reqJobLv: 15, desc: (lv) => `為全隊施加防護盾，抵擋 ${lv*2} 次攻擊` },
        { id: 'ab_expi', name: '解除', icon: '🔓', type: 'active', maxLv: 5, reqJobLv: 5, desc: (lv) => `賦予隊友無視防禦力 ${lv*5}% 的增益效果` },
        { id: 'ab_duple', name: '雙向聖光', icon: '⚖️', type: 'active', maxLv: 10, reqJobLv: 10, desc: (lv) => `普攻時機率額外觸發聖屬性物理或魔法打擊` }
      ],
      ranger: [
        { id: 'ra_storm', name: '箭風暴', icon: '🌪️', type: 'active', maxLv: 10, reqJobLv: 1, desc: (lv) => `對超大範圍造成 ${1000+lv*80}% 物理傷害`, spCost: 40, dmgMulti: (lv) => 10.0+lv*0.8, hits: 1, weaponReq: 'bow' },
        { id: 'ra_aim', name: '瞄準標靶', icon: '🎯', type: 'active', maxLv: 10, reqJobLv: 10, desc: (lv) => `目標體型越大/被定身時傷害越高，最高 5 段毀滅打擊`, spCost: 50, dmgMulti: (lv) => 5.0+lv*1.0, hits: 5, weaponReq: 'bow' },
        { id: 'ra_warg', name: '狼突擊', icon: '🐺', type: 'passive', maxLv: 5, reqJobLv: 5, desc: (lv) => `普攻視 LUK 機率召喚狼協同攻擊`, passiveAttr: (lv) => ({ autoWargChance: lv*3 }) },
        { id: 'ra_ride', name: '狼騎乘', icon: '🐺', type: 'passive', maxLv: 3, reqJobLv: 5, desc: (lv) => `騎乘狼，大幅提升移動速度` },
        { id: 'ra_camo', name: '偽裝戰術', icon: '🌿', type: 'active', maxLv: 5, reqJobLv: 10, desc: (lv) => `隱藏氣息，提升爆擊率與遠程傷害，移動時半透明` },
        { id: 'ra_unlimit', name: '無極限', icon: '💥', type: 'active', maxLv: 5, reqJobLv: 20, desc: (lv) => `1 分鐘內遠程傷害提升 ${lv*50}%，但防禦與迴避降至1`, spCost: 100, buffDuration: 60, buffAttr: (lv) => ({ rangeDmgPct: lv*50, def: -999, flee: -999 }) },
        { id: 'ra_breeze', name: '微風懼刃', icon: '🍃', type: 'active', maxLv: 5, reqJobLv: 15, desc: (lv) => `普攻時有機率射出多支箭矢，增加連擊判定` },
        { id: 'ra_trap', name: '陷阱研究', icon: '🕸️', type: 'passive', maxLv: 5, reqJobLv: 5, desc: (lv) => `增加陷阱傷害與自身 INT，並擴展陷阱設置距離`, passiveAttr: (lv) => ({ int: lv*2 }) }
      ],
      mechanic: [
        { id: 'mc_axe', name: '斧頭迴旋風暴', icon: '🪓', type: 'active', maxLv: 5, reqJobLv: 1, desc: (lv) => `裝備斧頭時對周圍造成 ${300+lv*100}% 傷害，外圈敵人受更高傷害`, spCost: 40, dmgMulti: (lv) => 3.0+lv*1.0, hits: 6, weaponReq: 'axe' },
        { id: 'mc_cannon', name: '加農砲攻擊', icon: '💣', type: 'active', maxLv: 5, reqJobLv: 5, desc: (lv) => `魔導甲發射砲彈造成 ${700+lv*300}% 無視迴避範圍傷害`, spCost: 50, dmgMulti: (lv) => 7.0+lv*3.0, hits: 1, ignoreFlee: true, mechaOnly: true },
        { id: 'mc_vulcan', name: '火神砲', icon: '🔥', type: 'active', maxLv: 3, reqJobLv: 10, desc: (lv) => `對單體造成連續物理打擊 (依DEX提升傷害)`, spCost: 30, dmgMulti: (lv) => 0.7+lv*0.7, hits: 5, mechaOnly: true },
        { id: 'mc_license', name: '魔導甲執照', icon: '🤖', type: 'passive', maxLv: 5, reqJobLv: 5, desc: (lv) => `搭乘魔導甲，攻擊力與防禦力大幅提升`, passiveAttr: (lv) => ({ skAtk: lv*10, def: lv*10, mechaSuit: true }) },
        { id: 'mc_magma', name: '岩漿噴發', icon: '🌋', type: 'active', maxLv: 5, reqJobLv: 15, desc: (lv) => `引發地底岩漿，對範圍造成持續火屬性傷害與暈眩`, spCost: 50, element: 'fire' },
        { id: 'mc_hover', name: '懸浮', icon: '🛸', type: 'active', maxLv: 1, reqJobLv: 10, desc: (lv) => `機甲懸浮於空中，免疫地面陷阱與部分魔法` },
        { id: 'mc_shape', name: '形體轉換', icon: '🛡️', type: 'active', maxLv: 4, reqJobLv: 15, desc: (lv) => `將機甲防禦屬性轉換為 火/水/風/地，降低對應傷害` },
        { id: 'mc_faw', name: '白銀狙擊手', icon: '🔫', type: 'active', maxLv: 5, reqJobLv: 10, desc: (lv) => `設置自動攻擊砲塔，協助輸出物理傷害` }
      ],
      royal_guard: [
        { id: 'rg_over', name: '支配烙印', icon: '🔱', type: 'active', maxLv: 5, reqJobLv: 1, desc: (lv) => `十字攻擊，先刺穿再揮砍，造成兩段巨大傷害與擊退`, spCost: 60, dmgMulti: (lv) => 8.0+lv*2.0, hits: 2, weaponReq: 'spear', knockback: true },
        { id: 'rg_cannon', name: '加農砲長矛', icon: '☄️', type: 'active', maxLv: 5, reqJobLv: 5, desc: (lv) => `對直線敵人造成 ${500+lv*100}% 遠程物理傷害 (受STR影響)`, spCost: 40, dmgMulti: (lv) => 5.0+lv*1.0, hits: 1, weaponReq: 'spear' },
        { id: 'rg_genesis', name: '創世之光', icon: '🌟', type: 'active', maxLv: 10, reqJobLv: 15, desc: (lv) => `消耗 HP/SP，引導聖光造成極大聖屬性魔法傷害`, spCost: 80, hpCostPct: 0.1, dmgMulti: (lv) => 10.0+lv*2.0, hits: 1, element: 'holy' },
        { id: 'rg_earth', name: '大地毀滅', icon: '💥', type: 'active', maxLv: 5, reqJobLv: 10, desc: (lv) => `用盾牌重擊地面，造成範圍傷害並降低敵人防禦/攻速`, spCost: 60, dmgMulti: (lv) => 5.0+lv*1.0, hits: 1, weaponReq: 'shield' },
        { id: 'rg_shield', name: '盾牌壓擊', icon: '🛡️', type: 'active', maxLv: 5, reqJobLv: 5, desc: (lv) => `單體巨額傷害並高機率使敵人暈眩` },
        { id: 'rg_inspire', name: '靈感', icon: '✨', type: 'active', maxLv: 5, reqJobLv: 20, desc: (lv) => `解除自身異常，極大提升全素質、攻擊力與最大生命，持續扣除HP` },
        { id: 'rg_banding', name: '結盟', icon: '🤝', type: 'active', maxLv: 5, reqJobLv: 10, desc: (lv) => `與周圍皇家禁衛隊結盟，增加物理攻擊力與防禦力` },
        { id: 'rg_pinpoint', name: '精準攻擊', icon: '🎯', type: 'active', maxLv: 5, reqJobLv: 15, desc: (lv) => `瞬間突進並必定爆擊造成傷害，機率破壞敵人裝備` }
      ],
      sorcerer: [
        { id: 'so_psychic', name: '超自然波', icon: '🌌', type: 'active', maxLv: 5, reqJobLv: 1, desc: (lv) => `大範圍無視魔法迴避，造成 7 段極高念屬性/無屬性傷害`, spCost: 80, dmgMulti: (lv) => (10.0+lv*2.0)/7, hits: 7, element: 'neutral' },
        { id: 'so_diamond', name: '鑽石星塵', icon: '❄️', type: 'active', maxLv: 5, reqJobLv: 5, desc: (lv) => `範圍水屬性魔法，機率造成敵人[結冰]狀態`, spCost: 60, dmgMulti: (lv) => 10.0+lv*2.0, hits: 1, element: 'water' },
        { id: 'so_earth', name: '大地墳場', icon: '⛰️', type: 'active', maxLv: 5, reqJobLv: 5, desc: (lv) => `範圍地屬性魔法，機率造成敵人防禦力下降並[出血]`, spCost: 65, dmgMulti: (lv) => 10.0+lv*2.0, hits: 1, element: 'earth' },
        { id: 'so_varetyr', name: '狂風雷暴', icon: '⚡', type: 'active', maxLv: 5, reqJobLv: 10, desc: (lv) => `召喚雷電長矛，造成物理與魔法混合風屬性傷害，機率暈眩`, spCost: 70, dmgMulti: (lv) => 12.0+lv*2.0, hits: 1, element: 'wind' },
        { id: 'so_fist', name: '雙倍投擲(魔法拳)', icon: '👊', type: 'active', maxLv: 5, reqJobLv: 10, desc: (lv) => `將詠唱中的元素箭轉化，接下來數次普攻造成極高魔法爆發傷害` },
        { id: 'so_warmer', name: '極限空虛(暖風)', icon: '♨️', type: 'active', maxLv: 5, reqJobLv: 15, desc: (lv) => `範圍內解除冰凍/結冰，並每秒恢復隊友 HP` },
        { id: 'so_striking', name: '打擊強化', icon: '⚔️', type: 'active', maxLv: 5, reqJobLv: 15, desc: (lv) => `提升自身與隊友的物理攻擊力與暴擊率` },
        { id: 'so_spirit', name: '精靈控制', icon: '🧚', type: 'passive', maxLv: 3, reqJobLv: 5, desc: (lv) => `召喚四大元素精靈，並根據精靈模式獲得強大素質或攻擊加成` }
      ],
      shadow_chaser: [
        { id: 'sc_fatal', name: '致命威脅', icon: '🔪', type: 'active', maxLv: 10, reqJobLv: 1, desc: (lv) => `瞬間逼近造成 ${600+lv*150}% 傷害，裝備短劍發揮極限威力`, spCost: 40, dmgMulti: (lv) => 6.0+lv*1.5, hits: 1, ignoreFlee: true },
        { id: 'sc_triangle', name: '三角射擊', icon: '🏹', type: 'active', maxLv: 10, reqJobLv: 5, desc: (lv) => `射出三發箭矢共造成 ${300+lv*100}% 傷害，高機率擊退`, spCost: 50, dmgMulti: (lv) => 3.0+lv*1.0, hits: 3, weaponReq: 'bow' },
        { id: 'sc_feint', name: '虛擊炸彈', icon: '💣', type: 'active', maxLv: 3, reqJobLv: 10, desc: (lv) => `留下替身並向後退隱匿，替身爆炸造成大範圍物理傷害` },
        { id: 'sc_shadow', name: '魅影形態', icon: '🎭', type: 'active', maxLv: 5, reqJobLv: 10, desc: (lv) => `藏匿於敵方影子中，將自身受到的傷害轉移給該敵人` },
        { id: 'sc_reproduce', name: '複製', icon: '📝', type: 'passive', maxLv: 10, reqJobLv: 5, desc: (lv) => `能學習其他職業的三轉技能 (上限1招)` },
        { id: 'sc_mask_ign', name: '無知面具', icon: '🎭', type: 'active', maxLv: 3, reqJobLv: 15, desc: (lv) => `降低目標 SP，並使其短時間內無法使用技能` },
        { id: 'sc_mask_weak', name: '虛弱面具', icon: '🎭', type: 'active', maxLv: 3, reqJobLv: 15, desc: (lv) => `解除目標的武器與盾牌，並降低 MaxHP` },
        { id: 'sc_invis', name: '隱形', icon: '🥷', type: 'active', maxLv: 5, reqJobLv: 20, desc: (lv) => `進入完全隱形狀態，普攻必定爆擊但持續消耗 SP` }
      ],
      sura: [
        { id: 'su_dragon', name: '雙龍腳', icon: '🐉', type: 'active', maxLv: 10, reqJobLv: 1, desc: (lv) => `作為連技起手，造成兩次打擊並使敵人短暫僵直` },
        { id: 'su_empire', name: '大纏崩墜', icon: '💥', type: 'active', maxLv: 5, reqJobLv: 5, desc: (lv) => `接在雙龍腳之後，將敵人定身並造成巨額傷害` },
        { id: 'su_tiger', name: '虎砲', icon: '🐯', type: 'active', maxLv: 10, reqJobLv: 10, desc: (lv) => `消耗大量 HP，根據消耗的 HP 造成範圍巨大真實爆發傷害`, spCost: 50, hpCostPct: 0.2, hpSpScalingDmg: true, hits: 1 },
        { id: 'su_hell', name: '羅剎破凰擊', icon: '🔥', type: 'active', maxLv: 10, reqJobLv: 15, desc: (lv) => `消耗氣球與剩餘 SP，HP越低傷害越高，無視防禦的單體毀滅打擊`, spCost: 100, hpCostPct: 0.1, dmgMulti: (lv) => 15.0+lv*3.0, hits: 1, ignoreDef: true },
        { id: 'su_skynet', name: '天羅地網', icon: '🌪️', type: 'active', maxLv: 5, reqJobLv: 5, desc: (lv) => `對周圍瘋狂旋轉攻擊，造成多段傷害並擊退敵人`, spCost: 15, dmgMulti: (lv) => 4.0+lv*1.0, hits: 4 },
        { id: 'su_cure', name: '點穴-活', icon: '✨', type: 'active', maxLv: 5, reqJobLv: 10, desc: (lv) => `恢復自身與隊友生命，並解除各種負面狀態` },
        { id: 'su_rising', name: '潛龍昇天', icon: '🐉', type: 'active', maxLv: 10, reqJobLv: 20, desc: (lv) => `MaxHP 與 MaxSP 大幅增加，攻速提升，並維持滿氣球狀態` },
        { id: 'su_lightning', name: '閃電步', icon: '⚡', type: 'active', maxLv: 5, reqJobLv: 10, desc: (lv) => `被遠程攻擊鎖定時瞬間移動至目標身邊反擊` }
      ],
      minstrel_wanderer: [
        { id: 'mw_rain', name: '大暴雨', icon: '🌧️', type: 'active', maxLv: 5, reqJobLv: 1, desc: (lv) => `消耗 70 SP，降下箭雨造成 ${lv*12} 段物理傷害 (受AGI/DEX影響)`, spCost: 70, dmgMulti: 1.0, hits: (lv) => lv*12, weaponReq: 'bow' },
        { id: 'mw_metal', name: '金屬狂嘯', icon: '🎸', type: 'active', maxLv: 5, reqJobLv: 5, desc: (lv) => `造成巨大單體魔法傷害，同時吸收目標 SP` },
        { id: 'mw_lessons', name: '聲樂課程', icon: '📖', type: 'passive', maxLv: 10, reqJobLv: 5, desc: (lv) => `增加所有歌曲/舞蹈持續時間，MaxSP 提升`, passiveAttr: (lv) => ({ maxSpPct: lv*2 }) },
        { id: 'mw_echo', name: '絕望之歌(迴音)', icon: '🎤', type: 'active', maxLv: 5, reqJobLv: 10, desc: (lv) => `範圍魔法傷害並機率使敵人陷入恐懼` },
        { id: 'mw_gloomy', name: '憂鬱的微風', icon: '🍃', type: 'active', maxLv: 5, reqJobLv: 15, desc: (lv) => `降低目標攻速與迴避，但部分特定職業技能傷害翻倍` },
        { id: 'mw_swing', name: '搖擺舞', icon: '💃', type: 'active', maxLv: 5, reqJobLv: 10, desc: (lv) => `全隊 ASPD 大幅提升，移動速度增加` },
        { id: 'mw_siren', name: '賽壬之音', icon: '🧜‍♀️', type: 'active', maxLv: 5, reqJobLv: 15, desc: (lv) => `魅惑周圍的敵人，使其無法攻擊施法者` },
        { id: 'mw_reverb', name: '殘響', icon: '🎼', type: 'active', maxLv: 5, reqJobLv: 20, desc: (lv) => `在地面設置殘響，觸碰或手動引爆時造成魔法混合傷害` }
      ],
      genetic: [
        { id: 'ge_tornado', name: '手推車龍捲風', icon: '🌪️', type: 'active', maxLv: 5, reqJobLv: 1, desc: (lv) => `消耗 40 SP，旋轉推車造成 ${500+lv*100}% 物理傷害與擊退`, spCost: 40, dmgMulti: (lv) => 5.0+lv*1.0, hits: 1, knockback: true },
        { id: 'ge_cannon', name: '手推車加農砲', icon: '💣', type: 'active', maxLv: 5, reqJobLv: 5, desc: (lv) => `消耗 50 SP，發射砲彈造成視 INT 影響的極大遠程無屬性物理傷害`, spCost: 50, dmgMulti: (lv) => 8.0+lv*1.5, hits: 1, scalingStats: ['int'] },
        { id: 'ge_weed', name: '瘋狂野草', icon: '🌿', type: 'active', maxLv: 10, reqJobLv: 15, desc: (lv) => `大範圍地屬性傷害，消除所有地面魔法(地領/光壁)`, spCost: 80, dmgMulti: (lv) => 6.0+lv*1.0, hits: 1, element: 'earth', removeGroundEffects: true },
        { id: 'ge_hell', name: '地獄植物', icon: '🥀', type: 'active', maxLv: 5, reqJobLv: 10, desc: (lv) => `召喚食人植物攻擊周圍敵人，造成無視防禦的固定傷害與出血` },
        { id: 'ge_blood', name: '吸血植物', icon: '🩸', type: 'active', maxLv: 5, reqJobLv: 5, desc: (lv) => `將吸血種子植入敵人，持續吸取 HP 轉移給施法者` },
        { id: 'ge_spore', name: '孢子爆炸', icon: '🍄', type: 'active', maxLv: 5, reqJobLv: 10, desc: (lv) => `附著炸彈孢子，數秒後引爆造成廣範圍極高傷害` },
        { id: 'ge_howl', name: '曼陀羅嚎叫', icon: '😱', type: 'active', maxLv: 5, reqJobLv: 15, desc: (lv) => `降低周圍敵人 INT 並增加其固定詠唱時間` },
        { id: 'ge_research', name: '基因研究', icon: '🧬', type: 'passive', maxLv: 10, reqJobLv: 5, desc: (lv) => `增加藥水恢復量、調配成功率與 MaxSP` }
      ],

      // ================= 四轉職業 =================
      dragon_knight: [
        { id: 'dk_hack', name: '橫掃斬', icon: '⚔️', type: 'active', maxLv: 10, reqJobLv: 1, desc: (lv) => `消耗 70 SP，範圍劈砍造成 ${1500+lv*300}% 傷害，無視部分物理防禦`, spCost: 70, dmgMulti: (lv) => 15.0+lv*3.0, hits: 2, ignoreDefPct: 30 },
        { id: 'dk_madness', name: '狂暴斬擊', icon: '🐉', type: 'active', maxLv: 10, reqJobLv: 5, desc: (lv) => `消耗 80 SP，造成 ${2000+lv*500}% 物理爆發，依賴武器重量`, spCost: 80, dmgMulti: (lv) => 20.0+lv*5.0, hits: 1, critBonus: 50 },
        { id: 'dk_servant', name: '侍從武器', icon: '🗡️', type: 'active', maxLv: 5, reqJobLv: 10, desc: (lv) => `召喚虛空幻影武器隨機攻擊鎖定的敵人` },
        { id: 'dk_aura', name: '龍之光環', icon: '✨', type: 'passive', maxLv: 10, reqJobLv: 10, desc: (lv) => `全屬性超幅提升，物理攻擊力極限突破`, passiveAttr: (lv) => ({ atkPct: lv*2, str: lv*3 }) },
        { id: 'dk_vigor', name: '活力', icon: '💪', type: 'passive', maxLv: 10, reqJobLv: 15, desc: (lv) => `依據自身 MaxHP 大幅增加近戰物理技能的最終傷害` },
        { id: 'dk_breath', name: '龍之吐息(四轉)', icon: '🔥', type: 'active', maxLv: 10, reqJobLv: 20, desc: (lv) => `終極吐息，造成毀滅性範圍傷害，受 Vigor 影響` },
        { id: 'dk_storm', name: '風暴斬擊', icon: '🌪️', type: 'active', maxLv: 5, reqJobLv: 15, desc: (lv) => `連續兩次十字範圍揮砍，造成極高 AP 爆發傷害` },
        { id: 'dk_pierce', name: '衝鋒突刺', icon: '🔱', type: 'active', maxLv: 5, reqJobLv: 15, desc: (lv) => `騎乘狀態限定，瞬間突刺造成多段穿甲傷害` }
      ],
      arch_mage: [
        { id: 'am_arrow', name: '緋紅流星(碧血箭)', icon: '☄️', type: 'active', maxLv: 10, reqJobLv: 1, desc: (lv) => `降下火隕石，造成 ${2500+lv*300}% 火屬性魔法傷害`, spCost: 100, dmgMulti: (lv) => 25.0+lv*3.0, hits: 1, element: 'fire' },
        { id: 'am_cannon', name: '風暴加農砲', icon: '🌪️', type: 'active', maxLv: 10, reqJobLv: 5, desc: (lv) => `發射風暴球體，造成多段風屬性魔法傷害`, spCost: 100, dmgMulti: (lv) => 10.0+lv*2.0, hits: 3, element: 'wind' },
        { id: 'am_slash', name: '冰凍斬', icon: '🧊', type: 'active', maxLv: 10, reqJobLv: 5, desc: (lv) => `凝聚冰刃斬擊，造成水魔法傷害並降低敵人魔法防禦` },
        { id: 'am_rock', name: '岩石崩落', icon: '⛰️', type: 'active', maxLv: 10, reqJobLv: 5, desc: (lv) => `召喚巨石砸擊，對單體及其周圍造成極高地屬性傷害` },
        { id: 'am_astral', name: '星辰打擊', icon: '🌠', type: 'active', maxLv: 10, reqJobLv: 15, desc: (lv) => `召喚群星隕落，無屬性極致魔法，消耗 AP 爆發` },
        { id: 'am_climax', name: '巔峰(魔力極限)', icon: '🔮', type: 'active', maxLv: 5, reqJobLv: 20, desc: (lv) => `進入巔峰狀態，接下來的四轉魔法產生型態變化與倍率暴增` },
        { id: 'am_staff', name: '雙手杖修練', icon: '🪄', type: 'passive', maxLv: 10, reqJobLv: 10, desc: (lv) => `裝備雙手杖時，無視目標極高比例 MDEF` },
        { id: 'am_hurricane', name: '毀滅風暴', icon: '🌀', type: 'active', maxLv: 10, reqJobLv: 15, desc: (lv) => `創造毀滅龍捲風，大範圍席捲所有敵人` }
      ],
      shadow_cross: [
        { id: 'sc_savage', name: '野蠻衝擊', icon: '💥', type: 'active', maxLv: 10, reqJobLv: 1, desc: (lv) => `消耗 60 SP，暴擊時造成 ${1800+lv*400}% 致命傷害，隱匿時發動威力加倍`, spCost: 60, dmgMulti: (lv) => 18.0+lv*4.0, hits: 1, canCrit: true },
        { id: 'sc_exceed', name: '暗影超越', icon: '🌑', type: 'active', maxLv: 5, reqJobLv: 5, desc: (lv) => `短時間內解除攻速上限限制，普攻與技能速度狂飆` },
        { id: 'sc_knife', name: '舞動匕首', icon: '🔪', type: 'active', maxLv: 5, reqJobLv: 10, desc: (lv) => `召喚暗影匕首環繞自身，每秒對靠近的敵人造成傷害` },
        { id: 'sc_claw', name: '致命暗影爪', icon: '爪', type: 'active', maxLv: 10, reqJobLv: 15, desc: (lv) => `消耗 AP 的終極斬擊，附帶極高無視防禦與爆擊加成` },
        { id: 'sc_venom', name: '強效劇毒', icon: '🧪', type: 'passive', maxLv: 10, reqJobLv: 10, desc: (lv) => `提升所有毒屬性技能傷害，新毒效果增強` },
        { id: 'sc_eternal', name: '永恆斬', icon: '❌', type: 'active', maxLv: 10, reqJobLv: 5, desc: (lv) => `十字斬的四轉進化版，連擊次數與傷害翻倍` },
        { id: 'sc_sense', name: '暗影直覺', icon: '👁️', type: 'passive', maxLv: 10, reqJobLv: 5, desc: (lv) => `永久提升迴避與爆擊傷害，並機率閃避指向技能` },
        { id: 'sc_envenom', name: '劇毒暗影', icon: '☠️', type: 'active', maxLv: 5, reqJobLv: 15, desc: (lv) => `將武器浸泡在極致深淵毒液中，普攻附加真實毒傷` }
      ],
      cardinal: [
        { id: 'ca_arbitrium', name: '仲裁聖光', icon: '⚖️', type: 'active', maxLv: 10, reqJobLv: 1, desc: (lv) => `對目標及其周圍造成巨大聖屬魔法傷害，隨後觸發二次爆炸`, spCost: 90, dmgMulti: (lv) => 20.0+lv*4.0, hits: 2, element: 'holy' },
        { id: 'ca_pneumaticus', name: '氣穴風暴', icon: '🌪️', type: 'active', maxLv: 10, reqJobLv: 5, desc: (lv) => `無屬性魔法爆發，對聖屬性抗性高的敵人造成毀滅打擊` },
        { id: 'ca_dilectio', name: '神聖治癒', icon: '💖', type: 'active', maxLv: 10, reqJobLv: 10, desc: (lv) => `消耗 AP，極大範圍全隊究極恢復，並賦予超量護盾` },
        { id: 'ca_presens', name: '敏銳洞察', icon: '👁️', type: 'active', maxLv: 5, reqJobLv: 15, desc: (lv) => `提升全隊 CRI 與 爆擊傷害` },
        { id: 'ca_argutus', name: '銳利武器', icon: '🗡️', type: 'active', maxLv: 5, reqJobLv: 15, desc: (lv) => `提升全隊 HIT 與 遠程/近戰物理傷害比例` },
        { id: 'ca_fidus', name: '堅定信仰', icon: '⛪', type: 'passive', maxLv: 10, reqJobLv: 5, desc: (lv) => `聖屬性魔法傷害提升 ${lv*5}%，SP 回復力倍增`, passiveAttr: (lv) => ({ holyDmgPct: lv*5 }) },
        { id: 'ca_benedictum', name: '祝福', icon: '👼', type: 'active', maxLv: 5, reqJobLv: 20, desc: (lv) => `全面提升全隊所有素質 (四轉版天賜)` },
        { id: 'ca_reliquia', name: '聖物', icon: '🛡️', type: 'active', maxLv: 5, reqJobLv: 20, desc: (lv) => `召喚聖物區域，區域內隊友免疫大部分異常狀態` }
      ],
      windhawk: [
        { id: 'wh_gale', name: '狂風暴雨(Gale Storm)', icon: '🌪️', type: 'active', maxLv: 10, reqJobLv: 1, desc: (lv) => `連續射擊造成大範圍風/無屬性傷害，裝備專用弓傷害提升`, spCost: 80, dmgMulti: (lv) => 20.0+lv*5.0, hits: 1 },
        { id: 'wh_hawk', name: '老鷹衝刺', icon: '🦅', type: 'active', maxLv: 10, reqJobLv: 5, desc: (lv) => `指揮四轉獵鷹衝撞，造成極端暴力的單體無視防禦物理傷害` },
        { id: 'wh_calamity', name: '災厄狂風', icon: '🍃', type: 'active', maxLv: 5, reqJobLv: 15, desc: (lv) => `消耗 AP，進入極限射擊狀態，所有遠程傷害無限制飆升` },
        { id: 'wh_crescive', name: '新月之箭', icon: '🏹', type: 'active', maxLv: 10, reqJobLv: 10, desc: (lv) => `累積能量射出一發穿透極強的箭矢，隨蓄力段數增加倍率` },
        { id: 'wh_nature', name: '自然親和', icon: '🍃', type: 'passive', maxLv: 10, reqJobLv: 5, desc: (lv) => `遠程物理傷害提升 ${lv*4}%，獵鷹傷害倍增`, passiveAttr: (lv) => ({ rangeDmgPct: lv*4 }) },
        { id: 'wh_trap', name: '進階陷阱', icon: '🕸️', type: 'active', maxLv: 5, reqJobLv: 10, desc: (lv) => `設置能束縛 Boss 級魔物的強效陷阱，並附帶屬性減抗` },
        { id: 'wh_sign', name: '風之印記', icon: '🌀', type: 'active', maxLv: 5, reqJobLv: 20, desc: (lv) => `標記敵人，使其受到的遠程物理與老鷹傷害暴增` },
        { id: 'wh_sharp', name: '銳利射擊(強化)', icon: '🎯', type: 'passive', maxLv: 10, reqJobLv: 5, desc: (lv) => `提升爆擊率，使弓箭普攻有機率造成範圍濺射傷害` }
      ],
      meister: [
        { id: 'ms_stomp', name: '戰斧踏伐', icon: '🪓', type: 'active', maxLv: 10, reqJobLv: 1, desc: (lv) => `巨斧重擊地面造成 ${2500+lv*400}% 範圍爆發，無視部分防禦`, spCost: 80, dmgMulti: (lv) => 25.0+lv*4.0, hits: 1, weaponReq: 'axe' },
        { id: 'ms_spark', name: '火花衝擊', icon: '💥', type: 'active', maxLv: 10, reqJobLv: 5, desc: (lv) => `魔導甲全開，發射高能粒子砲造成無/火屬性連續傷害` },
        { id: 'ms_abm', name: '愛國者飛彈', icon: '🚀', type: 'active', maxLv: 10, reqJobLv: 10, desc: (lv) => `鎖定範圍內所有敵人發射導彈，大範圍洗地打擊` },
        { id: 'ms_rush', name: '衝刺地震', icon: '🏃', type: 'active', maxLv: 10, reqJobLv: 15, desc: (lv) => `消耗 AP，機甲高速衝撞並引發強烈地震，極度控場` },
        { id: 'ms_machine', name: '製造機甲', icon: '🤖', type: 'passive', maxLv: 5, reqJobLv: 5, desc: (lv) => `允許召喚並搭乘最新型四轉超級魔導甲，解鎖專屬武裝` },
        { id: 'ms_upgrade', name: '升級套件', icon: '⚙️', type: 'passive', maxLv: 10, reqJobLv: 10, desc: (lv) => `提升所有機甲技能傷害 ${lv*3}%，機甲血量上升`, passiveAttr: (lv) => ({ mechDmgPct: lv*3 }) },
        { id: 'ms_mastery', name: '機甲大師', icon: '🛠️', type: 'passive', maxLv: 10, reqJobLv: 5, desc: (lv) => `雙手斧與機甲武器基礎攻擊力與防禦穿透力大幅提高` },
        { id: 'ms_vulcan', name: '火神砲升級', icon: '🔥', type: 'passive', maxLv: 5, reqJobLv: 15, desc: (lv) => `使火神砲成為範圍攻擊，並附帶燃燒狀態` }
      ],
      imperial_guard: [
        { id: 'ig_cross', name: '聖十字雨', icon: '🌧️', type: 'active', maxLv: 10, reqJobLv: 1, desc: (lv) => `降下聖光造成 ${1500+lv*300}% 物理/魔法混合聖傷害，並為友軍回血`, spCost: 70, dmgMulti: (lv) => 15.0+lv*3.0, hits: 5, element: 'holy' },
        { id: 'ig_overslash', name: '超越斬', icon: '⚔️', type: 'active', maxLv: 10, reqJobLv: 5, desc: (lv) => `持盾與槍瞬間進行霸體突破斬擊，爆發極高單體傷害` },
        { id: 'ig_judgment', name: '末日審判', icon: '⚖️', type: 'active', maxLv: 10, reqJobLv: 15, desc: (lv) => `消耗 AP，造成全螢幕 ${3000+lv*500}% 單體與擴散聖屬性制裁`, spCost: 100, dmgMulti: (lv) => 30.0+lv*5.0, hits: 1, element: 'holy' },
        { id: 'ig_shield', name: '神聖護盾', icon: '🛡️', type: 'active', maxLv: 5, reqJobLv: 10, desc: (lv) => `張開神聖領域，大幅降低全隊受到的所有物理/魔法傷害` },
        { id: 'ig_mastery', name: '槍劍精通', icon: '🔱', type: 'passive', maxLv: 10, reqJobLv: 5, desc: (lv) => `同時裝備單手槍與盾牌時，攻擊力與爆擊率翻倍` },
        { id: 'ig_aura', name: '帝國光環', icon: '✨', type: 'active', maxLv: 5, reqJobLv: 20, desc: (lv) => `提升自身與周圍隊友的最終傷害減免，並增加聖屬性攻擊力` },
        { id: 'ig_stance', name: '守衛姿態', icon: '🛡️', type: 'active', maxLv: 5, reqJobLv: 10, desc: (lv) => `進入防禦姿態，移動速度下降但獲得無敵格擋機率` },
        { id: 'ig_shoot', name: '盾牌射擊', icon: '🎯', type: 'active', maxLv: 10, reqJobLv: 5, desc: (lv) => `投擲出帶有聖光之力的盾牌，遠距離強力打擊` }
      ],
      elemental_master: [
        { id: 'em_diamond', name: '鑽石風暴', icon: '❄️', type: 'active', maxLv: 10, reqJobLv: 1, desc: (lv) => `強化版鑽石星塵，極大範圍冰凍並造成毀滅水魔法傷害` },
        { id: 'em_terra', name: '大地驅動', icon: '⛰️', type: 'active', maxLv: 10, reqJobLv: 5, desc: (lv) => `撕裂大地，造成多段地魔法傷害並卸除敵軍裝備與護盾` },
        { id: 'em_venom', name: '劇毒沼澤', icon: '☠️', type: 'active', maxLv: 10, reqJobLv: 10, desc: (lv) => `毒屬性頂級魔法，在地面生成致死沼澤，持續扣除百分比HP` },
        { id: 'em_conflag', name: '大火災', icon: '🔥', type: 'active', maxLv: 10, reqJobLv: 15, desc: (lv) => `召喚隕石後引發大範圍火災，使區域內敵人受到雙倍火傷` },
        { id: 'em_lightning', name: '雷電領域', icon: '⚡', type: 'active', maxLv: 10, reqJobLv: 15, desc: (lv) => `消耗 AP，展開絕對雷電領域，每秒自動落雷轟炸敵人` },
        { id: 'em_magic', name: '精靈魔法精通', icon: '📖', type: 'passive', maxLv: 10, reqJobLv: 5, desc: (lv) => `四大屬性魔法倍率大幅上升，無視敵人 MDEF` },
        { id: 'em_spirit', name: '元素精靈大師', icon: '🧚', type: 'passive', maxLv: 5, reqJobLv: 10, desc: (lv) => `召喚四轉精靈王，精靈王擁有獨立高倍率 AI 攻擊技能` },
        { id: 'em_burst', name: '元素爆發', icon: '💥', type: 'active', maxLv: 5, reqJobLv: 20, desc: (lv) => `獻祭精靈王，瞬間對全畫面造成破萬倍率真實魔法傷害` }
      ],
      abyss_chaser: [
        { id: 'ac_dagger', name: '深淵短劍', icon: '🗡️', type: 'active', maxLv: 10, reqJobLv: 1, desc: (lv) => `從陰影中造成 ${2200+lv*300}% 物理傷害，受致命威脅加成`, spCost: 50, dmgMulti: (lv) => 22.0+lv*3.0, hits: 1, weaponReq: 'dagger' },
        { id: 'ac_stab', name: '靈巧刺擊', icon: '🔪', type: 'active', maxLv: 10, reqJobLv: 5, desc: (lv) => `無視體型與防禦的高速刺擊，機率秒殺低血量怪物` },
        { id: 'ac_frenzy', name: '狂亂射擊', icon: '🏹', type: 'active', maxLv: 10, reqJobLv: 10, desc: (lv) => `裝備弓時連續射出無數暗影箭，單體爆發極高` },
        { id: 'ac_square', name: '深淵領域', icon: '🌌', type: 'active', maxLv: 5, reqJobLv: 15, desc: (lv) => `展開深淵空間，範圍內敵人魔法與物理防禦歸零` },
        { id: 'ac_mastery', name: '魔劍/暗器修練', icon: '⚔️', type: 'passive', maxLv: 10, reqJobLv: 5, desc: (lv) => `雙持武器或弓箭時，傷害獲得獨立倍率乘算` },
        { id: 'ac_strike', name: '深淵打擊', icon: '💥', type: 'active', maxLv: 10, reqJobLv: 15, desc: (lv) => `消耗 AP 釋放深淵炸彈，造成擴散性魔法與物理混合傷害` },
        { id: 'ac_smash', name: '暗影粉碎', icon: '🌑', type: 'active', maxLv: 5, reqJobLv: 20, desc: (lv) => `卸除並破壞敵方身上所有增益狀態與裝備` },
        { id: 'ac_chain', name: '連鎖反應', icon: '⛓️', type: 'passive', maxLv: 5, reqJobLv: 10, desc: (lv) => `使用深淵技能時，高機率無消耗自動追加一次同樣技能` }
      ],
      inquisitor: [
        { id: 'iq_oleum', name: '聖油洗禮', icon: '🏺', type: 'active', maxLv: 10, reqJobLv: 1, desc: (lv) => `潑灑聖油，造成物理傷害並使敵人受到的火/聖屬性傷害翻倍`, spCost: 80, dmgMulti: (lv) => 5.0+lv*2.0, hits: 5 },
        { id: 'iq_explosion', name: '爆炸爆破', icon: '💥', type: 'active', maxLv: 10, reqJobLv: 5, desc: (lv) => `在浸滿聖油的敵人身上點火，引發毀滅性連鎖爆發` },
        { id: 'iq_massive', name: '巨型火爆', icon: '🔥', type: 'active', maxLv: 10, reqJobLv: 10, desc: (lv) => `虎砲進化版，根據自身 MaxHP 與失去血量，對大範圍造成真傷` },
        { id: 'iq_judge', name: '終極審判', icon: '⚖️', type: 'active', maxLv: 10, reqJobLv: 15, desc: (lv) => `消耗 AP 與剩餘所有 SP，阿修羅的四轉進化，神級真實傷害`, spCost: 150, dmgMulti: (lv) => 30.0+lv*5.0, hits: 1, ignoreDef: true },
        { id: 'iq_faith', name: '堅定信仰', icon: '🛡️', type: 'passive', maxLv: 10, reqJobLv: 5, desc: (lv) => `提升 MaxHP，並使自身受到的魔法與物理傷害減免上限提高` },
        { id: 'iq_oil', name: '神聖之油', icon: '🧪', type: 'active', maxLv: 5, reqJobLv: 10, desc: (lv) => `為自身與隊友塗抹聖油，獲得霸體與近戰物理反彈` },
        { id: 'iq_physical', name: '肉體強化', icon: '💪', type: 'passive', maxLv: 10, reqJobLv: 5, desc: (lv) => `力量與體力極限突破，空手或裝備拳套時基礎攻擊力暴增` },
        { id: 'iq_aura', name: '審判者光環', icon: '✨', type: 'active', maxLv: 5, reqJobLv: 20, desc: (lv) => `開啟光環，周圍不死與惡魔系敵人持續扣除大量血量` }
      ],
      troubadour_trouvere: [
        { id: 'tt_rhythm', name: '節奏射擊', icon: '🏹', type: 'active', maxLv: 10, reqJobLv: 1, desc: (lv) => `跟隨節拍快速射出高傷害箭矢，連擊次數隨節奏增快` },
        { id: 'tt_rose', name: '玫瑰花箭', icon: '🌹', type: 'active', maxLv: 10, reqJobLv: 5, desc: (lv) => `射出玫瑰造成範圍爆炸 ${1600+lv*200}% 物理傷害`, spCost: 60, dmgMulti: (lv) => 16.0+lv*2.0, hits: 2 },
        { id: 'tt_fury', name: '金屬狂怒', icon: '🎸', type: 'active', maxLv: 10, reqJobLv: 10, desc: (lv) => `金屬狂嘯進化，音波造成極大範圍無屬性魔法爆發` },
        { id: 'tt_symphony', name: '神秘交響曲', icon: '🎼', type: 'active', maxLv: 5, reqJobLv: 15, desc: (lv) => `消耗 AP 演奏終極交響，使全畫面敵人攻防歸零，隊友無敵 3 秒` },
        { id: 'tt_blend', name: '混合音效', icon: '🎛️', type: 'active', maxLv: 5, reqJobLv: 10, desc: (lv) => `可將兩首三轉合唱曲的效果獨立釋放，無需另一半職業配合` },
        { id: 'tt_stage', name: '舞台禮儀', icon: '🎭', type: 'passive', maxLv: 10, reqJobLv: 5, desc: (lv) => `技能 SP 消耗減少 ${lv*2}%，演奏時免疫斷詠唱與大部分異常`, passiveAttr: (lv) => ({ spCostReduction: lv*2 }) },
        { id: 'tt_encore', name: '安可', icon: '👏', type: 'active', maxLv: 1, reqJobLv: 20, desc: (lv) => `瞬間重置所有四轉技能的冷卻時間` },
        { id: 'tt_mastery', name: '吟遊大師', icon: '🎻', type: 'passive', maxLv: 10, reqJobLv: 5, desc: (lv) => `樂器與鞭子攻擊力增加，音符類魔法傷害獲得 INT/DEX 雙加成` }
      ],
      biolo: [
        { id: 'bi_pharmacy', name: '生化製藥', icon: '🧪', type: 'active', maxLv: 5, reqJobLv: 5, desc: (lv) => `能瞬間大量製造最高階的恢復藥水與生化爆炸瓶` },
        { id: 'bi_creeper', name: '爆炸藤蔓', icon: '🌿', type: 'active', maxLv: 10, reqJobLv: 1, desc: (lv) => `召喚藤蔓纏繞敵人並引爆，造成 ${2000+lv*300}% 物理爆發`, spCost: 75, dmgMulti: (lv) => 20.0+lv*3.0, hits: 1, element: 'earth' },
        { id: 'bi_acid_water', name: '強酸領域-水', icon: '💧', type: 'active', maxLv: 10, reqJobLv: 5, desc: (lv) => `消耗四轉強酸瓶，佈置大範圍水屬性強酸，使敵人裝備溶毀` },
        { id: 'bi_acid_wind', name: '強酸領域-風', icon: '🌪️', type: 'active', maxLv: 10, reqJobLv: 5, desc: (lv) => `消耗四轉強酸瓶，佈置大範圍風屬性強酸，附帶連續僵直雷擊` },
        { id: 'bi_report', name: '研究報告', icon: '📜', type: 'passive', maxLv: 10, reqJobLv: 10, desc: (lv) => `提升四轉強酸瓶與爆炸藤蔓的最終傷害，增加 INT/STR` },
        { id: 'bi_mutant', name: '突變植物', icon: '🥀', type: 'active', maxLv: 5, reqJobLv: 15, desc: (lv) => `召喚突變巨花王，巨花擁有超高血量並會自動吞噬周圍怪物` },
        { id: 'bi_armor', name: '生化裝甲', icon: '🛡️', type: 'active', maxLv: 5, reqJobLv: 10, desc: (lv) => `用藤蔓將自身包覆，獲得巨額護盾並反彈近戰物理傷害` },
        { id: 'bi_genetic', name: '基因改造', icon: '🧬', type: 'passive', maxLv: 5, reqJobLv: 20, desc: (lv) => `生命體全能力解放，攻防血量翻倍，並使其攻擊附帶吸血效果` }
      ]
    }
};
