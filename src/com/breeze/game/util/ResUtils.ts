/**
 * 封装资源加载的工具方法类,这里提供和RES.XXX类似的接口,但是这里的接口增加了不断重新请求的处理
 * 即时玩家经过比较长时间的断网也不会导致游戏逻辑中断
 * 同时捕获在加载过程中出现的异常,异常捕获之后重新发起资源请求
 */

interface IResPriority {
    url: string;
    priority: number;
    compFunc: Function;
    thisObject: any;
    type: string;
    errorFun: Function;
}

const enum EPriority {
    Defalut = 0,
    Fight = 1,
}

class ResUtils {
    // private static _resErrorHash: { [url: string]: string } = {};
    // private static _resLoadErrorCount: { [url: string]: number } = {};
    private static _currentLoadingCount: number = 0;
    private static _maxLoadingCount: number = 5;
    // private static _priorityHash: { [url: string]: IResPriority } = {};
    private static _resList: IResPriority[] = [];
    public static getResByUrl(url: string, compFunc?: Function, thisObject?: any, type?: string, errorFun?: Function, priority: number = 0): void {
        // var resLoadErrorCount = this._resLoadErrorCount;

        let me = ResUtils;
        if (me._currentLoadingCount >= me._maxLoadingCount) {
            me._resList.push({ url: url, priority: priority, compFunc: compFunc, thisObject: thisObject, type: type, errorFun: errorFun });
            me._resList.sort((a, b) => {
                return b.priority - a.priority;
            })
            return;
        }
        else {
            me._currentLoadingCount++;
            RES.getResByUrl(url, (data: any) => {
                // delete resLoadErrorCount[url];
                me._currentLoadingCount--;
                if (compFunc) {
                    compFunc.call(thisObject, data, url);
                }
                // console.log("loading complete " + url)
                me.loadNextUrl();
            }, this, type).catch((e) => {
                // if (this._resErrorHash[url] == null) {
                //     this._resErrorHash[url] = url;
                if (errorFun) {
                    errorFun.call(thisObject, url);
                }
                me._currentLoadingCount--;
                me.loadNextUrl();
                egret.error("资源加载出错：" + url, this, 7);
                // gameError("资源加载出错：" + url, this, 7);
                // }
                // if (RELEASE) {
                //     if (resLoadErrorCount[url] == null) {
                //         resLoadErrorCount[url] = 1;
                //     } else {
                //         resLoadErrorCount[url]++;
                //     }
                //     if (resLoadErrorCount[url] < 5) {
                //         $loop.setTimeOut(() => {
                //             this.getResByUrl(url, compFunc, thisObject, type);
                //         }, this,1000);
                //     }
                // }
            });
        }
    }

    public static loadNextUrl() {
        let me = ResUtils;
        if (me._resList.length > 0) {
            let res = me._resList.shift();
            me.getResByUrl(res.url, res.compFunc, res.thisObject, res.type, res.errorFun, res.priority);
        }
    }

    private static _resGroupErrorHash: { [url: string]: string } = {};
    public static loadGroup(groupName: string, callback?: Function, thisObj?: Object, priority?: number, reporter?: RES.PromiseTaskReporter) {
        RES.loadGroup(groupName, priority, reporter).then(() => {
            if (callback) {
                callback.call(thisObj);
            }
        }).catch((e) => {
            if (this._resGroupErrorHash[groupName] == null) {
                this._resGroupErrorHash[groupName] = groupName;
                egret.error("资源组加载出错!" + groupName, this, 7);
                // gameError("资源组加载出错!" + groupName, this, 7);
            }
            // $loop.setTimeOut(() => {
            setTimeout(() => {
                this.loadGroup(groupName, callback, thisObj, priority, reporter);
            }, this, 1000);
        });
    }

    private static _resConfigErrorHash: { [url: string]: string } = {};
    public static loadConfig(url: string, resourceRoot: string, callback?: Function, thisObj?: Object) {
        RES.loadConfig(url, resourceRoot).then(() => {
            if (callback) {
                callback.call(thisObj);
            }
        }).catch((e) => {
            if (this._resConfigErrorHash[url] == null) {
                this._resConfigErrorHash[url] = url;
                // gameError("资源组加载出错!" + url + "," + resourceRoot, this, 7);
                egret.error("资源组加载出错!" + url + "," + resourceRoot, this, 7);
            }
            // $loop.setTimeOut(() => {
            setTimeout(() => {
                this.loadConfig(url, resourceRoot, callback, thisObj);
            }, this, 1000);
        });
    }
}
