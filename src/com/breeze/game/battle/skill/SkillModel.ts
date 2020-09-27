module qmr
{
	export class SkillModel
	{
		/** 已经从配置读取过的物品 */
		private _skillDic: Object;
		private _skillEffectDic: Object;
		private _skillUpEffectDic: Object;
		private _passiveSkillDic: Object;

		public constructor()
		{
			this._skillDic = {};
			this._skillEffectDic = {};
			this._skillUpEffectDic = {};
			this._passiveSkillDic = {};
		}

		private static _instance: SkillModel;
		public static get instance(): SkillModel
		{
			if (this._instance == null) { this._instance = new SkillModel; }
			return this._instance;
		}

		/**
		 *  技能数据
		 */
		public getSkillCfg(id: number): SkillCfg
		{
			if (!isNaN(id) && id > 0)
			{
				if (this._skillDic.hasOwnProperty(id.toString()))
				{
					return this._skillDic[id];
				}

				let cfg: SkillCfg = ConfigManager.getConf(ConfigEnum.SKILL, id);
				if (cfg != null) this._skillDic[id] = cfg;
				return cfg;
			}
			LogUtil.log("技能数据不存在：" + id)
			return null;
		}

		/** 通过技能ID获得技能效果 */
		public getSkillEffectDataBySkillId(skill_id: number): SkillEffectCfg
		{
			var skillData: SkillCfg = this.getSkillCfg(skill_id);
			if (skillData)
			{
				return this.getSkillEffectData(skillData.effectId);
			}
			return null;
		}

		/**
		 * 通过技能效果ID获得技能效果
		 */
		public getSkillEffectData(id: number): SkillEffectCfg
		{
			if (!isNaN(id) && id > 0)
			{
				if (this._skillEffectDic.hasOwnProperty(id.toString()))
				{
					return this._skillEffectDic[id];
				}

				let cfg: SkillEffectCfg = ConfigManager.getConf(ConfigEnum.SKILLEFFECT, id);
				if (cfg != null) this._skillEffectDic[id] = cfg;
				return cfg;
			}
			return null;
		}

		/** 多段伤害 */
		public getMultiDatas(mult: string): MultiRateVo[]
		{
			let mulits = mult.split(";");
			let max: number = 0;
			let mulitRates: MultiRateVo[] = [];
			let muStr: string;
			let rate: MultiRateVo;
			let count = mulits.length;
			for (let i = 0; i < count; i++)
			{
				rate = new MultiRateVo();
				muStr = mulits[i];
				if (muStr)
				{
					let rates = muStr.split(",").map(Number);
					rate.time = rates[0];
					rate.sp = rates[1];
					max += rate.sp;
				}
				mulitRates.push(rate);
			}
			mulitRates.forEach(element =>
			{
				element.updateRate(max);
			});
			return mulitRates;
		}

	}
	/** 多段伤害占比 */
	export class MultiRateVo
	{
		public time: number;//分段时间
		public sp: number;//比重
		public rate: number;//占比

		/** 更新占比 */
		public updateRate(max: number)
		{
			this.rate = this.sp / max;
		}
	}
}


