module qmr {
    export class PetActor extends BaseMoverActor {
        protected resPath: string;
        private petInfo:PetActorInfo;

        public constructor() {
            super();
        }

        public static getPetActor(): PetActor
		{
			var actor: PetActor = Pool.getItemByClass("PetActor", PetActor);
			return actor;
		}

		public static recovryPetActor(actor: PetActor): void
		{
			Pool.recover("PetActor", actor);
        }
        
        public update(info:PetActorInfo): void {
            let t = this;
            t.petInfo = info;
            t.id = info.id;
            t.modelId = info.modelId;
            t.initBaseActor();
            t.updateBaseActor();
            t.updatePos();

            t.layout();
        }

        /** 初始化角色模型 */
        private initBaseActor() {
            let t = this;
            if(!t.baseActor){
                t.resPath = SystemPath.rolePath;//方便怪物共用角色模型，放在一个路径下了
                let action = Number(t.petInfo.modelId) == 115 ? Status.IDLE : Status.MOVE;
                t.baseActor = new qmr.BaseActor(t.resPath, t.onBodyLoad, t, action);
                t.baseActor.touchChildren = false;
                t.addChild(t.baseActor);
            }
        }

        /**  裸体加载完毕 */
        protected onBodyLoad(): void {
        }

        /** 更新形象 */
        protected updateBaseActor() {
            let t = this;
            t.removeActor();
            if (t.petInfo && t.petInfo.modelId > 0) {
                let modelId:number = t.petInfo.modelId;
                t.addPartAt(ActorPart.BODY, modelId);
            }
        }

        /** 放到指定位置 */
        public updatePos() {
            let t = this;
            if(t.petInfo){
                let p:egret.Point = MapController.instance.getPetPosition(t.petInfo.fishId);
                t.x = p.x;
                t.y = p.y;
            }
        }

        /** 重新布局 */
        private layout() {
            // this.baseActor.x = this._w >> 1;
            // this.baseActor.y = this._h - 10;
        }

        private removeActor() {
            if (this.baseActor) {
                this.baseActor.dispos(false);
            }
        }

        public dispos():void
        {
            super.dispos();

        }
    }
}