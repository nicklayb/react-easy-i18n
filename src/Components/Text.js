import React from 'react';
import { process } from '../';

const Text = ({ text, params = {}, translate = true, formatters = [], className = '', ...rest }) => {
    text = (translate) ? process(text, params, formatters) : text;
    return (<span className={className} {...rest}>{ text }</span>);
};

export default Text;
