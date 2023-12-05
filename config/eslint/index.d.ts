import type { Linter } from 'eslint';

interface Globs {
	browser: string[];
	node: string[];
}

interface Options {
	root: string;
	globs: Globs;
	tsconfig?: string;
}

type FlatConfig = Linter.FlatConfig;
type FlatConfigs = FlatConfig[];

type CustomizeFn = (config: FlatConfigs) => void;
type CreateLinterConfig = (options: Options) => Promise<FlatConfigs>;

export default CreateLinterConfig;
