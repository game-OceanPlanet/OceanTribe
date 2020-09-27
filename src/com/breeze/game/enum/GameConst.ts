//货币常量
enum CoinType
{
	/**金币*/
	JINBI = 1,
	/**元宝*/
}

//战斗特效播放位置,UI层特效无需此值
enum EffectPosition
{
	CARD_BOTTOM = 0,		//边框下，特效低于边框
	CARD_OVER = 1,			//边框上，特效在边框和人物之间
	CARD_FRONT = 2,			//卡牌上，特效高于卡牌和人物
	CARD_TOP = 3,			//不在卡牌上，在场景之上，特效高于物体层级
}


//角色类型
enum ActorType
{
	HERO = 0,			//我方
	MONSTER = 1,		//敌方
	BOSS = 2,			//敌方BOSS
	DROP = 3			//掉落物
}

//技能动作类型
enum SkillActionType
{
	ACTION_1 = 1,//移动到目标位置攻击
	ACTION_2 = 2,//突现到目标位置
	ACTION_3 = 3,//远程，子弹飞行攻击
	ACTION_4 = 4,//远程，天降技能，同时受击
	ACTION_5 = 5,//远程，天降技能，中心受击之后，外网再次受击
	ACTION_6 = 6,//远程闪攻击，目标依次受击
	ACTION_7 = 7,//治疗，仅仅有施法，治疗受击
	ACTION_8 = 8,//远程，暴风雪在2和5、8和11之间释放一个效果
	ACTION_9 = 9,//远程，暴风雪在2和5、8和11之间释放一个效果
	ACTION_10 = 10,//远程，暴风雪在2和5、8和11之间释放一个效果,没有角度
	ACTION_11 = 11,//远程，从受击目标对面垂直飞行过来攻击
	ACTION_12 = 12,//远程，播放一个弹道效果从己方外面，飞行到对面界面外
	ACTION_13 = 13,//远程，子弹连发,多段攻击
}

//敌我阵营
enum CampType
{
	FOE = 0,		//敌方
	OUR = 1,		//我方
}

//特效常量
enum EffectConst
{
	ACTOR_DIE_EFFECT = 3007, 	//卡牌死亡特效
	VICOTYR_EFFECT = 8027,		//胜利效果
	HALO_SHUI = 100,		//粒子
	HALO_SHUIDI = 101,		//水底
	CHANGE_HERO_EFFECT = 102,//测试用切换卡牌特效
	CARD_QUALITY_EFFECT_6000 = 6000,	//卡牌边框特效_紫色
	CARD_QUALITY_EFFECT_6001 = 6001,	//卡牌边框特效_橙色
	CARD_QUALITY_EFFECT_6002 = 6002,	//卡牌边框特效_红色

	CARD_QUALITY_EFFECT_6005 = 6005,	//卡牌边框怒气特效
	CARD_QUALITY_EFFECT_6006 = 6006,	//卡牌边框进度条怒气

	HALO_SKILL_6006 = 6006, 		 	//普通大招_蓝白爆点
	HALO_SKILL_6007 = 6007, 		 	//羁绊大招_橙红爆点

	hang_skill_13004 = 13004,			//挂机男主角施法怪物受击特效
	hang_skill_13005 = 13005,			//挂机男主角施法特效1
	hang_skill_13006 = 13006,			//挂机男主角施法特效2
	hang_skill_13007 = 13007,			//挂机男主角施法怪物受击特效
	hang_skill_13008 = 13008,			//挂机女主角施法特效1
	hang_skill_13009 = 13009,			//挂机女主角施法特效2


	/** 。。。。。。。。。。以下暂未用到。。。。。。 */

