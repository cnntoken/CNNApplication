import {getCookie, setCookie, getQueryString,getInitialLang} from './index.js';
var NDB = function(selector) {
    if (this instanceof NDB) {
        this.init(selector);
    } else {
        return new NDB(selector);
    }
};
NDB.PROTOCOL = 'NDB';
NDB.NO_CALLBACK = 'NO_CALLBACK';
NDB.ALIAS = 'nd_bridge';
NDB.VERSION = '0.0.1';
NDB.DEBUG = false;
NDB.callbacks = {};
NDB.functionQueue = [];
NDB.READY = false;
NDB.LANG = getInitialLang();
NDB.isFirst = false;
NDB.LIVE = ((getQueryString("live") == "false") ? false : true);

NDB.getVcode = function() {
    console.log(getQueryString("vcode"), getCookie("ND_P_vcode"));
    var vcode = getQueryString("vcode") || getCookie("ND_P_vcode") || 1;
    NDB.VCODE = parseInt(vcode);
    if(vcode > 1){
        setCookie("ND_P_vcode", vcode);
    }
}
NDB.getVcode();
console.log("LANG:",NDB.LANG);
console.log("VCODE:",NDB.VCODE);
// NDB.i18n();
NDB.isFirstLogin = function() {
    if (!getQueryString("first") || getQueryString("first") != "true") {
        NDB.isFirst = false;
        return false;
    }
    if (getCookie("firstLogin")) {
        NDB.isFirst = false;
        return false;
    }
    NDB.isFirst = true;
    setCookie("firstLogin", 'true');
}
NDB.isFirstLogin();
/*init*/
NDB.prototype.init = function(selector) {
    if (typeof(selector) == 'function') {
        if (NDB.READY) {
            return selector();
        } else {
            console.info("NDB is not ready, please wait.");
            NDB.functionQueue.push(selector);
        }
    } else if (typeof(selector) == "string") {
        if (!selector.match('<')){
            var nodes = document.querySelectorAll(selector);
            for (var i = 0; i < nodes.length; i++) {
                this[i] = nodes[i];
            }
            this.length = i;
            this.selector = selector;
        }
    } else if (typeof(selector) == "object") {
        if (selector.constructor.name == "HTMLDivElement") {
            this[0] = selector;
            this.length = 1;
            this.selector = selector;
        } else if (selector.constructor.name == "NDB") {
            NDB.extend(true, this, selector);
        }
    }
};
/*JS Bridge BASE*/
NDB.run = function(method, params, callback) {
    if (!NDB.READY) {
        console.error("NewsDog Javascript Bridge is not ready now!");
        return false;
    }
    var port = NDB_GetPort();
    NDB.callbacks[port] = callback || NDB.NO_CALLBACK;
    if (NDB_GetUri(NDB.ALIAS, method, params, port)) {
        console.log('%c >> ' + port, 'color:blue', NDB_GetUri(NDB.ALIAS, method, params, port));
        try {
            if (window.ga) {
                window.ga('promotion.send', {
                    hitType: 'event',
                    eventCategory: method,
                    eventLabel: JSON.stringify(params),
                });
            }
        } catch (e) {
            console.log(e);
        }
        return window.prompt(NDB_GetUri(NDB.ALIAS, method, params, port), "");
    }
};
NDB.onFinish = function(port, res) {
    console.log('%c << ' + port, 'color:green', res);
    var callback = NDB.callbacks[port];
    if (callback != NDB.NO_CALLBACK) {
        callback && callback(res);
    }
    delete NDB.callbacks[port];
    return;
};
NDB.onPause = function() {
    return;
};
NDB.onResume = function(port, res) {
    console.log(res);
    return;
};
NDB.onReload = function(port, res) {
    console.log(res);
    return;
};
NDB.onReady = function(alias) {
    NDB.READY = true;
    NDB.ALIAS = alias;
    console.info("NewsDog Javascript Bridge is Ready now.");
    while (NDB.functionQueue.length > 0) {
        var fn = NDB.functionQueue.shift();
        fn();
    }
}
var NDB_GetPort = function() {
    for (;;) {
        var port = parseInt(Math.random() * 65536);
        if (!NDB.callbacks[port]) {
            return port;
        }
    }
};
var NDB_GetUri = function(alias, method, params, port) {
    if (NDB_GetParams(params)) {
        var uri = NDB.PROTOCOL + '://' + alias + ':' + port + '/' + method + '?' + NDB_GetParams(params);
        return uri;
    }
};
var NDB_GetParams = function(obj) {
    if (obj && typeof obj === 'object') {
        return JSON.stringify(obj);
    } else {
        console.error("NDB ERROR: params must be a Object");
        return false;
    }
};
/*BASE*/
NDB.isFunction = function(obj) {
    return NDB.type(obj) === "function"
};
NDB.isArray = Array.isArray || function(obj) {
    return NDB.type(obj) === "array"
};
NDB.isWindow = function(obj) {
    return obj != null && obj == obj.window
};
NDB.isNumeric = function(obj) {
    return !isNaN(parseFloat(obj)) && isFinite(obj)
};
NDB.type = function(obj) {
    var toString = Object.prototype.toString;
    var class2type = {
        "[object Boolean]": "boolean",
        "[object Number]": "number",
        "[object String]": "string",
        "[object Function]": "function",
        "[object Array]": "array",
        "[object Date]": "date",
        "[object RegExp]": "regexp",
        "[object Object]": "object"
    };
    return obj == null ? String(obj) : class2type[toString.call(obj)] || "object"
};
NDB.isPlainObject = function(obj) {
    var hasOwn = Object.prototype.hasOwnProperty;
    if (!obj || NDB.type(obj) !== "object" || obj.nodeType) {
        return false
    }
    try {
        if (obj.constructor && !hasOwn.call(obj, "constructor") && !hasOwn.call(obj.constructor.prototype, "isPrototypeOf")) {
            return false
        }
    } catch (e) {
        return false
    }
    var key;
    // for (key in obj) {}
    return key === undefined || hasOwn.call(obj, key)
}
NDB.urlEncode = function(param, key, encode) {
    if (param == null) return '';
    var paramStr = '';
    var t = typeof(param);
    if (t == 'string' || t == 'number' || t == 'boolean') {
        paramStr += '&' + key + '=' + ((encode == null || encode) ? encodeURIComponent(param) : param);
    } else {
        for (var i in param) {
            var k = key == null ? i : key + (param instanceof Array ? '[' + i + ']' : '.' + i);
            paramStr += NDB.urlEncode(param[i], k, encode);
        }
    }
    return paramStr;
};
NDB.extend = function() {
    var options, name, src, copy, copyIsArray, clone,
        target = arguments[0] || {},
        i = 1,
        length = arguments.length,
        deep = false;
    if (typeof target === "boolean") {
        deep = target;
        target = arguments[i] || {};
        i++;
    }
    if (typeof target !== "object" && !NDB.isFunction(target)) {
        target = {};
    }
    if (i === length) {
        target = this;
        i--;
    }
    for (; i < length; i++) {
        if ((options = arguments[i]) != null) {
            for (name in options) {
                src = target[name];
                copy = options[name];
                if (target === copy) {
                    continue;
                }
                if (deep && copy && (NDB.isPlainObject(copy) || (copyIsArray = NDB.isArray(copy)))) {
                    if (copyIsArray) {
                        copyIsArray = false;
                        clone = src && NDB.isArray(src) ? src : [];
                    } else {
                        clone = src && NDB.isPlainObject(src) ? src : {};
                    }
                    target[name] = NDB.extend(deep, clone, copy);
                } else if (copy !== undefined) {
                    target[name] = copy;
                }
            }
        }
    }
    return target;
};
NDB.prototype.each = function(callback) {
    for (var i = 0; i < this.length; i++) {
        callback.call(NDB(this[i]), i, NDB(this[i]));
    }
};
/*DOM*/
// NDB.extend(NDB.prototype, {
//     addClass: function(value) {
//         for (var i = 0; i < this.length; i++) {
//             var reg = new RegExp('(\\s|^)' + value + '(\\s|$)');
//             this[i].className = (this[i].className.replace(reg, ' ') + " " + value).replace(/(^\s+|\s+$)/g, '').replace(/\s+/g, ' ');
//         }
//         return this;
//     },
//     removeClass: function(value) {
//         for (var i = 0; i < this.length; i++) {
//             var reg = new RegExp('(\\s|^)' + value + '(\\s|$)');
//             this[i].className = this[i].className.replace(reg, ' ').replace(/(^\s+|\s+$)/g, '').replace(/\s+/g, ' ');
//         }
//         return this;
//     },
//     toggleClass: function(value) {
//         if (this.hasClass(value)) {
//             this.removeClass(value);
//         } else {
//             this.addClass(value);
//         }
//         return this;
//     },
//     hasClass: function(value) {
//         for (var i = 0; i < this.length; i++) {
//             var reg = new RegExp('(\\s|^)' + value + '(\\s|$)');
//             if (this[i].className.match(reg)) {
//                 return true;
//             }
//         }
//         return false;
//     }
// });
/*Event*/
NDB.extend(NDB.prototype, {
    on: function(types, selector, data, fn, one) {
        // var origFn, type;
        var type;
        if (typeof types === "object") {
            if (typeof selector !== "string") {
                data = data || selector;
                selector = undefined;
            }
            for (type in types) {
                this.on(type, selector, data, types[type], one);
            }
            return this;
        }
        if (data == null && fn == null) {
            fn = selector;
            data = selector = undefined;
        } else if (fn == null) {
            if (typeof selector === "string") {
                fn = data;
                data = undefined;
            } else {
                fn = data;
                data = selector;
                selector = undefined;
            }
        }
        if (fn === false) {
            fn = function() {};
        } else if (!fn) {
            return this;
        }
        /*if (one === 1) {
            origFn = fn;
            fn = function(event) {
                jQuery().off(event);
                return origFn.apply(this, arguments);
            };
            fn.guid = origFn.guid || (origFn.guid = jQuery.guid++);
        }*/
        for (var i = 0; i < this.length; i++) {
            this[i].addEventListener(types, fn, false);
        }
        return this;
    }
});
/*AJAX*/
NDB.extend(NDB, {
    get: function(url, params, callback) {
        if (typeof(params) == 'function') {
            callback = params;
            params = {};
        }
        var cb = function(e) {
            if (!e.err_code) {
                callback && callback(e);
            } else {
                if (e.msg) {
                    NDB.toast({
                        msg: e.msg
                    });
                }
            }
        }
        return this.run("get", {
            url: url,
            params: params
        }, cb);
    },
    post: function(url, params, callback1, callback2) {
        let callbackSuccess,callbackError;
        if (typeof(params) == 'function') {
            callbackSuccess = params;
            callbackError = callback1;
            params = {};
        }else {
            callbackSuccess = callback1;
            callbackError = callback2;
        }
        var cb = function(e) {
            if (!e.err_code) {
                callbackSuccess && callbackSuccess(e);
            } else {
                if(callbackError){
                    callbackError();
                }else if (e.msg) {
                    NDB.toast({
                        msg: e.msg
                    });
                }
            }
        }
        return this.run("post", {
            url: url,
            params: params
        }, cb);
    },
    put: function(url, params, callback) {
        if (typeof(params) == 'function') {
            callback = params;
            params = {};
        }
        var cb = function(e) {
            if (!e.err_code) {
                callback && callback(e);
            } else {
                if (e.msg) {
                    NDB.toast({
                        msg: e.msg
                    });
                }
            }
        }
        return this.run("put", {
            url: url,
            params: params
        }, cb);
    },
    del: function(url, params, callback) {
        if (typeof(params) == 'function') {
            callback = params;
            params = {};
        }
        var cb = function(e) {
            if (!e.err_code) {
                callback && callback(e);
            } else {
                if (e.msg) {
                    NDB.toast({
                        msg: e.msg
                    });
                }
            }
        }
        return this.run("delete", {
            url: url,
            params: params
        }, cb);
    }
});
/*UI*/
NDB.extend(NDB, {
    transferApp: function (opt, callback) {
        opt = NDB.extend(true, {} , opt || {});
        return NDB.run("shareApp", opt, callback);
    },
    getAppInstallInfo:function (opt, callback) {
        return NDB.run("isAppInstalled", opt, callback);
    },
    toast: function(opt, callback) {
        var defOpt = {
            msg: "弹出Toast",
            long: true
        };
        opt = NDB.extend(true, {}, defOpt, opt || {});
        return NDB.run("toast", opt, callback);
    },
    coinToast: function(opt, callback) {
        var defOpt = {
            msg: "签到成功",
            coin: 10
        };
        opt = NDB.extend(true, {}, defOpt, opt || {});
        return NDB.run("coinToast", opt, callback);
    },
    onCheckIn: function(opt, callback) {
        var defOpt = {
            coin: 10
        };
        opt = NDB.extend(true, {}, defOpt, opt || {});
        return NDB.run("onJsCheckIn", opt, callback);
    },
    onShare: function(opt, callback) {
        var defOpt = {
            coin: 10
        };
        opt = NDB.extend(true, {}, defOpt, opt || {});
        return NDB.run("onJsShare", opt, callback);
    },
    share: function(opt, callback) {
        var defOpt = {
            platform: "fb",
            text: "",
            url: "",
            image: ""
        },cb;
        opt = NDB.extend(true, {}, defOpt, opt || {});
        if (NDB.VCODE == 120 || NDB.VCODE == 121 || NDB.VCODE == 122) {
            setTimeout(function() {
                callback({
                    status: "ok"
                });
            }, 1000);
        }
        if(opt.platform != 'fb'){
            cb = function (data) {
                setTimeout(function () {
                    callback(data);
                },5000)
            }
        }else {
            cb = callback;
        }
        return NDB.run("share", opt, function (data) {
            if(data && (data.code == 0 || data.code == 200)){
                cb(data)
            }
        });
    },
    login: function() {
        return NDB.run("login", {}, function() {});
    },
    isLogined: function(callback) {
        if (NDB.VCODE >= 120) {
            var cb = function(d) {
                if (!d.user_type) {
                    d.user_type = "fb";
                }
                callback && callback(d);
            }
            return NDB.run("isLogined", {}, cb);
        } else {
            console.log("Is Logined: old version.");
            callback({
                login: 1,
                user_type: "fb"
            });
        }
    },
    requirePermissions: function(){
        return false;
    },
    openADeepLink: function(url, callback) {
        return NDB.run("openADeepLink", {
            url: url
        }, callback);
    },
    openAWebview: function(url, callback) {
        return NDB.run("openAWebView", {
            url: url
        }, callback);
    },
    readNews: function(callback) {
        return NDB.run("readNews", {}, callback);
    },
    getDid: function(callback) {
        return NDB.run("getUserDid", {}, callback);
    },
    loadInterstitialAd: function(callback) {
        return NDB.run('loadInterstitialAd', {}, callback);
    },
    showInterstitialAd: function(callback) {
        return NDB.run('showInterstitialAd', {}, callback);
    },
    getLastTimerCoinsTs: function(callback) {
        if (NDB.VCODE >= 149) {
            return NDB.run('getLastTimerCoinsTs', {}, callback);
        } else {
            callback && callback({
                ts: 0
            });
        }
    },
    onTimerCoinsSuccess: function(params, callback) {
        return NDB.run('onTimerCoinsSuccess', params, callback);
    },
    onTimerCoinsClickTips: function(callback) {
        return NDB.run('onTimerCoinsClickTips', {}, callback);
    },
    isSysNotificationEnabled: function(callback) {
        return NDB.run("isNotificationEnabled", {}, callback);
    },
    goSystemSetting: function(callback) {
        return NDB.run("openNotificationSetting", {}, callback);
    }
});
if (!window.NDB) {
    window.NDB = NDB;
}
try {
    AndroidJsConnector.connect();
} catch (e) {
    console.warn("AndroidJsConnector Warning:", e);
}
if (NDB.DEBUG == true) {
    NDB.onReady("debug");
}

NDB(function() {
    NDB.getDid(function(d) {
        NDB.DID = d.did;
        NDB.package = d.package;
    });
});

export default NDB;