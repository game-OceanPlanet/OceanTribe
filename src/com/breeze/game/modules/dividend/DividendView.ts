module qmr
{
	export class DividendView extends BaseModule
	{
		public panelGroup:eui.Group;
public txt_total:eui.Label;
public txt_self_pre:eui.Label;
public txt_self_get:eui.Label;
public txt_dividend_total:eui.Label;
public itemGroup:eui.Group;
public item_list:eui.List;
public btnReturn:eui.Image;
public btn_help:eui.Image;



		private _arrCollection: eui.ArrayCollection;
		
		public constructor()
		{
			super();
			this.qmrSkinName = "DividendSkin";
			this.isNeedMask = true;

			this.helpId = HelpIdEnum.TIP_5;
		}

		protected initComponent():void
		{
			let t = this;
			super.initComponent();

            t.item_list.itemRenderer = DividendLogItem;
            t._arrCollection = new eui.ArrayCollection();
            t.item_list.dataProvider = t._arrCollection;
		}

		protected initData(): void {
			super.initData();
			let t = this;
			t.updateView();
			DividendController.instance.requestDividendCMD();
		}
		
		protected initListener(): void
		{
			super.initListener();
            let t = this;
			t.addClickEvent(t.btnReturn, t.closeView, t);
			
			t.registerNotify(NotifyConst.S_BUY_FISH, t.updateView, t);
            t.registerNotify(NotifyConst.S_GET_MONEY_REWARD, t.updateView, t);
			t.registerNotify(NotifyConst.S_GET_MONEY_INFO, t.updateView, t);
			t.registerNotify(NotifyConst.S_SYN_PROPERTY, t.updateView, t);
			t.registerNotify(NotifyConst.S_GET_BONUS_INFO, t.updateView, t);
		}

		private updateView():void
		{
			let t = this;
			let md:DividendModel = DividendModel.instance;
			t.txt_total.text = NumberUtil.getFloat4Number2String(md.sysAllBonus);
			t.txt_dividend_total.text = NumberUtil.getFloat4Number2String(md.todayAllBonus);
			
			let myTotal:number = 0;

			let logs = md.dividenLogs;
			if(logs && logs.length > 0){
				let len:number = logs.length;
				for(var i:number = 0; i < len; i ++){
					myTotal += logs[i].diamondCount;
				}
			}
			let total:number = md.todayAllBonus;
			if(total > 0 && myTotal > 0){
				t.txt_self_pre.text = NumberUtil.getFloat6Number2String(myTotal/total * 100) + "%";
				t.txt_self_get.text = NumberUtil.getFloat6Number2String(myTotal) + HeroModel.USDT;
			} else {
				t.txt_self_pre.text = "0%";
				t.txt_self_get.text = "0" + HeroModel.USDT;
			}
			
			t._arrCollection.replaceAll(logs);
		}

		public dispose(): void
		{
			super.dispose();
		}
	}
}