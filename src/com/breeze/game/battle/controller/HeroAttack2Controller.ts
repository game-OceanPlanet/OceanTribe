module qmr
{
	/**
	 *
	 * @author coler
	 * @description 英雄攻击2控制器,技能全部是自动释放
	 *
	 */
    export class HeroAttack2Controller extends BaseMoverActorController
    {
        private attackSpeed: number;
        private lastUseTime: number;
        public constructor(moverActor: BaseMoverActor)
        {
            super(moverActor);
            this.lastUseTime = 0;
        }
		/**
		 * @description 执行此控制器,根据不同技能实现不同效果，这里需要重写
		 */
        public excute(): void
        {
            this.attackSpeed = 0;
            if (this.moverActor)
            {
                this.moverActor.onPlayAtk2();
            }
        }
       
        /**
		 * @description 取消执行此控制器,需被子类继承
		 */
        public cancelExcute(): void
        {
        }
        /**
		 * @description 清除controller,需要被子类继承
		 */
        public clearController(): void
        {
        }
    }
}
