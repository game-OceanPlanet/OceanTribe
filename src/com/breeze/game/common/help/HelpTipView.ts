module qmr
{
	export class HelpTipView extends BaseModule
	{
		public panelGroup:eui.Group;
public itemGroup:eui.Group;
public scroller:eui.Scroller;
public txt_content:eui.Label;
public txt_title:eui.Label;
public btnClose:eui.Image;


		
		public constructor()
		{
			super();
			this.qmrSkinName = "HelpTipSkin";
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
			t.addClickEvent(t.btnClose, t.closeView, t);
        }
        
		private updateView():void
		{
            let t = this;
            let id:number = t.data;
            if(!id){
                return;
            }
            let cfg:HelpTipCfg = ConfigManager.getConf(ConfigEnum.HELPTIP, id);
            if(cfg){
				LabelUtil.setLabelText(t.txt_title, cfg.title);
				LabelUtil.setLabelText(t.txt_content, cfg.param);
            }
			t.scroller.viewport.scrollV = 0;
		}

		public dispose(): void
		{
			super.dispose();
		}
	}
}