module qmr {
    export class RechargeModel extends BaseModel {
        public constructor() {
            super();
            let t = this;

        }

        private static _instance: RechargeModel;
        public static get instance(): RechargeModel {
            return this._instance || (this._instance = new RechargeModel());
        }

        
        public rechargeAddress:string;//充值地址

    }
}