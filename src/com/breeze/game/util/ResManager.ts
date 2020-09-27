/**
 *
 *
 */
class ResManager {

    private _debugVer: number;

    private _cacheVer: { [key: string]: string };

    constructor() {
    }

    // private _dbresDict: Dictionary<string, boolean> = new Dictionary<string, boolean>();

    // destoryAllDBRes() {
    //     var keys = this._dbresDict.getKeys();
    //     let len = keys.length;
    //     for (let i = len - 1; i >= 0; i--) {
    //         this.destroyDBRes(keys[i]);
    //     }
    // }

    destroyDBRes(name: string) {
        let me = this;
        let ske = me.getRoleSkePath(name);
        let tex = me.getRoleSkeTexPath(name);
        let tex_img = me.getRoleSkePNGPath(name);
        RES.destroyRes(ske);
        RES.destroyRes(tex);
        RES.destroyRes(tex_img);
        let egretFactory = dragonBones.EgretFactory.factory;
        egretFactory.removeDragonBonesData(name);
        egretFactory.removeTextureAtlasData(name);
        // me._dbresDict.remove(name);
    }

    loadDBData(name: string, compFunc?: Function, thisObject?: any, param?: any) {
        let me = this;
        let ske = me.getRoleSkePath(name);
        let tex = me.getRoleSkeTexPath(name);
        let tex_img = me.getRoleSkePNGPath(name);
        let egretFactory = dragonBones.EgretFactory.factory;

        var loadedCount = 0;
        var checkFinish = () => {
            let skeing: boolean = RES.getRes(ske);
            let texing: boolean = RES.getRes(tex);
            let tex_imging: boolean = RES.getRes(tex_img);

            if (loadedCount >= 3 && skeing && texing && tex_imging) {
                // if (!me._dbresDict.hasKey(name)) {
                //     me._dbresDict.add(name, true);
                // }
                compFunc && compFunc.call(thisObject, param);
                // egret.error("回调参数 = " + loadedCount, skeing, texing, tex_imging);
            }
            // egret.error("loadedCount = " + loadedCount, skeing, texing, tex_imging);
        };

        if (!RES.getRes(ske)) {
            ResUtils.getResByUrl(ske, (data, key) => {
                egretFactory.parseDragonBonesData(data, name);
                loadedCount++;
                checkFinish();
            }, me, RES.ResourceItem.TYPE_JSON);
        } else {
            loadedCount++;
        }

        if (!RES.getRes(tex) || !RES.getRes(tex_img)) {
            var texData = null;
            var texImgData = null;
            var checkTexFinish = () => {
                if (texData != null && texImgData != null) {
                    egretFactory.parseTextureAtlasData(texData, texImgData, name);
                    loadedCount += 2;
                    checkFinish();
                }
            };
            ResUtils.getResByUrl(tex, (data, key) => {
                texData = data;
                checkTexFinish();
            }, me, RES.ResourceItem.TYPE_JSON);
            ResUtils.getResByUrl(tex_img, (data, key) => {
                texImgData = data;
                checkTexFinish();
            }, me, RES.ResourceItem.TYPE_IMAGE);
        } else {
            loadedCount += 2;
        }
        checkFinish();
    }

    private getPath(key: number | string, prefix: string, type: string = "png") {
        return `resource-Remote/resource/${prefix}/${key}.${type}`;
    }

    getConfigPath() {
        return this.getPath("config", "config", "bin");
    }

    getPreLoadPath() {
        return this.getPath("preload", "preload", "json");
    }

    getFightConfigPath() {
        return this.getPath("skill/fight", "ani", "bin");
    }

    getMapPath(key: string) {
        return this.getPath(key, "map", "jpg");
    }

    getCinematicsPath() {
        return this.getPath("cinematics/0", "ani");
    }

    getAniJsonPath(key: string) {
        return this.getPath(key, "ani", "json");
    }

    getAniPngPath(key: string) {
        return this.getPath(key, "ani");
    }

