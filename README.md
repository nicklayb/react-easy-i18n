# react-easy-i18n

## Installation

```js
npm install --save react-easy-i18n
```

### Usage

#### Creating new language bundle

You can create a language bundle by using the `registerLang` function from the package. You first pass in the language abbreviation, then you pass the translation object :
```js
import { registerLang } from 'react-easy-i18n';

registerLang('en', {
    home: 'Home',
    user: 'User'
});
```

##### Nesting language bundles

You can nest language bundle into sub object for easier listing.
```js
import { registerLang } from 'react-easy-i18n';

registerLang('en', {
    home: 'Home',
    user: {
        firstname: 'Firstname',
        config: {
            language: 'Language'
        }
    }
});
```

And then pass in a slug splitted by dot to your `<Text/>` component like :

```js
<Text text="user.config.language"/> //  Would output "Language"
```

#### Switching locales

You can switch locale with the `setCurrentLocale` function. **Make sure you already registered the language or it'll fallback to english**

```js
import { registerLang, setCurrentLocale } from 'react-easy-i18n';

registerLang('en', {
    home: 'Home',
    user: 'User'
});

setCurrentLocale('en');
```

#### Usage in React

A component `Text` is included with the package which handles formatting and translations. You must at least provide the `text` prop which is the key of your translation.

```js
import React from 'react';
import { Text } from 'react-easy-i18n';

const SuperReactCompoenent = () => {
    return (
        <div>
            <Text text="welcome" />
        </div>
    );
};
```

The `Text` component will render your translation of "welcome" inside spans.

You can also provide 2 other props : `params` and `formatters`

### Advanced usage

#### Parameters

You may require to parameterize string instead of concatenate them. You can do so by providing your parameter key with a colon (`:`) inside you string. For instance, I want to say Hi to my users.

```js
import React from 'react';
import { registerLang, Text } from 'react-easy-i18n';

registerLang('en', {
    welcome: 'Hi :fullname'
});

const SuperReactCompoenent = () => {
    const fullname = 'John Doe';
    const params = {
        fullname
    };
    return (
        <div>
            <Text text="welcome" params={params}/>
        </div>
    );
};
```

The rendered text will be `Hi John Doe`.

#### Formatters

You may want to format text sometimes. It helps you keep your translation base clean and reusable because you will be formatting it on runtime.

First, you must register your formatter with the `registerFormatters` helper. It simply takes and object in parameter with the function you use as formatters

```js
import { registerFormatters } from 'react-easy-i18n';

registerFormatters({
    uppercase: text => text.toUpperCase(),
    exclamation: text => text + '!',
});
```

And then you pass a string with all the formatters you want splitted by pipes

```js
import React from 'react';
import { Text, registerFormatters } from 'react-easy-i18n';

registerLang('en', {
    welcome: 'Hi :fullname'
});

registerFormatters({
    uppercase: text => text.toUpperCase(),
    exclamation: text => text + '!',
});

const SuperReactCompoenent = () => {
    return (
        <div>
            <Text text="welcome" formatters="uppercase|exclamation"/>
        </div>
    );
};
```

##### With parameters

It would render `HI JOHN DOE!`. It may end up with the need to parameterize these formatters. Stay safe, we did it for you. You can, after you formatter key, add a colon (`:`) and pass in parameters splitted by commas

I want a formatter to surround a text with things. Sometimes it'll be parentheses, sometimes brackets.

```js
import React from 'react';
import { registerFormatters, registerLang, Text } from 'react-easy-i18n';

registerLang('en', {
    home: 'Home'
});

registerFormatters({

    // args is the array of things after the colon
    surround: (text, args) => args[0] + text + args[1]
});

const SuperReactCompoenent = () => {
    return (
        <div>
            <Text text="welcome" formatters="surround:(,)"/>
            <Text text="welcome" formatters="surround:[,]"/>
        </div>
    );
};
```

The first component will render `(Home)` and the second will render `[Home]`
