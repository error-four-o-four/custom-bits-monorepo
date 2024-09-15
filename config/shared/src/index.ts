import { existsSync } from 'node:fs';
import { extname } from 'node:path';

import { getTsconfig } from 'get-tsconfig';
import type { UserConfigExport } from 'vite';

import { getPlugins } from './plugins.js';

import { sharedConfig, getCwd, resolve, rootDir } from './shared.js';

import type {
	ProjectConfigOptions,
	InternalConfigOptions,
	ParsedConfigOptions,
} from './types.js';

export { type ProjectConfigOptions };

export * from './shared.js';

const defaultProjectOptions: InternalConfigOptions = {
	projectDir: getCwd(),
	srcFile: 'index.ts',
	project: 'tsconfig.app.json',
};

export function getDevelopmentConfig(
	projectOptions?: ProjectConfigOptions
): UserConfigExport {
	const options = parseOptions(projectOptions);

	validateOptions(options);

	return {
		...sharedConfig,
		server: {
			// open: true
		},
		plugins: getPlugins(options),
	};
}

export function getBuildConfig(
	projectOptions?: ProjectConfigOptions
): UserConfigExport {
	const options = parseOptions(projectOptions);

	validateOptions(options);

	const { projectDir, outDir, srcDir, srcFile } = options;

	return {
		...sharedConfig,
		build: {
			outDir: resolve(projectDir, outDir),
			copyPublicDir: false,
			emptyOutDir: true,
			lib: {
				entry: resolve(projectDir, srcDir, srcFile),
				formats: ['es'],
				fileName: `${srcFile.replace(extname(srcFile), '')}.min`,
			},
			minify: true,
		},
		plugins: getPlugins(options),
	};
}

function parseOptions(
	projectOptions?: ProjectConfigOptions
): ParsedConfigOptions {
	const { projectDir, project, srcFile } = Object.assign(
		defaultProjectOptions,
		projectOptions ?? {}
	);

	const tsc = getTsconfig(projectDir, project);

	if (!tsc) {
		const dir = projectDir.replace(rootDir, '');
		console.warn(`Could not locate '${project}' in '${dir}'\n`);
		process.exit(1);
	}

	const outDir = tsc.config.compilerOptions?.outDir ?? './dist';
	const srcDir = tsc.config.compilerOptions?.rootDir ?? './src';

	return {
		projectDir,
		outDir,
		srcDir,
		srcFile,
		projects: [project],
	};
}

function validateOptions(options: ParsedConfigOptions) {
	const { projectDir, srcDir, srcFile } = options;

	let request = resolve(projectDir, 'index.html');

	if (!existsSync(request)) {
		console.warn(`Could not locate '${request.replace(rootDir, '')}'\n`);
		process.exit(1);
	}

	request = resolve(projectDir, srcDir, srcFile);

	if (!existsSync(request)) {
		console.warn(`Could not locate '${request.replace(rootDir, '')}'\n`);
		process.exit(1);
	}
}
