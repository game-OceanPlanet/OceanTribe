module qmr
{
	export class TeamController extends BaseController 
	{
		public constructor()
		{
			super();
		}

		private static _instance: TeamController;
		public static get instance(): TeamController
		{
			return this._instance || (this._instance = new TeamController());
		}

		protected initListeners(): void
		{
            this.addSocketListener(MessageID.S_GET_MY_TEAM_INFO, this.getTeamInfoResponse, this, false);
            this.addSocketListener(MessageID.S_GET_MY_TEAM_LIST, this.getMyTeamListResponse, this, false);
            this.addSocketListener(MessageID.S_MODIFY_PASSWORD, this.getChangePwdResponse, this, false);
            this.addSocketListener(MessageID.S_GET_KEY_LIST, this.getMyKeyResponse, this, false);
            this.addSocketListener(MessageID.S_USE_KEY, this.getUseKeyResponse, this, false);
            this.addSocketListener(MessageID.S_GIVE_KEY, this.getGiveResponse, this, false);
		}

        //获取我的团队信息
		public requestTeamInfoCMD(): void
		{
			var c: com.message.C_GET_MY_TEAM_INFO = new com.message.C_GET_MY_TEAM_INFO();
			this.sendCmd(c, MessageID.C_GET_MY_TEAM_INFO, true);
        }
        
        // 获取我的团队信息
        private getTeamInfoResponse(s: com.message.S_GET_MY_TEAM_INFO):void
        {
            TeamModdel.instance.myTeam = s.myTeamMsg as com.message.MyTeamMsg;
            this.dispatch(NotifyConst.S_GET_MY_TEAM_INFO);
        }

        //获取我的直推成员信息
		public requestMyTeamListCMD(): void
		{
            let currPage:number = TeamModdel.instance.getCurrentPageIndex();
            let nextPage:number = currPage + 1;
            var c: com.message.C_GET_MY_TEAM_LIST = new com.message.C_GET_MY_TEAM_LIST();
            c.page = 1;
            c.pageSize = TeamModdel.PAGE_SIZE;
			this.sendCmd(c, MessageID.C_GET_MY_TEAM_LIST, true);
        }
        
        // 获取我的直推成员信息
        private getMyTeamListResponse(s: com.message.S_GET_MY_TEAM_LIST):void
        {
            TeamModdel.instance.addTeamers(s.page, s.directInfoMsg as com.message.DirectInfoMsg[]);
            this.dispatch(NotifyConst.S_GET_MY_TEAM_LIST);
        }

        //修改密码
		public requestChangePwdCMD(tel:string, pwd:string, vcode:string): void
		{
            var c: com.message.C_MODIFY_PASSWORD = new com.message.C_MODIFY_PASSWORD();
            c.mobile = tel;
            c.password = pwd;
            c.verifyCode = vcode;
			this.sendCmd(c, MessageID.C_MODIFY_PASSWORD, true);
        }
        
        // 修改密码
        private getChangePwdResponse(s: com.message.S_MODIFY_PASSWORD):void
        {
            let tel:string = s.mobile;
            if(tel){
                TipManagerCommon.getInstance().createCommonColorTip("修改密码成功", true);
            }
        }

        //获取激活秘钥记录
		public requestMyKeyCMD(): void
		{
            var c: com.message.C_GET_KEY_LIST = new com.message.C_GET_KEY_LIST();
			this.sendCmd(c, MessageID.C_GET_KEY_LIST, true);
        }
        
        // 获取激活秘钥记录
        private getMyKeyResponse(s: com.message.S_GET_KEY_LIST):void
        {
            // HeroModel.instance.keyCount = s.keyCount;
            TeamModdel.instance.keyLogs = s.keyLogMsg as com.message.KeyLogMsg[];
            this.dispatch(NotifyConst.S_GET_KEY_LIST);
        }

        //自己使用激活秘钥
		public requestUseKeyCMD(): void
		{
			var c: com.message.C_USE_KEY = new com.message.C_USE_KEY();
			this.sendCmd(c, MessageID.C_USE_KEY, true);
        }
        
        // 自己使用激活秘钥
        private getUseKeyResponse(s: com.message.S_USE_KEY):void
        {
            HeroModel.instance.keyCount = s.keyCount;
            HeroModel.instance.IdentityPro.state = s.state;
            TipManagerCommon.getInstance().createCommonColorTip("激活成功", true);
            this.dispatch(NotifyConst.S_USE_KEY);
            this.requestMyKeyCMD();
        }

        //赠送激活秘钥
		public requestGiveCMD(tel:string, count:number): void
		{
            var c: com.message.C_GIVE_KEY = new com.message.C_GIVE_KEY();
            c.mobile = tel;
            c.giveCount = count;
			this.sendCmd(c, MessageID.C_GIVE_KEY, true);
        }
        
        // 赠送激活秘钥
        private getGiveResponse(s: com.message.S_GIVE_KEY):void
        {
            HeroModel.instance.keyCount = s.keyCount;
            TipManagerCommon.getInstance().createCommonColorTip("赠送成功", true);
            this.dispatch(NotifyConst.S_GIVE_KEY);
            this.requestMyKeyCMD();
        }

    }
}