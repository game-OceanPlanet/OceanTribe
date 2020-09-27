module qmr
{
	/**
	 * 通用背景 
	 */
	export class PanelPopBgUI extends UIComponent
	{
		public lbl_bottom: eui.Label;
		public lbl_title: eui.Label;
		public btnClose: eui.Image;
		private _title: string;
		public constructor()
		{
			super();
			this.skinName = "PanelPopBg";
		}

		protected initComponent(): void
		{
			this.lbl_title.text = this._title;
		}

		/** 设置标题之后不在更新 */
		public set title(value: string)
		{
			this._title = value;
			if (this.lbl_title)
			{
				this.lbl_title.text = value;
				this.lbl_title.visible = true;
			}
		}

		/**
		 * set bottomTip
		 */
		public set bottomTips(value: boolean)
		{
			this.lbl_bottom.visible = value;
		}
	}
}