// @todo
// export default {
// 	'import/no-extraneous-dependencies': [
// 		'error',
// 		{ includeInternal: true, includeTypes: true },
// 	],
// 	'import/extensions': [
// 		'error',
// 		'ignorePackages',
// 		{
// 			js: 'always',
// 			ts: 'always',
// 		},
// 	],

// 	'import/first': 'error',
// 	'import/no-duplicates': 'error',
// 	'import/no-mutable-exports': 'error',
// 	'import/no-named-default': 'error',
// 	'import/no-self-import': 'error',
// 	'import/no-webpack-loader-syntax': 'error',
// 	'import/order': 'error',

// 	'import/newline-after-import': [
// 		'error',
// 		{ considerComments: true, count: 1 },
// 	],
// };

/** @type {import('eslint').Linter.FlatConfig} */
export default {
	name: 'custom:imports',
	files: ['**/*.{j,t}s'],
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
		// @todo add import parser node for js files
		'import/parsers': {
			'@typescript-eslint/parser': ['.js', '.ts'],
		},
	},
};
