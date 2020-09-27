module qmr
{
	/**
	 *
	 * @description 可走动对象的基类
	 *
	 */
    export class BaseMover extends BaseObject
    {
        private vx: number;
        private vy: number;
        private disx: number;
        private disy: number;
        private destX: number;
        private destY: number;
        private distance: number;
        private onArrival: Function;
        private thisObject: any;
        protected dir: number;                      //当前方向
        public isMoving: boolean;                   //是否在移动中
        public speed: number;                       //移动速度
        public isCanMove: boolean;                  //当前是否能移动
        public moveScale: number = 1;               //移动时动画的频率
        private nearDiatance: number;

        public constructor()
        {
            super();
            this.speed = 15;
            this.moveScale = 1;
            this.dir = DirUtil.RIGHT;
            this.isMoving = false;
        }

        /**
		 * @description 玩家移动到某个点
		 * @param destX 目标X
		 * @param destY 目标Y
		 * @param onArrival 到达目的地返回函数
		 * @param target 目标
         * @param nearDiatance 代表离目标点多少距离就代表走到了，停止继续移动
		 */
        public moveTo(destX: number, destY: number, onArrival: Function = null, thisObject: any = null, nearDiatance: number = 1): void
        {
            let t = this;
            t.onGo();
            t.destX = Math.floor(destX);
            t.destY = Math.floor(destY);
            t.onArrival = onArrival;
            t.thisObject = thisObject;
            t.nearDiatance = nearDiatance;

            t.disx = t.destX - t.x;
            t.disy = t.destY - t.y;
            t.distance = Math.sqrt(t.disx * t.disx + t.disy * t.disy);
            t.vx = (t.disx / t.distance) * t.speed * t.moveScale;
            t.vx = Math.floor(t.vx);
            t.vy = (t.disy / t.distance) * t.speed * t.moveScale;
            t.vy = Math.floor(t.vy);

            Ticker.getInstance().unRegisterTick(t.enterFrameMove, t);
            Ticker.getInstance().registerTick(t.enterFrameMove, t, 33);
        }

        /**
         * @description 每帧移动
         */
        private enterFrameMove(): void
        {
            let t: BaseMover = this;
            t.disx = t.destX - t.x;
            t.disy = t.destY - t.y;
            t.distance = Math.sqrt(t.disx * t.disx + t.disy * t.disy);
            if (t.distance < 5 || t.distance <= t.nearDiatance)
            {
                if (t.x != t.destX) t.x = t.destX;
                if (t.y != t.destY) t.y = t.destY;
                Ticker.getInstance().unRegisterTick(this.enterFrameMove, this);
                t.onStop();
                if (t.onArrival)
                {
                    t.onArrival.call(t.thisObject);
                }
                return;
            }
            if (Math.abs(t.x - t.destX) < Math.abs(t.vx))
            {
                t.vx = t.destX - t.x;
            }
            if (Math.abs(t.y - t.destY) < Math.abs(t.vy))
            {
                t.vy = t.destY - t.y;
            }
            if (t.vx != 0)
            {
                t.x += t.vx;
            }
            if (t.vy != 0)
            {
                t.y += t.vy;
            }
            t.onMoving();
        }

		/**
		 * @description 停止走动
		 */
        public stop(): void
        {
            this.onStop();
            Ticker.getInstance().unRegisterTick(this.enterFrameMove, this);
        }

		/**
		 * @description 当开始走的时候调用，需子类继承实现
		 */
        protected onGo(): void
        {
        }
		/**
		 * @description 当停止运动的时候调用,需子类继承实现
		 */
        protected onStop(): void
        {
        }
        /**
         * @description 当正在走的时候调用,需子类继承实现
         */
        protected onMoving(): void
        {
        }

		/**
		 * @description 获取当前方向
		 */
        public getDir(): number
        {
            return this.dir;
        }

		/**
		 * @description 资源释放
		 */
        public dispos(): void
        {
            let t = this;
            t.isMoving = false;
            Ticker.getInstance().unRegisterTick(t.enterFrameMove, t);
            super.dispos();
        }
    }
}
