module.exports = {
	extends: ['@custom-bits/eslint-config-ts-vite'],
	parserOptions: {
		project: ['tsconfig.json', 'tsconfig.node.json'],
		tsconfigRootDir: __dirname,
	},
	rules: {
		// 'import/no-extraneous-dependencies': [
		// 	'error',
		// 	{ includeInternal: true, includeTypes: true },
		// ],
		// 'import/extensions': [
		// 	'error',
		// 	'ignorePackages',
		// 	{
		// 		js: 'always',
		// 		ts: 'always',
		// 	},
		// ],
	},
	settings: {
		'import/resolver': {
			node: {
				extensions: ['.js', '.ts'],
			},
			typescript: {
				alwaysTryTypes: true,
			},
			vite: {
				configPath: './vite.config.ts',
			},
		},
	},
};
