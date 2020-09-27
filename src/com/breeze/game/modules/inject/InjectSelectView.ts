module qmr
{
	export class InjectSelectView extends UIComponent
	{
		public stepTxt:eui.Label;
public dropListGroup:eui.Group;
public rank_list:eui.List;
public selectBtn:eui.Image;




		private __selectIndex:number = 0;
		private __state:number = 0;
		private _arrCollection: eui.ArrayCollection;

		public constructor()
		{
			super();
			this.skinName = "InjectListSkin";
        }
        
        /** 初始化组件  */
		protected initComponent(): void
		{
			super.initComponent();

			let t = this;
			t.rank_list.itemRenderer = InjectSelectItem;
			t._arrCollection = new eui.ArrayCollection();
            t.rank_list.dataProvider = t._arrCollection;
			t.stepTxt.text = "";
			t.dropListGroup.visible = false;
		}

		protected initListener(): void
		{
			super.initListener();
			let t = this;
			t.addEvent(t.rank_list, eui.ItemTapEvent.ITEM_TAP, t.onClickItem, t);
			t.selectBtn.addEventListener(egret.TouchEvent.TOUCH_TAP, t.onClicSelectBtn, t);

			if (t.stage) t.stage.addEventListener(egret.TouchEvent.TOUCH_TAP, t.onTouch, t);
		}

		/** 初始化数据 */
		protected initData(): void
		{
			super.initData();

			let t = this;
			let cfgs:InjectCycleCfg[] = ConfigManager.getBean(ConfigEnum.INJECTCYCLE).values;
			t._arrCollection.source = cfgs;
		}
		
		public setSelectStep(step:number):void
		{
			let t = this;

		}

		public show(vis:boolean):void
		{
			this.dropListGroup.visible = vis;
		}

        private onClickItem(e: eui.ItemTapEvent): void
		{
			let t = this;
			let info = e.item;
			var item:InjectSelectItem = e.itemRenderer as InjectSelectItem;
            if(!info || !item){
                return;
			}

			let cfg:InjectCycleCfg = item.data;

			t.__selectIndex = t.rank_list.selectedIndex;

			t.stepTxt.text = info;
            t.dropListGroup.visible = false;

			t.setSelectStep(t.__selectIndex);
			t.dispatch(NotifyConst.SELECT_ITEM_SELECTED, cfg);
		}

		private onClicSelectBtn(e:egret.Event):void
		{
			let t = this;
			e.preventDefault();
			t.__state = t.__state == 0 ? 1 : 0;
			t.updatePanel();
		}

		private onTouch(e: egret.Event): void
		{
			let t = this;
			// if(t.__state == 0){
			// 	return;
			// }

			var target = e.target;

			if(target == t.selectBtn){
				return;
			}

			if(target == t.dropListGroup){
				return;
			}

			if(target == t.rank_list){
				return;
			}

			if (target instanceof InjectSelectItem)
			{
				return;
			}
			var p = target.parent;
			if (p && p instanceof InjectSelectItem)
			{
				return;
			}
			t.__state = 0;
			t.updatePanel();
		}

		private updatePanel():void
		{
			let t = this;
			t.dropListGroup.visible = t.__state == 1;
		}

		public dispose()
		{
			let t = this;
			super.dispose();
			if (t.stage) t.stage.removeEventListener(egret.TouchEvent.TOUCH_TAP, t.onTouch, t);
		}

	}
}