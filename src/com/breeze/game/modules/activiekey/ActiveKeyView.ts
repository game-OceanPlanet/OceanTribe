module qmr
{
	export class ActiveKeyView extends BaseModule
	{
		public panelGroup:eui.Group;

public txt_unused:eui.Label;
public txt_state:eui.Label;
public btn_use:eui.Group;
public btn_give:eui.Group;
public text_input_tel:eui.TextInput;
public text_input_count:eui.TextInput;
public itemGroup:eui.Group;
public item_list:eui.List;
public btnReturn:eui.Image;
public btn_help:eui.Image;
public CN_365:eui.Label;
public CN_366:eui.Label;
public CN_367:eui.Label;
public CN_368:eui.Label;
public title_tuiguang:eui.Image;


		private _arrCollection: eui.ArrayCollection;
		
		public constructor()
		{
			super();
			this.qmrSkinName = "ActiveKeySkin";
			this.isNeedMask = true;

			this.helpId = HelpIdEnum.TIP_9;
		}

		protected initComponent():void
		{
			let t = this;
			super.initComponent();

            t.item_list.itemRenderer = ActiveKeyItem;
            t._arrCollection = new eui.ArrayCollection();
            t.item_list.dataProvider = t._arrCollection;

            t.text_input_tel.restrict = "0-9";
            t.text_input_count.restrict = "0-9";

            t.showTxtNames = ["CN_365","CN_366","CN_367","CN_368"];
        }
        
        protected switchLange(){
			let t = this;
			super.switchLange();
			t.text_input_tel.prompt = LabelUtil.getCNMessage("CN_369");
            t.text_input_count.prompt = LabelUtil.getCNMessage("CN_370");
            if(GlobalConfig.isCN){
                t.title_tuiguang.source = "nameImg_json.title_tuiguang";
            } else {
                t.title_tuiguang.source = "nameImg_en_json.title_tuiguang";
            }
		}

		protected initData(): void {
			super.initData();
			let t = this;
            t.updateView();
            
			TeamController.instance.requestMyKeyCMD();
		}
		
		protected initListener(): void
		{
			super.initListener();
            let t = this;
            t.addClickEvent(t.btnReturn, t.closeView, t);
            t.addClickEvent(t.btn_use, t.onUse, t);
            t.addClickEvent(t.btn_give, t.onGive, t);
            
			
			t.registerNotify(NotifyConst.S_BUY_FISH, t.updateView, t);
            t.registerNotify(NotifyConst.S_GET_MONEY_REWARD, t.updateView, t);
			t.registerNotify(NotifyConst.S_GET_MONEY_INFO, t.updateView, t);
			t.registerNotify(NotifyConst.S_SYN_PROPERTY, t.updateView, t);
            t.registerNotify(NotifyConst.S_GET_KEY_LIST, t.updateView, t);
            t.registerNotify(NotifyConst.S_USE_KEY, t.updateView, t);
            t.registerNotify(NotifyConst.S_GIVE_KEY, t.updateView, t);

            LabelUtil.addInputListener(t.text_input_tel, t);
            LabelUtil.addInputListener(t.text_input_count, t);
        }
        
        private onGive():void
        {
            let tel:string = this.text_input_tel.text;
            if(RegexpUtil.IsNull(tel)){
                TipManagerCommon.getInstance().showLanTip("CN_214");
                return;
            }
            if(!RegexpUtil.isPhoneNumber(tel)){
                TipManagerCommon.getInstance().showLanTip("CN_176");
                return;
            }

            let count:string = this.text_input_count.text;
            if(RegexpUtil.IsNull(count)){
                TipManagerCommon.getInstance().showLanTip("CN_215");
                return;
            }
            let c:number = parseInt(count);
            if(c <= 0){
                TipManagerCommon.getInstance().showLanTip("CN_216");
                return;
            }

            if(c > HeroModel.instance.keyCount){
                TipManagerCommon.getInstance().showLanTip("CN_217");
                return;
            }
            if(HeroModel.instance.IdentityPro.mobile == tel){
                TipManagerCommon.getInstance().showLanTip("CN_218");
                return;
            }

            TeamController.instance.requestGiveCMD(tel, c);
        }

        private onUse():void
        {
            let state:number = HeroModel.instance.IdentityPro.state;//激活+实名状态,0未实名，1已激活，2已实名 
            if(state == 1 || state == 2){
                TipManagerCommon.getInstance().showLanTip("CN_219");
                return;
            }
            if(HeroModel.instance.keyCount <= 0){
                TipManagerCommon.getInstance().showLanTip("CN_220");
                return;
            }
            
            TeamController.instance.requestUseKeyCMD();
        }

		private updateView():void
		{
			let t = this;
			
            t.txt_unused.text = HeroModel.instance.keyCount+"";
            let logs = TeamModdel.instance.keyLogs;
            if(logs && logs.length > 0){
                logs.sort((a, b)=>{
                    return Int64Util.getNumber(b.logTime)  - Int64Util.getNumber(a.logTime);
                })
            }
			
            t._arrCollection.replaceAll(logs);
            let id = HeroModel.instance.IdentityPro.state == 0 ? "CN_221":"CN_222";
            //激活+实名状态,0未实名，1已激活，2已实名
            LabelUtil.setLabelText(t.txt_state, id);
            t.txt_state.textColor = HeroModel.instance.IdentityPro.state == 0 ? 0xF73225:0x0EF712;
		}

		public dispose(): void
		{
			super.dispose();
		}
	}
}