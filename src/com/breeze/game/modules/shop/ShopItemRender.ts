module qmr {
	export class ShopItemRender extends  eui.ItemRenderer {
		public rank_bgImg:eui.Image;
public txt_name:eui.Label;
public txt_1:eui.Label;
public txt_2:eui.Label;
public txt_3:eui.Label;
public btn_buy_group:eui.Group;
public btn_buy:eui.Image;
public txt_price_gold:eui.Label;
public btn_buy_group2:eui.Group;
public btn_buy2:eui.Image;
public txt_price_USDT:eui.Label;
public img_head:eui.Image;
public txt_price_USDTLimit:eui.Label;





		
		public constructor()
		{
			super();
			this.skinName = "ShopItemSkin";
        }
        
        protected childrenCreated(): void
		{
			super.childrenCreated();
			let t = this;
            
            DisplayUtils.addClick(t.btn_buy_group, t.onBuyClick, t);
            DisplayUtils.addClick(t.btn_buy_group2, t.onBuyClick2, t);
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
            t.btn_buy_group.visible = true;
            t.btn_buy_group2.visible = false;
            t.txt_price_USDTLimit.visible = false;
            t.btn_buy_group.y = 81;
            if(cfg){
                t.txt_name.text = cfg.name + "(Lv." + cfg.level + ")";
                t.txt_1.text = cfg.produce + "";
                t.txt_2.text = cfg.limitTime + "";
                t.txt_3.text = cfg.monthly + "%";
                t.txt_price_gold.text = NumberUtil.getFloat4Number2String(cfg.price) + HeroModel.KH;
                t.txt_price_USDT.text =  NumberUtil.getFloat4Number2String(cfg.UBuyPrice) + HeroModel.USDT;
                var itemRes:string = ResPathUtilAft.getHeadUrl(cfg.id+"");
                t.img_head.source = itemRes;

                let teamPro:com.message.MyTeamMsg = TeamModdel.instance.myTeam;
                if(teamPro){
                    if(teamPro.count >= cfg.directPerson && teamPro.allCount >= cfg.teamPerson){
                        t.btn_buy_group2.visible = true;
                        t.txt_price_USDTLimit.visible = true;
                        t.btn_buy_group2.y = 100;
                        t.btn_buy_group.y = 43;
                        t.txt_price_USDTLimit.text = ""
                        let hadBuyCount:number = HeroModel.instance.getBuyCount(cfg.id);
                        LabelUtil.setLabelText(t.txt_price_USDTLimit, ClientCnEnum.CN_106, [hadBuyCount ,cfg.UBuyLimit]);
                    }
                }
            }
		}
	}
}