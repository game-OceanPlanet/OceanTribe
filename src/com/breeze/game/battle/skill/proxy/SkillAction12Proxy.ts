module qmr
{
	/**
	 * @description (12)远程，播放一个弹道效果从己方外面，飞行到对面界面外
	 */
    export class SkillAction12Proxy extends BaseSkillProxy
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

        public static getSkillProxy(): SkillAction12Proxy
        {
            var proxy: SkillAction12Proxy = Pool.getItemByClass("SkillAction12Proxy", SkillAction12Proxy);
            return proxy;
        }

        public static recovrySkillProxy(proxy: SkillAction12Proxy): void
        {
            Pool.recover("SkillAction12Proxy", proxy);
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
            if (this.skillEffectCfg.show_effect > 0)
            {
                //群体同时播放特效
                if (this.targetList && this.targetList.length > 0)
                {
                    let targetActor = this.targetList[0];
                    if (targetActor)
                    {
                        // LogUtil.warn("施法了 " + this.flyCount)
                        var effect: BaseEffect = EffectPlayer.playEffect(this.skillEffectCfg.show_effect, this.owner, -1, this.timeScale);
                        if (effect)
                        {
                            let starPos;// = BattlePosionManager.instance.getSkill12PosByType(this.owner.camp, true);
                            let endPos;// = BattlePosionManager.instance.getSkill12PosByType(targetActor.camp);
                            starPos.x = endPos.x;
                            var dx = 0;
                            var dy = endPos.y - starPos.y;
                            effect.x = starPos.x;
                            effect.y = starPos.y;

                            let effCfg: SkillEffectCfg = SkillModel.instance.getSkillEffectDataBySkillId(this.skillId);
                            effect.speed = effCfg ? effCfg.speed * this.timeScale : 30;
                            effect.rotation = Math.atan2(dy, dx) * 180 / Math.PI;
                            let onArrival = this.onArrival;
                            effect.moveTo(endPos.x, endPos.y, this.onArrival, this);
                            this.addTempEffect(effect);
                            //如果特效没返回到达目的地，去找一下特效表里面，特效配置的播放次数是否满足到达时间
                        }
                        else
                        {
                            LogUtil.warn("表现特效不存在，需要策划在（特效_EffectData表格）里面配置一下 " + this.skillEffectCfg.show_effect)
                        }
                    }
                    else
                    {
                        LogUtil.warn("技能11：受击列表中目标不存在，技能id:" + this.skillId)
                    }
                }
                LogUtil.logF("群体同时播放特效 " + this.targetList.length)
            }
            this.delayShowHit();
        }

        /** 到达目标地点 */
        private onArrival(argArray?: any)
        {
            LogUtil.logF("群体同时播放特效")
            this.removeAllTempEffect();
        }

        private delayShowHit()
        {
            var show_time = this.skillEffectCfg.show_time / this.timeScale;
            if (show_time > 0)
            {
                FightTimer.instance.unRegisterTick(this.onShowHitEffect, this);
                FightTimer.instance.registerTick(this.onShowHitEffect, this, show_time, 1);
            }
            else
            {
                this.onShowHitEffect();
            }
        }

        /** 表现特效播放完毕后 */
        protected onShowHitEffect(rate: number = 1, isPlayEnd: boolean = true): void
        {
            while (this.targetList.length > 0)
            {
                this.flyCount--;
                //群体同时受击
                let targetActor = this.targetList.pop();
                if (this.skillEffectCfg.hit_effect > 0)
                {
                    if (targetActor)
                    {
                        if (this.owner)
                        {
                            EffectPlayer.playEffect(this.skillEffectCfg.hit_effect, targetActor, -1, this.timeScale, true);
                        }
                        else
                        {
                            LogUtil.warn("技能11：施法者不存在，这个问题很严重，技能id:" + this.skillId)
                        }
                        let targetFighterMsg = this.getFightMsg(targetActor.id);
                        SceneManager.instance.onAttackResultBack(targetActor, targetFighterMsg);
                    }
                    else
                    {
                        LogUtil.warn("技能11：受击列表中目标不存在，技能id:" + this.skillId)
                    }
                }
                LogUtil.logF("群体同时受击 " + this.flyCount)
            }

            // 避免有点远程特效还没飞到目标位置就结束了，不飘受击特效了。。。
            var delay = 300;
            delay /= this.timeScale;
            FightTimer.instance.unRegisterTick(this.onPlayEnd, this);
            FightTimer.instance.registerTick(this.onPlayEnd, this, delay, 1);
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
            this.flyCount = 0;
            this.targetList.length = 0;
            this.tempTargetList.length = 0;
            this.canShowEffect = false;
            FightTimer.instance.unRegisterTick(this.removeCaseEffect, this);
            FightTimer.instance.unRegisterTick(this.onReleaseSkillEffect, this);
            FightTimer.instance.unRegisterTick(this.onShowHitEffect, this);
            FightTimer.instance.unRegisterTick(this.onPlayEnd, this);
            super.recycleSkill();

            SkillAction12Proxy.recovrySkillProxy(this);
        }
    }
}