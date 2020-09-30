// TypeScript file

class DataCenter extends egret.EventDispatcher {
    public static superpositionOption: any[] = [];
    public pathJsonData: any = undefined;
    private static m_Instance: DataCenter;
    public static get Instance() {
        if (this.m_Instance == null)
            this.m_Instance = new DataCenter();
        return this.m_Instance;
    }

    constructor() {
        super();
        this.mPaths = new Array<{ id, path: Array<{ x, y }> }>();
        this.LoadData();
    }

    public static clearInstance() {
        this.m_Instance.destroy();
        this.m_Instance = null;
    }

    private mPaths: Array<{ id, path: Array<{ x, y }> }>;
    //保存远程路径
    public static SAVE_REMOTE_DATA_URL: string = "http://172.33.0.2:8090/saveresult.php";
    // http://123.207.4.125/fish/saveresult.php
    //保存成json格式的远程路径
    public static SAVE_JSON_DATA_URL: string = "http://172.33.0.2:8090/savejsonresult.php";
    // http://172.33.0.2:8089/platformCfg/baseConfig.json
    // http://172.33.0.2:8090/savejsonresult.php
    // http://123.207.4.125/fish/savejsonresult.php
    //读取远程路径
    public static LOAD_REMOTE_DATA_URL: string = "http://123.207.4.125/fish/loadresult.php";
    //下载配置
    public static DOWNLOAD_CONFIG_URL: string = "http://123.207.4.125/fish/pathresult.csv";

    public LoadData() {
        this.loadDataFromUrl();
    }

    protected calcAngleAndDistance(p1: { x, y }, p2: { x, y }): { angle, dist } {
        let p2p1x = p2.x - p1.x;
        let p2p1y = p2.y - p1.y;
        let angle = 0;
        if (p2p1x < 0.001 && p2p1x > -0.001) {
            if (p2p1y < 0) {
                angle = 90;
            } else {
                angle = 270;
            }
        } else {
            angle = Math.atan(p2p1y / p2p1x) * 180;
        }
        let dist = Math.sqrt(p2p1x * p2p1x + p2p1y * p2p1y);
        return { angle: angle, dist: dist };
    }

    public getPathIds() {
        let ids: Array<any> = [];
        for (let i: number = 0; i < this.mPaths.length; i++) {
            ids.push(this.mPaths[i].id);
        }
        return ids;
    }

    public get randomPathId(): string {
        let pathids = this.getPathIds();
        let randompath = Math.floor(Math.random() * (pathids.length - 1));
        return pathids[randompath];
    }

    //根据索引获取数据;
    public getDataByPathIndex(index: number): { id, path: Array<{ x, y }> } {
        return this.mPaths[index];
    }

    //根据ID获取数据;
    public getDataByPathId(id: string): { id, path: Array<{ x, y }> } {
        let fpath = undefined;
        this.mPaths.some((value) => {
            if (value.id = id) {
                fpath = value;
                return true;
            }
            return false;
        });
        return fpath;
    }

    //添加一个数据;
    public addData(id, path: Array<{ x, y }>): boolean {
        for (let pathNode of this.mPaths) {
            if (pathNode.id == id) {
                return false;
            }
        }
        this.mPaths.push({ id: id, path: path });
        return true;
    }

    //修改数据;
    public setData(index: number, id, path: Array<{ x, y }>): boolean {
        //检查是否由相同的id
        for (let i: number = 0; i < this.mPaths.length; i++) {
            if (i != index && this.mPaths[i].id == id) {
                return false;
            }
        }

        this.mPaths[index] = { id: id, path: path };
        return true;
    }

    public removeData(index: number) {
        this.mPaths.splice(index, 1);
    }

    protected loadDataFromUrl() {
        this._url = "resource/table/TableFishPath.json"//$res.getFishPath();
        if (!RES.hasRes(this._url)) {
            if (this._url != null && RES.hasRes(this._url)) RES.destroyRes(this._url);
            RES.getResByUrl(this._url, this.loadedComplete, this, RES.ResourceItem.TYPE_JSON);
            // let data: any[] = RES.getRes("TableFishPath_json");
            // this.loadedComplete(data, this._url);
        } else {
            let data = RES.getRes(this._url);
            this.loadedComplete(data, this._url);
        }
    }

    _url: string;
    private loadedComplete(data, url: string) {
        this.pathJsonData = data;
        //最好在这里加一个时间抛出去，等路径JSON加载完了以后，再去给鱼安装行为管理器
        if (data && this._url == url) {
            egret.log("onLoadUrlComplete!");
            let mPaths: { [id: string]: any[] } = {};
            let len = data.length;
            for (var i = 0; i < len; i++) {
                var node = data[i];
                var id = node.id;
                let path = mPaths[id] || [];
                path.push(node);
                mPaths[id] = path;
            }

            for (var key in mPaths) {
                if (mPaths.hasOwnProperty(key)) {
                    var path = mPaths[key];
                    DataCenter.Instance.addData(key, path);
                }
            }
        }
        else {
            RES.destroyRes(url);
        }
    }



    protected destroy() {

    }
}