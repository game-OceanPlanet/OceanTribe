module qmr
{
	/**
	 *
	 * @author coler
	 * @description 特效数据模型
	 *
	 */
	export class EffectModel
	{

		private static _instance: EffectModel;
		public static get instance(): EffectModel
		{
			if (this._instance == null) { this._instance = new EffectModel; }
			return this._instance;
		}

		/** 已经从配置读取过的物品 */
		private _effectDic: Dictionary;
		public constructor()
		{
			this._effectDic = new Dictionary();
		}

		/**
		 *  获取特效的配置数据
		 */
		public getEffectData(id: number): EffectDataCfg
		{
			if (!isNaN(id) && id > 0)
			{
				if (this._effectDic.has(id))
				{
					return this._effectDic.get(id);
				}

				let cfg: EffectDataCfg = ConfigManager.getConf(ConfigEnum.EFFECTDATA, id);
				if (cfg != null) this._effectDic.set(id, cfg);
				return cfg;
			}
			return null;
		}
	}
}
