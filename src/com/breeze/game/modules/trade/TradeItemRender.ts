module qmr {
	export class TradeItemRender extends  eui.ItemRenderer {
		public rank_bgImg:eui.Image;
public txt_id:eui.Label;
public txt_price:eui.Label;
public txt_count:eui.Label;
public txt_time:eui.Label;
public btn_sell_group:eui.Group;
public btn_buy:eui.Image;
public txt_price_gold:eui.Label;
public btn_revoke:eui.Group;
public txt_revoke:eui.Label;



		
		public constructor()
		{
			super();
			this.skinName = "BuyGoodItemSkin";
        }
        
        protected childrenCreated(): void
		{
			super.childrenCreated();
			let t = this;
            
            DisplayUtils.addClick(t.btn_sell_group, t.onSellClick, t);
            DisplayUtils.addClick(t.btn_revoke, t.onRevekeClick, t);
        }

        private onSellClick():void
        {
            let t = this;
            let pro:com.message.BuyGoodMsg = t.data;
            if(!pro){
                return;
            }
            let myCount:number = HeroModel.instance.totalMoney;
            if(myCount <= 0){
                TipManagerCommon.getInstance().createCommonColorTip("持有货币不足");
                return;
            }

            let msg:string = "本次价格："+ pro.diamondPrice + HeroModel.USDT + "/个" + "\r"
            + "最大出售数量："+ pro.moneyCount + HeroModel.KH + "\r"
            + "账户可用余额："+ NumberUtil.getFloat4Number2String(HeroModel.instance.totalMoney) + HeroModel.KH;
            PromptController.instance.showPromptInput(
				msg,
				function(count:number){
					let pro:com.message.BuyGoodMsg = t.data;
                    if(!pro){
                        return;
                    }
                    TradeController.instance.getSellOrderRequest(Int64Util.getNumber(pro.buyGoodMsgId), count);
			}, t, null, null,"卖出提示", "卖出", pro.moneyCount,0,pro.diamondPrice, HeroModel.instance.totalMoney);
        }

        private onRevekeClick():void
        {
            let t = this;
            let pro:com.message.BuyGoodMsg = t.data;
            if(!pro){
                return;
            }

            TradeController.instance.getBuyOrderRevokeRequest(Int64Util.getNumber(pro.buyGoodMsgId));
        }

		public dataChanged(): void {
			let t = this;
            let pro:com.message.BuyGoodMsg = t.data;
            if(pro){
                t.txt_id.text = pro.playerId.toString();
                t.txt_price.text = pro.diamondPrice + HeroModel.USDT;
                t.txt_count.text = pro.moneyCount+HeroModel.KH;
                t.txt_time.text = TimeUtil.getDateByTimer(Int64Util.getNumber(pro.createTime));
                t.btn_revoke.visible = Int64Util.getNumber(pro.playerId) == HeroModel.instance.playerId;
                t.btn_sell_group.visible = Int64Util.getNumber(pro.playerId) != HeroModel.instance.playerId;
            }
		}
	}
}