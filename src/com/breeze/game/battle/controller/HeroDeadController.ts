module qmr
{
	/**
	 *
	 * @author hh
	 * @date 2016.12.08
	 * @description 死亡控制器
	 *
	 */
	export class HeroDeadController extends BaseMoverActorController
	{
		public constructor(moverActor: BaseMoverActor)
		{
			super(moverActor);
		}
		public excute(): void
		{
			if (this.moverActor)
			{
				this.moverActor.onPlayDead();
			}
		}

		public cancelExcute(): void
		{
		}
	}
}
