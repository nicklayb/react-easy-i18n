const DEFAULT_LOCALE = 'en';
const KEY_SPLITTER = '.';
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

function getLocaleText(slug) {
    const splitted = slug.split(KEY_SPLITTER);
    const fallback = splitted[splitted.length - 1];
    let list = getLocaleBundle();
    for (let i = 0; i < splitted.length; i++) {
        const current = list[splitted[i]];
        if (current) {
            if (current.constructor === String) {
                return current;
            }
            list = current;
        }
    }
    return fallback;
}

function trans(text, params) {
    return bindParams(getLocaleText(text), params);
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
    getLocaleText,
    registerLang
};
