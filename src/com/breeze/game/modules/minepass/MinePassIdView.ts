module qmr
{
	export class MinePassIdView extends BaseModule
	{
		public panelGroup:eui.Group;
public txt_name:eui.Label;
public txt_kda_total:eui.Label;
public itemGroup:eui.Group;
public item_list:eui.List;
public btnReturn:eui.Image;


private _arrCollection: eui.ArrayCollection;
		
		public constructor()
		{
			super();
			this.qmrSkinName = "MinePassSkin";
			this.isNeedMask = true;
		}

		protected initComponent():void
		{
			let t = this;
            super.initComponent();
            
            t.item_list.itemRenderer = MineKADLogItem;
            t._arrCollection = new eui.ArrayCollection();
            t.item_list.dataProvider = t._arrCollection;
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
			
			t.registerNotify(NotifyConst.S_GET_DIAMOND_LOG_LIST, t.updateView, t);
		}

		private updateView():void
		{
            let t = this;
            t.txt_kda_total.text = NumberUtil.getFloat4Number2String(HeroModel.instance.totalKAD) + HeroModel.KAD;


		}

		public dispose(): void
		{
			super.dispose();
		}
	}
}