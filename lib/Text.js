'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _tsEasyI18n = require('ts-easy-i18n');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

var Text = function Text(_ref) {
    var text = _ref.text,
        _ref$params = _ref.params,
        params = _ref$params === undefined ? {} : _ref$params,
        _ref$translate = _ref.translate,
        translate = _ref$translate === undefined ? true : _ref$translate,
        _ref$formatters = _ref.formatters,
        formatters = _ref$formatters === undefined ? [] : _ref$formatters,
        _ref$className = _ref.className,
        className = _ref$className === undefined ? '' : _ref$className,
        rest = _objectWithoutProperties(_ref, ['text', 'params', 'translate', 'formatters', 'className']);

    if (typeof formatters === 'string') {
        formatters = formatters.split('|');
    }
    text = translate ? (0, _tsEasyI18n.process)(text, params, formatters) : text;
    return _react2.default.createElement(
        'span',
        _extends({ className: className }, rest),
        text
    );
};

exports.default = Text;