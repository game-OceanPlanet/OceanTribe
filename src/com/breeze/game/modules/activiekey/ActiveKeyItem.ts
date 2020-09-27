module qmr {
	export class ActiveKeyItem extends  eui.ItemRenderer {
		public txt_name:eui.Label;
public txt_des:eui.Label;
public txt_2:eui.Label;
public img_head:eui.Image;

		
		public constructor()
		{
			super();
			this.skinName = "ActiveKeyItemSkin";
        }
        
        protected childrenCreated(): void
		{
			super.childrenCreated();
            let t = this;
        }

		public dataChanged(): void {
            let t = this;
            let pro:com.message.KeyLogMsg = t.data;
            if(pro){
                t.txt_2.text = TimeUtil.getDateByTimer(Int64Util.getNumber(pro.logTime) * 1000);
                
                // t.txt_3.text = Int64Util.getNumber(pro.playerId)+"";// 301:使用者，302赠送者，303被赠送者
                // t.txt_4.text = Int64Util.getNumber(pro.bePlayerId)+"";// 301:0, 302:被赠送玩家id,303赠送者
                // t.txt_5.text = pro.info;//记录信息， 301:“”, 302:被赠送玩家id,303赠送者
                // t.txt_1.text = t.getState(pro.type);//  类型,301自己使用，302赠送， 303被赠送

                let tel = NumberUtil.getTelNumberShow(HeroModel.instance.IdentityPro.mobile);
                let des:string = "";
                if(pro.type == 301){
                    des = "<font color ='0xdd1900'>秘钥使用成功</font>";
                } else if(pro.type == 302){
                    des = "<font color ='0xbb8700'>"+tel+"</font>赠送给玩家"+"<font color ='0x2186cc'>"+pro.info+"</font>秘钥成功";
                } else if(pro.type == 303){
                    des = "<font color ='0xbb8700'>"+pro.info+"</font>赠送给玩家"+"<font color ='0x2186cc'>"+tel+"</font>秘钥成功";
                }
                t.txt_des.textFlow = HtmlUtil.getHtmlString(des);
            }
        }
        
        private getState(s):string
        {
            //状态，0生产中，1停产中,2已过期
            let msg:string;
            switch(s){
                case 301:
                    msg = "使用"
                    break;
                case 302:
                    msg = "赠送"
                    break;
                case 303:
                    msg = ""
                    break;
            }
            return msg;
        }

	}
}