module qmr
{
	/**
	 * @description (6)远程，闪攻击，目标依次受击
	 */
    export class SkillAction6Proxy extends BaseSkillProxy
    {
        public targetList: Array<BaseMoverActor>;
        private tid: number;
        private dropPos: any;
        private delayTime = 500;//延迟之后，外围再受击
        private targetIndex: number = 0;//受击顺序
        private chainEffects: BaseEffect[];//闪电链

        public constructor()
        {
            super();
            this.targetList = [];
            this.chainEffects = [];
            this.dropPos = {};
        }

        public static getSkillProxy(): SkillAction6Proxy
        {
            var proxy: SkillAction6Proxy = Pool.getItemByClass("SkillAction6Proxy", SkillAction6Proxy);
            return proxy;
        }

        public static recovrySkillProxy(proxy: SkillAction6Proxy): void
        {
            Pool.recover("SkillAction6Proxy", proxy);
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
                    this.caseEffect = EffectPlayer.playEffect(this.skillEffectCfg.cast_effect, this.owner, -1, this.owner.timeScale);
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
            if (this.skillEffectCfg.show_effect > 0)
            {
                this.targetIndex = 0;
                LogUtil.logF("loopShowEffect : " + this.targetIndex + " " + this.targetList.length)
                this.loopShowEffect();
            }
            else
            {
                this.onPlayEnd();
            }
        }

        private loopShowEffect()
        {
            if (this.targetIndex >= this.targetList.length)
            {
                this.onPlayEnd();
                FightTimer.instance.unRegisterTick(this.loopShowEffect, this);
                return;
            }
            else
            {
                let targetActor = this.targetList[this.targetIndex];
                let targetState = this.targetFighterMsg[this.targetIndex];
                if (targetActor)
                {
                    let startActor: BaseMoverActor;
                    let endActor: BaseMoverActor;
                    let showEffect: number;
                    if (this.targetIndex == 0)
                    {
                        startActor = this.owner;
                        endActor = targetActor;
                        showEffect = this.skillEffectCfg.show_effect;
                    }
                    else
                    {
                        startActor = this.targetList[this.targetIndex - 1];
                        endActor = this.targetList[this.targetIndex];
                        showEffect = this.skillEffectCfg.orderly_effect;
                    }

                    let timeScale = endActor.timeScale;
                    if (startActor)
                    {
                        var dist: number = MathUtil.distance(startActor, endActor);
                        var dx = endActor.x - startActor.x;
                        var dy = endActor.y - startActor.y;
                        let effect: BaseEffect = EffectPlayer.playEffect(showEffect, startActor, -1, timeScale, true);
                        effect.effectWidth = dist;
                        effect.rotation = Math.atan2(dy, dx) * 180 / Math.PI;
                        this.chainEffects.push(effect);
                    }

                    let isShow = this.canShowEffect;
                    let hit_effect = this.skillEffectCfg.hit_effect;
                    let fighterMsg = this.targetFighterMsg[this.targetIndex]

                    //展示受击
                    let delayShowHitEffect = function ()
                    {
                        if (isShow)
                        {
                            if (hit_effect > 0)
                            {
                                if (endActor)
                                {
                                    EffectPlayer.playEffect(hit_effect, endActor, -1, timeScale, true);
                                    SceneManager.instance.onAttackResultBack(endActor, fighterMsg);
                                }
                            }
                        }
                    }
                    FightTimer.instance.registerTick(delayShowHitEffect, this, this.skillEffectCfg.show_time / this.timeScale, 1);
                }
                else
                {
                    LogUtil.warn("技能6：受击列表中目标不存在，技能id:" + this.skillId)
                }
            }

            //依次延迟
            this.targetIndex++;
            FightTimer.instance.unRegisterTick(this.loopShowEffect, this);
            FightTimer.instance.registerTick(this.loopShowEffect, this, this.delayTime / this.timeScale, 1);
            LogUtil.logF("this.targetIndex : " + this.targetIndex);
        }

        /**  本轮技能释放完毕 */
        private onPlayEnd(): void
        {
            if (this.owner) this.owner.onSkilReleaselOver();
            this.recycleSkill();
        }

        //移除闪电
        private removeChain()
        {
            LogUtil.logF("闪电之后结束")
            if (this.chainEffects.length > 0)
            {
                for (let e of this.chainEffects)
                {
                    LogUtil.logF("闪电之后结束,销毁特效" + this.skillId)
                    e.dispos();
                }
                this.chainEffects.length = 0;
            }
        }

		/** 回收技能，需被子类继承
		 */
        public recycleSkill(): void
        {
            this.removeChain();
            this.targetIndex = 0;
            this.targetList.length = 0;
            this.canShowEffect = false;
            FightTimer.instance.unRegisterTick(this.removeCaseEffect, this);
            FightTimer.instance.unRegisterTick(this.loopShowEffect, this);
            FightTimer.instance.unRegisterTick(this.onReleaseSkillEffect, this);
            FightTimer.instance.unRegisterTick(this.onPlayEnd, this);
            super.recycleSkill();

            SkillAction6Proxy.recovrySkillProxy(this);
        }
    }
}