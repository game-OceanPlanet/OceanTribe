module qmr {
	export class ExchangeLogtem extends  eui.ItemRenderer {
		public rank_bgImg:eui.Image;
        public txt_countKAD:eui.Label;
        public txt_time:eui.Label;
        public txt_KH:eui.Label;

		
		public constructor()
		{
			super();
			this.skinName = "ExchangeItemSkin";
        }
        
        protected childrenCreated(): void
		{
			super.childrenCreated();
			let t = this;
            
        }
        
		public dataChanged(): void {
			let t = this;
            let pro:com.message.PlayerExcInfoMsg = t.data;
            if(pro){
                let dt:Date = new Date();
                t.txt_countKAD.text = NumberUtil.getFloat6Number2String(pro.KADCount)+HeroModel.KAD;
                t.txt_KH.text = NumberUtil.getFloat6Number2String(pro.moneyCount)+HeroModel.KH;
                dt.setTime(Int64Util.getNumber(pro.logTime) * 1000);
                t.txt_time.text = TimeUtil.formatColumnDate(dt);
            }
        }
	}
}
