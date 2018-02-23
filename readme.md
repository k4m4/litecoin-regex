# litecoin-regex [![Build Status](https://travis-ci.org/k4m4/litecoin-regex.svg?branch=master)](https://travis-ci.org/k4m4/litecoin-regex)

> Regular expression for matching Litecoin (LTC) addresses


## Install

```
~ ❯❯❯ npm install litecoin-regex
```


## Usage

```js
const litecoinRegex = require('litecoin-regex');

litecoinRegex().test('nodejsrocks LQL9pVH1LsMfKwt82Y2wGhNGkrjF8vwUst');
//=> true

litecoinRegex({exact: true}).test('nodejsrocks LQL9pVH1LsMfKwt82Y2wGhNGkrjF8vwUst foo');
//=> false

litecoinRegex({exact: true}).test('LQL9pVH1LsMfKwt82Y2wGhNGkrjF8vwUst');
//=> true

'nodejsrocks LQL9pVH1LsMfKwt82Y2wGhNGkrjF8vwUst unicorn LPpHectVSbk7YHa5X89Cm3FoFBfzkJBJc9 rainbow'.match(litecoinRegex());
//=> ['LQL9pVH1LsMfKwt82Y2wGhNGkrjF8vwUst', 'LPpHectVSbk7YHa5X89Cm3FoFBfzkJBJc9']
```


## API

### litecoinRegex([options])

Returns a regex for matching Litecoin (LTC) addresses.

#### options.exact

Type: `boolean`<br>
Default: `false` *(Matches any LTC address in a string)*

Only match an exact string. Useful with `RegExp#test()` to check if a string is an LTC address.


## License

MIT © [Nikolaos Kamarinakis](https://nikolaskama.me)