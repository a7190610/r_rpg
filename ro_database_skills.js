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

      // ================= 三轉 (核心職業範例) =================
      rune_knight: [
        { id: 'rk_spear', name: '百矛穿刺', icon: '☄️', type: 'active', maxLv: 10, reqJobLv: 1, desc: (lv) => `消耗 60 SP，造成 ${800+lv*120}% 爆發物理傷害`, spCost: 60, dmgMulti: (lv) => 8.0+lv*1.2, hits: 1 },
        { id: 'rk_ignition', name: '風暴衝擊', icon: '🌪️', type: 'active', maxLv: 5, reqJobLv: 5, desc: (lv) => `引爆符文對廣範圍造成 ${300+lv*100}% 物理傷害，可觸發爆擊`, dmgMulti: (lv) => 3.0+lv*1.0, hits: 1, canCrit: true },
        { id: 'rk_rune', name: '盧恩精熟', icon: '🪨', type: 'passive', maxLv: 10, reqJobLv: 10, desc: (lv) => `解鎖盧恩石製造，全屬性 +${lv*2}`, passiveAttr: (lv) => ({ allStat: lv*2 }) },
        { id: 'rk_breath_fire', name: '龍之吐息(火)', icon: '🔥', type: 'active', maxLv: 10, reqJobLv: 15, desc: (lv) => `根據【目前HP與MaxSP】造成巨大火屬性真實傷害`, hpSpScalingDmg: true, element: 'fire', ignoreDef: true },
        { id: 'rk_breath_water', name: '龍之吐息(水)', icon: '💧', type: 'active', maxLv: 10, reqJobLv: 20, desc: (lv) => `根據【目前HP與MaxSP】造成巨大水屬性真實傷害，並機率結冰`, hpSpScalingDmg: true, element: 'water', ignoreDef: true },
        { id: 'rk_enchant', name: '附魔之刃', icon: '✨', type: 'active', maxLv: 5, reqJobLv: 10, desc: (lv) => `將自身 MATK 轉化為普攻額外傷害` },
        { id: 'rk_dragon', name: '龍騎乘', icon: '🐉', type: 'passive', maxLv: 5, reqJobLv: 5, desc: (lv) => `騎乘飛龍，解除體型懲罰並增加負重` }
      ],
      guillotine_cross: [
        { id: 'gx_cross', name: '十字斬', icon: '❌', type: 'active', maxLv: 5, reqJobLv: 1, desc: (lv) => `造成 ${1200+lv*300}% 物理傷害，對毒屬性目標傷害大幅提升`, dmgMulti: (lv) => 12.0+lv*3.0, hits: 2 },
        { id: 'gx_rolling', name: '迴旋刃', icon: '🌪️', type: 'active', maxLv: 5, reqJobLv: 5, desc: (lv) => `對周圍造成 ${300+lv*100}% 傷害並累積迴圈次數 (上限10次)`, dmgMulti: (lv) => 3.0+lv*1.0, hits: 1, buildStack: 'rolling' },
        { id: 'gx_crs', name: '迴旋十字斬', icon: '🌀', type: 'active', maxLv: 5, reqJobLv: 15, desc: (lv) => `消耗次數，滿層時造成 ${500+lv*200+1000}% 極大遠程傷害`, dmgMulti: 15.0, hits: 1, requireStack: 'rolling' },
        { id: 'gx_research', name: '新毒研究', icon: '🧪', type: 'passive', maxLv: 10, reqJobLv: 10, desc: (lv) => `十字斬威力上升 ${lv*5}%，毒屬性耐性增加`, passiveAttr: (lv) => ({ poisonResist: lv*5, skillDmgBonus: { gx_cross: lv*5 } }) },
        { id: 'gx_illusion', name: '幻影步', icon: '👻', type: 'active', maxLv: 5, reqJobLv: 10, desc: (lv) => `短時間內閃避極大幅度提升，免疫部分指向技能` },
        { id: 'gx_dark', name: '暗黑爪痕', icon: '爪', type: 'active', maxLv: 5, reqJobLv: 20, desc: (lv) => `給予敵人印記，5秒內使其受到的近戰物理傷害變成 2.5 倍` },
        { id: 'gx_poison', name: '劇毒強制', icon: '☠️', type: 'active', maxLv: 5, reqJobLv: 15, desc: (lv) => `強行將新毒效果注入敵方體內` }
      ]
    }
};