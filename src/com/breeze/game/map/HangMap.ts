module qmr
{
    export class HangMap extends egret.DisplayObjectContainer
    {
        private bgNames: string[] = ["_hang_top.jpg", "_hang_middle.png", "_hang_down.png"];

        private _speed1: number = 0.3;
        private _speed2: number = 1.2;
        private _speed3: number = 2.2;

        private _imgToX1: number = 1000;
        private _imgToX2: number = 1000;
        private _imgToX3: number = 1000;

        private mover1: egret.DisplayObjectContainer;
        private mover2: egret.DisplayObjectContainer;
        private mover3: egret.DisplayObjectContainer;

        private moveRec1: egret.Rectangle;
        private moveRec2: egret.Rectangle;
        private moveRec3: egret.Rectangle;

        private mapPaths: string[];
        private moveStartx: number = 0;
        private bgBmpArr: egret.Bitmap[];

        // private __mapThumb:egret.Bitmap;
        private __lastMoveTime:number;
        constructor()
        {
            super();
            this.initBase();
        }

        private initBase()
        {
            let t = this;
            // t.__mapThumb = new egret.Bitmap();
            // t.addChild(t.__mapThumb);
            t.mapPaths = [];
            t.bgBmpArr = [new egret.Bitmap(), new egret.Bitmap(), new egret.Bitmap()];
            let w = StageUtil.stageWidth;
            let h = StageUtil.stageHeight;
            t.moveRec1 = new egret.Rectangle(0, 0, w, h);
            t.moveRec2 = new egret.Rectangle(0, 0, w, h);
            t.moveRec3 = new egret.Rectangle(0, 0, w, h);
            t.mover1 = new egret.DisplayObjectContainer();
            t.mover1.addChild(new egret.Bitmap());
            let bitmap: egret.Bitmap = new egret.Bitmap();
            //地图翻转拼接
            bitmap.scaleX = -1;
            t.mover1.addChild(bitmap);
            t.mover1.scrollRect = t.moveRec1;
            t.mover2 = new egret.DisplayObjectContainer();
            t.mover2.addChild(new egret.Bitmap());
            t.mover2.addChild(new egret.Bitmap());
            t.mover2.scrollRect = t.moveRec2;
            t.mover3 = new egret.DisplayObjectContainer();
            t.mover3.addChild(new egret.Bitmap());
            t.mover3.addChild(new egret.Bitmap());
            t.mover3.scrollRect = t.moveRec2;
            t.addChild(t.mover1);
            t.addChild(t.mover2);
            t.addChild(t.mover3);
            t.touchEnabled = t.touchChildren = false;
            t.addEventListener(egret.Event.ADDED_TO_STAGE, t.onAddToStage, t); 
        }

         /**
         * instanceId 副本id
         */
        public loadMap(chapterId: number)
        {
            let mapCfg: XinHangUpCfg = ConfigManager.getConf(ConfigEnum.XINHANGUP, chapterId);
            if (!mapCfg)
            {
                LogUtil.warn("挂机地图配置不存在:" + chapterId)
                return;
            }
            let mapResId = mapCfg.mapResId;

            let t = this;
            let fileName: string;
            var bgBmp: egret.Bitmap;
            let len = this.bgNames.length;
            let stageHeight = StageUtil.stageHeight;
            for (var i = 0; i < len; i++)
            {
                let key = i;
                let onTextureLoaded: Function = function (texture: egret.Texture, url: string)
                {
                    if (texture)
                    {
                        bgBmp = t.bgBmpArr[key];
                        if (bgBmp)
                        {
                            bgBmp.texture = texture;
                            let index = key + 1;
                            let mover: egret.DisplayObjectContainer = t["mover" + index];
                            let count = mover.numChildren;
                            let bmp: egret.Bitmap;
                            let tox: number = 0;
                            let textureWidth = texture.textureWidth;
                            for (var i = 0; i < count; i++)
                            {
                                bmp = mover.getChildAt(i) as egret.Bitmap;
                                if (bmp)
                                {
                                    if(bmp.scaleX < 0){
                                        bmp.x = tox + textureWidth;
                                    } else{
                                        bmp.x = tox;
                                    }
                                    bmp.texture = texture;
                                    tox += textureWidth;
                                }
                            }
                        }
                    }
                    t.reLayout();
                }
                fileName = mapResId + t.bgNames[i];
                var mapPath = ResPathUtilAft.getMapUrl(fileName);
                ResManager.getRes(mapPath, onTextureLoaded, t, LoadPriority.IMMEDIATELY, RES.ResourceItem.TYPE_IMAGE);
                t.mapPaths.push(mapPath);
            }

            t.addChild(t.mover1);
            t.addChild(t.mover2);
            t.addChild(t.mover3);
            t.__lastMoveTime = 0;
            t.setMoveX(0, 0, 0);
            t.startMove();
        }

        private reLayout()
        {
            let t = this;
            let offsetY:number = 80;

            var bgBmp: egret.Bitmap;
            var count = this.bgBmpArr.length;
            let mover: egret.DisplayObjectContainer;
            var result: egret.Bitmap;
            for (var k = 1; k <= count; k++)
            {
                mover = t["mover" + k];
                if (mover)
                {

                    mover.y = (k == 1) ? 0 : StageUtil.stageHeight - 120 - mover.height - 50;
                }
                result = t.bgBmpArr[k - 1];
                if (result)
                {
                    t["_imgToX" + k] = (k == 0) ? result.width - StageUtil.stageWidth : result.width * 2 - StageUtil.stageWidth;
                }
            }

            //地图高度有点不太够，特殊处理一下
            let h = StageUtil.stageHeight;
            if (h > 1400)
            {
                t.moveRec1.y = 0;
                t.mover2.y = StageUtil.stageHeight - 120 - t.mover2.height - 70 - offsetY;
            }
            else
            {
                t.moveRec1.y = 250;
                t.mover2.y = StageUtil.stageHeight - 120 - t.mover2.height - 50 - offsetY;
            }
        }

        /**初始化*/
        private onAddToStage(event: egret.Event)
        {
            this.reLayout();
            NotifyManager.registerNotify(StageUtil.STAGE_RESIZE, this.onStageResize, this);
        }

        public onStageResize(evt?: egret.Event): void
        {
            let t = this;
            let w = StageUtil.stageWidth;
            let h = StageUtil.stageHeight;
            t.moveRec1.width = t.moveRec2.width = t.moveRec3.width = w;
            t.moveRec1.height = t.moveRec2.height = t.moveRec3.height = h;
            t.reLayout();
        }

        /**开始滚动*/
        private startMove(): void
        {
            this.removeEventListener(egret.Event.ENTER_FRAME, this.enterFrameHandler, this);
            this.addEventListener(egret.Event.ENTER_FRAME, this.enterFrameHandler, this);
        }

        /**逐帧运动*/
        private enterFrameHandler(event: egret.Event): void
        {
            let t = this;
            let curr = egret.getTimer();
            if(curr - t.__lastMoveTime < 30)
            {
                return;
            }
            t.__lastMoveTime = curr;
            var x1 = t.moveRec1.x + t._speed1;
            var x2 = t.moveRec2.x + t._speed2;
            var x3 = t.moveRec3.x + t._speed3;
            t.setMoveX(x1, x2, x3);
        }

        private setMoveX(x1: number, x2: number, x3: number)
        {
            let t = this;
            t.moveRec1.x = x1;
            t.moveRec2.x = x2;
            t.moveRec3.x = x3;
            //判断超出屏幕后，回到队首，这样来实现循环反复，虽然最上面美术没做循环，但是我们做了翻转拼接
            if (t.moveRec1.x < t._imgToX1)
            {
                t.mover1.scrollRect = t.moveRec1;
            } else 
            {
                let result1 = t.bgBmpArr[1];
                if (result1)
                {
                    t.moveRec1.x = 0;
                    t.mover1.scrollRect = t.moveRec1;
                }
            }
            //判断超出屏幕后，回到队首，这样来实现循环反复
            if (t.moveRec2.x < t._imgToX2)
            {
                t.mover2.scrollRect = t.moveRec2;
            }
            else
            {
                let result2 = t.bgBmpArr[1];
                if (result2)
                {
                    t.moveRec2.x = t.moveRec2.x - result2.width;
                    if (t.moveRec2.x < 0) t.moveRec2.x = 0;
                    t.mover2.scrollRect = t.moveRec2;
                }
            }

            if (t.moveRec3.x < t._imgToX3)
            {
                t.mover3.scrollRect = t.moveRec3;
            }
            else
            {
                let result3 = t.bgBmpArr[2];
                if (result3)
                {
                    t.moveRec3.x = t.moveRec3.x - result3.width;
                    if (t.moveRec3.x < 0) t.moveRec3.x = 0;
                    t.mover3.scrollRect = t.moveRec3;
                }
            }
        }

        /**暂停滚动*/
        private pause(): void
        {
            this.removeEventListener(egret.Event.ENTER_FRAME, this.enterFrameHandler, this);
        }

        public dispose(): void
        {
            this.pause();
            // this.mapPaths.forEach(element =>
            // {
            //     LoaderManager.instance.destoryGroup(element);
            // });
            this.mapPaths.length = 0;
            DisplayUtils.removeDisplay(this);
            // HangMap.recovryMap(this);
        }
    }
}