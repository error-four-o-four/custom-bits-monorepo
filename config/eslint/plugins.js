import pluginJson from 'eslint-plugin-jsonc';
import pluginMarkdown from 'eslint-plugin-markdown';

import * as pluginImport from 'eslint-plugin-i';

import pluginNode from 'eslint-plugin-n';
import pluginTypescript from '@typescript-eslint/eslint-plugin';
import pluginPrettier from 'eslint-plugin-prettier';

const keys = {
	json: 'jsonc',
	md: 'markdown',
	i: 'import',
	n: 'n',
	ts: '@typescript-eslint',
	p: 'prettier',
};

// @todo rename stuff
// https://github.com/antfu/eslint-config/blob/main/src/utils.ts#L13C4-L13C4
const plugins = {
	keys,
	entries: {
		[keys.json]: [keys.json, pluginJson],
		[keys.md]: [keys.md, pluginMarkdown],
		[keys.i]: [keys.i, pluginImport],
		[keys.n]: [keys.n, pluginNode],
		[keys.ts]: [keys.ts, pluginTypescript],
		[keys.p]: [keys.p, pluginPrettier],
	},
};

export default plugins;

// const { keys, entries } = plugins;
// console.log(entries);
// console.log(Object.fromEntries([entries[keys.json]]));
