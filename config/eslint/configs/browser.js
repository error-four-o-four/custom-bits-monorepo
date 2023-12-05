import globals from 'globals';

/** @type {import('eslint').Linter.FlatConfig} */
export default {
	name: 'custom:browser',
	languageOptions: {
		globals: {
			...globals.es2021,
			...globals.browser,
		},
	},
};
