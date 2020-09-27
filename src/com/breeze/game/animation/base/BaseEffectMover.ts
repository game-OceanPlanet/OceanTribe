module qmr
{
	/**
	 * 基于时间的移动特效，用于战斗扩展，具有时间缩放
	 */
	export class BaseEffectMover extends egret.DisplayObjectContainer
	{
		private vx: number;
		private vy: number;
		private disx: number;
		private disy: number;
		private destX: number;
		private destY: number;
		private distance: number;
		private onArrival: Function;
		protected thisObject: any;					//回调函数引用对象
		protected dir: number;                      //当前方向
		public isMoving: boolean;                   //是否在移动中
		public speed: number;                       //移动速度
		public isCanMove: boolean;                  //当前是否能移动
		private nearDiatance: number;
		private argArray:any;	

		public constructor()
		{
			super();
			this.speed = 30;
			this.isMoving = false;
		}

        /**
		 * @description 玩家移动到某个点
		 * @param destX 目标X
		 * @param destY 目标Y
		 * @param onArrival 到达目的地返回函数
		 * @param target 回调函数作用目标
         * @param nearDiatance 代表离目标点多少距离就代表走到了，停止继续移动
		 */
		public moveTo(destX: number, destY: number, onArrival: Function = null, target: any = null, argArray?: any, nearDiatance: number = 0): void
		{
			this.destX = destX;
			this.destY = destY;
			this.onArrival = onArrival;
			this.thisObject = target;
			this.argArray = argArray;
			this.nearDiatance = nearDiatance;
			FightTimer.instance.unRegisterTick(this.enterFrameMove, this);
			FightTimer.instance.registerTick(this.enterFrameMove, this, 33);
		}

        /**
         * @description 每帧移动
         */
		private enterFrameMove(): void
		{
			let t: BaseEffectMover = this;
			t.disx = t.destX - t.x;
			t.disy = t.destY - t.y;
			t.distance = Math.sqrt(t.disx * t.disx + t.disy * t.disy);
			if (t.distance < 5 || t.distance < t.nearDiatance)
			{
				if (t.x != t.destX) t.x = t.destX;
				if (t.y != t.destY) t.y = t.destY;
				FightTimer.instance.unRegisterTick(this.enterFrameMove, this);
				t.onStop();
				if (t.onArrival)
				{
					t.onArrival.call(t.thisObject, this.argArray);
				}
				return;
			}
			t.disx = (t.disx / t.distance) * t.speed;
			t.disy = (t.disy / t.distance) * t.speed;
			t.vx = t.disx;
			t.vy = t.disy;
			if (Math.abs(t.x - t.destX) < Math.abs(t.vx))
			{
				t.vx = t.destX - t.x;
			}
			if (Math.abs(t.y - t.destY) < Math.abs(t.vy))
			{
				t.vy = t.destY - t.y;
			}
			t.x += t.vx;
			t.y += t.vy;
		}

		/** 停止走动 */
		private stop(): void
		{
			this.onStop();
			FightTimer.instance.unRegisterTick(this.enterFrameMove, this);
		}

		/** 当停止运动的时候调用,需子类继承实现 */
        protected onStop(): void
        {
        }

		public dispos()
		{
			this.stop();
			this.isMoving = false;
			this.onArrival = null;
			this.argArray = null;
			this.thisObject = null;
		}
	}
}