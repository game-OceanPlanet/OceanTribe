module qmr {
	export class CacheManager {
		private static CACHE_GAME_KEY:string = "guangmang.keji.mt.";
		private static CACHE_DIC:any = {};
		public constructor() {
		}

		/** 获取目标缓存值，defValue为没有缓存时的默认值，支持number,string两种数据类型 */
		public static getCache(key:string, defValue:any = null):any {
			let value = egret.localStorage.getItem(CacheManager.CACHE_GAME_KEY + key);
			if (value != undefined){
				if (typeof defValue === "string"){
					return value;
				}
				else if (typeof defValue === "number"){
					return parseInt(value);
				}
				else if (typeof defValue === "boolean"){
					return value == "true";
				}
			}
			else{
				return defValue;
			}
		}

		/** 本地永久缓存 */
		public static setCache(key:string, value:any):void {
			egret.localStorage.setItem(CacheManager.CACHE_GAME_KEY + key, value);
		}

		/** 本次登录缓存 */
		public static setOneCache(key:string, value:any):void {
			CacheManager.CACHE_DIC[key] = value;
		}

		/** 获取本次登录缓存 */
		public static getOneCache(key:string, defValue:any = null):any {
			let value = CacheManager.CACHE_DIC[key];
			if (value != undefined){
				if (typeof defValue === "string"){
					return value;
				}
				else if (typeof defValue === "number"){
					return parseInt(value);
				}
				else{
					return value;
				}
			}
			else{
				return defValue;
			}
		}
	}
}