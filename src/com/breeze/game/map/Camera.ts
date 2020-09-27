module qmr
{
	/**一个正交摄像机demo*/
	export class Camera
	{
		/**摄像机显示的对象，实际是镜头所对应的世界*/
		m_container: eui.UILayer;
		/**摄像机宽 */
		m_width: number;
		/**摄像机高 */
		m_height: number;
		/**摄像机的焦点X */
		m_zoomX: number;
		/**摄像机的焦点Y */
		m_zoomY: number;
		/**摄像机焦距*/
		m_zoom: number;
		/**跟随对象 */
		m_follower: eui.Component;
		/**摄像机X轴偏移值 */
		m_cameraOffsetX: number;
		/**摄像机Y轴偏移值 */
		m_cameraOffsetY: number;

		public constructor(width: number, height: number)
		{
			this.updateSize(width, height);
		}

		public updateSize(width: number, height: number)
		{
			this.m_width = width;
			this.m_height = height;
			this.m_cameraOffsetX = 0;
			this.m_cameraOffsetY = 0;
		}

		/**初始化相机，绑定镜头 */
		public init(container: eui.UILayer)
		{
			this.m_container = container;
			this.m_zoomX = this.m_container.x;
			this.m_zoomY = this.m_container.y;
		}

		/**
		* 设置镜头锚点,确定镜头的聚焦点
		*/
		public setAnchor(pos: egret.Point)
		{
			if (this.m_container != null && pos)
			{
				this.m_container.anchorOffsetX = pos.x;
				this.m_container.anchorOffsetY = pos.y;
				this.m_container.x = this.m_container.anchorOffsetX;
				this.m_container.y = this.m_container.anchorOffsetY;
				this.m_zoomX = this.m_container.anchorOffsetX;
				this.m_zoomY = this.m_container.anchorOffsetY;
			}
		}

		/**设置镜头焦距
		 * @param zoom 焦距，镜头距离世界的比例，默认为1，焦距越小，视觉越大
		*/
		public setZoom(zoom: number)
		{
			if (this.m_container != null)
			{
				this.m_container.scaleX = this.m_container.width / this.m_width / zoom;
				this.m_container.scaleY = this.m_container.height / this.m_height / zoom;
			}
		}
		/**旋转
		 * @param rotation 旋转角度
		 * 
		 */
		public setRotation(rotation: number)
		{
			if (this.m_container != null)
			{
				this.m_container.rotation = rotation;
			}
		}
		/**设置跟随者 */
		public follow(follower: eui.Component)
		{
			if (this.m_container != null)
			{
				this.m_follower = follower;
				this.m_zoomX = this.m_follower.x;
				this.m_zoomY = this.m_follower.y;
				// this.setAnchor(this.m_follower.x / this.m_container.width, this.m_follower.y / this.m_container.height);
			}
		}
		/**摄像机X轴移动 
		 * @param x 沿x轴移动的有向速度
		 * 
		*/
		public CameraMoveX(x: number)
		{
			console.log(x);
			this.m_cameraOffsetX = x;
			this.CameraUpdate();
			this.m_cameraOffsetX = 0;
		}
		/**摄像机Y轴移动 
		 * @param y 沿y轴移动的有向速度
	 	 * 
		 */
		public CameraMoveY(y: number)
		{
			this.m_cameraOffsetY = y;
			this.CameraUpdate();
			this.m_cameraOffsetY = 0;
		}

		/**通过摄像头偏移值计算世界内物品的偏移值
		 * 如果设置了跟随者，则跟随者在世界内的距离不变，其他物体根据镜头偏移量进行坐标修正
		 * 如果没有设置跟随者，则视世界全局可见，全员根据镜头偏移量进行坐标修正
		 * 注意1：摄像机移动的实现方式实际是世界内物品相对于世界进行的坐标的移动，但世界本身是固定的，变化的只是世界内部的物体
		 * 注意2:实际上，这里的坐标修正应该交给各个世界对象去自行实现，以便各物体对象能以此修正自身的行为，这里为了形成一个
		 * 统一的认识而把偏移的工作放进摄像机，就造成摄像机的功能比较单一的问题
		*/
		public CameraUpdate()
		{
			for (let i = 0; i < this.m_container.numChildren; i++)
			{
				if (this.m_follower != null)
				{
					if (this.m_follower != this.m_container.getChildAt(i))
					{
						this.m_container.getChildAt(i).x -= this.m_cameraOffsetX;
						this.m_container.getChildAt(i).y -= this.m_cameraOffsetY;
					}
				} else
				{
					this.m_container.getChildAt(i).x -= this.m_cameraOffsetX;
					this.m_container.getChildAt(i).y -= this.m_cameraOffsetY;
				}
			}
		}
	}
}