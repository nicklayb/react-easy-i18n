const PARAM_SPLITTER = ',';
const KEY_SPLITTER = '|';
const ARGS_SPLITTER = ':';
let formatters = {};

function formatterExists(formatter) {
    return (formatters[formatter]);
}

function parseFormatter(key) {
    let params = [];
    if (key.includes(ARGS_SPLITTER)) {
        const paramIndex = key.indexOf(ARGS_SPLITTER);
        params = key.slice((paramIndex + 1)).split(PARAM_SPLITTER);
        key = key.slice(0, paramIndex);
    }
    return { key, params };
}

function parseFormatters(formatterKeys) {
    if (formatterKeys.constructor === String) {
        formatterKeys = formatterKeys.split(KEY_SPLITTER);
    }
    return formatterKeys.map(parseFormatter);
}

function format(text, formatterKeys) {
    parseFormatters(formatterKeys).forEach(formatter => {
        text = (formatterExists(formatter.key)) ? formatters[formatter.key](text, formatter.params) : text;
    });
    return text;
}

function registerFormatters(newFormatters) {
    formatters = Object.assign({}, formatters, newFormatters);
}

function getFormatters() {
    return formatters;
}

export {
    format,
    getFormatters,
    registerFormatters
};
