import path from 'node:path';
import { fileURLToPath } from 'node:url';

import createLintConfig from '@custom-bits/config/eslint';

const eslintFile = fileURLToPath(import.meta.url);
const tsconfigFile = './tsconfig.eslint.json';

const root = path.dirname(eslintFile);

export default createLintConfig(root, tsconfigFile);
