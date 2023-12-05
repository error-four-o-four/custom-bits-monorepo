# Notes

[Vexip UI](https://www.vexipui.com/en-US/)

## Library Setup

*repos*
* [vite-vanilla-ts-lib-starter](https://github.com/kbysiec/vite-vanilla-ts-lib-starter/tree/master) 2023-08
* [Web Component (Vite+PostCSS)](https://stackblitz.com/edit/vitejs-vite-naxjyg?file=src%2Fce-alert%2Fce-alert.js)

*blogs*
* [Creating a TypeScript Package with Vite](https://onderonur.netlify.app/blog/creating-a-typescript-library-with-vite/) 2022-10
* [Create a Component Library Fast🚀(using Vite's library mode)](https://dev.to/receter/how-to-create-a-react-component-library-using-vites-library-mode-4lma) 2023-11\
uses React, vite-plugin-dts, inject-css

## Monorepo Setup

*repos*
* [create-node-app](https://github.com/Create-Node-App/create-node-app/tree/main)\
example monorepo which utilises shared eslint tsconfig (maintained)

*blogs*
* [How to Set Up a TypeScript Monorepo ](https://earthly.dev/blog/setup-typescript-monorepo/) 2023-11\
	monorepo configuration with npm
* [How to manage multiple Front-End projects with a monorepo](https://www.pixelmatters.com/blog/how-to-manage-multiple-front-end-projects-with-a-monorepo) 2023-08\
	monorepo configuration with turborepo, react, jest-dom, storybook, eslint, prettier
* [React Component Library with Vite and Deploy in NPM](https://articles.wesionary.team/react-component-library-with-vite-and-deploy-in-npm-579c2880d6ff) 2022-09\
	=> vite.config.ts, vite-tsconfig-paths, typeRoots
* [Configuring TypeScript Monorepo with ESLint, Prettier and WebStorm](https://valcker.medium.com/configuring-typescript-monorepo-with-eslint-prettier-and-webstorm-61a71f218104) 2021-02\
yarn workspace setup (server, client)
* [TypeScript project references](https://moonrepo.dev/docs/guides/javascript/typescript-project-refs)

*nx*
* [Easy Typescript Monorepo with Nx and NPM Workspaces](https://itnext.io/easy-typescript-monorepo-with-npm-workspaces-b271d81837e7)
* [@nx/vite](https://nx.dev/nx-api/vite)

## config

tsconfig.base.json examples\
[@vercel/style-guide](https://github.com/vercel/style-guide/blob/canary/typescript/tsconfig.base.json)\
[vitejs-monorepo-fullstack](https://github.com/zhengxs2018/vitejs-monorepo-fullstack/blob/main/tsconfig.base.json)\
[turborepo docs](https://turbo.build/repo/docs/handbook/linting/typescript#our-tsconfig-package)\
[turborepo with-vite](https://github.com/vercel/turbo/blob/main/examples/with-vite/packages/config-typescript/base.json)

### eslint

### Consider

~~[@rushstack/eslint-patch](https://www.npmjs.com/package/@rushstack/eslint-patch)~~\
~~[eslint-plugin-import-exports-imports-resolver](https://github.com/thepassle/eslint-plugin-import-exports-imports-resolver/)~~\
~~[eslint-plugin-i](https://github.com/un-es/eslint-plugin-i/tree/fork-release)~~\
[prettier-plugin-packagejson](https://www.npmjs.com/package/prettier-plugin-packagejson)

*how to*
* [moonrepo eslint example](https://moonrepo.dev/docs/guides/examples/eslint)

*eslint flat config*
* [Migration](https://eslint.org/docs/latest/use/configure/migration-guide)
* [Example Antfu](https://github.com/antfu/eslint-config) => .vscode
* [Example Abinnovision](https://github.com/abinnovision/js-commons/tree/010562d45b1486b4499dd594931bcfda9097598d/packages/eslint-config-base)
* [Guide I](https://medium.com/p/7bd1ca453129)
* [Guide II](https://allalmohamedlamine.medium.com/eslint-flat-config-and-new-system-an-ultimate-deep-dive-2023-46aa151cbf2b)
* [@eslint-typescript support](https://github.com/typescript-eslint/typescript-eslint/issues/7694)

*example repos which use shared configs:*
* [moonrepo](https://github.com/moonrepo/dev/tree/master/packages/eslint-config/src)
* [vercel style-guide](https://github.com/vercel/style-guide) 2023-11
* [nextjs-monorepo-example](https://github.com/belgattitude/nextjs-monorepo-example/tree/main/packages/eslint-config-bases)
* [ttos](https://github.com/ttoss/ttoss/blob/main/packages/eslint-config/config.js)

~~*tutorials/blogs/guides/issues*~~
* ~~[turborepo eslint](https://turbo.build/repo/docs/handbook/linting/eslint)~~
* ~~[eslint complains about typescript's path aliasing](https://stackoverflow.com/questions/57032522/eslint-complains-about-typescripts-path-aliasing)~~
* ~~[include paths are pulled from tsconfig.json, even when eslint config parserOptions.project is tsconfig.eslint.json](https://github.com/microsoft/vscode-eslint/issues/1690)~~

## typescript

* [What's new 5.2](https://www.typescriptlang.org/docs/handbook/release-notes/typescript-5-2.html)
* [cli Options](https://www.typescriptlang.org/docs/handbook/compiler-options.html)
* [tsconfig Reference](https://www.typescriptlang.org/tsconfig)
* [Modules - Theory](https://www.typescriptlang.org/docs/handbook/modules/theory.html#module-resolution)
* [Modules - Choosing Compiler Options](https://www.typescriptlang.org/docs/handbook/modules/guides/choosing-compiler-options.html)
* [Project References - Guidance](https://www.typescriptlang.org/docs/handbook/project-references.html#guidance)
* stackoverflow [Resolving packages directly to Typescript source in monorepo package.json files](https://stackoverflow.com/questions/74688869/resolving-packages-directly-to-typescript-source-in-monorepo-package-json-files) 2022-12
* [Centralized Recommendations for TSConfig bases](https://github.com/tsconfig/bases/tree/main)

## versioning

* [Maintaining a Monorepo: Strategies for Managing Dependencies and Updating Packages](https://ttoss.dev/blog/2023/02/23/maintaining-a-monorepo-strategies-for-managing-dependencies-and-updating-packages)