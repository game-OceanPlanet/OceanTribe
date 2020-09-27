module qmr
{
	/**
	 *
	 * 
	 *  1.移动到目标位置攻击
		2.突现到目标位置
		3.远程，子弹飞行攻击
		4.远程，天降技能，同时受击
		5.远程，天降技能，中心受击之后，外网再次受击
		6.远程，闪攻击，目标依次受击
		7.治疗，仅仅有施法，治疗受击
		8.远程，暴风雪在2和5、8和11之间释放一个效果
		9远程，播放一个弹道效果之后在2和5、8和11之间释放一个效果
		10远程，播放一个弹道效果之后在2和5、8和11之间释放一个效果,没有角度
		11远程，从受击目标对面垂直飞行过来攻击
		12远程，播放一个弹道效果从己方外面，飞行到对面界面外
		13远程，子弹连发,多段攻击
	 * 
	 * @description 技能工厂
	 *
	 */
	export class SkillFactory
	{
		public static currSkillProxy: BaseSkillProxy;
		/**
		 * 返回对应的技能处理类
		 * @owner 	技能施法者
		 * @skillId 技能效果ID
		 */
		public static getSkillProxy(owner: BaseMoverActor, skillId: number, effectId: number, targetList: any): BaseSkillProxy
		{
			let skillData: SkillEffectCfg = (effectId > 0) ? SkillModel.instance.getSkillEffectData(effectId) : SkillModel.instance.getSkillEffectDataBySkillId(skillId);
			if (skillData)
			{
				let baseSkillProxy: BaseSkillProxy;
				switch (skillData.action_type)
				{
					case SkillActionType.ACTION_1://移动到目标位置攻击
						baseSkillProxy = SkillAction1Proxy.getSkillProxy();
						break;
					case SkillActionType.ACTION_2://突现到目标位置
						baseSkillProxy = SkillAction2Proxy.getSkillProxy();
						break;
					case SkillActionType.ACTION_3://远程，子弹飞行攻击
						baseSkillProxy = SkillAction3Proxy.getSkillProxy();
						break;
					case SkillActionType.ACTION_4://远程，天降技能，同时受击
						baseSkillProxy = SkillAction4Proxy.getSkillProxy();
						break;
					case SkillActionType.ACTION_5://远程，天降技能，中心受击之后，外网再次受击
						baseSkillProxy = SkillAction5Proxy.getSkillProxy();
						break;
					case SkillActionType.ACTION_6://远程闪攻击，目标依次受击
						baseSkillProxy = SkillAction6Proxy.getSkillProxy();
						break;
					case SkillActionType.ACTION_7://治疗，仅仅有施法，治疗受击
						baseSkillProxy = SkillAction7Proxy.getSkillProxy();
						break;
					case SkillActionType.ACTION_8://远程，暴风雪在2和5、8和11之间释放一个效果
						baseSkillProxy = SkillAction8Proxy.getSkillProxy();
						break;
					case SkillActionType.ACTION_9://远程，播放一个弹道效果之后在2和5、8和11之间释放一个效果
						baseSkillProxy = SkillAction9Proxy.getSkillProxy();
						break;
					case SkillActionType.ACTION_10://远程，播放一个弹道效果之后在2和5、8和11之间释放一个效果,,没有角度
						baseSkillProxy = SkillAction10Proxy.getSkillProxy();
						break;
					case SkillActionType.ACTION_11://远程，从受击目标对面垂直飞行过来攻击
						baseSkillProxy = SkillAction11Proxy.getSkillProxy();
						break;
					case SkillActionType.ACTION_12://远程，播放一个弹道效果从己方外面，飞行到对面界面外
						baseSkillProxy = SkillAction12Proxy.getSkillProxy();
						break;
					case SkillActionType.ACTION_13://远程，子弹连发,多段攻击
						baseSkillProxy = SkillAction13Proxy.getSkillProxy();
						break;
					default:
						baseSkillProxy = SkillAction4Proxy.getSkillProxy();
						break;
				}

				LogUtil.logF("释放了一个技能：类型 " + skillData.action_type + " 目标数量:" + targetList.length)
				baseSkillProxy.setOwner(owner);
				baseSkillProxy.setSkillId(skillId, skillData);
				baseSkillProxy.setTargetList(targetList);
				SkillFactory.currSkillProxy = baseSkillProxy;
				return baseSkillProxy;
			}
			return null;
		}

		/** 回收当前执行的技能 */
		public static clearSkillProxy()
		{
			if (SkillFactory.currSkillProxy)
			{
				SkillFactory.currSkillProxy.recycleSkill();
			}
		}

	}
}
