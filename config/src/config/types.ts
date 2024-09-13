import type { PluginOptions as ViteTscPathsOptions } from 'vite-tsconfig-paths';

export type InternalConfigOptions = {
	projectDir: string;
	srcFile: string;
	project: string;
};

export type ParsedConfigOptions = Omit<
	InternalConfigOptions,
	'project'
> & {
	outDir: string;
	srcDir: string;
	projects: NonNullable<ViteTscPathsOptions['projects']>;
};

export type ProjectConfigOptions = Partial<InternalConfigOptions>;
