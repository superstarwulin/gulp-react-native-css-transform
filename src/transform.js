
var fs = require('fs');
var path = require('path');
var _ = require('lodash');

var dateYMD = require('./dateYMD');
var PLUGIN_NAME = require('./pluginname');

var cssToJs = require('rn-css-transform');

function getStyle(css) {
    return (`
/**
 * date: ${dateYMD(new Date())}
 * create by react-native-css-transform
 * see: https://github.com/AngusFu/${PLUGIN_NAME}
 */

import { StyleSheet } from 'react-native';

const styles = StyleSheet.create(${JSON.stringify(css, null, 4)});

export default styles;
`
    );
};

// simple regExp
var r_css  = /([a-zA-Z0-9-_\s\.\#\>\+]+)\{([^\{\}]+)\}/g;

module.exports = function (data) {
    var obj = {},
        temp = null,
        selector = '';

    while(temp = r_css.exec(data.toString())) { 
        selector = _.camelCase(_.trim(temp[1]));
        obj[selector] = cssToJs(_.trim(temp[2]));
    }

    return getStyle(obj);
};