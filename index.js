'use strict';
const re = '[LM3][a-km-zA-HJ-NP-Z1-9]{26,33}';

module.exports = options => {
	options = options || {};
	return options.exact ? new RegExp('(?:^' + re + '$)') : new RegExp(re, 'g');
};
