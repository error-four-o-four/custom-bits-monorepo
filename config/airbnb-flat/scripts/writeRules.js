import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath, pathToFileURL } from 'node:url';

import prettier from 'prettier';

import { Linter } from 'eslint';
import { FlatCompat } from '@eslint/eslintrc';

import airbnb from 'eslint-config-airbnb-base';

const filename = fileURLToPath(import.meta.url);
const root = path.dirname(path.resolve(filename, '../../..'));

const prettierRules = JSON.parse(
	fs.readFileSync(
		fileURLToPath(new URL('../../prettier/index.json', import.meta.url))
	)
);

const promisedConfigs = airbnb.extends.map((item) => {
	const name = path.basename(item, '.js');
	const file = pathToFileURL(item);

	return new Promise((resolve) => {
		import(file).then((module) => {
			resolve([name, module.default]);
		});
	});
});

const compat = new FlatCompat({
	baseDirectory: root,
});

const convertToFlat = (config) =>
	compat.config(config).reduce((all, data) => Object.assign(all, data), {});

const rawRules = new Linter().getRules();

const deprecatedRules = [];

const deleteDeprecatedRules = (config) => {
	if (!Object.hasOwn(config, 'rules')) {
		return config;
	}

	const notFound = [];

	for (const rule of Object.keys(config.rules)) {
		const rawRule = rawRules.get(rule);

		if (!rawRule) {
			notFound.push(rule);
			continue;
		}

		if (rawRule && rawRule.meta.deprecated) {
			deprecatedRules.push(rule);
			delete config.rules[rule];
		}
	}

	Boolean(notFound.length) &&
		console.log(`could not find ${notFound.length} rules.`);

	return config;
};

const writeDeprecatedLog = async () => {
	let string = `# deprecated rules\n`;
	string += `Log generated with script\n\n`;

	for (const rule of deprecatedRules) {
		string += `\`${rule}\` is deprecated`;

		const { meta } = rawRules.get(rule);
		if (!meta) {
			string += ' (Could not find any meta data)\n\n';
			continue;
		}

		const url = meta.docs.url || null;
		string += url ? ` - ${url}\n\n` : `\n\n`;
	}

	const data = await prettier.format(string, {
		parser: 'markdown',
		// ...prettierRules,
	});

	const file = fileURLToPath(new URL(`../deprecated.log.md`, import.meta.url));

	fs.writeFileSync(file, data);
	console.log('Written data to', file);
};

const writeConfig = async (name, config) => {
	let string = `// Rules generated with script\n`;
	string += `export default ${JSON.stringify(config)}`;

	const data = await prettier.format(string, {
		parser: 'espree',
		...prettierRules,
	});

	const file = fileURLToPath(new URL(`../src/${name}.js`, import.meta.url));

	fs.writeFileSync(file, data);
	console.log('Written data to', file);
};

const resolvedConfigs = await Promise.all(promisedConfigs);

resolvedConfigs.forEach(([name, data]) => {
	let config = convertToFlat(data);
	// console.log(name);
	config = deleteDeprecatedRules(config);
	config = Object.assign({
		name: `airbnb:${name}`,
		...config,
	});

	writeConfig(name, config);
});

writeDeprecatedLog();
