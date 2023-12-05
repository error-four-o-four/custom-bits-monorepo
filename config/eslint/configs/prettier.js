import pluginStylistic from '@stylistic/eslint-plugin';

/** @type {import('eslint').Linter.FlatConfig} */
export default {
	name: 'custom:prettier',
	rules: {
		...pluginStylistic.configs['disable-legacy'].rules,
		'prettier/prettier': 'warn',
	},
};
