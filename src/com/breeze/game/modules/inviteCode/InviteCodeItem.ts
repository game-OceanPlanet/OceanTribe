module qmr {
	export class InviteCodeItem extends  eui.ItemRenderer {
		public txt_state:eui.Label;
public txt_id:eui.Label;
public txt_team:eui.Label;
public txt_money:eui.Label;

		
		public constructor()
		{
			super();
			this.skinName = "InviteCodeItemSkin";
        }
        
        protected childrenCreated(): void
		{
			super.childrenCreated();
			let t = this;
            
        }
        
		public dataChanged(): void {
			let t = this;
            let pro:com.message.DirectInfoMsg = t.data;
            if(pro){
				t.txt_id.text = pro.name;
				t.txt_team.text = pro.teamActivity+"";
				let des = t.getState(pro.state);
				t.txt_state.textFlow = HtmlUtil.getHtmlString(des);
				t.txt_money.text = pro.money + HeroModel.KH;
            }
		}
		
		private getState(state:number):string
		{
			let s:string = "";
			switch(state){
				case 0:
					s = "<font color ='0xdd1900'>未激活</font>";
					break;
				case 1:
					if(PlatformConfig.GameId == 1){
						s = "<font color ='0x09a608'>已激活</font>"// + "<font color ='0x803F07'>(海洋星球)</font>";
					} else  if(PlatformConfig.GameId == 2){
						s = "<font color ='0xdd1900'>未激活</font>";// + "<font color ='0x803F07'>(海洋星球)</font>";
					}
					break;
				case 2:
					if(PlatformConfig.GameId == 1){
						s = "<font color ='0xdd1900'>未激活</font>"; // + "<font color ='0x803F07'>(海洋部落)</font>";
					} else  if(PlatformConfig.GameId == 2){
						s = "<font color ='0x09a608'>已激活</font>";// + "<font color ='0x803F07'>(海洋部落)</font>";
					}
					break;
				case 3:
					s = "<font color ='0x09a608'>已激活</font>"
					break;
			}

			return s;
		}
	}
}
