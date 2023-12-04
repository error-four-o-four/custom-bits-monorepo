import recommended from 'eslint-plugin-n/configs/recommended-module.js';

// @todo
// export default {
// 	'node/handle-callback-err': ['error', '^(err|error)$'],
// 	'node/no-deprecated-api': 'error',
// 	'node/no-exports-assign': 'error',
// 	'node/no-new-require': 'error',
// 	'node/no-path-concat': 'error',
// 	'node/prefer-global/buffer': ['error', 'never'],
// 	'node/prefer-global/process': ['error', 'never'],
// 	'node/process-exit-as-throw': 'error',
// };

const rules = {
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
	'no-console': 'off',
};

const { languageOptions } = recommended;

/** @type {import('eslint').Linter.FlatConfig} */
export default {
	name: 'custom:node',
	languageOptions: {
		...languageOptions,
		globals: {
			...languageOptions.globals,
		},
	},
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
