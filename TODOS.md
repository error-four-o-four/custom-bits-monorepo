# todo

### eslint

root: add md linter

use
```
// @ts-check
const { defineConfig } = require('eslint-define-config')
const pkg = require('./package.json')
/// <reference types="@eslint-types/typescript-eslint" />
/// <reference types="@eslint-types/import" />
```

### .vscode\

eslint.workingDirectories: [{ "mode": "auto" }]\
typescript.tsdk: node_modules path

### scripts

"prettier:check": "prettier . --check --ignore-unknown",
"prettier": "prettier . --write --ignore-unknown",
"lint:check": "eslint . --ext .ts src/",
"lint": "eslint . --ext .ts src/ --fix",

fix unresolved packages\
turborepo setup https://turbo.build/repo/docs/handbook/linting/eslint https://github.com/vercel/turbo/tree/main/examples