module qmr
{
	export class RechargeController extends BaseController 
	{
		public constructor()
		{
			super();
		}

		private static _instance: RechargeController;
		public static get instance(): RechargeController
		{
			return this._instance || (this._instance = new RechargeController());
		}

		protected initListeners(): void
		{
			this.addSocketListener(MessageID.S_GET_MY_ADDRESS, this.getAddressResponse, this, false);
			this.addSocketListener(MessageID.S_GET_FEED_COUNT, this.getCostResponse, this, false);
			this.addSocketListener(MessageID.S_CASH_OUT_APPLY, this.getApplyResponse, this, false);
		}

        //获取我的充值地址
		public requestAddressInfo(): void
		{
			var c: com.message.C_GET_MY_ADDRESS = new com.message.C_GET_MY_ADDRESS();
			this.sendCmd(c, MessageID.C_GET_MY_ADDRESS, true);
        }
        
        // 获取我的充值地址
        private getAddressResponse(s: com.message.S_GET_MY_ADDRESS):void
        {
            RechargeModel.instance.rechargeAddress = s.address;
            this.dispatch(NotifyConst.S_GET_MY_ADDRESS);
		}

		 //获取手续费
		 public requestCostCmd(count:number): void
		 {
			 var c: com.message.C_GET_FEED_COUNT = new com.message.C_GET_FEED_COUNT();
			 c.money = count;
			 this.sendCmd(c, MessageID.C_GET_FEED_COUNT, true);
		 }
		 
		 // 获取手续费
		 private getCostResponse(s: com.message.S_GET_FEED_COUNT):void
		 {
			 RechargeModel.instance.rechargeCost = s.feedCount;
			 this.dispatch(NotifyConst.S_GET_FEED_COUNT);
		 }

		  //提现
		public requestApplyCmd(count:number, address:string, vcode:string): void
		{
			var c: com.message.C_CASH_OUT_APPLY = new com.message.C_CASH_OUT_APPLY();
			c.money = count;
			c.toAddress = address;
			c.verifyCode = vcode;
			this.sendCmd(c, MessageID.C_CASH_OUT_APPLY, true);
        }
        
        // 提现
        private getApplyResponse(s: com.message.S_CASH_OUT_APPLY):void
        {
            RechargeModel.instance.rechargeApplyLog = s.cashOutOrderMsg  as com.message.CashOutOrderMsg;
			this.dispatch(NotifyConst.S_CASH_OUT_APPLY);
			
			// if(s.cashOutOrderMsg.state == 0){
			// 	PromptController.instance.showPrompt("CN_463", null);
			// } else {
			// 	let count = Number(ConfigManagerAft.getCommonConfig(2030));//团队规模
			// 	let count2 = Number(ConfigManagerAft.getCommonConfig(2031)) * 100;//比例
			// 	let count3 = Number(ConfigManagerAft.getCommonConfig(2029));//鱼等级
			// 	let myCount:number = TeamModdel.instance.myTeam.cashEffectNum;
			// 	let count4:number = Math.floor(myCount / count * 100);

			// 	let str:string = LabelUtil.getCNMessage(ClientCnEnum.CN_114, count, count2, count3, count4);

			// 	PromptController.instance.showPrompt(str, null);
			// }
		}

		
    }
}