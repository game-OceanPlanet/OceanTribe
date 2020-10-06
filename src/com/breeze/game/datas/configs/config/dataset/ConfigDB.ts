module qmr
{
	export class HelpTipCfg extends BaseBean
	{
		/**ID*/
	get id():number
	{			
		return this.d["id"];			
	}
	/**标题*/
	get title():string
	{			
		return this.d["title"];			
	}
	/**参数*/
	get param():string
	{			
		return this.d["param"];			
	}

		constructor(element)
		{				
			super(element)
		this.key="id";
		}
	}

	export class PetCfg extends BaseBean
	{
		/**宠物ID*/
	get id():number
	{			
		return this.d["id"];			
	}
	/**宠物名称*/
	get name():string
	{			
		return this.d["name"];			
	}
	/**模型编号*/
	get resId():string
	{			
		return this.d["resId"];			
	}
	/**周期*/
	get limitTime():number
	{			
		return this.d["limitTime"];			
	}
	/**等级*/
	get level():number
	{			
		return this.d["level"];			
	}
	/**月化*/
	get monthly():number
	{			
		return this.d["monthly"];			
	}
	/**每日产出*/
	get produce():number
	{			
		return this.d["produce"];			
	}
	/**直推人数*/
	get directPerson():number
	{			
		return this.d["directPerson"];			
	}
	/**团队规模*/
	get teamPerson():number
	{			
		return this.d["teamPerson"];			
	}
	/**购买星级*/
	get UBuyStar():number
	{			
		return this.d["UBuyStar"];			
	}
	/**U购买价格*/
	get UBuyPrice():number
	{			
		return this.d["UBuyPrice"];			
	}
	/**购买价格*/
	get price():number
	{			
		return this.d["price"];			
	}

		constructor(element)
		{				
			super(element)
		this.key="id";
		}
	}

	export class MapCfg extends BaseBean
	{
		/**地图ID*/
	get mapId():number
	{			
		return this.d["mapId"];			
	}
	/**循环次数    (循环计算：①单波BOSS的 高度要有2000  ②无限重复的挂机地图 高度需要2000  ③3/4/5波怪的这种 需要配置BOSS地图+循环地图 总长度 超过2700，不要太长否则跑动的时间会增加）*/
	get bgRetimes():string
	{			
		return this.d["bgRetimes"];			
	}
	/**图片高度（美术输出的分辨率宽 和 高，750*1334 则填写1334，多张图用“|”隔开）*/
	get bgHeight():string
	{			
		return this.d["bgHeight"];			
	}
	/**资源名字1（支持配置多张地图，前面是循环图，BOSS是特殊图。多个地图用“|"隔开）*/
	get bgNames():string
	{			
		return this.d["bgNames"];			
	}
	/**几波怪物的出生点，总长度的X%处出生，配置多波怪物用"|"分开*/
	get labelsEvent():string
	{			
		return this.d["labelsEvent"];			
	}
	/**背景类型:
0：循环X波，出生点配置3个，3波怪
1：挂机场景，一直循环
2：一张背景图不循环，用于BOSS副本单关卡*/
	get bgType():number
	{			
		return this.d["bgType"];			
	}

		constructor(element)
		{				
			super(element)
		this.key="mapId";
		}
	}

	export class XinHangUpCfg extends BaseBean
	{
		/**战斗地图ID*/
	get mapId():number
	{			
		return this.d["mapId"];			
	}
	/**名字*/
	get name():string
	{			
		return this.d["name"];			
	}
	/**挂机师徒四人位置高度，默认380*/
	get roadHeight():number
	{			
		return this.d["roadHeight"];			
	}
	/**挂机场景资源ID*/
	get mapResId():number
	{			
		return this.d["mapResId"];			
	}
	/**小怪模型（多个用,分隔）*/
	get showUiModel():string
	{			
		return this.d["showUiModel"];			
	}
	/**BOSS模型（多个用,分隔）*/
	get bossShowUiModel():string
	{			
		return this.d["bossShowUiModel"];			
	}
	/**遇怪时长（最小时间,最大时间）*/
	get time():string
	{			
		return this.d["time"];			
	}
	/**遇怪波数（最小波数,最大波数）*/
	get step():string
	{			
		return this.d["step"];			
	}
	/**背景音*/
	get music():string
	{			
		return this.d["music"];			
	}

		constructor(element)
		{				
			super(element)
		this.key="mapId";
		}
	}

	export class SkillCfg extends BaseBean
	{
		/**技能id
主角技能-101001-106000
*/
	get skillId():number
	{			
		return this.d["skillId"];			
	}
	/**名字*/
	get name():string
	{			
		return this.d["name"];			
	}
	/**等级*/
	get level():number
	{			
		return this.d["level"];			
	}
	/**技能分组*/
	get group():number
	{			
		return this.d["group"];			
	}
	/**概率技能优先级 多个概率技能优先级触发 普攻填0 能量型技能请填最大值100*/
	get seq():number
	{			
		return this.d["seq"];			
	}
	/**描述*/
	get desc():string
	{			
		return this.d["desc"];			
	}
	/**技能战斗力*/
	get skillFightVal():number
	{			
		return this.d["skillFightVal"];			
	}
	/**图标*/
	get icon():string
	{			
		return this.d["icon"];			
	}
	/**类型 1普通技能、2概率性技能、3能量型技能*/
	get type():number
	{			
		return this.d["type"];			
	}
	/**下一级技能ID*/
	get nextSkillId():number
	{			
		return this.d["nextSkillId"];			
	}
	/**升级消耗*/
	get cost():string
	{			
		return this.d["cost"];			
	}
	/**效果ID*/
	get effectId():number
	{			
		return this.d["effectId"];			
	}
	/**终极技能*/
	get ultimateEffectId():number
	{			
		return this.d["ultimateEffectId"];			
	}
	/**武将tips中是否不展示（1，不展示）*/
	get isHide():number
	{			
		return this.d["isHide"];			
	}

		constructor(element)
		{				
			super(element)
		this.key="skillId";
		}
	}

	export class TemplateCfg extends BaseBean
	{
		/**地图ID*/
	get mapId():number
	{			
		return this.d["mapId"];			
	}
	/**地图名*/
	get mapname():string
	{			
		return this.d["mapname"];			
	}

		constructor(element)
		{				
			super(element)
		this.key="mapId";
		}
	}

	export class InjectCycleCfg extends BaseBean
	{
		/**周期ID*/
	get id():number
	{			
		return this.d["id"];			
	}
	/**权重*/
	get weights():number
	{			
		return this.d["weights"];			
	}
	/**周期时长*/
	get cycle():number
	{			
		return this.d["cycle"];			
	}
	/**周期描述*/
	get des():string
	{			
		return this.d["des"];			
	}

		constructor(element)
		{				
			super(element)
		this.key="id";
		}
	}

	export class TradeCostCfg extends BaseBean
	{
		/**编号*/
	get id():number
	{			
		return this.d["id"];			
	}
	/**直推人数*/
	get count():number
	{			
		return this.d["count"];			
	}
	/**手续费比例*/
	get precent():string
	{			
		return this.d["precent"];			
	}

		constructor(element)
		{				
			super(element)
		this.key="id";
		}
	}

	export class DirectRateCfg extends BaseBean
	{
		/**编号*/
	get id():number
	{			
		return this.d["id"];			
	}
	/**直推人数*/
	get count():number
	{			
		return this.d["count"];			
	}
	/**直推收益,每次领币百分比提成*/
	get precent():string
	{			
		return this.d["precent"];			
	}

		constructor(element)
		{				
			super(element)
		this.key="id";
		}
	}

	export class TeamRateCfg extends BaseBean
	{
		/**编号*/
	get id():number
	{			
		return this.d["id"];			
	}
	/**团队人数*/
	get allCount():number
	{			
		return this.d["allCount"];			
	}
	/**直推人数*/
	get directCount():number
	{			
		return this.d["directCount"];			
	}
	/**非直推人数*/
	get otherCount():number
	{			
		return this.d["otherCount"];			
	}
	/**团队收益,非直每次领币百分比提成*/
	get precent():string
	{			
		return this.d["precent"];			
	}
	/**desc*/
	get dec():string
	{			
		return this.d["dec"];			
	}

		constructor(element)
		{				
			super(element)
		this.key="id";
		}
	}

	export class CommonConfigCfg extends BaseBean
	{
		/**ID*/
	get id():number
	{			
		return this.d["id"];			
	}
	/**参数*/
	get param():string
	{			
		return this.d["param"];			
	}

		constructor(element)
		{				
			super(element)
		this.key="id";
		}
	}

	export class OutBossInspireCfg extends BaseBean
	{
		/**鼓舞等级*/
	get level():number
	{			
		return this.d["level"];			
	}
	/**消耗材料*/
	get cost():string
	{			
		return this.d["cost"];			
	}
	/**鼓舞buff：buffId1，buffId2*/
	get buffs():string
	{			
		return this.d["buffs"];			
	}
	/**描述*/
	get dec():string
	{			
		return this.d["dec"];			
	}

		constructor(element)
		{				
			super(element)
		this.key="level";
		}
	}

	export class SkillEffectCfg extends BaseBean
	{
		/**技能效果ID*/
	get id():number
	{			
		return this.d["id"];			
	}
	/**动效类型（
1.移动到目标位置攻击：普攻刀光。。
2.突现到目标位置：闪现突刺
3.远程，子弹飞行攻击：弹道
4.远程，天降技能，同时受击：群疗类，群体效果，所有目标都会播放一个单独的表现效果，同时播放受击效果
5.远程，天降技能，中心受击之后，外网再次受击（暂未测用）
6.远程，闪攻击，目标依次受击：闪电链
7.治疗，仅仅有施法，治疗受击：灵宠治疗
8.远程，暴风雪在2和5、8和11之间释放一个效果：远程AOE，特效表现在固定点
9.远程，播放一个弹道效果之后在2和5、8和11之间释放一个效果：对固定点播放弹道效果，弹道（AOE）特效的方向 需要旋转
10.远程，播放一个弹道效果之后在2和5、8和11之间释放一个效果（无角度）对固定点播放弹道效果，弹道（AOE）无方向，不需要旋转
11.远程，目标对应列下方飞出（男主飞剑技能）
12.远程，播放一个弹道效果从己方外面，飞行到对面界面外）：牛魔王的蛮牛冲，坐骑部分技能*/
	get action_type():number
	{			
		return this.d["action_type"];			
	}
	/**起手特效*/
	get cast_effect():number
	{			
		return this.d["cast_effect"];			
	}
	/**起手特效（持续播放时间）*/
	get cast_showTime():number
	{			
		return this.d["cast_showTime"];			
	}
	/**起手时间（多久之后播放表现特效）*/
	get cast_time():number
	{			
		return this.d["cast_time"];			
	}
	/**表现特效*/
	get show_effect():number
	{			
		return this.d["show_effect"];			
	}
	/**飞行速度，远程技能需要*/
	get speed():number
	{			
		return this.d["speed"];			
	}
	/**闪电链/远程AOE依次触发效果*/
	get orderly_effect():number
	{			
		return this.d["orderly_effect"];			
	}
	/**表现持续时间*/
	get show_durotion():number
	{			
		return this.d["show_durotion"];			
	}
	/**表现特效多久之后播放爆点的间隔时间*/
	get show_time():number
	{			
		return this.d["show_time"];			
	}
	/**多段伤害（针对远程技能技能13类型，多次表现,时间间隔：3,100:就是表现三次，每次间隔100毫秒）*/
	get multiTimes():string
	{			
		return this.d["multiTimes"];			
	}
	/**多段伤害（表现特效开始后爆伤害的时间，第一次伤害的权重；第二次爆伤害的时间，第二次伤害的权重。。。。）*/
	get multistage():string
	{			
		return this.d["multistage"];			
	}
	/**击中特效*/
	get hit_effect():number
	{			
		return this.d["hit_effect"];			
	}
	/**命中延迟（与show_time 共同控制多久后播放爆点）*/
	get hitDelay():number
	{			
		return this.d["hitDelay"];			
	}
	/**是否附带震屏效果*/
	get shake():number
	{			
		return this.d["shake"];			
	}
	/**震屏时间点*/
	get shakeTimePoint():number
	{			
		return this.d["shakeTimePoint"];			
	}
	/**震屏持续时间*/
	get shakeTime():number
	{			
		return this.d["shakeTime"];			
	}
	/**整个效果持续时长*/
	get node_duration():number
	{			
		return this.d["node_duration"];			
	}
	/**镜头缩放*/
	get cameraStartTime():number
	{			
		return this.d["cameraStartTime"];			
	}
	/**镜头聚焦之后持续时间*/
	get cameraWaitTime():number
	{			
		return this.d["cameraWaitTime"];			
	}
	/**聚焦时间*/
	get cameraScaleTime():number
	{			
		return this.d["cameraScaleTime"];			
	}

		constructor(element)
		{				
			super(element)
		this.key="id";
		}
	}

	export class EffectDataCfg extends BaseBean
	{
		/**特效Id*/
	get id():number
	{			
		return this.d["id"];			
	}
	/**特效引用资源hide*/
	get res():string
	{			
		return this.d["res"];			
	}
	/**播放次数hide*/
	get playTimes():number
	{			
		return this.d["playTimes"];			
	}
	/**播放位置*/
	get position():number
	{			
		return this.d["position"];			
	}
	/**缩放比*/
	get scale():number
	{			
		return this.d["scale"];			
	}
	/**位图模式*/
	get blendMode():number
	{			
		return this.d["blendMode"];			
	}
	/**是否是随机从某一帧播放*/
	get isRandomPlay():number
	{			
		return this.d["isRandomPlay"];			
	}
	/**音效*/
	get sound():string
	{			
		return this.d["sound"];			
	}
	/**是否需要垂直翻转*/
	get needOverturn():number
	{			
		return this.d["needOverturn"];			
	}

		constructor(element)
		{				
			super(element)
		this.key="id";
		}
	}

	export class ClientCnCfg extends BaseBean
	{
		/**键*/
	get id():string
	{			
		return this.d["id"];			
	}
	/**值*/
	get value():string
	{			
		return this.d["value"];			
	}
	/**颜色:1：绿色，0：红色 --默认不填不设置颜色*/
	get colerType():number
	{			
		return this.d["colerType"];			
	}

		constructor(element)
		{				
			super(element)
		this.key="id";
		}
	}

}