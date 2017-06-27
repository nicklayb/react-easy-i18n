import { trans, getLanguages, setCurrentLocale, getCurrentLocale, registerLang } from './translate';
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

    trans,

    format,
    getFormatters,
    registerFormatters,

    process,
    Text
};
