module qmr {
	export class GoldLogItemRender extends  eui.ItemRenderer {
		public rank_bgImg:eui.Image;
public txt_time:eui.Label;
public txt_count:eui.Label;
public txt_name:eui.Label;
		
		public constructor()
		{
			super();
			this.skinName = "MoneyLogItemSkin";
        }
        
        protected childrenCreated(): void
		{
			super.childrenCreated();
			let t = this;
            
        }
        
		public dataChanged(): void {
			let t = this;
            let pro:com.message.DolphinMoneyLogMsg = t.data;
            if(pro){
                t.txt_count.text = NumberUtil.getFloat4Number2String(pro.changeMoney)+"金币";
                t.txt_name.text = TradeModule.instance.getType(pro.type);
                t.txt_time.text = TimeUtil.getDateByTimerSecond(Int64Util.getNumber(pro.logTime));
            }
        }
	}
}
