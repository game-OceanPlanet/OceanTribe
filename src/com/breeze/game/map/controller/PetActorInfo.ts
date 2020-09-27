module qmr {
	export class PetActorInfo {
        public id:number; // 鱼的唯一ID
        public level:number; //等级
        public fishId:number; //鱼配置ID
        public state:number; //状态，0生产中，1停产中,2已过期
        private _allMoney:number; //总共可以产出金币，读表
        private _extMoney:number; //鱼生累计已经产出金币,包括遗漏的  ExtMoney=鱼生累计已经产出金币
        private _leftMoney:number; //鱼生累计遗漏未领取金币
        private _todayGotMoney:number; //今日已经领取金币
        private _todayCurMoney:number; //今日当前可领取金币
        public allDay:number;//生命周期，读表
        //（配置总产量 - 鱼生累计已经产出金币）/ 配置天数

        public posX:number;
        public posY:number;

        private _cfg:PetCfg;

		public constructor() {
        }
        
        public setData(pro:com.message.FishMsg):void
        {
            let t = this;
            t.id = Int64Util.getNumber(pro.id);
            t.level = pro.level;
            t.fishId = Int64Util.getNumber(pro.fishId);
            t.state = pro.state;
            t._allMoney = Int64Util.getNumber(pro.allMoney);
            t._extMoney = Int64Util.getNumber(pro.extMoney);
            t._leftMoney = Int64Util.getNumber(pro.leftMoney);
            t._todayGotMoney = Int64Util.getNumber(pro.todayGotMoney);
            t._todayCurMoney = Int64Util.getNumber(pro.todayCurMoney);

            t.allDay = pro.allDay;
        }

        public get allMoney():number
        {
            return this._allMoney/HeroModel.TIMES;
        }
        public get extMoney():number
        {
            return this._extMoney/HeroModel.TIMES;
        }
        public get leftMoney():number
        {
            return this._leftMoney/HeroModel.TIMES;
        }
        public get todayGotMoney():number
        {
            return this._todayGotMoney/HeroModel.TIMES;
        }
        public get todayCurMoney():number
        {
            return this._todayCurMoney/HeroModel.TIMES;
        }

        public get config():PetCfg
        {
            let t = this;
            if(!t._cfg && t.fishId && t.fishId > 0){
                t._cfg = ConfigManager.getConf(ConfigEnum.PET, t.fishId);
            }
            return t._cfg;
        }

        public get modelId():number
        {
            let t = this;
            let cfg:PetCfg = t.config;
            if(cfg){
                return parseInt(cfg.resId);
            }
            return 0;
        }

	}
}