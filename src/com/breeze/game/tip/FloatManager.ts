module qmr
{
	/**
	 * coler
	 * @desc 漂字提示管理器
	 */
	export class FloatManager
	{

		/**
		 * 创建一个飘血的提示
		 * @param  hurtType类型，1代表自己被攻击，0代表别的物体被攻击,2代表加血,3代表buff,4代表反伤
		 * @param hp 变更血量
		 * @param x 飘字X坐标
		 * @param y 飘字Y坐标
		 * @param dir 飘字方向
		 * @param buffName buff名字，如果是BUFF才有效
		 */
		public static createFloatHp(hurtType: number, hp: number, x: number, y: number, times: number = 1, dir: number = 0, buffName: string = ""): void
		{
			// if (times <= 1)
			// {
			// 	let floatHp: FloatHpTxt = FloatPool.getInstance().createFloatHp();
			// 	floatHp.flyUp(hurtType, hp, x, y, dir, buffName);
			// } else
			// {
			// 	new MultiFloatHp(hurtType, hp, x, y, times, dir);
			// }
		}
	}
}