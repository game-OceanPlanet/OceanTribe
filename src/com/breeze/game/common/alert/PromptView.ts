module qmr
{
    export class PromptView extends BaseModule
    {
        public panelGroup:eui.Group;
public checkbox:eui.CheckBox;
public labContent:eui.Label;
public txt_title:eui.Label;
public btnClose:eui.Image;
public btnSure:eui.Group;
public txt_sure:eui.Label;
public btnCancel:eui.Group;
public txt_cancel:eui.Label;



        private confirmFun: Function;
        private caller: any;
        private cancelFun: Function;
        private confirmData: any;
        private cacheKey:string;

        public constructor()
        {
            super();
            this.qmrSkinName = "PromptSkin"
            this.isNeedMask = true;
        }

        protected initData()
        {
            super.initData();
            var data = this.data;
            if (data)
            {
                this.checkbox.selected = false;
                this.showPrompt(data.type, data.title, data.content, data.confirmFun, data.caller, data.confirmData, data.cancelFun, data.confirmTxt, data.cancelTxt, data.cacheKey);
            }
        }

        protected initListener(): void
        { 
            super.initListener()
            let t = this;
            t.btnSure.scaleX = t.btnSure.scaleY = 1.0;
            t.btnCancel.scaleX = t.btnCancel.scaleY = 1.0;
            t.addClickEvent(t.btnSure, t.onConfirm, t);
            t.addClickEvent(t.btnCancel, t.onClickCancle, t);
            t.addClickEvent(t.btnClose, t.onClickCancle, t);
            t.addEvent(t.checkbox, egret.Event.CHANGE, t.onCheckChange, t);
        }

        private showPrompt(type: AlertEnumType = AlertEnumType.GB, title: string, content: string, confirmFun: Function, caller?: any, confirmData?: any, cancelFun?: Function, confirmTxt?: string, cancelTxt?: string, cacheKey?: string): void
        {
            if (type == AlertEnumType.GB)
            {
                this.btnCancel.visible = true;
                this.btnSure.x = 381;
            }
            else
            {
                this.btnCancel.visible = false;
                this.btnSure.x = 296;
            }
            this.confirmFun = confirmFun;
            this.caller = caller;
            this.cancelFun = cancelFun;
            this.confirmData = confirmData;
            this.cacheKey = cacheKey;
            if (!cacheKey || cacheKey == ""){
                this.checkbox.visible = false;
            }
            else{
                this.checkbox.visible = true;
            }
            
            this.txt_title.text = title;
            LabelUtil.setLabel(this.labContent, content);
            if (confirmTxt)
            {
                this.txt_sure.text = confirmTxt;
            }
            if (cancelTxt)
            {
                this.txt_cancel.text = cancelTxt;
            }
        }

        /** 确定购买 */
        private onConfirm()
        {
            var func = this.confirmFun;
            var caller = this.caller;
            var funcData = this.confirmData;
            if (func)
            {
                egret.callLater(()=>{
                    func.apply(caller, [funcData]);
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
        
        private onCheckChange()
        {
            if (this.cacheKey && this.cacheKey != ""){
                CacheManager.setOneCache(this.cacheKey, this.checkbox.selected?1:0);
            }
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

    /**弹框按钮类型*/
    export enum AlertEnumType
    {
        /**有确定和取消两个选择*/
        GB = 1,
        /**只有确定按钮*/
        UN_GB = 2
    }
}