import plugins from './plugins.js';

export { default as parserTypescript } from '@typescript-eslint/parser';

export const ignores = ['node_modules/**', '**/dist/**', '**/lib/**'];

/** @type {import('eslint').Linter.FlatConfig} */
export const addIgnores = () => ({
	name: 'custom:ignores',
	ignores,
});

export const addPlugins = () => ({
	linterOptions: {
		reportUnusedDisableDirectives: true,
	},
	plugins,
});

// export const interopDefault = async (m) => {
// 	const resolved = await m;
// 	return resolved.default || resolved;
// };

// export const addPlugins = async () => {
// 	const [pluginJc, pluginMd, pluginI, pluginN, pluginTs, pluginP] =
// 		await Promise.all(
// 			[
// 				'eslint-plugin-jsonc',
// 				'eslint-plugin-markdown',
// 				'eslint-plugin-i',
// 				'eslint-plugin-n',
// 				'@typescript-eslint/eslint-plugin',
// 				'eslint-plugin-prettier',
// 			].map((k) => interopDefault(import(k)))
// 		);

// 	const plugins = {
// 		jsonc: pluginJc,
// 		markdown: pluginMd,
// 		import: pluginI,
// 		n: pluginN,
// 		'@typescript-eslint': pluginTs,
// 		prettier: pluginP,
// 	};

// 	return {
// 		linterOptions: {
// 			reportUnusedDisableDirectives: true,
// 		},
// 		plugins,
// 	};
// };
