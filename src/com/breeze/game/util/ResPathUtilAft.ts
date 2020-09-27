module qmr
{
	export class ResPathUtilAft
	{
		/** 头像icon资源路径 */
		public static getHeadUrl(headName: string)
		{
			return SystemPathAft.headPath + headName + ".png";
		}
		/** 获取bg图路径 */
		public static getBgUrl(resName: string)
		{
			return SystemPathAft.bgPath + resName + ".png";
		}

		/** 地图资源路径 */
		public static getMapUrl(mapName: string)
		{
			return SystemPathAft.mapPath + mapName;
		}
	}
}