module qmr
{
	/**
	 * 通用背景 
	 */
	export class PanelBgUI extends UIComponent
	{
		public lbl_title: eui.BitmapLabel;
		public btnClose: eui.Image;
		public content: eui.Group;
		public topContent: eui.Group;
		private _isChangeTitle: boolean = true;//一些特殊的活动不用更新标题
		private _title: string;

		public constructor()
		{
			super();
			this.skinName = "PanelBg";
			this.registerNotify(NotifyConstLogin.UPDATE_MODULE_TITLE, this.onUpdateName);
		}

		protected initComponent(): void
		{
			this.lbl_title.text = this._title;
		}

		protected addedToStage(evt: egret.Event): void
		{
			super.addedToStage(evt);
			if (this._isChangeTitle)
			{
				this.registerNotify(NotifyConstLogin.UPDATE_MODULE_TITLE, this.onUpdateName);
			}
		}

		protected removeFromStage(evt: egret.Event): void
		{
			super.removeFromStage(evt);
			if (this._isChangeTitle)
			{
				this.unRegisterNotify(NotifyConstLogin.UPDATE_MODULE_TITLE, this.onUpdateName);
			}
		}

		protected onUpdateName(t: {title:string,ruleId:number,owner:UIComponent})
		{
			if(t.owner)
			{
				if(t.owner instanceof BaseModule)
				{
					if(!t.owner.contains(this))
					{
						return;
					}
				}
				else
				{
					let tParent: egret.DisplayObjectContainer = this.parent;
					let moduleName: string;
					while(tParent)
					{
						if(tParent instanceof BaseModule)
						{
							moduleName = (<UIComponent>tParent).moduleName;
							if(moduleName && moduleName != t.owner.moduleName)
							{
								return;
							}
							break;
						}
						tParent = tParent.parent;
					}
				}
			}
			if (!this._isChangeTitle) {
				this.unRegisterNotify(NotifyConstLogin.UPDATE_MODULE_TITLE, this.onUpdateName);
				return;
			}
			if (t.title != undefined){
				if (t.title == "")
				{
					this.lbl_title.visible = false;
				}
				else
				{
					this.title = t.title;
				}
			}
			if (t.ruleId && t.ruleId > 0){
			}
			else{
			}
		}

		/** 设置标题之后不在更新 */
		public set title(value: string)
		{
			this._title = value;
			if (this.lbl_title && this.isSkinLoaded)
			{
				this.lbl_title.text = value;
				this.lbl_title.visible = true;
			}
		}

		/** 设置标题之后不在更新 */
		public onUpdateNameNoChange(title: string)
		{
			this.title = title;
			this._isChangeTitle = false;
			this.unRegisterNotify(NotifyConstLogin.UPDATE_MODULE_TITLE, this.onUpdateName);
		}
	}
}