module qmr
{
    export class ModuleManagerAft
    {
        public constructor()
        {
        }

        public static init()
        {
            this.setupClass();
        }

        public static setupClass()
        {
            let modulelManager = ModuleManager;
            modulelManager.registerClass(ModuleNameConst.PROMPT_VIEW, qmr.PromptView);
            modulelManager.registerClass(ModuleNameConst.PROMPT_INPUT_VIEW, qmr.PromptInputView);
            modulelManager.registerClass(ModuleNameConst.HELP_TIP_VIEW, qmr.HelpTipView);
            modulelManager.registerClass(ModuleNameConst.MAINUI_VIEW, qmr.MainView);
            modulelManager.registerClass(ModuleNameConst.GOLD_LOG_VIEW, qmr.GoldLogView);
            modulelManager.registerClass(ModuleNameConst.USDT_LOG_VIEW, qmr.USDTLogView);
            modulelManager.registerClass(ModuleNameConst.INVITE_CODE_VIEW, qmr.InviteCodeView);
            modulelManager.registerClass(ModuleNameConst.ACT_KEY_VIEW, qmr.ActiveKeyView);


            modulelManager.registerClass(ModuleNameConst.APP_DOWN_VIEW, qmr.AppDownloadView);
            modulelManager.registerClass(ModuleNameConst.MINEID_VIEW, qmr.MineIdView);
            modulelManager.registerClass(ModuleNameConst.CERTIFICATION_VIEW, qmr.CertificationView);
            modulelManager.registerClass(ModuleNameConst.HELP_MAIN_VIEW, qmr.HelpMain);
            modulelManager.registerClass(ModuleNameConst.RECHARGE_VIEW, qmr.RechargeView);
            modulelManager.registerClass(ModuleNameConst.WIHTDRAWAL_VIEW, qmr.WithdrawalView);
            modulelManager.registerClass(ModuleNameConst.ADOPT_VIEW, qmr.AdoptView);
            modulelManager.registerClass(ModuleNameConst.DOLP_VIEW, qmr.DolpView);
            modulelManager.registerClass(ModuleNameConst.LOGIN_GIFT_VIEW, qmr.LoginGiftView);
        }
    }
}