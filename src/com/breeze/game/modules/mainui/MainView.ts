module qmr {
    export class MainView extends BaseModule {
        public txt_invest:eui.Label;
public txt_income:eui.Label;
public txt_earn:eui.Label;
public txt_totalGold:eui.Label;
public btn_gold:eui.Image;
public txt_totalUsdt:eui.Label;
public btn_USD:eui.Image;
public txt_score:eui.Label;
public btn_promote:eui.Image;
public btn_produce:eui.Image;
public btn_gain:eui.Image;
public effect_group_3:eui.Group;
public effect_group_1:eui.Group;
public effect_group_2:eui.Group;
public btn_realname:eui.Image;
public btn_person:eui.Image;
public btn_ActKey:eui.Image;
public btn_download:eui.Image;
public btn_help:eui.Image;






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


            t.registerNotify(NotifyConst.S_GET_FINSH_INFO, t.updateView, t);
            t.registerNotify(NotifyConst.S_COMBINE_FINSH, t.updateView, t);
            t.registerNotify(NotifyConst.S_BUY_FISH, t.updateView, t);
            t.registerNotify(NotifyConst.S_GET_MONEY_REWARD, t.updateView, t);
            t.registerNotify(NotifyConst.S_GET_MONEY_INFO, t.updateView, t);
            t.registerNotify(NotifyConst.S_SYN_PROPERTY, t.updateView, t);
        }

        private startPoint:egret.Point;
        private endPoint:egret.Point;
        public getMoneyStartPont():egret.Point
        {
            let t = this;
            if(!t.startPoint){
                t.startPoint = new egret.Point();
            }

            t.startPoint.x += 24;
            t.startPoint.y += 24;
            return t.startPoint;
        }

        public getMoneyEndPont():egret.Point
        {
            let t = this;
            if(!t.endPoint){
                t.endPoint = new egret.Point();
            }

            t.txt_totalUsdt.localToGlobal(0, 0,t.endPoint);
            t.endPoint.x += 55;
            return t.endPoint;
        }

        protected addedToStage(evt: egret.Event): void {
            super.addedToStage(evt);

        }

        //资产面板
        private onPropertyViewClick(): void {
            ModuleManager.showModule(ModuleNameConst.USDT_LOG_VIEW);
            PetController.instance.getUSDTLogCmd();
        }

        //金币面板
        private onGoldViewClick(): void {
            ModuleManager.showModule(ModuleNameConst.GOLD_LOG_VIEW);
            PetController.instance.getMoneyLogCmd();
        }

        //实名认证
        private onRealNameClick(): void {
            ModuleManager.showModule(ModuleNameConst.CERTIFICATION_VIEW);
        }
        //个人中心
        private onPersonClick(): void {
            ModuleManager.showModule(ModuleNameConst.MINEID_VIEW);
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
        private onProduceClick():void
        {
            TipManagerCommon.getInstance().createCommonTip("功能暂未开放");
        }
        //繁衍
        private onGainClick():void
        {
            TipManagerCommon.getInstance().createCommonTip("功能暂未开放");
        }
         //激活码
        private onKeyClick():void
        {
            ModuleManager.showModule(ModuleNameConst.ACT_KEY_VIEW);
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
                t.baseEffect.scaleX = t.baseEffect.scaleY = 1.5;
                t.effect_group_1.addChild(t.baseEffect);
                t.baseEffect.playUIEffect("uieffect_act", -1, -1, 1);
            }

            if (!t.baseEffect2) {
                t.baseEffect2 = new BaseEffect();
                t.baseEffect2.scaleX = t.baseEffect2.scaleY = 1.5;
                t.effect_group_2.addChild(t.baseEffect2);
                t.baseEffect2.playUIEffect("uieffect_act", -1, -1, 1);
            }

            if (!t.baseEffect3) {
                t.baseEffect3 = new BaseEffect();
                t.baseEffect3.scaleX = t.baseEffect3.scaleY = 1.5;
                t.effect_group_3.addChild(t.baseEffect3);
                t.baseEffect3.playUIEffect("uieffect_act", -1, -1, 1);
            }

            t.baseEffect.touchEnabled = t.baseEffect2.touchEnabled = t.baseEffect3.touchEnabled = false;
            t.effect_group_1.touchEnabled = t.effect_group_2.touchEnabled = t.effect_group_3.touchEnabled = false;
        }

        private updateView(): void {
            let t = this;
            let md: HeroModel = HeroModel.instance;
            t.txt_totalGold.text = NumberUtil.getFloat4Number2String(md.totalMoney);
            t.txt_totalUsdt.text = NumberUtil.getFloat4Number2String(md.totalUSDT);
            t.txt_score.text = md.dolphinSpeedCount+"";
        }
    }
}
