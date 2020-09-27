module qmr
{
	export class ConfigManagerAft
	{
		
		/**
		 * 获取全局配置
		 */
		public static getCommonConfig(key: number): string
		{
			var config: Dictionary = ConfigManager.getBean(ConfigEnum.COMMONCONFIG);
			var clientCnVo: CommonConfigCfg = config.get(key);
			if (clientCnVo)
			{
				return clientCnVo.param;
			}
			return "";
		}

		/**
		 * 获取中文配置
		 * @param  {string} key
		 */
		public static getCNValue(key: string, ...args): string
		{
			var config: Dictionary = ConfigManager.getBean(ConfigEnum.CLIENTCN);
			var clientCnVo: ClientCnCfg = config.get(key);
			if (clientCnVo)
			{
				let msg: string = clientCnVo.value;
				if (args && args.length > 0)
				{
					args.unshift(msg);
					msg = StringUtils.getmsg(...args);
				}
				return msg;
			}
			return "";
		}
		
	}
}