module qmr
{
	export class ExchangeView extends BaseModule
	{
		public panelGroup:eui.Group;
public txt_kda_total:eui.Label;
public txt_exchanged_total:eui.Label;
public txt_rate:eui.Label;
public txt_kh_totalSelf:eui.Label;
public txt_kadTotalSelf:eui.Label;
public txt_exchangeDes:eui.Label;
public text_input_price:eui.TextInput;
public btn_exchange_group:eui.Group;
public txt_button_buy:eui.Label;
public itemGroup:eui.Group;
public item_list:eui.List;
public btnReturn:eui.Image;
public btn_help:eui.Image;
public txt_title:eui.Label;



		private _arrCollection: eui.ArrayCollection;
		private _KHNum:number = 0;
		
		public constructor()
		{
			super();
			this.qmrSkinName = "ExchangeSkin";
			this.isNeedMask = true;

			this.helpId = HelpIdEnum.TIP_4;
		}

		protected initComponent():void
		{
			let t = this;
			super.initComponent();

            t.item_list.itemRenderer = ExchangeLogtem;
            t._arrCollection = new eui.ArrayCollection();
			t.item_list.dataProvider = t._arrCollection;
			t.text_input_price.restrict = "0-9";
		}

		protected initData(): void {
			super.initData();
			let t = this;
			t.updateView();
			DividendController.instance.requestExchangeCMD();
		}
		
		protected initListener(): void
		{
			super.initListener();
            let t = this;
			t.addClickEvent(t.btnReturn, t.closeView, t);
			t.addClickEvent(t.btn_exchange_group, t.onExchangeClick, t);
			t.addEvent(t.text_input_price, egret.Event.FOCUS_OUT, t.onFocusOut, t);
			t.addEvent(t.text_input_price, egret.Event.CHANGE,t.onTextInputChange,t);
			
			t.registerNotify(NotifyConst.S_BUY_FISH, t.updateView, t);
            t.registerNotify(NotifyConst.S_GET_MONEY_REWARD, t.updateView, t);
			t.registerNotify(NotifyConst.S_GET_MONEY_INFO, t.updateView, t);
			t.registerNotify(NotifyConst.S_SYN_PROPERTY, t.updateView, t);
			t.registerNotify(NotifyConst.S_GET_MONEY_EXCHANGE_INFO, t.updateView, t);
			t.registerNotify(NotifyConst.S_MONEY_EXCHANGE_KAD, t.updateView, t);

			LabelUtil.addInputListener(t.text_input_price, t);
		}

		private onTextInputChange(evt: egret.Event):void
		{
			let str:string = evt.target.text;
			if(RegexpUtil.IsNull(str)){
				return;
			}
            if(!RegexpUtil.IsInteger(str)){
                return;
			}
			this._KHNum = parseInt(str.trim());
			this.updateKADNum();
		}

		private onExchangeClick():void
		{
			if(this._KHNum <= 0){
				TipManagerCommon.getInstance().createCommonTip("输入金币数量有误");
				return;
			}
			if(this._KHNum > HeroModel.instance.totalMoney){
				TipManagerCommon.getInstance().createCommonTip("对不起您的金币不足");
				return;
			}

			DividendController.instance.requestExchangeKADCMD(this._KHNum);
		}

		private onFocusOut(): void
		{
			this._KHNum = parseInt(this.text_input_price.text.trim());
			this.updateKADNum();
		}

		private updateKADNum():void
		{
			let rate:number = DividendModel.instance.exRatio;
			if(this._KHNum > 0 && rate > 0){
				this.txt_exchangeDes.text = "可兑换"+NumberUtil.getFloat4Number2String(this._KHNum / rate)+HeroModel.KAD;
			}
		}

		private updateView():void
		{
			let t = this;
			let md:DividendModel = DividendModel.instance;
			t.txt_kda_total.text = NumberUtil.getFloat4Number2String(md.sysAllKAD)+HeroModel.KAD;
			t.txt_exchanged_total.text = NumberUtil.getFloat4Number2String(md.exAllKAD)+HeroModel.KAD;
			t.txt_rate.text = md.exRatio + HeroModel.KH+"：1"+HeroModel.KAD;
			t.txt_kh_totalSelf.text = NumberUtil.getFloat4Number2String(HeroModel.instance.totalMoney)+HeroModel.KH;
			t.txt_kadTotalSelf.text = NumberUtil.getFloat4Number2String(HeroModel.instance.totalKAD)+HeroModel.KAD;

			let logs = md.exchangeLogs;
			if(logs){
				logs.sort((a, b)=>{
					return Int64Util.getNumber(b.logTime) - Int64Util.getNumber(a.logTime);
				});
			}
			t._arrCollection.replaceAll(logs);
		}

		public dispose(): void
		{
			super.dispose();
		}
	}
}