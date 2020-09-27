module qmr {
	export class InjectSelectItem extends eui.ItemRenderer {
		public txt_cycle:eui.Label;

		
		public constructor() {
			super();
			this.skinName = "InjectListItemSkin";
		}

		public dataChanged(): void {
			let t = this;
			let cfg:InjectCycleCfg = t.data;
			if(cfg){
				t.txt_cycle.text = cfg.des + "/权重"+cfg.weights;
			}
		}
	}
}