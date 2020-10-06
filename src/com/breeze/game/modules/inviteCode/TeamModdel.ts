module qmr {
    export class TeamModdel extends BaseModel {

        public constructor() {
            super();
            let t = this;

        }

        private static _instance: TeamModdel;
        public static get instance(): TeamModdel {
            return this._instance || (this._instance = new TeamModdel());
        }

        public static PAGE_SIZE:number = 100;

        public myTeam:com.message.MyTeamMsg;//团队信息
        public teamers:com.message.DirectInfoMsg[];//获取我的直推成员信息

        public addTeamers(page:number, pros:com.message.DirectInfoMsg[]):void
        {
            let t = this;
            if(!t.teamers){
                t.teamers = [];
            }

            let len:number = t.teamers.length;
            let pages:number = Math.ceil(len / TeamModdel.PAGE_SIZE);
            if(pages >= page){
                let startInex:number = (page - 1) * TeamModdel.PAGE_SIZE;
                len = pros.length;
                for(var i:number = 0; i < len; i ++){
                    t.teamers[startInex + i] = pros[i];
                }
            } else {
                t.teamers = t.teamers.concat(pros);
            }
        }

        public getCurrentPageIndex():number
        {
            let t = this;
            if(!t.teamers){
                t.teamers = [];
            }

            let len:number = t.teamers.length;
            let pages:number = Math.ceil(len / TeamModdel.PAGE_SIZE);
            return pages;
        }

        private tradeCostCfgs:TradeCostCfg[];
        public getTradeConstIdByCount(count:number):TradeCostCfg
        {
            let t = this;
            if(!t.tradeCostCfgs){
                let cfgs:TradeCostCfg[] = ConfigManager.getBean(ConfigEnum.TRADECOST).values;
                t.tradeCostCfgs = cfgs;
            }
            let len:number = t.tradeCostCfgs.length;
            for(var i:number = len - 1; i >= 0; i --){
                if(count >= t.tradeCostCfgs[i].count){
                    return t.tradeCostCfgs[i];
                }
            }
            return null;
        }

        private teamRateCfgs:TeamRateCfg[];
        public getteamRateCfgsIdByCount(count:number, all:number):TeamRateCfg
        {
            let t = this;
            if(!t.teamRateCfgs){
                let cfgs:TeamRateCfg[] = ConfigManager.getBean(ConfigEnum.TEAMRATE).values;
                t.teamRateCfgs = cfgs;
            }
            let len:number = t.teamRateCfgs.length;
            for(var i:number = len - 1; i >= 0; i --){
                if(all >= t.teamRateCfgs[i].allCount && count >= t.teamRateCfgs[i].directCount){
                    return t.teamRateCfgs[i];
                }
            }
            return null;
        }

        private directRateCfgs:DirectRateCfg[];
        public getdirectRateCfgsIdByCount(count:number):DirectRateCfg
        {
            let t = this;
            if(!t.directRateCfgs){
                let cfgs:DirectRateCfg[] = ConfigManager.getBean(ConfigEnum.DIRECTRATE).values;
                t.directRateCfgs = cfgs;
            }
            let len:number = t.directRateCfgs.length;
            for(var i:number = len - 1; i >= 0; i --){
                if(count >= t.directRateCfgs[i].count){
                    return t.directRateCfgs[i];
                }
            }
            return null;
        }


        public keyLogs:com.message.KeyLogMsg[];//激活秘钥日志信息

    }
}