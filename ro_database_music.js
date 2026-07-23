/*
職業資料庫
https://a7190610.github.io/r_rpg/ro_database_classes.js
裝備資料庫
https://a7190610.github.io/r_rpg/ro_database_items.js
道具資料庫
https://a7190610.github.io/r_rpg/ro_database_items2.js
地圖資料庫
https://a7190610.github.io/r_rpg/ro_database_maps.js
怪物資料庫
https://a7190610.github.io/r_rpg/ro_database_monsters.js
音樂資料庫
https://a7190610.github.io/r_rpg/ro_database_music.js
技能資料庫
https://a7190610.github.io/r_rpg/ro_database_skills.js
系統資料庫
https://a7190610.github.io/r_rpg/ro_database_system.js
*/

/*
https://nextly.blogspot.com/2009/07/onlineragnarok-online-bgm.html
https://downloads.khinsider.com/game-soundtracks/album/ragnarok-online-original-soundtrack
https://forum.gamer.com.tw/G2.php?bsn=4212&sn=5360
*/

/*export const RO_DATABASE_MUSIC = {
    MUSIC: {
        'prt_fild08': 'https://a7190610.github.io/r_rpg/12.mp3',
        'pay_fild04': 'https://a7190610.github.io/r_rpg/03.mp3',
        'moc_fild12': 'https://a7190610.github.io/r_rpg/37.mp3',
        'iz_dun00': 'https://a7190610.github.io/r_rpg/29.mp3',
        'anthell01': 'https://a7190610.github.io/r_rpg/46.mp3',
        // 依此類推對應各個地圖的 ID
    }
};
*/
export const RO_DATABASE_MUSIC = {
    MUSIC: {
        /*'prt_fild08': 'https://a7190610.github.io/r_rpg/12.mp3',
        'pay_fild04': 'https://a7190610.github.io/r_rpg/03.mp3',
        'moc_fild12': 'https://a7190610.github.io/r_rpg/37.mp3',
        'iz_dun00': 'https://a7190610.github.io/r_rpg/29.mp3',
        'anthell01': 'https://a7190610.github.io/r_rpg/46.mp3',*/

        // 拍賣場
        'auction_01': 'https://a7190610.github.io/r_rpg/08.mp3',
        'auction_02': 'https://a7190610.github.io/r_rpg/70.mp3',

        // 秘密酒店
        'que_job01': 'https://a7190610.github.io/r_rpg/11.mp3',

        // 悟靈士轉職區域
        'job_soul': 'https://a7190610.github.io/r_rpg/47.mp3',
        'job_star': 'https://a7190610.github.io/r_rpg/65.mp3',

        // 深淵之湖 地下洞穴
        'abyss_01': 'https://a7190610.github.io/r_rpg/49.mp3',
        'abyss_02': 'https://a7190610.github.io/r_rpg/49.mp3',
        'abyss_03': 'https://a7190610.github.io/r_rpg/49.mp3',

        // 達納托斯塔台
        'tha_t01': 'https://a7190610.github.io/r_rpg/88.mp3',
        'tha_t02': 'https://a7190610.github.io/r_rpg/88.mp3',
        'tha_t03': 'https://a7190610.github.io/r_rpg/88.mp3',
        'tha_t04': 'https://a7190610.github.io/r_rpg/88.mp3',
        'tha_t05': 'https://a7190610.github.io/r_rpg/89.mp3',
        'tha_t06': 'https://a7190610.github.io/r_rpg/89.mp3',
        'tha_t07': 'https://a7190610.github.io/r_rpg/89.mp3',
        'tha_t08': 'https://a7190610.github.io/r_rpg/89.mp3',
        'tha_t09': 'https://a7190610.github.io/r_rpg/89.mp3',
        'tha_t10': 'https://a7190610.github.io/r_rpg/89.mp3',
        'tha_t11': 'https://a7190610.github.io/r_rpg/89.mp3',
        'tha_t12': 'https://a7190610.github.io/r_rpg/89.mp3',
        'thana_step': 'https://a7190610.github.io/r_rpg/89.mp3',
        'thana_boss': 'https://a7190610.github.io/r_rpg/40.mp3',
        'tha_scene01': 'https://a7190610.github.io/r_rpg/88.mp3',

        // 毀葛原野
        'hu_fild01': 'https://a7190610.github.io/r_rpg/06.mp3',
        'hu_fild02': 'https://a7190610.github.io/r_rpg/91.mp3',
        'hu_fild03': 'https://a7190610.github.io/r_rpg/91.mp3',
        'hu_fild04': 'https://a7190610.github.io/r_rpg/72.mp3',
        'hu_fild05': 'https://a7190610.github.io/r_rpg/04.mp3',
        'hu_fild06': 'https://a7190610.github.io/r_rpg/91.mp3',
        'hu_fild07': 'https://a7190610.github.io/r_rpg/72.mp3',

        // 益智遊戲競賽場
        'quiz_02': 'https://a7190610.github.io/r_rpg/18.mp3',
        'quiz_test': 'https://a7190610.github.io/r_rpg/28.mp3',
        'quiz_00': 'https://a7190610.github.io/r_rpg/07.mp3',
        'quiz_01': 'https://a7190610.github.io/r_rpg/18.mp3',

        // 優沛擂斯遺跡區域
        'jupe_cave': 'https://a7190610.github.io/r_rpg/89.mp3',
        'juperos_01': 'https://a7190610.github.io/r_rpg/89.mp3',
        'juperos_02': 'https://a7190610.github.io/r_rpg/89.mp3',
        'jupe_gate': 'https://a7190610.github.io/r_rpg/89.mp3',
        'jupe_area1': 'https://a7190610.github.io/r_rpg/89.mp3',
        'jupe_area2': 'https://a7190610.github.io/r_rpg/89.mp3',
        'jupe_ele': 'https://a7190610.github.io/r_rpg/89.mp3',
        'jupe_ele_r': 'https://a7190610.github.io/r_rpg/89.mp3',
        'jupe_core': 'https://a7190610.github.io/r_rpg/89.mp3',

        // 里希塔樂鎮
        'lighthalzen': 'https://a7190610.github.io/r_rpg/90.mp3',
        'lhz_in01': 'https://a7190610.github.io/r_rpg/90.mp3',
        'lhz_in02': 'https://a7190610.github.io/r_rpg/90.mp3',
        'lhz_in03': 'https://a7190610.github.io/r_rpg/90.mp3',

        // 里希塔樂-正立方體房間
        'lhz_cube': 'https://a7190610.github.io/r_rpg/92.mp3',
        'lhz_que01': 'https://a7190610.github.io/r_rpg/92.mp3',

        // 里希塔樂-機場、飛空艇
        'lhz_airport': 'https://a7190610.github.io/r_rpg/90.mp3',
        'airplane_01': 'https://a7190610.github.io/r_rpg/90.mp3',

        // 生體試驗研究所
        'lhz_dun01': 'https://a7190610.github.io/r_rpg/92.mp3',
        'lhz_dun02': 'https://a7190610.github.io/r_rpg/92.mp3',
        'lhz_dun03': 'https://a7190610.github.io/r_rpg/92.mp3',

        // 里希塔樂原野
        'lhz_fild01': 'https://a7190610.github.io/r_rpg/91.mp3',
        'lhz_fild03': 'https://a7190610.github.io/r_rpg/91.mp3',
        'lhz_fild02': 'https://a7190610.github.io/r_rpg/91.mp3',

        // 秀發茲發德政府廳舍/朱諾機場
        'yuno_pre': 'https://a7190610.github.io/r_rpg/70.mp3',
        'y_airport': 'https://a7190610.github.io/r_rpg/70.mp3',

        // 艾音布羅克原野
        'ein_fild01': 'https://a7190610.github.io/r_rpg/87.mp3',
        'ein_fild02': 'https://a7190610.github.io/r_rpg/87.mp3',
        'ein_fild03': 'https://a7190610.github.io/r_rpg/87.mp3',
        'ein_fild04': 'https://a7190610.github.io/r_rpg/87.mp3',
        'ein_fild05': 'https://a7190610.github.io/r_rpg/87.mp3',
        'ein_fild06': 'https://a7190610.github.io/r_rpg/87.mp3',
        'ein_fild07': 'https://a7190610.github.io/r_rpg/87.mp3',
        'ein_fild08': 'https://a7190610.github.io/r_rpg/87.mp3',
        'ein_fild09': 'https://a7190610.github.io/r_rpg/87.mp3',
        'ein_fild10': 'https://a7190610.github.io/r_rpg/87.mp3',

        // 朱諾-飛空艇
        'airplane': 'https://a7190610.github.io/r_rpg/87.mp3',

        // The Sign任務地圖
        'que_sign02': 'https://a7190610.github.io/r_rpg/85.mp3',
        'que_sign01': 'https://a7190610.github.io/r_rpg/84.mp3',

        // 礦山洞穴
        'ein_dun02': 'https://a7190610.github.io/r_rpg/88.mp3',
        'ein_dun01': 'https://a7190610.github.io/r_rpg/88.mp3',

        // 艾音貝赫、艾音布羅克、機場
        'airport': 'https://a7190610.github.io/r_rpg/86.mp3',
        'ein_in01': 'https://a7190610.github.io/r_rpg/86.mp3',
        'einbech': 'https://a7190610.github.io/r_rpg/86.mp3',
        'einbroch': 'https://a7190610.github.io/r_rpg/86.mp3',

        // 尼芙菲姆原野
        'nif_fild02': 'https://a7190610.github.io/r_rpg/85.mp3',
        'nif_fild01': 'https://a7190610.github.io/r_rpg/85.mp3',

        // 尼芙菲姆
        'nif_in': 'https://a7190610.github.io/r_rpg/84.mp3',
        'niflheim': 'https://a7190610.github.io/r_rpg/84.mp3',

        // 禾貝勒開米勒之島
        'yggdrasil01': 'https://a7190610.github.io/r_rpg/83.mp3',

        // 競速場地
        'turbo_e_16': 'https://a7190610.github.io/r_rpg/75.mp3',
        'turbo_e_8': 'https://a7190610.github.io/r_rpg/75.mp3',
        'turbo_e_4': 'https://a7190610.github.io/r_rpg/75.mp3',
        'turbo_n_16': 'https://a7190610.github.io/r_rpg/18.mp3',
        'turbo_n_8': 'https://a7190610.github.io/r_rpg/18.mp3',
        'turbo_n_4': 'https://a7190610.github.io/r_rpg/18.mp3',
        'turbo_n_1': 'https://a7190610.github.io/r_rpg/18.mp3',
        'turbo_room': 'https://a7190610.github.io/r_rpg/52.mp3',

        // 哎喲泰雅
        'ayothaya': 'https://a7190610.github.io/r_rpg/81.mp3',
        'ayo_in02': 'https://a7190610.github.io/r_rpg/81.mp3',
        'ayo_in01': 'https://a7190610.github.io/r_rpg/81.mp3',

        // 哎喲泰雅密穴
        'ayo_dun02': 'https://a7190610.github.io/r_rpg/82.mp3',
        'ayo_dun01': 'https://a7190610.github.io/r_rpg/82.mp3',

        // 哎喲泰雅原野
        'ayo_fild02': 'https://a7190610.github.io/r_rpg/82.mp3',
        'ayo_fild01': 'https://a7190610.github.io/r_rpg/81.mp3',

        // 神器任務地圖
        'que_god02': 'https://a7190610.github.io/r_rpg/50.mp3',
        'que_god01': 'https://a7190610.github.io/r_rpg/70.mp3',

        // 葛帔尼亞
        'gefenia04': 'https://a7190610.github.io/r_rpg/44.mp3',
        'gefenia03': 'https://a7190610.github.io/r_rpg/44.mp3',
        'gefenia02': 'https://a7190610.github.io/r_rpg/44.mp3',
        'gefenia01': 'https://a7190610.github.io/r_rpg/44.mp3',

        // 爪哇咿
        'jawaii_in': 'https://a7190610.github.io/r_rpg/28.mp3',
        'jawaii': 'https://a7190610.github.io/r_rpg/28.mp3',

        // 洛陽密穴
        'lou_dun03': 'https://a7190610.github.io/r_rpg/80.mp3',
        'lou_dun02': 'https://a7190610.github.io/r_rpg/80.mp3',
        'lou_dun01': 'https://a7190610.github.io/r_rpg/80.mp3',

        // 洛陽原野
        'lou_fild01': 'https://a7190610.github.io/r_rpg/79.mp3',

        // 龍之城
        'lou_in02': 'https://a7190610.github.io/r_rpg/79.mp3',
        'lou_in01': 'https://a7190610.github.io/r_rpg/79.mp3',
        'louyang': 'https://a7190610.github.io/r_rpg/79.mp3',

        // 巴奇利神殿
        'valkyrie': 'https://a7190610.github.io/r_rpg/09.mp3',

        // 樹木裡的木工所、異界通路
        'um_dun02': 'https://a7190610.github.io/r_rpg/69.mp3',
        'um_dun01': 'https://a7190610.github.io/r_rpg/69.mp3',

        // 汶巴拉原野
        'um_fild04': 'https://a7190610.github.io/r_rpg/78.mp3',
        'um_fild03': 'https://a7190610.github.io/r_rpg/63.mp3',
        'um_fild02': 'https://a7190610.github.io/r_rpg/78.mp3',
        'um_fild01': 'https://a7190610.github.io/r_rpg/63.mp3',

        // 汶巴拉
        'um_in': 'https://a7190610.github.io/r_rpg/68.mp3',
        'umbala': 'https://a7190610.github.io/r_rpg/68.mp3',

        // 天津密穴
        'ama_dun01': 'https://a7190610.github.io/r_rpg/77.mp3',
        'ama_dun02': 'https://a7190610.github.io/r_rpg/77.mp3',
        'ama_dun03': 'https://a7190610.github.io/r_rpg/77.mp3',

        // 天津
        'ama_in01': 'https://a7190610.github.io/r_rpg/76.mp3',
        'ama_in02': 'https://a7190610.github.io/r_rpg/76.mp3',
        'amatsu': 'https://a7190610.github.io/r_rpg/76.mp3',

        // 天津原野
        'ama_fild01': 'https://a7190610.github.io/r_rpg/73.mp3',

        // 崑崙密穴
        'gon_dun01': 'https://a7190610.github.io/r_rpg/75.mp3',
        'gon_dun02': 'https://a7190610.github.io/r_rpg/75.mp3',
        'gon_dun03': 'https://a7190610.github.io/r_rpg/75.mp3',

        // 崑崙原野
        'gon_fild01': 'https://a7190610.github.io/r_rpg/73.mp3',

        // 崑崙
        'gon_in': 'https://a7190610.github.io/r_rpg/74.mp3',
        'gonryun': 'https://a7190610.github.io/r_rpg/74.mp3',

        // 巴哈拉宮
        'sec_in01': 'https://a7190610.github.io/r_rpg/70.mp3',
        'sec_in02': 'https://a7190610.github.io/r_rpg/70.mp3',
        'sec_pri': 'https://a7190610.github.io/r_rpg/42.mp3',

        // 諾可羅德
        'mag_dun02': 'https://a7190610.github.io/r_rpg/06.mp3',
        'mag_dun01': 'https://a7190610.github.io/r_rpg/06.mp3',

        // 朱諾原野
        'yuno_fild12': 'https://a7190610.github.io/r_rpg/71.mp3',
        'yuno_fild11': 'https://a7190610.github.io/r_rpg/71.mp3',
        'yuno_fild10': 'https://a7190610.github.io/r_rpg/72.mp3',
        'yuno_fild09': 'https://a7190610.github.io/r_rpg/71.mp3',
        'yuno_fild08': 'https://a7190610.github.io/r_rpg/71.mp3',
        'yuno_fild07': 'https://a7190610.github.io/r_rpg/72.mp3',
        'yuno_fild06': 'https://a7190610.github.io/r_rpg/72.mp3',
        'yuno_fild05': 'https://a7190610.github.io/r_rpg/72.mp3',
        'yuno_fild04': 'https://a7190610.github.io/r_rpg/72.mp3',
        'yuno_fild03': 'https://a7190610.github.io/r_rpg/72.mp3',
        'yuno_fild02': 'https://a7190610.github.io/r_rpg/71.mp3',
        'yuno_fild01': 'https://a7190610.github.io/r_rpg/71.mp3',

        // 朱諾
        'yuno_in03': 'https://a7190610.github.io/r_rpg/70.mp3',
        'yuno_in02': 'https://a7190610.github.io/r_rpg/70.mp3',
        'yuno_in01': 'https://a7190610.github.io/r_rpg/70.mp3',
        'yuno': 'https://a7190610.github.io/r_rpg/70.mp3',

        // 工會、工會密穴
        'gld_dun04': 'https://a7190610.github.io/r_rpg/44.mp3',
        'gld_dun03': 'https://a7190610.github.io/r_rpg/44.mp3',
        'gld_dun02': 'https://a7190610.github.io/r_rpg/44.mp3',
        'gld_dun01': 'https://a7190610.github.io/r_rpg/44.mp3',
        'gefg_cas05': 'https://a7190610.github.io/r_rpg/66.mp3',
        'gefg_cas04': 'https://a7190610.github.io/r_rpg/66.mp3',
        'gefg_cas03': 'https://a7190610.github.io/r_rpg/66.mp3',
        'gefg_cas02': 'https://a7190610.github.io/r_rpg/66.mp3',
        'gefg_cas01': 'https://a7190610.github.io/r_rpg/66.mp3',
        'gef_fild13': 'https://a7190610.github.io/r_rpg/66.mp3',
        'aldeg_cas05': 'https://a7190610.github.io/r_rpg/66.mp3',
        'aldeg_cas04': 'https://a7190610.github.io/r_rpg/66.mp3',
        'aldeg_cas03': 'https://a7190610.github.io/r_rpg/66.mp3',
        'aldeg_cas02': 'https://a7190610.github.io/r_rpg/66.mp3',
        'aldeg_cas01': 'https://a7190610.github.io/r_rpg/66.mp3',
        'alde_gld': 'https://a7190610.github.io/r_rpg/66.mp3',
        'payg_cas05': 'https://a7190610.github.io/r_rpg/66.mp3',
        'payg_cas04': 'https://a7190610.github.io/r_rpg/66.mp3',
        'payg_cas03': 'https://a7190610.github.io/r_rpg/66.mp3',
        'payg_cas02': 'https://a7190610.github.io/r_rpg/66.mp3',
        'payg_cas01': 'https://a7190610.github.io/r_rpg/66.mp3',
        'pay_gld': 'https://a7190610.github.io/r_rpg/66.mp3',
        'prtg_cas05': 'https://a7190610.github.io/r_rpg/66.mp3',
        'prtg_cas04': 'https://a7190610.github.io/r_rpg/66.mp3',
        'prtg_cas03': 'https://a7190610.github.io/r_rpg/66.mp3',
        'prtg_cas02': 'https://a7190610.github.io/r_rpg/66.mp3',
        'prtg_cas01': 'https://a7190610.github.io/r_rpg/66.mp3',
        'prt_gld': 'https://a7190610.github.io/r_rpg/66.mp3',
        'tur_dun01': 'https://a7190610.github.io/r_rpg/65.mp3',
        'tur_dun02': 'https://a7190610.github.io/r_rpg/65.mp3',
        'tur_dun03': 'https://a7190610.github.io/r_rpg/65.mp3',
        'tur_dun04': 'https://a7190610.github.io/r_rpg/65.mp3',
        'tur_dun05': 'https://a7190610.github.io/r_rpg/65.mp3',
        'tur_dun06': 'https://a7190610.github.io/r_rpg/65.mp3',

        // 工會對抗競技場
        'guild_vs4': 'https://a7190610.github.io/r_rpg/07.mp3',
        'guild_vs5': 'https://a7190610.github.io/r_rpg/07.mp3',
        'guild_vs3': 'https://a7190610.github.io/r_rpg/07.mp3',
        'guild_vs2': 'https://a7190610.github.io/r_rpg/07.mp3',
        'guild_vs1': 'https://a7190610.github.io/r_rpg/07.mp3',
        'guild_room': 'https://a7190610.github.io/r_rpg/40.mp3',

        // 克魔島原野
        'cmd_fild09': 'https://a7190610.github.io/r_rpg/63.mp3',
        'cmd_fild08': 'https://a7190610.github.io/r_rpg/37.mp3',
        'cmd_fild07': 'https://a7190610.github.io/r_rpg/63.mp3',
        'cmd_fild06': 'https://a7190610.github.io/r_rpg/63.mp3',
        'cmd_fild05': 'https://a7190610.github.io/r_rpg/63.mp3',
        'cmd_fild04': 'https://a7190610.github.io/r_rpg/63.mp3',
        'cmd_fild03': 'https://a7190610.github.io/r_rpg/63.mp3',
        'cmd_fild02': 'https://a7190610.github.io/r_rpg/63.mp3',
        'cmd_fild01': 'https://a7190610.github.io/r_rpg/63.mp3',

        // 克魔島洞窟
        'beach_dun3': 'https://a7190610.github.io/r_rpg/41.mp3',
        'beach_dun2': 'https://a7190610.github.io/r_rpg/41.mp3',
        'beach_dun': 'https://a7190610.github.io/r_rpg/41.mp3',

        // 克魔島
        'cmd_in02': 'https://a7190610.github.io/r_rpg/62.mp3',
        'cmd_in01': 'https://a7190610.github.io/r_rpg/62.mp3',
        'comodo': 'https://a7190610.github.io/r_rpg/62.mp3',

        // 薑餅城
        'xmas': 'https://a7190610.github.io/r_rpg/59.mp3',
        'xmas_in': 'https://a7190610.github.io/r_rpg/59.mp3',

        // 薑餅城原野
        'xmas_fild01': 'https://a7190610.github.io/r_rpg/55.mp3',

        // 玩具工廠
        'xmas_dun01': 'https://a7190610.github.io/r_rpg/58.mp3',
        'xmas_dun02': 'https://a7190610.github.io/r_rpg/58.mp3',

        // 妙勒尼山脈
        'mjolnir_01': 'https://a7190610.github.io/r_rpg/31.mp3',
        'mjolnir_02': 'https://a7190610.github.io/r_rpg/33.mp3',
        'mjolnir_03': 'https://a7190610.github.io/r_rpg/33.mp3',
        'mjolnir_04': 'https://a7190610.github.io/r_rpg/33.mp3',
        'mjolnir_05': 'https://a7190610.github.io/r_rpg/34.mp3',
        'mjolnir_06': 'https://a7190610.github.io/r_rpg/31.mp3',
        'mjolnir_07': 'https://a7190610.github.io/r_rpg/31.mp3',
        'mjolnir_08': 'https://a7190610.github.io/r_rpg/33.mp3',
        'mjolnir_09': 'https://a7190610.github.io/r_rpg/31.mp3',
        'mjolnir_10': 'https://a7190610.github.io/r_rpg/34.mp3',
        'mjolnir_11': 'https://a7190610.github.io/r_rpg/34.mp3',
        'mjolnir_12': 'https://a7190610.github.io/r_rpg/34.mp3',

        // 普隆德拉區域
        'prt_fild00': 'https://a7190610.github.io/r_rpg/05.mp3',
        'prt_fild01': 'https://a7190610.github.io/r_rpg/12.mp3',
        'prt_fild02': 'https://a7190610.github.io/r_rpg/05.mp3',
        'prt_fild03': 'https://a7190610.github.io/r_rpg/05.mp3',
        'prt_fild04': 'https://a7190610.github.io/r_rpg/05.mp3',
        'prt_fild05': 'https://a7190610.github.io/r_rpg/12.mp3',
        'prt_fild06': 'https://a7190610.github.io/r_rpg/12.mp3',
        'prt_fild07': 'https://a7190610.github.io/r_rpg/05.mp3',
        'prt_fild08': 'https://a7190610.github.io/r_rpg/12.mp3',
        'prt_fild09': 'https://a7190610.github.io/r_rpg/04.mp3',
        'prt_fild10': 'https://a7190610.github.io/r_rpg/04.mp3',
        'prt_fild11': 'https://a7190610.github.io/r_rpg/04.mp3',

        // 聖卡畢利那 修道院
        'prt_monk': 'https://a7190610.github.io/r_rpg/28.mp3',
        'monk_in': 'https://a7190610.github.io/r_rpg/28.mp3',

        // 吉芬區域
        'gef_fild00': 'https://a7190610.github.io/r_rpg/25.mp3',
        'gef_fild01': 'https://a7190610.github.io/r_rpg/23.mp3',
        'gef_fild02': 'https://a7190610.github.io/r_rpg/35.mp3',
        'gef_fild03': 'https://a7190610.github.io/r_rpg/35.mp3',
        'gef_fild04': 'https://a7190610.github.io/r_rpg/25.mp3',
        'gef_fild05': 'https://a7190610.github.io/r_rpg/23.mp3',
        'gef_fild06': 'https://a7190610.github.io/r_rpg/23.mp3',
        'gef_fild07': 'https://a7190610.github.io/r_rpg/25.mp3',
        'gef_fild08': 'https://a7190610.github.io/r_rpg/23.mp3',
        'gef_fild09': 'https://a7190610.github.io/r_rpg/23.mp3',
        'gef_fild10': 'https://a7190610.github.io/r_rpg/35.mp3',
        'gef_fild14': 'https://a7190610.github.io/r_rpg/64.mp3',
        'gef_fild12': 'https://a7190610.github.io/r_rpg/64.mp3',
        'gef_fild11': 'https://a7190610.github.io/r_rpg/04.mp3',

        // 獸人洞窟
        'in_orcs01': 'https://a7190610.github.io/r_rpg/35.mp3',
        'orcsdun01': 'https://a7190610.github.io/r_rpg/48.mp3',
        'orcsdun02': 'https://a7190610.github.io/r_rpg/48.mp3',

        // 夢羅克區域
        'moc_fild01': 'https://a7190610.github.io/r_rpg/24.mp3',
        'moc_fild02': 'https://a7190610.github.io/r_rpg/03.mp3',
        'moc_fild03': 'https://a7190610.github.io/r_rpg/03.mp3',
        'moc_fild04': 'https://a7190610.github.io/r_rpg/24.mp3',
        'moc_fild05': 'https://a7190610.github.io/r_rpg/24.mp3',
        'moc_fild06': 'https://a7190610.github.io/r_rpg/24.mp3',
        'moc_fild07': 'https://a7190610.github.io/r_rpg/24.mp3',
        'moc_fild08': 'https://a7190610.github.io/r_rpg/37.mp3',
        'moc_fild09': 'https://a7190610.github.io/r_rpg/37.mp3',
        'moc_fild10': 'https://a7190610.github.io/r_rpg/37.mp3',
        'moc_fild11': 'https://a7190610.github.io/r_rpg/37.mp3',
        'moc_fild12': 'https://a7190610.github.io/r_rpg/37.mp3',
        'moc_fild13': 'https://a7190610.github.io/r_rpg/03.mp3',
        'moc_fild14': 'https://a7190610.github.io/r_rpg/37.mp3',
        'moc_fild15': 'https://a7190610.github.io/r_rpg/37.mp3',
        'moc_fild16': 'https://a7190610.github.io/r_rpg/45.mp3',
        'in_moc_16': 'https://a7190610.github.io/r_rpg/45.mp3',
        'moc_fild17': 'https://a7190610.github.io/r_rpg/37.mp3',
        'moc_fild18': 'https://a7190610.github.io/r_rpg/37.mp3',
        'moc_fild19': 'https://a7190610.github.io/r_rpg/37.mp3',

        // 斐揚區域
        'pay_fild01': 'https://a7190610.github.io/r_rpg/03.mp3',
        'pay_fild02': 'https://a7190610.github.io/r_rpg/03.mp3',
        'pay_fild03': 'https://a7190610.github.io/r_rpg/03.mp3',
        'pay_fild04': 'https://a7190610.github.io/r_rpg/03.mp3',
        'pay_fild05': 'https://a7190610.github.io/r_rpg/36.mp3',
        'pay_fild06': 'https://a7190610.github.io/r_rpg/36.mp3',
        'pay_fild07': 'https://a7190610.github.io/r_rpg/36.mp3',
        'pay_fild08': 'https://a7190610.github.io/r_rpg/03.mp3',
        'pay_fild09': 'https://a7190610.github.io/r_rpg/36.mp3',
        'pay_fild10': 'https://a7190610.github.io/r_rpg/36.mp3',
        'pay_fild11': 'https://a7190610.github.io/r_rpg/03.mp3',

        // 初心者訓練場
        'new_1-1': 'https://a7190610.github.io/r_rpg/30.mp3',
        'new_2-1': 'https://a7190610.github.io/r_rpg/30.mp3',
        'new_3-1': 'https://a7190610.github.io/r_rpg/30.mp3',
        'new_4-1': 'https://a7190610.github.io/r_rpg/30.mp3',
        'new_5-1': 'https://a7190610.github.io/r_rpg/30.mp3',
        'new_1-2': 'https://a7190610.github.io/r_rpg/30.mp3',
        'new_2-2': 'https://a7190610.github.io/r_rpg/30.mp3',
        'new_3-2': 'https://a7190610.github.io/r_rpg/30.mp3',
        'new_4-2': 'https://a7190610.github.io/r_rpg/30.mp3',
        'new_5-2': 'https://a7190610.github.io/r_rpg/30.mp3',
        'new_1-3': 'https://a7190610.github.io/r_rpg/30.mp3',
        'new_2-3': 'https://a7190610.github.io/r_rpg/30.mp3',
        'new_3-3': 'https://a7190610.github.io/r_rpg/30.mp3',
        'new_4-3': 'https://a7190610.github.io/r_rpg/30.mp3',
        'new_5-3': 'https://a7190610.github.io/r_rpg/30.mp3',
        'new_1-4': 'https://a7190610.github.io/r_rpg/30.mp3',
        'new_2-4': 'https://a7190610.github.io/r_rpg/30.mp3',
        'new_3-4': 'https://a7190610.github.io/r_rpg/30.mp3',
        'new_4-4': 'https://a7190610.github.io/r_rpg/30.mp3',
        'new_5-4': 'https://a7190610.github.io/r_rpg/30.mp3',

        // 螞蟻地獄
        'anthell01': 'https://a7190610.github.io/r_rpg/46.mp3',
        'anthell02': 'https://a7190610.github.io/r_rpg/46.mp3',

        // 吉芬塔
        'gef_dun00': 'https://a7190610.github.io/r_rpg/21.mp3',
        'gef_dun01': 'https://a7190610.github.io/r_rpg/21.mp3',
        'gef_dun02': 'https://a7190610.github.io/r_rpg/50.mp3',
        'gef_dun03': 'https://a7190610.github.io/r_rpg/50.mp3',

        // 海底洞窟
        'iz_dun00': 'https://a7190610.github.io/r_rpg/29.mp3',
        'iz_dun01': 'https://a7190610.github.io/r_rpg/29.mp3',
        'iz_dun02': 'https://a7190610.github.io/r_rpg/29.mp3',
        'iz_dun03': 'https://a7190610.github.io/r_rpg/49.mp3',
        'iz_dun04': 'https://a7190610.github.io/r_rpg/49.mp3',
        'iz_dun05': 'https://a7190610.github.io/r_rpg/49.mp3',

        // 斯芬克斯密穴
        'in_sphinx1': 'https://a7190610.github.io/r_rpg/38.mp3',
        'in_sphinx2': 'https://a7190610.github.io/r_rpg/38.mp3',
        'in_sphinx3': 'https://a7190610.github.io/r_rpg/38.mp3',
        'in_sphinx4': 'https://a7190610.github.io/r_rpg/38.mp3',
        'in_sphinx5': 'https://a7190610.github.io/r_rpg/38.mp3',

        // 金字塔
        'moc_pryd01': 'https://a7190610.github.io/r_rpg/22.mp3',
        'moc_pryd02': 'https://a7190610.github.io/r_rpg/22.mp3',
        'moc_pryd03': 'https://a7190610.github.io/r_rpg/22.mp3',
        'moc_pryd04': 'https://a7190610.github.io/r_rpg/22.mp3',
        'moc_pryd05': 'https://a7190610.github.io/r_rpg/22.mp3',
        'moc_pryd06': 'https://a7190610.github.io/r_rpg/22.mp3',
        'moc_prydb1': 'https://a7190610.github.io/r_rpg/22.mp3',

        // 妙勒尼礦坑
        'mjo_dun01': 'https://a7190610.github.io/r_rpg/27.mp3',
        'mjo_dun02': 'https://a7190610.github.io/r_rpg/27.mp3',
        'mjo_dun03': 'https://a7190610.github.io/r_rpg/27.mp3',

        // 斐揚洞窟
        'pay_dun00': 'https://a7190610.github.io/r_rpg/20.mp3',
        'pay_dun01': 'https://a7190610.github.io/r_rpg/20.mp3',
        'pay_dun02': 'https://a7190610.github.io/r_rpg/20.mp3',
        'pay_dun03': 'https://a7190610.github.io/r_rpg/47.mp3',
        'pay_dun04': 'https://a7190610.github.io/r_rpg/47.mp3',

        // 迷藏森林
        'prt_maze01': 'https://a7190610.github.io/r_rpg/16.mp3',
        'prt_maze02': 'https://a7190610.github.io/r_rpg/16.mp3',
        'prt_maze03': 'https://a7190610.github.io/r_rpg/16.mp3',

        // 主城地下水道
        'prt_sewb1': 'https://a7190610.github.io/r_rpg/19.mp3',
        'prt_sewb2': 'https://a7190610.github.io/r_rpg/19.mp3',
        'prt_sewb3': 'https://a7190610.github.io/r_rpg/19.mp3',
        'prt_sewb4': 'https://a7190610.github.io/r_rpg/19.mp3',

        // 沉沒船
        'treasure01': 'https://a7190610.github.io/r_rpg/17.mp3',
        'treasure02': 'https://a7190610.github.io/r_rpg/17.mp3',

        // 各轉職所
        'hunter_1-1': 'https://a7190610.github.io/r_rpg/51.mp3',
        'hunter_2-1': 'https://a7190610.github.io/r_rpg/51.mp3',
        'hunter_3-1': 'https://a7190610.github.io/r_rpg/51.mp3',
        'in_hunter': 'https://a7190610.github.io/r_rpg/51.mp3',
        'knight_1-1': 'https://a7190610.github.io/r_rpg/51.mp3',
        'knight_2-1': 'https://a7190610.github.io/r_rpg/51.mp3',
        'knight_3-1': 'https://a7190610.github.io/r_rpg/51.mp3',
        'priest_1-1': 'https://a7190610.github.io/r_rpg/51.mp3',
        'priest_2-1': 'https://a7190610.github.io/r_rpg/51.mp3',
        'priest_3-1': 'https://a7190610.github.io/r_rpg/51.mp3',
        'sword_1-1': 'https://a7190610.github.io/r_rpg/51.mp3',
        'sword_2-1': 'https://a7190610.github.io/r_rpg/51.mp3',
        'sword_3-1': 'https://a7190610.github.io/r_rpg/51.mp3',
        'job_thief1': 'https://a7190610.github.io/r_rpg/51.mp3',
        'wizard_1-1': 'https://a7190610.github.io/r_rpg/51.mp3',
        'wizard_2-1': 'https://a7190610.github.io/r_rpg/51.mp3',
        'wizard_3-1': 'https://a7190610.github.io/r_rpg/51.mp3',

        // 限時激鬥
        'force_1-1': 'https://a7190610.github.io/r_rpg/18.mp3',
        'force_2-1': 'https://a7190610.github.io/r_rpg/18.mp3',
        'force_3-1': 'https://a7190610.github.io/r_rpg/18.mp3',
        'force_1-2': 'https://a7190610.github.io/r_rpg/18.mp3',
        'force_2-2': 'https://a7190610.github.io/r_rpg/18.mp3',
        'force_3-2': 'https://a7190610.github.io/r_rpg/18.mp3',
        'force_1-3': 'https://a7190610.github.io/r_rpg/18.mp3',
        'force_2-3': 'https://a7190610.github.io/r_rpg/18.mp3',
        'force_3-3': 'https://a7190610.github.io/r_rpg/18.mp3',

        // 團體戰鬥
        'ordeal_1-1': 'https://a7190610.github.io/r_rpg/06.mp3',
        'ordeal_2-1': 'https://a7190610.github.io/r_rpg/06.mp3',
        'ordeal_3-1': 'https://a7190610.github.io/r_rpg/06.mp3',
        'ordeal_1-2': 'https://a7190610.github.io/r_rpg/06.mp3',
        'ordeal_2-2': 'https://a7190610.github.io/r_rpg/06.mp3',
        'ordeal_3-2': 'https://a7190610.github.io/r_rpg/06.mp3',
        'ordeal_1-3': 'https://a7190610.github.io/r_rpg/06.mp3',
        'ordeal_2-3': 'https://a7190610.github.io/r_rpg/06.mp3',
        'ordeal_3-3': 'https://a7190610.github.io/r_rpg/06.mp3',
        'ordeal_1-4': 'https://a7190610.github.io/r_rpg/06.mp3',
        'ordeal_2-4': 'https://a7190610.github.io/r_rpg/06.mp3',
        'ordeal_3-4': 'https://a7190610.github.io/r_rpg/06.mp3',

        // 艾爾貝塔
        'alberta': 'https://a7190610.github.io/r_rpg/15.mp3',
        'alberta_in': 'https://a7190610.github.io/r_rpg/15.mp3',

        // 沉船附近的島嶼
        'alb2trea': 'https://a7190610.github.io/r_rpg/52.mp3',
        'alb_ship': 'https://a7190610.github.io/r_rpg/52.mp3',

        // 艾爾帕蘭
        'aldebaran': 'https://a7190610.github.io/r_rpg/39.mp3',
        'aldeba_in': 'https://a7190610.github.io/r_rpg/39.mp3',

        // 吉芬
        'gef_tower': 'https://a7190610.github.io/r_rpg/13.mp3',
        'geffen': 'https://a7190610.github.io/r_rpg/13.mp3',
        'geffen_in': 'https://a7190610.github.io/r_rpg/13.mp3',

        // 夢羅克
        'moc_castle': 'https://a7190610.github.io/r_rpg/11.mp3',
        'moc_ruins': 'https://a7190610.github.io/r_rpg/52.mp3',
        'morocc': 'https://a7190610.github.io/r_rpg/11.mp3',
        'morocc_in': 'https://a7190610.github.io/r_rpg/11.mp3',

        // 斐揚
        'pay_arche': 'https://a7190610.github.io/r_rpg/14.mp3',
        'payon': 'https://a7190610.github.io/r_rpg/14.mp3',
        'payon_in01': 'https://a7190610.github.io/r_rpg/14.mp3',
        'payon_in02': 'https://a7190610.github.io/r_rpg/14.mp3',
        'payon_in03': 'https://a7190610.github.io/r_rpg/14.mp3',

        // 普隆德拉
        'prontera': 'https://a7190610.github.io/r_rpg/08.mp3',
        'prt_in': 'https://a7190610.github.io/r_rpg/08.mp3',
        'prt_castle': 'https://a7190610.github.io/r_rpg/09.mp3',
        'prt_church': 'https://a7190610.github.io/r_rpg/10.mp3',

        // 伊斯魯得
        'izlude': 'https://a7190610.github.io/r_rpg/26.mp3',
        'izlude_in': 'https://a7190610.github.io/r_rpg/26.mp3',
        'izlu2dun': 'https://a7190610.github.io/r_rpg/52.mp3',

        // 亞雷那競技場
        'prt_are_in': 'https://a7190610.github.io/r_rpg/52.mp3',
        'arena_room': 'https://a7190610.github.io/r_rpg/52.mp3',
        'prt_arena01': 'https://a7190610.github.io/r_rpg/02.mp3',
        'prt_are01': 'https://a7190610.github.io/r_rpg/02.mp3',

        // 克雷斯特漢姆古城-地表
        'glast_01': 'https://a7190610.github.io/r_rpg/42.mp3',

        // 時鐘塔-地下樓層
        'alde_dun01': 'https://a7190610.github.io/r_rpg/61.mp3',
        'alde_dun02': 'https://a7190610.github.io/r_rpg/61.mp3',
        'alde_dun03': 'https://a7190610.github.io/r_rpg/61.mp3',
        'alde_dun04': 'https://a7190610.github.io/r_rpg/61.mp3',

        // 時鐘塔-地上樓層
        'c_tower1': 'https://a7190610.github.io/r_rpg/60.mp3',
        'c_tower2': 'https://a7190610.github.io/r_rpg/60.mp3',
        'c_tower3': 'https://a7190610.github.io/r_rpg/60.mp3',
        'c_tower4': 'https://a7190610.github.io/r_rpg/60.mp3',

        // 古城-地上樓層
        'gl_cas01': 'https://a7190610.github.io/r_rpg/43.mp3',
        'gl_cas02': 'https://a7190610.github.io/r_rpg/43.mp3',

        // 古城-修道院、墳場、地下監獄
        'gl_church': 'https://a7190610.github.io/r_rpg/40.mp3',
        'gl_chyard': 'https://a7190610.github.io/r_rpg/40.mp3',
        'gl_prison': 'https://a7190610.github.io/r_rpg/40.mp3',
        'gl_prison1': 'https://a7190610.github.io/r_rpg/40.mp3',

        // 古城-地下洞窟、室內
        'gl_dun01': 'https://a7190610.github.io/r_rpg/42.mp3',
        'gl_dun02': 'https://a7190610.github.io/r_rpg/42.mp3',
        'gl_in01': 'https://a7190610.github.io/r_rpg/42.mp3',

        // 古城-騎士團
        'gl_knt01': 'https://a7190610.github.io/r_rpg/44.mp3',
        'gl_knt02': 'https://a7190610.github.io/r_rpg/44.mp3',

        // 古城-下水道
        'gl_sew01': 'https://a7190610.github.io/r_rpg/48.mp3',
        'gl_sew02': 'https://a7190610.github.io/r_rpg/48.mp3',
        'gl_sew03': 'https://a7190610.github.io/r_rpg/48.mp3',
        'gl_sew04': 'https://a7190610.github.io/r_rpg/48.mp3',

        // 古城-階梯密穴
        'gl_step': 'https://a7190610.github.io/r_rpg/42.mp3',

        // PVP場地
        'pvp_y_room': 'https://a7190610.github.io/r_rpg/52.mp3',
        'pvp_n_room': 'https://a7190610.github.io/r_rpg/52.mp3',
        'pvp_n_1-1': 'https://a7190610.github.io/r_rpg/02.mp3',
        'pvp_n_2-1': 'https://a7190610.github.io/r_rpg/02.mp3',
        'pvp_n_3-1': 'https://a7190610.github.io/r_rpg/02.mp3',
        'pvp_n_4-1': 'https://a7190610.github.io/r_rpg/02.mp3',
        'pvp_n_5-1': 'https://a7190610.github.io/r_rpg/02.mp3',
        'pvp_n_6-1': 'https://a7190610.github.io/r_rpg/02.mp3',
        'pvp_n_7-1': 'https://a7190610.github.io/r_rpg/02.mp3',
        'pvp_n_8-1': 'https://a7190610.github.io/r_rpg/02.mp3',
        'pvp_n_1-2': 'https://a7190610.github.io/r_rpg/18.mp3',
        'pvp_n_2-2': 'https://a7190610.github.io/r_rpg/18.mp3',
        'pvp_n_3-2': 'https://a7190610.github.io/r_rpg/18.mp3',
        'pvp_n_4-2': 'https://a7190610.github.io/r_rpg/18.mp3',
        'pvp_n_5-2': 'https://a7190610.github.io/r_rpg/18.mp3',
        'pvp_n_6-2': 'https://a7190610.github.io/r_rpg/18.mp3',
        'pvp_n_7-2': 'https://a7190610.github.io/r_rpg/18.mp3',
        'pvp_n_8-2': 'https://a7190610.github.io/r_rpg/18.mp3',
        'pvp_n_1-3': 'https://a7190610.github.io/r_rpg/17.mp3',
        'pvp_n_2-3': 'https://a7190610.github.io/r_rpg/17.mp3',
        'pvp_n_3-3': 'https://a7190610.github.io/r_rpg/17.mp3',
        'pvp_n_4-3': 'https://a7190610.github.io/r_rpg/17.mp3',
        'pvp_n_5-3': 'https://a7190610.github.io/r_rpg/17.mp3',
        'pvp_n_6-3': 'https://a7190610.github.io/r_rpg/17.mp3',
        'pvp_n_7-3': 'https://a7190610.github.io/r_rpg/17.mp3',
        'pvp_n_8-3': 'https://a7190610.github.io/r_rpg/17.mp3',
        'pvp_n_1-4': 'https://a7190610.github.io/r_rpg/19.mp3',
        'pvp_n_2-4': 'https://a7190610.github.io/r_rpg/19.mp3',
        'pvp_n_3-4': 'https://a7190610.github.io/r_rpg/19.mp3',
        'pvp_n_4-4': 'https://a7190610.github.io/r_rpg/19.mp3',
        'pvp_n_5-4': 'https://a7190610.github.io/r_rpg/19.mp3',
        'pvp_n_6-4': 'https://a7190610.github.io/r_rpg/19.mp3',
        'pvp_n_7-4': 'https://a7190610.github.io/r_rpg/19.mp3',
        'pvp_n_8-4': 'https://a7190610.github.io/r_rpg/19.mp3',
        'pvp_n_1-5': 'https://a7190610.github.io/r_rpg/21.mp3',
        'pvp_n_2-5': 'https://a7190610.github.io/r_rpg/21.mp3',
        'pvp_n_3-5': 'https://a7190610.github.io/r_rpg/21.mp3',
        'pvp_n_4-5': 'https://a7190610.github.io/r_rpg/21.mp3',
        'pvp_n_5-5': 'https://a7190610.github.io/r_rpg/21.mp3',
        'pvp_n_6-5': 'https://a7190610.github.io/r_rpg/21.mp3',
        'pvp_n_7-5': 'https://a7190610.github.io/r_rpg/21.mp3',
        'pvp_n_8-5': 'https://a7190610.github.io/r_rpg/21.mp3',
        'pvp_y_1-1': 'https://a7190610.github.io/r_rpg/08.mp3',
        'pvp_y_2-1': 'https://a7190610.github.io/r_rpg/08.mp3',
        'pvp_y_3-1': 'https://a7190610.github.io/r_rpg/08.mp3',
        'pvp_y_4-1': 'https://a7190610.github.io/r_rpg/08.mp3',
        'pvp_y_5-1': 'https://a7190610.github.io/r_rpg/08.mp3',
        'pvp_y_6-1': 'https://a7190610.github.io/r_rpg/08.mp3',
        'pvp_y_7-1': 'https://a7190610.github.io/r_rpg/08.mp3',
        'pvp_y_8-1': 'https://a7190610.github.io/r_rpg/08.mp3',
        'pvp_y_1-2': 'https://a7190610.github.io/r_rpg/26.mp3',
        'pvp_y_2-2': 'https://a7190610.github.io/r_rpg/26.mp3',
        'pvp_y_3-2': 'https://a7190610.github.io/r_rpg/26.mp3',
        'pvp_y_4-2': 'https://a7190610.github.io/r_rpg/26.mp3',
        'pvp_y_5-2': 'https://a7190610.github.io/r_rpg/26.mp3',
        'pvp_y_6-2': 'https://a7190610.github.io/r_rpg/26.mp3',
        'pvp_y_7-2': 'https://a7190610.github.io/r_rpg/26.mp3',
        'pvp_y_8-2': 'https://a7190610.github.io/r_rpg/26.mp3',
        'pvp_y_1-3': 'https://a7190610.github.io/r_rpg/14.mp3',
        'pvp_y_2-3': 'https://a7190610.github.io/r_rpg/14.mp3',
        'pvp_y_3-3': 'https://a7190610.github.io/r_rpg/14.mp3',
        'pvp_y_4-3': 'https://a7190610.github.io/r_rpg/14.mp3',
        'pvp_y_5-3': 'https://a7190610.github.io/r_rpg/14.mp3',
        'pvp_y_6-3': 'https://a7190610.github.io/r_rpg/14.mp3',
        'pvp_y_7-3': 'https://a7190610.github.io/r_rpg/14.mp3',
        'pvp_y_8-3': 'https://a7190610.github.io/r_rpg/14.mp3',
        'pvp_y_1-4': 'https://a7190610.github.io/r_rpg/15.mp3',
        'pvp_y_2-4': 'https://a7190610.github.io/r_rpg/15.mp3',
        'pvp_y_3-4': 'https://a7190610.github.io/r_rpg/15.mp3',
        'pvp_y_4-4': 'https://a7190610.github.io/r_rpg/15.mp3',
        'pvp_y_5-4': 'https://a7190610.github.io/r_rpg/15.mp3',
        'pvp_y_6-4': 'https://a7190610.github.io/r_rpg/15.mp3',
        'pvp_y_7-4': 'https://a7190610.github.io/r_rpg/15.mp3',
        'pvp_y_8-4': 'https://a7190610.github.io/r_rpg/15.mp3',
        'pvp_y_1-5': 'https://a7190610.github.io/r_rpg/11.mp3',
        'pvp_y_2-5': 'https://a7190610.github.io/r_rpg/11.mp3',
        'pvp_y_3-5': 'https://a7190610.github.io/r_rpg/11.mp3',
        'pvp_y_4-5': 'https://a7190610.github.io/r_rpg/11.mp3',
        'pvp_y_5-5': 'https://a7190610.github.io/r_rpg/11.mp3',
        'pvp_y_6-5': 'https://a7190610.github.io/r_rpg/11.mp3',
        'pvp_y_7-5': 'https://a7190610.github.io/r_rpg/11.mp3',
        'pvp_y_8-5': 'https://a7190610.github.io/r_rpg/11.mp3',
        'pvp_2vs2': 'https://a7190610.github.io/r_rpg/02.mp3',
        'pvp_room': 'https://a7190610.github.io/r_rpg/52.mp3',
    }
};
