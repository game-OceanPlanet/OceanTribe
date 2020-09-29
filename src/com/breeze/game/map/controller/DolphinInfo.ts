module qmr {
    export class DolphinInfo {
        public id: number;// 海豚的唯一ID
        public state: number;//状态，0排队等待中，1产蛋中,2飞升中，3待孵化，4孵化中，5成为动物待受孕，6受孕中，7挂卖中，8售卖成功结束
        public endTime: number;//当前状态结束时间
        public createTime: number; //获得时间

        public constructor() {
        }

        public setData(pro: com.message.DolphinMsg): void {
            let t = this;
            t.id = Int64Util.getNumber(pro.id);
            t.endTime = Int64Util.getNumber(pro.endTime);
            t.createTime = Int64Util.getNumber(pro.createTime);
            t.state = pro.state;
        }

        public get modelId(): number {
            let t = this;
            if (!t.id) {
                return 0;
            }

            let res: number;
            //状态，0排队等待中，1产蛋中,2飞升中，3待孵化，4孵化中，5成为动物待受孕，6受孕中，7挂卖中，8售卖成功结束
            switch (t.state) {
                case PetStateEnum.STATE_0:
                    res = 0;
                    break;
                case PetStateEnum.STATE_1:
                    res = 1001;
                    break;
                case PetStateEnum.STATE_2:
                    res = 1001;
                    break;
                case PetStateEnum.STATE_3:
                    res = 1002;
                    break;
                case PetStateEnum.STATE_4:
                    res = 1002;
                    break;
                case PetStateEnum.STATE_5:
                    res = 1003;
                    break;
                case PetStateEnum.STATE_6:
                    res = 1003;
                    break;
                case PetStateEnum.STATE_7:
                    res = 1003;
                    break;
                case PetStateEnum.STATE_8:
                    res = 0;
                    break;
            }
            return res;
        }
    }

    export class PetStateEnum {
        /**0排队等待中*/
        static STATE_0: number = 0;
        /**1产蛋中*/
        static STATE_1: number = 1;
        /**2飞升中*/
        static STATE_2: number = 2;
        /**3待孵化*/
        static STATE_3: number = 3;
        /**4孵化中*/
        static STATE_4: number = 4;
        /**5成为动物待受孕*/
        static STATE_5: number = 5;
        /**6受孕中*/
        static STATE_6: number = 6;
        /**7挂卖中*/
        static STATE_7: number = 7;
        /**8售卖成功结束*/
        static STATE_8: number = 8;
    }
}