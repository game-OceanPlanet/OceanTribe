module qmr
{
	/**
	 *
	 * @description 特效播放器
	 *
	 */
    export class EffectPlayer
    {
    	/**
    	 * @description 播放特效
    	 * @param effectRes 要播放的特效资源
    	 * @param target 目标,可能是以个坐标点
    	 * @param dir 特效的方向（暂时保留，后面时候废弃这个字段）
    	 * @param timeScale 特效缩放
    	 * @param isHit 是否受击
    	 * @param offset 特效位置偏移
    	 * @param isSound 是否播放音效声音
         * 
    	 */
        public static playEffect(effectId: number, target: any, dir: number, timeScale: number = 1, isHit: boolean = false, offset: any = { x: 0, y: 0 }, isSound: boolean = true): BaseEffect
        {
            let currentEffect = EffectFactory.getInstance().getEffect();
            let effectData: EffectDataCfg = EffectModel.instance.getEffectData(effectId);
            if (effectData == null)
            {
                LogUtil.logF("播放特效 [playEffect: " + effectId + " 不存在]")
                return null;
            }
            currentEffect.x = currentEffect.y = 0;
            if (effectData.blendMode == 1)
            {
                currentEffect.clipBlendMode = egret.BlendMode.ADD;
            }
            switch (effectData.position)
            {
                case EffectPosition.CARD_BOTTOM://卡牌边框下面
                    if (target instanceof BaseMoverActor && isHit)
                    {
                        currentEffect.x = offset.x + target.anchorOffsetX;
                        currentEffect.y = offset.y + target.anchorOffsetY;
                        (<BaseMoverActor>target).addChildAt(currentEffect, 0);
                    } else
                    {
                        currentEffect.x = offset.x;
                        currentEffect.y = offset.y;
                        SceneManager.instance.addToBottom(currentEffect);
                    }
                    break;
                case EffectPosition.CARD_OVER://卡牌边框上面和人物之间
                    if (target instanceof BaseMoverActor && isHit)
                    {
                        currentEffect.x = offset.x + target.anchorOffsetX;
                        currentEffect.y = offset.y + target.anchorOffsetY;
                        (<BaseMoverActor>target).addToCardAndActor(currentEffect);
                    } else
                    {
                        currentEffect.x = target.x;
                        currentEffect.y = target.y;
                        SceneManager.instance.addToBottom(currentEffect);
                    }
                    break;
                case EffectPosition.CARD_FRONT://卡牌和人物之上，属于卡牌内
                    if (target instanceof BaseMoverActor && isHit)
                    {
                        currentEffect.x = offset.x + target.anchorOffsetX;
                        currentEffect.y = offset.y + target.anchorOffsetY;
                        (<BaseMoverActor>target).addChild(currentEffect);
                    } else
                    {
                        currentEffect.x = target.x;
                        currentEffect.y = target.y;
                        SceneManager.instance.addToFront(currentEffect);
                    }
                    break;
                case EffectPosition.CARD_TOP://人物之上，场景上，脱离卡牌
                    if (target)
                    {
                        currentEffect.x = target.x + offset.x;
                        currentEffect.y = target.y + offset.y;
                        SceneManager.instance.addToFront(currentEffect);
                    }
                    else
                    {
                        currentEffect.x = offset.x;
                        currentEffect.y = offset.y;
                        SceneManager.instance.addToFront(currentEffect);
                    }
                    break;
            }
            currentEffect.isRandomPlay = (effectData.isRandomPlay == 1);
            currentEffect.play(effectData.res, dir, effectData.playTimes, timeScale);
            currentEffect.cfgScale = effectData.scale;
            currentEffect.scaleXY = currentEffect.cfgScale;
            if (isSound && effectData.sound)
            {
                SoundManager.getInstance().loadAndPlayEffect(effectData.sound);
            }
            return currentEffect;
        }



        /** 播放终极技能特效 */
        public static playUltimateSkillEffect(skillId: number, pos: any, loopCallBack: Function = null, thisObject: any = null): BaseEffect
        {
            let skillData: SkillCfg = SkillModel.instance.getSkillCfg(skillId);
            if (skillData == null)
            {
                LogUtil.log("播放技能 [playUltimateSkillEffect: " + skillId + " 不存在]")
                return null;
            }
            let skillEft = EffectFactory.getInstance().getEffect();
            skillEft.x = pos.x;
            skillEft.y = pos.y;
            SceneManager.instance.addToTop(skillEft);
            skillEft.play(skillData.ultimateEffectId + "_effect", -1, 1, 1, loopCallBack, thisObject);
            return skillEft;
        }



        /**
         * @description 显示点击特效
         */
        public static showClickEffect(x: number, y: number): void
        {
            let currentEffect = EffectFactory.getInstance().getEffect();
            currentEffect.play(EffectConst.CLICK_EFFECT + "_effect", -1, 1);
            currentEffect.x = x;
            currentEffect.y = y;
            LayerManager.instance.getLayer(LayerConst.UI_EFFECT).addChild(currentEffect);
        }

        /**
         * 播放一个配置特效,需要在特效表里面配置一个ID
         * @effectId 特效ID
         * @pos 特效播放位置{x:10,y:20}
         * @parent 父容器，如果没有就代表添加到ui顶层容器
         */
        public static playCfgEffect(effectId: number, pos: any, parent: egret.DisplayObjectContainer = null, loopCallBack: Function = null, thisObject: any = null): BaseEffect
        {
            let currentEffect = EffectFactory.getInstance().getEffect();
            let effectData: EffectDataCfg = EffectModel.instance.getEffectData(effectId);
            if (effectData)
            {
                currentEffect.x = pos.x;
                currentEffect.y = pos.y;
                if (parent)
                {
                    parent.addChild(currentEffect);
                } else
                {
                    LayerManager.instance.getLayer(LayerConst.UI_EFFECT).addChild(currentEffect);
                }
                currentEffect.play(effectData.res, -1, effectData.playTimes, 1, loopCallBack, thisObject);
                if (effectData.blendMode == 1)
                {
                    currentEffect.clipBlendMode = egret.BlendMode.ADD;
                }
                currentEffect.isRandomPlay = (effectData.isRandomPlay == 1);
                currentEffect.cfgScale = effectData.scale;
                currentEffect.scaleXY = currentEffect.cfgScale;
            }
            else
            {
                LogUtil.logF("播放特效 [playEffect: " + effectId + " 不存在]")
                return null;
            }
            return currentEffect;
        }


        /**
        * 播放一个特效,已知道特效名字
        * @pos 特效播放位置{x:10,y:20}
        * @parent 父容器，如果没有就代表添加到ui顶层容器
        */
        public static playUIEffect(resName: string, isLoop: boolean, pos: { x: number, y: number }, parent: egret.DisplayObjectContainer = null, loopCallBack: Function = null, thisObject: any = null): BaseEffect
        {
            let currentEffect = EffectFactory.getInstance().getEffect();
            if (pos)
            {
                currentEffect.x = pos.x;
                currentEffect.y = pos.y;
            }
            else
            {
                currentEffect.x = 0;
                currentEffect.y = 0;
            }
            if (parent)
            {
                parent.addChild(currentEffect);
            } else
            {
                LayerManager.instance.getLayer(LayerConst.UI_EFFECT).addChild(currentEffect);
            }
            var playTimes: number = isLoop ? -1 : 1;
            currentEffect.playUIEffect(resName, -1, playTimes, 1, loopCallBack, thisObject);
            return currentEffect;
        }
    }
}
