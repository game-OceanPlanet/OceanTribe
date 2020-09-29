module qmr
{
	export class USDTLogView extends BaseModule
	{
		public all_group:eui.Group;
public btnClose:eui.Image;
public itemGroup:eui.Group;
public item_list:eui.List;
public btnReturn:eui.Image;
public btn_recharge:eui.Group;
public txt_vcodedes1:eui.Label;
public btn_tixian:eui.Group;
public txt_vcodedes0:eui.Label;




		private _arrCollection: eui.ArrayCollection;
		
		public constructor()
		{
			super();
			this.qmrSkinName = "USDTLogVSkin";
			this.isNeedMask = true;
		}

		protected initComponent():void
		{
			let t = this;
			super.initComponent();

            t.item_list.itemRenderer = USDTLogItemRender;
            t._arrCollection = new eui.ArrayCollection();
            t.item_list.dataProvider = t._arrCollection;
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
			t.addClickEvent(t.btnClose, t.closeView, t);
			t.addClickEvent(t.btnReturn, t.closeView, t);
			t.addClickEvent(t.btn_recharge, t.onRechargeClick, t);
			t.addClickEvent(t.btn_tixian, t.onWithdrawalClick, t);
			
			t.registerNotify(NotifyConst.S_GET_DIAMOND_LOG_LIST, t.updateView, t);
		}

		//充值
        private onRechargeClick():void
        {
            ModuleManager.showModule(ModuleNameConst.RECHARGE_VIEW);
        }
        //提现
        private onWithdrawalClick():void
        {
            ModuleManager.showModule(ModuleNameConst.WIHTDRAWAL_VIEW);
        }

		private updateView():void
		{
            let t = this;
			let logs:com.message.DolphinBuyCountLogMsg[] = HeroModel.instance.dolpBuyLogs;
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