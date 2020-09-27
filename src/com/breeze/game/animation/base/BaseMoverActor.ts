module qmr
{
	/**
	 *
	 * @description 基础的场景中怪物和人物的动画的基类
	 *
	 */
    export class BaseMoverActor extends BaseMover
    {
        protected actorContainer: egret.DisplayObjectContainer;//显示容器
        protected container: egret.DisplayObjectContainer;//卡牌容器
        protected controllerDic: any;                   //状态控制，子类重新
        protected currentController: BaseMoverActorController;
        protected lastStatus: string;                   //上个状态
        protected maxHp: number = 0;                    //最大血量
        protected curHp: number = 0;                    //当前血量
        public fighterId: number;                       //战斗角色ID,唯一
        public camp: CampType;                          //敌我阵营
        protected baseActor: qmr.BaseActor;             //卡牌动画
        public constructor()
        {
            super();
            this.controllerDic = {};
            this.isCanMove = true;

            this.actorContainer = new egret.DisplayObjectContainer();
            this.actorContainer.touchChildren = false;
            this.container = new egret.DisplayObjectContainer();
            this.ui = this.actorContainer;
            this.ui.touchEnabled = true;
            this.actorContainer.addChild(this.container);
            this.initController();
        }

        /** 初始化控制器,需被子类继承 */
        protected initController(): void
        {
            let t = this;
            t.controllerDic[Status.IDLE] = new HeroIdleController(t);
            t.controllerDic[Status.MOVE] = new HeroMoveController(t);
            t.controllerDic[Status.SKILL] = new HeroSkillController(t);
            t.controllerDic[Status.SKILL2] = new HeroSkillController(t);
            t.controllerDic[Status.ATTACK] = new HeroAttackController(t);
            t.controllerDic[Status.ATTACK2] = new HeroAttack2Controller(t);
            t.controllerDic[Status.DEAD] = new HeroDeadController(t);
            t.controllerDic[Status.FLY] = new HeroFlyController(t);
            t.currentController = t.controllerDic[Status.IDLE];
        }

        public get anchorOffsetX()
        {
            return this.container.anchorOffsetX;
        }

        public get anchorOffsetY()
        {
            return this.container.anchorOffsetY;
        }

        public getContainer():egret.DisplayObjectContainer
        {
            return this.actorContainer;
        }

        /**  添加卡牌和人物之间  */
        public addToCardAndActor(disPlay: egret.DisplayObject): void
        {
            let index = this.container.getChildIndex(this.baseActor);
            this.addChildAt(disPlay, index);
        }

        /**  添加显示对象  */
        public addChild(disPlay: egret.DisplayObject): void
        {
            this.container.addChild(disPlay);
        }
        /** 添加显示对象到指定层级 */
        public addChildAt(disPlay: egret.DisplayObject, index: number): void
        {
            this.container.addChildAt(disPlay, index);
        }

        /** 使用技能 */
        public useSkill(skillId: number, effectId: number, targetList: any[]): void
        {
            this.stop();
            let currentProxy: BaseSkillProxy = SkillFactory.getSkillProxy(this, skillId, effectId, targetList);
            if (currentProxy) currentProxy.releaseSkill();
            this.changeStatus(Status.SKILL, true);
        }

        /** 保持技能施法前后状态，施法结束后，更新效果, 子类重写 */
        public catcheState(startState: any, endState: any)
        {
        }

        /** 播放跑步 */
        public onPlayMove()
        {
            this.pause();
            this.container.x = this.container.y = 0;
            let timeScale = 1;
            TweenEffectUtil.walk(this.container, true, 15, 40 + 60 / timeScale);
        }

        /** 停止跑步 */
        public onMoveStop()
        {
            this.stop();
            this.updatePos();
            this.resume();
            TweenEffectUtil.stopWalk(this.container, 40);
        }

        /** 子类重写 */
        public updatePos() { }

        /** 播放死亡 */
        public onPlayDead()
        {
            egret.Tween.get(this).to({ alpha: 0.1, x: this.x - 15 }, 100).call(this.onRemove, this);
            EffectPlayer.playEffect(EffectConst.ACTOR_DIE_EFFECT, this, -1, this.timeScale, true);
        }

        private onRemove()
        {
            LogUtil.logF("角色死亡。。移除");
            SceneManager.instance.removeBaseObject(this);
        }

        /** 播放待机 */
        public onPlayIdle()
        {
            this.container.rotation = 0;
            if (this.baseActor)
            {
                this.baseActor.gotoAndPlay(Status.IDLE, -1);
            }
            this.resume();
        }

        /** 播放施法效果 */
        public onPlayCast()
        {
            //如果有施法动作，就要施法之后，在移动目标，否则物体会抖动
            // this.pause();
        }

        /** 播放原地攻击效果 */
        public onPlayAtk()
        {
            // this.pause();
            this.container.x = this.container.y = 0;
            let timeScale = 1;
            TweenEffectUtil.attack(this.container, 40, 50 + 100 / timeScale);
        }

        /** 播放目标位置攻击效果 */
        public onPlayAtk2()
        {
            // this.pause();
            this.container.x = this.container.y = 0;
            let timeScale = 1;
            TweenEffectUtil.attack2(this.container, 50 + 150 / timeScale);
        }

        /** 播放受击效果 */
        public onPlayHit()
        {
            // this.pause();
            this.container.x = this.container.y = 0;
            TweenEffectUtil.playHit(this.container, 70, 20);
        }

        /** 更新品质特效播放速度 */
        public updateEffectTimeScale()
        {
        }

        /** 当停止运动的时候调用 */
        protected onStop(): void
        {
            this.isMoving = false;
            this.resume();
            this.changeStatus(Status.IDLE, true);
        }

        /** 当开始走的时候调用 */
        protected onGo(): void
        {
            this.isMoving = true;
            this.pause();
        }

        /**  暂停  */
        public pause(): void
        {
            if (this.baseActor)
            {
                this.baseActor.setIsStopped(true);
            }
            this.setBuffIsStopped(true);
            // this.setCardEffectIsStopped(true);
        }

        /** 恢复  */
        public resume(): void
        {
            if (this.baseActor)
            {
                this.baseActor.setIsStopped(false);
            }
            this.setBuffIsStopped(false);
            // this.setCardEffectIsStopped(false);
        }

        /** 设置释放buff是否停止播放 */
        protected setBuffIsStopped(flag: boolean)
        {
        }

        /** 延迟返回原来位置 */
        public delayBackPos(time: number)
        {
            FightTimer.instance.unRegisterTick(this.onBackPos, this);
            FightTimer.instance.registerTick(this.onBackPos, this, time, 1);
        }

        /** 突袭之后回到自己的位置，子类重写 */
        protected onBackPos()
        {
            this.container.rotation = 0;
            LogUtil.logF('延迟返回原来位置');
            this.resume();
        }

        /** 一个技能释放完毕后执行 */
        public onSkilReleaselOver(): void
        {
            this.changeStatus(Status.IDLE, true);
        }

        /**  设置Actor的缩放 */
        public setActorScale(scale: number): void
        {
            if (this.baseActor)
            {
                this.baseActor.scaleX = this.baseActor.scaleY = scale;
            }
        }

        /**  切换状态 */
        public changeStatus(status: string, force: boolean = false): void
        {
            this.baseActor.gotoAndPlay(status, this.dir);
        }

		/**
		 * @description 添加部件
		 * @param part部件位置，参考ActorPart
		 * @param partId 部件的Id
		 * @param partIndex 部件层级位置,数字越大层级越高
		 */
        public addPartAt(part: number, partId: number, partIndex: number = -1, dir: number = -1): void
        {
            if (this.baseActor)
            {
                this.baseActor.addPartAt(part, partId, partIndex, dir);
            }
        }

        /** 缩放角色 */
        public addScaleYoyo()
        {
            if (this.baseActor)
            {
                TweenEffectUtil.breathe(this.baseActor, 0, 5000, null, true);
            }
        }

        public removeScaleYoyo()
        {
            egret.Tween.removeTweens(this.baseActor);
        }

        /**
		 * @description 移除部件
		 * @param part部件位置，参考ActorPart
		 */
        public removePart(part: number): void
        {
            if (this.baseActor)
            {
                this.baseActor.removePart(part);
            }
        }

        public getPartTexture(part: number = qmr.ActorPart.BODY): qmr.AnimateClip
        {
            return this.baseActor.getPart(part);
        }

        public setPartVisible(part: number, show: boolean): void
        {
            return this.baseActor.setPartVisible(part, show);
        }

        public set timeScale(value: number)
        {
            if (this.baseActor)
            {
                this.baseActor.timeScale = value;
            }
        }
        public get timeScale(): number
        {
            if (this.baseActor)
            {
                return this.baseActor.timeScale;
            }
            return 1;
        }

        /**
         * 场景大小改变了，判断是否能够立刻改变位置，移动过程中不能改变立刻位置
         */
        public get isCanResetPos(): boolean
        {
            //闪现攻击，跑步，飞行
            if (this.lastStatus == Status.ATTACK2 || this.lastStatus == Status.MOVE || this.lastStatus == Status.FLY)
            {
                return false;
            }
            return true;
        }
        /**
         *  当物体死亡,需要被子类重写
         *  params死亡带的参数
         */
        public onDead(params: any = null): void
        {
            this.stop();
            this.curHp = 0;
            this.removeBuff()
            this.changeStatus(Status.DEAD);
        }

        protected removeBuff()
        {
        }

        protected clearActor(): void
        {
            if (this.baseActor)
            {
                this.baseActor.dispos(false);
            }
        }

        /** 资源释放 */
        public dispos(): void
        {
            let t = this;
            t.curHp = 0;
            t.timeScale = 1;

            egret.Tween.removeTweens(t.baseActor);
            egret.Tween.removeTweens(t.container);
            FightTimer.instance.unRegisterTick(t.onBackPos, t);
            t.container.rotation = 0;
            t.container.x = t.container.y = 0;
            t.setActorScale(1);
            t.container.scaleX = t.container.scaleY = 1;

            if (t.currentController != null)
            {
                t.currentController.cancelExcute();
            }
            t.clearActor();
            super.dispos();
        }
    }
}
