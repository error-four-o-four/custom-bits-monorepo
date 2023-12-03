import { resolve } from 'path';
import { defineConfig } from 'vite';

import paths from 'vite-tsconfig-paths';

export default defineConfig({
	plugins: [paths()],
	cacheDir: resolve(__dirname, '../node_modules/.vite/demo'),
});
