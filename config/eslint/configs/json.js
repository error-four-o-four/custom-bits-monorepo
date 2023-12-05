import parserJsonc from 'jsonc-eslint-parser';
import pluginJsonc from 'eslint-plugin-jsonc';

/** @type {import('eslint').Linter.FlatConfig} */
export default {
	files: ['**/*.json'],
	languageOptions: {
		parser: parserJsonc,
	},
	name: 'custom:jsonc:rules',
	rules: {
		...pluginJsonc.configs.base.overrides.rules,
		...pluginJsonc.configs['recommended-with-json'].rules,
		...pluginJsonc.configs.prettier.rules,
	},
};
