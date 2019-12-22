import test from 'ava';
import m from '.';

const fixtures = [
	'LQL9pVH1LsMfKwt82Y2wGhNGkrjF8vwUst',
	'LPpHectVSbk7YHa5X89Cm3FoFBfzkJBJc9',
	'LRcYfbDMhwvXaGPFccaKuc3fZD1Nb55aGn',
	'LY5fxZS74Ewuj1TTHwat23eUmZwimsksrU',
	'Laub752qu81oWwkNKEyawyKruUC6cEyD2x'
];

const fixturesNot = [
	'0x6f46cf5569aefa1acc1009290c8e043747172d89',
	'16rCmCmbuWDhPjWTrpQGaU3EPdZF7MTdUk',
	'DDTtqnuZ5kfRT5qh2c7sNtqrJmV3iXYdGG',
	'0xsfdlffsjksldfj[IPv6:2001:db8::2]',
	'XekiLaxnqpFb2m4NQAEcsKutZcZgcyfo6W',
	'nikolaskam{at}gmail{dot}com'
];

test('Exact LTC addresses', t => {
	for (const x of fixtures) {
		t.true(m({exact: true}).test(x));
	}
});

test('Non-exact LTC addresses', t => {
	for (const x of fixtures) {
		t.is((m().exec(`foo ${x} bar`) || [])[0], x);
	}

	t.is(m().exec('litecoin:LQL9pVH1LsMfKwt82Y2wGhNGkrjF8vwUst')[0], 'LQL9pVH1LsMfKwt82Y2wGhNGkrjF8vwUst');
});

test('Non-LTC addresses', t => {
	for (const x of fixturesNot) {
		t.false(m({exact: true}).test(x));
	}
});
