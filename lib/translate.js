'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
var DEFAULT_LOCALE = 'en';
var KEY_SPLITTER = '.';
var _currentLocale = DEFAULT_LOCALE;

var lang = {
    en: {}
};

function localeIsAvailable(locale) {
    return !!lang[locale];
}

function setCurrentLocale(currentLocale) {
    _currentLocale = localeIsAvailable(currentLocale) ? currentLocale : DEFAULT_LOCALE;
}

function getCurrentLocale() {
    return _currentLocale;
}

function bindParams(text, params) {
    for (var key in params) {
        var qualifiedKey = ':' + key;
        text = text.replace(qualifiedKey, params[key]);
    }
    return text;
}

function getLocaleBundle() {
    return lang[getCurrentLocale()];
}

function getLocaleText(slug) {
    if (slug && slug.constructor === String) {
        var splitted = slug.toString().split(KEY_SPLITTER);
        var list = getLocaleBundle();
        for (var i = 0; i < splitted.length; i++) {
            var current = list[splitted[i]];
            if (current) {
                if (current.constructor === String) {
                    return current;
                }
                list = current;
            }
        }
    }
    return slug;
}

function trans(text, params) {
    return bindParams(getLocaleText(text), params);
}

function registerLang(languageKey) {
    var translation = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

    lang[languageKey] = translation;
}

function getLanguages() {
    return lang;
}

exports.trans = trans;
exports.getLanguages = getLanguages;
exports.setCurrentLocale = setCurrentLocale;
exports.getCurrentLocale = getCurrentLocale;
exports.getLocaleText = getLocaleText;
exports.registerLang = registerLang;