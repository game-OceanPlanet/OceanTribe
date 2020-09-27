module qmr
{
	export class TombstoneDrop extends egret.DisplayObjectContainer
	{
		private img_icon: eui.Image;
		private dieffect: BaseEffect;//死亡特效
		public constructor()
		{
			super();
			// this.initBase();
		}

		public static getTombstoneDrop(): TombstoneDrop
		{
			var drop: TombstoneDrop = Pool.getItemByClass("TombstoneDrop", TombstoneDrop);
			return drop;
		}

		public static recovryTombstoneDrop(drop: TombstoneDrop): void
		{
			Pool.recover("TombstoneDrop", drop);
		}

		public delayShowEffect()
		{
			Ticker.getInstance().registerTick(this.showEffect, this, 500, 1);
		}

		private showEffect()
		{
			this.dieffect = EffectPlayer.playUIEffect("card_die", false, { x: 0, y: 0 }, this);
		}

		private initBase()
		{
			this.img_icon = new eui.Image();
			this.addChild(this.img_icon);
			this.loadImg();
		}

		private loadImg(): void
		{
			ResManager.getRes(SystemPathAft.unpack_battle + "ui_zd_mubei.png", this.onIconLoaded, this, LoadPriority.HIGH, RES.ResourceItem.TYPE_IMAGE);
		}

		private onIconLoaded(texture: egret.Texture): void
		{
			this.img_icon.texture = texture;
			this.layout();
		}

		private layout()
		{
			this.img_icon.anchorOffsetX = this.img_icon.width >> 1;
			this.img_icon.anchorOffsetY = this.img_icon.height >> 1;
		}

		public dispose()
		{
			Ticker.getInstance().unRegisterTick(this.showEffect, this);
			if (this.dieffect)
			{
				this.dieffect.dispos();
				this.dieffect = null;
			}
			TombstoneDrop.recovryTombstoneDrop(this);
			DisplayUtils.removeDisplay(this);
		}
	}
}