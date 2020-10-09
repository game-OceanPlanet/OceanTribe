module qmr
{
	export class DividendController extends BaseController 
	{
		public constructor()
		{
			super();
		}

		private static _instance: DividendController;
		public static get instance(): DividendController
		{
			return this._instance || (this._instance = new DividendController());
		}

		protected initListeners(): void
		{
            this.addSocketListener(MessageID.S_GET_MONEY_EXCHANGE_INFO, this.getExchangeResponse, this, false);
            this.addSocketListener(MessageID.S_MONEY_EXCHANGE_KAD, this.getExchangeKADResponse, this, false);
            this.addSocketListener(MessageID.S_GET_BONUS_INFO, this.getDividendResponse, this, false);
            this.addSocketListener(MessageID.S_INJECT_KAD, this.getInjectResponse, this, false);
            this.addSocketListener(MessageID.S_GET_INJECT_INFO, this.getInjectInfoResponse, this, false);
            this.addSocketListener(MessageID.S_REAL_NAME_VERIFICATION, this.getIdentifyVerificationResponse, this, false);
		}

        //获取兑换信息
		public requestExchangeCMD(): void
		{
			var c: com.message.C_GET_MONEY_EXCHANGE_INFO = new com.message.C_GET_MONEY_EXCHANGE_INFO();
			this.sendCmd(c, MessageID.C_GET_MONEY_EXCHANGE_INFO, true);
        }
        
        // 获取兑换信息
        private getExchangeResponse(s: com.message.S_GET_MONEY_EXCHANGE_INFO):void
        {
            DividendModel.instance.sysAllKAD = Int64Util.getNumber(s.moneyExchangeMsg.sysAllKAD);
            DividendModel.instance.exAllKAD = Int64Util.getNumber(s.moneyExchangeMsg.exAllKAD);
            DividendModel.instance.exRatio = Int64Util.getNumber(s.moneyExchangeMsg.exRatio);
            DividendModel.instance.exchangeLogs = s.playerExcInfoMsg as com.message.PlayerExcInfoMsg[];

            this.dispatch(NotifyConst.S_GET_MONEY_EXCHANGE_INFO);
        }

        //金币兑换平台币KAD
		public requestExchangeKADCMD(count:number): void
		{
            var c: com.message.C_MONEY_EXCHANGE_KAD = new com.message.C_MONEY_EXCHANGE_KAD();
            c.moneyCount = count;
			this.sendCmd(c, MessageID.C_MONEY_EXCHANGE_KAD, true);
        }
        
        // 金币兑换平台币KAD
        private getExchangeKADResponse(s: com.message.S_MONEY_EXCHANGE_KAD):void
        {
            DividendModel.instance.addExchangeLog(s.playerExcInfoMsg as com.message.PlayerExcInfoMsg);
            this.dispatch(NotifyConst.S_MONEY_EXCHANGE_KAD);
        }

        //获取分红信息
		public requestDividendCMD(): void
		{
			var c: com.message.C_GET_BONUS_INFO = new com.message.C_GET_BONUS_INFO();
			this.sendCmd(c, MessageID.C_GET_BONUS_INFO, true);
        }
        
        // 获取分红信息
        private getDividendResponse(s: com.message.S_GET_BONUS_INFO):void
        {
            DividendModel.instance.sysAllBonus = s.sysBonusMsg.sysAllBonus;
            DividendModel.instance.todayAllBonus = s.sysBonusMsg.todayAllBonus;
            DividendModel.instance.bonusRatio = s.sysBonusMsg.bonusRatio;
            DividendModel.instance.dividenLogs = s.personBonusMsg as com.message.PersonBonusMsg[];
            this.dispatch(NotifyConst.S_GET_BONUS_INFO);
        }

        //获取注入信息
		public requestInjectInfoCMD(): void
		{
			var c: com.message.C_GET_INJECT_INFO = new com.message.C_GET_INJECT_INFO();
			this.sendCmd(c, MessageID.C_GET_INJECT_INFO, true);
        }
        
        // 获取注入信息
        private getInjectInfoResponse(s: com.message.S_GET_INJECT_INFO):void
        {
            DividendModel.instance.allInject = s.allInject;
            DividendModel.instance.injectLogs = s.personInjectMsg as com.message.PersonInjectMsg[];
            this.dispatch(NotifyConst.S_GET_INJECT_INFO);
        }

        //注入
		public requestInjectCMD(count:number, step:number): void
		{
            var c: com.message.C_INJECT_KAD = new com.message.C_INJECT_KAD();
            c.KADCount = count;
            c.cycleId = step;
			this.sendCmd(c, MessageID.C_INJECT_KAD, true);
        }
        
        // 注入
        private getInjectResponse(s: com.message.S_INJECT_KAD):void
        {
            DividendModel.instance.allInject = s.allInject;
            DividendModel.instance.addInjectLog(s.personInjectMsg as com.message.PersonInjectMsg);
            this.dispatch(NotifyConst.S_INJECT_KAD);
        }

        //实名验证
		public requestIdVerifCMD(tel:string, name:string, id:string): void
		{
            var c: com.message.C_REAL_NAME_VERIFICATION = new com.message.C_REAL_NAME_VERIFICATION();
            c.mobile = tel;
            c.name = name;
            c.idNum = id;
			this.sendCmd(c, MessageID.C_REAL_NAME_VERIFICATION, true);
        }

        //实名验证
        private getIdentifyVerificationResponse(s: com.message.S_REAL_NAME_VERIFICATION):void
        {
            let res:string = s.result;
            let des:string = s.remark;
            HeroModel.instance.IdentityPro = s.basePlayerMsg as com.message.BasePlayerMsg;
            this.dispatch(NotifyConst.S_REAL_NAME_VERIFICATION);

            TipManagerCommon.getInstance().showLanTip("CN_454");
        }

    }
}