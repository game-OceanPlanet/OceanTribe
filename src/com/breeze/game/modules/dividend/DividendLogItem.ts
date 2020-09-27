module qmr {
	export class DividendLogItem extends  eui.ItemRenderer {
		public rank_bgImg:eui.Image;
    public txt_des:eui.Label;
    public txt_time:eui.Label;
    public txt_count:eui.Label;


		
		public constructor()
		{
			super();
			this.skinName = "DividendItemSkin";
        }
        
        protected childrenCreated(): void
		{
			super.childrenCreated();
			let t = this;
            
        }
        
		public dataChanged(): void {
			let t = this;
            let pro:com.message.PersonBonusMsg = t.data;
            if(pro){
                if(pro.info){
                    let id:number = Number(pro.info);
                    let cfg:InjectCycleCfg = ConfigManager.getConf(ConfigEnum.INJECTCYCLE,id );
                    t.txt_des.text = cfg.des;
                }
                
                t.txt_count.text = NumberUtil.getFloat6Number2String(pro.diamondCount)+HeroModel.USDT;
                let dt:Date = new Date();
                dt.setTime(Int64Util.getNumber(pro.logTime));
                t.txt_time.text = TimeUtil.formatColumnDate(dt);
            }
        }
	}
}
