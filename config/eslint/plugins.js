import pluginJson from 'eslint-plugin-jsonc';
import pluginMarkdown from 'eslint-plugin-markdown';

import * as pluginImport from 'eslint-plugin-i';

import pluginNode from 'eslint-plugin-n';
import pluginTypescript from '@typescript-eslint/eslint-plugin';
import pluginPrettier from 'eslint-plugin-prettier';

// @todo rename stuff
// https://github.com/antfu/eslint-config/blob/main/src/utils.ts#L13C4-L13C4
export default {
	jsonc: pluginJson,
	markdown: pluginMarkdown,
	import: pluginImport,
	n: pluginNode,
	'@typescript-eslint': pluginTypescript,
	prettier: pluginPrettier,
};
