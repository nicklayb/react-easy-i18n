/* eslint-env mocha */
import { expect } from 'firenpm/mochaccino';
import * as i18n from '../lib/index';

const beforeTrans = () => {
    i18n.registerLang('en', {
        hi: 'Hi :name',
        how_are_you: 'How are you?'
    });

    i18n.registerLang('fr', {
        hi: 'Bonjour :name',
        how_are_you: 'Comment allez-vous?'
    });
    i18n.setCurrentLocale('en');
};

describe('trans', () => {
    beforeEach(beforeTrans);

    it('should translate hi with a name', () => {
        const key = 'hi';
        const expectation = 'Hi Bob';
        const result = i18n.trans(key, {
            name: 'Bob'
        });
        expect(result).toEqual(expectation);
    });

    it('should translate an unparametered text', () => {
        const key = 'how_are_you';
        const locale = 'en';
        const expectation = i18n.getLanguages()[locale][key];
        const result = i18n.trans(key);
        expect(result).toEqual(expectation);
    });

    it('should return the same key', () => {
        const key = 'is_this_the_real_life';
        const expectation = key;
        const result = i18n.trans(key);
        expect(result).toEqual(expectation);
    });

    it('should translate how are you to french', () => {
        const key = 'how_are_you';
        const locale = 'fr';
        const expectation = i18n.getLanguages()[locale][key];
        i18n.setCurrentLocale(locale);
        const result = i18n.trans(key);
        expect(result).toEqual(expectation);
    });
});

describe('registerLang', () => {
    beforeEach(beforeTrans);
    it('should register deutsch as a new language', () => {
        const key = 'de';
        const trans = {
            hi: 'Guten Tag :name',
            how_are_you: 'Wie geht es dir?'
        };
        i18n.registerLang(key, trans);
        expect(i18n.getLanguages()[key]).toEqual(trans);
    });
});

describe('setCurrentLocale', () => {
    beforeEach(beforeTrans);
    it('should translate with a newly added deutsch language', () => {
        const key = 'de';
        const text_key = 'hi';
        const trans = {
            hi: 'Guten Tag :name',
            how_are_you: 'Wie geht es dir?'
        };
        i18n.registerLang(key, trans);
        i18n.setCurrentLocale(key);
        expect(i18n.trans(text_key)).toEqual(trans[text_key]);
    });
});

describe('getCurrentLocale', () => {
    beforeEach(beforeTrans);
    it('should change the locale to french', () => {
        const locale = 'fr';
        i18n.setCurrentLocale(locale);
        const result = i18n.getCurrentLocale();
        expect(result).toEqual(locale);
    });
});

describe('registerFormatters', () => {
    it('should register an uppercase formatter', () => {
        const name = 'uc';
        const formatter = (text) => {
            return text.toUpperCase();
        };
        i18n.registerFormatters({
            [name]: formatter
        });
        expect(i18n.getFormatters()[name]).toEqual(formatter);
    });
});

describe('format', () => {
    it('should format a name to uppercase', () => {
        const baseText = 'John';
        const formatter = (text) => {
            return text.toUpperCase();
        };
        const expectation = baseText.toUpperCase();
        i18n.registerFormatters({
            [name]: formatter
        });
        expect(i18n.format(baseText, name)).toEqual(expectation);
    });

    it('should format a name to uppercase and split surround with parentheses', () => {
        const baseText = 'John';
        const uc = (text) => {
            return text.toUpperCase();
        };
        const surround = (text, args) => {
            return args[0] + text + args[1];
        };
        const expectation = '(' + baseText.toUpperCase() + ')';
        i18n.registerFormatters({
            uc, surround
        });
        expect(i18n.format(baseText, 'uc|surround:(,)')).toEqual(expectation);
    });
});

describe('process', () => {
    beforeEach(beforeTrans);
    it('should translate and format a text', () => {
        const key = 'hi';
        const params = { name: 'John' };
        const formatters = 'uc|surround:(,)';
        i18n.registerFormatters({
            uc: (text) => {
                return text.toUpperCase();
            },
            surround: (text, args) => {
                return args[0] + text + args[1];
            }
        });
        const expectation = '(Hi John)'.toUpperCase();
        expect(i18n.process(key, params, formatters)).toEqual(expectation);
    });
});

describe('getLocaleText', () => {
    const trans = {
        account: {
            user: {
                firstname: 'Firstname',
                lastname: 'Lastname',
            },
            profile: 'Profile'
        }
    };
    beforeEach(() => {
        i18n.registerLang('en', trans);
        i18n.setCurrentLocale('en');
    });

    it('should gives correct Profile', () => {
        expect(i18n.getLocaleText('account.profile')).toEqual(trans.account.profile);
    });

    it('should gives correct Firstname', () => {
        expect(i18n.getLocaleText('account.user.firstname')).toEqual(trans.account.user.firstname);
    });

    it('should gives incorrect email', () => {
        expect(i18n.getLocaleText('account.user.email')).toEqual('email');
    });

    it('should gives incorrect user', () => {
        expect(i18n.getLocaleText('account.user')).toEqual('user');
    });
});

// describe('sayHello', () => {
//     beforeEach(() => {
//         dom.create();
//         sayHello();
//     });
//
//     afterEach(() => {
//         dom.destroy();
//     });
//
//     it('it adds <p> element to <body> in the document', () => {
//         expect(document.querySelectorAll('p').length).toEqual(1);
//     });
// });
