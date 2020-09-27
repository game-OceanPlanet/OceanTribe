module qmr
{
	/**
	 *
	 * @author coler
	 * @description 施法控制器
	 *
	 */
	export class HeroSkillController extends BaseMoverActorController
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
				this.moverActor.onPlayCast();
			}
		}

		/**
		 * @description 取消执行此控制器,需被子类继承
		 */
		public cancelExcute(): void
		{
		}
	}
}
