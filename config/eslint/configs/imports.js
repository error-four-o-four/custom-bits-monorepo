/** @type {import('eslint').Linter.FlatConfig} */
export default {
	name: 'custom:imports',
	rules: {
		'import/named': 2,
		'import/namespace': 2,
		'import/default': 2,
		'import/export': 2,

		'import/no-mutable-exports': 'error',
		'import/no-named-as-default': 'error',
		'import/no-named-as-default-member': 'error',
		'import/no-duplicates': 'error',
		'import/no-self-import': 'error',
		'import/no-webpack-loader-syntax': 'error',

		'import/no-amd': 'error',
		'import/no-commonjs': 'error',
		'import/no-extraneous-dependencies': [
			'error',
			{ includeInternal: true, includeTypes: true },
		],

		// 'import/first': 'error',
		'import/order': 'error',

		'import/newline-after-import': [
			'error',
			{ considerComments: true, count: 1 },
		],
	},
	settings: {
		'import/parsers': {
			'@typescript-eslint/parser': ['.js', '.ts'],
		},
	},
};
