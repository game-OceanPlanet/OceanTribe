module qmr {
	export class BesselImgUtil {
		public constructor() {
		}
        
        
        public static flyMoney(fromPoint:egret.Point, toPoint:egret.Point):void
        {
			let tipGroup = LayerManager.instance.getLayer(LayerConst.TOOLBAR);
			let pngName: string;

			let max = 6 + Math.random() * 5;
			let flys = [];
			for (let i = 0; i < max; i++)
			{
				pngName = "mainui_json.icon_gold1";
				let img = new eui.Image(pngName);
				img.x = fromPoint.x;
				img.y = fromPoint.y;
				img.name = MathUtil.distance(img, toPoint) + "";
				img.scaleX = img.scaleY = 0.3;
				tipGroup.addChild(img);
				flys[i] = img;
			}

			flys.sort((a, b)=>{
				let c = parseFloat(a.name);
				let d = parseFloat(b.name);
				if (c == d)
				{
					return c - d;
				}
				return c - d;
			});
			if (true)
			{
				let toPos: egret.Point = new egret.Point();
				for (let i = 0; i < max; i++)
				{
					let img = flys[i];
					toPos.x = img.x + 50 * Math.random() * (Math.random() > 0.5 ? -1 : 1);
					toPos.y = img.y + 50 * Math.random() * (Math.random() > 0.5 ? -1 : 1);
					let flyImg = new BezierFlyImg();
					flyImg.img = img;
					flyImg.p0 = toPos.clone();
					flyImg.p2 = toPoint;
					flyImg.p1 = toPos.clone();
					flyImg.p1.x = toPoint.x + 200;
					flyImg.p1.y = toPoint.y - 50;
					egret.Tween.get(img).to({ x: toPos.x, y: toPos.y, scaleX: 1, scaleY: 1 }, 300, egret.Ease.quadIn)
						.wait(400).call(() =>
						{
							egret.Tween.get(flyImg).to({ factor: 1 }, 650 + i * 130).call(() =>
							{
								DisplayUtils.removeDisplay(img);
							});
						})//, egret.Ease.cubicOut
				}
			}
        }
    }
    
    /** 贝塞尔曲线飞行图片 */
	export class BezierFlyImg
	{
		public img: eui.Image;
		public p0: egret.Point;
		public p1: egret.Point;
		public p2: egret.Point;

		public get factor(): number
		{
			return 0;
		}

		//确保属性都有
		public set factor(value: number)
		{
			let t = this;
			let v = (1 - value);
			var v2 = v * v;
			t.img.x = v2 * t.p0.x + 2 * value * v * t.p1.x + value * value * t.p2.x;
			t.img.y = v2 * t.p0.y + 2 * value * v * t.p1.y + value * value * t.p2.y;
			t.img.scaleY = t.img.scaleX = 1 - value * 0.4;
		}
	}
}