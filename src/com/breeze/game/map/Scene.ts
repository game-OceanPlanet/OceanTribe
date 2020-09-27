module qmr
{
    export class Scene extends eui.UILayer
    {
        /**
         * 地图图层见：SceneLayerEnum
         */
        private mapLayer: egret.DisplayObjectContainer;   //地图所在层级
        private bottomLayer: egret.DisplayObjectContainer; //底部层，比如道具掉落，脚底特效等
        private objLayer: egret.DisplayObjectContainer;   //角色层
        private maskLayer: egret.DisplayObjectContainer;   //黑色半透明遮罩层,用于释放大招时候盖着下面所有东西
        private frontLayer: egret.DisplayObjectContainer;  //角色前层，比如飘血,前景特效
        private topLayer: egret.DisplayObjectContainer;   //最上层，用于大技能

        private objList: Array<BaseObject>;            //所有的物体对象
        private maskShape: egret.Shape;                //半透明
        private camera: Camera;//摄像机
        private zeroPoint: egret.Point;
        public constructor()
        {
            super();
            let t = this;
            t.mapLayer = new egret.DisplayObjectContainer();
            t.bottomLayer = new egret.DisplayObjectContainer();
            t.objLayer = new egret.DisplayObjectContainer();
            t.frontLayer = new egret.DisplayObjectContainer();
            t.maskLayer = new egret.DisplayObjectContainer();
            t.topLayer = new egret.DisplayObjectContainer();
            t.maskLayer.touchEnabled = t.maskLayer.touchChildren = false;
            t.mapLayer.touchEnabled = t.mapLayer.touchChildren = false;
            t.bottomLayer.touchEnabled = t.bottomLayer.touchChildren = false;
            t.topLayer.touchEnabled = t.topLayer.touchChildren = false;
            t.frontLayer.touchEnabled = t.frontLayer.touchChildren = false;
            t.addChild(t.mapLayer);
            t.addChild(t.bottomLayer);
            t.addChild(t.objLayer);
            t.addChild(t.frontLayer);
            t.addChild(t.maskLayer);
            t.addChild(t.topLayer);
            t.objList = new Array<BaseObject>();
            t.camera = new Camera(StageUtil.stageWidth, StageUtil.stageHeight);
            t.camera.init(t);
            t.zeroPoint = new egret.Point(0, 0);
        }

        private addMaskShape()
        {
            let t = this;
            if (!t.maskShape) t.maskShape = new egret.Shape();
            t.maskShape.graphics.beginFill(0, 1);
            t.maskShape.graphics.drawRect(0, 0, StageUtil.stageWidth, StageUtil.stageHeight);
            t.maskShape.graphics.endFill();
            t.maskLayer.addChild(t.maskShape);
        }

        public tweenShowOrHideMask(isShow: boolean)
        {
            let t = this;
            if (isShow)
            {
                t.addMaskShape();
                t.maskShape.alpha = 0;
                t.maskShape.visible = true;
                egret.Tween.get(t.maskShape).to({ alpha: 0.7 }, 100)
            }
            else
            {
                if (t.maskShape && t.maskShape.visible)
                {
                    egret.Tween.get(t.maskShape)
                        .to({ alpha: 0 }, 100)
                        .call(() =>
                        {
                            t.maskShape.graphics.clear();
                            t.maskShape.visible = false;
                        })
                }
            }
        }


        /** 侦听 */
        public addListener(): void
        {
            NotifyManager.registerNotify(StageUtil.STAGE_RESIZE, this.onStageResize, this);
        }

        /** 当舞台尺寸发生变化 */
        private onStageResize(): void
        {
            let t: Scene = this;
            egret.setTimeout(function ()
            {
                t.checkPosition()
            }, this, 500);
        }

        /**
         * @description 校验位置
         */
        private checkPosition(): void
        {
            this.camera.updateSize(StageUtil.stageWidth, StageUtil.stageHeight);
        }

        /**
         * @description 调整摄像头，聚焦到某个坐标
         */
        public lookAt(pos: any, time: number = 700, waitTime: number = 3000): void
        {
            if (pos)
            {
                let t: Scene = this;
                this.camera.setAnchor(pos);
                egret.Tween.removeTweens(t);
                egret.Tween.get(this).
                    to({ scaleX: 1.6, scaleY: 1.6 }, time, egret.Ease.circOut).
                    wait(waitTime).
                    to({ scaleX: 1, scaleY: 1 }, time, egret.Ease.cubicOut);
            }
        }

        public removeTween()
        {
            let t: Scene = this;
            egret.Tween.removeTweens(t);
            t.scaleX = t.scaleY = 1;
            this.camera.setAnchor(this.zeroPoint);
        }

        /** 根据id返回对应的BaseObject */
        public findBaseObjectById(id: any): BaseObject
        {
            for (let item of this.objList)
            {
                if (MathUtil.equal(item.id, id))
                {
                    return item;
                }
            }
            return null;
        }

        /** 移除一个BaseObject通过id,单纯从显示列表移除 */
        public removeBaseObjectById(id: any): void
        {
            for (let item of this.objList)
            {
                if (MathUtil.equal(id, item.id))
                {
                    let index: number = this.objList.indexOf(item);
                    if (index != -1)
                    {
                        this.objList.splice(index, 1);
                        item.dispos();
                        item = null;
                        break;
                    }
                }
            }
        }

        /** 移除一个BaseObject,通过引用对象本身,单纯从显示列表移除 */
        public removeBaseObject(item: BaseObject): void
        {
            if (item)
            {
                let index: number = this.objList.indexOf(item);
                if (index != -1)
                {
                    this.objList.splice(index, 1);
                }

                if (item instanceof HeroActor)
                {
                    LogUtil.logF("移除对象数量:-----" + this.objList.length + " " + index + " " + item.fighterId);
                }
                item.dispos();
                item = null;
            }
        }

        /** 添加一个baseObject到场景中 */
        public addObject(obj: BaseObject): void
        {
            if (this.objList.indexOf(obj) == -1)
            {
                obj.scene = this;
                this.objList.push(obj);
                if (obj.ui)
                {
                    LogUtil.logF('添加一个baseObject到场景中' + obj.id);
                    this.addObjectLayer(obj.ui);
                }
            }
            else
            {
                LogUtil.logF('场景上已经存在了');
            }
        }

        /** 添加到最上层 */
        public addObjectToTop(obj: BaseObject): void
        {
            if (this.objList.indexOf(obj) == -1)
            {
                obj.scene = this;
                this.objList.push(obj);
            }
            if (obj && obj.ui)
            {
                this.addObjectLayer(obj.ui);
            }
        }

        /** 添加到地图层 */
        public addToMap(disPlay: egret.DisplayObject): void
        {
            this.mapLayer.addChild(disPlay);
        }
        /** 添加显示对象到底部层 */
        public addToBottom(disPlay: egret.DisplayObject): void
        {
            this.bottomLayer.addChild(disPlay);
        }

        /** 添加显示对象层 */
        private addObjectLayer(disPlay: egret.DisplayObject): void
        {
            this.objLayer.addChild(disPlay);
        }

        /** 添加显示对象到前景层 */
        public addToFront(disPlay: egret.DisplayObject): void
        {
            this.frontLayer.addChild(disPlay);
        }
        /** 添加到最上层  */
        public addToTop(disPlay: egret.DisplayObject): void
        {
            this.topLayer.addChild(disPlay);
        }
        /** 显示或隐藏排序最上层 */
        public showOrHideTopLayer(value: boolean): void
        {
            this.topLayer.visible = value;
        }

        /** 根据类型获取BaseObject列表 */
        public getObjectListByType(type: number): Array<BaseObject>
        {
            let list: Array<BaseObject> = [];
            for (let object of this.objList)
            {
                if (object.type == type)
                {
                    list.push(object);
                }
            }
            return list;
        }

        /** 获取obj的物体坐标 */
        public getObjGlobalPoint(obj: BaseObject): any
        {
            return this.objLayer.localToGlobal(obj.x, obj.y);
        }

        /**
         * @description 获取物体列表
         */
        public getObjectList(): Array<BaseObject>
        {
            return this.objList;
        }

        /**
         * @description 停止渲染场景
         */
        public pause(): void
        {
            if (this.mapLayer.parent)
            {
                this.mapLayer.parent.removeChild(this.mapLayer);
            }
            if (this.bottomLayer.parent)
            {
                this.bottomLayer.parent.removeChild(this.bottomLayer);
            }
            if (this.objLayer.parent)
            {
                this.objLayer.parent.removeChild(this.objLayer);
            }
            if (this.topLayer.parent)
            {
                this.topLayer.parent.removeChild(this.topLayer);
            }
            if (this.frontLayer.parent)
            {
                this.frontLayer.parent.removeChild(this.frontLayer);
            }
        }

        /**
         * @description 重新渲染场景
         */
        public resume(): void
        {
            this.addChild(this.mapLayer);
            this.addChild(this.bottomLayer);
            this.addChild(this.objLayer);
            this.addChild(this.topLayer);
            this.addChild(this.frontLayer);
        }

        public removeAllBottomObj()
        {
            let bottomLayer = this.bottomLayer;
            while (bottomLayer.numChildren > 0)
            {
                let item = bottomLayer.getChildAt(0);
                if (item instanceof TombstoneDrop)
                {
                    item.dispose();
                    item = null;
                }
                else if (item instanceof BaseEffect)
                {
                    item.dispos();
                    item = null;
                }
                else
                {
                    DisplayUtils.removeDisplay(item);
                }
            }
        }

        /**
         * @description 清除当前场景所有物体
         */
        public clear(): void
        {
            let t = this;
            t.removeTween();
            t.removeAllBottomObj();
            t.frontLayer.removeChildren();
            let objList = t.objList;
            if (objList)
            {
                while (objList.length > 0)
                {
                    let item: BaseObject = objList.shift();
                    if (item)
                    {
                        item.dispos();
                        item = null;
                    }
                }
            }
            if (t.maskShape && t.maskShape.visible)
            {
                t.maskShape.graphics.clear();
                t.maskShape.visible = false;
            }
        }
    }
}
