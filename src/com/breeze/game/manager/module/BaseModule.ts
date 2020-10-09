module qmr
{
	/**
	 *
	 * @description 所有模块的基类
	 *
	 */
	export class BaseModule extends SuperBaseModule
	{
		protected helpId:number;//HelpId
		public constructor()
		{
			super();
			this.showTxtNames = [];
		}

		/** 初始化事件 */
		protected initListener(): void
		{
			let t = this;
			t.registerNotify(StageUtil.STAGE_RESIZE, t.onStageResize, t);
			t.registerNotify(NotifyConstLogin.CLOSE_PANEL_LAYER, t.onTabViewGuide, t);
			t.registerNotify(NotifyConst.TAB_VIEW_GUIDE, t.onTabViewGuide, t);
			t.registerNotify(NotifyConst.SWITCH_LANGUAGE, t.switchLange, t);
			let btn_return = t["btnReturn"];
			if(btn_return){
				t.addClickEvent(btn_return, t.onPageBgCloseView, t);
			}

			let btn_close = t["btnClose"];
			if(btn_close){
				t.addClickEvent(btn_close, t.onPageBgCloseView, t);
			}

			let btn_help = t["btn_help"];
			if(btn_help){
				t.addClickEvent(btn_help, t.showHelpView, t);
			}
			
			super.initListener();
		}

		protected initData():void
		{
			super.initData();
			this.updateTitle(this.title, this.ruleId);
			this.switchLange();
		}

		protected onTabViewGuide() {
			let t = this;

		}

		protected showHelpView():void
		{
			let t = this;
			if(!t.helpId){
				return;
			}
			ModuleManager.showModule(ModuleNameConst.HELP_TIP_VIEW, t.helpId);
		}

		protected showTxtNames:string[];
		protected switchLange(){
			let t = this;
			let len:number = t.showTxtNames.length;
			let cnName:string;
			for(var i:number = 0;i < len; i ++){
				cnName = t.showTxtNames[i];
				if(t[cnName]){
					t[cnName].text = LabelUtil.getCNMessage(cnName);
				}
			}
		}

	}
}