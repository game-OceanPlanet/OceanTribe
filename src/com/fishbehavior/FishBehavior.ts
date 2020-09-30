// TypeScript file
class FishBehavior {
    public SequentialMovement: number = 0;
    public fishMc: any = undefined;
    public pathId: string = undefined;

    constructor($fishMc: any, $pathId: string = undefined) {
        this.fishMc = $fishMc;
        this.pathId = $pathId;
    }

    public onanimationButtons() {
        if (this.fishMc && this.pathId) {
            this.fishMc.visible = true;
            this.SequentialMovement = 0;
            let SequentialMovement = 0;
            // egret.error("this.fishMc.id = " + this.fishMc.id, this.pathId);
            let pathInfo = DataCenter.Instance.getDataByPathId(this.pathId);
            if (pathInfo) {
                let data = DataCenter.Instance.pathJsonData.filter((v: table.TableFishPath) => v.id == pathInfo.id);
                this.fishMc.x = (data[0].x * this.$scalew);
                this.fishMc.y = data[0].y * this.$scaleh;
                this.onanimationButtonsData([this.fishMc, pathInfo.id, SequentialMovement]);
            }
        }
    }
    $scalew: number = 0.9;
    $scaleh: number = 0.95;
    private onanimationButtonsData(data) {
        let item = DataCenter.Instance.pathJsonData.filter((v: table.TableFishPath) => v.id == data[1]);
        if (item[data[2] + 1]) {
            let angle = this.getAngleByPoint({ x: item[data[2]].x * this.$scalew, y: item[data[2]].y * this.$scaleh }, { x: item[data[2] + 1].x * this.$scalew, y: item[data[2] + 1].y * this.$scaleh }) - 90;

            let dataS = [data[0], data[1], data[2] + 1];
            // egret.error("rotation = " + "this.fishMc.id = " + angle, this.fishMc.id);
            // data[0].rotation = angle;
            if (angle > 30 && angle < 90) angle = 45;
            if (angle > 90 && angle < 180) angle = 180;

            egret.Tween.get(data[0]).to({ x: item[data[2] + 1].x * this.$scalew, y: item[data[2] + 1].y * this.$scaleh, rotation: angle }, 500).call(this.onanimationButtonsData, this, [dataS]);
        }
        else {
            this.SequentialMovement = 0;
            this.pathId = DataCenter.Instance.randomPathId;
            this.onanimationButtons();
        }
    }

    private getAngleByPoint(p1, p2) {
        var px = p1.x;
        var py = p1.y;
        var mx = p2.x;
        var my = p2.y;
        var x = Math.abs(px - mx);
        var y = Math.abs(py - my);
        var z = Math.sqrt(Math.pow(x, 2) + Math.pow(y, 2));
        var cos = y / z;
        var radina = Math.acos(cos);
        var angle = Math.floor(180 / (Math.PI / radina));
        if (mx > px && my > py) {
            angle = 180 - angle;
        }
        if (mx == px && my > py) {
            angle = 180;
        }
        if (mx > px && my == py) {
            angle = 90;
        }
        if (mx < px && my > py) {
            angle = 180 + angle;
        }
        if (mx < px && my == py) {
            angle = 270;
        }
        if (mx < px && my < py) {
            angle = 360 - angle;
        }
        return angle;
    }
}