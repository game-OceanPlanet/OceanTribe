module qmr
{
	/**
	 * @description (4)远程，天降技能，同时受击
	 */
	export class SkillAction4Proxy extends BaseSkillProxy
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

		public static getSkillProxy(): SkillAction4Proxy
		{
			var proxy: SkillAction4Proxy = Pool.getItemByClass("SkillAction4Proxy", SkillAction4Proxy);
			return proxy;
		}

		public static recovrySkillProxy(proxy: SkillAction4Proxy): void
		{
			Pool.recover("SkillAction4Proxy", proxy);
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
				//群体同时播放特效
				for (let targetActor of this.targetList)
				{
					if (targetActor)
					{
						let effect = EffectPlayer.playEffect(this.skillEffectCfg.show_effect, targetActor, -1, this.owner.timeScale, true);
						this.addTempEffect(effect);
					}
				}
			}

			//表现持续时间
			var showDurotion = this.skillEffectCfg.show_durotion / this.timeScale;
			if (showDurotion > 0)
			{
				FightTimer.instance.registerTick(this.removeAllTempEffect, this, showDurotion, 1);
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
						EffectPlayer.playEffect(this.skillEffectCfg.hit_effect, targetActor, -1, this.owner.timeScale, true);
						SceneManager.instance.onAttackResultBack(targetActor, this.targetFighterMsg[i])
					}
					else
					{
						LogUtil.warn("技能4：受击列表中目标不存在，技能id:" + this.skillId)
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

			SkillAction4Proxy.recovrySkillProxy(this);
		}
	}
}