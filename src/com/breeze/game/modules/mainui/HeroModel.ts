module qmr {
    export class HeroModel extends BaseModel {
        public static KH:string = " KH";     //金币
        public static USDT:string = " USDT"; //U币，相当于RMB
        public static KAD:string = " KAD";   //平台币，也就是证通
        public static TIMES:number = 1;

        public uid:number;
        public IdentityPro:com.message.BasePlayerMsg;
        public playerPro:com.message.PlayerPropertyMsg;

        private fishInfos:PetActorInfo[];
        private fishIds:number[];

        public pendingMoney:number = 0;//待领取的金币
        public totalMoney:number = 0;//总共持有金币的数量
        public totalUSDT:number = 0;//当前玩家USDT的数量
        public totalKAD:number = 0;//当前玩家KAD的数量
        public keyCount:number = 0;//剩余激活秘钥数量

        public dolphinBuyCount:number = 0; //海豚的购买名额数量
        public dolphinSpeedCount:number = 0; //海豚的加速积分数量
	    public dolphinMoney:number = 0; //海豚金币


        public moneyLogs:com.message.MoneyLogMsg[];//获取金币日志信息
        public usdtLogs:com.message.MoneyLogMsg[];//获取U日志信息

        public selectedMergePetId1:number;//选择可以合成的宠物id1
        public selectedMergePetId2:number;//选择可以合成的宠物id2

        private buyFishStr:string;//用u购买鱼的累计数量：id1,数量;id2,数量
        private hadBuyFishIds:Dictionary;
        public constructor() {
            super();
            let t = this;
            this.fishInfos = [];
            this.fishIds = [];
        }

        private static _instance: HeroModel;
        public static get instance(): HeroModel {
            return this._instance || (this._instance = new HeroModel());
        }

        public get playerId():number
        {
            if(this.playerPro){
                return Int64Util.getNumber(this.playerPro.playerId);
            }
            return 0;
        }

        public setHadBuyFishes(fishes:string):void
        {
            let t = this;
            t.buyFishStr = fishes;
            if(!t.hadBuyFishIds){
                t.hadBuyFishIds = new Dictionary();
            }

            if(fishes){
                let ss:string[] = fishes.split(";");
                let len:number = ss.length;
                if(len > 0){
                    for(var i:number = 0; i < len; i ++){
                        let s = ss[i];
                        if(s){
                            let ids:string[] = s.split(",");
                            t.hadBuyFishIds[ids[0]] = ids[1];
                        }
                    }
                }
            }

        }
        public getHadBuyFishes():Dictionary
        {
            return this.hadBuyFishIds;
        }

        public getBuyCount(id:number):number
        {
            let t = this;
            if(!t.hadBuyFishIds){
                return 0;
            }
            let count:number = t.hadBuyFishIds.get(id);
            if(!count){
                return 0;
            }
            return count;
        }

        public testMerge():void
        {
            let t = this;
            let len:number = t.fishInfos.length;
            let p1:PetActorInfo;
            let p2:PetActorInfo;
            for(var i:number = 0; i < len - 1; i ++){
                p1 = t.fishInfos[i];
                for(var j:number = i + 1; j < len; j ++){
                    p2 = t.fishInfos[j];
                    if(p1.fishId == p2.fishId){
                        if(p1 && p2){
                            PetController.instance.getCombineFish(p1.id, p2.id);
                        }
                        return;
                    }
                }
            }
        }

        public addTestPet():void
        {
            let info:PetActorInfo = new PetActorInfo();
            let len:number = 5;
            for(var i:number = 0; i < len; i ++){
                info = new PetActorInfo();
                info.id = i + 1000;
                
            }
        }

        public getPets():PetActorInfo[]
        {
            return this.fishInfos;
        }

        public updateData(pros:com.message.FishMsg[]):void
        {
            let t = this;
            if(!pros){
                return;
            }
            let addIds:number[] = [];
            let removeIds:number[] = [];
            let newIds:number[] = [];

            let pro:com.message.FishMsg;
            let len:number = pros.length;
            let id:number;
            for(var i:number = 0; i < len; i ++){
                pro = pros[i];
                id = Int64Util.getNumber(pro.id);
                if(t.fishIds.indexOf(id) == -1){
                    addIds.push(id);
                }
                newIds.push(id);
            }

            len = t.fishIds.length;
            for(var j:number = 0; j < len; j ++){
                id = t.fishIds[j];
                if(newIds.indexOf(id) == -1){
                    removeIds.push(id);
                }
            }

            len = pros.length;
            if(len > 0){
                for(var i:number = 0; i <len; i++){
                    pro = pros[i];
                    t.addPet(pro);
                }
            }
            len = removeIds.length;
            if(len > 0){
                for(var i:number = 0; i < len; i ++){
                    t.removePet(removeIds[i]);
                }
            }
        }

        public getPet(id:number):PetActorInfo
        {
            let t = this;
            let info:PetActorInfo;
            for(var i:number = 0; i < t.fishInfos.length; i ++){
                if(id == t.fishInfos[i].id){
                    info = t.fishInfos[i];
                    return info;
                }
            }
            return null;
        }

        public addPet(pro:com.message.FishMsg):void
        {
            let t = this;
            if(!pro){
                return;
            }
            let isAdd:boolean = false;
            let id:number = Int64Util.getNumber(pro.id);
            let info:PetActorInfo;
            for(var i:number = 0; i < t.fishInfos.length; i ++){
                if(id == t.fishInfos[i].id){
                    info = t.fishInfos[i];
                    break;
                }
            }
            if(!info){
                info = new PetActorInfo();
                t.fishInfos.push(info);
                isAdd = true;
            }
            info.setData(pro);

            if(-1 == t.fishIds.indexOf(id)){
                t.fishIds.push(id);
            }
            
            if(isAdd){
                MapController.instance.addPlayer(info);
            }
        }

        public removePet(id:number):void
        {
            let t = this;
            let index:number = t.fishIds.indexOf(id);
            if(-1 != index){
                t.fishIds.splice(index, 1);
            }
            let info:PetActorInfo;
            let removeIndex:number = -1;
            for(var i:number = 0; i < t.fishInfos.length; i ++){
                if(id == t.fishInfos[i].id){
                    info = t.fishInfos[i];
                    removeIndex = i;
                    break;
                }
            }

            if(info){
                MapController.instance.removePlayer(id);
                t.fishInfos.splice(removeIndex, 1);
            }
        }


        /**
         * 获取每秒产生金币的数量
         */
        public getProduceMoneySpeed():number
        {
            let t = this;
            if(!t.fishInfos || t.fishInfos.length == 0){
                return 0;
            }

            let total:number = 0;
            let len:number = t.fishInfos.length;
            let cfg:PetCfg;
            let id:number;
            let pro:PetActorInfo;
            for(var i:number = 0; i < len; i ++){
                pro  = t.fishInfos[i];
                id = Int64Util.getNumber(pro.fishId);
                cfg = ConfigManager.getConf(ConfigEnum.PET, id);
                let dayNum:number = cfg.produce / cfg.limitTime;
                let hadProduce:number = Math.ceil(pro.todayCurMoney + pro.todayGotMoney);//今日总共产生的金币 = 今日已领取 + 今日当前可领取
                if(pro.state == 0 && hadProduce < dayNum){
                    total += dayNum / 7200;
                }
            }
            return total;
        }

        /**
         * 每天总共可以产出多少金币
         */
        public getEveryDayProduceMoney():number
        {
            let t = this;
            if(!t.fishInfos || t.fishInfos.length == 0){
                return 0;
            }

            let total:number = 0;
            let len:number = t.fishInfos.length;
            let cfg:PetCfg;
            let id:number;
            let pro:PetActorInfo;
            for(var i:number = 0; i < len; i ++){
                pro  = t.fishInfos[i];
                id = Int64Util.getNumber(pro.fishId);
                if(pro.state == 0){
                    cfg = ConfigManager.getConf(ConfigEnum.PET, id);
                    let dayNum:number = cfg.produce / cfg.limitTime;
                    total += dayNum;
                }
            }
            return total;
        }

        /**
         * 今日产出可以领取的金币总数量
         */
        public getPetPendingMoney():number
        {
            let t = this;
            if(!t.fishInfos || t.fishInfos.length == 0){
                return 0;
            }
            let len:number = t.fishInfos.length;
            let pro:PetActorInfo;
            let total:number = 0;
            for(var i:number = 0; i < len; i ++){
                pro  = t.fishInfos[i];
                let pendingMoney:number = Int64Util.getNumber(pro.todayCurMoney);//今日产出的待领取的金币数量
                let gainedMoney:number = Int64Util.getNumber(pro.extMoney);//宠物总共产出的金币数量，pro.todayMoney领完之后直接加在pro.extMoney上
                total += pendingMoney;
            }
            
            return total;
        }
    }
}