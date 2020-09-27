module qmr {
    export class HeroActor extends BaseMoverActor {
        protected resPath: string;

        public constructor() {
            super();
        }

        public update(): void {
            let t = this;
            t.initBaseActor();
            t.updateBaseActor();
            t.updatePos();

            t.layout();
        }

        /** 初始化卡牌特效 */
        private initBaseActor() {
            let t = this;
            t.resPath = SystemPath.rolePath;//方便怪物共用角色模型，放在一个路径下了
            let state = Status.IDLE;
            t.baseActor = new qmr.BaseActor(t.resPath, t.onBodyLoad, t, state);
            t.baseActor.touchChildren = false;
            t.addChild(t.baseActor);
        }

        /**  裸体加载完毕 */
        protected onBodyLoad(): void {
        }

        /** 更新形象 */
        protected updateBaseActor() {
            let t = this;
            t.removeActor();
            if (t.modelId > 0) {
                t.addPartAt(ActorPart.BODY, t.modelId);
            }
        }

        /** 放到指定位置 */
        public updatePos() {
            let t = this;
            
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
    }
}