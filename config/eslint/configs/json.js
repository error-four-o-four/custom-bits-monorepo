import parserJsonc from 'jsonc-eslint-parser';
import pluginJsonc from 'eslint-plugin-jsonc';

import sortPkgJson from './sortPkgJson.js';
import sortTscJson from './sortTscJson.js';

const GLOB = ['**/*.json'];

/** @type {import('eslint').Linter.FlatConfig[]} */
export default [
	{
		files: GLOB,
		languageOptions: {
			parser: parserJsonc,
		},
		plugins: {
			jsonc: pluginJsonc,
		},
	},
	{
		files: GLOB,
		name: 'custom:jsonc:rules',
		rules: {
			...pluginJsonc.configs.base.overrides.rules,
			...pluginJsonc.configs['recommended-with-json'].rules,
			...pluginJsonc.configs.prettier.rules,
		},

	},
	sortPkgJson,
	sortTscJson,
];
