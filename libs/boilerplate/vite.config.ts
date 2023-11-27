import { defineConfig } from 'vite';
import { resolve } from 'path';

import paths from 'vite-tsconfig-paths';

import { dependencies } from './package.json';

export default defineConfig({
	build: {
		emptyOutDir: true,
		target: 'esnext',
		outDir: 'lib',
		lib: {
			entry: resolve(__dirname, 'src/index.ts'),
			formats: ['es'],
			fileName: 'index',
		},
		rollupOptions: {
			external: [...Object.keys(dependencies)],
		},
	},
	plugins: [paths()],
});
