module qmr
{
	/**
	 *
	 * @author coler
	 * @description 待机状态
	 */
	export class HeroIdleController extends BaseMoverActorController
	{
		public constructor(moverActor: BaseMoverActor)
		{
			super(moverActor);
		}

		public check(): void
		{
			if (this.moverActor)
			{
				this.moverActor.onMoveStop();
			}
		}

		public excute(): void
		{
			if (this.moverActor)
			{
				this.moverActor.onPlayIdle();
			}
		}
	}
}
