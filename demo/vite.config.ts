import { dirname, resolve } from 'path';
import { fileURLToPath } from 'node:url';

import { defineConfig } from 'vite';

import paths from 'vite-tsconfig-paths';

const file = fileURLToPath(import.meta.url);
const dir = dirname(file);

export default defineConfig({
	plugins: [paths()],
	cacheDir: resolve(dir, '../node_modules/.vite/demo'),
});
