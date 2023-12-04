import process from 'node:process';

export const findRules = (local, rules) => {
	for (const rule of Object.keys(local)) {
		if (rule in rules) {
			console.log('found rule:', rule);

			if (local[rule] !== rules[rule]) {
				console.log(`\timported rule is set to:\n\t\t${rules[rule]}`);
				console.log(`\tlocal rule is set to:\n\t\t${local[rule]}`);
			}
		}
	}
	// console.log(rules);
};

export const getEnv = () =>
	Boolean(
		(process.env.VSCODE_PID || process.env.JETBRAINS_IDE) && !process.env.CI
	);

export const GLOB_EXCLUDE = [
	'**/node_modules/*',
	'**/dist/*',
	'**/lib/*',
	'**/package-lock.json',
];

export const GLOB_CONFIGS = ['**/*.config.{j,t}s'];

// export const interopDefault = async (m) => {
// 	const resolved = await m;
// 	return resolved.default || resolved;
// };
