module qmr {
    export class MainView extends BaseModule {
        public txt_invest: eui.Label;
        public txt_income: eui.Label;
        public txt_earn: eui.Label;
        public txt_totalGold: eui.Label;
        public btn_gold: eui.Image;
        public txt_totalUsdt: eui.Label;
        public btn_USD: eui.Image;
        public txt_score: eui.Label;
        public btn_promote: eui.Image;
        public btn_produce: eui.Image;
        public btn_gain: eui.Image;
        public effect_group_3: eui.Group;
        public effect_group_1: eui.Group;
        public effect_group_2: eui.Group;
        public btn_realname: eui.Image;
        public btn_person: eui.Image;
        public btn_ActKey: eui.Image;
        public btn_download: eui.Image;
        public btn_help: eui.Image;
        public btn_SignIn: eui.Image;
        public txt_time: eui.Label;
        public txt_count: eui.Label;


        private baseEffect: BaseEffect;
        private baseEffect2: BaseEffect;
        private baseEffect3: BaseEffect;

        public constructor() {
            super();
            this.qmrSkinName = "Mainui";
        }

        /**
         * @description 初始化事件
         */
        protected initListener(): void {
            super.initListener();
            let t = this;

            t.addClickEvent(t.btn_ActKey, t.onKeyClick, t);
            t.addClickEvent(t.btn_gold, t.onGoldViewClick, t);
            t.addClickEvent(t.btn_USD, t.onPropertyViewClick, t);

            t.addClickEvent(t.btn_realname, t.onRealNameClick, t);
            t.addClickEvent(t.btn_person, t.onPersonClick, t);
            t.addClickEvent(t.btn_download, t.onDowonClick, t);
            t.addClickEvent(t.btn_help, t.onHelpClick, t);

            t.addClickEvent(t.btn_promote, t.onPromoteClick, t);
            t.addClickEvent(t.btn_produce, t.onProduceClick, t);
            t.addClickEvent(t.btn_gain, t.onGainClick, t);
            t.addClickEvent(t.btn_SignIn, t.onSignInClick, t);


            t.registerNotify(NotifyConst.S_GET_FINSH_INFO, t.updateView, t);
            t.registerNotify(NotifyConst.S_COMBINE_FINSH, t.updateView, t);
            t.registerNotify(NotifyConst.S_BUY_FISH, t.updateView, t);
            t.registerNotify(NotifyConst.S_GET_MONEY_REWARD, t.updateView, t);
            t.registerNotify(NotifyConst.S_GET_MONEY_INFO, t.updateView, t);
            t.registerNotify(NotifyConst.S_SYN_PROPERTY, t.updateView, t);
            t.registerNotify(NotifyConst.S_GET_SIGN_IN_INFO, t.updateView, t);
            t.registerNotify(NotifyConst.S_GET_SIGN_IN_REWARD, t.updateView, t);

            // HeroModel.instance.addTestPet();
        }

        private startPoint: egret.Point;
        private endPoint: egret.Point;
        public getMoneyStartPont(): egret.Point {
            let t = this;
            if (!t.startPoint) {
                t.startPoint = new egret.Point();
            }

            t.btn_SignIn.localToGlobal(0, 0, t.startPoint);
            t.startPoint.x += 70;
            t.startPoint.y += 50;
            return t.startPoint;
        }

        public getMoneyEndPont(): egret.Point {
            let t = this;
            if (!t.endPoint) {
                t.endPoint = new egret.Point();
            }

            t.txt_totalGold.localToGlobal(0, 0, t.endPoint);
            t.endPoint.x += 10;
            t.endPoint.y += 10;
            return t.endPoint;
        }

        public playMoneyEffect(): void {
            let t = this;
            BesselImgUtil.flyMoney(t.getMoneyStartPont(), t.getMoneyEndPont());
        }

        protected addedToStage(evt: egret.Event): void {
            super.addedToStage(evt);

            PetController.instance.getDolpInfoCmd();
            PetController.instance.getDolpSignInCmd();
        }

        //资产面板
        private onPropertyViewClick(): void {
            ModuleManager.showModule(ModuleNameConst.USDT_LOG_VIEW);
            PetController.instance.getDolpBuyLogsCmd();
        }

        //金币面板
        private onGoldViewClick(): void {
            ModuleManager.showModule(ModuleNameConst.GOLD_LOG_VIEW);
            PetController.instance.getDolpMoneyLogsCmd();
        }

        //实名认证
        private onRealNameClick(): void {
            ModuleManager.showModule(ModuleNameConst.MINEID_VIEW);
        }
        //个人中心
        private onPersonClick(): void {
            ModuleManager.showModule(ModuleNameConst.CERTIFICATION_VIEW);
        }
        //下载
        private onDowonClick(): void {
            ModuleManager.showModule(ModuleNameConst.APP_DOWN_VIEW);
        }

