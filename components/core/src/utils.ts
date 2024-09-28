const {
	defineProperty,
	hasOwn,
	getOwnPropertyNames,
	getOwnPropertySymbols,
	getOwnPropertyDescriptor,
	getPrototypeOf,
	setPrototypeOf,
} = Object;

const getOwnProperties = function <T extends object>(o: T) {
	return [...getOwnPropertyNames(o), ...getOwnPropertySymbols(o)] as (keyof T)[];
};

export {
	defineProperty,
	hasOwn,
	getOwnProperties,
	getOwnPropertyNames,
	getOwnPropertySymbols,
	getOwnPropertyDescriptor,
	getPrototypeOf,
	setPrototypeOf
};