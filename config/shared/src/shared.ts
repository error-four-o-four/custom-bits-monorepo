import { dirname, resolve as nResolve } from 'node:path';
import { fileURLToPath } from 'node:url';

import { normalizePath } from 'vite';

const { __dirname } = getPath(import.meta.url);

export const rootDir = resolve(__dirname, '../../..');
export const publicDir = resolve(rootDir, './static');

export function resolve(...args: Parameters<typeof nResolve>) {
	return normalizePath(nResolve(...args));
}

export function getCwd() {
	return normalizePath(process.cwd());
}

export function getPath(url: string) {
	const __filename = fileURLToPath(new URL(url));
	return {
		__filename: normalizePath(__filename),
		__dirname: normalizePath(dirname(__filename)),
	};
}
