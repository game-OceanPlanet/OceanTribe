module qmr
{
    export class TweenEffectUtil
    {
        /**
         * 设置对象注册点
         * @param object
         * @param anchorX
         * @param anchorY
         */
        public static setAnchorXY(object: egret.DisplayObject, anchorX: number = 0.5, anchorY: number = 0.5): void
        {
            object.x += (anchorX - object.anchorOffsetX) * object.scaleX * object.width;
            object.y += (anchorY - object.anchorOffsetY) * object.scaleY * object.height;
            object.anchorOffsetX = anchorX;
            object.anchorOffsetY = anchorY;
        }
        /**
         * 从小到大
         * @param object 要做效果的对象
         * @param delay  延迟播放的时间
         * @param total  动画总时间
         * @param easeFunName 缓动方程
         * @param isLoop 是否循环
         */
        public static magnifyEffect(object: egret.DisplayObject, delay: number = 0, total: number = 0, easeFunName: string = "", isLoop: boolean = false): void
        {
            egret.Tween.removeTweens(object);
            var attr: Array<any> = [
                {
                    "percent": 1,
                    "attr": {
                        "scaleX": 1,
                        "scaleY": 1,
                        "alpha": 1
                    }
                }
            ];
            object.scaleX = object.scaleY = object.alpha = 0;
            var total: number = total ? total : 300;
            TweenEffectUtil.start(object, attr, delay, total, easeFunName, isLoop);
        }
        /**
         * 重置元素
         * @param object 要做效果的对象
         * @param delay  延迟播放的时间
         * @param total  动画总时间
         * @param easeFunName 缓动方程
         * @param isLoop 是否循环
         */
        public static restoreEffect(object: egret.DisplayObject, delay: number = 0, total: number = 0, easeFunName: string = "", isLoop: boolean = false): void
        {
            egret.Tween.removeTweens(object);
            var attr: Array<any> = [
                {
                    "percent": 1,
                    "attr": {
                        "alpha": 1,
                        "skewX": 0,
                        "skewY": 0,
                        "scaleX": 1,
                        "scaleY": 1,
                        "rotation": 0
                    }
                }
            ];
            var total: number = total ? total : 1000;
            TweenEffectUtil.start(object, attr, delay, total, easeFunName, isLoop);
        }
        /**
         * 从大到小淡出
         * @param object 要做效果的对象
         * @param delay  延迟播放的时间
         * @param total  动画总时间
         * @param easeFunName 缓动方程
         * @param isLoop 是否循环
         */
        public static shrinkEffect(object: egret.DisplayObject, delay: number = 0, total: number = 0, easeFunName: string = "", isLoop: boolean = false): void
        {
            egret.Tween.removeTweens(object);
            var attr: Array<any> = [
                {
                    "percent": 1,
                    "attr": {
                        "scaleX": 0,
                        "scaleY": 0,
                        "alpha": 0
                    }
                }
            ];
            object.scaleX = object.scaleY = object.alpha = 1;
            var total: number = total ? total : 300;
            TweenEffectUtil.start(object, attr, delay, total, easeFunName, isLoop);
        }
        /**
         * 左右飘动，alpha忽隐忽现
         * @param object 要做效果的对象
         * @param delay  延迟播放的时间
         * @param total  动画总时间
         * @param easeFunName 缓动方程
         * @param isLoop 是否循环
         */
        public static flutterEffect(object: egret.DisplayObject, delay: number = 0, total: number = 0, easeFunName: string = "", isLoop: boolean = false): void
        {
            egret.Tween.removeTweens(object);
            var attr: Array<any> = [
                {
                    "percent": 0.25,
                    "attr": {
                        "alpha": 0,
                        "anchorX": 1
                    }
                },
                {
                    "percent": 0.5,
                    "attr": {
                        "alpha": 1,
                        "anchorX": 0
                    }
                },
                {
                    "percent": 0.75,
                    "attr": {
                        "alpha": 0,
                        "anchorX": 1
                    }
                },
                {
                    "percent": 1,
                    "attr": {
                        "alpha": 1,
                        "anchorX": 0
                    }
                }
            ];
            object.anchorOffsetX = object.alpha = 0;
            var total: number = total ? total : 6000;
            TweenEffectUtil.start(object, attr, delay, total, easeFunName, isLoop);
        }
        /**
         * 向右下角轻微缩小，再返回
         * @param object 要做效果的对象
         * @param delay  延迟播放的时间
         * @param total  动画总时间
         * @param easeFunName 缓动方程
         * @param isLoop 是否循环
         */
        public static flutterPositionEffect(object: egret.DisplayObject, delay: number = 0, total: number = 0, easeFunName: string = "", isLoop: boolean = false): void
        {
            egret.Tween.removeTweens(object);
            var attr: Array<any> = [
                {
                    "percent": 0.4,
                    "attr": {
                        "anchorX": -0.3,
                        "anchorY": -0.2,
                        "scaleX": 0.9,
                        "scaleY": 0.9,
                        "alpha": 0.7
                    }
                },
                {
                    "percent": 0.8,
                    "attr": {
                        "anchorX": -0.2,
                        "anchorY": -0.1,
                        "scaleX": 0.95,
                        "scaleY": 0.95,
                        "alpha": 0.9
                    }
                },
                {
                    "percent": 1,
                    "attr": {
                        "anchorX": 0,
                        "anchorY": 0,
                        "scaleX": 1,
                        "scaleY": 1,
                        "alpha": 1
                    }
                }
            ];
            object.anchorOffsetX = object.anchorOffsetY = 0;
            object.scaleX = object.scaleY = object.alpha = 1;
            var total: number = total ? total : 6000;
            TweenEffectUtil.start(object, attr, delay, total, easeFunName, isLoop);
        }
        /**
         * 淡入
         * @param object 要做效果的对象
         * @param delay  延迟播放的时间
         * @param total  动画总时间
         * @param easeFunName 缓动方程
         * @param isLoop 是否循环
         */
        public static fadeInEffect(object: egret.DisplayObject, delay: number = 0, total: number = 0, easeFunName: string = "", isLoop: boolean = false): void
        {
            egret.Tween.removeTweens(object);
            var attr: Array<any> = [
                {
                    "percent": 1,
                    "attr": {
                        "alpha": 1
                    }
                }
            ];
            object.alpha = 0;
            var total: number = total ? total : 500;
            TweenEffectUtil.start(object, attr, delay, total, easeFunName, isLoop);
        }

        /**
         * 左侧淡入
         * @param object 要做效果的对象
         * @param delay  延迟播放的时间
         * @param total  动画总时间
         * @param easeFunName 缓动方程
         * @param isLoop 是否循环
         */
        public static fadeInLeft(object: egret.DisplayObject, delay: number = 0, total: number = 0, easeFunName: string = "", isLoop: boolean = false): void
        {
            egret.Tween.removeTweens(object);
            var attr: Array<any> = [
                {
                    "percent": 1,
                    "attr": {
                        "alpha": 1,
                        "anchorOffsetX": 0
                    }
                }
            ];
            object.alpha = 0;
            object.anchorOffsetX = 50;
            var total: number = total ? total : 800;
            TweenEffectUtil.start(object, attr, delay, total, easeFunName, isLoop);
        }

        /**
         * 右侧淡入
         * @param object 要做效果的对象
         * @param delay  延迟播放的时间
         * @param total  动画总时间
         * @param easeFunName 缓动方程
         * @param isLoop 是否循环
         */
        public static fadeInRight(object: egret.DisplayObject, delay: number = 0, total: number = 0, easeFunName: string = "", isLoop: boolean = false): void
        {
            egret.Tween.removeTweens(object);
            var attr: Array<any> = [
                {
                    "percent": 1,
                    "attr": {
                        "alpha": 1,
                        "anchorOffsetX": 0
                    }
                }
            ];
            object.alpha = 0;
            object.anchorOffsetX = - 50;
            var total: number = total ? total : 800;
            TweenEffectUtil.start(object, attr, delay, total, easeFunName, isLoop);
        }
        /**
         * 下侧淡入
         * @param object 要做效果的对象
         * @param delay  延迟播放的时间
         * @param total  动画总时间
         * @param easeFunName 缓动方程
         * @param isLoop 是否循环
         */
        public static fadeInUp(object: egret.DisplayObject, delay: number = 0, total: number = 0, easeFunName: string = "", isLoop: boolean = false): void
        {
            egret.Tween.removeTweens(object);
            var attr: Array<any> = [
                {
                    "percent": 1,
                    "attr": {
                        "alpha": 1,
                        "anchorOffsetY": 0
                    }
                }
            ];
            object.alpha = 0;
            object.anchorOffsetY = - 50;
            var total: number = total ? total : 800;
            TweenEffectUtil.start(object, attr, delay, total, easeFunName, isLoop);
        }

        /**
         * 下侧淡入
         * @param object 要做效果的对象
         * @param delay  延迟播放的时间
         * @param total  动画总时间
         * @param easeFunName 缓动方程
         * @param isLoop 是否循环
         */
        public static fadeInDown(object: egret.DisplayObject, delay: number = 0, total: number = 0, easeFunName: string = "", isLoop: boolean = false): void
        {
            egret.Tween.removeTweens(object);
            var attr: Array<any> = [
                {
                    "percent": 1,
                    "attr": {
                        "alpha": 1,
                        "anchorOffsetY": 0
                    }
                }
            ];
            object.alpha = 0;
            object.anchorOffsetY = 50;
            var total: number = total ? total : 800;
            TweenEffectUtil.start(object, attr, delay, total, easeFunName, isLoop);
        }
        /**
         * 淡出
         * @param object 要做效果的对象
         * @param delay  延迟播放的时间
         * @param total  动画总时间
         * @param easeFunName 缓动方程
         * @param isLoop 是否循环
         */
        public static fadeOut(object: egret.DisplayObject, delay: number = 0, total: number = 0, easeFunName: string = "", isLoop: boolean = false): void
        {
            egret.Tween.removeTweens(object);
            var attr: Array<any> = [
                {
                    "percent": 1,
                    "attr": {
                        "alpha": 0,
                    }
                }
            ];
            object.alpha = 1;
            var total: number = total ? total : 800;
            TweenEffectUtil.start(object, attr, delay, total, easeFunName, isLoop);
        }
        /**
         * 左侧淡出
         * @param object 要做效果的对象
         * @param delay  延迟播放的时间
         * @param total  动画总时间
         * @param easeFunName 缓动方程
         * @param isLoop 是否循环
         */
        public static fadeOutLeft(object: egret.DisplayObject, delay: number = 0, total: number = 0, easeFunName: string = "", isLoop: boolean = false): void
        {
            egret.Tween.removeTweens(object);
            var attr: Array<any> = [
                {
                    "percent": 1,
                    "attr": {
                        "alpha": 0,
                        "anchorOffsetX": 50
                    }
                }
            ];
            object.alpha = 1;
            var total: number = total ? total : 800;
            TweenEffectUtil.start(object, attr, delay, total, easeFunName, isLoop);
        }
        /**
         * 左侧淡出
         * @param object 要做效果的对象
         * @param delay  延迟播放的时间
         * @param total  动画总时间
         * @param easeFunName 缓动方程
         * @param isLoop 是否循环
         */
        public static fadeOutRight(object: egret.DisplayObject, delay: number = 0, total: number = 0, easeFunName: string = "", isLoop: boolean = false): void
        {
            egret.Tween.removeTweens(object);
            var attr: Array<any> = [
                {
                    "percent": 1,
                    "attr": {
                        "alpha": 0,
                        "anchorOffsetX": - 50
                    }
                }
            ];
            object.alpha = 1;
            object.anchorOffsetX = 0;
            var total: number = total ? total : 800;
            TweenEffectUtil.start(object, attr, delay, total, easeFunName, isLoop);
        }
        /**
         * 下侧淡出
         * @param object 要做效果的对象
         * @param delay  延迟播放的时间
         * @param total  动画总时间
         * @param easeFunName 缓动方程
         * @param isLoop 是否循环
         */
        public static fadeOutDown(object: egret.DisplayObject, delay: number = 0, total: number = 0, easeFunName: string = "", isLoop: boolean = false): void
        {
            egret.Tween.removeTweens(object);
            var attr: Array<any> = [
                {
                    "percent": 1,
                    "attr": {
                        "alpha": 0,
                        "anchorOffsetY": - 50
                    }
                }
            ];
            object.alpha = 1;
            object.anchorOffsetY = 0;
            var total: number = total ? total : 800;
            TweenEffectUtil.start(object, attr, delay, total, easeFunName, isLoop);
        }
        /**
         * 下侧淡出
         * @param object 要做效果的对象
         * @param delay  延迟播放的时间
         * @param total  动画总时间
         * @param easeFunName 缓动方程
         * @param isLoop 是否循环
         */
        public static fadeOutUp(object: egret.DisplayObject, delay: number = 0, total: number = 0, easeFunName: string = "", isLoop: boolean = false): void
        {
            egret.Tween.removeTweens(object);
            var attr: Array<any> = [
                {
                    "percent": 1,
                    "attr": {
                        "alpha": 0,
                        "anchorOffsetY": 50
                    }
                }
            ];
            object.alpha = 1;
            object.anchorOffsetY = 0;
            var total: number = total ? total : 800;
            TweenEffectUtil.start(object, attr, delay, total, easeFunName, isLoop);
        }
        /**
         * 左右快速晃动
         * @param object 要做效果的对象
         * @param delay  延迟播放的时间
         * @param total  动画总时间
         * @param easeFunName 缓动方程
         * @param isLoop 是否循环
         */
        public static shake(object: egret.DisplayObject, delay: number = 0, total: number = 0, easeFunName: string = "", isLoop: boolean = false): void
        {
            egret.Tween.removeTweens(object);
            var attr: Array<any> = [
                {
                    "percent": 0.22,
                    "attr": {
                        "anchorX": 0.1
                    }
                },
                {
                    "percent": 0.44,
                    "attr": {
                        "anchorX": -0.1
                    }
                },
                {
                    "percent": 0.66,
                    "attr": {
                        "anchorX": 0.1
                    }
                },
                {
                    "percent": 0.88,
                    "attr": {
                        "anchorX": -0.1
                    }
                },
                {
                    "percent": 1,
                    "attr": {
                        "anchorX": 0
                    }
                }
            ];
            var total: number = total ? total : 450;
            TweenEffectUtil.start(object, attr, delay, total, easeFunName, isLoop);
        }
        /**
         * 向上压扁
         * @param object 要做效果的对象
         * @param delay  延迟播放的时间
         * @param total  动画总时间
         * @param easeFunName 缓动方程
         * @param isLoop 是否循环
         */
        public static skip(object: egret.DisplayObject, delay: number = 0, total: number = 0, easeFunName: string = "", isLoop: boolean = false): void
        {
            egret.Tween.removeTweens(object);
            var attr: Array<any> = [
                {
                    "percent": 0.25,
                    "attr": {
                        "scaleY": 0.8
                    }
                },
                {
                    "percent": 0.5,
                    "attr": {
                        "scaleY": 1.2
                    }
                },
                {
                    "percent": 0.75,
                    "attr": {
                        "scaleY": 0.8
                    }
                },
                {
                    "percent": 1,
                    "attr": {
                        "scaleY": 1
                    }
                }
            ];
            object.scaleY = 1;
            var total: number = total ? total : 1000;
            TweenEffectUtil.start(object, attr, delay, total, easeFunName, isLoop);
        }
        /**
         * 向下淡化再复位，最终alpha为透明
         * @param object 要做效果的对象
         * @param delay  延迟播放的时间
         * @param total  动画总时间
         * @param easeFunName 缓动方程
         * @param isLoop 是否循环
         */
        public static arrowDown(object: egret.DisplayObject, delay: number = 0, total: number = 0, easeFunName: string = "", isLoop: boolean = false): void
        {
            egret.Tween.removeTweens(object);
            var attr: Array<any> = [
                {
                    "percent": 0.5,
                    "attr": {
                        "alpha": 1,
                        "anchorY": -0.5
                    }
                },
                {
                    "percent": 1,
                    "attr": {
                        "alpha": 0.3,
                        "anchorY": 0
                    }
                }
            ];
            object.alpha = 1;
            object.anchorOffsetY = 0;
            var total: number = total ? total : 1000;
            TweenEffectUtil.start(object, attr, delay, total, easeFunName, isLoop);
        }
        /**
         * 向上淡化再复位
         * @param object 要做效果的对象
         * @param delay  延迟播放的时间
         * @param total  动画总时间
         * @param easeFunName 缓动方程
         * @param isLoop 是否循环
         */
        public static arrowUp(object: egret.DisplayObject, delay: number = 0, total: number = 0, easeFunName: string = "", isLoop: boolean = false): void
        {
            egret.Tween.removeTweens(object);
            var attr: Array<any> = [
                {
                    "percent": 0.5,
                    "attr": {
                        "alpha": 0.3,
                        "anchorY": 0.5
                    }
                },
                {
                    "percent": 1,
                    "attr": {
                        "alpha": 1,
                        "anchorY": 0
                    }
                }
            ];
            object.alpha = 1;
            object.anchorOffsetY = 0;
            var total: number = total ? total : 1000;
            TweenEffectUtil.start(object, attr, delay, total, easeFunName, isLoop);
        }
        /**
         * 向右淡化再复位
         * @param object 要做效果的对象
         * @param delay  延迟播放的时间
         * @param total  动画总时间
         * @param easeFunName 缓动方程
         * @param isLoop 是否循环
         */
        public static arrowRight(object: egret.DisplayObject, delay: number = 0, total: number = 0, easeFunName: string = "", isLoop: boolean = false): void
        {
            egret.Tween.removeTweens(object);
            var attr: Array<any> = [
                {
                    "percent": 0.5,
                    "attr": {
                        "alpha": 0.3,
                        "anchorX": -0.5
                    }
                },
                {
                    "percent": 1,
                    "attr": {
                        "alpha": 1,
                        "anchorX": 0
                    }
                }
            ];
            object.alpha = 1;
            object.anchorOffsetX = 0;
            var total: number = total ? total : 1000;
            TweenEffectUtil.start(object, attr, delay, total, easeFunName, isLoop);
        }
        /**
         * 向左淡化再复位
         * @param object 要做效果的对象
         * @param delay  延迟播放的时间
         * @param total  动画总时间
         * @param easeFunName 缓动方程
         * @param isLoop 是否循环
         */
        public static arrowLeft(object: egret.DisplayObject, delay: number = 0, total: number = 0, easeFunName: string = "", isLoop: boolean = false): void
        {
            egret.Tween.removeTweens(object);
            var attr: Array<any> = [
                {
                    "percent": 0.5,
                    "attr": {
                        "alpha": 1,
                        "anchorX": 0.5
                    }
                },
                {
                    "percent": 1,
                    "attr": {
                        "alpha": 0.3,
                        "anchorX": 0
                    }
                }
            ];
            object.alpha = 1;
            object.anchorOffsetX = 0;
            easeFunName = "backIn";
            var total: number = total ? total : 1000;
            TweenEffectUtil.start(object, attr, delay, total, easeFunName, isLoop);
        }
        /**
         * 忽隐忽现
         * @param object 要做效果的对象
         * @param delay  延迟播放的时间
         * @param total  动画总时间
         * @param easeFunName 缓动方程
         * @param isLoop 是否循环
         */
        public static flash(object: egret.DisplayObject, delay: number = 0, total: number = 0, easeFunName: string = "", isLoop: boolean = false): void
        {
            egret.Tween.removeTweens(object);
            var attr: Array<any> = [
                {
                    "percent": 0.25,
                    "attr": {
                        "alpha": 0.4
                    }
                },
                {
                    "percent": 0.5,
                    "attr": {
                        "alpha": 0.9
                    }
                },
                {
                    "percent": 0.75,
                    "attr": {
                        "alpha": 0.2
                    }
                },
                {
                    "percent": 1,
                    "attr": {
                        "alpha": 1
                    }
                }
            ];
            object.alpha = 1;
            var total: number = total ? total : 2000;
            TweenEffectUtil.start(object, attr, delay, total, easeFunName, isLoop);
        }
        /**
         * 忽隐忽现入场
         * @param object 要做效果的对象
         * @param delay  延迟播放的时间
         * @param total  动画总时间
         * @param easeFunName 缓动方程
         * @param isLoop 是否循环
         */
        public static flashIn(object: egret.DisplayObject, delay: number = 0, total: number = 0, easeFunName: string = "", isLoop: boolean = false): void
        {
            egret.Tween.removeTweens(object);
            var attr: Array<any> = [
                {
                    "percent": 0.25,
                    "attr": {
                        "alpha": 0
                    }
                },
                {
                    "percent": 0.5,
                    "attr": {
                        "alpha": 1
                    }
                },
                {
                    "percent": 0.75,
                    "attr": {
                        "alpha": 0
                    }
                },
                {
                    "percent": 1,
                    "attr": {
                        "alpha": 1
                    }
                }
            ];
            object.alpha = 1;
            var total: number = total ? total : 1000;
            TweenEffectUtil.start(object, attr, delay, total, easeFunName, isLoop);
        }
        /**
         * 忽隐忽现退场
         * @param object 要做效果的对象
         * @param delay  延迟播放的时间
         * @param total  动画总时间
         * @param easeFunName 缓动方程
         * @param isLoop 是否循环
         */
        public static flashOut(object: egret.DisplayObject, delay: number = 0, total: number = 0, easeFunName: string = "", isLoop: boolean = false): void
        {
            egret.Tween.removeTweens(object);
            var attr: Array<any> = [
                {
                    "percent": 0.25,
                    "attr": {
                        "alpha": 1
                    }
                },
                {
                    "percent": 0.5,
                    "attr": {
                        "alpha": 0
                    }
                },
                {
                    "percent": 0.75,
                    "attr": {
                        "alpha": 1
                    }
                },
                {
                    "percent": 1,
                    "attr": {
                        "alpha": 0
                    }
                }
            ];
            object.alpha = 0;
            var total: number = total ? total : 1000;
            TweenEffectUtil.start(object, attr, delay, total, easeFunName, isLoop);
        }
        /**
         * 旋转一周
         * @param object 要做效果的对象
         * @param delay  延迟播放的时间
         * @param total  动画总时间
         * @param easeFunName 缓动方程
         * @param isLoop 是否循环
         */
        public static rotation(object: egret.DisplayObject, delay: number = 0, total: number = 0, easeFunName: string = "", isLoop: boolean = false): void
        {
            egret.Tween.removeTweens(object);
            total = total ? total : 1000;
            if (easeFunName)
            {
                var easeFun: Function = eval("egret.Ease." + easeFunName);
            } else
            {
                easeFun = null;
            }
            egret.Tween.get(object, { loop: isLoop }).wait(delay).to({ rotation: object.rotation + 360 }, total, easeFun);
        }
        /**
         * 旋转入场
         * @param object 要做效果的对象
         * @param delay  延迟播放的时间
         * @param total  动画总时间
         * @param easeFunName 缓动方程
         * @param isLoop 是否循环
         */
        public static rotationIn(object: egret.DisplayObject, delay: number = 0, total: number = 0, easeFunName: string = "", isLoop: boolean = false): void
        {
            egret.Tween.removeTweens(object);
            total = total ? total : 500;
            if (easeFunName)
            {
                var easeFun: Function = eval("egret.Ease." + easeFunName);
            } else
            {
                easeFun = null;
            }
            object.rotation = object.scaleX = object.scaleY = object.alpha = 0;
            egret.Tween.get(object, { loop: isLoop }).wait(delay).to({ rotation: object.rotation + 360, scaleX: 1, scaleY: 1, alpha: 1 }, total, easeFun);
        }
        /**
         * 旋转退场
         * @param object 要做效果的对象
         * @param delay  延迟播放的时间
         * @param total  动画总时间
         * @param easeFunName 缓动方程
         * @param isLoop 是否循环
         */
        public static rotationOut(object: egret.DisplayObject, delay: number = 0, total: number = 0, easeFunName: string = "", isLoop: boolean = false): void
        {
            egret.Tween.removeTweens(object);
            total = total ? total : 500;
            if (easeFunName)
            {
                var easeFun: Function = eval("egret.Ease." + easeFunName);
            } else
            {
                easeFun = null;
            }
            object.rotation = 0;
            object.scaleX = object.scaleY = object.alpha = 1;
            egret.Tween.get(object, { loop: isLoop }).wait(delay).to({ rotation: object.rotation + 360, scaleX: 0, scaleY: 0, alpha: 0 }, total, easeFun);
        }
        /**
         * 从左旋转入场
         * @param object 要做效果的对象
         * @param delay  延迟播放的时间
         * @param total  动画总时间
         * @param easeFunName 缓动方程
         * @param isLoop 是否循环
         */
        public static rotationInLeft(object: egret.DisplayObject, delay: number = 0, total: number = 0, easeFunName: string = "", isLoop: boolean = false): void
        {
            egret.Tween.removeTweens(object);
            total = total ? total : 500;
            if (easeFunName)
            {
                var easeFun: Function = eval("egret.Ease." + easeFunName);
            } else
            {
                easeFun = null;
            }
            object.rotation = 30;
            object.alpha = 0;
            egret.Tween.get(object, { loop: isLoop }).wait(delay).to({ rotation: 0, alpha: 1 }, total, easeFun);
        }
        /**
         * 从右旋转入场
         * @param object 要做效果的对象
         * @param delay  延迟播放的时间
         * @param total  动画总时间
         * @param easeFunName 缓动方程
         * @param isLoop 是否循环
         */
        public static rotationInRight(object: egret.DisplayObject, delay: number = 0, total: number = 0, easeFunName: string = "", isLoop: boolean = false): void
        {
            egret.Tween.removeTweens(object);
            total = total ? total : 500;
            if (easeFunName)
            {
                var easeFun: Function = eval("egret.Ease." + easeFunName);
            } else
            {
                easeFun = null;
            }
            object.rotation = - 30;
            object.alpha = 0;
            egret.Tween.get(object, { loop: isLoop }).wait(delay).to({ rotation: 0, alpha: 1 }, total, easeFun);
        }
        /**
         * 向左侧旋转淡出
         * @param object 要做效果的对象
         * @param delay  延迟播放的时间
         * @param total  动画总时间
         * @param easeFunName 缓动方程
         * @param isLoop 是否循环
         */
        public static rotationOutLeft(object: egret.DisplayObject, delay: number = 0, total: number = 0, easeFunName: string = "", isLoop: boolean = false): void
        {
            egret.Tween.removeTweens(object);
            total = total ? total : 500;
            if (easeFunName)
            {
                var easeFun: Function = eval("egret.Ease." + easeFunName);
            } else
            {
                easeFun = null;
            }
            object.rotation = 0;
            object.alpha = 1;
            egret.Tween.get(object, { loop: isLoop }).wait(delay).to({ rotation: 30, alpha: 0 }, total, easeFun);
        }
        /**
         * 向右侧旋转淡出
         * @param object 要做效果的对象
         * @param delay  延迟播放的时间
         * @param total  动画总时间
         * @param easeFunName 缓动方程
         * @param isLoop 是否循环
         */
        public static rotationOutRight(object: egret.DisplayObject, delay: number = 0, total: number = 0, easeFunName: string = "", isLoop: boolean = false): void
        {
            egret.Tween.removeTweens(object);
            total = total ? total : 500;
            if (easeFunName)
            {
                var easeFun: Function = eval("egret.Ease." + easeFunName);
            } else
            {
                easeFun = null;
            }
            object.rotation = 0;
            object.alpha = 1;
            egret.Tween.get(object, { loop: isLoop }).wait(delay).to({ rotation: - 30, alpha: 0 }, total, easeFun);
        }
        /**
         * 微微放大晃动再复位
         * @param object 要做效果的对象
         * @param delay  延迟播放的时间
         * @param total  动画总时间
         * @param easeFunName 缓动方程
         * @param isLoop 是否循环
         */
        public static scaleOutRock(object: egret.DisplayObject, delay: number = 0, total: number = 0, easeFunName: string = "", isLoop: boolean = false): void
        {
            egret.Tween.removeTweens(object);
            var attr: Array<any> = [
                {
                    "percent": 0.1,
                    "attr": {
                        "scaleY": 0.9,
                        "scaleX": 0.9,
                        "rotation": -3
                    }
                },
                {
                    "percent": 0.2,
                    "attr": {
                        "scaleY": 0.9,
                        "scaleX": 0.9,
                        "rotation": -3
                    }
                },
                {
                    "percent": 0.3,
                    "attr": {
                        "scaleY": 1.1,
                        "scaleX": 1.1,
                        "rotation": 3
                    }
                },
                {
                    "percent": 0.4,
                    "attr": {
                        "scaleY": 1.1,
                        "scaleX": 1.1,
                        "rotation": -3
                    }
                },
                {
                    "percent": 0.5,
                    "attr": {
                        "scaleY": 1.1,
                        "scaleX": 1.1,
                        "rotation": 3
                    }
                },
                {
                    "percent": 0.6,
                    "attr": {
                        "scaleY": 1.1,
                        "scaleX": 1.1,
                        "rotation": -3
                    }
                },
                {
                    "percent": 0.7,
                    "attr": {
                        "scaleY": 1.1,
                        "scaleX": 1.1,
                        "rotation": 3
                    }
                },
                {
                    "percent": 0.8,
                    "attr": {
                        "scaleY": 1.1,
                        "scaleX": 1.1,
                        "rotation": 3
                    }
                },
                {
                    "percent": 1,
                    "attr": {
                        "scaleY": 1,
                        "scaleX": 1,
                        "rotation": 0
                    }
                }
            ];
            object.scaleX = object.scaleY = 1;
            var total: number = total ? total : 1000;
            TweenEffectUtil.start(object, attr, delay, total, easeFunName, isLoop);
        }
        /**
         * 橡皮圈晃动
         * @param object 要做效果的对象
         * @param delay  延迟播放的时间
         * @param total  动画总时间
         * @param easeFunName 缓动方程
         * @param isLoop 是否循环
         */
        public static rubberBand(object: egret.DisplayObject, delay: number = 0, total: number = 0, easeFunName: string = "", isLoop: boolean = false): void
        {
            egret.Tween.removeTweens(object);
            var attr: Array<any> = [
                {
                    "percent": 0.3,
                    "attr": {
                        "scaleX": 1.25,
                        "scaleY": 0.75
                    }
                },
                {
                    "percent": 0.4,
                    "attr": {
                        "scaleX": 0.75,
                        "scaleY": 1.25
                    }
                },
                {
                    "percent": 0.5,
                    "attr": {
                        "scaleX": 1.15,
                        "scaleY": 0.85
                    }
                },
                {
                    "percent": 0.65,
                    "attr": {
                        "scaleX": 0.95,
                        "scaleY": 1.05
                    }
                },
                {
                    "percent": 0.75,
                    "attr": {
                        "scaleX": 1.05,
                        "scaleY": 0.95
                    }
                },
                {
                    "percent": 1,
                    "attr": {
                        "scaleX": 1,
                        "scaleY": 1
                    }
                }
            ];
            object.scaleX = object.scaleY = 1;
            var total: number = total ? total : 1000;
            TweenEffectUtil.start(object, attr, delay, total, easeFunName, isLoop);
        }
        /**
         * 向上侧微弹
         * @param object 要做效果的对象
         * @param delay  延迟播放的时间
         * @param total  动画总时间
         * @param easeFunName 缓动方程
         * @param isLoop 是否循环
         */
        public static bounce(object: egret.DisplayObject, delay: number = 0, total: number = 0, easeFunName: string = "", isLoop: boolean = false): void
        {
            egret.Tween.removeTweens(object);
            var attr: Array<any> = [
                {
                    "percent": 0.4,
                    "attr": {
                        "anchorY": 0.1
                    }
                },
                {
                    "percent": 0.43,
                    "attr": {
                        "anchorY": 0.2
                    }
                },
                {
                    "percent": 0.7,
                    "attr": {
                        "anchorY": 0.1
                    }
                },
                {
                    "percent": 0.8,
                    "attr": {
                        "anchorY": 0
                    }
                },
                {
                    "percent": 0.9,
                    "attr": {
                        "anchorY": 0.04
                    }
                },
                {
                    "percent": 1,
                    "attr": {
                        "anchorY": 0
                    }
                }
            ];
            object.anchorOffsetY = 0;
            var total: number = total ? total : 500;
            TweenEffectUtil.start(object, attr, delay, total, easeFunName, isLoop);
        }
        /**
         * 放大微微晃动
         * @param object 要做效果的对象
         * @param delay  延迟播放的时间
         * @param total  动画总时间
         * @param easeFunName 缓动方程
         * @param isLoop 是否循环
         */
        public static bounceIn(object: egret.DisplayObject, delay: number = 0, total: number = 0, easeFunName: string = "", isLoop: boolean = false): void
        {
            egret.Tween.removeTweens(object);
            var attr: Array<any> = [
                {
                    "percent": 0.2,
                    "attr": {
                        "scaleX": 1.1,
                        "scaleY": 1.1
                    }
                },
                {
                    "percent": 0.4,
                    "attr": {
                        "scaleX": 0.9,
                        "scaleY": 0.9
                    }
                },
                {
                    "percent": 0.6,
                    "attr": {
                        "scaleX": 1.03,
                        "scaleY": 1.03,
                        "alpha": 1
                    }
                },
                {
                    "percent": 0.8,
                    "attr": {
                        "scaleX": 0.97,
                        "scaleY": 0.97
                    }
                },
                {
                    "percent": 1,
                    "attr": {
                        "scaleX": 1,
                        "scaleY": 1,
                        "alpha": 1
                    }
                }
            ];
            object.alpha = 0;
            object.scaleX = object.scaleY = 0.3;
            var total: number = total ? total : 500;
            TweenEffectUtil.start(object, attr, delay, total, easeFunName, isLoop);
        }
        /**
         * 从下侧晃动入场
         * @param object 要做效果的对象
         * @param delay  延迟播放的时间
         * @param total  动画总时间
         * @param easeFunName 缓动方程
         * @param isLoop 是否循环
         */
        public static bounceInDown(object: egret.DisplayObject, delay: number = 0, total: number = 0, easeFunName: string = "", isLoop: boolean = false): void
        {
            egret.Tween.removeTweens(object);
            var attr: Array<any> = [
                {
                    "percent": 0.6,
                    "attr": {
                        "anchorOffsetY": 25,
                        "alpha": 1
                    }
                },
                {
                    "percent": 0.75,
                    "attr": {
                        "anchorOffsetY": -10,
                        "alpha": 1
                    }
                },
                {
                    "percent": 0.9,
                    "attr": {
                        "anchorOffsetY": 5,
                        "alpha": 1
                    }
                },
                {
                    "percent": 1,
                    "attr": {
                        "anchorOffsetY": 0,
                        "alpha": 1
                    }
                }
            ];
            object.alpha = 0;
            object.anchorOffsetY = - 3000;
            var total: number = total ? total : 1000;
            TweenEffectUtil.start(object, attr, delay, total, easeFunName, isLoop);
        }
        /**
         * 从下侧晃动入场
         * @param object 要做效果的对象
         * @param delay  延迟播放的时间
         * @param total  动画总时间
         * @param easeFunName 缓动方程
         * @param isLoop 是否循环
         */
        public static bounceInUp(object: egret.DisplayObject, delay: number = 0, total: number = 0, easeFunName: string = "", isLoop: boolean = false): void
        {
            egret.Tween.removeTweens(object);
            var attr: Array<any> = [
                {
                    "percent": 0.6,
                    "attr": {
                        "anchorOffsetY": 25,
                        "alpha": 1
                    }
                },
                {
                    "percent": 0.75,
                    "attr": {
                        "anchorOffsetY": -10,
                        "alpha": 1
                    }
                },
                {
                    "percent": 0.9,
                    "attr": {
                        "anchorOffsetY": 5,
                        "alpha": 1
                    }
                },
                {
                    "percent": 1,
                    "attr": {
                        "anchorOffsetY": 0,
                        "alpha": 1
                    }
                }
            ];
            object.alpha = 0;
            object.anchorOffsetY = 3000;
            var total: number = total ? total : 1000;
            TweenEffectUtil.start(object, attr, delay, total, easeFunName, isLoop);
        }
        /**
         * 从左侧晃动入场
         * @param object 要做效果的对象
         * @param delay  延迟播放的时间
         * @param total  动画总时间
         * @param easeFunName 缓动方程
         * @param isLoop 是否循环
         */
        public static bounceInLeft(object: egret.DisplayObject, delay: number = 0, total: number = 0, easeFunName: string = "", isLoop: boolean = false): void
        {
            egret.Tween.removeTweens(object);
            var attr: Array<any> = [
                {
                    "percent": 0.6,
                    "attr": {
                        "anchorOffsetX": 25,
                        "alpha": 1
                    }
                },
                {
                    "percent": 0.75,
                    "attr": {
                        "anchorOffsetX": -10,
                        "alpha": 1
                    }
                },
                {
                    "percent": 0.9,
                    "attr": {
                        "anchorOffsetX": 5,
                        "alpha": 1
                    }
                },
                {
                    "percent": 1,
                    "attr": {
                        "anchorOffsetX": 0,
                        "alpha": 1
                    }
                }
            ];
            object.alpha = 0;
            object.anchorOffsetX = - 3000;
            var total: number = total ? total : 1000;
            TweenEffectUtil.start(object, attr, delay, total, easeFunName, isLoop);
        }
        /**
         * 从右侧晃动入场
         * @param object 要做效果的对象
         * @param delay  延迟播放的时间
         * @param total  动画总时间
         * @param easeFunName 缓动方程
         * @param isLoop 是否循环
         */
        public static bounceInRight(object: egret.DisplayObject, delay: number = 0, total: number = 0, easeFunName: string = "", isLoop: boolean = false): void
        {
            egret.Tween.removeTweens(object);
            var attr: Array<any> = [
                {
                    "percent": 0.6,
                    "attr": {
                        "anchorOffsetX": 25,
                        "alpha": 1
                    }
                },
                {
                    "percent": 0.75,
                    "attr": {
                        "anchorOffsetX": -10,
                        "alpha": 1
                    }
                },
                {
                    "percent": 0.9,
                    "attr": {
                        "anchorOffsetX": 5,
                        "alpha": 1
                    }
                },
                {
                    "percent": 1,
                    "attr": {
                        "anchorOffsetX": 0,
                        "alpha": 1
                    }
                }
            ];
            object.alpha = 0;
            object.anchorOffsetX = 3000;
            var total: number = total ? total : 1000;
            TweenEffectUtil.start(object, attr, delay, total, easeFunName, isLoop);
        }
        /**
         * 微微放大再缩小淡出
         * @param object 要做效果的对象
         * @param delay  延迟播放的时间
         * @param total  动画总时间
         * @param easeFunName 缓动方程
         * @param isLoop 是否循环
         */
        public static bounceOut(object: egret.DisplayObject, delay: number = 0, total: number = 0, easeFunName: string = "", isLoop: boolean = false): void
        {
            egret.Tween.removeTweens(object);
            var attr: Array<any> = [
                {
                    "percent": 0.2,
                    "attr": {
                        "scaleX": 0.9,
                        "scaleY": 0.9
                    }
                },
                {
                    "percent": 0.5,
                    "attr": {
                        "scaleX": 1.1,
                        "scaleY": 1.1
                    }
                },
                {
                    "percent": 0.55,
                    "attr": {
                        "scaleX": 1.1,
                        "scaleY": 1.1
                    }
                },
                {
                    "percent": 1,
                    "attr": {
                        "scaleX": 0.3,
                        "scaleY": 0.3,
                        "alpha": 0
                    }
                }
            ];
            object.alpha = object.scaleX = object.scaleY = 1;
            var total: number = total ? total : 1000;
            TweenEffectUtil.start(object, attr, delay, total, easeFunName, isLoop);
        }
        /**
         * 向上侧快速出场
         * @param object 要做效果的对象
         * @param delay  延迟播放的时间
         * @param total  动画总时间
         * @param easeFunName 缓动方程
         * @param isLoop 是否循环
         */
        public static bounceOutUp(object: egret.DisplayObject, delay: number = 0, total: number = 0, easeFunName: string = "", isLoop: boolean = false): void
        {
            egret.Tween.removeTweens(object);
            var attr: Array<any> = [
                {
                    "percent": 0.2,
                    "attr": {
                        "anchorOffsetY": 25,
                        "alpha": 1
                    }
                },
                {
                    "percent": 0.40,
                    "attr": {
                        "anchorOffsetY": -20,
                        "alpha": 1
                    }
                },
                {
                    "percent": 0.45,
                    "attr": {
                        "anchorOffsetY": -20,
                        "alpha": 1
                    }
                },
                {
                    "percent": 1,
                    "attr": {
                        "anchorOffsetY": 2000,
                        "alpha": 0
                    }
                }
            ];
            object.alpha = 1;
            object.anchorOffsetY = 0;
            var total: number = total ? total : 1000;
            TweenEffectUtil.start(object, attr, delay, total, easeFunName, isLoop);
        }
        /**
         * 向下侧快速出场
         * @param object 要做效果的对象
         * @param delay  延迟播放的时间
         * @param total  动画总时间
         * @param easeFunName 缓动方程
         * @param isLoop 是否循环
         */
        public static bounceOutDown(object: egret.DisplayObject, delay: number = 0, total: number = 0, easeFunName: string = "", isLoop: boolean = false): void
        {
            egret.Tween.removeTweens(object);
            var attr: Array<any> = [
                {
                    "percent": 0.2,
                    "attr": {
                        "anchorOffsetY": -10,
                        "alpha": 1
                    }
                },
                {
                    "percent": 0.40,
                    "attr": {
                        "anchorOffsetY": 20,
                        "alpha": 1
                    }
                },
                {
                    "percent": 0.45,
                    "attr": {
                        "anchorOffsetY": 20,
                        "alpha": 1
                    }
                },
                {
                    "percent": 1,
                    "attr": {
                        "anchorOffsetY": -2000,
                        "alpha": 0
                    }
                }
            ];
            object.alpha = 1;
            object.anchorOffsetY = 0;
            var total: number = total ? total : 1000;
            TweenEffectUtil.start(object, attr, delay, total, easeFunName, isLoop);
        }
        /**
         * 向左侧快速出场
         * @param object 要做效果的对象
         * @param delay  延迟播放的时间
         * @param total  动画总时间
         * @param easeFunName 缓动方程
         * @param isLoop 是否循环
         */
        public static bounceOutLeft(object: egret.DisplayObject, delay: number = 0, total: number = 0, easeFunName: string = "", isLoop: boolean = false): void
        {
            egret.Tween.removeTweens(object);
            var attr: Array<any> = [
                {
                    "percent": 0.2,
                    "attr": {
                        "anchorOffsetX": -25,
                        "alpha": 1
                    }
                },
                {
                    "percent": 1,
                    "attr": {
                        "anchorOffsetX": 2000,
                        "alpha": 0
                    }
                }
            ];
            object.alpha = 1;
            object.anchorOffsetX = 0;
            var total: number = total ? total : 1000;
            TweenEffectUtil.start(object, attr, delay, total, easeFunName, isLoop);
        }
        /**
         * 向右侧快速出场
         * @param object 要做效果的对象
         * @param delay  延迟播放的时间
         * @param total  动画总时间
         * @param easeFunName 缓动方程
         * @param isLoop 是否循环
         */
        public static bounceOutRight(object: egret.DisplayObject, delay: number = 0, total: number = 0, easeFunName: string = "", isLoop: boolean = false): void
        {
            egret.Tween.removeTweens(object);
            var attr: Array<any> = [
                {
                    "percent": 0.2,
                    "attr": {
                        "anchorOffsetX": 25,
                        "alpha": 1
                    }
                },
                {
                    "percent": 1,
                    "attr": {
                        "anchorOffsetX": -2000,
                        "alpha": 0
                    }
                }
            ];
            object.alpha = 1;
            object.anchorOffsetX = 0;
            var total: number = total ? total : 1000;
            TweenEffectUtil.start(object, attr, delay, total, easeFunName, isLoop);
        }
        /**
         * 摇摆
         * @param object 要做效果的对象
         * @param delay  延迟播放的时间
         * @param total  动画总时间
         * @param easeFunName 缓动方程
         * @param isLoop 是否循环
         */
        public static swing(object: egret.DisplayObject, delay: number = 0, total: number = 0, easeFunName: string = "", isLoop: boolean = false): void
        {
            egret.Tween.removeTweens(object);
            var attr: Array<any> = [
                {
                    "percent": 0.2,
                    "attr": {
                        "rotation": 15
                    }
                },
                {
                    "percent": 0.4,
                    "attr": {
                        "rotation": -10
                    }
                },
                {
                    "percent": 0.6,
                    "attr": {
                        "rotation": 5
                    }
                },
                {
                    "percent": 0.8,
                    "attr": {
                        "rotation": -5
                    }
                },
                {
                    "percent": 1,
                    "attr": {
                        "rotation": 0
                    }
                }
            ];
            object.rotation = 0;
            var total: number = total ? total : 1000;
            TweenEffectUtil.start(object, attr, delay, total, easeFunName, isLoop);
        }
        /**
         * 微微放大到正常
         * @param object 要做效果的对象
         * @param delay  延迟播放的时间
         * @param total  动画总时间
         * @param easeFunName 缓动方程
         * @param isLoop 是否循环
         */
        public static scaleIn(object: egret.DisplayObject, delay: number = 0, total: number = 0, easeFunName: string = "", isLoop: boolean = false): void
        {
            egret.Tween.removeTweens(object);
            var attr: Array<any> = [
                {
                    "percent": 1,
                    "attr": {
                        "scaleX": 1,
                        "scaleY": 1,
                        "alpha": 1
                    }
                }
            ];
            object.alpha = 0;
            object.scaleX = object.scaleY = 1.2;
            var total: number = total ? total : 500;
            TweenEffectUtil.start(object, attr, delay, total, easeFunName, isLoop);
        }
        /**
         * 正常到微微放大淡出
         * @param object 要做效果的对象
         * @param delay  延迟播放的时间
         * @param total  动画总时间
         * @param easeFunName 缓动方程
         * @param isLoop 是否循环
         */
        public static scaleOut(object: egret.DisplayObject, delay: number = 0, total: number = 0, easeFunName: string = "", isLoop: boolean = false): void
        {
            egret.Tween.removeTweens(object);
            var attr: Array<any> = [
                {
                    "percent": 1,
                    "attr": {
                        "scaleX": 1.2,
                        "scaleY": 1.2,
                        "alpha": 0
                    }
                }
            ];
            object.alpha = 1;
            object.scaleX = object.scaleY = 1;
            var total: number = total ? total : 500;
            TweenEffectUtil.start(object, attr, delay, total, easeFunName, isLoop);
        }
        /**
         * 从大到小入场
         * @param object 要做效果的对象
         * @param delay  延迟播放的时间
         * @param total  动画总时间
         * @param easeFunName 缓动方程
         * @param isLoop 是否循环
         */
        public static scaleInBig(object: egret.DisplayObject, delay: number = 0, total: number = 0, easeFunName: string = "", isLoop: boolean = false): void
        {
            egret.Tween.removeTweens(object);
            var attr: Array<any> = [
                {
                    "percent": 1,
                    "attr": {
                        "scaleX": 1,
                        "scaleY": 1,
                        "alpha": 1
                    }
                }
            ];
            object.alpha = 0;
            object.scaleX = object.scaleY = 3;
            var total: number = total ? total : 500;
            easeFunName = "quadIn";
            TweenEffectUtil.start(object, attr, delay, total, easeFunName, isLoop);
        }
        /**
         * 从小到大淡出
         * @param object 要做效果的对象
         * @param delay  延迟播放的时间
         * @param total  动画总时间
         * @param easeFunName 缓动方程
         * @param isLoop 是否循环
         */
        public static scaleOutBig(object: egret.DisplayObject, delay: number = 0, total: number = 0, easeFunName: string = "", isLoop: boolean = false): void
        {
            egret.Tween.removeTweens(object);
            var attr: Array<any> = [
                {
                    "percent": 1,
                    "attr": {
                        "scaleX": 3,
                        "scaleY": 3,
                        "alpha": 0
                    }
                }
            ];
            object.alpha = 1;
            object.scaleX = object.scaleY = 1;
            var total: number = total ? total : 500;
            easeFunName = "quadIn";
            TweenEffectUtil.start(object, attr, delay, total, easeFunName, isLoop);
        }
        /**
         * 从右侧斜切入场
         * @param object 要做效果的对象
         * @param delay  延迟播放的时间
         * @param total  动画总时间
         * @param easeFunName 缓动方程
         * @param isLoop 是否循环
         */
        public static rightSpeedIn(object: egret.DisplayObject, delay: number = 0, total: number = 0, easeFunName: string = "", isLoop: boolean = false): void
        {
            egret.Tween.removeTweens(object);
            var attr: Array<any> = [
                {
                    "percent": 0.6,
                    "attr": {
                        "skewX": 20,
                        "alpha": 1,
                        "anchorX": -0.4
                    }
                },
                {
                    "percent": 0.8,
                    "attr": {
                        "skewX": -5,
                        "alpha": 1,
                        "anchorX": -0.2
                    }
                },
                {
                    "percent": 1,
                    "attr": {
                        "skewX": 0,
                        "alpha": 1,
                        "anchorX": 0
                    }
                }
            ];
            object.skewX = object.alpha = 0;
            object.anchorOffsetX = - 1;
            var total: number = total ? total : 1000;
            TweenEffectUtil.start(object, attr, delay, total, easeFunName, isLoop);
        }
        /**
         * 微微放大再复位
         * @param object 要做效果的对象
         * @param delay  延迟播放的时间
         * @param total  动画总时间
         * @param easeFunName 缓动方程
         * @param isLoop 是否循环
         */
        public static pluse(object: egret.DisplayObject, delay: number = 0, total: number = 0, easeFunName: string = "", isLoop: boolean = false): void
        {
            egret.Tween.removeTweens(object);
            var attr: Array<any> = [
                {
                    "percent": 0.5,
                    "attr": {
                        "scaleX": 1.1,
                        "scaleY": 1.1
                    }
                },
                {
                    "percent": 1,
                    "attr": {
                        "scaleX": 1,
                        "scaleY": 1
                    }
                }
            ];
            object.scaleX = object.scaleY = 1;
            var total: number = total ? total : 1000;
            TweenEffectUtil.start(object, attr, delay, total, easeFunName, isLoop);
        }
        /**
         * 微微摇摆
         * @param object 要做效果的对象
         * @param delay  延迟播放的时间
         * @param total  动画总时间
         * @param easeFunName 缓动方程
         * @param isLoop 是否循环
         */
        public static rotationFlash(object: egret.DisplayObject, delay: number = 0, total: number = 0, easeFunName: string = "", isLoop: boolean = false): void
        {
            egret.Tween.removeTweens(object);
            var attr: Array<any> = [
                {
                    "percent": 0.25,
                    "attr": {
                        "rotation": 5
                    }
                },
                {
                    "percent": 0.75,
                    "attr": {
                        "rotation": -5
                    }
                },
                {
                    "percent": 1,
                    "attr": {
                        "rotation": 0
                    }
                }
            ];
            object.rotation = 0;
            var total: number = total ? total : 1000;
            TweenEffectUtil.start(object, attr, delay, total, easeFunName, isLoop);
        }
        /**
         * 呼吸效果
         * @param object 要做效果的对象
         * @param delay  延迟播放的时间
         * @param total  动画总时间
         * @param easeFunName 缓动方程
         * @param isLoop 是否循环
         */
        public static breath(object: egret.DisplayObject, delay: number = 0, total: number = 0, easeFunName: string = "", isLoop: boolean = false): void
        {
            egret.Tween.removeTweens(object);
            var attr: Array<any> = [
                {
                    "percent": 0.25,
                    "attr": {
                        "scaleX": 0.92,
                        "scaleY": 0.92,
                        "alpha": 0.7
                    }
                },
                {
                    "percent": 0.5,
                    "attr": {
                        "scaleX": 1,
                        "scaleY": 1,
                        "alpha": 1
                    }
                },
                {
                    "percent": 0.75,
                    "attr": {
                        "scaleX": 0.92,
                        "scaleY": 0.92,
                        "alpha": 0.7
                    }
                },
                {
                    "percent": 1,
                    "attr": {
                        "scaleX": 1,
                        "scaleY": 1,
                        "alpha": 1
                    }
                }
            ];
            object.scaleX = object.scaleY = object.alpha = 1;
            var total: number = total ? total : 5000;
            TweenEffectUtil.start(object, attr, delay, total, easeFunName, isLoop);
        }
        /**
         * 向上快速移动再复原
         * @param object 要做效果的对象
         * @param delay  延迟播放的时间
         * @param total  动画总时间
         * @param easeFunName 缓动方程
         * @param isLoop 是否循环
         */
        public static shiftUp(object: egret.DisplayObject, delay: number = 0, total: number = 0, easeFunName: string = "", isLoop: boolean = false): void
        {
            egret.Tween.removeTweens(object);
            var attr: Array<any> = [
                {
                    "percent": 0.5,
                    "attr": {
                        "anchorY": 1
                    }
                },
                {
                    "percent": 1,
                    "attr": {
                        "anchorY": 0
                    }
                }
            ];
            object.anchorOffsetY = 0;
            var total: number = total ? total : 1000;
            TweenEffectUtil.start(object, attr, delay, total, easeFunName, isLoop);
        }
        /**
         * 向下快速移动再复原
         * @param object 要做效果的对象
         * @param delay  延迟播放的时间
         * @param total  动画总时间
         * @param easeFunName 缓动方程
         * @param isLoop 是否循环
         */
        public static shiftDown(object: egret.DisplayObject, delay: number = 0, total: number = 0, easeFunName: string = "", isLoop: boolean = false): void
        {
            egret.Tween.removeTweens(object);
            var attr: Array<any> = [
                {
                    "percent": 0.5,
                    "attr": {
                        "anchorY": - 1
                    }
                },
                {
                    "percent": 1,
                    "attr": {
                        "anchorY": 0
                    }
                }
            ];
            object.anchorOffsetY = 0;
            var total: number = total ? total : 1000;
            TweenEffectUtil.start(object, attr, delay, total, easeFunName, isLoop);
        }
        /**
         * 向上移动，放大 再复原
         * @param object 要做效果的对象
         * @param delay  延迟播放的时间
         * @param total  动画总时间
         * @param easeFunName 缓动方程
         * @param isLoop 是否循环
         */
        public static jump(object: egret.DisplayObject, delay: number = 0, total: number = 0, easeFunName: string = "", isLoop: boolean = false): void
        {
            egret.Tween.removeTweens(object);
            var attr: Array<any> = [
                {
                    "percent": 0.4,
                    "attr": {
                        "scaleX": 1.1,
                        "scaleY": 0.9,
                        "anchorY": 0.8
                    }
                },
                {
                    "percent": 0.55,
                    "attr": {
                        "scaleX": 1.8,
                        "scaleY": 0.2,
                        "anchorY": 0.9
                    }
                },
                {
                    "percent": 0.65,
                    "attr": {
                        "scaleX": 0.6,
                        "scaleY": 1.4,
                        "anchorY": 0.3
                    }
                },
                {
                    "percent": 1,
                    "attr": {
                        "scaleX": 1,
                        "scaleY": 1,
                        "anchorY": 0
                    }
                }
            ];
            object.anchorOffsetY = 0;
            object.scaleX = object.scaleY = 1;
            var total: number = total ? total : 2000;
            TweenEffectUtil.start(object, attr, delay, total, easeFunName, isLoop);
        }

        /**
         * 左右快速摇摆，暂停
         * @param object
         * @param angle
         * @param dutation
         * @param isLoop
         */
        public static rock(object: egret.DisplayObject, angle: number = 25, dutation: number = 70, isLoop: boolean = false): void
        {
            var _beginRotation: number = object.rotation;
            var _beginRotation1 = _beginRotation + 30;
            var _disx: number = Math.random() * 10 + 5;
            var oldX = object.x;
            egret.Tween.get(object, { loop: isLoop }).to({ x: oldX + _disx, rotation: angle + _beginRotation1 }, dutation).to({ x: oldX, rotation: _beginRotation1 }, dutation).to({ x: oldX - _disx, rotation: _beginRotation1 - angle }, dutation)
                .to({ rotation: _beginRotation1 }, dutation).to({ x: oldX, rotation: angle + _beginRotation1 }, dutation).to({ x: oldX + _disx, rotation: _beginRotation1 }, dutation).to({ x: oldX, rotation: _beginRotation }, dutation)
        }
        /**
         * 上下 左右浮动
         * @param object
         * @param duration
         * @param space
         * @param isLoop
         * @param direction 1上下浮动 其他
         */
        public static fly(object: egret.DisplayObject, duration: number = 500, space: number = 3, isLoop: boolean = true, direction: number = 1): void
        {
            var _oldX, _oldY;
            _oldX = object.x;
            _oldY = object.y;
            if (direction == 1)
            {
                egret.Tween.get(object, { loop: isLoop }).to({ y: (_oldY + space) }, duration).to({ y: _oldY }, duration).to({ y: (_oldY - space) }, duration).to({ y: _oldY }, duration);
            } else
            {
                egret.Tween.get(object, { loop: isLoop }).to({ x: (_oldX + space) }, duration).to({ x: _oldX }, duration).to({ x: (_oldX - space) }, duration).to({ x: _oldX }, duration);
            }

        }
        /**
         * @description 按钮点击效果
         */
        public static clickEffect(object: egret.DisplayObject): void
        {
            egret.Tween.get(object).to({ scaleX: 0.9, scaleY: 0.9 }, 100).to({ scaleX: 1, scaleY: 1 }, 80);
        }
        /**
         * 具体的动画实现
         * @param object
         * @param attr
         * @param delay
         * @param total
         * @param easeFunName
         * @param isLoop
         */
        private static start(object: egret.DisplayObject, attr: Array<any>, delay: number = 0, total: number = 0, easeFunName: string = "", isLoop: boolean = false)
        {
            egret.Tween.removeTweens(object);
            TweenEffectUtil.removeTimeout(object);
            var index: number = 0;
            var attr: Array<any> = attr;
            var total: number = total;
            var tweenTime: number = 0;
            if (easeFunName)
            {
                var easeFun: Function = eval("egret.Ease." + easeFunName);
            } else
            {
                easeFun = null;
            }

            let t = setTimeout(function loop()
            {
                if (index >= attr.length)
                {
                    if (isLoop)
                    {
                        index = 0;
                    } else
                    {
                        return;
                    }
                }
                if (index > 0)
                {
                    tweenTime = (attr[index]["percent"] - attr[index - 1]["percent"]) * total;
                } else
                {
                    tweenTime = attr[index]["percent"] * total;
                }
                egret.Tween.get(object).to(attr[index]["attr"], tweenTime, easeFun).call(loop, this);
                index++;
            }, delay);
            TweenEffectUtil.addTimeout(object, t);
        }

        private static _timeoutDic: Dictionary;
        private static addTimeout(object: egret.DisplayObject, t: number)
        {
            if (!TweenEffectUtil._timeoutDic) TweenEffectUtil._timeoutDic = new Dictionary();
            TweenEffectUtil._timeoutDic.set(object, t);
        }

        public static removeTimeout(object: egret.DisplayObject)
        {
            if (TweenEffectUtil._timeoutDic)
            {
                let t = TweenEffectUtil._timeoutDic.get(object);
                if (t > 0) clearInterval(t);
            }
        }

        /**
         * 向前缓动 模拟走路效果
         * @param target 缓动目标
         * @param isLoop 是否循环
         * @param offY 上下偏移量
         * @param time 缓动时间
         */
        public static walk(target: egret.DisplayObject, isLoop: boolean, offY: number = 8, time: number = 180): void
        {
            var oldx = target.y;
            var upPos: number = oldx - 30;
            var downPos: number = oldx + 10;

            egret.Tween.get(target, { loop: isLoop }).
                to({ y: downPos, scaleX: 1.07, scaleY: 1.07 }, time).
                to({ y: upPos }, time + 20).
                to({ y: upPos, scaleX: 1, scaleY: 1 }, 30).
                to({ y: oldx }, time).wait(30);
        }

        /** 紫色卡牌呼吸效果 */
        public static breathe(object: egret.DisplayObject, delay: number = 0, total: number = 0, easeFunName: string = "", isLoop: boolean = false): void
        {
            // egret.Tween.removeTweens(object);
            TweenEffectUtil.removeTimeout(object);
            let oldx = object.scaleX;
            let oldy = object.scaleY;
            var attr: Array<any> = [
                {
                    "percent": 0.25,
                    "attr": {
                        "scaleX": 0.95 * oldx,
                        "scaleY": 0.95 * oldy,
                    }
                },
                {
                    "percent": 0.5,
                    "attr": {
                        "scaleX": oldx,
                        "scaleY": oldy,
                    }
                },
                {
                    "percent": 0.75,
                    "attr": {
                        "scaleX": 0.95 * oldx,
                        "scaleY": 0.95 * oldy,
                    }
                },
                {
                    "percent": 1,
                    "attr": {
                        "scaleX": oldx,
                        "scaleY": oldy,
                    }
                }
            ];
            object.scaleX = oldx;
            object.scaleY = oldy;
            var total: number = total ? total : 5000;
            TweenEffectUtil.start(object, attr, delay, total, easeFunName, isLoop);
        }

        /**
         * 震屏2
         * @param object 要做效果的对象
         * @param delay  延迟播放的时间
         * @param total  动画总时间
         * @param easeFunName 缓动方程
         * @param isLoop 是否循环
         */
        public static shake2(object: egret.DisplayObject, total: number = 200, easeFunName: string = ""): void
        {
            egret.Tween.removeTweens(object);

            let time = Math.floor(total / 50);
            let oldx = object.x;
            let oldy = object.y;
            let tox1 = oldx - 3;
            let tox2 = oldx + 3;
            let toy1 = oldy - 3;
            let toy2 = oldy + 3;
            let tzero = {
                "percent": 1, "attr": {
                    "x": oldx,
                    "y": oldy
                }
            };

            let t = time + 1;
            var attr: Array<any> = [];
            let toj: Object;
            let pc: number = 0;
            for (var i = 1; i <= time; i++)
            {
                pc = parseFloat((i / t).toFixed(2));
                toj = { "percent": pc };
                if (i % 2 == 1)
                {
                    toj["attr"] = { "x": tox1, "y": toy1 };
                }
                else
                {
                    toj["attr"] = { "x": tox2, "y": toy2 };
                }
                attr.push(toj);
            }
            attr.push(tzero);
            var total: number = total ? total : 200;
            TweenEffectUtil.start(object, attr, 0, total, easeFunName, false);
        }

        public static stopWalk(target: egret.DisplayObject, time: number = 180): void
        {
            egret.Tween.removeTweens(target);
            egret.Tween.get(target).to({ x: 0, y: 0 }, time);
        }

        /**
         * 卡牌原地远程攻击
         */
        public static attack(target: egret.DisplayObject, offY: number = 20, time: number = 200): void
        {
            var oldy = target.y;
            var pos: number = oldy - offY;
            egret.Tween.removeTweens(target);
            egret.Tween.get(target).to({ y: pos, scaleX: 1.1, scaleY: 1.1 }, time, egret.Ease.quintOut).to({ y: oldy, scaleX: 1, scaleY: 1 }, time * 1.5, egret.Ease.quadOut);
        }

        /** 卡牌近战攻击 */
        public static attack2(object: egret.DisplayObject, time: number = 200): void
        {
            var _beginRotation1 = 30;
            var _beginRotation2 = -45;
            var _beginRotation3 = 25;
            var oldX = object.x;
            var oldY = object.y;
            var tx1 = oldX + 20;
            var ty1 = oldY + 10;
            var tx2 = oldX - 20;
            var ty2 = oldY - 40;
            egret.Tween.get(object).
                to({ x: tx1, y: ty1, rotation: _beginRotation1, scaleX: 0.7, scaleY: 0.7 }, time * 0.5).
                to({ x: tx2, y: ty2, rotation: _beginRotation2, scaleX: 1.1, scaleY: 1.1 }, time * 0.5).
                to({ x: oldX, y: oldY, rotation: _beginRotation3, scaleX: 1, scaleY: 1 }, time * 0.8).
                to({ rotation: 0 }, time * 0.3)
        }

        /** 卡牌受击 */
        public static playHit(target: egret.DisplayObject, time: number = 100, offset: number = 20): void
        {
            var oldx = target.x;
            var oldy = target.y;
            var toPosx: number = oldx + offset;
            var toPosy: number = oldy + offset;
            var toPosx2: number = oldx - offset;
            var toPosy2: number = oldy - offset;
            egret.Tween.removeTweens(target);
            egret.Tween.get(target).
                to({ x: toPosx, y: toPosy }, time).
                to({ x: toPosx2, y: toPosy2 }, time, egret.Ease.cubicInOut).
                to({ x: oldx, y: oldy }, time)
        }

        /**
         * Npc 左右上下走动
         * @param object
         * @param duration
         * @param space
         * @param isLoop
         */
        public static npcfly(object: egret.DisplayObject, duration: number = 500, spacex: number = 3, spacey: number = 3, isLoop: boolean, npc: eui.Group): egret.Tween
        {
            console.log("npcfly............");
            var _oldX, _oldY;
            _oldX = object.x;
            _oldY = object.y;
            function changeNpcScale(targetScaleX: number)
            {
                npc.scaleX = targetScaleX;
            }
            let tween: egret.Tween = egret.Tween.get(object, { loop: isLoop })
            .to({ y: spacey, x: spacex }, duration).wait(300).call(changeNpcScale, this, [-1]).wait(300)
            .to({ y: 900, x: 200 }, duration).wait(300)
            .to({ y: 400, x: 700 }, duration).wait(300).call(changeNpcScale, this, [1]).wait(300)
            .to({ y: 1200, x: 350 }, duration).wait(300).call(changeNpcScale, this, [-1]).wait(300)
            .to({ y: _oldY, x: _oldX }, duration).wait(300).call(changeNpcScale, this, [1]).wait(300);
            return tween;
        }

        /** 快速放大，暂停一会儿后，恢复原来大小，再停留一会儿后消失 */
        public static quiclyLargenThenResetSizeThenDisappear(disObject: egret.DisplayObject, largenTime: number,
            afterLargenWaitTime: number, resetSizeTime: number, afterResetWaitTime: number): boolean
        {
            disObject.scaleX = 0;
            disObject.scaleY = 0;
            let t = this;
            egret.Tween.get(disObject).to({ scaleX: 1.3, scaleY: 1.3 }, largenTime).wait(afterLargenWaitTime).
                to({ scaleX: 1, scaleY: 1 }, resetSizeTime).wait(afterResetWaitTime).call(() =>
                {
                    egret.Tween.removeTweens(disObject);
                    disObject.parent.removeChild(disObject);
                }, t);

            return true;
        }

        /**生成一个屏幕中间往上飘的图片提示 */
        public static generateImageTip(res: string): void
        {
            let img = new eui.Image(res);

            let t = this;
            img.addEventListener(egret.Event.COMPLETE, () =>
            {
                img.x = StageUtil.stageWidth / 2 - img.width / 2;
                img.y = StageUtil.stageHeight / 2;
                let targetY = StageUtil.stageHeight / 3;

                egret.Tween.get(img).to({ y: targetY }, 1000).call(() =>
                {
                    egret.Tween.removeTweens(img);
                    img.parent.removeChild(img);
                }, t)
            }, t);

            StageUtil.stage.addChild(img);

        }

        /** 特效对象池 */
        public static effectPool = {};

        public static createBullet(content: string): eui.Label
        {
            let t = this;
            let bulletScreenPool: eui.Label[] = TweenEffectUtil.effectPool["bulletScreenPool"];
            if (!bulletScreenPool)
            {
                bulletScreenPool = TweenEffectUtil.effectPool["bulletScreenPool"] = [];
            }

            let bulletScreen: eui.Label;
            if (bulletScreenPool.length > 0)
            {
                bulletScreen = bulletScreenPool.pop();
                bulletScreen.text = content;
                LogUtil.log("createBullet bulletScreenPool pop", bulletScreenPool);

                return bulletScreen;
            }

            bulletScreen = new eui.Label(content);
            bulletScreen.fontFamily = "specialGameFont";
            bulletScreen.stroke = 1;
            bulletScreen.strokeColor = 0x803f07;
            bulletScreen.size = 26;
            bulletScreen.touchEnabled = false;
            bulletScreen.addEventListener(egret.Event.REMOVED_FROM_STAGE, (e: egret.Event) =>
            {
                if(e.currentTarget.parent){
                    e.currentTarget.parent.removeChild(e.currentTarget);
                }
                egret.Tween.removeTweens(e.currentTarget);
                TweenEffectUtil.releaseBullet(e.currentTarget);
            }, t);

            LogUtil.log("createBullet bulletScreenPool createBullet", bulletScreen);
            return bulletScreen;
        }

        public static releaseBullet(bulletScreen: eui.Label): void
        {
            let bulletScreenPool: eui.Label[] = TweenEffectUtil.effectPool["bulletScreenPool"];
            // if (!bulletScreenPool)
            // {
            //     bulletScreenPool = [];
            // }
            bulletScreenPool.push(bulletScreen);
            LogUtil.log("releaseBullet bulletScreenPool", bulletScreenPool);
        }

        /** 生成一个弹幕 */
        public static generateBulletScreen(content: string, parent: egret.DisplayObjectContainer = null): void
        {
            if (!parent)
            {
                parent = StageUtil.stage;
            }
            let t = this;
            // let label = new eui.Label(content);
            // label.fontFamily = "specialGameFont";
            // label.stroke = 1;
            // label.strokeColor = 0x803f07;
            // label.size = 22;
            // label.touchEnabled = false;

            let bulletScreen = TweenEffectUtil.createBullet(content);

            let initX = StageUtil.stage.stageWidth;
            let initY = Math.random() * (StageUtil.stage.stageHeight * 0.6) + StageUtil.stage.stageHeight * 0.2;
            bulletScreen.x = initX;
            bulletScreen.y = initY;

            let targetX = 0 - bulletScreen.width;content.length
            let moveTime = 5000 + content.length * 70;

            egret.Tween.get(bulletScreen).to({ x: targetX }, moveTime).call(() =>
            {
                egret.Tween.removeTweens(bulletScreen);
                bulletScreen.parent.removeChild(bulletScreen);
            }, t);

            parent.addChild(bulletScreen);

        }
    }

}