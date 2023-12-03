import { resolve } from 'node:path';
import { defineConfig } from 'vite';

// @todo import from config utils
const onError = () => ({
	name: 'handleError',
	buildEnd: (error?: Error) => {
		if (error) {
			console.error('Build failed:', error);
			process.exit(1);
		}
	},
});

export default defineConfig({
	cacheDir: resolve(__dirname, '../../node_modules/.vite/core'),
	build: {
		emptyOutDir: true,
		target: 'esnext',
		outDir: 'lib',
		lib: {
			entry: resolve(__dirname, 'src/index.ts'),
			formats: ['es'],
			fileName: 'index',
		},
	},
	optimizeDeps: {
		include: [],
	},
	plugins: [
		onError(),
		// dts({
		// 	rollupTypes: true,
		// 	tsconfigPath: resolve(__dirname, 'tsconfig.build.json'),
		// }),
	],
});

// export default defineConfig((config) => {
// 	console.log(config.mode === 'production');
// 	return {
// 		build: {
// 			emptyOutDir: true,
// 			target: 'esnext',
// 			outDir: 'lib',
// 			lib: {
// 				entry: resolve(__dirname, 'src/index.ts'),
// 				formats: ['es'],
// 				fileName: 'index',
// 			},
// 			minify: config.mode === 'production' ? 'esbuild' : false,
// 		},
// 		optimizeDeps: {
// 			include: [],
// 		},
// 		plugins: [
// 			onError(),
// 			dts({
// 				staticImport: true,
// 				rollupTypes: true,
// 				declarationOnly: true,
// 				tsconfigPath: resolve(__dirname, 'tsconfig.build.json'),
// 			}),
// 		],
// 	};
// });
