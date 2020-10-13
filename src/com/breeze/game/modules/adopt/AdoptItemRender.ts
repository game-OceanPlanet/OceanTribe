module qmr {
	export class AdoptItemRender extends  eui.ItemRenderer {
		public txt_action:eui.Label;
public txt_time:eui.Label;
public txt_order:eui.Label;

		public constructor()
		{
			super();
			this.skinName = "AdoptItemSkin";
        }
        
        protected childrenCreated(): void
		{
			super.childrenCreated();
			let t = this;
            
        }
        
		public dataChanged(): void {
			let t = this;
            let pro:com.message.DolphinWaitMsg = t.data;
            if(pro){
                let index:number = HeroModel.instance.myRanks.get(pro.id);
                if(index && index > 0){
                    t.txt_order.text = index+"";
                } else {
                    t.txt_order.text = (t.itemIndex+ 1) +"";
                }
                
                t.txt_action.text = pro.mobile;
                let dt:Date = new Date();
                dt.setTime(Int64Util.getNumber(pro.createTime));
                t.txt_time.text = TimeUtil.formatColumnDate(dt);
            }
        }
	}
}
