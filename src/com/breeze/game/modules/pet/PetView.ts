module qmr
{
	export class PetView extends BaseModule
	{
		public all_group:eui.Group;
public btnClose:eui.Image;
public itemGroup:eui.Group;
public item_list:eui.List;
public img_head:eui.Image;
public img_head2:eui.Image;
public img_head3:eui.Image;
public btn_revoke:eui.Group;
public btn_merge:eui.Label;
// public btnReturn:eui.Image;
public effect_group_pet:eui.Group;
// public effect_group_merge:eui.Group;


		private _arrCollection: eui.ArrayCollection;
		private baseEffect: BaseEffect;
		private baseEffect2: BaseEffect;
		
		public constructor()
		{
			super();
			this.qmrSkinName = "PetViewSkin";
			this.isNeedMask = true;
		}

		protected initComponent():void
		{
			let t = this;
			super.initComponent();

            t.item_list.itemRenderer = PetItemRender;
            t._arrCollection = new eui.ArrayCollection();
            t.item_list.dataProvider = t._arrCollection;
		}

		protected initData(): void {
			super.initData();
			let t = this;
			t.updateView();
			t.clearMerge();

			// if(!t.baseEffect2){
            //     t.baseEffect2 = new BaseEffect();
            //     t.baseEffect2.scaleX = t.baseEffect2.scaleY = 1.5;
			// }
			// t.effect_group_merge.addChild(t.baseEffect2);
			// t.baseEffect2.touchChildren = t.baseEffect2.touchEnabled = false;
			// t.baseEffect2.playUIEffect("uieffect_hang_yuanbao3", -1, -1, 1);
		}
		
		protected initListener(): void
		{
			super.initListener();
            let t = this;
			t.addClickEvent(t.btnClose, t.closeView, t);
			// t.addClickEvent(t.btnReturn, t.closeView, t);
			t.addClickEvent(t.btn_merge, t.onMergeClick, t);
			
            t.registerNotify(NotifyConst.S_GET_MONEY_REWARD, t.updateView, t);
			t.registerNotify(NotifyConst.S_GET_MONEY_INFO, t.updateView, t);
            t.registerNotify(NotifyConst.S_SYN_PROPERTY, t.updateView, t);
			t.registerNotify(NotifyConst.S_GET_FINSH_INFO, t.updateView, t);
			t.registerNotify(NotifyConst.S_COMBINE_FINSH, t.onMerger, t);
			
			t.registerNotify(NotifyConst.ON_PET_SELECTED, t.onPetSelected, t);
		}

		private onMerger():void
		{
			let t = this;
			t.clearMerge();
			t.updateMergeView();
			t.updateView();

			if(!t.baseEffect){
                t.baseEffect = new BaseEffect();
                t.baseEffect.scaleX = t.baseEffect.scaleY = 1.5;
			}
			t.effect_group_pet.addChild(t.baseEffect);
			t.baseEffect.touchChildren = t.baseEffect.touchEnabled = false;
			t.baseEffect.playUIEffect("uieffect_enter_zr", -1, 1, 1);
		}

		private clearMerge():void
		{
			let t = this;
			HeroModel.instance.selectedMergePetId1 = 0;
			HeroModel.instance.selectedMergePetId2 = 0;
		}

		private onMergeClick():void
		{
			let t = this;
			let id1:number = HeroModel.instance.selectedMergePetId1;
			let id2:number = HeroModel.instance.selectedMergePetId2;
			let pro1:com.message.FishMsg = HeroModel.instance.getPet(id1);
			let pro2:com.message.FishMsg = HeroModel.instance.getPet(id2);
			if(!pro1 || !pro2){
				TipManagerCommon.getInstance().createCommonTip("请选择需要合成的宠物");
				return;
			}
			
			if(pro1.fishId != pro2.fishId){
				TipManagerCommon.getInstance().createCommonTip("请选择两条相同的宠物进行合成");
				return;
			}
			if(pro1.fishId == 15){
				TipManagerCommon.getInstance().createCommonTip("当前宠物已经是最高等级");
				return;
			}
			PetController.instance.getCombineFish(id1, id2);
		}

		private onPetSelected(params):void
		{
			let t = this;
			if(!params){
				return;
			}
			let id:number = params.id;
			let selected:boolean = params.selected;
			
			let currItem:PetItemRender;
			let selectedItem1:PetItemRender;
			let selectedItem2:PetItemRender;
			let md:HeroModel = HeroModel.instance;
			let id1:number = md.selectedMergePetId1;
			let id2:number = md.selectedMergePetId2;
			let len:number = t.item_list.numElements;
			for(var i:number = 0; i < len; i ++){
				let item:PetItemRender = t.item_list.getVirtualElementAt(i) as PetItemRender;
				if(item && item.data && item.data.id == id){
					currItem = item;
				}
				if(item && item.data && item.data.id == id1){
					selectedItem1 = item;
				}
				if(item && item.data && item.data.id == id2){
					selectedItem2 = item;
				}
			}
			if(id && selected){
				if(id1 && id2){
					if(selectedItem1){
						selectedItem1.setSelectedState(false);
					}
					
					md.selectedMergePetId1 = md.selectedMergePetId2;
					md.selectedMergePetId2 = id;
				} else if(id1 && !id2){
					md.selectedMergePetId2 = id;
				} else {
					md.selectedMergePetId1 = id;
				}
			} if(id && !selected){
				if(id == md.selectedMergePetId1){
					md.selectedMergePetId1 = 0;
				} else if(id == md.selectedMergePetId2){
					md.selectedMergePetId2 = 0;
				}
			}

			t.updateMergeView();
		}

		private updateMergeView():void
		{
			let t = this;
			let info1:PetActorInfo;
			let info2:PetActorInfo;
			var itemRes:string;
			let cfg1:PetCfg;
			let cfg2:PetCfg;
			let md:HeroModel = HeroModel.instance;
			let id1:number = md.selectedMergePetId1;
			let id2:number = md.selectedMergePetId2;

			if(id1){
				info1 = md.getPet(id1);
				cfg1 = ConfigManager.getConf(ConfigEnum.PET, info1.fishId);
			}
			if(id2){
				info2 = md.getPet(id2);
				cfg2 = ConfigManager.getConf(ConfigEnum.PET, info2.fishId);
			}

			if(info1){
				itemRes = ResPathUtilAft.getHeadUrl(cfg1.id+"");
                t.img_head.source = itemRes;
			} else {
				t.img_head.source = null;
			}

			if(info2){
				itemRes = ResPathUtilAft.getHeadUrl(cfg2.id+"");
                t.img_head2.source = itemRes;
			} else {
				t.img_head2.source = null;
			}

			if(cfg1 && cfg2 && cfg1.id == cfg2.id && cfg1.id != 15){
				let nextId:number = cfg1.id + 1;
				let nextCfg:PetCfg = ConfigManager.getConf(ConfigEnum.PET, nextId);
				if(nextCfg){
					itemRes = ResPathUtilAft.getHeadUrl(nextCfg.id+"");
					t.img_head3.source = itemRes;
				}
			} else {
				t.img_head3.source = null;
			}
		}

		private updateView():void
		{
            let t = this;
			let pets:PetActorInfo[] = HeroModel.instance.getPets();
			pets.sort((a, b)=>{
				return b.level - a.level;
			})
			
            t._arrCollection.replaceAll(pets);
		}

		public dispose(): void
		{
			super.dispose();
		}
	}
}