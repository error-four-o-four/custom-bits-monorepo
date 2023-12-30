import type { Linter } from 'eslint';

interface Environment {
	browser: string[];
	node: string[];
}

export interface Options {
	root: string;
	env: Environment;
	project: string | string[];
}

type CreateLinterConfig = (options: Options) => Promise<Linter.FlatConfig[]>;

export default CreateLinterConfig;
