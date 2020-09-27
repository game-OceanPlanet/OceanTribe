module qmr
{
	/**
	 * @description (9)远程，播放一个弹道效果之后在2和5、8和11之间释放一个效果
	 */
    export class SkillAction9Proxy extends BaseSkillProxy
    {
        public targetList: Array<BaseMoverActor>;
        private tid: number;
        private dropPos: any;
        public constructor()
        {
            super();
            this.targetList = [];
            this.dropPos = {};
        }

        public static getSkillProxy(): SkillAction9Proxy
        {
            var proxy: SkillAction9Proxy = Pool.getItemByClass("SkillAction9Proxy", SkillAction9Proxy);
            return proxy;
        }

        public static recovrySkillProxy(proxy: SkillAction9Proxy): void
        {
            Pool.recover("SkillAction9Proxy", proxy);
        }

        /** 释放技能 */
        public releaseSkill(): void
        {
            super.releaseSkill();
            //起手特效
            this.onCastSkill();
        }

        /** 起手特效 */
        private onCastSkill(): void
        {
            if (this.canShowEffect)
            {
                this.owner.changeStatus(Status.ATTACK, true);
                //添加施法效果
                if (this.skillEffectCfg.cast_effect > 0)
                {
                    this.caseEffect = EffectPlayer.playEffect(this.skillEffectCfg.cast_effect, this.owner, -1, this.timeScale);
                     let effectData: EffectDataCfg = EffectModel.instance.getEffectData(this.skillEffectCfg.cast_effect);
                    if (this.caseEffect && effectData.needOverturn > 0)
                    {
                        let dir = (this.owner.camp == CampType.OUR) ? 1 : -1;
                        this.caseEffect.scaleY *= dir;
                    }
                }

                //施法展示时间
                var castShowTime = this.skillEffectCfg.cast_showTime / this.timeScale;
                if (castShowTime > 0)
                {
                    FightTimer.instance.registerTick(this.removeCaseEffect, this, castShowTime, 1);
                }

                var castTime = this.skillEffectCfg.cast_time / this.timeScale;
                if (castTime > 0)
                {
                    FightTimer.instance.registerTick(this.onReleaseSkillEffect, this, castTime, 1);
                }
                else
                {
                    this.onReleaseSkillEffect();
                }
            }
        }

        /** 表现特效 */
        protected onReleaseSkillEffect(): void
        {
            let isEnd: boolean;
            if (this.skillEffectCfg.show_effect > 0)
            {
                //群体同时播放特效
                if (this.targetList.length > 0)
                {
                    let targetActor = this.targetList[0];
                    if (targetActor)
                    {
                        var effect: BaseEffect = EffectPlayer.playEffect(this.skillEffectCfg.show_effect, this.owner, -1, this.timeScale);
                        if (effect)
                        {
                            this.getCenterPos(targetActor.camp);
                            var dx = this._centerPos.x - this.owner.x;
                            var dy = this._centerPos.y - this.owner.y;

                            let effCfg: SkillEffectCfg = SkillModel.instance.getSkillEffectDataBySkillId(this.skillId);
                            effect.speed = effCfg ? effCfg.speed * this.timeScale : 0;
                            effect.rotation = Math.atan2(dy, dx) * 180 / Math.PI;
                            effect.moveTo(this._centerPos.x, this._centerPos.y, this.onArrival, this, [effect]);
                            this.addTempEffect(effect);

                            //表现持续时间
                            var showDurotion = this.skillEffectCfg.show_durotion / this.timeScale;
                            if (showDurotion > 0)
                            {
                                FightTimer.instance.registerTick(this.removeAllTempEffect, this, showDurotion, 1);
                            }
                        }
                        else
                        {
                            LogUtil.warn("表现特效不存在，需要策划在（特效_EffectData表格）里面配置一下 " + this.skillEffectCfg.show_effect)
                            this.onArrival([targetActor]);
                        }
                    }
                    else
                    {
                        LogUtil.warn("技能9：群体同时播放特效目标不存在，技能id:" + this.skillId)
                        isEnd = true;
                    }
                }
                else
                {
                    isEnd = true;
                    LogUtil.warn("技能9：群体同时播放特效目标不存在")
                }
            }
            else
            {
                isEnd = true;
            }
            if (isEnd)
            {
                this.onReleaseSkillEffect2();
            }
        }

        /** 到达目标地点 */
        private onArrival(args: any[])
        {
            let effect: BaseEffect = args[0];
            if (effect)
            {
                effect.dispos();
            }
            this.onReleaseSkillEffect2();
        }

        /** 表现特效 */
        protected onReleaseSkillEffect2(): void
        {
            var effect: BaseEffect = EffectPlayer.playEffect(this.skillEffectCfg.orderly_effect, this._centerPos, -1, this.timeScale);
            this.addTempEffect(effect);

            //多段伤害
            if (this.skillEffectCfg.multistage)
            {
                let mulits: MultiRateVo[] = SkillModel.instance.getMultiDatas(this.skillEffectCfg.multistage);
                this.mulitCount = mulits.length;
                let element: MultiRateVo;
                for (var i = 0; i < this.mulitCount; i++)
                {
                    element = mulits[i];
                    if (element)
                    {
                        FightTimer.instance.registerTick(this.mulitHuttFunc[i], this, element.time / this.timeScale, 1, element.rate);
                    }
                }
            }
            else
            {
                var show_time = this.skillEffectCfg.show_time / this.timeScale;
                if (show_time > 0)
                {
                    FightTimer.instance.registerTick(this.onShowHitEffect, this, show_time, 1);
                }
                else
                {
                    this.onShowHitEffect();
                }
            }
        }

        private _centerPos: egret.Point;
        // 找出上下阵营的中心点
        private getCenterPos(type: CampType)
        {
            // if (!this._centerPos) this._centerPos = new egret.Point();
            // var up = type == CampType.FOE ? 5 : 2;
            // var down = type == CampType.FOE ? 2 : 5;
            // var pos1 = BattlePosionManager.instance.getPosByType(type, up);
            // var pos2 = BattlePosionManager.instance.getPosByType(type, down);
            // this._centerPos.x = pos1.x;
            // this._centerPos.y = pos1.y + ((pos2.y - pos1.y) >> 1);
        }


        /** 表现特效播放完毕后 */
        protected onShowHitEffect(rate: number = 1, isPlayEnd: boolean = true): void
        {
            let count = this.targetList.length;
            if (this.skillEffectCfg.hit_effect > 0)
            {
                for (let i = 0; i < count; i++)
                {
                    let targetActor = this.targetList[i];
                    if (targetActor)
                    {
                        EffectPlayer.playEffect(this.skillEffectCfg.hit_effect, targetActor, -1, this.timeScale, true);
                        SceneManager.instance.onAttackResultBack(targetActor, this.targetFighterMsg[i])
                    }
                    else
                    {
                        LogUtil.warn("技能8：受击列表中目标不存在，技能id:" + this.skillId)
                    }
                }
            }
            if (isPlayEnd)
            {
                FightTimer.instance.registerTick(this.onPlayEnd, this, 300 / this.timeScale, 1);
            }
        }

        /**  本轮技能释放完毕 */
        private onPlayEnd(): void
        {
            if (this.owner) this.owner.onSkilReleaselOver();
            this.recycleSkill();
        }

		/** 回收技能，需被子类继承
		 */
        public recycleSkill(): void
        {
            this.targetList.length = 0;
            this.canShowEffect = false;
            FightTimer.instance.unRegisterTick(this.removeCaseEffect, this);
            FightTimer.instance.unRegisterTick(this.removeAllTempEffect, this);
            FightTimer.instance.unRegisterTick(this.onReleaseSkillEffect, this);
            FightTimer.instance.unRegisterTick(this.onShowHitEffect, this);
            FightTimer.instance.unRegisterTick(this.onPlayEnd, this);
            super.recycleSkill();

            SkillAction9Proxy.recovrySkillProxy(this);
        }
    }
}