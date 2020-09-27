module qmr {
    export class TradeModule extends BaseModel {
        public sysDiamonPrice: number = 0;//今日系统U的指导价
        public historyPrices: com.message.HistoryPriceMsg[];//系统指导价历史信息
        public buyGoodsList: com.message.BuyGoodMsg[];//OCT求购信息

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
                    msg = "领取HK"
                    break;
                case TradeTypeEnum.MONEY_BUY_FISH:
                    msg = "KAD买鱼"
                    break;
                case TradeTypeEnum.OCT_SELL_MONEY:
                    msg = "交易卖出"//"OTC-卖给Ta"
                    break;
                case TradeTypeEnum.OCT_SOMEONE_SELL_ME:
                    msg = "交易购买"//"OTC-卖给我"
                    break;
                case TradeTypeEnum.MONEY_EXCHANGE_KAD:
                    msg = "兑换消耗HK"//"KAD-用金币兑换KAD，消耗金币"
                    break;
                case TradeTypeEnum.DIAMOND_BUY_FISH:
                    msg = "USDT买鱼"//"U买鱼"
                    break;
                case TradeTypeEnum.OCT_BUY_MONEY_COST_U:
                    msg = "买入金币"//"OTC-买入金币（挂单）"
                    break;
                case TradeTypeEnum.OCT_SELL_MONEY_GOT_U:
                    msg = "卖出金币"//"OTC-卖给Ta，获得U"
                    break;
                case TradeTypeEnum.OCT_CANCEL_GOT_U:
                    msg = "撤单"//"OTC-撤单，获得U"
                    break;
                case TradeTypeEnum.KAD_BONUS_GOT_U:
                    msg = "分红"//"KAD-注入每日分红，获得U"
                    break;
                case TradeTypeEnum.EXCHANGE_GOT_KAD:
                    msg = "兑换获得KAD"//"KAD-用金币兑换KAD，得到KAD"
                    break;
                case TradeTypeEnum.INJECT_COST_KAD:
                    msg = "注入KAD"//"KAD-注入，消耗KAD"
                    break;
                case TradeTypeEnum.INJECT_EXPIRE_GOT_KAD:
                    msg = "注入返还"//"KAD-注入到期，返还KAD"
                    break;
            }
            return msg;
        }
    }
}