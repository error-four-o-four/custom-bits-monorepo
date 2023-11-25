module.exports = {
	env: {
		browser: true,
		es2021: true,
		node: true,
	},
	extends: [
		'airbnb-base',
		'airbnb-typescript/base',
		'plugin:@typescript-eslint/recommended',
		'plugin:@typescript-eslint/recommended-type-checked',
		'plugin:import/recommended',
		'plugin:import/typescript',
		'plugin:promise/recommended',
		'prettier',
	],
	plugins: ['@typescript-eslint', 'import', 'promise', 'prettier'],
	parser: '@typescript-eslint/parser',
	parserOptions: {
		ecmaVersion: 'latest',
		sourceType: 'module',
		parser: '@typescript-eslint/parser',
	},
	overrides: [
		{
			env: {
				node: true,
			},
			files: ['**/*.{cjs,js}'],
			extends: [
				'@custom-bits/eslint-config-base',
				'plugin:@typescript-eslint/disable-type-checked',
			],
		},
		{
			files: ['**/*.cjs'],
			rules: {
				'@typescript-eslint/no-var-requires': 0,
			},
		},
	],
	rules: {
		'@typescript-eslint/lines-between-class-members': [
			'error',
			{
				enforce: [{ blankLine: 'always', prev: '*', next: 'method' }],
			},
		],
	},
};
