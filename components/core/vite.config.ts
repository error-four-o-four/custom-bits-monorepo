import type { UserConfigFn } from 'vite';

import { getDevelopmentConfig, getBuildConfig } from '@custom-bits/config';

export default <UserConfigFn>function ({ mode }) {
	return mode === 'development' ? getDevelopmentConfig() : getBuildConfig();
};
