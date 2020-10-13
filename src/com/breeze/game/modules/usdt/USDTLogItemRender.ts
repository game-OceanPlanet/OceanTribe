module qmr {
	export class USDTLogItemRender extends  eui.ItemRenderer {
		public rank_bgImg:eui.Image;
public txt_time:eui.Label;
public txt_count:eui.Label;
public txt_name:eui.Label;
		
		public constructor()
		{
			super();
			this.skinName = "USDTLogItemSkin";
        }
        
        protected childrenCreated(): void
		{
			super.childrenCreated();
			let t = this;
            
        }
        
		public dataChanged(): void {
			let t = this;
            let pro:com.message.MoneyLogMsg = t.data;
            if(pro){
				t.txt_count.text = NumberUtil.getFloat6Number2String(pro.changeMoney) + TradeModule.instance.getMoneyType(pro.type);
				
                t.txt_name.text = TradeModule.instance.getType(pro.type);
                t.txt_time.text = TimeUtil.getDateByTimerSecond(Int64Util.getNumber(pro.logTime));
            }
        }
	}
}