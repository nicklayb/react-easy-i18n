'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.Text = exports.process = exports.registerFormatters = exports.getFormatters = exports.format = exports.trans = exports.getLocaleText = exports.registerLang = exports.setCurrentLocale = exports.getCurrentLocale = exports.getLanguages = undefined;

var _tsEasyI18n = require('ts-easy-i18n');

var _Text = require('./Text');

var _Text2 = _interopRequireDefault(_Text);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.getLanguages = _tsEasyI18n.getLanguages;
exports.getCurrentLocale = _tsEasyI18n.getCurrentLocale;
exports.setCurrentLocale = _tsEasyI18n.setCurrentLocale;
exports.registerLang = _tsEasyI18n.registerLang;
exports.getLocaleText = _tsEasyI18n.getLocaleText;
exports.trans = _tsEasyI18n.trans;
exports.format = _tsEasyI18n.format;
exports.getFormatters = _tsEasyI18n.getFormatters;
exports.registerFormatters = _tsEasyI18n.registerFormatters;
exports.process = _tsEasyI18n.process;
exports.Text = _Text2.default;