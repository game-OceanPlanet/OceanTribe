module qmr
{
	/**
	 * @description (4)远程，天降技能，中心受击之后，外网再次受击
	 */
    export class SkillAction5Proxy extends BaseSkillProxy
    {
        public targetList: Array<BaseMoverActor>;
        private tid: number;
        private dropPos: any;
        private delayTime = 500;//延迟之后，外围再受击

        public constructor()
        {
            super();
            this.targetList = [];
            this.dropPos = {};
        }

        public static getSkillProxy(): SkillAction5Proxy
        {
            var proxy: SkillAction5Proxy = Pool.getItemByClass("SkillAction5Proxy", SkillAction5Proxy);
            return proxy;
        }

        public static recovrySkillProxy(proxy: SkillAction5Proxy): void
        {
            Pool.recover("SkillAction5Proxy", proxy);
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
                let targetActor = this.targetList[0];
                let targetState = this.targetFighterMsg[0];
                if (targetActor)
                {
                    this.showEffect = EffectPlayer.playEffect(this.skillEffectCfg.show_effect, targetActor, -1, targetActor.timeScale, true);
                    //表现持续时间
                    var showDurotion = this.skillEffectCfg.show_durotion / this.timeScale;
                    if (showDurotion > 0)
                    {
                        FightTimer.instance.registerTick(this.removeShowEffect, this, showDurotion, 1);
                    }
                }
                else
                {
                    LogUtil.warn("目标不存在了？？？技能id:" + this.skillId)
                }
                //外围延迟
                FightTimer.instance.registerTick(this.delayShowEffect, this, this.delayTime / this.timeScale, 1);
            }

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

        private delayShowEffect()
        {
            if (this.targetList.length > 1)
            {
                let count = this.targetList.length;
                for (let i = 1; i < count; i++)
                {
                    if (this.skillEffectCfg.show_effect > 0)
                    {
                        let targetActor = this.targetList[i];
                        if (targetActor)
                        {
                            EffectPlayer.playEffect(this.skillEffectCfg.show_effect, targetActor, -1, this.timeScale, true);
                        }
                        else
                        {
                            LogUtil.warn("目标不存在了？？？技能id:" + this.skillId)
                        }
                    }
                }
            }
        }


        /** 表现特效播放完毕后,中心受击之后，外网再次受击 */
        protected onShowHitEffect(rate: number = 1, isPlayEnd: boolean = true): void
        {
            if (this.skillEffectCfg.hit_effect > 0)
            {
                let targetActor = this.targetList[0];
                let targetState = this.targetFighterMsg[0];
                if (targetActor)
                {
                    EffectPlayer.playEffect(this.skillEffectCfg.hit_effect, targetActor, -1, this.timeScale, true);
                }
                else
                {
                    LogUtil.warn("技能5：受击列表中目标不存在，技能id:" + this.skillId)
                }
                SceneManager.instance.onAttackResultBack(targetActor, targetState)
            }
            var endTime = 500 / this.timeScale;
            if (this.targetList.length > 1)
            {
                endTime += this.delayTime / this.timeScale;
                FightTimer.instance.registerTick(this.delayShowHitEffect, this, this.delayTime / this.timeScale, 1);
            }
            FightTimer.instance.unRegisterTick(this.onPlayEnd, this);
            FightTimer.instance.registerTick(this.onPlayEnd, this, endTime, 1);
        }

        private delayShowHitEffect()
        {
            let count = this.targetList.length;
            for (let i = 1; i < count; i++)
            {
                if (this.skillEffectCfg.hit_effect > 0)
                {
                    let targetActor = this.targetList[i];
                    if (targetActor)
                    {
                        EffectPlayer.playEffect(this.skillEffectCfg.hit_effect, targetActor, -1, this.timeScale, true);
                    }
                    else
                    {
                        LogUtil.warn("目标不存在了？？？技能类型5 id:" + this.skillId)
                    }
                    SceneManager.instance.onAttackResultBack(targetActor, this.targetFighterMsg[i])
                }
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
            FightTimer.instance.unRegisterTick(this.removeShowEffect, this);
            FightTimer.instance.unRegisterTick(this.delayShowEffect, this);
            FightTimer.instance.unRegisterTick(this.delayShowHitEffect, this);
            FightTimer.instance.unRegisterTick(this.onReleaseSkillEffect, this);
            FightTimer.instance.unRegisterTick(this.onShowHitEffect, this);
            FightTimer.instance.unRegisterTick(this.onPlayEnd, this);
            super.recycleSkill();

            SkillAction5Proxy.recovrySkillProxy(this);
        }
    }
}