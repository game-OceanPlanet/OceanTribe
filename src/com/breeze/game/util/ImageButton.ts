class ImageButton {

	private _img: eui.Image;

	private _baseScaleX: number;
	private _baseScaleY: number;

	public constructor(img: eui.Image) {
		let me = this;
		me._img = img;
		me._baseScaleX = img.scaleX;
		me._baseScaleY = img.scaleY;
		if (img.texture) {
			imgComplete();
		} else {
			img.once(egret.Event.COMPLETE, imgComplete, me);
		}
		img.addEventListener(egret.TouchEvent.TOUCH_BEGIN, me.onTouchBegin, me);
		function imgComplete() {
			let txt = img.texture;
			if (txt) {
				img.anchorOffsetX = txt.textureWidth >> 1;
				img.anchorOffsetY = txt.textureHeight >> 1;
				img.x += img.anchorOffsetX * me._baseScaleX;
				img.y += img.anchorOffsetY * me._baseScaleY;
				// img.$measureContentBounds = (bounds)=>{
				// 	var offsetX = ((img.width / img.scaleX)  - img.width) * 0.5;
				// 	var offsetY = ((img.height / img.scaleY)  - img.height) * 0.5;
				// 	bounds.setTo(-1 - offsetX, -1 - offsetY, img.width / img.scaleX + 2, img.height / img.scaleY + 2);
				// };
			}
		}
	}

	private onTouchBegin(): void {
		let me = this;
		let img = me._img;
		if (img.touchEnabled) {
			let sc = 0.94;
			img.scaleX = sc * me._baseScaleX;
			img.scaleY = sc * me._baseScaleY;
			img.once(egret.TouchEvent.TOUCH_END, me.onTouchEnd, me);
		}
		// $sound.play(SoundStatic.BUTTON);
	}

	private onTouchEnd(e: egret.TouchEvent): void {
		let me = this;
		let img = me._img;
		if (img.touchEnabled) {
			img.scaleX = me._baseScaleX;
			img.scaleY = me._baseScaleY;
			if (e.target != img) {
				img.dispatchEventWith(egret.TouchEvent.TOUCH_TAP);
			}
		}
	}

	get img() {
		return this._img;
	}

	set enabled(bool: boolean) {
		let me = this;
		me.$setEnable(bool);
	}

	get enabled(): boolean {
		return this._img ? this.img.touchEnabled : false;
	}

	$setEnable(bool: boolean) {
		let me = this;
		if (bool != me._img.touchEnabled) {
			me._img.touchEnabled = bool;
			// me._img.filters = bool ? null : FilterUtil.FILTER_GRAY;
		}
	}

}
