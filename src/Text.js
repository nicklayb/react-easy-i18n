import React from 'react';
import { process } from 'ts-easy-i18n';

const Text = ({ text, params = {}, translate = true, formatters = [], className = '', ...rest }) => {
    if (typeof formatters === 'string') {
        formatters = formatters.split('|');
    }
    text = (translate) ? process(text, params, formatters) : text;
    return (<span className={className} {...rest}>{ text }</span>);
};

export default Text;
