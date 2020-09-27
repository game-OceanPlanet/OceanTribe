module qmr {
	/**
	 *
	 * @author hh
	 * @date 2016.12.08
	 * @description 基础的动画控制器
	 *
	 */
	export class BaseMoverActorController {
    	protected moverActor:BaseMoverActor;
        public constructor(moverActor: BaseMoverActor) {
            this.moverActor = moverActor;
		}
		/**
		 * @description 执行此控制器，需被子类继承
		 */ 
		public excute():void{
		    
		}
		/**
		 * @description 取消执行此控制器,需被子类继承
		 */ 
		public cancelExcute():void{
		    
		}
		/**
		 * @description 检测,需被子类继承
		 */ 
		public check():void{
		    
		}
		/**
		 * @description 清除controller,需要被子类继承
		 */
		public clearController():void{
			
		}
	}
}
