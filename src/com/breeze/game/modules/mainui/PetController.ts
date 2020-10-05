module qmr
{
	export class PetController extends BaseController 
	{
		public constructor()
		{
			super();
		}

		private static _instance: PetController;
		public static get instance(): PetController
		{
			return this._instance || (this._instance = new PetController());
		}

		protected initListeners(): void
		{
            this.addSocketListener(MessageID.S_GET_DOLPHIN_INFO, this.getDolpInfoResponse, this, false);
            this.addSocketListener(MessageID.S_BUY_DOLPHIN, this.getBuyDolpResponse, this, false);
            this.addSocketListener(MessageID.S_QUICK_DOLPHIN, this.getAddSpeedResponse, this, false);
            this.addSocketListener(MessageID.S_HATCH_DOLPHIN, this.getHatchResponse, this, false);
            this.addSocketListener(MessageID.S_FERTILIZE_DOLPHIN, this.getFertilizeResponse, this, false);
            this.addSocketListener(MessageID.S_GET_DOLPHIN_MONEY_LOG_LIST, this.getDolpMoneyLogsResponse, this, false);
            this.addSocketListener(MessageID.S_GET_DOLPHIN_BUYCOUNT_LOG_LIST, this.getDolpBuyLogsResponse, this, false);
            this.addSocketListener(MessageID.S_GET_DOLPHIN_SPEEDCOUNT_LOG_LIST, this.getDolpAddSpeedLogsResponse, this, false);
            this.addSocketListener(MessageID.S_EXCHANGE_DOLPHIN_MONEY, this.getDolpExchangeResponse, this, false);
            this.addSocketListener(MessageID.S_SYNC_NEW_DOLPHIN, this.getDolpBornResponse, this, false);
            this.addSocketListener(MessageID.S_GET_SIGN_IN_INFO, this.getDolpSignInResponse, this, false);
            this.addSocketListener(MessageID.S_GET_SIGN_IN_REWARD, this.getDolpSignInRewardResponse, this, false);
            this.addSocketListener(MessageID.S_GET_DOLPHIN_WAIT_LIST, this.getWaitListResponse, this, false);
		}

        // 获取我的海豚信息
        public getDolpInfoCmd():void
        {
            var c: com.message.C_GET_DOLPHIN_INFO = new com.message.C_GET_DOLPHIN_INFO();
            this.sendCmd(c, MessageID.C_GET_DOLPHIN_INFO, true);
            
            // HeroModel.instance.addTestPet();
        }

        // 获取我的海豚信息
        private getDolpInfoResponse(s: com.message.S_GET_DOLPHIN_INFO):void
        {
            HeroModel.instance.dolphinPros = s.dolphinMsg as com.message.DolphinMsg[];
            HeroModel.instance.updateData(s.dolphinMsg as com.message.DolphinMsg[]);
            this.dispatch(NotifyConst.S_GET_DOLPHIN_INFO);
        }

        // 购买海豚
        public getBuyDolpCmd():void
        {
            var c: com.message.C_BUY_DOLPHIN = new com.message.C_BUY_DOLPHIN();
			this.sendCmd(c, MessageID.C_BUY_DOLPHIN, true);
        }

        // 购买海豚
        private getBuyDolpResponse(s: com.message.S_BUY_DOLPHIN):void
        {
            HeroModel.instance.addPet(s.dolphinMsg as com.message.DolphinMsg);
            this.dispatch(NotifyConst.S_BUY_DOLPHIN);
            TipManagerCommon.getInstance().createCommonColorTip("购买成功", true);

            this.getWaitListCmd();
        }

        // 积分加速，可加速产蛋状态、孵化状态、受孕状态
        public getAddSpeedCmd(id:number):void
        {
            var c: com.message.C_QUICK_DOLPHIN = new com.message.C_QUICK_DOLPHIN();
            c.dolphinId = id;
			this.sendCmd(c, MessageID.C_QUICK_DOLPHIN, true);
        }

        // 积分加速，可加速产蛋状态、孵化状态、受孕状态
        private getAddSpeedResponse(s: com.message.S_QUICK_DOLPHIN):void
        {
            HeroModel.instance.addPet(s.dolphinMsg as com.message.DolphinMsg);
            this.dispatch(NotifyConst.S_QUICK_DOLPHIN);
            TipManagerCommon.getInstance().createCommonColorTip("加速成功", true);
        }

        // 手动孵化海豚
        public getHatchCmd(id:number):void
        {
            var c: com.message.C_HATCH_DOLPHIN = new com.message.C_HATCH_DOLPHIN();
            c.dolphinId = id;
			this.sendCmd(c, MessageID.C_HATCH_DOLPHIN, true);
        }

        // 手动孵化海豚
        private getHatchResponse(s: com.message.S_HATCH_DOLPHIN):void
        {
            HeroModel.instance.addPet(s.dolphinMsg as com.message.DolphinMsg);
            this.dispatch(NotifyConst.S_HATCH_DOLPHIN);
            TipManagerCommon.getInstance().createCommonColorTip("孵化成功", true);
        }

        // 受孕
        public getFertilizeCmd(id:number):void
        {
            var c: com.message.C_FERTILIZE_DOLPHIN = new com.message.C_FERTILIZE_DOLPHIN();
            c.dolphinId = id;
			this.sendCmd(c, MessageID.C_FERTILIZE_DOLPHIN, true);
        }

        // 受孕
        private getFertilizeResponse(s: com.message.S_FERTILIZE_DOLPHIN):void
        {
            HeroModel.instance.addPet(s.dolphinMsg as com.message.DolphinMsg);
            this.dispatch(NotifyConst.S_FERTILIZE_DOLPHIN);
            TipManagerCommon.getInstance().createCommonColorTip("受孕成功", true);
        }

        // 获取海豚金币日志信息
        public getDolpMoneyLogsCmd():void
        {
            var c: com.message.C_GET_DOLPHIN_MONEY_LOG_LIST = new com.message.C_GET_DOLPHIN_MONEY_LOG_LIST();
			this.sendCmd(c, MessageID.C_GET_DOLPHIN_MONEY_LOG_LIST, true);
        }

        // 获取海豚金币日志信息
        private getDolpMoneyLogsResponse(s: com.message.S_GET_DOLPHIN_MONEY_LOG_LIST):void
        {
            HeroModel.instance.dolpMoneyLogs = s.moneyLogMsg as com.message.DolphinMoneyLogMsg[];
            this.dispatch(NotifyConst.S_GET_DOLPHIN_MONEY_LOG_LIST);
        }

        // 获取海豚购买名额日志信息
        public getDolpBuyLogsCmd():void
        {
            var c: com.message.C_GET_DOLPHIN_BUYCOUNT_LOG_LIST = new com.message.C_GET_DOLPHIN_BUYCOUNT_LOG_LIST();
			this.sendCmd(c, MessageID.C_GET_DOLPHIN_BUYCOUNT_LOG_LIST, true);
        }

        // 获取海豚购买名额日志信息
        private getDolpBuyLogsResponse(s: com.message.S_GET_DOLPHIN_BUYCOUNT_LOG_LIST):void
        {
            HeroModel.instance.dolpBuyLogs = s.buyCountLogMsg as com.message.DolphinBuyCountLogMsg[];
            this.dispatch(NotifyConst.S_GET_DOLPHIN_BUYCOUNT_LOG_LIST);
        }

        // 获取海豚加速积分日志信息
        public getDolAddSpeedLogsCmd():void
        {
            var c: com.message.C_GET_DOLPHIN_SPEEDCOUNT_LOG_LIST = new com.message.C_GET_DOLPHIN_SPEEDCOUNT_LOG_LIST();
			this.sendCmd(c, MessageID.C_GET_DOLPHIN_SPEEDCOUNT_LOG_LIST, true);
        }

        // 获取海豚加速积分日志信息
        private getDolpAddSpeedLogsResponse(s: com.message.S_GET_DOLPHIN_SPEEDCOUNT_LOG_LIST):void
        {
            HeroModel.instance.dolpBuyLogs = s.speedCountLogMsg as com.message.DolphinSpeedCountLogMsg[];
            this.dispatch(NotifyConst.S_GET_DOLPHIN_SPEEDCOUNT_LOG_LIST);
        }

         // 用海豚金币置换海豚购买名额
         public getDolExchangeCmd(count:number):void
         {
             var c: com.message.C_EXCHANGE_DOLPHIN_MONEY = new com.message.C_EXCHANGE_DOLPHIN_MONEY();
             c.exchangeCount = count;
             this.sendCmd(c, MessageID.C_EXCHANGE_DOLPHIN_MONEY, true);
         }
 
         // 用海豚金币置换海豚购买名额
         private getDolpExchangeResponse(s: com.message.S_EXCHANGE_DOLPHIN_MONEY):void
         {
             let md:HeroModel = HeroModel.instance;
             md.dolphinBuyCount = s.dolphinBuyCount;
             md.dolphinMoney = Int64Util.getNumber(s.dolphinMoney);
             this.dispatch(NotifyConst.S_EXCHANGE_DOLPHIN_MONEY);
             TipManagerCommon.getInstance().createCommonColorTip("恭喜获得一个领养名额", true);
         }

        // 孵化出新的2个海豚通知
        private getDolpBornResponse(s: com.message.S_SYNC_NEW_DOLPHIN):void
        {
            HeroModel.instance.addPet(s.dolphinOneMsg as com.message.DolphinMsg);
            HeroModel.instance.addPet(s.dolphinTwoMsg as com.message.DolphinMsg);
            this.dispatch(NotifyConst.S_SYNC_NEW_DOLPHIN);
        }

        // 获取我的签到信息
        public getDolpSignInCmd():void
        {
            var c: com.message.C_GET_SIGN_IN_INFO = new com.message.C_GET_SIGN_IN_INFO();
			this.sendCmd(c, MessageID.C_GET_SIGN_IN_INFO, true);
        }

        // 获取我的签到信息
        private getDolpSignInResponse(s: com.message.S_GET_SIGN_IN_INFO):void
        {
            HeroModel.instance.signInMoney = s.dolphinMoney;
            HeroModel.instance.signInLastTime = Int64Util.getNumber(s.lastTime);
            this.dispatch(NotifyConst.S_GET_SIGN_IN_INFO);
        }

        // 领取我的签到奖励
        public getDolpSignRewardInCmd():void
        {
            var c: com.message.C_GET_SIGN_IN_REWARD = new com.message.C_GET_SIGN_IN_REWARD();
			this.sendCmd(c, MessageID.C_GET_SIGN_IN_REWARD, true);
        }

        // 领取我的签到奖励
        private getDolpSignInRewardResponse(s: com.message.S_GET_SIGN_IN_REWARD):void
        {
            let count:number = s.dolphinMoney;
            HeroModel.instance.signInLastTime = Int64Util.getNumber(s.lastTime);
            this.dispatch(NotifyConst.S_GET_SIGN_IN_REWARD);
            TipManagerCommon.getInstance().createCommonColorTip("签到成功获得"+count+"金币", true);
        }

        // 获取海豚排队等待列表
        public getWaitListCmd():void
        {
            var c: com.message.C_GET_DOLPHIN_WAIT_LIST = new com.message.C_GET_DOLPHIN_WAIT_LIST();
			this.sendCmd(c, MessageID.C_GET_DOLPHIN_WAIT_LIST, true);
        }

        // 获取海豚排队等待列表
        private getWaitListResponse(s: com.message.S_GET_DOLPHIN_WAIT_LIST):void
        {
            let pros:com.message.DolphinWaitMsg[] = s.dolphinWaitMsg as com.message.DolphinWaitMsg[];
            if(pros && pros.length > 0){
                pros.sort((a, b)=>{
                    return Int64Util.getNumber(a.createTime) - Int64Util.getNumber(b.createTime);
                })
            }
            HeroModel.instance.waitList = pros;
            this.dispatch(NotifyConst.S_GET_DOLPHIN_WAIT_LIST);
        }
		
	}
}