module.exports = {
  extends: ["@custom-bits/eslint-config-base"],
  overrides: [
    {
      extends: [
        "@custom-bits/eslint-config-base",
        "airbnb-typescript/base",
        "plugin:@typescript-eslint/recommended",
        "plugin:@typescript-eslint/recommended-type-checked",
        // 'plugin:import/recommended',
        // 'plugin:import/typescript',
        "plugin:promise/recommended",
        "prettier",
      ],
      files: ["**/*.ts"],
      parser: "@typescript-eslint/parser",
      parserOptions: {
        ecmaVersion: "latest",
        sourceType: "module",
        parser: "@typescript-eslint/parser",
      },
      plugins: ["@typescript-eslint", "promise", "prettier"],
      // plugins: ['@typescript-eslint', 'import', 'promise', 'prettier'],
    },
  ],
};
