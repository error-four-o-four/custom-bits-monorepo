import defineConfig from 'eslint-config-airbnb-flat/base';

import json from './configs/json.js';

import { setBrowser, setNode } from './configs/environment.js';

const ignores = {
	ignores: [
		'**/node_modules/*',
		'**/.vscode/*',
		'**/dist/',
		'**/lib/*',
		'**/package-lock.json',
	],
};

function adjustMixedConfig(source) {
	/** @type {import('eslint').Linter.FlatConfig} */
	const target = { ...source };

	// remove node globals
	delete target.languageOptions.globals;

	// remove node rules
	const filtered = Object.fromEntries(
		Object.entries(target.rules)
			.filter(([name]) => !name.startsWith('node')),
	);

	// use extensions
	const imports = {
		'import/extensions': [
			'error',
			'ignorePackages',
			{ js: 'always' },
		],
	};

	// adjust indentation
	const style = {
		'stylistic/array-element-newline': [
			'warn', { multiline: true, minItems: 3 },
		],
		'stylistic/indent': ['warn', 'tab'],
		'stylistic/linebreak-style': ['warn', 'windows'],
		'stylistic/max-len': [
			'warn', { code: 80, tabWidth: 2, ignoreComments: true },
		],
		'stylistic/no-tabs': 0,
	};

	target.rules = {
		...filtered,
		...imports,
		...style,
	};

	return target;
}

function adjustTypescriptConfig(source, { root, project }) {
	/** @type {import('eslint').Linter.FlatConfig} */
	const target = { ...source };

	target.languageOptions.parserOptions.tsconfigRootDir = root;
	target.languageOptions.parserOptions.project = project;

	const resolver = source.settings['import/resolver'];
	resolver.typescript.alwaysTryTypes = true;
	resolver.typescript.project = project;

	target.settings['import/resolver'] = resolver;

	target.rules['import/extensions'] = [
		'error',
		'ignorePackages',
		{ ts: 'always' },
	];

	return target;
}

export default async (options) => {
	/** @type {import('./index.d.ts').Options} */
	const { env } = options;

	/** @type {import('eslint').Linter.FlatConfig[]} */
	const airbnb = await defineConfig();

	const config = adjustMixedConfig(airbnb[0]);
	const javascript = airbnb[1];
	const typescript = adjustTypescriptConfig(airbnb[2], options);

	return [
		ignores,
		config,
		javascript,
		typescript,
		setBrowser(env.browser),
		setNode(env.node),
		...json,
	];
};

// /** @type {import('./index.d.ts').CustomizeFn} */
// const addMarkdownConfigs = (array) => {
// 	const pluginMarkdown = createPlugin(plugins.keys.md);
// 	array.push(pluginMarkdown, configs.markdown);
// };

// /** @type {import('./index.d.ts').CustomizeFn} */
// const addJavacript = (array) => {
// 	array.push(configs.javascript);
// };

// /**
//  *
//  * @param {import('./index.d.ts').FlatConfigs} array
//  * @param {string} root
//  * @param {string} tsconfig
//  */

// const addTypescript = (array, root, tsconfig) => {
// 	const pluginTypescript = createPlugin(plugins.keys.ts);
// 	const configTypescript = Object.assign(configs.typescript, {
// 		languageOptions: {
// 			...configs.typescript.languageOptions,
// 			parser: parserTypescript,
// 			parserOptions: {
// 				tsconfigRootDir: root,
// 				project: tsconfig,
// 			},
// 		},
// 	});
// 	// console.log(configTypescript);
// 	array.push(pluginTypescript, configTypescript);
// };

// /** @type {import('./index.d.ts').CustomizeFn} */
// const addImportsConfigs = (array) => {
// 	const pluginImports = createPlugin(plugins.keys.i);
// 	// console.log(pluginImports);
// 	array.push(pluginImports, configs.imports);
// };

// /**
//  * @param {import('./index.d.ts').FlatConfigs} array
//  * @param {import('./index.d.ts').Globs} globs
//  * */
// const addNodeConfigs = (array, globs) => {
// 	const pluginNode = createPlugin(plugins.keys.n);
// 	const configNode = Object.assign(configs.node, {
// 		files: globs.node,
// 		ignores: globs.browser,
// 	});
// 	// console.log(configNode);
// 	array.push(pluginNode, configNode);
// };

// /**
//  * @param {import('./index.d.ts').FlatConfigs} array
//  * @param {import('./index.d.ts').Globs} globs
//  * */
// const addBrowserConfigs = (array, globs) => {
// 	const configBrowser = Object.assign(configs.browser, {
// 		files: globs.browser,
// 		ignores: globs.node,
// 	});

// 	// console.log(configBrowser);
// 	array.push(configBrowser);
// };

// /** @type {import('./index.d.ts').CustomizeFn} */
// const addPrettier = (array) => {
// 	const pluginPrettier = createPlugin(plugins.keys.p);
// 	// console.log(configPrettier);
// 	array.push(pluginPrettier, configs.prettier);
// };

// /** @type {import('./index.d.ts').CreateLinterConfig} */
// export default async (options) => {
// 	const { root, globs, tsconfig } = options;
// 	getEnv()
// 		? console.log('linting ...')
// 		: console.log('executing lint command ...');
// 	const configs = [];
// 	addBaseConfigs(configs);
// 	addJsonConfigs(configs);
// 	addMarkdownConfigs(configs);
// 	addJavacript(configs);
// 	addTypescript(configs, root, tsconfig);
// 	addImportsConfigs(configs);
// 	addNodeConfigs(configs, globs);
// 	addBrowserConfigs(configs, globs);
// 	addPrettier(configs);
// 	return configs;
// };
