import recommended from 'eslint-plugin-n/configs/recommended-module.js';

import { ignores } from '../settings.js';

// import { findRules } from '../utils.js';
// import rulesJavascript from '../rules/javascript.js';

const rules = {
	'no-console': 'off',

	'n/handle-callback-err': ['error', '^(err|error)$'],
	'n/no-new-require': 'error',
	'n/no-path-concat': 'error',
	'n/no-unpublished-import': 'off',
	'n/prefer-global/buffer': ['error', 'never'],
	'n/prefer-global/process': ['error', 'never'],
	'n/process-exit-as-throw': 'error',

	'n/file-extension-in-import': 'error',
	// 'import/extensions': [
	// 	'error',
	// 	'ignorePackages',
	// 	{
	// 		js: 'always',
	// 	},
	// ],
};

// findRules(rules, recommended.rules);

/** @type {import('eslint').Linter.FlatConfig} */
export default {
	name: 'custom:node',
	files: ['**/*.js'],
	ignores,
	languageOptions: recommended.languageOptions,
	rules: {
		...recommended.rules,
		...rules,
	},
};

// /** @type {import('eslint').Linter.FlatConfig[]} */
// export default async () => {
// 	const parserBabel = await import('@babel/eslint-parser');
// 	const recommended = await interopDefault(
// 		import('eslint-plugin-n/configs/recommended-module.js')
// 	);

// 	return [
// 		{
// 			name: 'custom:node',
// 			files: ['**/*.js'],
// 			ignores,
// 			languageOptions: {
// 				ecmaVersion: 2022,
// 				sourceType: 'module',
// 			},
// 			rules: {
// 				...recommended.rules,
// 				...rules,
// 				// ...pluginNode.
// 				// ...rulesJavascript,
// 				// ...rulesNode,
// 			},
// 			settings: {
// 				'import/parsers': {
// 					'@babel/eslint-parser': ['.js'],
// 				},
// 				// import resolver is node by default
// 			},
// 		},
// 	];
// };
