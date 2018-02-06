import React from 'react';
import Text from './Text';
import { shallow, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-15';
import * as i18n from 'ts-easy-i18n';

configure({
    adapter: new Adapter()
});
const en = {
    hi: 'Hi :name',
    how_are_you: 'How are you?'
};
const fr = {
    hi: 'Bonjour :name',
    how_are_you: 'Comment allez-vous?'
};
i18n.registerFormatters({
    uc: (text) => text.toUpperCase()
});
i18n.registerLang('en', en);
i18n.registerLang('fr', fr);
i18n.setCurrentLocale('en');

test('Renders english translation', () => {
    i18n.setCurrentLocale('en');
    const component = shallow(<Text text="how_are_you"/>);
    expect(component.text()).toEqual(en.how_are_you);
});

test('Renders french translation', () => {
    i18n.setCurrentLocale('fr');
    const component = shallow(<Text text="how_are_you"/>);
    expect(component.text()).toEqual(fr.how_are_you);
});

test('Renders translation with parameters', () => {
    i18n.setCurrentLocale('en');
    const name = 'John';
    const component = shallow(<Text text="hi" params={{ name }}/>);
    expect(component.text()).toEqual(en.hi.replace(':name', name));
});

test('Renders translation with formatters', () => {
    i18n.setCurrentLocale('en');
    const component = shallow(<Text text="how_are_you" formatters="uc"/>);
    expect(component.text()).toEqual(en.how_are_you.toUpperCase());
});

test('Renders translation with parameters and formatters', () => {
    i18n.setCurrentLocale('en');
    const name = 'John';
    const component = shallow(<Text text="hi" params={{ name }} formatters="uc"/>);
    expect(component.text()).toEqual(en.hi.replace(':name', name).toUpperCase());
});

test('Renders translation as is with parameters and formatters', () => {
    i18n.setCurrentLocale('en');
    const name = 'John';
    const component = shallow(<Text text="hi" params={{ name }} formatters="uc" translate={false} />);
    expect(component.text()).toEqual('hi');
});
