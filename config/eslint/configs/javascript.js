// @todo

// const rulesOnlyJs = {
// 	'constructor-super': 'error',

// }

// const rulesStyistic = {
// 	'dot-location': ['error', 'property'],
// 	'no-floating-decimal': 'error',
// 	'no-multi-spaces': ['error', { ignoreEOLComments: false }],
// };

const rules = {
	// possible problems
	'array-callback-return': ['error', { allowImplicit: true }],
	'getter-return': 'error',
	'no-async-promise-executor': 'error',

	// suggestions
	'accessor-pairs': [
		'error',
		{ enforceForClassMembers: true, setWithoutGet: true },
	],
	'block-scoped-var': 'error',
	'class-methods-use-this': ['error', { exceptMethods: [] }],
	'default-case': ['error', { commentPattern: '^no default$' }],
	'default-case-last': 'error',
	'default-param-last': 'error',
	'dot-notation': ['error', { allowKeywords: true }],
	eqeqeq: ['error', 'always', { null: 'ignore' }],
	'grouped-accessor-pairs': ['error', 'setBeforeGet'],
	'guard-for-in': 'error',
	'max-classes-per-file': ['error', 1],

	'new-cap': ['error', { capIsNew: false, newIsCap: true, properties: true }],
	'no-alert': 'error',

	'no-caller': 'error',
	'no-case-declarations': 'error',
	'no-class-assign': 'error',
	'no-compare-neg-zero': 'error',
	'no-cond-assign': ['error', 'always'],
	'no-const-assign': 'error',
	'no-constructor-return': 'error',
	'no-control-regex': 'error',
	'no-debugger': 'error',
	'no-delete-var': 'error',
	'no-dupe-args': 'error',
	'no-dupe-class-members': 'error',
	'no-dupe-keys': 'error',
	'no-duplicate-case': 'error',
	'no-empty': ['error', { allowEmptyCatch: true }],
	'no-empty-character-class': 'error',
	'no-empty-function': [
		'error',
		{ allow: ['arrowFunctions', 'functions', 'methods'] },
	],
	'no-empty-pattern': 'error',
	'no-else-return': ['error', { allowElseIf: false }],
	'no-eval': 'error',
	'no-ex-assign': 'error',
	'no-extend-native': 'error',
	'no-extra-bind': 'error',
	'no-extra-boolean-cast': 'error',
	'no-fallthrough': 'error',
	'no-func-assign': 'error',
	'no-global-assign': 'error',
	'no-implicit-coercion': [
		'off',
		{ boolean: false, number: true, string: true, allow: [] },
	],
	'no-implied-eval': 'error',
	'no-import-assign': 'error',
	'no-invalid-regexp': 'error',
	'no-irregular-whitespace': 'error',
	'no-iterator': 'error',
	'no-labels': ['error', { allowLoop: false, allowSwitch: false }],
	'no-lone-blocks': 'error',
	'no-loop-func': 'error',
	'no-loss-of-precision': 'error',
	'no-magic-numbers': [
		'off',
		{
			ignore: [],
			ignoreArrayIndexes: true,
			enforceConst: true,
			detectObjects: false,
		},
	],
	'no-misleading-character-class': 'error',
	'no-multi-str': 'error',
	'no-new': 'error',
	'no-new-func': 'error',
	'no-new-symbol': 'error',
	'no-new-wrappers': 'error',
	'no-obj-calls': 'error',
	'no-octal': 'error',
	'no-octal-escape': 'error',
	'no-proto': 'error',
	'no-prototype-builtins': 'error',
	'no-redeclare': ['error', { builtinGlobals: false }],
	'no-regex-spaces': 'error',
	'no-restricted-globals': [
		'error',
		{ message: 'Use `globalThis` instead.', name: 'global' },
		{ message: 'Use `globalThis` instead.', name: 'self' },
	],
	'no-restricted-properties': [
		'error',
		{
			message:
				'Use `Object.getPrototypeOf` or `Object.setPrototypeOf` instead.',
			property: '__proto__',
		},
		{
			message: 'Use `Object.defineProperty` instead.',
			property: '__defineGetter__',
		},
		{
			message: 'Use `Object.defineProperty` instead.',
			property: '__defineSetter__',
		},
		{
			message: 'Use `Object.getOwnPropertyDescriptor` instead.',
			property: '__lookupGetter__',
		},
		{
			message: 'Use `Object.getOwnPropertyDescriptor` instead.',
			property: '__lookupSetter__',
		},

		{
			object: 'global',
			property: 'isFinite',
			message: 'Please use Number.isFinite instead',
		},
		{
			object: 'self',
			property: 'isFinite',
			message: 'Please use Number.isFinite instead',
		},
		{
			object: 'window',
			property: 'isFinite',
			message: 'Please use Number.isFinite instead',
		},
		{
			object: 'global',
			property: 'isNaN',
			message: 'Please use Number.isNaN instead',
		},
		{
			object: 'self',
			property: 'isNaN',
			message: 'Please use Number.isNaN instead',
		},
		{
			object: 'window',
			property: 'isNaN',
			message: 'Please use Number.isNaN instead',
		},
	],
	'no-restricted-syntax': [
		'error',
		'DebuggerStatement',
		'LabeledStatement',
		'WithStatement',
		'TSEnumDeclaration[const=true]',
		'TSExportAssignment',
	],
	'no-return-assign': ['error', 'always'],
	'no-return-await': 'error',
	'no-script-url': 'error',
	'no-self-assign': ['error', { props: true }],
	'no-self-compare': 'error',
	'no-sequences': 'error',
	'no-shadow-restricted-names': 'error',
	'no-sparse-arrays': 'error',
	'no-template-curly-in-string': 'error',
	'no-this-before-super': 'error',
	'no-throw-literal': 'error',
	'no-undef': 'error',
	'no-undef-init': 'error',
	'no-unexpected-multiline': 'error',
	'no-unmodified-loop-condition': 'error',
	'no-unneeded-ternary': ['error', { defaultAssignment: false }],
	'no-unreachable': 'error',
	'no-unreachable-loop': 'error',
	'no-unsafe-finally': 'error',
	'no-unsafe-negation': 'error',
	'no-unused-expressions': [
		'error',
		{
			allowShortCircuit: true,
			allowTaggedTemplates: true,
			allowTernary: true,
		},
	],
	'no-unused-labels': 'error',

	'no-unused-vars': [
		'error',
		{
			args: 'none',
			caughtErrors: 'none',
			ignoreRestSiblings: true,
			vars: 'all',
		},
	],
	'no-use-before-define': [
		'error',
		{ classes: false, functions: false, variables: true },
	],
	'no-useless-backreference': 'error',

	'no-useless-catch': 'error',
	'no-useless-computed-key': 'error',
	'no-useless-concat': 'error',
	'no-useless-constructor': 'error',
	'no-useless-escape': 'error',

	'no-useless-rename': 'error',
	'no-useless-return': 'error',
	'no-var': 'error',
	'no-void': 'error',

	'no-warning-comments': [
		'off',
		{ terms: ['todo', 'fixme', 'xxx'], location: 'start' },
	],

	'no-with': 'error',
	'object-shorthand': [
		'error',
		'always',
		{
			avoidQuotes: true,
			ignoreConstructors: false,
		},
	],
	'one-var': ['error', { initialized: 'never' }],
	'prefer-arrow-callback': [
		'error',
		{
			allowNamedFunctions: false,
			allowUnboundThis: true,
		},
	],
	'prefer-const': [
		'error',
		{
			destructuring: 'all',
			ignoreReadBeforeAssign: true,
		},
	],
	'prefer-exponentiation-operator': 'error',
	'prefer-promise-reject-errors': 'error',
	'prefer-named-capture-group': 'off',

	'prefer-regex-literals': ['error', { disallowRedundantWrapping: true }],
	'prefer-rest-params': 'error',
	'prefer-spread': 'error',
	'prefer-template': 'error',
	radix: 'error',

	'sort-imports': [
		'error',
		{
			allowSeparatedGroups: false,
			ignoreCase: false,
			ignoreDeclarationSort: true,
			ignoreMemberSort: false,
			memberSyntaxSortOrder: ['none', 'all', 'multiple', 'single'],
		},
	],

	'symbol-description': 'error',
	'unicode-bom': ['error', 'never'],
	'use-isnan': [
		'error',
		{ enforceForIndexOf: true, enforceForSwitchCase: true },
	],
	'valid-typeof': ['error', { requireStringLiterals: true }],
	'vars-on-top': 'error',
	yoda: ['error', 'never'],

	// off
	'no-div-regex': 'off',
	'no-eq-null': 'off',
	'no-implicit-globals': 'off',
	'no-invalid-this': 'off',
	'no-useless-call': 'off',

	'no-console': ['warn'],
};

/** @type {import('eslint').Linter.FlatConfig} */
export default {
	name: 'custom:javascript',
	files: ['**/*.js'],
	languageOptions: {
		ecmaVersion: 2022,
		sourceType: 'module',
	},
	rules,
};
