const config = require('@custom-bits/eslint-config-ts-vite');

module.exports = {
	extends: ['@custom-bits/eslint-config-ts-vite'],
	parserOptions: {
		...config.parserOptions,
		project: ['tsconfig.json', 'tsconfig.node.json'],
		tsconfigRootDir: __dirname,
	},
	settings: {
		...config.settings,
		'import/resolver': {
			...config.settings['import/resolver'],
			vite: {
				configPath: '',
			},
		},
	},
};
