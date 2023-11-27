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

use del-cli\
=> .tsbuildinfo\
=> "build:clean"