export namespace Mixin {
	export abstract class Abstract extends HTMLElement {
		static readonly observedAttributes: readonly unknown[];

		abstract readonly changedAttributes: Partial<Record<PropertyKey, [unknown, unknown]>>;
		abstract adoptedCallback?(): void;
		abstract connectedCallback(): void;
		abstract disconnectedCallback?(): void;
		abstract attributeChangedCallback?(name: string, prev: string | null, next: string | null): void;
	}

	export type AbstractCtor = typeof Abstract;
	export type AbstractCtorKey = keyof AbstractCtor;
	export type Instance = InstanceType<AbstractCtor>;
}

const validAttributeTypes = ['string', 'number', 'boolean'] as const;

export const attributeConstructorDict = Object.freeze({
	string: String,
	number: Number,
	boolean: Boolean
}) satisfies Readonly<Record<Attribute.Typeof, () => string | number | boolean>>;

type ConstructorDict = typeof attributeConstructorDict;

export namespace Attribute {
	export type Typeof = (typeof validAttributeTypes)[number];

	export type Types = {
		[K in Typeof]: ReturnType<ConstructorDict[K]>
	}[Typeof];

	export type Constructor = {
		[K in Typeof]: ConstructorDict[K]
	}[Typeof];

	export type Values<V extends NodeValue = NodeValue> = ReadonlyArray<V>;

	export type StateValue = Extract<Types, boolean>;
	export type NodeValue = Exclude<Types, boolean>;

	export type Schema = Attribute.Constructor | Attribute.Values<Attribute.NodeValue>;

	export type BaseConfig<C extends Attribute.Constructor> = {
		constructor: C;
	};

	export type ConfigWithValues<T extends NodeValue> = {
		constructor: InferConstructor<T>;
		values: ReadonlyArray<T>;
	};

	export type InferConstructor<T extends Types> = (
		T extends boolean
		? BooleanConstructor
		: (
			T extends string
			? StringConstructor
			: (T extends number
				? NumberConstructor
				: never
			)
		)
	);

	export type ParsedSchema<T extends Attribute.Schema> = (
		T extends Attribute.Constructor
		? Attribute.BaseConfig<T>
		: (
			T extends Attribute.Values<infer V>
			? (
				V extends Attribute.NodeValue
				? Attribute.ConfigWithValues<V>
				: never
			)
			: never
		)
	);
}


export function isValidConstructor(input: unknown): input is Attribute.Constructor {
	return (
		typeof input === 'function' &&
		typeof input() in attributeConstructorDict
	);
}

export function isValidValuesArray(input: unknown): input is Attribute.Values<Attribute.NodeValue> {
	if (
		!Array.isArray(input) ||
		input.length === 0) {
		return false;
	}

	const type = typeof input[0];

	return (
		(type === 'string' || type === 'number') &&
		input.every(value => typeof value === type)
	);
}

// #####

export type CustomConfig = Record<string, Attribute.Schema>;