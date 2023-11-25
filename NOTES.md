# Notes

## Sources

#### Library Setup

[Creating a TypeScript Package with Vite](https://onderonur.netlify.app/blog/creating-a-typescript-library-with-vite/)\
blog post 2022-10

[vite-vanilla-ts-lib-starter](https://github.com/kbysiec/vite-vanilla-ts-lib-starter/tree/master)\
repo 2023-08

#### Monorepo Setup
[create-node-app](https://github.com/Create-Node-App/create-node-app/tree/main)\
example monorepo which utilises shared eslint tsconfig (maintained)

[React Component Library with Vite and Deploy in NPM](https://articles.wesionary.team/react-component-library-with-vite-and-deploy-in-npm-579c2880d6ff)\
blog post 2022-09\
=> vite.config.ts, vite-tsconfig-paths, typeRoots

[How to manage multiple Front-End projects with a monorepo](https://www.pixelmatters.com/blog/how-to-manage-multiple-front-end-projects-with-a-monorepo)\
blog post 2023-08\
monorepo configuration with turborepo, react, jest-dom, storybook, eslint, prettier

[Configuring TypeScript Monorepo with ESLint, Prettier and WebStorm](https://valcker.medium.com/configuring-typescript-monorepo-with-eslint-prettier-and-webstorm-61a71f218104)\
blog post 2021-02\
yarn workspace setup (server, client)

## Consider

[eslint-plugin-i](https://github.com/un-es/eslint-plugin-i/tree/fork-release)\
eslint-import-resolver-node\
eslint-import-resolver-vite\
eslint-import-resolver-typescript\
Versioning

https://github.com/ttoss/ttoss/blob/main/packages/eslint-config/config.js\
https://stackoverflow.com/questions/57032522/eslint-complains-about-typescripts-path-aliasing\
https://github.com/microsoft/vscode-eslint/issues/1690\
https://github.com/airbnb/javascript\
https://www.npmjs.com/package/@rushstack/eslint-patch

https://www.typescriptlang.org/docs/handbook/modules/guides/choosing-compiler-options.html\
https://www.typescriptlang.org/docs/handbook/modules/theory.html#module-resolution

required configs\
demo => vite/ts app (https://github.com/vitejs/vite/blob/main/packages/create-vite/template-vanilla-ts/tsconfig.json)\
libs => vite/ts lib, node, build (https://github.com/zhengxs2018/vitejs-monorepo-fullstack/blob/main/libs/api-interfaces/tsconfig.json, https://github.com/csr632/test-vite/blob/lib-monorepo/packages/demos/vite.demos.ts)\

## todo

root: add md linter

.vscode\
eslint.workingDirectories: [{ "mode": "auto" }]\
typescript.tsdk: node_modules path

fix unresolved packages\
turborepo setup https://turbo.build/repo/docs/handbook/linting/eslint https://github.com/vercel/turbo/tree/main/examples
vercel style-guide https://github.com/vercel/style-guide