declare namespace litecoinRegex {
    interface Options {
        /**
        Only match an exact string. By default, it matches any LTC addresses in a string. Useful with `RegExp#test()` to check if a string is an LTC address.
        @default false
        */
        readonly exact?: boolean;
    }
}

/**
Returns a regex for matching Litecoin (LTC) addresses.
@example
```
import litecoinRegex = require('litecoin-regex')
litecoinRegex().test('nodejsrocks LQL9pVH1LsMfKwt82Y2wGhNGkrjF8vwUst');
//=> true
```
*/
declare function litecoinRegex(options?: litecoinRegex.Options): RegExp;

export = litecoinRegex;