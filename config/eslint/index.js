import process from 'node:process';

import { addIgnores, addPlugins } from './settings.js';

import {
	json,
	sortPkgJson,
	sortTscJson,
	markdown,
	imports,
	node,
	typescript,
	prettier,
} from './configs/index.js';

const isInEditor = !!(
	(process.env.VSCODE_PID || process.env.JETBRAINS_IDE) &&
	!process.env.CI
);

isInEditor
	? console.log('linting ...')
	: console.log('executing lint command ...');

const lint = async (root, file) => {
	const configs = [
		addIgnores(),
		addPlugins(),
		json,
		sortPkgJson,
		sortTscJson,
		markdown,
		imports,
		node,
		typescript(root, file),
		prettier,
	];

	return configs;
};

export default lint;

// /** @type {import('eslint').Linter.FlatConfig[]} */
// export default async (root, file) => {
// 	return [
// 		{
// 			linterOptions: {
// 				reportUnusedDisableDirectives: true,
// 			},
// 		},
// 		// setup,
// 		plugins,
// 		// json,
// 		// sortPkgJson,
// 		// sortTscJson,
// 		// markdown,
// 		node,
// 		await typescript(root, file),
// 		prettier,
// 	];
// };
