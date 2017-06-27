import React from 'react';
import ReactDOM from 'react-dom';
import { Text, setCurrentLocale, registerLang, registerFormatters } from '../src';

registerLang('en', {
    hi: 'Hi :name'
});
registerFormatters({
    exclamation: (text) => {
        return text + '!';
    }
});
setCurrentLocale('en');

const App = () => (<Text text="hi" params={{ name: 'John' }} formatters="exclamation"/>);

document.addEventListener('DOMContentLoaded', () => {
    ReactDOM.render(
        <App />,
        document.getElementById('root')
    );
});
