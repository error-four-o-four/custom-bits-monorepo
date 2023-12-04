import { dirname, resolve } from 'path';
import { fileURLToPath } from 'node:url';

import { defineConfig } from 'vite';

import paths from 'vite-tsconfig-paths';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

export default defineConfig({
	plugins: [paths()],
	cacheDir: resolve(__dirname, '../node_modules/.vite/demo'),
});
