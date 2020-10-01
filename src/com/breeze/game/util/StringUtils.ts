module qmr
{
	export class StringUtils
	{
		/**
		 * {0}{1}....
		 * 
		 */
		public static getmsg(...arg): string
		{
			var s: string = arg.shift();
			for (var key in arg)
			{
				var value: any = arg[key];
				s = s.replace(/\{\d+\}/, value);
			}
			return s;
		}

		public static getmsg2(msg: string, arg: any[]): string
		{
			for (let i = 0; i < arg.length; i++)
			{
				var value: any = arg[i];
				msg = msg.replace(/\{\d+\}/, value);
			}
			return msg;
		}

		/**
		* 获取字符串真实长度：1个汉字两个字符
		* @param str
		*/
		public static getCharLength(str: string): number
		{
			var realLength = 0;
			var len = str.length;
			var charCode = -1;
			for (var i = 0; i < len; i++)
			{
				charCode = str.charCodeAt(i);
				if (charCode >= 0 && charCode <= 128)
				{
					realLength += 1;
				} else
				{
					realLength += 2;
				}
			}
			return realLength;
		}

		/** 根据1-999 获取汉字数字， allowZero表示如果是0的话是否显示零 */
		public static getChineseNumber(num: number, allowZero: boolean = false)
		{
			let dayStr = "";
			if (num == 0)
			{
				if(allowZero){
					return "零";
				}
				return dayStr;
			}
			let numStr = num + "";
			if (num > 100)
			{
				dayStr += StringUtils.getChineseNumber(parseInt(numStr.charAt(0)));
				dayStr += "百";
				let shi = parseInt(numStr.charAt(1));
				if (shi > 0)
				{
					dayStr += StringUtils.getChineseNumber(shi);
					dayStr += "十";
				}
				else
				{
					dayStr += "零";
				}
				dayStr += StringUtils.getChineseNumber(parseInt(numStr.charAt(2)));
				return dayStr;
			}
			else if (num == 100)
			{
				dayStr += StringUtils.getChineseNumber(parseInt(numStr.charAt(0)));
				dayStr += "百";
				return dayStr;
			}
			else if (num > 19)
			{
				dayStr += StringUtils.getChineseNumber(parseInt(numStr.charAt(0)));
				dayStr += "十";
				dayStr += StringUtils.getChineseNumber(parseInt(numStr.charAt(1)));
				return dayStr;
			}
			else if (num > 10)
			{
				//dayStr += StringUtils.getChineseNumber(parseInt(numStr.charAt(0)));
				dayStr += "十";
				dayStr += StringUtils.getChineseNumber(parseInt(numStr.charAt(1)));
				return dayStr;
			}
			switch (num)
			{
				case 1:
					dayStr = "一"; break;
				case 2:
					dayStr = "二"; break;
				case 3:
					dayStr = "三"; break;
				case 4:
					dayStr = "四"; break;
				case 5:
					dayStr = "五"; break;
				case 6:
					dayStr = "六"; break;
				case 7:
					dayStr = "七"; break;
				case 8:
					dayStr = "八"; break;
				case 9:
					dayStr = "九"; break;
				case 10:
					dayStr = "十"; break;
			}
			return dayStr;
		}

		public static getStepStr(step: number): string
		{
			return StringUtils.getLevelStr(step) + "j";
		}

		/** 把战力转换为万单位，保留2位小数 */
		public static getFightToWanStr(fightVal: number): string
		{
			fightVal = fightVal / 10000;
			fightVal = Math.floor(100 * fightVal) / 100;
			return fightVal.toString();
		}

		public static getLevelStr(level: number): string
		{
			let str: string
			str = "" + level;
			if(level == 0){
                str = "z";
			}
		    else if (level == 10)
			{
				str = "0";
			} else if (level > 10 && level < 20)
			{
				str = "0" + (level - 10);
			}
			else if (level > 20 && (level % 10 != 0))
			{
				str = str.slice(0, 1) + "0" + str.slice(1);
			}
			return str;
		}

		public static getRedOrGreenNum(num: number, bRed: boolean): any
		{
			let color: number = (bRed) ? ColorQualityConst.COLOR_RED : ColorQualityConst.COLOR_GREEN;
			let msg = HtmlUtil.getHtmlTexts([
				[color, "" + num],
			]);
			return msg;
		}
		/**段落 \n */
		public static getSectionMsg(info: string): string
		{
			return info.replace(/\\n/g, '\n');;
		}

		//缩进
		public static padLeft(value: string, padding: string | number): string
		{
			if (typeof padding === "number")
			{
				return Array(padding + 1).join(" ") + value;
			}
			if (typeof padding === "string")
			{
				return padding + value;
			}
			throw new Error(`Expected string or number, got '${padding}'.`);
		}

		/**拷贝字符串到剪贴板 */
		public static copyClipBoard(message: string): void {
			if (window.wx) {
				window.wx['setClipboardData']({
					data: message,
					success(res) {
						window.wx['getClipboardData']({
							success(res) {
								// console.log(res.data)
							}
						})
					}
				})
			} else if (window.qq) {
				window.qq['setClipboardData']({
					data: message,
					success(res) {
						window.qq['getClipboardData']({
							success(res) {
								TipManagerCommon.getInstance().createCommonColorTip("已经复制到剪贴板", true);
							}
						})
					}
				})
			} else if (window.qg) {
				window.qg['setClipboardData']({
					data: message,
					success(res) {
						TipManagerCommon.getInstance().createCommonColorTip("已经复制到剪贴板", true);
					}
				})
			} else {
				if(StageUtil.isPC()){
					StringUtils.copyText(message);
				} else {
					if(WebBrowerUtil.OS.toLocaleLowerCase() == "ios"){
						// let jsCopy = window["jsCopy"];
						// if(jsCopy){
						// 	jsCopy(message);
						// }
						StringUtils.jsCopy(message);
					} else {
						StringUtils.copyText(message);
					}
				}
			}
		}

		public static copyText(message:string):void
		{
			let input = document.createElement("input");
			input.value = message;
			document.body.appendChild(input);
			input.select();
			input.setSelectionRange(0, input.value.length);
			document.execCommand('Copy');
			document.body.removeChild(input);
			TipManagerCommon.getInstance().createCommonColorTip("已经复制到剪贴板", true);
		}

		// 复制文案功能:
        public static jsCopy(message) {
			var u = navigator.userAgent;
			//苹果
			if (u.match(/(iPhone|iPod|iPad);?/i)) { //ios
			  //   alert('苹果啊');
			  let input = document.createElement('input');
			  input.id = "copy-input";
			  input.readOnly = true;        // 防止ios聚焦触发键盘事件
			  input.setAttribute('readOnly','readOnly');
			  input.style.position = "absolute";
			  input.style.left = "-1000px";
			  input.style.zIndex = "-1000";
			  document.body.appendChild(input)
  
			  input.value = message;
  
			  StringUtils.selectText(input, 0, message.length);
  
			  var successful = document.execCommand('copy');
			  if(successful){
				TipManagerCommon.getInstance().createCommonColorTip("已经复制到剪贴板", true);
			  } else {
				TipManagerCommon.getInstance().createCommonColorTip("复制失败，请手动复制链接");
			  }

			  // 移除选中的元素
			  window.getSelection().removeAllRanges();
			}
		  };
  
		  public static selectText(textbox, startIndex, stopIndex) {
			if (textbox.createTextRange) {//ie
				const range = textbox.createTextRange();
				range.collapse(true);
				range.moveStart('character', startIndex);//起始光标
				range.moveEnd('character', stopIndex - startIndex);//结束光标
				range.select();//不兼容苹果
			} else {//firefox/chrome
				textbox.select();
				textbox.setSelectionRange(startIndex, stopIndex);
				textbox.focus();
			}
		  }
	}
}