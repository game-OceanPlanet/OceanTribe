class GameUtil {

    static dbDic: { [key: string]: number } = {};

    //加载骨骼动画
    static LoadDB(con: eui.Group, res: string, getDb: Function, posX: number = 0, posY: number = 0, img?: eui.Image) {
        let _self = this;

        let dic = GameUtil.dbDic;
        if (dic[res]) {
            dic[res] = undefined;
            delete dic[res];
        }

        function loadComplete(res: string) {
            // if (con && con.stage && con.parent) {
            if (con && con.parent) {
                let egretFactory = dragonBones.EgretFactory.factory;
                let armatureDisplay = egretFactory.buildArmatureDisplay("armatureName", res, null, res);
                if (armatureDisplay) {
                    //线上这里有报错，先容错下看看情况
                    con.addChild(armatureDisplay);
                    armatureDisplay.x = posX;
                    armatureDisplay.y = posY;
                    armatureDisplay.animation.play("newAnimation");
                    getDb && getDb(armatureDisplay);
                }
            }
        }

        const $res: ResManager = new ResManager();
        $res.loadDBData(res, loadComplete, _self, res);

        // if (AppConfig.isWebGL) {
        //     $res.loadDBData(res, loadComplete, _self, res);
        // } else {
        //     if (!img) img = new eui.Image();
        //     if (con && con.stage) con.addChild(img);
        //     $texture.push(img, $res.getRoleImgPath(res));
        //     getDb && getDb(undefined, img);
        // }
    }

    static unLoadDB(armatureDisplay: dragonBones.EgretArmatureDisplay, res: string) {
        armatureDisplay.animation.stop();
        armatureDisplay.armature.dispose();
        armatureDisplay.dispose(true);
        let p = armatureDisplay.parent;
        p && p.removeChild(armatureDisplay);
        // GameFunctions.dbDic[res] = $loop.loopTime + 30000;
    }

    //动态生成二维码
    public static createCode(url: string): egret.Sprite {
        return qr.QRCode.create(url);
    }
}
