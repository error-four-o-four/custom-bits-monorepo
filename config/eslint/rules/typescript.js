// @todo

export default {
	'no-dupe-class-members': 'off',
	'no-loss-of-precision': 'off',
	'no-redeclare': 'off',
	'no-use-before-define': 'off',
	'no-useless-constructor': 'off',
	'dot-notation': 'off',
	'no-implied-eval': 'off',
	'no-throw-literal': 'off',
	'@typescript-eslint/await-thenable': 'error',
	'@typescript-eslint/dot-notation': ['error', { allowKeywords: true }],
	'@typescript-eslint/no-floating-promises': 'error',
	'@typescript-eslint/no-for-in-array': 'error',
	'@typescript-eslint/no-implied-eval': 'error',
	'@typescript-eslint/no-misused-promises': 'error',
	'@typescript-eslint/no-throw-literal': 'error',
	'@typescript-eslint/no-unnecessary-type-assertion': 'error',
	'@typescript-eslint/no-unsafe-argument': 'error',
	'@typescript-eslint/no-unsafe-assignment': 'error',
	'@typescript-eslint/no-unsafe-call': 'error',
	'@typescript-eslint/no-unsafe-member-access': 'error',
	'@typescript-eslint/no-unsafe-return': 'error',
	'@typescript-eslint/restrict-plus-operands': 'error',
	'@typescript-eslint/restrict-template-expressions': 'error',
	'@typescript-eslint/unbound-method': 'error',
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
	'@typescript-eslint/no-dupe-class-members': 'error',
	'@typescript-eslint/no-dynamic-delete': 'off',
	'@typescript-eslint/no-explicit-any': 'off',
	'@typescript-eslint/no-extraneous-class': 'off',
	'@typescript-eslint/no-import-type-side-effects': 'error',
	'@typescript-eslint/no-invalid-void-type': 'off',
	'@typescript-eslint/no-loss-of-precision': 'error',
	'@typescript-eslint/no-non-null-assertion': 'off',
	'@typescript-eslint/no-redeclare': 'error',
	'@typescript-eslint/no-require-imports': 'error',
	'@typescript-eslint/no-unused-vars': 'off',
	'@typescript-eslint/no-use-before-define': [
		'error',
		{ classes: false, functions: false, variables: true },
	],
	'@typescript-eslint/no-useless-constructor': 'off',
	'@typescript-eslint/prefer-ts-expect-error': 'error',
	'@typescript-eslint/triple-slash-reference': 'off',
	'@typescript-eslint/unified-signatures': 'off',
};