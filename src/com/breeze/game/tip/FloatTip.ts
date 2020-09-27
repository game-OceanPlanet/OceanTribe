module qmr {
	/**
	 * @author eric
	 * @desc 飘浮提示
	 */
	export class FloatTip extends UIComponent {
		private content: eui.Group;
		private lbl_tips: eui.Label;
		private img_bg: eui.Image;
		public img_icon:eui.Image;
		private iscompleted:boolean =false;
		private isSeted:boolean = false;
		public constructor() {
			super();
			this.skinName = "FloatTipSkin";
		}
		protected initComponent():void{
			super.initComponent();
			this.iscompleted = true;
			// this.lbl_tips.strokeColor = ColorConst.COLOR_BLACK;
			// this.lbl_tips.stroke = 0.5;
			//this.bgd.visible = false;
			//this.lbl_tipMsg0.visible = true;
			this.touchEnabled = this.touchChildren=false;
		}
		protected initListener():void{
			super.initListener();
		}
		protected initData(){
			super.initData();
			this.setTip();
		}
		public onStageResize():void{
			super.onStageResize();
			this.width = StageUtil.stageWidth;
		}
		public showTip(data:any): void {
			this.data = data;
			if(this.iscompleted) {
				this.setTip();
			}
		}
		public setTip():void{
			let t = this;
			if(!t.data) return;
			if(t.isSeted) return;
			t.isSeted = true;
			t.alpha = 1;
			t.lbl_tips.textFlow = HtmlUtil.htmlParse.parser(t.data.mess);
			t.y = t.data.yPos ? t.data.yPos : StageUtil.stageHeight / 2 - t.height / 2;
			let offset = t.y - 60;
			if(t.data.itemcfg)
			{
				ImageUtil.setItemIcon(t.img_icon, t.data.itemcfg.icon, t.data.itemcfg.page);
			}
			egret.Tween.get(t)
				.to({ y: offset }, 800)
				.wait(50)
				.to({y: offset - 30, alpha: 0 }, 400)
				.call(t.dispose, t);
		}
		public dispose(): void {
			this.data = null;
			this.isSeted = false;
			this.lbl_tips.textFlow = [];
			this.img_icon.source = null;
			super.dispose();
			egret.Tween.removeTweens(this);
		}
	}
}