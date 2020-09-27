module qmr
{
	export class AppDownloadView extends BaseModule
	{
		public panelGroup:eui.Group;
public btn_exchange_group1:eui.Group;
public txt_button_buy1:eui.Label;
public btn_exchange_group2:eui.Group;
public txt_button_buy2:eui.Label;
public btnReturn:eui.Image;

		
		public constructor()
		{
			super();
			this.qmrSkinName = "DownLoadSkin";
			this.isNeedMask = true;
		}

		protected initComponent():void
		{
			let t = this;
			super.initComponent();
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
            t.addClickEvent(t.btn_exchange_group1, t.downAndroid, t);
            t.addClickEvent(t.btn_exchange_group2, t.downIOS, t);
        }
        
        private downAndroid():void
        {
            TipManagerCommon.getInstance().createCommonTip("敬请期待");
        }

        private downIOS():void
        {
            TipManagerCommon.getInstance().createCommonTip("敬请期待");
        }

		private updateView():void
		{
            let t = this;

		}

		public dispose(): void
		{
			super.dispose();
		}
	}
}