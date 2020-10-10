module qmr {
    export class RegexpUtil {
        /**
         * 手机号校验
         */
        public static isPhoneNumber(phoneNum): boolean {
            // let let reg = /^[1][3,4,5,7,8,9][0-9]{9}$/;
            /*
            * 移动号码包括的号段：134/135/136/137,138,139；
            *                     147/148(物联卡号)；
            *                     150/151/152/157/158/159；
            *                     165（虚拟运营商）；
            *                     1703/1705/1706（虚拟运营商）、178；
            *                     182/183/184/187/188
            *                     198

            * 联通号段包括：130/131
            *               145
            *               155/156
            *               166/167(虚拟运营商)
            *               1704/1707/1708/1709、171
            *               186/186
            *
            * 电信号段包括： 133
            *                153
            *                162(虚拟运营商)
            *                1700/1701/1702(虚拟运营商)
            *                180/181/189
            *                191/199
            * */
            // let reg =new RegExp(/^1(3[0-9]|4[5,7]|5[0,1,2,3,5,6,7,8,9]|6[2,5,6,7]|7[0,1,7,8]|8[0-9]|9[1,8,9])\d{8}$/);
            // return reg.test(phoneNum);
            if(!phoneNum){
				return false;
			}
			if(!RegexpUtil.IsInteger(phoneNum)){
				return;
			}
			return String(phoneNum).length == 11;
        }

        /**
         * 身份证号码验证
         * @param code 
         */
        public static isIdentifyId(code:string):boolean
        {
            let reg =new RegExp(/(^\d{15}$)|(^\d{18}$)|(^\d{17}(\d|X|x)$)/);
            return reg.test(code);
        }

        /**
         * 判断输入内容是否为空
         * 
         */
        public static IsNull(value):boolean {
            var str = value.trim();
            if (str.length == 0) {
                TipManagerCommon.getInstance().showLanTip('CN_247');//请将“文本框”改成你需要验证的属性名称!
                return true;
            }
            return false;
        }

        /**
         * 判断日期类型是否为hh:mm:ss格式的类型
         */
        public static IsTime(value):boolean {
            var str = value.trim();
            if (str.length != 0) {
                let reg =new RegExp(/^((20|21|22|23|[0-1]\d):[0-5][0-9])(:[0-5][0-9])?$/);
                if (!reg.test(str)) {
                    TipManagerCommon.getInstance().showLanTip("CN_248");//请将“日期”改成你需要验证的属性名称!
                    return false;
                }
            }
            return true;
        }

        /**
         * 判断输入的字符是否为英文字母
         */
        public static IsLetter(value):boolean {
            var str = value.trim();
            if (str.length != 0) {
                let reg =new RegExp(/^[a-zA-Z]+$/);
                if (!reg.test(str)) {
                    TipManagerCommon.getInstance().showLanTip("CN_249");//请将“英文字母类型”改成你需要验证的属性名称!
                    return false;
                }
            }
            return true;
        }

        /**
         * 判断输入的字符是否为整数
         */
        public static IsInteger(value):boolean {
            var str = value.trim();
            if (str.length != 0) {
                let reg =new RegExp(/^[-+]?\d*$/);
                if (!reg.test(str)) {
                    TipManagerCommon.getInstance().showLanTip("CN_250");//请将“整数类型”要换成你要验证的那个属性名称！
                    return false;
                }
            }
            return true;
        }

        /**
         * 判断输入的字符是否为双精度
         */
        public static IsDouble(value):boolean {
            var str = value.trim();
            if (str.length != 0) {
                let reg =new RegExp(/^[-+]?\d+(.\d+)?$/);
                if (!reg.test(str)) {
                    TipManagerCommon.getInstance().showLanTip("CN_251");//请将“双精度类型”要换成你要验证的那个属性名称！
                    return false;
                }
            }
            return true;
        }

        /**
         * 判断输入的字符是否为:a-z,A-Z,0-9
         */
        public static IsString(value):boolean {
            var str = value.trim();
            if (str.length != 0) {
                let reg =new RegExp(/^[a-zA-Z0-9_]+$/);
                if (!reg.test(str)) {
                    TipManagerCommon.getInstance().showLanTip("CN_252");//请将“字符串类型”要换成你要验证的那个属性名称！
                    return false;
                }
            }
            return true;
        }

        /**
         * 判断输入的字符是否为中文
         */
        public static IsChinese(value) {
            var str = value.trim();
            if (str.length != 0) {
                let reg =new RegExp(/^[\u0391-\uFFE5]+$/);
                if (!reg.test(str)) {
                    TipManagerCommon.getInstance().showLanTip("CN_252");//请将“字符串类型”要换成你要验证的那个属性名称！
                }
            }
        }

         /**
         * 判断输入的EMAIL格式是否正确
         */
        public static IsEmail(value) {
            var str = value.trim();
            if (str.length != 0) {
                let reg =new RegExp(/^\w+([-+.]\w+)@\w+([-.]\w+).\w+([-.]\w+)*$/);
                if (!reg.test(str)) {
                    TipManagerCommon.getInstance().showLanTip("CN_252");//请将“字符串类型”要换成你要验证的那个属性名称！
                }
            }
        }

         /**
         * 判断输入的邮编(只能为六位)是否正确
         */
        public static IsZIP(value) {
            var str = value.trim();
            if (str.length != 0) {
                let reg =new RegExp(/^\d{6}$/);
                if (!reg.test(str)) {
                    TipManagerCommon.getInstance().showLanTip("CN_252");//请将“字符串类型”要换成你要验证的那个属性名称！
                }
            }
        }

        /**
         * 判断输入的数字不大于某个特定的数字
         */
        public static MaxValue(value, max) {
            var val = value.trim();
            if (value.length != 0) {
                let reg =new RegExp(/^[-+]?\d*$/);
                if (!reg.test(value)) {//判断是否为数字类型
                    if (val > parseInt(max)) //“123”为自己设定的最大值
                    {
                        TipManagerCommon.getInstance().showLanTip('CN_253');//请将“数字”改成你要验证的那个属性名称！
                    }
                }
            }
        }
    }
}