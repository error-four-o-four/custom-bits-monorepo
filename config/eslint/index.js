import parserTypescript from '@typescript-eslint/parser';

import plugins from './plugins.js';
import configs from './configs/index.js';

import { GLOB_EXCLUDE, getEnv } from './utils.js';

// const isEditorEnv = getEnv();

/** @type {import('./index.d.ts').CustomizeFn} */
const addBaseConfigs = (array) => {
	const configIgnores = {
		ignores: GLOB_EXCLUDE,
	};

	const configLinter = {
		name: 'custom:linter',
		linterOptions: {
			reportUnusedDisableDirectives: true,
		},
	};

	array.push(configIgnores, configLinter);
};

const createPlugin = (key) => ({
	name: `custom:plugin:${key}`,
	plugins: Object.fromEntries([plugins.entries[key]]),
});

/** @type {import('./index.d.ts').CustomizeFn} */
const addJsonConfigs = (array) => {
	const pluginJson = createPlugin(plugins.keys.json);
	array.push(
		pluginJson,
		configs.json,
		configs.sortPkgJson,
		configs.sortTscJson
	);
};

/** @type {import('./index.d.ts').CustomizeFn} */
const addMarkdownConfigs = (array) => {
	const pluginMarkdown = createPlugin(plugins.keys.md);
	array.push(pluginMarkdown, configs.markdown);
};

/** @type {import('./index.d.ts').CustomizeFn} */
const addJavacript = (array) => {
	array.push(configs.javascript);
};

/**
 *
 * @param {import('./index.d.ts').FlatConfigs} array
 * @param {string} root
 * @param {string} tsconfig
 */
const addTypescript = (array, root, tsconfig) => {
	const pluginTypescript = createPlugin(plugins.keys.ts);
	const configTypescript = Object.assign(configs.typescript, {
		languageOptions: {
			...configs.typescript.languageOptions,
			parser: parserTypescript,
			parserOptions: {
				tsconfigRootDir: root,
				project: tsconfig,
			},
		},
	});

	// console.log(configTypescript);
	array.push(pluginTypescript, configTypescript);
};

/** @type {import('./index.d.ts').CustomizeFn} */
const addImportsConfigs = (array) => {
	const pluginImports = createPlugin(plugins.keys.i);
	// console.log(pluginImports);
	array.push(pluginImports, configs.imports);
};

/**
 * @param {import('./index.d.ts').FlatConfigs} array
 * @param {import('./index.d.ts').Globs} globs
 * */
const addNodeConfigs = (array, globs) => {
	const pluginNode = createPlugin(plugins.keys.n);
	const configNode = Object.assign(configs.node, {
		files: globs.node,
		ignores: globs.browser,
	});

	// console.log(configNode);
	array.push(pluginNode, configNode);
};

/**
 * @param {import('./index.d.ts').FlatConfigs} array
 * @param {import('./index.d.ts').Globs} globs
 * */
const addBrowserConfigs = (array, globs) => {
	const configBrowser = Object.assign(configs.browser, {
		files: globs.browser,
		ignores: globs.node,
	});

	// console.log(configBrowser);
	array.push(configBrowser);
};

/** @type {import('./index.d.ts').CustomizeFn} */
const addPrettier = (array) => {
	const pluginPrettier = createPlugin(plugins.keys.p);
	// console.log(configPrettier);
	array.push(pluginPrettier, configs.prettier);
};

/** @type {import('./index.d.ts').CreateLinterConfig} */
export default async (options) => {
	const { root, globs, tsconfig } = options;

	getEnv()
		? console.log('linting ...')
		: console.log('executing lint command ...');

	const configs = [];

	addBaseConfigs(configs);
	addJsonConfigs(configs);
	addMarkdownConfigs(configs);

	addJavacript(configs);
	addTypescript(configs, root, tsconfig);

	addImportsConfigs(configs);
	addNodeConfigs(configs, globs);
	addBrowserConfigs(configs, globs);

	addPrettier(configs);

	return configs;
};
