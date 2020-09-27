module qmr
{
	export class MineIdView extends BaseModule
	{
		public panelGroup:eui.Group;
public txt_name:eui.Label;
public txt_kda_total:eui.Label;
public text_input_pwd:eui.TextInput;
public btn_getCode:eui.Group;
public txt_vcodedes:eui.Label;
public text_input_vcode:eui.TextInput;
public but_changePwd:eui.Group;
public btn_logout:eui.Group;
public btnReturn:eui.Image;



private __leftTime:number = 0;
		private __timekey:number;
		
		public constructor()
		{
			super();
			this.qmrSkinName = "MineIDSkin";
			this.isNeedMask = true;
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
            t.addClickEvent(t.but_changePwd, t.onSetPwd, t);
			t.addClickEvent(t.btn_logout, t.onLogout, t);
			t.addClickEvent(t.btn_getCode, t.getVcode1, t);

			LabelUtil.addInputListener(t.text_input_pwd, t);
			LabelUtil.addInputListener(t.text_input_vcode, t);
        }
		
		private getVcode1():void
        {
            if(this.__leftTime > 0){
                TipManagerCommon.getInstance().createCommonColorTip("请稍后再试");
                return;
            }
            let pwd: string = this.text_input_pwd.text.trim();
            if (pwd.length == 0)
            {
                TipManagerCommon.getInstance().createCommonColorTip("请输入新密码");
                return;
            }

			let tel:string = HeroModel.instance.IdentityPro.mobile;
            LoginController.instance.reqVerifyCode(tel, 3);
            this.__leftTime = 59;
            this.updateCd();
        }
        
        private onSetPwd():void
        {
			let t = this;
			let pwd:string = t.text_input_pwd.text.trim();
			if(RegexpUtil.IsNull(pwd)){
				return;
			}

			if(pwd.length < 6){
				TipManagerCommon.getInstance().createCommonColorTip("请输入至少6位数的密码");
				return;
			}

			if(pwd.length > 12){
				TipManagerCommon.getInstance().createCommonColorTip("输入的密码长度不能多于12位");
				return;
			}
			let verifycode:string = this.text_input_vcode.text.trim();
			if(verifycode.length == 0){
                TipManagerCommon.getInstance().createCommonColorTip("请输入验证码");
                return;
            }

			let tel:string = HeroModel.instance.IdentityPro.mobile;

			TeamController.instance.requestChangePwdCMD(tel, pwd, verifycode);
        }

        private onLogout():void
        {
			PromptController.instance.showPrompt("                       确定退出游戏？", this.backGame, this);
		}
		
		// 尝试重新加载游戏，不能加载退出游戏 
		private backGame()
		{
			PlatformManager.instance.platform.reloadGame();
		}

		private updateView():void
		{
            let t = this;
            let playerPro:com.message.BasePlayerMsg = HeroModel.instance.IdentityPro;
            t.txt_kda_total.text = NumberUtil.getFloat4Number2String(HeroModel.instance.totalKAD) + HeroModel.KAD;
            t.txt_name.text = "ID："+NumberUtil.getTelNumberShow(Int64Util.getNumber(playerPro.mobile));
		}

		private updateCd():void
        {
            let t = this;
            if(t.__leftTime > 0){
                if (t.__timekey != -1){
                    egret.clearInterval(t.__timekey);
                }
                t.__timekey = egret.setInterval(t.updateTime, t, 1000);
                t.txt_vcodedes.text = CommonTool.formatTime1(t.__leftTime)+"s";
            } else {
                t.stopTime();
            }
        }

        private updateTime(){
			let t = this;
			if(this.__leftTime <= 0){
				t.txt_vcodedes.text = "获取验证码";
				return;
			}
			t.txt_vcodedes.text = CommonTool.formatTime1(t.__leftTime)+"s";
			t.__leftTime --;
		}

		private stopTime(): void
		{
			let t = this;
			if (t.__timekey != -1){
				egret.clearInterval(t.__timekey);
			}
            t.__timekey = -1;
			t.txt_vcodedes.text = "";
		}


		public dispose(): void
		{
			super.dispose();
		}
	}
}