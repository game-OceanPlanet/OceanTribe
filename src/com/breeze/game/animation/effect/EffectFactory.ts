module qmr {
	/**
	 *
	 * @author hh
	 * @date 2016.12.10
	 * @description 特效工厂
	 *
	 */
	export class EffectFactory {
		private static instance: EffectFactory;
		private effectPool: Array<BaseEffect>;
		public constructor() {
			this.effectPool = [];
			this.initPool();
		}
		/**
		 * @description 初始化10个特效类
		 */
		private initPool(): void {
			for (let i: number = 0; i < 10; i++) {
				this.effectPool.push(new BaseEffect());
			}
		}
		/**
		 * @description 获取单例对象
		 */
		public static getInstance(): EffectFactory {
			if (EffectFactory.instance == null) {
				EffectFactory.instance = new EffectFactory();
			}
			return EffectFactory.instance;
		}
		/**
		 * @description 获取一个特效
		 */
		public getEffect(): BaseEffect {
			if (this.effectPool.length > 0) {
				return this.effectPool.shift();
			}
			return new BaseEffect();
		}
		/**
		 * @description 释放一个特效
		 */
		public releaseEffect(baseEffect: BaseEffect): void {
			if (this.effectPool.indexOf(baseEffect) == -1) {
				baseEffect.blendMode = egret.BlendMode.NORMAL;
				baseEffect.scaleX = baseEffect.scaleY = 1;
				baseEffect.x = 0;
				baseEffect.y = 0;
				baseEffect.rotation = 0;
				baseEffect.visible = true;
				baseEffect.timeScale = 1;
				this.effectPool.push(baseEffect);
			}
		}
	}
}
