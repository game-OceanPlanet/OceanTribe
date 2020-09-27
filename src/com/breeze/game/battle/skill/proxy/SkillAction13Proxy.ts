module qmr
{
	/**
	 * @description (13)远程，子弹连发,多段攻击
	 */
    export class SkillAction13Proxy extends BaseSkillProxy
    {
        public targetList: Array<BaseMoverActor>;
        public tempTargetList: Array<BaseMoverActor>;
        private tid: number;
        private dropPos: any;
        private flyCount: number;
        public constructor()
        {
            super();
            this.targetList = [];
            this.tempTargetList = [];
            this.dropPos = {};
            this.flyCount = 0;
        }

        public static getSkillProxy(): SkillAction13Proxy
        {
            var proxy: SkillAction13Proxy = Pool.getItemByClass("SkillAction13Proxy", SkillAction13Proxy);
            return proxy;
        }

        public static recovrySkillProxy(proxy: SkillAction13Proxy): void
        {
            Pool.recover("SkillAction13Proxy", proxy);
        }

        /** 释放技能 */
        public releaseSkill(): void
        {
            super.releaseSkill();
            this.onCastSkill();
        }

        /** 起手特效 */
        private onCastSkill(): void
        {
            if (this.canShowEffect)
            {
                this.owner.changeStatus(Status.ATTACK, true);
                if (this.skillEffectCfg.cast_effect > 0)
                {
                    this.caseEffect = EffectPlayer.playEffect(this.skillEffectCfg.cast_effect, this.owner, -1, this.timeScale);
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
                    FightTimer.instance.unRegisterTick(this.onReleaseSkillEffect, this);
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
            let self = this;
            if (self.skillEffectCfg.show_effect > 0)
            {
                //群体同时播放特效
                self.flyCount = 0;
                for (let targetActor of self.targetList)
                {
                    if (targetActor)
                    {
                        // LogUtil.warn("施法了 " + self.flyCount)
                        var effect: BaseEffect = EffectPlayer.playEffect(self.skillEffectCfg.show_effect, self.owner, -1, self.timeScale);
                        if (effect)
                        {
                            self.flyCount++;
                            var dx = targetActor.x - self.owner.x;
                            var dy = targetActor.y - self.owner.y;


                            let effCfg: SkillEffectCfg = SkillModel.instance.getSkillEffectDataBySkillId(self.skillId);
                            let t = self.timeScale > 1 ? self.timeScale * 1.3 : 1;
                            let speed = effCfg ? Math.floor(effCfg.speed * t) : 0;
                            effect.speed = speed;
                            let rotation = Math.atan2(dy, dx) * 180 / Math.PI;
                            effect.rotation = rotation;
                            let onArrival = self.onArrival;
                            let target = targetActor;
                            effect.moveTo(targetActor.x, targetActor.y, onArrival, self, [target, effect]);
                            self.addTempEffect(effect);
                            //如果特效没返回到达目的地，去找一下特效表里面，特效配置的播放次数是否满足到达时间

                            if (effCfg.multiTimes)
                            {
                                let timsArr = effCfg.multiTimes.split(",").map(Number);
                                let count = timsArr[0];
                                let time = timsArr[1];
                                for (var i = 1; i < count; i++)
                                {

                                    let delayRemove = function (args: BaseEffect[])
                                    {
                                        if (!args || args.length < 1)
                                        {
                                            return;
                                        }
                                        let effect: BaseEffect = args[0];
                                        if (effect)
                                        {
                                            effect.dispos();
                                        }
                                    }

                                    let delayCall = function ()
                                    {
                                        if (self.canShowEffect)
                                        {
                                            effect = EffectPlayer.playEffect(self.skillEffectCfg.show_effect, self.owner, -1, self.timeScale);
                                            effect.speed = speed;
                                            effect.rotation = rotation;
                                            effect.moveTo(targetActor.x, targetActor.y, delayRemove, self, [effect]);
                                            self.addTempEffect(effect);
                                        }
                                    }

                                    FightTimer.instance.registerTick(delayCall, self, i * time / self.timeScale, 1);
                                }
                            }
                            else
                            {
                                LogUtil.warn("表现特效不存在，需要策划在（特效_EffectData表格）里面配置一下 " + self.skillEffectCfg.show_effect)
                                self.onArrival([targetActor]);
                            }
                        }
                        else
                        {
                            LogUtil.warn("技能3：受击列表中目标不存在，技能id:" + self.skillId)
                            self.onArrival(null);
                        }
                    }
                    LogUtil.logF("群体同时播放特效 " + self.targetList.length)
                }
            }
        }

        /** 到达目标地点 */
        private onArrival(args: any[])
        {
            let self = this;
            LogUtil.logF("群体同时播放特效")
            if (!args || args.length < 1)
            {
                self.onShowHitEffect();
                return;
            }
            let targetActor: BaseMoverActor = args[0];
            let effect: BaseEffect = args[1];
            if (effect)
            {
                effect.dispos();
            }
            if (targetActor instanceof BaseMoverActor)
            {
                self.tempTargetList.push(targetActor);
            }

            //多段伤害
            if (self.skillEffectCfg.multistage)
            {
                let mulits: MultiRateVo[] = SkillModel.instance.getMultiDatas(self.skillEffectCfg.multistage);
                self.mulitCount = mulits.length;
                let element: MultiRateVo;
                for (var i = 0; i < self.mulitCount; i++)
                {
                    element = mulits[i];
                    if (element)
                    {
                        FightTimer.instance.registerTick(self.mulitHuttFunc[i], self, element.time / self.timeScale, 1, element.rate);
                    }
                }
            }
            else
            {
                var show_time = self.skillEffectCfg.show_time / self.timeScale;
                if (show_time > 0)
                {
                    FightTimer.instance.unRegisterTick(self.onShowHitEffect, self);
                    FightTimer.instance.registerTick(self.onShowHitEffect, self, show_time, 1);
                }
                else
                {
                    self.onShowHitEffect();
                }
            }
        }

        /** 表现特效播放完毕后 */
        protected onShowHitEffect(rate: number = 1, isPlayEnd: boolean = true): void
        {
            let self = this;
            let count = self.targetList.length;
            if (self.skillEffectCfg.hit_effect > 0)
            {
                for (let i = 0; i < count; i++)
                {
                    let targetActor = self.targetList[i];
                    if (targetActor)
                    {
                        EffectPlayer.playEffect(self.skillEffectCfg.hit_effect, targetActor, -1, self.timeScale, true);
                        SceneManager.instance.onAttackResultBack(targetActor, self.targetFighterMsg[i], rate);
                    }
                    else
                    {
                        LogUtil.warn("技能13：受击列表中目标不存在，技能id:" + self.skillId)
                    }
                }
            }

            if (isPlayEnd)
            {
                self.flyCount++;
                LogUtil.logF("群体同时受击结束 " + self.flyCount)
            }

            // 避免有点远程特效还没飞到目标位置就结束了，不飘受击特效了。。。
            var delay = (self.flyCount < count) ? 1000 : 300;
            delay /= self.timeScale;
            FightTimer.instance.unRegisterTick(self.onPlayEnd, self);
            FightTimer.instance.registerTick(self.onPlayEnd, self, delay, 1);
        }

        private getFightMsg(id: number)
        {
            if (!this.targetFighterMsg) return null;
            for (let t of this.targetFighterMsg)
            {
                if (t.fighterId == id)
                {
                    return t;
                }
            }
            return null;
        }

        /**  本轮技能释放完毕 */
        private onPlayEnd(): void
        {
            LogUtil.logF("本轮技能释放完毕 " + this.flyCount)
            if (this.owner) this.owner.onSkilReleaselOver();
            this.recycleSkill();
        }

		/** 回收技能，需被子类继承
		 */
        public recycleSkill(): void
        {
            let self = this;
            self.flyCount = 0;
            self.targetList.length = 0;
            self.tempTargetList.length = 0;
            self.canShowEffect = false;
            FightTimer.instance.unRegisterTick(self.removeCaseEffect, self);
            FightTimer.instance.unRegisterTick(self.onReleaseSkillEffect, self);
            FightTimer.instance.unRegisterTick(self.onShowHitEffect, self);
            FightTimer.instance.unRegisterTick(self.onPlayEnd, self);
            super.recycleSkill();

            SkillAction13Proxy.recovrySkillProxy(self);
        }
    }
}