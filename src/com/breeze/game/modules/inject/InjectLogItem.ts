module qmr {
	export class InjectLogItem extends  eui.ItemRenderer {
		public txt_state:eui.Label;
public txt_start:eui.Label;
public txt_count:eui.Label;
public txt_end:eui.Label;

		public constructor()
		{
			super();
			this.skinName = "InjectLogItemSkin";
        }
        
        protected childrenCreated(): void
		{
			super.childrenCreated();
			let t = this;
            
        }
        
		public dataChanged(): void {
			let t = this;
            let pro:com.message.PersonInjectMsg = t.data;
            if(pro){
				let cfg:InjectCycleCfg = ConfigManager.getConf(ConfigEnum.INJECTCYCLE, pro.cycleId);
				let dt:Date = new Date();
				let endTime:number = Int64Util.getNumber(pro.endTime)
				t.txt_count.text = NumberUtil.getFloat4Number2String(pro.KADCount) + HeroModel.KAD;
				dt.setTime(Int64Util.getNumber(pro.createTime));
				t.txt_start.text = TimeUtil.formatColumnDate(dt);
				dt.setTime(endTime);
				// t.txt_end.text = TimeUtil.formatColumnDate(dt);
				t.txt_end.text = cfg.des + "/权重"+cfg.weights;
				t.txt_state.text = endTime > ServerTime.serverTime ? "进行中":"已到期";
            }
        }
	}
}