    getSoundPath(key: string) {
        return this.getPath(key, "sound", "mp3");
    }

    getItemPath(id: string | number) {
        return this.getPath(id + "", "item");
    }

    getXingtuPath(id: string | number) {
        return this.getPath(id + "", "xingtu");
    }
    getFiveSelectPath(id: string | number) {
        return this.getPath(id + "", "fiveselect");
    }

    getAchievePath(id: string | number) {
        return this.getPath(id + "", "achieve");
    }

    getElementPath(id: string | number) {
        return this.getPath(id + "", "element");
    }

    getItemSignPath(id: string | number) {
        return this.getPath(id + "", "itemsign");
    }

    getBoxPath(id: number | string) {
        return this.getPath(id + "", "box");
    }

    getSkillPath(id: string) {
        return this.getPath(id, "skill");
    }
    getSkillRPath(id: string) {
        return this.getPath(id, "skillr");
    }
    getPartnerTransferPath(id: string) {
        return this.getPath(id, "partner/transfer");
    }
    getTitlePath(id: string) {
        return this.getPath(id, "title");
    }

    getXingpoPath(id: string) {
        return this.getPath(id, "xingpo");
    }

    getDivinePath(id: string | number) {
        return this.getPath(id + "", "divine");
    }

    getSkillWordItemPath(id: string) {
        return this.getPath(id, "actor/skill/nameImg");
    }

    getUniquePath(key: string) {
        return this.getPath(key, "actor/skill/unique");
    }

    getSynergiaPath(key: string) {
        return this.getPath(key, "actor/skill/synergia");
    }

    getActorItemPath(id: string) {
        return this.getPath(id, "actor");
    }

    getFairyPath(id: string) {
        return this.getPath(id, "fairy");
    }

    getHeadPath(id: string | number) {
        return this.getPath(id + "", "head");
    }

    getNewCopyPath(id: string) {
        return this.getPath(id, "guaitan");
    }

    getCopyIcon(id: string) {
        return this.getPath(id, "copy");
    }
    getMainIconPath(id: string | number) {
        return this.getPath(id + "", "mainicon");
    }

    getAdventbossPath(id: string) {
        return this.getPath(id + "", "adventureboss");
    }

    getglobalfactionbossPath(id: string) {
        return this.getPath(id + "", "globalfactionboss");
    }

    getRoleSkePath(id: string) {
        return this.getPath(id + "_ske", "roleske", "json");
    }
    getRoleSkeTexPath(id: string) {
        return this.getPath(id + "_tex", "roleske", "json");
    }
    getRoleSkePNGPath(id: string) {
        return this.getPath(id + "_tex", "roleske");
    }
    /**替换龙骨的静态图 */
    getRoleImgPath(id: string) {
        return this.getPath(id + "_img", "roleske");
    }

    getFullpicPath(id: string) {
        return this.getPath(id, "fullpic");
    }

    getOpenFunPath(id: string) {
        return this.getPath(id, "funopen");
    }

    getOpenFunBgPath(id: string) {
        return this.getPath(id, "funopen/bg", "jpg");
    }

    getWingRes(key: string) {
        return this.getPath(key, "wing");
    }

    getRecommendRes(key: string) {
        return this.getPath(key, "recommend");
    }

    getLimitzhRes(key: string) {
        return this.getPath(key, "limitzh");
    }

    getLimitzhDescRes(key: string) {
        return this.getPath(key, "limitzh");
    }

    getLimitzhBgRes(key: string) {
        return this.getPath(key, "limitzh", "jpg");
    }

    getActivityRes(key: string) {
        return this.getPath(key, "activityhall");
    }

    getUnderGoRes(key: string) {
        return this.getPath(key, "undergo");
    }

    getRealmItemPath(id: string) {
        return this.getPath(id, "undergo/realm");
    }

    getWorldCity(key: string) {
        return this.getPath(key, "worldcity");
    }

    getEyeRes(key: string) {
        return this.getPath(key, "eye");
    }

    getEyeCard(key: string) {
        return this.getPath(key, "eyecard");
    }

