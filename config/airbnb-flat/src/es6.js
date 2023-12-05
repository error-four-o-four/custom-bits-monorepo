// Rules generated with script
export default {
	name: 'airbnb:es6',
	languageOptions: {
		parserOptions: {
			ecmaFeatures: {
				generators: false,
				objectLiteralDuplicateProperties: false,
			},
		},
		ecmaVersion: 6,
		sourceType: 'module',
	},
	rules: {
		'arrow-body-style': [
			'error',
			'as-needed',
			{ requireReturnForObjectLiteral: false },
		],
		'constructor-super': 'error',
		'no-class-assign': 'error',
		'no-const-assign': 'error',
		'no-dupe-class-members': 'error',
		'no-duplicate-imports': 'off',
		'no-new-symbol': 'error',
		'no-restricted-exports': [
			'error',
			{ restrictedNamedExports: ['default', 'then'] },
		],
		'no-restricted-imports': ['off', { paths: [], patterns: [] }],
		'no-this-before-super': 'error',
		'no-useless-computed-key': 'error',
		'no-useless-constructor': 'error',
		'no-useless-rename': [
			'error',
			{ ignoreDestructuring: false, ignoreImport: false, ignoreExport: false },
		],
		'no-var': 'error',
		'object-shorthand': [
			'error',
			'always',
			{ ignoreConstructors: false, avoidQuotes: true },
		],
		'prefer-arrow-callback': [
			'error',
			{ allowNamedFunctions: false, allowUnboundThis: true },
		],
		'prefer-const': [
			'error',
			{ destructuring: 'any', ignoreReadBeforeAssign: true },
		],
		'prefer-destructuring': [
			'error',
			{
				VariableDeclarator: { array: false, object: true },
				AssignmentExpression: { array: true, object: false },
			},
			{ enforceForRenamedProperties: false },
		],
		'prefer-numeric-literals': 'error',
		'prefer-rest-params': 'error',
		'prefer-spread': 'error',
		'prefer-template': 'error',
		'require-yield': 'error',
		'sort-imports': [
			'off',
			{
				ignoreCase: false,
				ignoreDeclarationSort: false,
				ignoreMemberSort: false,
				memberSyntaxSortOrder: ['none', 'all', 'multiple', 'single'],
			},
		],
		'symbol-description': 'error',
	},
};
