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

		
    }
}