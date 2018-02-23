'use strict';
const re = '[LM3][a-km-zA-HJ-NP-Z1-9]{26,33}';

module.exports = opts => {
	opts = opts || {};
	return opts.exact ? new RegExp('(?:^' + re + '$)') : new RegExp(re, 'g');
};