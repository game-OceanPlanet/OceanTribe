module qmr {
	export class MineKADLogItem extends  eui.ItemRenderer {
		public txt_id:eui.Label;
public txt_time:eui.Label;
public txt_count:eui.Label;
public txt_phone:eui.Label;

		
		public constructor()
		{
			super();
			this.skinName = "MineKADLogItemSkin";
        }
        
        protected childrenCreated(): void
		{
			super.childrenCreated();
			let t = this;
        }

        private onBuyClick():void
        {
            let cfg:PetCfg = this.data;
            if(!cfg){
                return;
            }

            if(cfg.price > HeroModel.instance.totalMoney){
                TipManagerCommon.getInstance().createCommonTip("货币不足");
                return;
            }

            PetController.instance.getBuyFish(cfg.id);
        }

        private onBuyClick2():void
        {
            let cfg:PetCfg = this.data;
            if(!cfg){
                return;
            }
            if(cfg.UBuyPrice > HeroModel.instance.totalUSDT){
                TipManagerCommon.getInstance().createCommonTip("货币不足");
                return;
            }
            PetController.instance.getBuyFishByUSDT(cfg.id);
        }
        
		public dataChanged(): void {
			let t = this;
            let cfg:PetCfg = t.data;
            if(cfg){
                // t.txt_name.text = cfg.name + "(Lv." + cfg.level + ")";
                // t.txt_1.text = cfg.produce + "";
                // t.txt_2.text = cfg.limitTime + "";
                // t.txt_3.text = cfg.monthly + "%";
                // t.txt_price_gold.text = NumberUtil.getFloat4Number2String(cfg.price) + HeroModel.KH;
                // t.txt_price_USDT.text =  NumberUtil.getFloat4Number2String(cfg.UBuyPrice) + HeroModel.USDT;
                // var itemRes:string = ResPathUtilAft.getHeadUrl(cfg.id+"");
                // t.img_head.source = itemRes;
            }
		}
	}
}