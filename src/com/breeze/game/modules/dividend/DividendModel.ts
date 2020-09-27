module qmr {
    export class DividendModel extends BaseModel {
        public sysAllKAD:number = 0;  //平台KAD通证总量
        public exAllKAD:number = 0;  	//已经兑换总量
        public exRatio:number = 0; 		//当前兑换比例
        public exchangeLogs:com.message.PlayerExcInfoMsg[];//玩家兑换记录信息

        public sysAllBonus:number = 0;//分红池总量
        public todayAllBonus:number = 0;//今日分红池总量
        public bonusRatio:number = 0;	//今日分红比例，默认10%
        public dividenLogs:com.message.PersonBonusMsg[];//个人分红记录信息

        public allInject:number = 0;//全体加权注入总量
        public injectLogs:com.message.PersonInjectMsg[];//个人注入记录信息

        public constructor() {
            super();
            let t = this;

        }

        private static _instance: DividendModel;
        public static get instance(): DividendModel {
            return this._instance || (this._instance = new DividendModel());
        }

        public addInjectLog(pro:com.message.PersonInjectMsg):void
        {
            let t = this;
            if(!t.injectLogs){
                t.injectLogs = [];
            }
            t.injectLogs.push(pro);
        }

        public addExchangeLog(pro:com.message.PlayerExcInfoMsg):void
        {
            let t = this;
            if(!t.exchangeLogs){
                t.exchangeLogs = [];
            }
            t.exchangeLogs.push(pro);
        }
        
    }
}