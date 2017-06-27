'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _ = require('../');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Text = function Text(_ref) {
    var text = _ref.text,
        _ref$params = _ref.params,
        params = _ref$params === undefined ? {} : _ref$params,
        _ref$translate = _ref.translate,
        translate = _ref$translate === undefined ? true : _ref$translate,
        _ref$formatters = _ref.formatters,
        formatters = _ref$formatters === undefined ? [] : _ref$formatters,
        _ref$className = _ref.className,
        className = _ref$className === undefined ? '' : _ref$className;

    text = translate ? (0, _.process)(text, params, formatters) : text;
    return _react2.default.createElement(
        'span',
        { className: className },
        text
    );
};

exports.default = Text;