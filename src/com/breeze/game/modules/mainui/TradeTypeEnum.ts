module qmr {
        export class TradeTypeEnum {

                /** 领取鱼日产金币*/
                public static MONEY_REWARD = 1;
                /** 金币买鱼*/
                public static MONEY_BUY_FISH = 2;
                /** OTC-卖给Ta，消耗金币*/
                public static OCT_SELL_MONEY = 3;
                /** OTC-有玩家卖金币给我了，得金币*/
                public static OCT_SOMEONE_SELL_ME = 4;
                /** KAD-用金币兑换KAD，消耗金币*/
                public static MONEY_EXCHANGE_KAD = 5;
                /** 直推成员领取金币，得到金币*/
                public static DIRECT_MONEY_REWARD = 6;
                /** 非直推成员领取金币，得到金币*/
                public static TEAM_MONEY_REWARD = 7;
                /** 海洋星球活动，抽奖获得金币*/
                public static OCEAN_ACTIVITY_DRAW_REWARD = 8;
                /** 海洋星球活动，直推排名获得金币*/
                public static OCEAN_ACTIVITY_DIRECT_REWARD = 9;
                /** 海洋星球活动，团队排名获得金币*/
                public static OCEAN_ACTIVITY_TEAM_REWARD = 10;

                /** U买鱼*/
                public static DIAMOND_BUY_FISH = 101;
                /** OTC-买入金币（挂单），消耗u*/
                public static OCT_BUY_MONEY_COST_U = 102;
                /** OTC-卖给Ta，获得U*/
                public static OCT_SELL_MONEY_GOT_U = 103;
                /** OTC-撤单，获得U*/
                public static OCT_CANCEL_GOT_U = 104;
                /** KAD-注入每日分红，获得U*/
                public static KAD_BONUS_GOT_U = 105;
                /** 玩家充值，获得U*/
                public static RECHARGE_GOT_U = 106;
                /** 海豚卖出，获得U*/
                public static DOLPHIN_SELL_OUT_GOT_U = 107;
                /** 购买海豚，消耗U*/
                public static DOLPHIN_BUY_COST_U = 108;
                /** 孵化海豚，消耗U*/
                public static DOLPHIN_HATCH_COST_U = 109;
                /** 提现，消耗u*/
                public static  CASH_OUT_COST_U = 110;
                /** 玩家提现被拒绝，返还U和手续费，获得U*/
                public static CASH_OUT_REFUSE_GOT_U = 111;
                /** 深海活动，U买鱼，消耗u*/
                public static DEEP_ACTIVITY_BUY_FISH_COST_U = 112;
                /** 海洋星球活动，抽奖获得u*/
                public static  OCEAN_ACTIVITY_DRAW_GOT_U = 113;

                /** KAD-用金币兑换KAD，得到KAD*/
                public static EXCHANGE_GOT_KAD = 201;
                /** KAD-注入，消耗KAD*/
                public static INJECT_COST_KAD = 202;
                /** KAD-注入到期，返还KAD*/
                public static INJECT_EXPIRE_GOT_KAD = 203;


                /** 激活秘钥-自己使用*/
                public static USE_KEY = 301;
                /** 激活秘钥-赠送给他人*/
                public static KEY_GIVE = 302;
                /** 激活秘钥-被赠送*/
                public static KEY_BE_GIVE = 303;


                /** 实名验证系统赠送， 获得领养名额*/
                public static DOLPHIN_BUY_COUNT_BE_GIVE = 401;
                /** 购买海豚，消耗领养名额*/
                public static DOLPHIN_BUY_COST_BUY_COUNT = 402;
                /** 用海豚金币兑换， 获得领养名额*/
                public static DOLPHIN_EXCHANGE_GOT_COUNT = 403;
                /** 非直推下级购买海豚, 团队用户获得领养名额*/
                public static  DOLPHIN_TEAM_BUY_GOT_BUY_COUNT = 404;

                /** 用海豚金币兑换领养名额, 消耗海豚金币*/
                public static DOLPHIN_EXCHANGE_COST_MONEY = 501;
                /** 受孕海豚, 消耗海豚金币*/
                public static DOLPHIN_FERTILIZE_COST_MONEY = 502;
                /** 签到, 获得海豚金币*/
                public static DOLPHIN_SIGN_IN_GOT_MONEY = 503;
                /** 下级购买海豚, 直推用户获得海豚金币*/
                public static DOLPHIN_DIRECT_BUY_GOT_MONEY = 504;

                /** 加速海豚状态, 消耗加速积分*/
                public static DOLPHIN_SPEED_COST_SPEED_COUNT = 601;
                /** 直推下级购买海豚, 直推用户获得加速积分*/
                public static DOLPHIN_DIRECT_BUY_GOT_SPEED_COUNT = 602;
                /** 非直推下级购买海豚, 团队用户获得加速积分*/
                public static DOLPHIN_TEAM_BUY_GOT_SPEED_COUNT = 603;
                /** 管理后台对货币的操作*/
                public static ADMIN_CURRENCY_OPERATION = 1000;
        }
}