        //查看帮助
        private onHelpClick(): void {
            ModuleManager.showModule(ModuleNameConst.HELP_MAIN_VIEW);
        }

        //推广
        private onPromoteClick(): void {
            ModuleManager.showModule(ModuleNameConst.INVITE_CODE_VIEW);
        }
        //领养
        private onProduceClick(): void {
            ModuleManager.showModule(ModuleNameConst.ADOPT_VIEW);
        }
        //繁衍
        private onGainClick(): void {
            ModuleManager.showModule(ModuleNameConst.DOLP_VIEW);
        }
        //激活码
        private onKeyClick(): void {
            ModuleManager.showModule(ModuleNameConst.ACT_KEY_VIEW);
        }

        //签到
        private onSignInClick(): void {
            this.playMoneyEffect();
            let lastTime: number = HeroModel.instance.signInLastTime;
            let endTime = lastTime + 8 * 3600 * 1000;
            if (endTime > ServerTime.serverTime) {
                TipManagerCommon.getInstance().createCommonColorTip("签到时间未到，无法领取");
                return;
            }
            PetController.instance.getDolpSignRewardInCmd();
        }

        /**
        * @description 初始化数据,需被子类继承
        */
        protected initData(): void {
            super.initData();
            let t = this;
            t.updateView();

            if (!t.baseEffect) {
                t.baseEffect = new BaseEffect();
                t.baseEffect.scaleX = t.baseEffect.scaleY = 2
                t.effect_group_1.addChild(t.baseEffect);
                t.baseEffect.playUIEffect("uieffect_act", -1, -1, 1);
            }

            if (!t.baseEffect2) {
                t.baseEffect2 = new BaseEffect();
                t.baseEffect2.scaleX = t.baseEffect2.scaleY = 2;
                t.effect_group_2.addChild(t.baseEffect2);
                t.baseEffect2.playUIEffect("uieffect_act", -1, -1, 1);
            }

            if (!t.baseEffect3) {
                t.baseEffect3 = new BaseEffect();
                t.baseEffect3.scaleX = t.baseEffect3.scaleY = 2;
                t.effect_group_3.addChild(t.baseEffect3);
                t.baseEffect3.playUIEffect("uieffect_act", -1, -1, 1);
            }

            t.baseEffect.touchEnabled = t.baseEffect2.touchEnabled = t.baseEffect3.touchEnabled = false;
            t.effect_group_1.touchEnabled = t.effect_group_2.touchEnabled = t.effect_group_3.touchEnabled = false;
        }


        private updateView(): void {
            let t = this;
            t.txt_invest.text = "300" + HeroModel.USDT;
            t.txt_income.text = "330" + HeroModel.USDT;
            t.txt_earn.text = "30" + HeroModel.USDT;

            let md: HeroModel = HeroModel.instance;
            t.txt_totalGold.text = NumberUtil.getFloat4Number2String(md.dolphinMoney);
            t.txt_totalUsdt.text = NumberUtil.getFloat4Number2String(md.totalUSDT);
            t.txt_score.text = md.dolphinSpeedCount + "";
            t.txt_count.text = md.signInMoney + HeroModel.KH;

            t.checkSingInTime();
        }

        private __leftTime: number = 0;
        private __timekey: number;
        private __endTime: number;
        private checkSingInTime(): void {
            let t = this;
            let lastTime: number = HeroModel.instance.signInLastTime;
            t.__endTime = lastTime + 8 * 3600 * 1000;
            t.__leftTime = Math.floor((t.__endTime - ServerTime.serverTime) / 1000);
            if (t.__leftTime < 0) {
                t.__leftTime = 0;
            }

            if (t.__leftTime > 0) {
                if (t.__timekey != -1) {
                    egret.clearInterval(t.__timekey);
                }
                t.__timekey = egret.setInterval(t.updateTime, t, 1000);
                t.txt_time.text = TimeUtil.formatTime1(t.__leftTime);
            } else {
                t.stopTime();
            }
        }
        private updateTime() {
            let t = this;
            if (this.__leftTime <= 0) {
                t.txt_time.text = "00:00";
                return;
            }
            t.__leftTime = Math.floor((t.__endTime - ServerTime.serverTime) / 1000);
            t.txt_time.text = TimeUtil.formatTime1(t.__leftTime);
            t.__leftTime--;
        }

        private stopTime(): void {
            let t = this;
            if (t.__timekey != -1) {
                egret.clearInterval(t.__timekey);
            }
            t.__timekey = -1;
            t.txt_time.text = "00:00";
        }
    }
}
