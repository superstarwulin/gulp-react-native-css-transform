/**
 * yyyy-MM-dd
 */

var padNum = function (num) {
    return num > 9 ? ('' + num) : ('0' + num);
};

/**
 * Date 对象转日期字符串
 * @return {String}      'yyyy-MM-dd'
 */
var formatDate = function (date) {
    return [
        '' + date.getFullYear(),
        padNum(+date.getMonth() + 1),
        padNum(+date.getDate())
    ].join('-');
};

/**
 * Date 对象转日期字符串
 * @return {String}      'HH:MM:ss'
 */
var getTimeHMS = function (date) {
    return [
        padNum(+date.getHours()),
        padNum(+date.getMinutes()),
        padNum(+date.getSeconds())
    ].join(':');
};

/**
 * Date 对象转日期字符串
 * @return {String}      'yyyy-MM-dd HH:MM:ss'
 */
module.exports = function (date) {
    return formatDate(date) + ' ' + getTimeHMS(date);
};