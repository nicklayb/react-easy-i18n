'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
var PARAM_SPLITTER = ',';
var KEY_SPLITTER = '|';
var ARGS_SPLITTER = ':';
var formatters = {};

function formatterExists(formatter) {
    return formatters[formatter];
}

function parseFormatter(key) {
    var params = [];
    if (key.includes(ARGS_SPLITTER)) {
        var paramIndex = key.indexOf(ARGS_SPLITTER);
        params = key.slice(paramIndex + 1).split(PARAM_SPLITTER);
        key = key.slice(0, paramIndex);
    }
    return { key: key, params: params };
}

function parseFormatters(formatterKeys) {
    if (formatterKeys.constructor === String) {
        formatterKeys = formatterKeys.split(KEY_SPLITTER);
    }
    return formatterKeys.map(parseFormatter);
}

function format(text, formatterKeys) {
    parseFormatters(formatterKeys).forEach(function (formatter) {
        text = formatterExists(formatter.key) ? formatters[formatter.key](text, formatter.params) : text;
    });
    return text;
}

function registerFormatters(newFormatters) {
    formatters = Object.assign({}, formatters, newFormatters);
}

function getFormatters() {
    return formatters;
}

exports.format = format;
exports.getFormatters = getFormatters;
exports.registerFormatters = registerFormatters;