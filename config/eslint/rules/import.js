module.exports = {
	rules: {
		'import/no-extraneous-dependencies': [
			'error',
			{ includeInternal: true, includeTypes: true },
		],
		'import/extensions': [
			'error',
			'ignorePackages',
			{
				js: 'always',
				ts: 'always',
			},
		],
	},
};
