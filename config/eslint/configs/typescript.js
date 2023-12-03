import plugins from '../plugins.js';

import { ignores, parserTypescript } from '../settings.js';

const rules = {
	// 'constructor-super': 'off', // ts(2335) & ts(2377)
	// 'getter-return': 'off', // ts(2378)
	// 'no-const-assign': 'off', // ts(2588)
	// 'no-dupe-args': 'off', // ts(2300)
	// 'no-dupe-class-members': 'off', // ts(2393) & ts(2300)
	// 'no-dupe-keys': 'off', // ts(1117)
	// 'no-func-assign': 'off', // ts(2630)
	// 'no-import-assign': 'off', // ts(2632) & ts(2540)
	// 'no-new-symbol': 'off', // ts(7009)
	// 'no-obj-calls': 'off', // ts(2349)
	// 'no-redeclare': 'off', // ts(2451)
	// 'no-setter-return': 'off', // ts(2408)
	// 'no-this-before-super': 'off', // ts(2376) & ts(17009)
	// 'no-undef': 'off', // ts(2304) & ts(2552)
	// 'no-unreachable': 'off', // ts(7027)
	// 'no-unsafe-negation': 'off', // ts(2365) & ts(2322) & ts(2358)
	// 'no-var': 'error', // ts transpiles let/const to var, so no need for vars any more
	// 'prefer-const': 'error', // ts provides better types with const
	// 'prefer-rest-params': 'error', // ts provides better types with rest args over arguments
	// 'prefer-spread': 'error', // ts transpiles spread to apply, so no need for manual apply

	// set via 'eslint-recommended' overrides
	// 'no-dupe-class-members': 'off',
	'@typescript-eslint/no-dupe-class-members': 'error',

	// set via 'eslint-recommended' overrides
	// 'no-redeclare': 'off',
	'@typescript-eslint/no-redeclare': 'error',

	'no-use-before-define': 'off',
	'@typescript-eslint/no-use-before-define': [
		'error',
		{ classes: false, functions: false, variables: true },
	],

	'dot-notation': 'off',
	'@typescript-eslint/dot-notation': ['error', { allowKeywords: true }],

	// set via 'strict-type-checked'
	// 'no-loss-of-precision': 'off',
	// 'no-useless-constructor': 'off',
	'@typescript-eslint/no-useless-constructor': 'off',

	// 'no-implied-eval': 'off',
	// '@typescript-eslint/no-implied-eval': 'error',

	// 'no-throw-literal': 'off',
	// '@typescript-eslint/no-throw-literal': 'error',

	// '@typescript-eslint/await-thenable': 'error',
	// '@typescript-eslint/no-floating-promises': 'error',
	// '@typescript-eslint/no-for-in-array': 'error',
	// '@typescript-eslint/no-misused-promises': 'error',
	// '@typescript-eslint/no-unnecessary-type-assertion': 'error',
	// '@typescript-eslint/no-unsafe-argument': 'error',
	// '@typescript-eslint/no-unsafe-assignment': 'error',
	// '@typescript-eslint/no-unsafe-call': 'error',
	// '@typescript-eslint/no-unsafe-member-access': 'error',
	// '@typescript-eslint/no-unsafe-return': 'error',
	// '@typescript-eslint/restrict-plus-operands': 'error',
	// '@typescript-eslint/restrict-template-expressions': 'error',
	// '@typescript-eslint/unbound-method': 'error',

	'@typescript-eslint/ban-ts-comment': [
		'error',
		{ 'ts-ignore': 'allow-with-description' },
	],
	'@typescript-eslint/ban-types': ['error', { types: { Function: false } }],
	'@typescript-eslint/consistent-type-definitions': ['error', 'interface'],
	'@typescript-eslint/consistent-type-imports': [
		'error',
		{ disallowTypeAnnotations: false, prefer: 'type-imports' },
	],
	'@typescript-eslint/no-dynamic-delete': 'off',
	// '@typescript-eslint/no-explicit-any': 'off',
	'@typescript-eslint/no-extraneous-class': 'off',
	'@typescript-eslint/no-import-type-side-effects': 'error',
	'@typescript-eslint/no-invalid-void-type': 'off',
	'@typescript-eslint/no-loss-of-precision': 'error',
	'@typescript-eslint/no-non-null-assertion': 'off',
	'@typescript-eslint/no-require-imports': 'error',
	'@typescript-eslint/no-unused-vars': 'warn',

	'@typescript-eslint/prefer-ts-expect-error': 'error',
	'@typescript-eslint/triple-slash-reference': 'off',
	'@typescript-eslint/unified-signatures': 'off',
};

// console.log('CONFIGS');
// console.log(Object.keys(pluginTs.configs));
// [
// 	'all',
// 	'base',
// 	'disable-type-checked',
// 	'eslint-recommended',
// 	'recommended',
// 	'recommended-requiring-type-checking',
// 	'recommended-type-checked',
// 	'strict',
// 	'strict-type-checked',
// 	'stylistic',
// 	'stylistic-type-checked'
// ]

// findRules(pluginTs.configs['strict-type-checked'].rules);
// findRules(pluginTs.configs.recommended.rules);

// console.log('PLUGIN');
// console.log(pluginTs.configs['eslint-recommended']);

/** @type {import('eslint').Linter.FlatConfig} */
export default (root, file) => ({
	name: 'custom:typescript',
	files: ['**/*.ts'],
	ignores,
	languageOptions: {
		parser: parserTypescript,
		parserOptions: {
			tsconfigRootDir: root,
			project: file,
		},
	},
	rules: {
		// ...pluginTs.configs['eslint-recommended'].overrides[0].rules,
		// ...pluginTs.configs['strict-type-checked'].rules,
		...rules,
		// ...pluginTs.configs
	},
	// settings: {
	// 	'import/resolver': {
	// 		typescript: {
	// 			project: true,
	// 		},
	// 	},
	// },
});
