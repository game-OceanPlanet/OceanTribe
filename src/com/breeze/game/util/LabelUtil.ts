module qmr
{
	export class LabelUtil
	{
		public static setLabelText(lab: eui.Label, key: string, ...args)
		{
			let msg: string = ConfigManagerAft.getCNValue(key);
			if (args && args.length > 0)
			{
				args.unshift(msg);
				msg = StringUtils.getmsg(...args);
			}
			lab.textFlow = HtmlUtil.htmlParse.parser(msg);
		}

		public static setLabel(lab: eui.Label, msg: string, isGray: boolean = false)
		{
			if (msg)
			{
				msg = StringUtils.getSectionMsg(msg);
				let textElement: Array<egret.ITextElement> = HtmlUtil.htmlParse.parser(msg);
				if (isGray)
				{
					let count = textElement.length;
					for (var i = 0; i < count; i++)
					{
						let t: egret.ITextElement = textElement[i];
						if (t.style) t.style.textColor = 0x78685f;
						else t.style = { textColor: 0x78685f };
					}
				}
				lab.textFlow = textElement;
			}
			else
			{
				lab.text = "";
			}
		}

		/** 设置次数样式 */
		public static setLabelCount(lab: eui.Label, msg: string, count: number, pre: boolean = false)
		{
			let textColor = count > 0 ? ColorQualityConst.COLOR_GREEN : ColorQualityConst.COLOR_RED;
			let txt = "<font color='" + textColor + "'>" + count + "</font>"
			lab.textFlow = HtmlUtil.htmlParse.parser(pre ? txt + msg : msg + txt);
		}

		/** 设置次数样式 */
		public static setLabelCount2(lab: eui.Label, msg: string, count: number, pre: boolean = false)
		{
			let textColor = count > 0 ? ColorQualityConst.COLOR_RED : ColorQualityConst.COLOR_GREEN;
			let txt = "<font color='" + textColor + "'>" + count + "</font>"
			lab.textFlow = HtmlUtil.htmlParse.parser(pre ? txt + msg : msg + txt);
		}
		/** 设置超链接文本 */
		public static addLabelEvent(label: eui.Label, callBack: Function, thisObject: any, key: string = "", ...args): void
		{
			let msg: string = "";
			if (args == undefined || args.length == 0)
			{
				let labName = "<u>" + label.text + "</u>";
				args = [label.hashCode, labName];
			}
			if (key == "") key = "CN_119";
			msg = ConfigManagerAft.getCNValue(key);
			if (args && args.length > 0)
			{
				args.unshift(msg);
				msg = StringUtils.getmsg(...args);
			}
			label.textFlow = HtmlUtil.htmlParse.parser(msg);
			if (label.hasEventListener(egret.TextEvent.LINK)) return;
			if (callBack)
			{
				label.addEventListener(egret.TextEvent.LINK, callBack, thisObject);
			}
		}

		public static removeLabelEvent(label: eui.Label, callBack: Function, thisObject: any)
		{
			if (label)
			{
				label.name = "";
				label.removeEventListener(egret.TextEvent.LINK, callBack, thisObject);
			}
		}

		public static addInputListener(textInput, thisObject: any)
		{
			textInput.addEventListener(egret.FocusEvent.FOCUS_IN, LabelUtil.focusInTxtHandler, thisObject);
			textInput.addEventListener(egret.FocusEvent.FOCUS_OUT, LabelUtil.focusInTxtHandler, thisObject);
		}

		public static focusInTxtHandler()
		{
			var inputFocus = function ()
			{
				if (document && document.body)
				{
					setTimeout(function ()
					{
						if(window.scrollTo){
							window.scrollTo(0, 150);
						}
						
					}, 200);
				}
			};
			inputFocus();
		}
	}
}