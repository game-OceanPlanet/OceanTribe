module qmr
{
	export class WithdrawalView extends BaseModule
	{
		public panelGroup:eui.Group;
public CN_445:eui.Label;
public txt_cost:eui.Label;
public CN_260:eui.Label;
public text_input_address:eui.TextInput;
public text_input_count:eui.TextInput;
public txt_receive_account:eui.Label;
public CN_441:eui.Label;
public CN_440:eui.Label;
public CN_329:eui.Label;
public CN_442:eui.Label;
public text_input_vcode:eui.TextInput;
public CN_443:eui.Label;
public btn_getCode:eui.Group;
public CN_444:eui.Label;
public btn_ok:eui.Group;
public CN_447:eui.Label;
public CN_446:eui.Label;
public btnReturn:eui.Image;
public btn_help:eui.Image;




private __leftTime:number = 0;
		private __timekey:number;
		private applyCount:number = 0;

		private __timekey2:number;


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

			t.showTxtNames = ["CN_445","CN_260","CN_441","CN_440","CN_329","CN_442","CN_443","CN_444","CN_447","CN_446"];
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
			t.addClickEvent(t.btn_ok, t.onApply, t);
			
			t.registerNotify(NotifyConst.S_BUY_FISH, t.updateView, t);
            t.registerNotify(NotifyConst.S_GET_MONEY_REWARD, t.updateView, t);
			t.registerNotify(NotifyConst.S_GET_MONEY_INFO, t.updateView, t);
			t.registerNotify(NotifyConst.S_SYN_PROPERTY, t.updateView, t);
			t.registerNotify(NotifyConst.S_GET_BONUS_INFO, t.updateView, t);
			t.registerNotify(NotifyConst.S_GET_FEED_COUNT, t.updateCostMoney, t);

			t.addEvent(t.text_input_count, egret.Event.CHANGE,t.onTextInputChange,t);
		}

		private onTextInputChange(evt: egret.Event):void
		{
			let t = this;
			let str:string = evt.target.text;
			if(RegexpUtil.IsNull(str)){
				return;
			}
            if(!RegexpUtil.IsInteger(str)){
                return;
			}
			t.applyCount = parseInt(str.trim());
			
			if (t.__timekey2 != -1){
				egret.clearInterval(t.__timekey2);
			}
			t.__timekey2 = egret.setInterval(t.getCostMoney, t, 1000);
		}

		private getCostMoney():void
		{
			let t = this;
			if (t.__timekey2 != -1){
				egret.clearInterval(t.__timekey2);
			}

			let str:string = t.text_input_count.text;
			if(RegexpUtil.IsNull(str)){
				return;
			}
            if(!RegexpUtil.IsInteger(str)){
                return;
			}
			t.applyCount = parseInt(str.trim());
			
			RechargeController.instance.requestCostCmd(t.applyCount);
		}

		private updateCostMoney():void
		{
			let t = this;
			t.txt_cost.text = RechargeModel.instance.rechargeCost + HeroModel.USDT;
			let left:number = t.applyCount - RechargeModel.instance.rechargeCost;
			left = left > 0 ? left : 0;
			t.txt_receive_account.text = left + HeroModel.USDT;
		}

		private updateView():void
		{
			let t = this;
			LabelUtil.setLabelText(t.CN_445, "CN_445", HeroModel.instance.totalUSDT);
		}

		private getVcode():void
        {
            if(this.__leftTime > 0){
                TipManagerCommon.getInstance().showLanTip("CN_174");
                return;
            }

			let tel:string = HeroModel.instance.IdentityPro.mobile;
            LoginController.instance.reqVerifyCode(tel, 4);
            this.__leftTime = 59;
            this.updateCd();
		}

		private onApply():void
		{
			let t = this;
			let address:string = t.text_input_address.text;
			if(RegexpUtil.IsNull(address)){
				return;
			}

			let head:string = address.substr(0, 2);
			if(head != "0x"){
				TipManagerCommon.getInstance().showLanTip("CN_234");
				return;
			}

			let countstr = t.text_input_count.text;
			if(RegexpUtil.IsNull(countstr)){
				return;
			}
            if(!RegexpUtil.IsInteger(countstr)){
                return;
			}
			let count:number = parseFloat(countstr);
			if(count <= 0){
				TipManagerCommon.getInstance().showLanTip("CN_235");
                return;
			}

			let minCount:number = Number(ConfigManagerAft.getCommonConfig(2028));
			if(count < minCount){
				TipManagerCommon.getInstance().showLanTip("CN_236", minCount);
                return;
			}


			let code:string = t.text_input_vcode.text;
			if(RegexpUtil.IsNull(code)){
				return;
			}

			RechargeController.instance.requestApplyCmd(count, address, code);

		}
		
		private updateCd():void
        {
            let t = this;
            if(t.__leftTime > 0){
                if (t.__timekey != -1){
                    egret.clearInterval(t.__timekey);
                }
                t.__timekey = egret.setInterval(t.updateTime, t, 1000);
                t.CN_444.text = CommonTool.formatTime1(t.__leftTime)+"s";
            } else {
                t.stopTime();
            }
        }

        private updateTime(){
			let t = this;
			if(this.__leftTime <= 0){
				LabelUtil.setLabelText(t.CN_444, "CN_444");
				return;
			}
			t.CN_444.text = CommonTool.formatTime1(t.__leftTime)+"s";
			t.__leftTime --;
		}

		private stopTime(): void
		{
			let t = this;
			if (t.__timekey != -1){
				egret.clearInterval(t.__timekey);
			}
            t.__timekey = -1;
			LabelUtil.setLabelText(t.CN_444, "CN_444");
		}

		public dispose(): void
		{
			super.dispose();
		}
	}
}