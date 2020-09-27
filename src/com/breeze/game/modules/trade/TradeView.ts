module qmr
{
	export class TradeView extends BaseModule
	{
		public panelGroup:eui.Group;
public txt_totalCount:eui.Label;
public txt_totalChangeValue:eui.Label;
public txt_todayPrice:eui.Label;
public txt_changeValue:eui.Label;
public txt_price0:eui.Label;
public txt_price3:eui.Label;
public txt_price2:eui.Label;
public txt_price1:eui.Label;
public txt_price5:eui.Label;
public txt_price4:eui.Label;
public txt_date0:eui.Label;
public txt_date1:eui.Label;
public txt_date2:eui.Label;
public txt_date3:eui.Label;
public txt_date4:eui.Label;
public txt_date5:eui.Label;
public txt_date6:eui.Label;
public column_0:eui.Image;
public column_1:eui.Image;
public column_2:eui.Image;
public column_3:eui.Image;
public column_4:eui.Image;
public column_5:eui.Image;
public column_6:eui.Image;
public input_group0:eui.Group;
public text_input_price:eui.TextInput;
public input_group:eui.Group;
public text_input_count:eui.TextInput;
public btn_buy_group:eui.Group;
public txt_button_buy:eui.Label;
public itemGroup:eui.Group;
public item_list:eui.List;
public btnReturn:eui.Image;
public btn_help:eui.Image;
public txt_title:eui.Label;




		private _arrCollection: eui.ArrayCollection;
		private _stepLabels:eui.Label[];
		private _dateLabels:eui.Label[];
		private _columns:eui.Image[];
		private _positions:egret.Point[];
		
		public constructor()
		{
			super();
			this.qmrSkinName = "PriceSkin";
			this.isNeedMask = true;

			this.helpId = HelpId.ID_1;
		}

		protected initComponent():void
		{
			let t = this;
			super.initComponent();

            t.item_list.itemRenderer = TradeItemRender;
            t._arrCollection = new eui.ArrayCollection();
			t.item_list.dataProvider = t._arrCollection;
			
			// t.text_input_price.restrict = new RegExp(reg);
			// t.text_input_price.restrict = reg;

			t._stepLabels = [t.txt_price0,t.txt_price1,t.txt_price2,t.txt_price3,t.txt_price4,t.txt_price5];
			t._dateLabels = [t.txt_date0,t.txt_date1,t.txt_date2,t.txt_date3,t.txt_date4,t.txt_date5,t.txt_date6];
			t._columns = [t.column_0,t.column_1,t.column_2,t.column_3,t.column_4,t.column_5,t.column_6];
			t._positions = [];
			for(var i:number = 0; i < t._columns.length; i ++){
				t._positions[i] = new egret.Point(t._columns[i].x, t._columns[i].y);
			}
		}

		protected initData(): void {
			super.initData();
			let t = this;
			t.updateView();
		}
		
		protected initListener(): void
		{
			super.initListener();
            let t = this;
			t.addClickEvent(t.btnReturn, t.closeView, t);
			t.addClickEvent(t.btn_buy_group, t.buyClick, t);
			t.addEvent(t.text_input_price, egret.Event.FOCUS_OUT, t.onFocusOut, t);
			t.addEvent(t.text_input_count, egret.Event.FOCUS_OUT, t.onFocusOut2, t);
			
            t.registerNotify(NotifyConst.S_GET_MONEY_REWARD, t.updateView, t);
			t.registerNotify(NotifyConst.S_GET_MONEY_INFO, t.updateView, t);
			t.registerNotify(NotifyConst.S_SYN_PROPERTY, t.updateView, t);
			t.registerNotify(NotifyConst.S_GET_OCT_MARKET_INFO, t.updateView, t);
			t.registerNotify(NotifyConst.S_MARKET_BUY, t.updateView, t);
			t.registerNotify(NotifyConst.S_MARKET_SELL, t.updateView, t);
			t.registerNotify(NotifyConst.S_MARKET_CANCEL, t.updateView, t);
			t.registerNotify(NotifyConst.S_GET_OCT_BUYGOOD_LIST, t.updateView, t);

			LabelUtil.addInputListener(t.text_input_price, t);
			LabelUtil.addInputListener(t.text_input_count, t);
		}

		private onFocusOut(): void
		{
			let price:string = this.text_input_price.text;
			if(!RegexpUtil.IsDouble(price)){
				return;
			}
			if(!RegexpUtil.IsInteger(price)){
				return;
			}
		}

		private onFocusOut2(): void
		{
			let price:string = this.text_input_count.text;
			if(!RegexpUtil.IsInteger(price)){
				return;
			}
		}

		private buyClick():void
		{
			let t = this;
			let str:string = t.text_input_price.text.trim();
			if (str.length == 0)
            {
                TipManagerCommon.getInstance().createCommonColorTip("请输入购买价格");
                return;
			}

			let price:number = Number(str);
			if(price <= 0){
				TipManagerCommon.getInstance().createCommonColorTip("输入价格有误");
                return;
			}
			if(!price){
				TipManagerCommon.getInstance().createCommonColorTip("输入价格有误");
                return;
			}
			str = t.text_input_count.text.trim();
			if (str.length == 0)
            {
                TipManagerCommon.getInstance().createCommonColorTip("请输入购买数量");
                return;
			}

			let count:number = Number(str);
			if(count <= 0){
				TipManagerCommon.getInstance().createCommonColorTip("输入数量有误");
                return;
			}

			if(price > TradeModule.instance.sysDiamonPrice){
				TipManagerCommon.getInstance().createCommonColorTip("购买的价格不能大于系统指导价格");
                return;
			}

			let money:number = count * price;
			if(money > HeroModel.instance.totalUSDT){
				TipManagerCommon.getInstance().createCommonColorTip("对不起购买货币不足");
				return;
			}
			TradeController.instance.getBuyOrderRequest(count, price);
		}

		private updateView():void
		{
            let t = this;
			let pros:com.message.BuyGoodMsg[] = TradeModule.instance.buyGoodsList;
			let totalBuyCount:number = 0;
			let len:number;
			if(pros && pros.length > 0){
				len = pros.length;
				for(var i:number = 0; i < len;i ++){
					totalBuyCount += Int64Util.getNumber(pros[i].moneyCount);
				}
			}
			t._arrCollection.replaceAll(pros);
			
			t.txt_todayPrice.text = TradeModule.instance.sysDiamonPrice + HeroModel.USDT;
			t.txt_totalCount.text = totalBuyCount + HeroModel.USDT;

			let yestodayPrice:number;
			let todayPrice:number;
			let firstPrice:number = 0.01;

			let historyPros:com.message.HistoryPriceMsg[] = TradeModule.instance.historyPrices;
			let prices:number[] = [];//最近7天的价格，不足用0补上
			let days:number[] = [];//最近7天的日期
			let startTime:number = ServerTime.serverTime;
			if(historyPros && historyPros.length > 0){
				historyPros.sort((a, b)=>{
					return Int64Util.getNumber(a.historyTime) - Int64Util.getNumber(b.historyTime);
				});
				len = historyPros.length;
				for(var i:number = 0; i < len; i ++){
					prices.push(Int64Util.getNumber(historyPros[i].historyPrice));
					days.push(Int64Util.getNumber(historyPros[i].historyTime));
				}

				todayPrice = historyPros[len - 1].historyPrice;
				if(len >= 2){
					yestodayPrice = historyPros[len - 2].historyPrice;
				}
			}

			if(!yestodayPrice){
				yestodayPrice = 0.01;
			}
			if(!yestodayPrice){
				yestodayPrice = firstPrice;
			}

			t.txt_changeValue.text = Math.ceil((todayPrice - yestodayPrice) * 100 / yestodayPrice) + "%";
			t.txt_totalChangeValue.text = Math.ceil((todayPrice - firstPrice) * 100 / firstPrice) + "%";

			if(prices.length > 7){
				prices = prices.slice(0, 7);
				days = days.slice(0, 7);
			}
			
			let dayMiniSeconds:number = 24 * 3600 * 1000;
			let index:number = 1;
			startTime = days[days.length - 1];
			while(prices.length < 7){
				prices.push(0);
				days.push(startTime + dayMiniSeconds * index);
				index ++;
			}

			let maxPrice:number = 0;
			let minPrice:number = 0;
			for(var i:number = 0; i < prices.length; i ++){
				maxPrice = maxPrice < prices[i] ? prices[i] : maxPrice;
				// minPrice = minPrice > prices[i] ? prices[i] : minPrice;
			}
			maxPrice = maxPrice * 1.5;
			let add:number = (maxPrice - minPrice) / 5;
			let steps:number[] = [];
			for(var i:number = 0; i < 6; i ++){
				steps[i] = minPrice + add * i;
			}

			len = steps.length;
			for(var i:number = 0; i < len; i ++){
				t._stepLabels[i].text = NumberUtil.getFloat4Number(steps[i]) + "";
			}

			len = prices.length;
			let dt:Date = new Date();
			for(var i:number = 0; i < days.length; i ++){
				dt.setTime(days[i]);
				t._dateLabels[i].text = TimeUtil.formatMD(dt);
			}

			let price:number;
			let maxHeight:number = 217;
			for(var i:number = 0; i < len; i ++){
				price = prices[i];
				if(maxPrice > 0){
					t._columns[i].height = Math.ceil(price / maxPrice * maxHeight);
				} else {
					t._columns[i].height = 0;
				}
				//steps[i] / maxPrice * maxHeight;
				// t._columns[i].y = 230 - t._columns[i].height;
			}
		}

		public dispose(): void
		{
			super.dispose();
		}
	}
}