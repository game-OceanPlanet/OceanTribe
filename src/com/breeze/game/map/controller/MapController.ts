module qmr {
    /**
     * 场景对象管理器
     * */
    export class MapController extends BaseController {

        private static _instance: MapController;
        /**  获取单例对象  */
        public static get instance(): MapController {
            if (this._instance == null) { this._instance = new MapController(); }
            return this._instance;
        }

        constructor() {
            super();
            this.playerInfos = new Dictionary();
            this.playerUnits = new Dictionary();
        }

        private playerInfos: Dictionary;
        private playerUnits: Dictionary;
        protected initListeners(): void {
            let t = this;

        }

        public addDragon(): void {
            let t = this;
            let c: eui.Group = new eui.Group();
            SceneManager.instance.addToBottom(c);
            c.x = StageUtil.stageWidth / 2 - 200 + Math.ceil(300 * Math.random());
            c.y = StageUtil.stageHeight / 2 - 100 + Math.ceil(200 * Math.random());
            let armatureDisplay: dragonBones.EgretArmatureDisplay;

            let roleImg: eui.Image;

            //龙骨
            GameUtil.LoadDB(c, "long", (db: dragonBones.EgretArmatureDisplay, img: eui.Image) => {
                armatureDisplay = db;
                roleImg = img;
                if (roleImg) {
                    roleImg.x = 0;
                    roleImg.y = 0;
                }
            }, 0, 0);
        }

        public addPlayer(info: PetActorInfo): void {
            let t = this;
            t.playerInfos.set(info.id, info);


            let actor: PetActor = t.playerUnits.get(info.id);
            if (!actor) {
                actor = PetActor.getPetActor();
            }
            actor.update(info);
            SceneManager.instance.addObject(actor);
            t.addShowActorTween(actor);

            // setTimeout(function () {
            //     let b: FishBehavior = new FishBehavior(actor, "10001");
            //     b.onanimationButtons();
            // }, 1000);
        }

        public removePlayer(id: number): void {
            let t = this;
            let actor: PetActor = t.playerUnits.get(id);
            if (actor) {
                actor.dispos();
                PetActor.recovryPetActor(actor);
            }
            t.playerUnits.remove(id);
            t.playerInfos.remove(id);
            SceneManager.instance.removeBaseObjectById(id);
        }

        private addShowActorTween(actor: PetActor): void {
            egret.Tween.get(actor).to({ alpha: 1 }, 1000).wait(50)
                .call(() => {
                    egret.Tween.removeTweens(actor);
                });
        }

        public getPetPosition(id: number): egret.Point {
            var p: egret.Point = new egret.Point(500 * Math.random(), 1000 * Math.random());

            if (id > 7) {
                p.x = 0;
            }

            p.y = p.y < 300 ? 200 + Math.random() * 600 : p.y;

            if (id == 15) {
                p.x = 300;
                p.y = 400;
            }

            return p;
        }
    }
}
