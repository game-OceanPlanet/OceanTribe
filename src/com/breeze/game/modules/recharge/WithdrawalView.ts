module qmr
{
	export class WithdrawalView extends BaseModule
	{
		public panelGroup:eui.Group;
public txt_name0:eui.Label;
public txt_cost:eui.Label;
public txt_title:eui.Label;
public text_input_address:eui.TextInput;
public text_input_count:eui.TextInput;
public txt_receive_account:eui.Label;
public txt_name:eui.Label;
public txt_kda_total:eui.Label;
public text_input_vcode:eui.TextInput;
public btn_getCode:eui.Group;
public txt_vcodeDes:eui.Label;
public btn_ok:eui.Group;
public txt_detail:eui.Label;
public btnReturn:eui.Image;
public btn_help:eui.Image;


private __leftTime:number = 0;
		private __timekey:number;



    	public constructor()
		{
			super();
			this.qmrSkinName = "WithdrawalSkin";
			this.isNeedMask = true;

			this.helpId = HelpIdEnum.TIP_7;
		}

		protected initComponent():void
		{
			let t = this;
			super.initComponent();
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
			t.addClickEvent(t.btn_getCode, t.getVcode, t);
			
			t.registerNotify(NotifyConst.S_BUY_FISH, t.updateView, t);
            t.registerNotify(NotifyConst.S_GET_MONEY_REWARD, t.updateView, t);
			t.registerNotify(NotifyConst.S_GET_MONEY_INFO, t.updateView, t);
			t.registerNotify(NotifyConst.S_SYN_PROPERTY, t.updateView, t);
			t.registerNotify(NotifyConst.S_GET_BONUS_INFO, t.updateView, t);
		}

		private updateView():void
		{
			let t = this;

		}

		private getVcode():void
        {
            if(this.__leftTime > 0){
                TipManagerCommon.getInstance().createCommonColorTip("请稍后再试");
                return;
            }

			let tel:string = HeroModel.instance.IdentityPro.mobile;
            LoginController.instance.reqVerifyCode(tel, 4);
            this.__leftTime = 59;
            this.updateCd();
		}
		
		private updateCd():void
        {
            let t = this;
            if(t.__leftTime > 0){
                if (t.__timekey != -1){
                    egret.clearInterval(t.__timekey);
                }
                t.__timekey = egret.setInterval(t.updateTime, t, 1000);
                t.txt_vcodeDes.text = CommonTool.formatTime1(t.__leftTime)+"s";
            } else {
                t.stopTime();
            }
        }

        private updateTime(){
			let t = this;
			if(this.__leftTime <= 0){
				t.txt_vcodeDes.text = "获取验证码";
				return;
			}
			t.txt_vcodeDes.text = CommonTool.formatTime1(t.__leftTime)+"s";
			t.__leftTime --;
		}

		private stopTime(): void
		{
			let t = this;
			if (t.__timekey != -1){
				egret.clearInterval(t.__timekey);
			}
            t.__timekey = -1;
			t.txt_vcodeDes.text = "";
		}

		public dispose(): void
		{
			super.dispose();
		}
	}
}