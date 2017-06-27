'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.Text = exports.process = exports.registerFormatters = exports.getFormatters = exports.format = exports.trans = exports.registerLang = exports.setCurrentLocale = exports.getCurrentLocale = exports.getLanguages = undefined;

var _translate = require('./translate');

var _formatters = require('./formatters');

var _Text = require('./Components/Text');

var _Text2 = _interopRequireDefault(_Text);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function process(text) {
    var params = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
    var formatterKeys = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : [];

    return (0, _formatters.format)((0, _translate.trans)(text, params), formatterKeys);
}

exports.getLanguages = _translate.getLanguages;
exports.getCurrentLocale = _translate.getCurrentLocale;
exports.setCurrentLocale = _translate.setCurrentLocale;
exports.registerLang = _translate.registerLang;
exports.trans = _translate.trans;
exports.format = _formatters.format;
exports.getFormatters = _formatters.getFormatters;
exports.registerFormatters = _formatters.registerFormatters;
exports.process = process;
exports.Text = _Text2.default;