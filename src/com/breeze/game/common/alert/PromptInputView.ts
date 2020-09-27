module qmr
{
    export class PromptInputView extends BaseModule
    {
        public panelGroup:eui.Group;
public icon_money:eui.Image;
public labContent:eui.Label;
public txt_price:eui.Label;
public txt_title:eui.Label;
public btnSure:eui.Group;
public txt_sure:eui.Label;
public txt_account:eui.TextInput;
public btnClose:eui.Image;



        private confirmFun: Function;
        private caller: any;
        private cancelFun: Function;
        private confirmData: any;
        private max:number;
        private min:number;
        private price:number;
        private total:number;

        public constructor()
        {
            super();
            this.qmrSkinName = "PromptInputSkin"
            this.isNeedMask = true;
        }

        protected initData()
        {
            super.initData();
            var data = this.data;
            if (data)
            {
                this.showPrompt(data.title, data.content, data.confirmFun, data.caller, data.confirmData, data.cancelFun, data.confirmTxt,
                    data.max, data.min, data.price, data.total);
            }
            this.txt_price.text = "0";
            this.txt_account.text = "";
        }

        protected initListener(): void
        { 
            super.initListener()
            let t = this;
            t.addClickEvent(t.btnSure, t.onConfirm, t);
            t.addClickEvent(t.btnClose, t.onClickCancle, t);
            t.addEvent(t.txt_account, egret.Event.CHANGE,t.onTextInputChange,t);

            t.txt_account.restrict = "0-9";
            
            LabelUtil.addInputListener(t.txt_account, t);
        }

        private onTextInputChange(evt: egret.Event):void
		{
            let t = this;
			let str:string = evt.target.text;
			if(RegexpUtil.IsNull(str)){
				return;
			}
            if(!RegexpUtil.IsInteger(str)){
                return;
            }
            let num:number = parseInt(str.trim());
            if(t.max){
                if(num > t.max){
                    TipManagerCommon.getInstance().createCommonTip("输入数量不能大于可购买总量");
                    return;
                }
            }

            if(t.min){
                if(num < t.min){
                    TipManagerCommon.getInstance().createCommonTip("输入数量不能小于最小购买数量");
                    return;
                }
            }

            if(t.total){
                if(num > t.total){
                    TipManagerCommon.getInstance().createCommonTip("输入的数量不能大于拥有的总量");
                    return;
                }
            }

            if(!t.price){
                return;
            }
            
            t.txt_price.text = num * t.price + "";
		}

        private showPrompt(title: string, content: string, confirmFun: Function, caller?: any, confirmData?: any, cancelFun?: Function, confirmTxt?: string,
            max?:number, min?:number, price?:number, total?:number): void
        {
            this.confirmFun = confirmFun;
            this.caller = caller;
            this.cancelFun = cancelFun;
            this.confirmData = confirmData;
            this.max = max;
            this.min = min;
            this.price = price;
            this.total = total;
            
            this.txt_title.text = title;
            LabelUtil.setLabel(this.labContent, content);
            if (confirmTxt)
            {
                this.txt_sure.text = confirmTxt;
            }
        }

        /** 确定购买 */
        private onConfirm()
        {
            let t = this;
            var func = this.confirmFun;
            var caller = this.caller;
            var funcData = this.confirmData;
            let txt:string = t.txt_account.text;
            if(RegexpUtil.IsNull(txt)){
                return;
            }
            if(!RegexpUtil.IsInteger(txt)){
                return;
            }

            var count:number = Number(txt.trim());
            if(count <= 0){
                TipManagerCommon.getInstance().createCommonTip("请重新输入数量");
                return;
            }

            if(this.max){
                if(count > this.max){
                    TipManagerCommon.getInstance().createCommonTip("输入数量不能大于："+this.max);
                    return;
                }
            }
            if(this.min){
                if(count < this.min){
                    TipManagerCommon.getInstance().createCommonTip("输入数量不能小于："+this.max);
                    return;
                }
            }

            if (func)
            {
                egret.callLater(()=>{
                    func.apply(caller, [count]);
                },this);
            }
            this.onClose();
        }

        /** 取消购买 */
        private onClickCancle()
        {
            if (this.cancelFun)
            {
                this.cancelFun.apply(this.caller);
            }
            this.onClose();
        }
        
        private onClose(): void
        {
            this.confirmFun = null;
            this.cancelFun = null;
            this.caller = null;
            this.confirmData = null;
            this.hide();
        }
    }
}