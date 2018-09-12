import { config } from '@src/config';
export let getQueryString = (name) => {
    var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)");
    var r = window.location.search.substr(1).match(reg);
    if (r != null) return unescape(r[2]);
    return null;
}

export let copy = (str)=>{
    let flag = false;
    try{
        var save = function(e){
            e.clipboardData.setData('text/plain', str);
            e.preventDefault();
        }
        document.addEventListener('copy', save);
        document.execCommand('copy');
        document.removeEventListener('copy',save);
        flag = true;
    }catch(e){
        console.log("copy failed!");
    }
    return flag;
}

export let getCookie = (name) => {
    var reg = new RegExp("(^| )" + name + "=([^;]*)(;|$)"),
        arr = document.cookie.match(reg);
    if (arr) {
        return unescape(arr[2]);
    } else {
        return null;
    }
}

export let delCookie = (name) => {
    var exp = new Date();
    exp.setTime(exp.getTime() - 1);
    var cval = getCookie(name);
    if (cval != null) document.cookie = name + "=" + cval + ";expires=" + exp.toGMTString();
}

export let setCookie = (name, value) => {
    var Days = 30;
    var exp = new Date();
    exp.setTime(exp.getTime() + Days * 24 * 60 * 60 * 1000);
    document.cookie = name + "=" + escape(value) + ";expires=" + exp.toGMTString();
}

export let changeTitle = (title) => {
    document.title = title;
}

export let getInitialLang = () => {
    let lang = getQueryString('lang') || getCookie('ND_P_lang') || config.defaultLang;
    if(!config.langList.includes(lang)){
        lang = config.defaultLang;
    }
    setCookie('ND_P_lang', lang);
    return lang;
}

export let setStorage = (key,value)=>{
    try {
        window.localStorage.setItem(key,value);
    }catch (e){
        setCookie(key,value);
    }
}
export let getStorage = (key)=>{
    let value = '';
    try {
        value = window.localStorage.getItem(key);
    }catch (e){
        value = getCookie(value)
    }
    return value;
}

export const ACTIONS = {
    0: 'follow',
    1: 'read',
    2: 'share',
    3: 'checkin',
    4: 'child_read',
    5: 'join',
    6: 'exchange',
    7: 'tribute',
    8: 'withdraw',
    9: 'first_follow',
    10: 'repeat_invitation',
    11: 'bonus',
    12: 'effective_share',
    13: 'invite_code',
    14: 'newbie_task',
    15: 'grandson',
    16: 'click_promotion',
    21: 'instant_withdraw_fail',
    22: 'comment_article',
    23: 'like_article',
    98: 'beforewithdraw',
    99: 'showoff'
};
export const ACTION_TYPES = {
    0: "cash",
    1: "coin",
    2: "coin",
    3: "coin",
    4: "coin",
    5: "cash",
    6: "cash",
    7: "coin",
    8: "wallet",
    9: "cash",
    10: "cash",
    11: "coin",
    12: "coin",
    13: "coin",
    14: "coin",
    15: "coin",
    16: "coin",
    21: "coin",
    22: "coin",
    23: "coin",
    98: "cash",
    99: "cash"
};

let BASE = {};
BASE.isFunction = function(obj) {
    return BASE.type(obj) === "function"
};
BASE.isArray = Array.isArray || function(obj) {
    return BASE.type(obj) === "array"
};
BASE.isWindow = function(obj) {
    return obj != null && obj == obj.window
};
BASE.isNumeric = function(obj) {
    return !isNaN(parseFloat(obj)) && isFinite(obj)
};
BASE.type = function(obj) {
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
BASE.isPlainObject = function(obj) {
    var hasOwn = Object.prototype.hasOwnProperty;
    if (!obj || BASE.type(obj) !== "object" || obj.nodeType) {
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
BASE.urlEncode = function(param, key, encode) {
    if (param == null) return '';
    var paramStr = '';
    var t = typeof(param);
    if (t == 'string' || t == 'number' || t == 'boolean') {
        paramStr += '&' + key + '=' + ((encode == null || encode) ? encodeURIComponent(param) : param);
    } else {
        for (var i in param) {
            var k = key == null ? i : key + (param instanceof Array ? '[' + i + ']' : '.' + i);
            paramStr += BASE.urlEncode(param[i], k, encode);
        }
    }
    return paramStr;
};
BASE.extend = function() {
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
    if (typeof target !== "object" && !BASE.isFunction(target)) {
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
                if (deep && copy && (BASE.isPlainObject(copy) || (copyIsArray = BASE.isArray(copy)))) {
                    if (copyIsArray) {
                        copyIsArray = false;
                        clone = src && BASE.isArray(src) ? src : [];
                    } else {
                        clone = src && BASE.isPlainObject(src) ? src : {};
                    }
                    target[name] = BASE.extend(deep, clone, copy);
                } else if (copy !== undefined) {
                    target[name] = copy;
                }
            }
        }
    }
    return target;
};
export {
    BASE
}
