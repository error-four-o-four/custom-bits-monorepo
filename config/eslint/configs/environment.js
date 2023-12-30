import plugin from 'eslint-plugin-n';
import globals from 'globals';

export function setBrowser(files) {
	return {
		files,
		languageOptions: {
			globals: {
				...globals.es2021,
				...globals.browser,
			},
		},
	};
}

const recommended = plugin.configs['flat/recommended-module'];

export function setNode(files) {
	return {
		files,
		languageOptions: recommended.languageOptions,
		rules: {
			...Object.fromEntries(
				Object.entries(recommended.rules)
					.map(([name, value]) => [`node/${name.split('/')[1]}`, value]),
			),
			'no-console': 0,
			'node/no-unpublished-import': 0,
			'node/no-unsupported-features': 0,
			'node/no-unsupported-features/es-syntax': ['error'],
		},
	};
}
