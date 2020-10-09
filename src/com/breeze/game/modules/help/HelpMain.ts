module qmr
{
	export class HelpMain extends BaseModule
	{
		public panelGroup:eui.Group;
public btn_exchange_en:eui.Group;
public CN_1:eui.Label;
public btn_exchange_cn:eui.Group;
public CN_0:eui.Label;
public itemGroup:eui.Group;
public txt_content:eui.Label;
public btnReturn:eui.Image;
public CN_400:eui.Label;


		
		public constructor()
		{
			super();
			this.qmrSkinName = "HelpMainSkin";
			this.isNeedMask = true;
		}

		protected initComponent():void
		{
			let t = this;
			super.initComponent();

			t.showTxtNames = ["CN_400"];
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
			t.addClickEvent(t.btn_exchange_cn, t.switchCN, t);
			t.addClickEvent(t.btn_exchange_en, t.switchEN, t);
		}
		
		protected switchLange():void
		{
			super.switchLange();
			let t = this;
			LabelUtil.setLabelText(t.txt_content, "CN_413");
		}
        
		private updateView():void
		{
            let t = this;
			LabelUtil.setLabelText(t.txt_content, "CN_413");
		}

		private switchCN():void
		{
			GlobalConfig.LAN_TYPE = "CN";
			NotifyManager.sendNotification(NotifyConst.SWITCH_LANGUAGE);
		}

		private switchEN():void
		{
			GlobalConfig.LAN_TYPE = "EN";
			NotifyManager.sendNotification(NotifyConst.SWITCH_LANGUAGE);
		}

		public dispose(): void
		{
			super.dispose();
		}
	}
}