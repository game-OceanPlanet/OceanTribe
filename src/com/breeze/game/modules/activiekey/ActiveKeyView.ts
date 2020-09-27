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
                TipManagerCommon.getInstance().createCommonColorTip("赠送的手机号码不能为空");
                return;
            }
            if(!RegexpUtil.isPhoneNumber(tel)){
                TipManagerCommon.getInstance().createCommonColorTip("请输入正确的手机号码");
                return;
            }

            let count:string = this.text_input_count.text;
            if(RegexpUtil.IsNull(count)){
                TipManagerCommon.getInstance().createCommonColorTip("赠送的数量不能为空");
                return;
            }
            let c:number = parseInt(count);
            if(c <= 0){
                TipManagerCommon.getInstance().createCommonColorTip("赠送的数量输入有误");
                return;
            }

            if(c > HeroModel.instance.keyCount){
                TipManagerCommon.getInstance().createCommonColorTip("秘钥数量不足");
                return;
            }
            if(HeroModel.instance.IdentityPro.mobile == tel){
                TipManagerCommon.getInstance().createCommonColorTip("不能赠送给自己");
                return;
            }

            TeamController.instance.requestGiveCMD(tel, c);
        }

        private onUse():void
        {
            let state:number = HeroModel.instance.IdentityPro.state;//激活+实名状态,0未实名，1已激活，2已实名 
            if(state == 1 || state == 2){
                TipManagerCommon.getInstance().createCommonColorTip("账号已激活，不能再次使用激活码");
                return;
            }
            if(HeroModel.instance.keyCount <= 0){
                TipManagerCommon.getInstance().createCommonColorTip("您没有可用激活码，无法使用");
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
            t.txt_state.text = HeroModel.instance.IdentityPro.state == 0 ? "（未激活）":"（已激活）";//;//激活+实名状态,0未实名，1已激活，2已实名
            t.txt_state.textColor = HeroModel.instance.IdentityPro.state == 0 ? 0xF73225:0x0EF712;
		}

		public dispose(): void
		{
			super.dispose();
		}
	}
}