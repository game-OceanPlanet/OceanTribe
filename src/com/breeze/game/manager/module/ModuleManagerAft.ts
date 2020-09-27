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
            modulelManager.registerClass(ModuleNameConst.SHOP_VIEW, qmr.ShopView);
            modulelManager.registerClass(ModuleNameConst.PET_VIEW, qmr.PetView);
            modulelManager.registerClass(ModuleNameConst.GOLD_LOG_VIEW, qmr.GoldLogView);
            modulelManager.registerClass(ModuleNameConst.USDT_LOG_VIEW, qmr.USDTLogView);
            modulelManager.registerClass(ModuleNameConst.TRADE_VIEW, qmr.TradeView);
            modulelManager.registerClass(ModuleNameConst.EXCHANGE_VIEW, qmr.ExchangeView);
            modulelManager.registerClass(ModuleNameConst.INVITE_CODE_VIEW, qmr.InviteCodeView);
            modulelManager.registerClass(ModuleNameConst.INJECT_VIEW, qmr.InjectView);
            modulelManager.registerClass(ModuleNameConst.DIVIDEND_VIEW, qmr.DividendView);
            modulelManager.registerClass(ModuleNameConst.ACT_KEY_VIEW, qmr.ActiveKeyView);


            modulelManager.registerClass(ModuleNameConst.APP_DOWN_VIEW, qmr.AppDownloadView);
            modulelManager.registerClass(ModuleNameConst.MINE_PASSIED_VIEW, qmr.MinePassIdView);
            modulelManager.registerClass(ModuleNameConst.MINEID_VIEW, qmr.MineIdView);
            modulelManager.registerClass(ModuleNameConst.CERTIFICATION_VIEW, qmr.CertificationView);
            modulelManager.registerClass(ModuleNameConst.HELP_MAIN_VIEW, qmr.HelpMain);
            modulelManager.registerClass(ModuleNameConst.RECHARGE_VIEW, qmr.RechargeView);
            modulelManager.registerClass(ModuleNameConst.WIHTDRAWAL_VIEW, qmr.WithdrawalView);
        }
    }
}