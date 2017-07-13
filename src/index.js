import { trans, getLanguages, setCurrentLocale, getCurrentLocale, registerLang, getLocaleText } from './translate';
import { format, registerFormatters, getFormatters } from './formatters';
import Text from './Components/Text';

function process(text, params = {}, formatterKeys = []) {
    return format(trans(text, params), formatterKeys);
}

export {
    getLanguages,
    getCurrentLocale,
    setCurrentLocale,
    registerLang,
    getLocaleText,

    trans,

    format,
    getFormatters,
    registerFormatters,

    process,
    Text
};
