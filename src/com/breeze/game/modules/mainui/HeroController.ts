module qmr
{
	export class HeroController extends BaseController 
	{
		public constructor()
		{
			super();
		}

		private static _instance: HeroController;
		public static get instance(): HeroController
		{
			return this._instance || (this._instance = new HeroController());
		}

		protected initListeners(): void
		{
			this.addSocketListener(MessageID.S_USER_LOGIN_INIT_FINISH, this.onRecUseLoginInitFinish, this, true);
			this.addSocketListener(MessageID.S_SYN_PROPERTY, this.resSynProp, this, false);
		}

		public reqUserLoginInitFinish(): void
		{
			var c: com.message.C_USER_LOGIN_INIT_FINISH = new com.message.C_USER_LOGIN_INIT_FINISH();
			this.sendCmd(c, MessageID.C_USER_LOGIN_INIT_FINISH, true);
		}

		/**
		 *  ---向服务器发送资源初始化完毕，可以推送其它消息了---
		 */
		public reqLoadResFinishToServer(): void
		{
			// var c: com.message.C_SYNC_LOAD_FINISH = new com.message.C_SYNC_LOAD_FINISH();
			// this.sendCmd(c, MessageID.C_SYNC_LOAD_FINISH, true);
		}

		/**
		 *  ===返回角色信息===
		 */
		private onRecUseLoginInitFinish(s: com.message.S_USER_LOGIN_INIT_FINISH): void
		{
			PetController.instance;
			HeroController.instance;
			MapController.instance;
			TradeController.instance;
            HeroModel.instance.uid = Int64Util.getNumber(s.playerId);
            HeroModel.instance.playerPro = s.property as com.message.PlayerPropertyMsg;
            HeroModel.instance.IdentityPro = s.basePlayerMsg as com.message.BasePlayerMsg;
            HeroModel.instance.updateData(s.fishMsg as com.message.FishMsg[]);
			HeroModel.instance.pendingMoney = HeroModel.instance.getPetPendingMoney();
			HeroModel.instance.totalMoney = Int64Util.getNumber(s.property.money);
			HeroModel.instance.totalUSDT = Int64Util.getNumber(s.property.diamond);
			HeroModel.instance.totalKAD = Int64Util.getNumber(s.property.KAD);
			HeroModel.instance.keyCount = Int64Util.getNumber(s.property.keyCount);
			HeroModel.instance.setHadBuyFishes(s.buyFishStr);

			ModuleManager.showModule(ModuleNameConst.MAINUI_VIEW, null, LayerConst.TOOLBAR);
			SceneManager.instance.enterMap(3004);

			let isOpen = qmr.SoundManager.getInstance().isMusicSoundOpen;
			qmr.SoundManager.getInstance().isMusicSoundOpen = false;
			qmr.SoundManager.getInstance().isMusicSoundOpen = true;
			qmr.SoundManager.getInstance().isMusicSoundOpen = isOpen;
			isOpen = qmr.SoundManager.getInstance().isEffectSoundOpen;
			qmr.SoundManager.getInstance().isEffectSoundOpen = false;
			qmr.SoundManager.getInstance().isEffectSoundOpen = true;
            qmr.SoundManager.getInstance().isEffectSoundOpen = isOpen;
            
			this.reqLoadResFinishToServer();//通知服务器资源已加载完毕，服务端开始广播游戏协议
			//延迟小段时间进入场景，提升视觉体验
			let timer = new egret.Timer(300, 1);
			timer.addEventListener(egret.TimerEvent.TIMER, function(){
				GameLoadingView.getInstance().hideSelf();
			}, this);
			timer.start();
		}
		
		private resSynProp(s: com.message.S_SYN_PROPERTY): void
		{
			let t = this;
			s.mapMsg.forEach(element =>
			{
				var value: number = Int64Util.getNumber(element.value);
				switch (element.key)
				{
					case com.message.PropertyID.LEVEL:
						break;
					case com.message.PropertyID.MONEY:
						HeroModel.instance.totalMoney = value;
						break;
					case com.message.PropertyID.DIAMOND:
						HeroModel.instance.totalUSDT = value;
						break;
					case com.message.PropertyID.KAD:
						HeroModel.instance.totalKAD = value;
						break;
					case com.message.PropertyID.KEY:
						HeroModel.instance.totalKAD = value;
						break;
				}
			})

			this.dispatch(NotifyConst.S_SYN_PROPERTY);
		}
		
	}
}