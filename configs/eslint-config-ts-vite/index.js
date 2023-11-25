const config = require('@custom-bits/eslint-config-ts');

module.exports = {
	...config,
	rules: {
		...config.rules,
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
	},
	settings: {
		'import/parsers': {
			'@typescript-eslint/parser': ['.ts'],
		},
		'import/resolver': {
			node: {
				extensions: ['.js', '.ts'],
			},
			typescript: {
				alwaysTryTypes: true,
			},
			// vite: {},
		},
	},
};
