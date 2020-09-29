module qmr
{
	export class AdoptView extends BaseModule
	{
		public panelGroup:eui.Group;
public btn_get_group:eui.Group;
public txt_button_get:eui.Label;
public txt_adopt_count:eui.Label;
public btn_paidui_group:eui.Group;
public txt_button_paidui:eui.Label;
public txt_count:eui.Label;
public btn_paidui_all:eui.Group;
public txt_button_paiduiall:eui.Label;
public btn_paidui_me:eui.Group;
public txt_button_paiduime:eui.Label;
public itemGroup:eui.Group;
public item_list:eui.List;
public btnReturn:eui.Image;
public btn_help:eui.Image;
public txt_title:eui.Label;




		private _arrCollection: eui.ArrayCollection;
		
		public constructor()
		{
			super();
			this.qmrSkinName = "AdoptSkin";
			this.isNeedMask = true;

			this.helpId = HelpIdEnum.TIP_5;
		}

		protected initComponent():void
		{
			let t = this;
			super.initComponent();

            t.item_list.itemRenderer = AdoptItemRender;
            t._arrCollection = new eui.ArrayCollection();
            t.item_list.dataProvider = t._arrCollection;
		}

		protected initData(): void {
			super.initData();
			let t = this;
			t.updateView();
			PetController.instance.getWaitListCmd();
		}
		
		protected initListener(): void
		{
			super.initListener();
            let t = this;
            t.addClickEvent(t.btnReturn, t.closeView, t);
            t.addClickEvent(t.btn_get_group, t.onGet, t);
            t.addClickEvent(t.btn_paidui_group, t.onQueue, t);
            t.addClickEvent(t.btn_paidui_all, t.showAll, t);
            t.addClickEvent(t.btn_paidui_me, t.showMe, t);
			
			t.registerNotify(NotifyConst.S_BUY_FISH, t.updateView, t);
            t.registerNotify(NotifyConst.S_GET_MONEY_REWARD, t.updateView, t);
			t.registerNotify(NotifyConst.S_GET_MONEY_INFO, t.updateView, t);
            t.registerNotify(NotifyConst.S_SYN_PROPERTY, t.updateView, t);
            t.registerNotify(NotifyConst.S_EXCHANGE_DOLPHIN_MONEY, t.updateView, t);
            t.registerNotify(NotifyConst.S_BUY_DOLPHIN, t.updateView, t);
            t.registerNotify(NotifyConst.S_GET_DOLPHIN_WAIT_LIST, t.updateView, t);
        }
        
        private onGet():void
        {
            PromptController.instance.showPrompt("支付100KH获取一个领养名额", this.getDolpExchange, this);
        }

        private getDolpExchange():void
        {
            PetController.instance.getDolExchangeCmd(1);
        }

        private onQueue():void
        {
            PromptController.instance.showPrompt("支付200USDT领养一条海豚妈妈", this.buyDolp, this);
        }

        private buyDolp():void
        {
            PetController.instance.getBuyDolpCmd();
        }

        private showAll():void
        {

        }

        private showMe():void
        {

        }

		private updateView():void
		{
            let t = this;
            
            let md:HeroModel = HeroModel.instance;
            t.txt_adopt_count.text = md.dolphinBuyCount + "";
            t.txt_count.text = "待领养海豚"+md.getQueueCount()+"条";
            
            let pros:com.message.DolphinWaitMsg[] = md.waitList;
			t._arrCollection.replaceAll(pros);
		}

		public dispose(): void
		{
			super.dispose();
		}
	}
}