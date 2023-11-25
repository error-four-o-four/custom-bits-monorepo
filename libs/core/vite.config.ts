import { defineConfig } from 'vite';
import { resolve } from 'path';

import dts from 'vite-plugin-dts';

import { name } from './package.json';

export default defineConfig({
	plugins: [
		dts({
			include: ['src/'],
		}),
	],
	build: {
		lib: {
			entry: resolve(__dirname, 'src/index.ts'),
			name: name.split('/')[1],
			fileName: (format) =>
				format === 'es' ? `index.js` : `index.${format}.js`,
		},
	},
});
