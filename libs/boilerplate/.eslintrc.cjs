module.exports = {
	extends: ['@custom-bits/eslint-config-ts'],
	parserOptions: {
		ecmaVersion: 2020,
		sourceType: 'module',
		project: ['tsconfig.json', 'tsconfig.node.json'],
		tsconfigRootDir: __dirname,
	},
	rules: {
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
			typescript: {},
			vite: {
				configPath: './vite.config.ts',
			},
		},
	},
};
