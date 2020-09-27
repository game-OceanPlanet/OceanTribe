module qmr
{
	/**
	 *
	 * @description 基础的技能代理
	 *
	 */
	export class BaseSkillProxy
	{
		protected skillId: number;
		protected skillEffectCfg: SkillEffectCfg;
		protected owner: BaseMoverActor; 	//技能拥有者
		protected canShowEffect: boolean;	//是否能显示特效
		protected isShake: number;
		protected targetList: Array<BaseMoverActor>;
		protected targetFighterMsg: any[];
		protected tempEffectList: Array<BaseEffect>;//临时特效
		protected caseEffect: BaseEffect;//施法特效
		protected showEffect: BaseEffect;//施法特效
		protected mulitCount: number;//多段伤害数量
		protected mulitHuttFunc: Function[];//多段伤害
		protected sound: string;

		protected _t: number = 0;

		public constructor()
		{
			this.mulitHuttFunc = [this.showHit1, this.showHit2, this.showHit3, this.showHit4, this.showHit5];
		}

		/** 设置技能Id */
		public setSkillId(skillId: number, skillCfg: SkillEffectCfg = null): void
		{
			this.skillId = skillId;
			this.skillEffectCfg = skillCfg ? skillCfg : SkillModel.instance.getSkillEffectDataBySkillId(skillId);
			this.canShowEffect = <boolean>(this.skillEffectCfg != null);
			this.isShake = (this.canShowEffect) ? this.skillEffectCfg.shake : 0;
		}

		/** 设置目标群体 */
		public setTargetList(targetMsg: any[])
		{
			this.targetList = [];
			this.targetFighterMsg = targetMsg.concat();
			let count = targetMsg.length;
			var target: any;
			for (var k: number = 0; k < count; k++)
			{
				target = targetMsg[k];
				this.targetList[k] = <HeroActor>SceneManager.instance.getBaseObjectByid(target.fighterId);
			}
		}

		public addTempEffect(effect: BaseEffect)
		{
			if (this.tempEffectList == null)
			{
				this.tempEffectList = [];
			}
			this.tempEffectList.push(effect);
		}

		public get timeScale(): number
		{
			if (this.owner)
			{
				return this.owner.timeScale;
			}
			return 1;
		}

		/** 设置技能拥有者 */
		public setOwner(owner: BaseMoverActor): void
		{
			this.owner = owner;
		}

		/** 释放技能 */
		public releaseSkill(): void { this.checkShowShake() }

		//展示震屏
		private checkShowShake()
		{
			let t = this;
			let eCfg = t.skillEffectCfg;
			if (eCfg && eCfg.shakeTimePoint)
			{
				var shakeShowTime = eCfg.shakeTimePoint / t.timeScale;
				if (shakeShowTime > 0)
				{
					FightTimer.instance.registerTick(t.showShake, t, shakeShowTime, 1, eCfg.shakeTime / t.timeScale);
				}
			}
		}

		private showShake(shakeTime: number = 200)
		{
			SceneManager.instance.shake(shakeTime);
		}

		/** 表现特效 */
		protected onReleaseSkillEffect(): void { }

		/** 技能伤害第一段 */
		protected showHit1(rate: number)
		{
			let isPlayEnd = this.getIsPlayEnd(1);
			this.onShowHitEffect(rate, isPlayEnd);
		}
		/** 技能伤害第二段 */
		protected showHit2(rate: number)
		{
			let isPlayEnd = this.getIsPlayEnd(2);
			this.onShowHitEffect(rate, isPlayEnd);
		}
		/** 技能伤害第三段 */
		protected showHit3(rate: number)
		{
			let isPlayEnd = this.getIsPlayEnd(3);
			this.onShowHitEffect(rate, isPlayEnd);
		}
		/** 技能伤害第四段 */
		protected showHit4(rate: number)
		{
			let isPlayEnd = this.getIsPlayEnd(4);
			this.onShowHitEffect(rate, isPlayEnd);
		}
		/** 技能伤害第五段 */
		protected showHit5(rate: number)
		{
			let isPlayEnd = this.getIsPlayEnd(5);
			this.onShowHitEffect(rate, isPlayEnd);
		}

		protected getIsPlayEnd(k: number): boolean
		{
			return this.mulitCount == k;
		}

		/** 显示受击，需被子类继承 */
		protected onShowHitEffect(rate: number = 1, isPlayEnd: boolean = true): void
		{
		}

		/** 回收技能，需被子类继承 */
		public recycleSkill(): void
		{
			let t = this;
			t.owner = null;
			t.canShowEffect = false;
			t.targetList.length = 0;
			t.targetFighterMsg.length = 0;
			t.removeCaseEffect();
			t.removeShowEffect();
			t.removeAllTempEffect();

			let count = t.mulitHuttFunc.length;
			for (var i = 0; i < count; i++)
			{
				FightTimer.instance.unRegisterTick(t.mulitHuttFunc[i], t);
			}
			FightTimer.instance.unRegisterTick(t.showShake, t);
			SceneManager.instance.removeShake();
		}

		protected removeCaseEffect()
		{
			if (this.caseEffect)
			{
				this.caseEffect.dispos();
				this.caseEffect = null;
			}
		}
		protected removeShowEffect()
		{
			if (this.showEffect)
			{
				this.showEffect.dispos();
				this.showEffect = null;
			}
		}

		protected removeAllTempEffect()
		{
			if (this.tempEffectList)
			{
				this.tempEffectList.forEach(element =>
				{
					if (element) element.dispos();
				});
				this.tempEffectList.length = 0;
			}
		}
	}
}
