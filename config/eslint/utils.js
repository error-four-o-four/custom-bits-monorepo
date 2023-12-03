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
