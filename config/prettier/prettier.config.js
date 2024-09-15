/**
 * @typedef {import('prettier-plugin-multiline-arrays').MultilineArrayOptions} MultilineOptions
 *
 * @typedef {import('prettier').Options} PrettierOptions
 * @type {PrettierOptions & MultilineOptions}
 */
export default {
	arrowParens: 'always',
	bracketSpacing: true,
	endOfLine: 'crlf',
	htmlWhitespaceSensitivity: 'css',
	insertPragma: false,
	requirePragma: false,
	singleAttributePerLine: true,
	bracketSameLine: true,
	printWidth: 80,
	proseWrap: 'preserve',
	quoteProps: 'as-needed',
	semi: true,
	singleQuote: true,
	useTabs: true,
	tabWidth: 2,
	trailingComma: 'es5',
	multilineArraysWrapThreshold: 3,
	plugins: [
		'prettier-plugin-multiline-arrays',
	],
	overrides: [
		{
			files: '*.json',
			options: {
				parser: 'jsonc',
				trailingComma: 'none',
				multilineArraysWrapThreshold: 1,
			},
		},
		{
			files: '*.html',
			options: {
				parser: 'html',
			},
		},
		{
			files: '*.css',
			options: {
				parser: 'css',
			},
		},
		{
			files: ['*.ts', '*.mts', '*.cts'],
			options: {
				parser: 'typescript',
			},
		},
	],
};
