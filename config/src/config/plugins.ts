import viteTscPaths from 'vite-tsconfig-paths';
import type { UserConfig } from "vite";

import { typedCssModules } from './plugins/typedCssModules.js';
import type { ParsedConfigOptions } from './types.js';

export function getPlugins(
	options: ParsedConfigOptions
): NonNullable<UserConfig['plugins']> {
	const { projects } = options;

	return [
		viteTscPaths({ projects }),
		typedCssModules(options)
	];
}

// https://dev.to/receter/how-to-create-a-react-component-library-using-vites-library-mode-4lma

// @todo https://github.com/vitejs/vite/issues/1579#issuecomment-1483756199
// https://dev.to/rezamoosavidweb/css-module-type-vite-5hlm#introducing-a-time-saving-vite-plugin