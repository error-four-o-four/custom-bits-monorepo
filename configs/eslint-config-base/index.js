module.exports = {
  env: {
    browser: true,
    es2021: true,
    node: true,
  },
  reportUnusedDisableDirectives: true,
  extends: ["airbnb-base", "prettier"],
  plugins: ["prettier"],
  // extends: ['airbnb-base', 'plugin:import/recommended', 'prettier'],
  // plugins: ['import', 'prettier'],
  rules: {
    "import/no-extraneous-dependencies": ["error", { devDependencies: true }],
  },
  // settings: {
  // 	'import/resolver': {
  // 		node: { extensions: ['.js'] },
  // 	},
  // },
};
