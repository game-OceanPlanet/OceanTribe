module qmr
{
	export class AppDownloadView extends BaseModule
	{
		public panelGroup:eui.Group;
public btn_exchange_group1:eui.Group;
public CN_398:eui.Label;
public btn_exchange_group2:eui.Group;
public CN_399:eui.Label;
public btnReturn:eui.Image;
public CN_538:eui.Label;


		
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

			t.showTxtNames = ["CN_399","CN_398","CN_538"];
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
            t.addClickEvent(t.btn_exchange_group2, t.downAndroid, t);
            t.addClickEvent(t.btn_exchange_group1, t.downIOS, t);
        }
        
        private downAndroid():void
        {
			let url = PlatformConfig.AppDownAddress;
			var ifr = document.createElement('iframe');
			ifr.src = url;//打开app
			document.body.appendChild(ifr);
			ifr.onload = function() {
				TipManagerCommon.getInstance().showLanTip("CN_435");
			};
			ifr.style.display='none';
        }

        private downIOS():void
        {
            TipManagerCommon.getInstance().showLanTip("CN_196");
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