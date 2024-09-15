import { readdir, writeFile } from 'node:fs/promises';
import { readFileSync } from 'node:fs';

import prettier from 'prettier';

import { normalizePath } from 'vite';
import type { Plugin } from 'vite';

import camelcase from 'camelcase';

import { rootDir, resolve } from '../shared.js';
import type { ParsedConfigOptions } from '../types.js';

export function typedCssModules(options: ParsedConfigOptions): Plugin {
	const srcDirPath = resolve(options.projectDir, options.srcDir);
	const fileSelectorsMap = new Map<string, string[]>();

	let prettierConfig: prettier.Config;

	const getPrettierConfig = async (): Promise<prettier.Config> => {
		if (prettierConfig) {
			return prettierConfig;
		}

		const loadedConfig = await prettier.resolveConfig(
			resolve(srcDirPath, options.srcFile)
		);
		const parserConfig: prettier.Config = { parser: 'typescript' };

		if (!loadedConfig) {
			return (prettierConfig = parserConfig);
		}

		return (prettierConfig = Object.assign(loadedConfig, parserConfig));
	};

	return {
		name: 'css-module-declarations',
		apply: 'serve',
		async configureServer() {
			const paths = await getCssModulePaths(srcDirPath);

			paths.map((file) => {
				const content = readFileSync(file, 'utf-8');
				const selectors = parseCssContent(content);
				fileSelectorsMap.set(file, selectors);
			});

			const prettierConfig = await getPrettierConfig();

			for (const [file, classes] of fileSelectorsMap.entries()) {
				writeCssDtsModule(file, classes, prettierConfig);
			}
		},
		async handleHotUpdate({ modules, file, read }) {
			if (!file.endsWith('module.css')) return;

			const content = await read();
			const previous = fileSelectorsMap.get(file);
			const selectors = parseCssContent(content);

			if (
				previous &&
				selectors.length === previous.length &&
				selectors.every((selector) => previous.includes(selector))
			) {
				return;
			}

			const prettierConfig = await getPrettierConfig();

			await writeCssDtsModule(file, selectors, prettierConfig);
			fileSelectorsMap.set(file, selectors);

			console.log('updated %o', file.replace(rootDir, ''));

			return modules;
		},
	};
}

async function getCssModulePaths(dir: string) {
	const options: Parameters<typeof readdir>[1] = {
		recursive: true,
		withFileTypes: true,
	};

	return readdir(dir, options).then((dirents) =>
		dirents
			.filter((dirent) => dirent.isFile() && dirent.name.endsWith('module.css'))
			.map((dirent) => normalizePath(`${dirent.path}/${dirent.name}`))
	);
}

function parseCssContent(content: string) {
	// https://regex101.com/r/gIrhSD/1
	const commentRegEx = /\/\/.*?$|\/\*[\s\S]*?\*\//gm;

	const stripped = content
		.split('\n')
		.filter((line) => !line.trim().startsWith('//'))
		.join('\n')
		.replaceAll(commentRegEx, '');

	// https://regex101.com/r/5K1Xfp/1
	const selectorRegEx = /(?<=^|[^\S\r\n]+|\}|\w)\.\D[\w-]+/gm;

	const matches = Array.from(stripped.matchAll(selectorRegEx)).map((match) =>
		camelcase(match[0].substring(1))
	);

	return Array.from(new Set(matches));
}

async function writeCssDtsModule(
	source: string,
	input: string[],
	options: prettier.Config
) {
	const target = `${source}.d.ts`;
	const content = await createCssDtsContent(input);
	const formatted = await prettier.format(content, options);
	return writeFile(target, formatted, 'utf-8');
}

async function createCssDtsContent(input: string[]) {
	/** @todo EOL */
	const EOL = '\n';
	const PRE = '// Generated automatically, do not edit';

	if (input.length === 0) {
		return [PRE, 'export {};'].join(EOL) + EOL;
	}

	return (
		[
			PRE,
			'declare const styles: {',
			...input.map((el) => `\treadonly '${el}': string;`),
			'};',
			'export default styles;',
		].join(EOL) + EOL
	);
}
