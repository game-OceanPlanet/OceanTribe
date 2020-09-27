module qmr
{
	/**
	 * @description (3)远程，子弹飞行攻击
	 */
    export class SkillAction3Proxy extends BaseSkillProxy
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

        public static getSkillProxy(): SkillAction3Proxy
        {
            var proxy: SkillAction3Proxy = Pool.getItemByClass("SkillAction3Proxy", SkillAction3Proxy);
            return proxy;
        }

        public static recovrySkillProxy(proxy: SkillAction3Proxy): void
        {
            Pool.recover("SkillAction3Proxy", proxy);
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
                this.flyCount = 0;
                for (let targetActor of this.targetList)
                {
                    if (targetActor)
                    {
                        // LogUtil.warn("施法了 " + this.flyCount)
                        var effect: BaseEffect = EffectPlayer.playEffect(this.skillEffectCfg.show_effect, this.owner, -1, this.timeScale);
                        if (effect)
                        {
                            this.flyCount++;
                            var dx = targetActor.x - this.owner.x;
                            var dy = targetActor.y - this.owner.y;

                            let effCfg: SkillEffectCfg = SkillModel.instance.getSkillEffectDataBySkillId(this.skillId);
                            let t = this.timeScale > 1 ? this.timeScale * 1.3 : 1;
                            effect.speed = effCfg ? effCfg.speed * t : 0;
                            effect.speed = Math.floor(effect.speed);
                            effect.rotation = Math.atan2(dy, dx) * 180 / Math.PI;
                            let onArrival = this.onArrival;
                            let target = targetActor;
                            effect.moveTo(targetActor.x, targetActor.y, onArrival, this, [target, effect]);
                            this.addTempEffect(effect);
                            //如果特效没返回到达目的地，去找一下特效表里面，特效配置的播放次数是否满足到达时间
                        }
                        else
                        {
                            LogUtil.warn("表现特效不存在，需要策划在（特效_EffectData表格）里面配置一下 " + this.skillEffectCfg.show_effect)
                            this.onArrival([targetActor]);
                        }
                    }
                    else
                    {
                        LogUtil.warn("技能3：受击列表中目标不存在，技能id:" + this.skillId)
                        this.onArrival(null);
                    }
                }
                LogUtil.logF("群体同时播放特效 " + this.targetList.length)
            }
        }

        /** 到达目标地点 */
        private onArrival(args: any[])
        {
            LogUtil.logF("群体同时播放特效")
            if (!args || args.length < 1)
            {
                this.onShowHitEffect();
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
                this.tempTargetList.push(targetActor);
            }

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
            while (this.tempTargetList.length > 0)
            {
                this.flyCount--;
                //群体同时受击
                let targetActor = this.tempTargetList.pop();
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
                            LogUtil.warn("技能3：施法者不存在，这个问题很严重，技能id:" + this.skillId)
                        }
                        let targetFighterMsg = this.getFightMsg(targetActor.id);
                        SceneManager.instance.onAttackResultBack(targetActor, targetFighterMsg);
                    }
                    else
                    {
                        LogUtil.warn("技能3：受击列表中目标不存在，技能id:" + this.skillId)
                    }
                }
                LogUtil.logF("群体同时受击 " + this.flyCount)
            }

            // 避免有点远程特效还没飞到目标位置就结束了，不飘受击特效了。。。
            var delay = this.flyCount > 0 ? 1000 : 300;
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

            SkillAction3Proxy.recovrySkillProxy(this);
        }
    }
}