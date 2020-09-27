module qmr
{
	/**
	 * 通用弹框控制器
	 */
	export class PromptController
	{
		public constructor()
		{

		}

		/**
         * 弹框
         * @param  {string} content 显示的内容
         * @param  {Function} confirmFun 确定回调函数
         * @param  {any} caller? 回调作用域
		 * @param  {any} confirmData? 确定附带回调数据
		 * @param  {Function} cancelFun? 取消回调函数
		 * @param  {AlertEnumType=AlertEnumType.GB} type GB = 1： 有确定和取消两个选择 ， UN_GB = 2： 只有确定btn ，确定或取消的逻辑由后面自定义参数 confirmFun cancelFun 
         * @param  {string="提示"} title 提示标题
         * @param  {string} confirmTxt? 确定按钮文本
         * @param  {string} cancelTxt? 取消按钮文本
         * @param  {string} cacheKey? 本次登录不提示
         * @returns void
         */
		public showPrompt(content: string, confirmFun: Function, caller?: any, confirmData?: any, cancelFun?: Function, type: AlertEnumType = AlertEnumType.GB, title: string = "提示", confirmTxt: string = "确定", cancelTxt: string = "取消", cacheKey?: string): void
		{
			//构建要传递的数据
			let data: any = {};
			data.title = title;
			data.content = content;
			data.type = type;
			data.confirmFun = confirmFun;
			data.cancelFun = cancelFun;
			data.caller = caller;
			data.confirmData = confirmData;
			data.confirmTxt = confirmTxt;
			data.cancelTxt = cancelTxt;
			data.cacheKey = cacheKey;

			//本次登录不提示
			if (cacheKey && CacheManager.getOneCache(cacheKey, 0))
			{
				egret.callLater(confirmFun, caller, confirmData);
			}
			else
			{
				ModuleManager.popModule(ModuleNameConst.PROMPT_VIEW, data, null, false, false);
			}
		}

		/**
         
         * @returns void
         */
		/**
		 * 
		 * 弹框
         * @param  {string} content 显示的内容
         * @param  {Function} confirmFun 确定回调函数
         * @param  {any} caller? 回调作用域
		 * @param  {any} confirmData? 确定附带回调数据
		 * @param  {Function} cancelFun? 取消回调函数
         * @param  {string="提示"} title 提示标题
         * @param  {string} confirmTxt? 确定按钮文本
		 * @param  {number} max? 输入框最大输入数量 
		 * @param  {number} min? 输入框最小输入数量  
		 * @param  {number} price? 单价  
		 * @param  {number} total? 拥有数量  
		 */
		public showPromptInput(content: string, confirmFun: Function, caller?: any, confirmData?: any, cancelFun?: Function, title: string = "提示",
		 confirmTxt: string = "确定", max?:number, min?:number, price?:number,total?:number): void
		{
			//构建要传递的数据
			let data: any = {};
			data.title = title;
			data.content = content;
			data.confirmFun = confirmFun;
			data.cancelFun = cancelFun;
			data.caller = caller;
			data.confirmData = confirmData;
			data.confirmTxt = confirmTxt;
			data.max = max;
			data.min = min;
			data.price = price;
			data.total = total;

			ModuleManager.popModule(ModuleNameConst.PROMPT_INPUT_VIEW, data, null, false, false);
		}

		private static _instance: PromptController;
		public static get instance(): PromptController
		{
			return this._instance || (this._instance = new PromptController());
		}
	}
}