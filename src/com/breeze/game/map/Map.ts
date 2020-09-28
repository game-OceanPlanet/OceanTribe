module qmr
{
    export class Map extends egret.DisplayObjectContainer
    {
        // 0：战斗背景，1：主界面背景
        private bgType: number = 0;

        /** 战斗背景一张背景头，一张循环背景背景循环几次都可以 */
        private bgHeights: number[] = [1600, 1280];//图片高度
        private bgRetimes: number[] = [1, 2];//循环次数
        private bgNames: string[] = ["bg1_jpg", "bg2_jpg"];
        private bgBmpArr: egret.Bitmap[];
        private bgLabelEvents: number[];//触发刷怪事件点

        /**控制滚动速度*/
        private _speed: number = 5;
        private _currSpeed:number = 5;
        /** 移动对象 */
        private mover: egret.DisplayObjectContainer;
        private moveRec: egret.Rectangle;
        private bmpAllHeight: number = 0;
        private moveStarty: number = 0;
        private maskWave: number[];//波数记录,防止抛出多次刷怪事件
        private curWave: number = 0;//波数
        private isOneMap: boolean;//是否是单张地图
        private mapPaths: string[];
        private tilesKeys:string[];
        private refPoints:number[];
        constructor()
        {
            super();
            this.initBase();
        }

        private initBase()
        {
            this.bgBmpArr = [];
            this.mapPaths = [];
            this.tilesKeys = [];
            this.maskWave = [];
            this.refPoints = [];

            this.moveRec = new egret.Rectangle(0, 0, StageUtil.stageWidth, StageUtil.stageHeight);
            this.mover = new egret.DisplayObjectContainer();
            this.mover.scrollRect = this.moveRec;
            this.addChild(this.mover);
            this.touchEnabled = this.touchChildren = false;
            this.addEventListener(egret.Event.ADDED_TO_STAGE, this.onAddToStage, this);
        }

        /**
         * instanceId 副本id
         */
        public loadMap(mapId: number)
        {
            let mapCfg: MapCfg = ConfigManager.getConf(ConfigEnum.MAP, mapId);
            if (!mapCfg)
            {
                LogUtil.warn("地图配置不存在:" + mapId)
                return;
            }
            this.tilesKeys.length = 0;
            this.maskWave.length = 0;
            this.mapPaths.length = 0;
            this.refPoints.length = 0;
            this.curWave = 0;
            this.bgType = mapCfg.bgType;
            this.bgNames = mapCfg.bgNames.split("|");
            this.bgRetimes = (mapCfg.bgRetimes + "").split("|").map(Number);
            this.bgHeights = (mapCfg.bgHeight + "").split("|").map(Number);
            this.bgLabelEvents = (mapCfg.labelsEvent + "").split("|").map(Number);

            //倒叙加载，因为首先显示下面的图
            let fileName: string;
            let len = this.bgNames.length;
            let startPosy: number = 0;
            this.isOneMap = this.bgType == EnumBgType.TYPE_2;
            let stageHeight = StageUtil.stage.stageHeight;
            let rowCount = 0;
            let repeatCount = 0;
            var mapPath;
            for (var i = 0; i < len; i++)
            {
                fileName = this.bgNames[i];
                repeatCount = this.bgRetimes[i];
                for (var k = 0; k < repeatCount; k++)
                {
                    startPosy += this.bgHeights[i];
                    mapPath = ResPathUtilAft.getMapUrl(fileName) + ".jpg";
                    this.tilesKeys[rowCount] = mapPath;
                    this.mapPaths.push(mapPath);
                    rowCount ++;
                }
            }

            this.mapPaths.reverse();
            this.mapPaths.forEach(element =>
            {
                ResManager.getRes(element, this.onMapLoadComplete, this, LoadPriority.IMMEDIATELY, RES.ResourceItem.TYPE_IMAGE);
            });
            this.bmpAllHeight = startPosy;

            len = this.bgLabelEvents.length;
            for(var j = 0; j < len; j ++){
                this.refPoints[j] = (this.bmpAllHeight - stageHeight) * this.bgLabelEvents[j] / 100;
            }

            this.addChild(this.mover);
        }

        private onMapLoadComplete(texture: egret.Texture, url: string)
        {
            if (texture)
            {
                let index = this.tilesKeys.indexOf(url);
                if(index > -1){
                    this.tilesKeys[index] = "";
                    this.bgBmpArr[index] = this.createBitmapByTexture(texture);
                    let bgIndex = -1;
                    for(var i = 0;i < this.bgNames.length;i ++){
                        if(url.indexOf(this.bgNames[i]) != -1){
                            bgIndex = i;
                            break;
                        }
                    }
                    if(bgIndex != -1){
                        if (this.isOneMap) 
                        {
                            this.bgHeights[bgIndex] = StageUtil.stage.stageHeight;
                        }
                        else 
                        {
                            this.bgHeights[bgIndex] = texture.textureHeight;//修正原始纹理的高度
                        }
                    }
                    
                    this.reLayout();
                }
            }
            
        }

        private reLayout()
        {
            //创建这些图片，并设置y坐标，让它们连接起来
            var bgBmp: egret.Bitmap;
            let startPosy: number = 0;
            let reLen = this.bgRetimes.length;
            let index = 0;
            for (var i: number = 0; i < reLen; i++)
            {
                var loop = this.bgRetimes[i];
                for (var k = 0; k < loop; k++)
                {
                    bgBmp = this.bgBmpArr[index];
                    if (bgBmp)
                    {
                        bgBmp.y = startPosy;
                        //bgBmp.width = StageUtil.stageWidth > 750 ? 750 : StageUtil.stageWidth;
                        bgBmp.width = StageUtil.stageWidth;
                        if(this.isOneMap && StageUtil.stageHeight > 1400)
                        {
                            bgBmp.height = StageUtil.stageHeight;
                        } 
                        this.mover.addChild(bgBmp);
                    }
                    startPosy += this.bgHeights[i];
                    index++;
                }
            }
        }

        /**初始化*/
        private onAddToStage(event: egret.Event)
        {
            this.reLayout();
            NotifyManager.registerNotify(StageUtil.STAGE_RESIZE, this.onStageResize, this);
            if(this.moveRec)
            {
                this.moveRec.width = StageUtil.stageWidth;
                this.moveRec.height = StageUtil.stageHeight;
            }
        }

        public onStageResize(evt?: egret.Event): void
        {
            this.moveRec.width = StageUtil.stageWidth;
            this.moveRec.height = StageUtil.stageHeight;

            this.moveStarty = this.bmpAllHeight - StageUtil.stageHeight;
            let len = this.mover.numChildren;
            for (var i = 0; i < len; i++)
            {
                var bgBmp = this.mover.getChildAt(i);
                if(bgBmp)
                {
                    if (this.isOneMap && i == 0) 
                    {
                        bgBmp.height = StageUtil.stageHeight;
                    }
                    bgBmp.width = StageUtil.stageWidth;
                }
            }
            
        }

        private createBitmapByTexture(texture: egret.Texture): egret.Bitmap
        {
            var result: egret.Bitmap = new egret.Bitmap();
            result.texture = texture;
            return result;
        }


        public dispose(): void
        {
            // this.mapPath.forEach(element =>
            // {
            //     LoaderManager.instance.destoryGroup(element);
            // });
            // this.mapPath.length = 0;
            // DisplayUtils.removeAllChild(this.mover);
            // DisplayUtils.removeDisplay(this);
            // Map.recovryMap(this);

            NotifyManager.unRegisterNotify(StageUtil.STAGE_RESIZE, this.onStageResize, this);

            DisplayUtils.removeAllChild(this.mover);
            DisplayUtils.removeDisplay(this);
            // this.mapPaths.forEach(element =>
            // {
            //     LoaderManager.instance.destoryGroup(element);
            // });
            this.tilesKeys.length = 0;
            this.mapPaths.length = 0;
            this.bgBmpArr.length = 0;
            this.refPoints.length = 0;
        }
    }
    enum EnumBgType
    {
        TYPE_0 = 0,//战斗背景,循环几波
        TYPE_1 = 1,//一直循环
        TYPE_2 = 2,//一张背景图不循环
    }
}