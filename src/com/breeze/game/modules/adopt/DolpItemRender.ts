module qmr {
	export class DolpItemRender extends  eui.ItemRenderer {
        public img_head:eui.Image;
        public txt_time:eui.Label;
        public btn_speed:eui.Group;
        public txt_btn:eui.Label;
        public txt_state:eui.Label;
        


private __leftTime:number = 0;
private __timekey:number;
private __endTime:number;

		public constructor()
		{
			super();
			this.skinName = "DolpItemSkin";
        }
        
        protected childrenCreated(): void
		{
			super.childrenCreated();
			let t = this;
            DisplayUtils.addClick(t.btn_speed, t.onSpeedClick, t);
        }

        private onSpeedClick():void
        {
            let info:DolphinInfo = this.data;
            if(info){
                 //状态，0排队等待中，1产蛋中,2飞升中，3待孵化，4孵化中，5成为动物待受孕，6受孕中，7挂卖中，8售卖成功结束
                if(info.state == PetStateEnum.STATE_1 || info.state == PetStateEnum.STATE_4 || info.state == PetStateEnum.STATE_6){
                    PetController.instance.getAddSpeedCmd(info.id);
                } else if(info.state == PetStateEnum.STATE_3){
                    PetController.instance.getHatchCmd(info.id);
                } else if(info.state == PetStateEnum.STATE_5){
                    PetController.instance.getFertilizeCmd(info.id);
                }
            }
        }
        
		public dataChanged(): void {
			let t = this;
            let pro:DolphinInfo = t.data;
            if(pro){
                t.txt_btn.text = t.getState(pro.state);
                t.txt_state.text = t.getStateDes(pro.state);

                var itemRes:string = ResPathUtilAft.getHeadUrl(pro.modelId+"");
                t.img_head.source = itemRes;

                t.__endTime = pro.endTime;
                t.__leftTime = Math.floor((pro.endTime - ServerTime.serverTime)/1000);
                if(t.__leftTime < 0){
                    t.__leftTime = 0;
                }

                if(t.__leftTime > 0){
                    if (t.__timekey != -1){
                        egret.clearInterval(t.__timekey);
                    }
                    t.__timekey = egret.setInterval(t.updateTime, t, 1000);
                    t.txt_time.text = TimeUtil.formatTime1(t.__leftTime);
                } else {
                    t.stopTime();
                }
            }
        }

        private updateTime(){
			let t = this;
			if(this.__leftTime <= 0){
				t.txt_time.text = "00:00";
				return;
            }
            t.__leftTime = Math.floor((t.__endTime - ServerTime.serverTime)/1000);
			t.txt_time.text = TimeUtil.formatTime1(t.__leftTime);
			t.__leftTime --;
		}

		private stopTime(): void
		{
			let t = this;
			if (t.__timekey != -1){
				egret.clearInterval(t.__timekey);
			}
			t.__timekey = -1;
			t.txt_time.text = "00:00";
        }
        
        private getState(state:number):string
        {
            let s: string;
            //状态，0排队等待中，1产蛋中,2飞升中，3待孵化，4孵化中，5成为动物待受孕，6受孕中，7挂卖中，8售卖成功结束
            switch (state) {
                case PetStateEnum.STATE_0:
                    s = "排队中";
                    break;
                case PetStateEnum.STATE_1:
                    s = "加速产蛋";
                    break;
                case PetStateEnum.STATE_2:
                    s = "正在飞升";
                    break;
                case PetStateEnum.STATE_3:
                    s = "去孵化";
                    break;
                case PetStateEnum.STATE_4:
                    s = "加速孵化";
                    break;
                case PetStateEnum.STATE_5:
                    s = "去受孕";
                    break;
                case PetStateEnum.STATE_6:
                    s = "加速受孕";
                    break;
                case PetStateEnum.STATE_7:
                    s = "挂卖中";
                    break;
                case PetStateEnum.STATE_8:
                    s = "已出售";
                    break;
            }
            return s;
        }

        private getStateDes(state:number):string
        {
            let s: string;
            //状态，0排队等待中，1产蛋中,2飞升中，3待孵化，4孵化中，5成为动物待受孕，6受孕中，7挂卖中，8售卖成功结束
            switch (state) {
                case PetStateEnum.STATE_0:
                    s = "排队等待中";
                    break;
                case PetStateEnum.STATE_1:
                    s = "产蛋中";
                    break;
                case PetStateEnum.STATE_2:
                    s = "飞升中";
                    break;
                case PetStateEnum.STATE_3:
                    s = "待孵化";
                    break;
                case PetStateEnum.STATE_4:
                    s = "孵化中";
                    break;
                case PetStateEnum.STATE_5:
                    s = "待受孕";
                    break;
                case PetStateEnum.STATE_6:
                    s = "受孕中";
                    break;
                case PetStateEnum.STATE_7:
                    s = "挂卖中";
                    break;
                case PetStateEnum.STATE_8:
                    s = "售卖成功";
                    break;
            }
            return s;
        }
	}
}
