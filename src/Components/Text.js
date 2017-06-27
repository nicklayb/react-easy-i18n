import React from 'react';
import { process } from '../';

const Text = ({ text, params = {}, translate = true, formatters = [], className = '' }) => {
    text = (translate) ? process(text, params, formatters) : text;
    return (<span className={className}>{ text }</span>);
};

export default Text;
