module qmr
{
	export class TradeController extends BaseController 
	{
		public constructor()
		{
			super();
		}

		private static _instance: TradeController;
		public static get instance(): TradeController
		{
			return this._instance || (this._instance = new TradeController());
		}

		protected initListeners(): void
		{
            this.addSocketListener(MessageID.S_GET_OCT_MARKET_INFO, this.getOTCResponse, this, false);
			this.addSocketListener(MessageID.S_MARKET_BUY, this.getBuyOrderResponse, this, false);
			this.addSocketListener(MessageID.S_MARKET_SELL, this.getSellOrderResponse, this, false);
			this.addSocketListener(MessageID.S_MARKET_CANCEL, this.getBuyOrderRevokeResponse, this, false);
			this.addSocketListener(MessageID.S_GET_OCT_BUYGOOD_LIST, this.getListCResponse, this, false);
		}

        //获取otc信息
		public requestOTCInfo(): void
		{
			var c: com.message.C_GET_OCT_MARKET_INFO = new com.message.C_GET_OCT_MARKET_INFO();
			this.sendCmd(c, MessageID.C_GET_OCT_MARKET_INFO, true);
        }
        
        // 获取otc信息
        private getOTCResponse(s: com.message.S_GET_OCT_MARKET_INFO):void
        {
            TradeModule.instance.sysDiamonPrice = Int64Util.getNumber(s.sysDiamondPrice);
            TradeModule.instance.historyPrices = s.historyPriceMsgList as com.message.HistoryPriceMsg[];
            this.dispatch(NotifyConst.S_GET_OCT_MARKET_INFO);
		}

		//求: 获取OCT求购信息
		public requestOTCList(): void
		{
			var c: com.message.C_GET_OCT_BUYGOOD_LIST = new com.message.C_GET_OCT_BUYGOOD_LIST();
			c.page = 1;
			c.pageSize = 100;
			this.sendCmd(c, MessageID.C_GET_OCT_BUYGOOD_LIST, true);
        }
		
		// 响应: 获取OCT求购信息
        private getListCResponse(s: com.message.S_GET_OCT_BUYGOOD_LIST):void
        {
			TradeModule.instance.buyGoodsList = s.buyGoodMsgList as com.message.BuyGoodMsg[];
            this.dispatch(NotifyConst.S_GET_OCT_BUYGOOD_LIST);
		}

        //请求: 买入金币（挂单）
        public getBuyOrderRequest(count:number, price:number):void
        {
			var c: com.message.C_MARKET_BUY = new com.message.C_MARKET_BUY();
			c.diamondPrice = price;
			c.moneyCount = count;
			this.sendCmd(c, MessageID.C_MARKET_BUY, true);
		}
		
		// 响应:买入金币（挂单）
        private getBuyOrderResponse(s: com.message.S_MARKET_BUY):void
        {
			TradeModule.instance.addBuyOrder(s.buyGoodMsg as com.message.BuyGoodMsg);
            this.dispatch(NotifyConst.S_MARKET_BUY);
		}
		
		//请求: 卖给Ta，获得U
        public getSellOrderRequest(id:number, count:number):void
        {
			var c: com.message.C_MARKET_SELL = new com.message.C_MARKET_SELL();
			c.buyGoodMsgId = id;
			c.sellMoneyCount = count;
			this.sendCmd(c, MessageID.C_MARKET_SELL, true);
		}
		
		// 响应: 卖给Ta，获得U
        private getSellOrderResponse(s: com.message.S_MARKET_SELL):void
        {
			TradeModule.instance.updateBuyOrder(Int64Util.getNumber(s.buyGoodMsgId), s.sellMoneyCount);
            this.dispatch(NotifyConst.S_MARKET_SELL);
		}
		
		//请求: 撤单
        public getBuyOrderRevokeRequest(id:number):void
        {
			var c: com.message.C_MARKET_CANCEL = new com.message.C_MARKET_CANCEL();
			c.buyGoodMsgId = id;
			this.sendCmd(c, MessageID.C_MARKET_CANCEL, true);
		}
		
		// 响应: 撤单
        private getBuyOrderRevokeResponse(s: com.message.S_MARKET_CANCEL):void
        {
			TradeModule.instance.updateBuyOrder(Int64Util.getNumber(s.buyGoodMsgId), 0);
            this.dispatch(NotifyConst.S_MARKET_CANCEL);
        }
    }
}