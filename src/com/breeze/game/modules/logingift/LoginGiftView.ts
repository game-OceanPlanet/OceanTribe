module qmr
{
	export class LoginGiftView extends BaseModule
	{
        public btn_get:eui.Image;

        public constructor()
		{
			super();
			this.qmrSkinName = "LoginGiftViewSkin";
			this.isNeedMask = true;
			this.isCenter = true;
			this.isClickHide = false;
		}
		public group_target:eui.Group;

		private baseEffect: BaseEffect;
        /** 初始化组件  */
		protected initComponent(): void {
			super.initComponent();
		}

		/** 初始化事件 */
		protected initListener(): void {
			super.initListener();
			let t = this;

			t.addEvent(StageUtil.stage, egret.TouchEvent.TOUCH_BEGIN, t.onRev, t);
		}
		
       		/** 初始化数据 */
		protected initData(): void {
			super.initData();

			if (!this.baseEffect) {
				this.baseEffect = EffectPlayer.playUIEffect("guide", true, null, this.group_target);
			}
        }

		private onRev(): void {
			let t = this;
			let stage = StageUtil.stage;
			stage.removeEventListener(egret.TouchEvent.TOUCH_BEGIN, t.onRev, t);

			this.closeView();
		}

        public dispose(): void {
            super.dispose()
			if (this.baseEffect) {
				this.baseEffect.dispos();
			}
		}
    }
}