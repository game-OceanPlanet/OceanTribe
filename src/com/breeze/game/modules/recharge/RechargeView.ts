module qmr
{
	export class RechargeView extends BaseModule
	{
		public panelGroup:eui.Group;
public but_changePwd0:eui.Group;
public CN_439:eui.Label;
public CN_259:eui.Label;
public but_changePwd:eui.Group;
public CN_437:eui.Label;
public btn_logout:eui.Group;
public CN_438:eui.Label;
public txt_md5:eui.Label;
public CN_436:eui.Label;
public btnReturn:eui.Image;
public codeGroup:eui.Group;
public btn_help:eui.Image;




    	public constructor()
		{
			super();
			this.qmrSkinName = "RechargeSkin";
			this.isNeedMask = true;

			this.helpId = HelpIdEnum.TIP_8;
		}

		protected initComponent():void
		{
			let t = this;
			super.initComponent();

			t.showTxtNames = ["CN_439","CN_259","CN_437","CN_438","CN_436"];
		}

		protected initData(): void {
			super.initData();
			let t = this;
			t.updateView();
			RechargeController.instance.requestAddressInfo();
		}
		
		protected initListener(): void
		{
			super.initListener();
            let t = this;
			t.addClickEvent(t.btnReturn, t.closeView, t);
			t.addClickEvent(t.but_changePwd0, t.saveImg, t);
			t.addClickEvent(t.but_changePwd, t.copyAddress, t);
			
			t.registerNotify(NotifyConst.S_BUY_FISH, t.updateView, t);
            t.registerNotify(NotifyConst.S_GET_MONEY_REWARD, t.updateView, t);
			t.registerNotify(NotifyConst.S_GET_MONEY_INFO, t.updateView, t);
			t.registerNotify(NotifyConst.S_SYN_PROPERTY, t.updateView, t);
			t.registerNotify(NotifyConst.S_GET_BONUS_INFO, t.updateView, t);
			t.registerNotify(NotifyConst.S_GET_MY_ADDRESS, t.updateView, t);
		}

		private saveImg():void
		{
			TipManagerCommon.getInstance().showLanTip("CN_231");
		}

		private copyAddress():void
		{
			let address:string = RechargeModel.instance.rechargeAddress;
			if(address){
				StringUtils.copyClipBoard(address);
			} else {
				TipManagerCommon.getInstance().showLanTip("CN_232");
			}
			
		}

		private updateView():void
		{
			let t = this;
			while(t.codeGroup.numChildren > 0){
				t.codeGroup.removeChildAt(0);
			}
			let address:string = RechargeModel.instance.rechargeAddress;
			if(address){
				let sp:egret.Sprite = GameUtil.createCode(address);
				t.codeGroup.addChild(sp);
			}
			t.txt_md5.text = address;
			
		}

		public dispose(): void
		{
			super.dispose();
		}
	}
}