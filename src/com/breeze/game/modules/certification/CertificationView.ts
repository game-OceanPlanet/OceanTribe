module qmr
{
	export class CertificationView extends BaseModule
	{
		public panelGroup:eui.Group;
public identifyedView:eui.Group;
public txt_name_show:eui.Label;
public txt_tel_show:eui.Label;
public txt_id_show:eui.Label;
public identifyView:eui.Group;
public text_name:eui.TextInput;
public text_id:eui.TextInput;
public text_tel:eui.TextInput;
public btn_Identify:eui.Group;
public txt_detail:eui.Label;
public btnReturn:eui.Image;
public btn_help:eui.Image;
public CN_378:eui.Label;
public CN_379:eui.Label;
public CN_381:eui.Label;
public CN_380:eui.Label;
public title_renzheng:eui.Image;


		public constructor()
		{
			super();
			this.qmrSkinName = "CertificationSkin";
            this.isNeedMask = true;
            this.helpId = HelpIdEnum.TIP_2;
		}

		protected initComponent():void
		{
			let t = this;
            super.initComponent();
            t.showTxtNames = ["CN_378","CN_379","CN_381","CN_380"];
        }
        
        protected switchLange(){
			let t = this;
			super.switchLange();
			t.text_name.prompt = LabelUtil.getCNMessage("CN_382");
            t.text_id.prompt = LabelUtil.getCNMessage("CN_383");
            t.text_tel.prompt = LabelUtil.getCNMessage("CN_384");

            if(GlobalConfig.isCN){
                t.title_renzheng.source = "nameImg_json.title_renzheng";
            } else {
                t.title_renzheng.source = "nameImg_en_json.title_renzheng";
            }
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
            t.addClickEvent(t.btn_Identify, t.onIdentifyClick, t);

            t.registerNotify(NotifyConst.S_REAL_NAME_VERIFICATION, t.updateView, t);

            LabelUtil.addInputListener(t.text_name, t);
            LabelUtil.addInputListener(t.text_id, t);
            LabelUtil.addInputListener(t.text_tel, t);
		}

		private updateView():void
		{
            let t = this;
            let playerPro:com.message.BasePlayerMsg = HeroModel.instance.IdentityPro;
            let isIdentify:boolean = playerPro.state == 2;//激活+实名状态,0未实名，1已激活，2已实名 
            t.identifyView.visible = !isIdentify;
            t.identifyedView.visible = isIdentify;

            // t.identifyView.visible = true;
            // t.identifyedView.visible = false;

            if(isIdentify){
                t.txt_name_show.text = NumberUtil.getPersonNameShow(playerPro.name);
                t.txt_id_show.text = playerPro.idNum;
                t.txt_tel_show.text = NumberUtil.getTelNumberShow(Int64Util.getNumber(playerPro.mobile));
            } else {

            }
        }
        
        private onIdentifyClick():void
        {
            let t = this;
            let name:string = t.text_name.text;
            let id:string = t.text_id.text;
            let tel:string = t.text_tel.text;

            if(RegexpUtil.IsNull(name)){
                return;
            }
            if(!RegexpUtil.isPhoneNumber(tel)){
                TipManagerCommon.getInstance().showLanTip("CN_176");
                return;
            }
            if(!RegexpUtil.isIdentifyId(id)){
                TipManagerCommon.getInstance().showLanTip("CN_197");
                return;
            }

            if(HeroModel.instance.IdentityPro.state == 0){
                TipManagerCommon.getInstance().showLanTip("CN_198");
                return;
            }

            DividendController.instance.requestIdVerifCMD(tel, name, id);
        }

		public dispose(): void
		{
			super.dispose();
		}
	}
}