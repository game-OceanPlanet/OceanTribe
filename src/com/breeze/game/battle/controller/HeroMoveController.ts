module qmr
{
	/**
	 *
	 * @author hh
	 * @date 2016.12.08
	 * @description 角色行走控制器
	 *
	 */
    export class HeroMoveController extends BaseMoverActorController
    {
        public constructor(moverActor: BaseMoverActor)
        {
            super(moverActor);
        }
		/**
		 * @description 执行此控制器
		 */
        public excute(): void
        {
            if (this.moverActor)
            {
                this.moverActor.onPlayMove();
            }
        }
        /**
		 * @description 检测
		 */
        public check(): void
        {
        }
        public cancelExcute(): void
        {
        }
    }
}
