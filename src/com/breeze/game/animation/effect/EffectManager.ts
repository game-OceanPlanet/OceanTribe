module qmr {
	/**
	 * coler
	 * 特效管理器...后面在整理这个里。。
	 * 
	 */
	export class EffectManager {
		private static _instance: EffectManager;
        /**  获取单例对象  */
        public static get instance(): EffectManager
        {
            if (this._instance == null) { this._instance = new EffectManager(); }
            return this._instance;
        }

	}
}