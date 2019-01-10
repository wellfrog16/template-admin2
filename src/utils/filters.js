// 货币格式化
function currency(val, unit = '', decimals) {
    if (decimals === undefined || decimals === null) {
        const arr = (val + '').split('.');
        decimals = arr.length === 2 ? arr[1].length : 2;
    }
    const digitsRE = /(\d{3})(?=\d)/g;
    val = parseFloat(val);
    if (!isFinite(val) || (!val && val !== 0)) return '';
    unit = unit != null ? unit : '$';
    decimals = decimals != null ? decimals : 2;
    const stringified = Math.abs(val).toFixed(decimals);
    const intx = decimals
        ? stringified.slice(0, -1 - decimals)
        : stringified;
    const i = intx.length % 3;
    const head = i > 0
        ? (intx.slice(0, i) + (intx.length > 3 ? ',' : ''))
        : '';
    const floatx = decimals
        ? stringified.slice(-1 - decimals)
        : '';
    const sign = val < 0 ? '-' : '';
    return sign + unit + head +
        intx.slice(i).replace(digitsRE, '$1,') +
        floatx;
}

export default {
    currency
};
