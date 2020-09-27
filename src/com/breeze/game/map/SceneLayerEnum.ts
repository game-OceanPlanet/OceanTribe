module qmr
{
	export class SceneLayerEnum
	{
		/**地图所在层级*/
		static LAYER_MAP:string ='LAYER_MAP';
		/**底部层，比如道具掉落，脚底特效等*/
		static LAYER_BOTTOM:string='LAYER_BOTTOM';
		/**角色层*/
		static LAYER_PLAYER:string='LAYER_PLAYER';
		/**黑色半透明遮罩层,用于释放大招时候盖着下面所有东西*/
		static LAYER_MASK:string='LAYER_MASK';
		/**角色前层，比如飘血,前景特效*/
		static LAYER_FRONT:string='LAYER_FRONT';
		/**最上层，用于大技能*/
		static LAYER_TOP:string='LAYER_TOP';
	}
}