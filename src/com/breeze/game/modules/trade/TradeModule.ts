module qmr {
    export class TradeModule extends BaseModel {
        public sysDiamonPrice: number = 0;//今日系统U的指导价
        public historyPrices: com.message.HistoryPriceMsg[];//系统指导价历史信息
        public buyGoodsList: com.message.BuyGoodMsg[];//OCT求购信息
        public myBuyGoodsList: com.message.BuyGoodMsg[];//OCT求购信息

        public constructor() {
            super();
            let t = this;

        }

        private static _instance: TradeModule;
        public static get instance(): TradeModule {
            return this._instance || (this._instance = new TradeModule());
        }

        /**
         * 
         * @param pro 添加一个挂单数据
         */
        public addBuyOrder(pro: com.message.BuyGoodMsg): void {
            let t = this;
            if (!t.buyGoodsList) {
                t.buyGoodsList = [];
            }
            if (pro) {
                t.buyGoodsList.push(pro);
            }
        }

        /**
         * 
         * @param pro 更新一个挂单数据
         */
        public updateBuyOrder(id: number, count: number): void {
            let t = this;
            if (!t.buyGoodsList) {
                t.buyGoodsList = [];
            }
            let len: number = t.buyGoodsList.length;
            for (var i: number = 0; i < len; i++) {
                if (id == Int64Util.getNumber(t.buyGoodsList[i].buyGoodMsgId)) {
                    if (count > 0) {
                        t.buyGoodsList[i].moneyCount -= count;
                    } else {
                        t.buyGoodsList.splice(i, 1);
                    }
                    break;
                }
            }
        }

        public getType(s): string {
            //类型,1=领取鱼日产金币,2=金币买鱼,101=U买鱼
            let msg: string;
            switch (s) {
                case TradeTypeEnum.MONEY_REWARD:
                    msg = "CN_261"
                    break;
                case TradeTypeEnum.MONEY_BUY_FISH:
                    msg = "CN_262"
                    break;
                case TradeTypeEnum.OCT_SELL_MONEY:
                    msg = "CN_263"//"OTC-卖给Ta"
                    break;
                case TradeTypeEnum.OCT_SOMEONE_SELL_ME:
                    msg = "CN_264"//"OTC-卖给我"
                    break;
                case TradeTypeEnum.MONEY_EXCHANGE_KAD:
                    msg = "CN_265"//"KAD-用金币兑换KAD，消耗金币"
                    break;
                case TradeTypeEnum.DIRECT_MONEY_REWARD:
                    msg = "CN_266"//"KAD-直推成员领取金币，得到金币"
                    break;
                case TradeTypeEnum.TEAM_MONEY_REWARD:
                    msg = "CN_267"//"KAD-非直推成员领取金币，得到金币"
                    break;
                case TradeTypeEnum.DIAMOND_BUY_FISH:
                    msg = "CN_268"//"U买鱼"
                    break;
                case TradeTypeEnum.OCT_BUY_MONEY_COST_U:
                    msg = "CN_269"//"OTC-买入金币（挂单）"
                    break;
                case TradeTypeEnum.OCT_SELL_MONEY_GOT_U:
                    msg = "CN_270"//"OTC-卖给Ta，获得U"
                    break;
                case TradeTypeEnum.OCT_CANCEL_GOT_U:
                    msg = "CN_271"//"OTC-撤单，获得U"
                    break;
                case TradeTypeEnum.KAD_BONUS_GOT_U:
                    msg = "CN_272"//"KAD-注入每日分红，获得U"
                    break;
                case TradeTypeEnum.RECHARGE_GOT_U:
                    msg = "CN_273"//"玩家充值，获得U"
                    break;
                case TradeTypeEnum.DOLPHIN_SELL_OUT_GOT_U:
                    msg = "CN_274"//"海豚卖出，获得U"
                    break;
                case TradeTypeEnum.DOLPHIN_BUY_COST_U:
                    msg = "CN_275"//"购买海豚，消耗U"
                    break;
                case TradeTypeEnum.DOLPHIN_HATCH_COST_U:
                    msg = "CN_276"//"孵化海豚，消耗U"
                    break;
                case TradeTypeEnum.CASH_OUT_COST_U:
                    msg = "CN_545"//"提现，消耗u"
                    break;
                case TradeTypeEnum.CASH_OUT_REFUSE_GOT_U:
                    msg = "CN_543"//"玩家提现被拒绝，返还U和手续费，获得U"
                    break;
                case TradeTypeEnum.EXCHANGE_GOT_KAD:
                    msg = "CN_277"//"KAD-用金币兑换KAD，得到KAD"
                    break;
                case TradeTypeEnum.INJECT_COST_KAD:
                    msg = "CN_278"//"KAD-注入，消耗KAD"
                    break;
                case TradeTypeEnum.INJECT_EXPIRE_GOT_KAD:
                    msg = "CN_279"//"KAD-注入到期，返还KAD"
                    break;

                case TradeTypeEnum.USE_KEY:
                    msg = "CN_280"//"K激活秘钥-自己使用"
                    break;
                case TradeTypeEnum.KEY_GIVE:
                    msg = "CN_281"//"激活秘钥-赠送给他人"
                    break;
                case TradeTypeEnum.KEY_BE_GIVE:
                    msg = "CN_282"//"激活秘钥-被赠送"
                    break;
                case TradeTypeEnum.DOLPHIN_BUY_COUNT_BE_GIVE:
                    msg = "CN_283"//"实名验证系统赠送， 获得领养名额"
                    break;
                case TradeTypeEnum.DOLPHIN_BUY_COST_BUY_COUNT:
                    msg = "CN_284"//"购买海豚，消耗领养名额"
                    break;
                case TradeTypeEnum.DOLPHIN_EXCHANGE_GOT_COUNT:
                    msg = "CN_285"//"用海豚金币兑换， 获得领养名额"
                    break;
                case TradeTypeEnum.DOLPHIN_TEAM_BUY_GOT_BUY_COUNT:
                    msg = "CN_267"//"非直推下级购买海豚, 团队用户获得领养名额"
                    break;
                case TradeTypeEnum.DOLPHIN_EXCHANGE_COST_MONEY:
                    msg = "CN_286"//"用海豚金币兑换领养名额, 消耗海豚金币"
                    break;
                case TradeTypeEnum.DOLPHIN_FERTILIZE_COST_MONEY:
                    msg = "CN_287"//"受孕海豚, 消耗海豚金币"
                    break;
                case TradeTypeEnum.DOLPHIN_SIGN_IN_GOT_MONEY:
                    msg = "CN_288"//"签到, 获得海豚金币"
                    break;
                case TradeTypeEnum.DOLPHIN_DIRECT_BUY_GOT_MONEY:
                    msg = "CN_266"//"下级购买海豚, 直推用户获得海豚金币"
                    break;
                case TradeTypeEnum.DOLPHIN_SPEED_COST_SPEED_COUNT:
                    msg = "CN_289"//"加速海豚状态, 消耗加速积分"
                    break;
                case TradeTypeEnum.DOLPHIN_DIRECT_BUY_GOT_SPEED_COUNT:
                    msg = "CN_266"//"直推下级购买海豚, 直推用户获得加速积分"
                    break;
                case TradeTypeEnum.DOLPHIN_TEAM_BUY_GOT_SPEED_COUNT:
                    msg = "CN_267"//"非直推下级购买海豚, 团队用户获得加速积分"
                    break;
                case TradeTypeEnum.ADMIN_CURRENCY_OPERATION:
                    msg = "CN_297"//"非直推下级购买海豚, 团队用户获得加速积分"
                    break;

                case TradeTypeEnum.OCEAN_ACTIVITY_DRAW_REWARD:
                    msg = "CN_546"//海洋星球活动，抽奖获得金币
                    break;
                case TradeTypeEnum.OCEAN_ACTIVITY_DIRECT_REWARD:
                    msg = "CN_547"//海洋星球活动，直推排名获得金币
                    break;
                case TradeTypeEnum.OCEAN_ACTIVITY_TEAM_REWARD:
                    msg = "CN_548"//海洋星球活动，团队排名获得金币
                    break;
                case TradeTypeEnum.DEEP_ACTIVITY_BUY_FISH_COST_U:
                    msg = "CN_549"//深海活动，U买鱼，消耗u
                    break;
                case TradeTypeEnum.OCEAN_ACTIVITY_DRAW_GOT_U:
                    msg = "CN_550"//海洋星球活动，抽奖获得u
                    break;
            }
            if(msg){
                return LabelUtil.getCNMessage(msg);
            }
            return "";
        }

        public getMoneyType(s): string {
            //类型,1=领取鱼日产金币,2=金币买鱼,101=U买鱼

            let id;
            if(s < 100){
                id =  "CN_290";
            }
            else if(s < 200){
                id = "CN_291";
            }
            else if(s < 300){
                id = "CN_292";
            }
            else if(s < 400){
                id = "CN_293";
            }
            else if(s < 500){
                id = "CN_294";
            }
            else if(s < 600){
                id = "CN_295";
            }
            else if(s < 700){
                id = "CN_296";
            }

            else if(s == 1000){
                id = "CN_297";
            }

            if(id){
                return LabelUtil.getCNMessage(id);
            }
            return "";
        }
    }
}