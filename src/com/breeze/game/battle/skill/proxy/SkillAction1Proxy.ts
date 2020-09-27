module qmr
{
	/**
	 * @description (1)移动到目标位置攻击
	 */
    export class SkillAction1Proxy extends BaseSkillProxy
    {
        public targetList: Array<BaseMoverActor>;
        private tid: number;
        public constructor()
        {
            super();
            this.targetList = [];
        }

        public static getSkillProxy(): SkillAction1Proxy
        {
            var skill: SkillAction1Proxy = Pool.getItemByClass("SkillAction1Proxy", SkillAction1Proxy);
            return skill;
        }

        public static recovrySkillProxy(skill: SkillAction1Proxy): void
        {
            Pool.recover("SkillAction1Proxy", skill);
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
                //移动到对面对象跟前攻击
                if (this.targetList.length > 0)
                {
                    var target = this.targetList[0];
                    if (target)
                    {
                        SceneManager.instance.addObjectToTop(this.owner);
                        var offsetY: number = (target.camp == CampType.FOE) ? 90 : - 90;
                        this.owner.isCanMove = true;//后面可扩展为判断是否被禁动
                        this.owner.moveScale = this.timeScale;
                        this.owner.speed = 90;//后面在扩展速度
                        this.owner.changeStatus(Status.FLY, true);
                        this.owner.moveTo(target.x - 20, target.y + offsetY, this.onArrival, this, 5);

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
                    }
                    else
                    {
                        LogUtil.warn("技能1：移动目的地目标不存在，技能id:" + this.skillId)
                        this.onArrival();
                    }
                }
            }
        }

        /** 到达目标地点 */
        private onArrival()
        {
            this.owner.changeStatus(Status.ATTACK2, true);
            this.owner.delayBackPos(500 / this.timeScale);

            if (this.skillEffectCfg.cast_effect > 0)
            {
                EffectPlayer.playEffect(this.skillEffectCfg.cast_effect, this.owner, -1, this.timeScale, true);
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
                        let dir = (this.owner.camp == CampType.OUR) ? 1 : - 1;
                        this.showEffect = EffectPlayer.playEffect(this.skillEffectCfg.show_effect, targetActor, -1, this.timeScale, true);
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
                        LogUtil.warn("技能1：表现列表中目标不存在，技能id:" + this.skillId)
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
                        LogUtil.warn("技能1：受击列表中目标不存在，技能id:" + this.skillId)
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

        /** 回收技能，需被子类继承  */
        public recycleSkill(): void
        {
            let self = this;
            self.targetList.length = 0;
            FightTimer.instance.unRegisterTick(self.removeCaseEffect, self);
            FightTimer.instance.unRegisterTick(self.removeShowEffect, self);
            FightTimer.instance.unRegisterTick(self.onReleaseSkillEffect, self);
            FightTimer.instance.unRegisterTick(self.onShowHitEffect, self);
            FightTimer.instance.unRegisterTick(self.onPlayEnd, self);
            super.recycleSkill();
            SkillAction1Proxy.recovrySkillProxy(self);
        }
    }
}