import { dirname, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';

import { defineConfig } from 'vite';

import paths from 'vite-tsconfig-paths';

import { dependencies } from './package.json';

const file = fileURLToPath(import.meta.url);
const dir = dirname(file);

export default defineConfig({
	build: {
		emptyOutDir: true,
		target: 'esnext',
		outDir: 'lib',
		lib: {
			entry: resolve(dir, 'src/index.ts'),
			formats: ['es'],
			fileName: 'index',
		},
		rollupOptions: {
			external: [...Object.keys(dependencies)],
		},
	},
	plugins: [paths()],
});
