module qmr
{
	/**
	 *
	 * @author coler
	 * @description 飘血动画
	 *
	 */
	export class FloatHpTxt extends egret.DisplayObjectContainer
	{
		private txt_hp: eui.BitmapLabel;
		public constructor()
		{
			super();
			this.touchEnabled = this.touchChildren = false;
			this.txt_hp = new eui.BitmapLabel();
			this.txt_hp.letterSpacing = -5;
			this.addChild(this.txt_hp);
		}
		/**
		 * @description 飘血/加血
		 * @param  hurtType类型，1代表自己被攻击，0代表别的物体被攻击,2代表加血,3代表buff,4代表反伤
		 * @param hp 变更血量
		 * @param x 飘字X坐标
		 * @param y 飘字Y坐标
		 * @param dir 飘字方向
		 * @param buffName buff名字，如果是BUFF才有效
		 */
		public flyUp(hurtType: number, hp: number, x: number, y: number, dir: number = 0, buffName: string = ""): void
		{
			let t: FloatHpTxt = this;
			let txt_hp = t.txt_hp;
			let len = hp.toString().length;

			txt_hp.text = '';
			switch (hurtType)
			{
				// case com.message.HurtType.HEART_BIT://会心一击
				// 	txt_hp.width = 163 + 57 * (len + 1);
				// 	txt_hp.font = "font_huixin_fnt";
				// 	txt_hp.text = "h-" + hp;
				// 	break;
				// case com.message.HurtType.BASE_HIT://伤害
				// 	txt_hp.width = 42 * (len + 1);
				// 	txt_hp.font = "font_baoji_fnt";
				// 	txt_hp.text = "-" + hp;
				// 	break;
				// case com.message.HurtType.CRIT://暴击
				// 	txt_hp.width = 120 + 42 * (len + 1);
				// 	txt_hp.font = "font_baoji_fnt";
				// 	txt_hp.text = "b-" + hp;
				// 	break;
				// case com.message.HurtType.DODGE://未命中/闪避
				// 	txt_hp.width = 173;
				// 	txt_hp.font = "font_dodge_fnt";
				// 	txt_hp.text = "t";
				// 	break;
				// case com.message.HurtType.TREATMENT://加血
				// 	txt_hp.width = 45 * (len + 1);
				// 	txt_hp.font = "font_recovery_fnt";
				// 	txt_hp.text = "+" + hp;
				// 	if (hp == 0)
				// 	{
				// 		FloatPool.getInstance().recycleFloatHp(t);
				// 		return;
				// 	}
				// 	break;
				// case com.message.HurtType.BASE_HIT://buff
				// 	txt_hp.font = "buff_fnt";
				// 	txt_hp.text = buffName;
				// 	break;
				// case com.message.HurtType.BASE_HIT://反伤
				// 	txt_hp.font = "font_injured_fnt";
				// 	txt_hp.text = "f-" + hp;
				// 	break;
			}
			//console.log("FloatHpTxt:",txt_hp.font, txt_hp.text);

			t.x = x;
			t.y = y + 50;
			t.anchorOffsetX = t.txt_hp.width >> 1;
			t.anchorOffsetY = t.txt_hp.height >> 1;
			t.scaleX = t.scaleY = 1;

			let mx = t.x;
			let my = t.y;
			let ran = Math.floor(Math.random() * 40);
			my -= ran;
			egret.Tween.get(t).to({ x: mx, y: my - 50, scaleX: 2, scaleY: 2 }, 200).wait(50)
				.to({ scaleX: 1, scaleY: 1 }, 200).wait(300)
				.to({ x: mx, y: my - 80, alpha: 0.7 }, 300)
				.to({ x: mx, y: my - 120, alpha: 0 }, 300)
				.call(function ()
				{
					// FloatPool.getInstance().recycleFloatHp(t);
				}, t);

			SceneManager.instance.addToFront(t);
		}
	}
}
