// @todo

export default {
	'import/no-extraneous-dependencies': [
		'error',
		{ includeInternal: true, includeTypes: true },
	],
	'import/extensions': [
		'error',
		'ignorePackages',
		{
			js: 'always',
			ts: 'always',
		},
	],

	'import/first': 'error',
	'import/no-duplicates': 'error',
	'import/no-mutable-exports': 'error',
	'import/no-named-default': 'error',
	'import/no-self-import': 'error',
	'import/no-webpack-loader-syntax': 'error',
	'import/order': 'error',

	'import/newline-after-import': [
		'error',
		{ considerComments: true, count: 1 },
	],
};
