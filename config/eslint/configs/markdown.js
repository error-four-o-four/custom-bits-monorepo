/** @type {import('eslint').Linter.FlatConfig} */
export default {
	name: 'custom:markdown',
	files: ['**/*.md'],
	processor: 'markdown/markdown',
};
