module qmr {
    export class HeroModel extends BaseModel {
        public static KH:string = " KH";     //金币
        public static USDT:string = " USDT"; //U币，相当于RMB
        public static KAD:string = " KAD";   //平台币，也就是证通
        public static TIMES:number = 1;

        public uid:number;
        public IdentityPro:com.message.BasePlayerMsg;
        public playerPro:com.message.PlayerPropertyMsg;

        public totalMoney:number = 0;//总共持有金币的数量
        public totalUSDT:number = 0;//当前玩家USDT的数量
        public totalKAD:number = 0;//当前玩家KAD的数量
        public keyCount:number = 0;//剩余激活秘钥数量

        public dolphinBuyCount:number = 0; //海豚的购买名额数量
        public dolphinSpeedCount:number = 0; //海豚的加速积分数量
	    public dolphinMoney:number = 0; //海豚金币
        public dolphinPros:com.message.DolphinMsg[];//获取我的海豚信息
        public dolpMoneyLogs:com.message.DolphinMoneyLogMsg[];//获取海豚金币日志信息
        public dolpBuyLogs:com.message.DolphinBuyCountLogMsg[];//获取海豚购买名额日志信息
        public dolpScoreLogs:com.message.DolphinSpeedCountLogMsg[];//获取海豚加速积分日志信息
        public signInMoney:number = 0;//累计可领取海豚金币
        public signInLastTime:number = 0;//最后一次领取时间（大于等于8小时才能领取一次）
        public waitList:com.message.DolphinWaitMsg[];//获取海豚排队等待列表

        private dolpInfos:DolphinInfo[];
        private dolpIds:number[];

        public constructor() {
            super();
            let t = this;
            t.dolpInfos = [];
            t.dolpIds = [];
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

        public addTestPet():void
        {
            let info:DolphinInfo;
            let len:number = 5;
            for(var i:number = 0; i < len; i ++){
                info = new DolphinInfo();
                info.id = i + 1000;
                info.state = 3;

                MapController.instance.addPlayer(info);
            }
        }

        public getDolpInfos():DolphinInfo[]{
            return this.dolpInfos;
        }

        /**
         * 获取正在排队的海豚的数量
         */
        public getQueueCount():number
        {
            let t = this;
            let count:number = 0;
            let len:number = t.dolpInfos.length;
            for(var i:number = 0; i < len; i ++){
                if(t.dolpInfos[i].state == PetStateEnum.STATE_0){
                    count ++;
                }
            }
            return count;
        }

        public updateData(pros:com.message.DolphinMsg[]):void
        {
            let t = this;
            if(!pros){
                return;
            }
            let addIds:number[] = [];
            let removeIds:number[] = [];
            let newIds:number[] = [];

            let pro:com.message.DolphinMsg;
            let len:number = pros.length;
            let id:number;
            for(var i:number = 0; i < len; i ++){
                pro = pros[i];
                id = Int64Util.getNumber(pro.id);
                if(t.dolpIds.indexOf(id) == -1){
                    addIds.push(id);
                }
                newIds.push(id);
            }

            len = t.dolpIds.length;
            for(var j:number = 0; j < len; j ++){
                id = t.dolpIds[j];
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

        public getPet(id:number):DolphinInfo
        {
            let t = this;
            let info:DolphinInfo;
            for(var i:number = 0; i < t.dolpInfos.length; i ++){
                if(id == t.dolpInfos[i].id){
                    info = t.dolpInfos[i];
                    return info;
                }
            }
            return null;
        }

        public addPet(pro:com.message.DolphinMsg):void
        {
            let t = this;
            if(!pro){
                return;
            }
            let isAdd:boolean = false;
            let id:number = Int64Util.getNumber(pro.id);
            let info:DolphinInfo;
            for(var i:number = 0; i < t.dolpInfos.length; i ++){
                if(id == t.dolpInfos[i].id){
                    info = t.dolpInfos[i];
                    break;
                }
            }
            if(!info){
                info = new DolphinInfo();
                t.dolpInfos.push(info);
                isAdd = true;
            }
            info.setData(pro);

            if(-1 == t.dolpIds.indexOf(id)){
                t.dolpIds.push(id);
            }
            
            if(isAdd && info.modelId > 0){
                MapController.instance.addPlayer(info);
            }
        }

        public removePet(id:number):void
        {
            let t = this;
            let index:number = t.dolpIds.indexOf(id);
            if(-1 != index){
                t.dolpIds.splice(index, 1);
            }
            let info:DolphinInfo;
            let removeIndex:number = -1;
            for(var i:number = 0; i < t.dolpInfos.length; i ++){
                if(id == t.dolpInfos[i].id){
                    info = t.dolpInfos[i];
                    removeIndex = i;
                    break;
                }
            }

            if(info){
                MapController.instance.removePlayer(id);
                t.dolpInfos.splice(removeIndex, 1);
            }
        }

    }
}