export let balance = function (value) {
    let str;
    value = value || 0;
    str = value.toFixed(2);
    return str;
}

export let coin = function (value) {
    let str;
    value = value || 0;
    str = value.toFixed(0);
    return str;
}