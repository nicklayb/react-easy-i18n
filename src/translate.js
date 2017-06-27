const DEFAULT_LOCALE = 'en';
let _currentLocale = DEFAULT_LOCALE;

let lang = {
    en: {}
};

function localeIsAvailable(locale) {
    return !!lang[locale];
}

function setCurrentLocale(currentLocale) {
    _currentLocale = (localeIsAvailable(currentLocale)) ? currentLocale : DEFAULT_LOCALE;
}

function getCurrentLocale() {
    return _currentLocale;
}

function bindParams(text, params) {
    for (let key in params) {
        let qualifiedKey = ':' + key;
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
    return (transExists(text)) ? getLocaleBundle()[text] : text;
}

function trans(text, params) {
    return bindParams(getTranslatedText(text), params);
}

function registerLang(languageKey, translation = {}) {
    lang[languageKey] = translation;
}

function getLanguages() {
    return lang;
}

export {
    trans,
    getLanguages,
    setCurrentLocale,
    getCurrentLocale,
    registerLang
};
