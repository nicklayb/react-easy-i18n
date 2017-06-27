'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
var DEFAULT_LOCALE = 'en';
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

function transExists(text) {
    return getLocaleBundle()[text];
}

function getTranslatedText(text) {
    return transExists(text) ? getLocaleBundle()[text] : text;
}

function trans(text, params) {
    return bindParams(getTranslatedText(text), params);
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
exports.registerLang = registerLang;