module qmr
{
	/**
	 *
	 * @author coler
	 * @description 飞行状态
	 */
    export class HeroFlyController extends BaseMoverActorController
    {
        public constructor(moverActor: BaseMoverActor)
        {
            super(moverActor);
        }

        public excute(): void
        {
            if (this.moverActor)
            {
                this.moverActor.pause();
            }
        }

        public cancelExcute(): void
        {
            if (this.moverActor)
            {
                this.moverActor.onPlayIdle();
            }
        }
    }
}
