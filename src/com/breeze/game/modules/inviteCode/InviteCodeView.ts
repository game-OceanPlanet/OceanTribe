module qmr
{
	export class InviteCodeView extends BaseModule
	{
		public panelGroup:eui.Group;

public txt_guimo:eui.Label;
public txt_teamguimo:eui.Label;
public txt_ticheng:eui.Label;
public txt_shouxufei:eui.Label;
public txt_teamticheng:eui.Label;
public txt_tips:eui.Label;
public txt_code:eui.Label;
public btn_copy_code:eui.Group;
public btn_copy_address:eui.Group;
public itemGroup:eui.Group;
public item_list:eui.List;
public btnReturn:eui.Image;
public btn_help:eui.Image;
public title_tuiguang:eui.Image;
public codeGroup:eui.Group;


public CN_477:eui.Label;
public CN_474:eui.Label;
public CN_475:eui.Label;
public CN_476:eui.Label;
public CN_478:eui.Label;
public CN_359:eui.Label;
public CN_360:eui.Label;
public CN_358:eui.Label;
public CN_361:eui.Label;
public CN_362:eui.Label;
public CN_363:eui.Label;
public CN_479:eui.Label;

public copy_group1:eui.Group;
public txt_copy1:eui.TextInput;
public copy_group2:eui.Group;
public txt_copy2:eui.TextInput;



		private _arrCollection: eui.ArrayCollection;
		
		public constructor()
		{
			super();
			this.qmrSkinName = "InviteCodeSkin";
			this.isNeedMask = true;

			this.helpId = HelpIdEnum.TIP_10;
		}

		protected initComponent():void
		{
			let t = this;
			super.initComponent();

            t.item_list.itemRenderer = InviteCodeItem;
            t._arrCollection = new eui.ArrayCollection();
			t.item_list.dataProvider = t._arrCollection;
			
			t.showTxtNames = ["CN_477","CN_474","CN_475","CN_476","CN_478","CN_359","CN_360","CN_358","CN_361","CN_362","CN_363","CN_479"];

			while(t.codeGroup.numChildren > 0){
				t.codeGroup.removeChildAt(0);
			}
			let pro:com.message.BasePlayerMsg = HeroModel.instance.IdentityPro;
			let code = pro.inviteCode;
			let address:string = PlatformConfig.InviteAddress + "?code="+code+"&register=1";
			if(address){
				let sp:egret.Sprite = GameUtil.createCode(address);
				t.codeGroup.addChild(sp);
			}
		}

		protected switchLange(){
			let t = this;
			super.switchLange();
			if(GlobalConfig.isCN){
                t.title_tuiguang.source = "nameImg_json.title_tuiguang";
            } else {
                t.title_tuiguang.source = "nameImg_en_json.title_tuiguang";
            }
		}

		protected initData(): void {
			super.initData();
			let t = this;
			t.updateView();
			TeamController.instance.requestTeamInfoCMD();
			TeamController.instance.requestMyTeamListCMD();
			t.copy_group1.visible = t.copy_group2.visible = false;
			t.btn_copy_code.visible = t.btn_copy_address.visible = true;
		}
		
		protected initListener(): void
		{
			super.initListener();
            let t = this;
			t.addClickEvent(t.btnReturn, t.closeView, t);
			t.addClickEvent(t.btn_copy_code, t.copyCode, t);
			t.addClickEvent(t.btn_copy_address, t.copyAddress, t);
			
			t.registerNotify(NotifyConst.S_BUY_FISH, t.updateView, t);
            t.registerNotify(NotifyConst.S_GET_MONEY_REWARD, t.updateView, t);
			t.registerNotify(NotifyConst.S_GET_MONEY_INFO, t.updateView, t);
			t.registerNotify(NotifyConst.S_SYN_PROPERTY, t.updateView, t);
			t.registerNotify(NotifyConst.S_GET_MY_TEAM_INFO, t.updateView, t);
			t.registerNotify(NotifyConst.S_GET_MY_TEAM_LIST, t.updateView, t);
		}

		private copyCode():void
		{
			let t = this;
			let code:string = this.txt_code.text.trim();
			if(code){
				if(document.execCommand('Copy')){
					StringUtils.copyClipBoard(code);
				} else {
					let address:string = PlatformConfig.InviteAddress + "?code="+code+"&register=1";
					t.copy_group1.visible = t.copy_group2.visible = true;
					t.btn_copy_code.visible = t.btn_copy_address.visible = false;
					t.txt_copy1.text = t.txt_code.text;
					t.txt_copy2.text = address;
					TipManagerCommon.getInstance().showLanTip("CN_255");
				}
				
			}
			
		}

		private copyAddress():void
		{
			let t = this;
			let code:string = this.txt_code.text.trim();
			if(code){
				let address:string = PlatformConfig.InviteAddress + "?code="+code+"&register=1";
				if(document.execCommand('Copy')){
					StringUtils.copyClipBoard(address);
				} else {
					t.copy_group1.visible = t.copy_group2.visible = true;
					t.btn_copy_code.visible = t.btn_copy_address.visible = false;
					t.txt_copy1.text = t.txt_code.text;
					t.txt_copy2.text = address;
					TipManagerCommon.getInstance().showLanTip("CN_255");
				}
			}
		}

		private updateView():void
		{
			let t = this;
			let pro:com.message.BasePlayerMsg = HeroModel.instance.IdentityPro;
			if(pro){
				t.txt_code.text = pro.inviteCode;
			}

			let teamPro:com.message.MyTeamMsg = TeamModdel.instance.myTeam;
			if(teamPro){
				// t.txt_teamguimo.text = teamPro.directActivity+"";
				t.txt_teamticheng.text = teamPro.areaActivity+"";
			}

			t.txt_guimo.text = HeroModel.instance.dolphinBuyCount + "";
			t.txt_ticheng.text = HeroModel.instance.dolphinMoney + "";
			t.txt_shouxufei.text = HeroModel.instance.dolphinSpeedCount + "";

			LabelUtil.setLabelText(t.txt_tips, ClientCnEnum.CN_107);
			let msg:string = ConfigManagerAft.getCNValue(ClientCnEnum.CN_107)
			t.txt_tips.text = msg;

			let teams:com.message.DirectInfoMsg[] = TeamModdel.instance.teamers;
			t._arrCollection.replaceAll(teams);

			let teamActive:number = 0;
			let len:number = teams.length;
			let eff:number = 0;
			if(teams && len > 0){
				let max:number = 0;
				for(var i:number = 0; i < len; i ++){
					if(teams[i].directActivity > max){
						max = teams[i].directActivity;
					}
					if(teams[i].directActivity > 0){
						eff ++;
					}
					teamActive += teams[i].directActivity;
				}

				if(eff > 1){
					teamActive = teamActive - max;
				}
			}

			t.txt_teamguimo.text = teamActive + "";
		}

		public dispose(): void
		{
			super.dispose();
		}
	}
}