	BIG_SELECT_EFFECT = 40107, //大一点的选中框
	AUTO_FIGHT_EFFECT = 8001, //自动战斗特效
	SMALL_SELECT_EFFECT = 40106, //小一点的选中框
	LEVELUP_EFFECT = 8002,		//升级特效
	CLICK_EFFECT = 8003,			//点击特效
	TASK_COMPLETE_EFFECT = 8004,	//任务完成特效
	MELT_EFFECT = 8005,			//熔炼特效
	STRENGTH_EFFECT = 8051,		//强化成功
	UPSTAR_EFFECT = 8051,			//升星成功
	JINGJIE_EFFECT = 8051,	//进阶成功
	UP_PING_EFFECT = 8051,		//升品成功
	SKILL_ADD_EFFECT = 8021,	//技能突破和激活成功特效
	SKILL_UPGRADE = 8022,       //技能升级成功特效
	TASK_AWARD_EFFECT = 8023,		//任务可领取奖励特效
	TASK_CLICK_EFFECT = 8024,		//任务的点击特效
	BOX_AWARD_EFFECT = 8025,		//宝箱可领取状态特效
	ICON_SELECT_EFFECT = 8026,		//icon选中效果

	GREEN_HANDER = 8028,		//手指点击效果
	TASK_DONE = 8029,				//新艘任务完成效果
	TOUCH_BTN = 8030,              //缠绵按钮特效
	CANTOUCH_EFFECT = 8031,        //可缠绵特效
	PRESENTGIFT_EFFECT = 8032,     //送礼成功特效
	GOLD_EFFECT = 8033,				//摇钱树特效
	PETALSFLY_EFFECT = 8034,        //花瓣飘飞特效
	BEAUTYFIT_EFFECT = 8035,        //美人合体特效
	MARTIAL_EFFECT = 8040,          //武学升级特效
	TAOBAO_WEAPON1 = 8041,			//淘宝武器1特效
	TAOBAO_WEAPON2 = 8042,			//淘宝武器2特效
	TAOBAO_WEAPON3 = 8043,  			//淘宝武器3特效
	PROGRESS_EFFECT = 8044,  			//进度条特效
	CAVALRY_EFFECT = 8045,			//骑兵特效
	INTERACTION_EFFECT = 8046,			//互动特效
	SKILL_SINGLE_UP = 8047,				//单个技能升级特效
	BEAUTY_LIKE_EFFECT = 8048,			//好感度增加特效
	ANSWER_EFFECT = 8049,                //答题正确特效
	INTERACTION_OPERA_EFFECT = 8050,      //互动按钮可操作时特效
	STONE_EFFECT = 8051,					//装备宝石升级特效
	TURNSTAR_EFFECT = 8052,				//美人转身五角星特效
	RELIVE_EFFECT = 9009				//复活特效
}

//颜色值常量
enum ColorConst
{
	COLOR_WHITE = 0xffffff,	//白色
	COLOR_BLACK = 0x0,		//黑色
	COLOR_VIOLET = 0xff00ff,	//淡紫色
	COLOR_PURPLE = 0xA020F0,//紫色
	COLOR_GREEN = 0x00ff00,	//翠绿色
	COLOR_CADMIUM = 0xFF9000, //镉黄色
	COLOR_RED = 0xFF0000,		//红色
	COLOR_BLUE = 0x2289fe,		//孔雀蓝
	COLOR_SKILL = 0x00FFFF,   //技能名字前面的描述

	//游戏用到颜色枚举
	COMMON_GREEN = 0x05a80d, //绿色
	COMMON_GREEN2 = 0x178947,//绿色
	COMMON_BROWN = 0x5a2e2b, //褐色
	COMMON_BULE = 0x489bc2,  //蓝色
	COMMON_YELLOW = 0xfefc94,  //黄色
	COMMON_BR = 0x803f07,//棕色
	COMMON_BR2 = 0x926b47,//浅棕色
	COMMON_ORANGE = 0xef5500,//橙色
	COMMON_WHITE = 0xffffff,//白色
	COMMON_RED = 0xdd1900,//红色
	COMMON_PURPLE = 0x9328c1,//紫色
	COMMON_BLUE1 = 0x2b9bcf,//蓝色


}

