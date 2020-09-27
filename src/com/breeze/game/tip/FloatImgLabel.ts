module qmr {
	export class FloatImgLabel extends UIComponent {
		private img_icon: eui.Image;
		private bit_label: eui.BitmapLabel;

		private iscompleted: boolean = false;
		private isSeted: boolean = false;
		public constructor() {
			super();
			this.skinName = "FloatImgLabelSkin";
		}
		protected initComponent(): void {
			super.initComponent();
			this.bit_label.font = "recovery_fnt";
			this.iscompleted = true;
			this.touchEnabled = false;
			this.x = -64;
		}
		protected initListener(): void {
			super.initListener();
		}
		protected initData() {
			super.initData();
			this.setTip();
		}
		public showTip(data: any): void {
			this.data = data;
			if (this.iscompleted) {
				this.setTip();
			}
		}
		public setTip(): void {
			if (!this.data) return;
			if (this.isSeted) return;
			this.isSeted = true;
			this.alpha = 1;
			this.img_icon.texture = RES.getRes(this.data.icon);
			this.bit_label.text = "+" + this.data.count;
			this.x = -this.width / 2;
			// this.y = -SingleModel.getInstance().sceneModel.hero.actorHeight - 20;
			let offset = this.y - 60;
			egret.Tween.get(this)
				.to({ y: offset }, 800)
				.wait(50)
				.to({ y: offset - 30, alpha: 0 }, 400)
				.call(this.dispose, this);
		}
		public dispose(): void {
			this.data = null;
			this.isSeted = false;
			super.dispose();
			egret.Tween.removeTweens(this);
			// TipManager.getInstance().recycleFloatImgTip(this);
		}
	}
}