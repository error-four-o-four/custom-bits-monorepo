import { dirname } from 'node:path';
import { fileURLToPath } from 'node:url';

import createConfig from '@custom-bits/config/eslint';

const root = dirname(fileURLToPath(import.meta.url));

console.info('Linting ...');

export default createConfig({
	root,
	env: {
		browser: ['demo/**/!(*.config).ts', 'libs/**/!(*.config).ts'],
		node: [
			'config/**/*.js',
			'eslint.config.js',
			'**/*.config.ts',
		],
	},
	project: [
		'tsconfig.eslint.json',
		'demo/tsconfig.json',
		'demo/tsconfig.node.json',
		'libs/**/tsconfig.json',
		'libs/**/tsconfig.node.json',
	],
});
