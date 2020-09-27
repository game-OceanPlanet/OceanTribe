module qmr
{
	/**
	 * @description (2)突袭技能 （当前位置突然消失，攻击对方之后，在显示）
	 */
    export class SkillAction2Proxy extends BaseSkillProxy
    {
        public targetList: Array<BaseMoverActor>;
        private targetIdList: Array<number>;
        private tid: number;
        public constructor()
        {
            super();
            this.targetList = [];
            this.targetIdList = [];
        }

        public static getSkillProxy(): SkillAction2Proxy
        {
            var skill: SkillAction2Proxy = Pool.getItemByClass("SkillAction2Proxy", SkillAction2Proxy);
            return skill;
        }

        public static recovrySkillProxy(skill: SkillAction2Proxy): void
        {
            Pool.recover("SkillAction2Proxy", skill);
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
                //直接闪现到对面对象跟前攻击
                if (this.targetList.length > 0)
                {
                    var target = this.targetList[0];
                    if (target)
                    {
                        var offsetY = (target.camp == CampType.FOE) ? 80 : - 80;
                        this.owner.x = target.x;
                        this.owner.y = target.y + offsetY;
                    }
                    else
                    {
                        LogUtil.warn("技能2：闪现目标不存在，技能id:" + this.skillId)
                    }
                    this.owner.changeStatus(Status.ATTACK2, true);
                    SceneManager.instance.addObjectToTop(this.owner);
                    FightTimer.instance.registerTick(this.onBackPos, this, 500 / this.timeScale, 1);
                }
                //添加施法效果
                if (this.skillEffectCfg.cast_effect > 0)
                {
                    this.caseEffect = EffectPlayer.playEffect(this.skillEffectCfg.cast_effect, this.owner, -1, this.owner.timeScale, true);
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

        /** 突袭之后回到自己的位置 */
        protected onBackPos()
        {
        }

        /** 表现特效 */
        protected onReleaseSkillEffect(): void
        {
            if (this.skillEffectCfg.show_effect > 0)
            {
                if (this.targetList.length > 0)
                {
                    let targetActor = this.targetList[0];
                    if (targetActor)
                    {
                        //刀光需要反转一下
                        let dir = (targetActor.camp == CampType.OUR) ? 1 : -1;
                        this.showEffect = EffectPlayer.playEffect(this.skillEffectCfg.show_effect, targetActor, -1, targetActor.timeScale, true);
                        this.showEffect.scaleY *= dir;

                        //表现持续时间
                        var showDurotion = this.skillEffectCfg.show_durotion / this.timeScale;
                        if (showDurotion > 0)
                        {
                            FightTimer.instance.registerTick(this.removeShowEffect, this, showDurotion, 1);
                        }
                    }
                    else
                    {
                        LogUtil.warn("技能2：表现特效目标不存在，技能id:" + this.skillId)
                    }
                }
            }

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

        /** 表现特效播放完毕后 */
        protected onShowHitEffect(): void
        {
            let count = this.targetList.length;
            if (this.skillEffectCfg.hit_effect > 0)
            {
                for (let i = 0; i < count; i++)
                {
                    let targetActor = this.targetList[i];
                    if (targetActor)
                    {
                        EffectPlayer.playEffect(this.skillEffectCfg.hit_effect, targetActor, -1, this.owner.timeScale, true);
                        SceneManager.instance.onAttackResultBack(targetActor, this.targetFighterMsg[i])
                    }
                    else
                    {
                        LogUtil.warn("技能2：受击列表中目标不存在，技能id:" + this.skillId)
                    }
                }
            }
            FightTimer.instance.registerTick(this.onPlayEnd, this, 300 / this.timeScale, 1);
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
            FightTimer.instance.unRegisterTick(this.removeCaseEffect, this);
            FightTimer.instance.unRegisterTick(this.removeShowEffect, this);
            FightTimer.instance.unRegisterTick(this.onBackPos, this);
            FightTimer.instance.unRegisterTick(this.onReleaseSkillEffect, this);
            FightTimer.instance.unRegisterTick(this.onShowHitEffect, this);
            FightTimer.instance.unRegisterTick(this.onPlayEnd, this);
            super.recycleSkill();
            SkillAction2Proxy.recovrySkillProxy(this);
        }
    }
}