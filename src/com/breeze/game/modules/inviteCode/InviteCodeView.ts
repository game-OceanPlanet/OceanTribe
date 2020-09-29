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
public txt_title:eui.Label;
public itemGroup:eui.Group;
public item_list:eui.List;
public btnReturn:eui.Image;
public btn_help:eui.Image;






		private _arrCollection: eui.ArrayCollection;
		
		public constructor()
		{
			super();
			this.qmrSkinName = "InviteCodeSkin";
			this.isNeedMask = true;

			this.helpId = HelpIdEnum.TIP_6;
		}

		protected initComponent():void
		{
			let t = this;
			super.initComponent();

            t.item_list.itemRenderer = InviteCodeItem;
            t._arrCollection = new eui.ArrayCollection();
            t.item_list.dataProvider = t._arrCollection;
		}

		protected initData(): void {
			super.initData();
			let t = this;
			t.updateView();
			TeamController.instance.requestTeamInfoCMD();
			TeamController.instance.requestMyTeamListCMD();
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
			let code:string = this.txt_code.text.trim();
			if(code){
				StringUtils.copyClipBoard(code);
			}
			
		}

		private copyAddress():void
		{
			let code:string = this.txt_code.text.trim();
			if(code){
				let address:string = "http://www.siychina.com/game.html?code="+code+"&register=1";
				StringUtils.copyClipBoard(address);
			}
		}

		private updateView():void
		{
            let t = this;
			let pro:com.message.BasePlayerMsg = HeroModel.instance.IdentityPro;
			if(pro){
				t.txt_code.text = pro.inviteCode;
			}

			t.txt_guimo.text = HeroModel.instance.dolphinBuyCount+"";
			t.txt_ticheng.text = HeroModel.instance.dolphinMoney+"";
			t.txt_shouxufei.text = HeroModel.instance.dolphinSpeedCount+"";

			let teamPro:com.message.MyTeamMsg = TeamModdel.instance.myTeam;
			if(teamPro){
				
				t.txt_teamguimo.text = teamPro.allCount + "人";

				let teamCfg:TeamRateCfg = TeamModdel.instance.getteamRateCfgsIdByCount(teamPro.count, teamPro.allCount);
				if(teamCfg){
					t.txt_teamticheng.text = teamCfg.precent + "%";
				}

				let starCfg:TeamStarCfg = TeamModdel.instance.getteamStarCfgsIdByCount(teamPro.count, teamPro.allCount);
				LabelUtil.setLabelText(t.txt_tips, ClientCnEnum.CN_105, starCfg.count, starCfg.total, starCfg.id);
			}

			let logs:com.message.DirectInfoMsg[] = TeamModdel.instance.teamers;
			t._arrCollection.replaceAll(logs);
		}

		public dispose(): void
		{
			super.dispose();
		}
	}
}