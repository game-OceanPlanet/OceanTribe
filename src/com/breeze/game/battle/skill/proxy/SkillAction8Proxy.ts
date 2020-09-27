module qmr
{
	/**
	 * @description (8)远程，暴风雪在2和5、8和11之间释放一个效果
	 */
    export class SkillAction8Proxy extends BaseSkillProxy
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

        public static getSkillProxy(): SkillAction8Proxy
        {
            var proxy: SkillAction8Proxy = Pool.getItemByClass("SkillAction8Proxy", SkillAction8Proxy);
            return proxy;
        }

        public static recovrySkillProxy(proxy: SkillAction8Proxy): void
        {
            Pool.recover("SkillAction8Proxy", proxy);
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
                //群体同时播放特效
                if (this.targetList.length > 0)
                {
                    let targetActor = this.targetList[0];
                    if (targetActor)
                    {
                        this.getCenterPos(targetActor.camp);
                        //特效需要反转一下
                        this.showEffect = EffectPlayer.playEffect(this.skillEffectCfg.show_effect, this._centerPos, -1, this.timeScale, true);
                        let effectData: EffectDataCfg = EffectModel.instance.getEffectData(this.skillEffectCfg.show_effect);
                        if (this.showEffect && effectData.needOverturn > 0)
                        {
                            let dir = (this.owner.camp == CampType.OUR) ? 1 : -1;
                            this.showEffect.scaleY *= dir;
                        }
                        //表现持续时间
                        var showDurotion = this.skillEffectCfg.show_durotion / this.timeScale;
                        if (showDurotion > 0)
                        {
                            FightTimer.instance.registerTick(this.removeShowEffect, this, showDurotion, 1);
                        }
                    }
                    else
                    {
                        LogUtil.warn("技能8：群体同时播放特效目标不存在，技能id:" + this.skillId)
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
            //结束时间 = 展示特效时间+命中表现时间
            let endTime = this.skillEffectCfg.show_durotion + this.skillEffectCfg.hitDelay;
            FightTimer.instance.registerTick(this.onPlayEnd, this, endTime / this.timeScale, 1);
        }

        private _centerPos: egret.Point;
        // 找出上下阵营的中心点
        private getCenterPos(type: CampType)
        {
            if (!this._centerPos) this._centerPos = new egret.Point();
            var up = type == CampType.FOE ? 5 : 2;
            var down = type == CampType.FOE ? 2 : 5;
            var pos1;// = BattlePosionManager.instance.getPosByType(type, up);
            var pos2;// = BattlePosionManager.instance.getPosByType(type, down);
            this._centerPos.x = pos1.x;
            this._centerPos.y = pos1.y + ((pos2.y - pos1.y) >> 1);
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
                        SceneManager.instance.onAttackResultBack(targetActor, this.targetFighterMsg[i], rate);
                    }
                    else
                    {
                        LogUtil.warn("技能8：受击列表中目标不存在，技能id:" + this.skillId)
                    }
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
            FightTimer.instance.unRegisterTick(this.onReleaseSkillEffect, this);
            FightTimer.instance.unRegisterTick(this.onShowHitEffect, this);
            FightTimer.instance.unRegisterTick(this.onPlayEnd, this);
            super.recycleSkill();
            SkillAction8Proxy.recovrySkillProxy(this);
        }
    }
}