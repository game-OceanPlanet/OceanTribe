module qmr
{
	export class HelpMain extends BaseModule
	{
		public panelGroup:eui.Group;
public itemGroup:eui.Group;
public txt_content:eui.Label;
public btnReturn:eui.Image;

		
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
        }
        
		private updateView():void
		{
            let t = this;
            let cfg:HelpTipCfg = ConfigManager.getConf(ConfigEnum.HELPTIP, HelpIdEnum.TIP_10);
            if(cfg){
                t.txt_content.textFlow = HtmlUtil.getHtmlString(cfg.param);
            }
		}

		public dispose(): void
		{
			super.dispose();
		}
	}
}