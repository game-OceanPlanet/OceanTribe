module qmr
{
	export class DolpView extends BaseModule
	{
		public panelGroup:eui.Group;
public itemGroup:eui.Group;
public item_list:eui.List;
public btnReturn:eui.Image;





		private _arrCollection: eui.ArrayCollection;
		
		public constructor()
		{
			super();
			this.qmrSkinName = "DolpViewSkin";
			this.isNeedMask = true;

			this.helpId = HelpIdEnum.TIP_5;
		}

		protected initComponent():void
		{
			let t = this;
			super.initComponent();

            t.item_list.itemRenderer = DolpItemRender;
            t._arrCollection = new eui.ArrayCollection();
            t.item_list.dataProvider = t._arrCollection;
		}

		protected initData(): void {
			super.initData();
			let t = this;
			t.updateView();
			PetController.instance.getDolpInfoCmd();
		}
		
		protected initListener(): void
		{
			super.initListener();
            let t = this;
            t.addClickEvent(t.btnReturn, t.closeView, t);
			
			t.registerNotify(NotifyConst.S_BUY_FISH, t.updateView, t);
            t.registerNotify(NotifyConst.S_GET_MONEY_REWARD, t.updateView, t);
			t.registerNotify(NotifyConst.S_GET_MONEY_INFO, t.updateView, t);
            t.registerNotify(NotifyConst.S_SYN_PROPERTY, t.updateView, t);
            t.registerNotify(NotifyConst.S_EXCHANGE_DOLPHIN_MONEY, t.updateView, t);
            t.registerNotify(NotifyConst.S_BUY_DOLPHIN, t.updateView, t);
            t.registerNotify(NotifyConst.S_QUICK_DOLPHIN, t.updateView, t);
            t.registerNotify(NotifyConst.S_FERTILIZE_DOLPHIN, t.updateView, t);
            t.registerNotify(NotifyConst.S_HATCH_DOLPHIN, t.updateView, t);
            t.registerNotify(NotifyConst.S_GET_DOLPHIN_INFO, t.updateView, t);
        }
        

		private updateView():void
		{
            let t = this;
            
			let infos:DolphinInfo[] = HeroModel.instance.getDolpInfos();
			if(infos && infos.length > 0){
				let getInfos:DolphinInfo[] = [];
				for(var i:number = 0; i < infos.length; i ++){
					if(infos[i].state > PetStateEnum.STATE_0){
						getInfos.push(infos[i]);
					}
				}
				getInfos.sort((a, b)=>{
					return Int64Util.getNumber(b.createTime) - Int64Util.getNumber(a.createTime);
				})

				t._arrCollection.replaceAll(getInfos);
			}
		}

		public dispose(): void
		{
			super.dispose();
		}
	}
}