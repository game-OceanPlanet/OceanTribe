module qmr
{
	/**
	 * @description (7)远程，治疗技能，只有施法和治疗受击效果
	 */
    export class SkillAction7Proxy extends BaseSkillProxy
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

        public static getSkillProxy(): SkillAction7Proxy
        {
            var proxy: SkillAction7Proxy = Pool.getItemByClass("SkillAction7Proxy", SkillAction7Proxy);
            return proxy;
        }

        public static recovrySkillProxy(proxy: SkillAction7Proxy): void
        {
            Pool.recover("SkillAction7Proxy", proxy);
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
                    FightTimer.instance.unRegisterTick(this.onReleaseSkillEffect, this);
                    FightTimer.instance.registerTick(this.onReleaseSkillEffect, this, castTime, 1);
                }
                else
                {
                    this.onReleaseSkillEffect();
                }
            }
        }

        /** 没有表现效果，直接调用目标治疗特效 */
        protected onReleaseSkillEffect(): void
        {
            this.onShowHitEffect();
        }

        /** 表现特效播放完毕后 */
        protected onShowHitEffect(): void
        {
            if (this.skillEffectCfg.hit_effect > 0)
            {
                while (this.targetList.length > 0)
                {
                    let targetActor = this.targetList.pop();
                    let targetFighterMsg = this.targetFighterMsg.pop();
                    //群体同时治疗
                    if (targetActor)
                    {
                        let effect = EffectPlayer.playEffect(this.skillEffectCfg.hit_effect, targetActor, -1, this.timeScale, true);
                        this.addTempEffect(effect);
                        //表现持续时间
                        var showDurotion = this.skillEffectCfg.show_durotion / this.timeScale;
                        if (showDurotion > 0)
                        {
                            FightTimer.instance.registerTick(this.removeAllTempEffect, this, showDurotion, 1);
                        }
                        if (targetActor != this.owner)
                        {
                            //如果治疗目标里面有自己就要移除，因为施法者状态已经在施法者状态里面变更了，不然会导致飘两次加血
                            SceneManager.instance.onAttackResultBack(targetActor, targetFighterMsg);
                        }
                    }
                    else
                    {
                        LogUtil.warn("技能7：受击列表中目标不存在，技能id:" + this.skillId)
                    }
                }
            }
            if (this.canShowEffect)
            {
                FightTimer.instance.unRegisterTick(this.onPlayEnd, this);
                let endTime = this.skillEffectCfg.node_duration - this.skillEffectCfg.cast_showTime - this.skillEffectCfg.hitDelay;
                FightTimer.instance.registerTick(this.onPlayEnd, this, endTime / this.timeScale, 1);
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
            FightTimer.instance.unRegisterTick(this.onReleaseSkillEffect, this);
            FightTimer.instance.unRegisterTick(this.onShowHitEffect, this);
            FightTimer.instance.unRegisterTick(this.onPlayEnd, this);
            super.recycleSkill();

            SkillAction7Proxy.recovrySkillProxy(this);
        }
    }
}