    getAnimalRes(key: string) {
        return this.getPath(key, "animal");
    }

    getAnimalRes2(key: string) {
        return this.getPath(key, "animal", "jpg");
    }

    getFormation(key: string) {
        return this.getPath(key, "formation");
    }

    getMaterial(key: string) {
        return this.getPath(key, "material");
    }

    getJlxd(key: string) {
        return this.getPath(key, "jlxd");
    }

    getFashionIcon(key: string) {
        return this.getPath(key, "fashionIcon");
    }

    getZs(key: string) {
        return this.getPath(key, "zhuansheng");
    }

    getLadder(key: string) {
        return this.getPath(key, "ladder");
    }

    getFreepurchaing(key: string) {
        return this.getPath(key, "freepurchaing");
    }

    getMonthCardPath(key: string) {
        return this.getPath(key, "monthcard");
    }

    getLuckyshopPath(key: string) {
        return this.getPath(key, "luckyshop");
    }

    getRechargePath(id: string | number) {
        return this.getPath(id + "", "recharge");
    }

    getBossNamePath(id: string | number) {
        return this.getPath(id + "", "bossname");
    }

    getSportsPath(id: string | number) {
        return this.getPath(id + "", "sports");
    }

    getSevendayPath(id: string | number) {
        return this.getPath(id + "", "sevenday");
    }

    getRechargeTitlePath(id: number | string) {
        return this.getPath("title" + id, "activity/rechargebonus/title");
    }

    getRechargeSloganPath(id: number | string) {
        return this.getPath("slogan" + id, "activity/rechargebonus/slogan");
    }

    getRechargeBonusPath(id: number | string) {
        return this.getPath("bonus" + id, "activity/rechargebonus/bonus");
    }

    getTotemPath(id: string) {
        return this.getPath(id, "activity/totem");
    }

    /**限时排行活动资源 */
    getXsphPath(id: string) {
        return this.getPath(id, "activity/limitrank", "jpg");
    }

    /**活动页签资源 */
    getActTabPath(id: string) {
        return this.getPath(id, "activity/tab");
    }

    getGroupTaskNamePath(id: number | string) {
        return this.getPath(id, "grouptask");
    }

    getLuckyRechargePath(id: number | string) {
        return this.getPath(id, "luckyrecharge");
    }

    getHomeJpgRes(key: string) {
        return this.getPath(key, "home", "jpg");
    }

    getHomePngRes(key: string) {
        return this.getPath(key, "home", "png");
    }

    getOpenServerTitlePath(id: number | string) {
        return this.getPath(id, "openserver");
    }

    /**再充N元资源 */
    getChargeMorePath(id: number | string) {
        return this.getPath(id, "chargemore");
    }

    /**首充双倍 */
    getVipDoublePath(id: number | string) {
        return this.getPath(id, "vipdouble");
    }

    getChiPengHongLianPath(id: number | string) {
        return this.getPath(id, "chipenghonglian");
    }

    getMainFacePath(id: number | string) {
        return this.getPath(id, "mainface");
    }

    getLimitTimeDiscountTitlePath(id: number | string, gray: boolean) {
        return this.getPath("title" + id + (gray ? "g" : ""), "activity/limittimediscount3w/title");
    }

    getLimitTimeDiscountBonusPath(id: number | string, gray: boolean) {
        return this.getPath("bonus" + id + (gray ? "g" : ""), "activity/limittimediscount3w/bonus");
    }

    /**获取秘闻绘卷的角色图片*/
    getMiWenHuiJuanRole(stageId: number | string) {
        return this.getPath("headpic" + stageId, "activity/miwenhuijuan/actors");
    }

    getNoticePath() {
        return this.getPath("noticeUpdateSetting", "notice", "json");
    }

    get fightBuffUrl(): string {
        return "res/actor/fight_buff";
    }

    get fightTitleUrl(): string {
        return ""
    }

    get connectUrl(): string {
        return "res/connect/connect";
    }
}
