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
            this.addSocketListener(MessageID.S_GET_FISH_INFO, this.getFishInfoResponse, this, false);
			this.addSocketListener(MessageID.S_COMBINE_FISH, this.getCombineResponse, this, false);
			this.addSocketListener(MessageID.S_BUY_FISH, this.getBuyFishResponse, this, false);
			this.addSocketListener(MessageID.S_GET_MONEY_REWARD, this.getMoneyResponse, this, false);
            this.addSocketListener(MessageID.S_GET_MONEY_INFO, this.getMoneyInfoResponse, this, false);
            this.addSocketListener(MessageID.S_GET_MONEY_LOG_LIST, this.getMoneyLogResponse, this, false);
            this.addSocketListener(MessageID.S_GET_DIAMOND_LOG_LIST, this.getUSDTLogResponse, this, false);
            this.addSocketListener(MessageID.S_DIAMOND_BUY_FISH, this.getBuyFishByUSDTResponse, this, false);
		}

		public reqUserLoginInitFinish(): void
		{
			var c: com.message.C_USER_LOGIN_INIT_FINISH = new com.message.C_USER_LOGIN_INIT_FINISH();
			this.sendCmd(c, MessageID.C_USER_LOGIN_INIT_FINISH, true);
		}

        // 获取我的鱼儿
        // public getMyFishInfo():void
        // {
        //     var c: com.message.C_GET_FISH_INFO = new com.message.C_GET_FISH_INFO();
		// 	this.sendCmd(c, MessageID.C_GET_FISH_INFO, true);
        // }

        // 获取我的鱼儿
        private getFishInfoResponse(s: com.message.S_GET_FISH_INFO):void
        {
			// HeroModel.instance.updateData(s.fishMsg as com.message.FishMsg[]);
            // HeroModel.instance.pendingMoney = HeroModel.instance.getPetPendingMoney();
            // this.dispatch(NotifyConst.S_GET_FINSH_INFO);
        }

        // 合并鱼儿
        public getCombineFish(id1:number, id2:number):void
        {
            var c: com.message.C_COMBINE_FISH = new com.message.C_COMBINE_FISH();
            c.fish1Id = id1;
            c.fish2Id = id2;
			this.sendCmd(c, MessageID.C_COMBINE_FISH, true);
        }

        // 合并鱼儿
        private getCombineResponse(s: com.message.S_COMBINE_FISH):void
        {
			HeroModel.instance.addPet(s.fishMsg as com.message.FishMsg);
			HeroModel.instance.removePet(Int64Util.getNumber(s.fish1Id));
			HeroModel.instance.removePet(Int64Util.getNumber(s.fish2Id));
            this.dispatch(NotifyConst.S_COMBINE_FINSH);
		}
		
		// 购买鱼儿
        public getBuyFish(configId:number):void
        {
            ////激活+实名状态,0未实名，1已激活，2已实名 
            if(HeroModel.instance.IdentityPro.state != 2){
                TipManagerCommon.getInstance().createCommonColorTip("对不起，您没有实名认证无法购买");
                return;
            }
            var c: com.message.C_BUY_FISH = new com.message.C_BUY_FISH();
            c.fishConfigId = configId;
			this.sendCmd(c, MessageID.C_BUY_FISH, true);
        }

        // 购买鱼儿
        private getBuyFishResponse(s: com.message.S_BUY_FISH):void
        {
            let cfg:PetCfg = ConfigManager.getConf(ConfigEnum.PET, s.fishMsg.fishId);
            TipManagerCommon.getInstance().createCommonTip("恭喜获得一条"+"<font color ='0xfff200'>"+cfg.name+"</font>", 0);
			HeroModel.instance.addPet(s.fishMsg as com.message.FishMsg);
            this.dispatch(NotifyConst.S_BUY_FISH);
        }

        // U购买鱼
        public getBuyFishByUSDT(configId:number):void
        {
            var c: com.message.C_DIAMOND_BUY_FISH = new com.message.C_DIAMOND_BUY_FISH();
            c.fishConfigId = configId;
			this.sendCmd(c, MessageID.C_DIAMOND_BUY_FISH, true);
        }
        
        // U购买鱼
        private getBuyFishByUSDTResponse(s: com.message.S_DIAMOND_BUY_FISH):void
        {
            TipManagerCommon.getInstance().createCommonColorTip("购买成功", true);
            HeroModel.instance.addPet(s.fishMsg as com.message.FishMsg);
            HeroModel.instance.setHadBuyFishes(s.buyFishStr);
            this.dispatch(NotifyConst.S_DIAMOND_BUY_FISH);
		}
		
		// 领取金币奖励
        public getMoneyCmd():void
        {
            var c: com.message.C_GET_MONEY_REWARD = new com.message.C_GET_MONEY_REWARD();
			this.sendCmd(c, MessageID.C_GET_MONEY_REWARD, true);
        }

        // 领取金币奖励
        private getMoneyResponse(s: com.message.S_GET_MONEY_REWARD):void
        {
            HeroModel.instance.totalMoney = Int64Util.getNumber(s.money);
            HeroModel.instance.pendingMoney = 0;
            this.dispatch(NotifyConst.S_GET_MONEY_REWARD);

            // this.getMyFishInfo();
		}

		// 领取金币奖励
        public getMoneyInfoCmd():void
        {
            var c: com.message.C_GET_MONEY_INFO = new com.message.C_GET_MONEY_INFO();
			this.sendCmd(c, MessageID.C_GET_MONEY_INFO, true);
        }

        // 领取金币奖励
        private getMoneyInfoResponse(s: com.message.S_GET_MONEY_INFO):void
        {
			HeroModel.instance.totalMoney = Int64Util.getNumber(s.money);
			HeroModel.instance.totalUSDT = Int64Util.getNumber(s.money);
            this.dispatch(NotifyConst.S_GET_MONEY_INFO);
        }
        
        // 获取金币日志信息
        public getMoneyLogCmd():void
        {
            var c: com.message.C_GET_MONEY_LOG_LIST = new com.message.C_GET_MONEY_LOG_LIST();
			this.sendCmd(c, MessageID.C_GET_MONEY_LOG_LIST, true);
        }

        // 获取金币日志信息
        private getMoneyLogResponse(s: com.message.S_GET_MONEY_LOG_LIST):void
        {
            HeroModel.instance.moneyLogs = s.moneyLogMsg as com.message.MoneyLogMsg[];
            this.dispatch(NotifyConst.S_GET_MONEY_LOG_LIST);
        }
        
        // 获取U日志信息
        public getUSDTLogCmd():void
        {
            var c: com.message.C_GET_DIAMOND_LOG_LIST = new com.message.C_GET_DIAMOND_LOG_LIST();
			this.sendCmd(c, MessageID.C_GET_DIAMOND_LOG_LIST, true);
        }

        // 获取U日志信息
        private getUSDTLogResponse(s: com.message.S_GET_DIAMOND_LOG_LIST):void
        {
            HeroModel.instance.usdtLogs = s.moneyLogMsg as com.message.MoneyLogMsg[];
            this.dispatch(NotifyConst.S_GET_DIAMOND_LOG_LIST);
		}
		
	}
}