// @ts-check

// See: https://github.com/eslint/eslint/issues/3458
// @ts-ignore
require('@rushstack/eslint-patch/modern-module-resolution');

const { readGitignoreFiles } = require('eslint-gitignore');

const ECMA_VERSION = 2022;

/** @type {import('eslint').Linter.Config} */
module.exports = {
	ignorePatterns: [...readGitignoreFiles(), '!.*.js'],
	parser: '@typescript-eslint/parser',
	parserOptions: {
		ecmaVersion: ECMA_VERSION,
		sourceType: 'module',
	},
	plugins: ['@typescript-eslint', 'import', 'promise', 'prettier'],
	extends: [
		'airbnb-base',
		'plugin:import/recommended',
		require.resolve('./rules/import.js'),
		'plugin:promise/recommended',
		'prettier',
	],
	env: {
		[`es${ECMA_VERSION}`]: true,
	},
	reportUnusedDisableDirectives: true,
	settings: {
		'import/resolver': {
			node: true,
			[require.resolve('eslint-plugin-import-exports-imports-resolver')]: {},
		},
	},
	overrides: [
		{
			files: ['**/*.js'],
			rules: {
				'typescript-eslint': 'off',
			},
		},
	],
};
