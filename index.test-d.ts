import {expectType} from 'tsd';
import litecoinRegex = require('.');

expectType<RegExp>(litecoinRegex());
expectType<RegExp>(litecoinRegex({exact: true}));