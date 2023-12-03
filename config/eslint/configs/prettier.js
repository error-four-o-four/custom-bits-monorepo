import pluginStylistic from '@stylistic/eslint-plugin';

import { ignores } from '../settings.js';

/** @type {import('eslint').Linter.FlatConfig} */
export default {
	name: 'custom:prettier',
	ignores,
	rules: {
		...pluginStylistic.configs['disable-legacy'].rules,
		'prettier/prettier': 'warn',
	},
};
