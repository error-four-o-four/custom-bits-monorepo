import path from 'node:path';
import { fileURLToPath } from 'node:url';

import createLintConfig from '@custom-bits/config/eslint';

const eslintFile = fileURLToPath(import.meta.url);
const tsconfigFile = './tsconfig.eslint.json';

const root = path.dirname(eslintFile);

export default createLintConfig({
	root,
	globs: {
		browser: ['demo/**/!(*.config).ts', 'libs/**/!(*.config).ts'],
		node: ['config/**/*.js', 'eslint.config.js', '**/*.config.ts'],
	},
	tsconfig: tsconfigFile,
});
