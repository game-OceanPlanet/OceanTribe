module qmr {
	export class MessageID
	{
		/**
		 *
		 * @author coler 2018.12.11
		 * 消息ID自动生成，请勿修改
		 *
		 */
		/** 映射协议ID对应的协议名 */
		private static MSG_KEYS: qmr.Dictionary = new qmr.Dictionary();
		/** 游戏初始化调用 */
		public static init()
		{
			let self = this;
			let id:number;
			for (let p in self)
			{
				id = self[p];
				self.MSG_KEYS.set(id, p);
			}
		}

		/** 通过本类的协议ID映射协议名字 */
		public static getMsgNameById(id: number): string
		{
			return MessageID.MSG_KEYS.get(id)
		}
		
		public static MSG_EMPTY:number = 0;
		/**  异常消息 */
		public static S_EXCEPTION_MSG:number = 900; 
		/**  登录 */
		public static C_USER_LOGIN:number = 1001; 
		/**  登录成功 */
		public static S_USER_LOGIN:number = 1002; 
		/**  被封禁提示 */
		public static S_USER_LOGIN_BAN:number = 1003; 
		/** 短信登录 */
		public static C_USER_LOGIN_VERIFY_CODE:number = 1004; 
		/** 注册 */
		public static C_LOGIN_REGISTER:number = 1005; 
		public static S_LOGIN_REGISTER:number = 1006;
		/** 登出 */
		public static C_USER_LOGOUT:number = 1007; 
		public static S_USER_LOGOUT:number = 1008;
		/**  登录注册完成请求 角色信息 */
		public static C_USER_LOGIN_INIT_FINISH:number = 1009; 
		/**  登录注册完成请求 角色信息 */
		public static S_USER_LOGIN_INIT_FINISH:number = 1010; 
		/**  修改密码 */
		public static C_MODIFY_PASSWORD:number = 1011;  
		public static S_MODIFY_PASSWORD:number = 1012;
		/**  自己使用激活秘钥 */
		public static C_USE_KEY:number = 1013;  
		public static S_USE_KEY:number = 1014;
		/**  赠送激活秘钥 */
		public static C_GIVE_KEY:number = 1015; 
		public static S_GIVE_KEY:number = 1016;
		/**  获取激活秘钥记录 */
		public static C_GET_KEY_LIST:number = 1017;  
		public static S_GET_KEY_LIST:number = 1018;
		/**  发送短信验证码返回 */
		public static C_SEND_VERIFY_CODE:number = 1019;  
		public static S_SEND_VERIFY_CODE:number = 1020;
		/** 获取我的鱼儿 */
		public static C_GET_FISH_INFO:number = 1051; 
		public static S_GET_FISH_INFO:number = 1052;
		/** 购买鱼儿 */
		public static C_BUY_FISH:number = 1053; 
		public static S_BUY_FISH:number = 1054;
		/** 合并鱼儿 */
		public static C_COMBINE_FISH:number = 1055; 
		public static S_COMBINE_FISH:number = 1056;
		/** 领取金币奖励 */
		public static C_GET_MONEY_REWARD:number = 1057; 
		public static S_GET_MONEY_REWARD:number = 1058;
		/** 获取金币信息 */
		public static C_GET_MONEY_INFO:number = 1059; 
		public static S_GET_MONEY_INFO:number = 1060;
		/**  U购买鱼 */
		public static C_DIAMOND_BUY_FISH:number = 1061; 
		public static S_DIAMOND_BUY_FISH:number = 1062;
		/**  获取金币日志信息 */
		public static C_GET_MONEY_LOG_LIST:number = 1063; 
		public static S_GET_MONEY_LOG_LIST:number = 1064;
		/**  获取U日志信息 */
		public static C_GET_DIAMOND_LOG_LIST:number =1065;
		public static S_GET_DIAMOND_LOG_LIST:number = 1066;
		/** C->S 请求: 获取otc信息 */
		public static C_GET_OCT_MARKET_INFO:number = 1101; 
		public static S_GET_OCT_MARKET_INFO:number = 1102;
		/** C->S 请求: 买入金币（挂单） */
		public static C_MARKET_BUY:number = 1103;
		public static S_MARKET_BUY:number = 1104;
		/** C->S 请求: 卖给Ta，获得U */
		public static C_MARKET_SELL:number = 1105;
		public static S_MARKET_SELL:number = 1106;
		/** C->S 请求: 撤单 */
		public static C_MARKET_CANCEL:number = 1107; 
		public static S_MARKET_CANCEL:number = 1108;
		/** S->C 响应: 获取OCT求购信息 */
		public static C_GET_OCT_BUYGOOD_LIST:number = 1109; 
		public static S_GET_OCT_BUYGOOD_LIST:number = 1110;
		/** 获取兑换信息 */
		public static C_GET_MONEY_EXCHANGE_INFO:number = 1201;
		public static S_GET_MONEY_EXCHANGE_INFO:number = 1202;
		/** 金币兑换平台币KAD */
		public static C_MONEY_EXCHANGE_KAD:number = 1203; 
		public static S_MONEY_EXCHANGE_KAD:number = 1204;
		/** 获取分红信息 */
		public static C_GET_BONUS_INFO:number = 1205;
		public static S_GET_BONUS_INFO:number = 1206;
		/** 获取注入信息 */
		public static C_GET_INJECT_INFO:number = 1207; 
		public static S_GET_INJECT_INFO:number = 1208;
		/** 注入 */
		public static C_INJECT_KAD:number = 1209;  
		public static S_INJECT_KAD:number = 1210;
		/**  实名验证 */
		public static C_REAL_NAME_VERIFICATION:number = 1221;
		public static S_REAL_NAME_VERIFICATION:number = 1222;
		/** 获取我的团队信息 */
		public static C_GET_MY_TEAM_INFO:number = 1301; 
		public static S_GET_MY_TEAM_INFO:number = 1302;
		/** 获取我的直推成员信息 */
		public static C_GET_MY_TEAM_LIST:number = 1303; 
		public static S_GET_MY_TEAM_LIST:number = 1304;
		/**  获取我的充值地址 */
		public static C_GET_MY_ADDRESS:number = 1401;
		public static S_GET_MY_ADDRESS:number = 1402;
		/**  获取提现记录 */
		public static C_GET_EXTRACT_LIST:number = 1403;
		public static S_GET_EXTRACT_LIST:number = 1404;
		/**  获取充值记录 */
		public static C_GET_RECHARGE_LIST:number = 1405;
		public static S_GET_RECHARGE_LIST:number = 1406;
		/**  同步属性变化 */
		public static S_SYN_PROPERTY:number = 2001; 
		/** 同步时间 */
		public static C_SYNC_TIME:number = 2101; 
		/** 同步时间 */
		public static S_SYNC_TIME:number = 2102; 
		/** debug */
		public static C_DEBUG_COMMON:number = 3101; 
		public static S_DEBUG_COMMON:number = 3102;
		/**  获取我的海豚信息 */
		public static C_GET_DOLPHIN_INFO:number = 5001; 
		public static S_GET_DOLPHIN_INFO:number = 5002;
		/**  购买海豚 */
		public static C_BUY_DOLPHIN:number = 5003;  
		public static S_BUY_DOLPHIN:number = 5004;
		/**  积分加速，可加速产蛋状态、孵化状态、受孕状态 */
		public static C_QUICK_DOLPHIN:number = 5005;  
		public static S_QUICK_DOLPHIN:number = 5006;
		/**  手动孵化海豚 */
		public static C_HATCH_DOLPHIN:number = 5007;
		public static S_HATCH_DOLPHIN:number = 5008;
		/**  受孕 */
		public static C_FERTILIZE_DOLPHIN:number = 5009; 
		public static S_FERTILIZE_DOLPHIN:number = 5010;
		/**  获取海豚金币日志信息 */
		public static C_GET_DOLPHIN_MONEY_LOG_LIST:number = 5011;  
		public static S_GET_DOLPHIN_MONEY_LOG_LIST:number = 5012;
		/**  获取海豚购买名额日志信息 */
		public static C_GET_DOLPHIN_BUYCOUNT_LOG_LIST:number = 5013;  
		public static S_GET_DOLPHIN_BUYCOUNT_LOG_LIST:number = 5014;
		/**  用海豚金币置换海豚购买名额 */
		public static C_EXCHANGE_DOLPHIN_MONEY:number = 5015;
		public static S_EXCHANGE_DOLPHIN_MONEY:number = 5016;
		/**  获取海豚加速积分日志信息 */
		public static C_GET_DOLPHIN_SPEEDCOUNT_LOG_LIST:number = 5017; 
		public static S_GET_DOLPHIN_SPEEDCOUNT_LOG_LIST:number = 5018;
		/**  获取我的签到信息 */
		public static C_GET_SIGN_IN_INFO:number = 5019;
		public static S_GET_SIGN_IN_INFO:number = 5020;
		/**  领取我的签到奖励 */
		public static C_GET_SIGN_IN_REWARD:number = 5021; 
		public static S_GET_SIGN_IN_REWARD:number = 5022;
		/**  孵化出新的2个海豚通知 */
		public static S_SYNC_NEW_DOLPHIN:number = 5030; 
		/**  跨服服务器心跳 */
		public static CROSS_C_HEART_BEAT:number = 100001;        
		public static CROSS_S_HEART_BEAT:number = 100002;
		/**  跨服服务器注册 */
		public static CROSS_C_SERVER_REGISTER:number = 100003;        
		public static CROSS_S_SERVER_REGISTER:number = 100004;
		/** 跨服错误吗 */
		public static CROSS_S_EXCEPTION_MSG:number = 100005;
		/**  跨服服务器注册成功推送消息 */
		public static CROSS_C_SERVER_PUSH:number = 100006;       
		public static CROSS_S_SERVER_PUSH:number = 100007;
		/**  坑爹的协议，由于oss不支持跨服的http服务，暂时由游戏服的http接收后发送跨服处理 */
		public static CROSS_C_HTTP_DATA:number = 100008;
		

	}
}