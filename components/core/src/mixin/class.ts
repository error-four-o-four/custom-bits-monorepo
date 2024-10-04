import type { ExtendedClass } from "../types/basic.ts";
import type { Attribute, CustomConfig, } from "./config.ts";

import {
	attributeConstructorDict,
	isValidConstructor,
	isValidValuesArray,
	Mixin,
} from "./config.ts";

// http://www.bracha.org/oopsla90.pdf
// https://javascript.info/mixins
// https://www.typescriptlang.org/docs/handbook/mixins.html
// https://typescript-handbook.netlify.app/reference/mixins
// https://lit.dev/docs/composition/mixins/
// https://open-wc.org/docs/development/dedupe-mixin/
// https://github.com/open-wc/open-wc/blob/master/packages/dedupe-mixin/src/dedupeMixin.js

export default function HTMLMixin<
	Schemas extends CustomConfig
>(schemas: Schemas) {
	type EnumerableProperties = InferProperties<Schemas>;
	type ExtendedMixinClass = ExtendedClass<typeof MixinClass, EnumerableProperties>;

	class MixinClass extends Mixin.Abstract {
		declare public static readonly observedAttributes: (keyof Schemas)[];

		// Initializer block
		static {
			const attributeKeys = Object.keys(schemas) as ReadonlyArray<keyof Schemas>;

			// define static props
			Object.defineProperty(this, 'observedAttributes' satisfies Mixin.AbstractCtorKey, {
				get() {
					return attributeKeys;
				},
				enumerable: true,
				configurable: false
			});

			// define reflected attributes of prototype
			for (const key of attributeKeys) {
				const config = schemas[key];

				if (typeof key !== 'string') {
					/** @todo */
					continue;
				};

				const constructor = getAttributeConstructor(config);
				const values = Array.isArray(config) ? config : undefined;
				const descriptor = createPropertyDescriptor(key, constructor, values);

				Object.defineProperty(this.prototype, key, descriptor);
			}
		}

		static async define(tag: string): Promise<void> {
			globalThis.customElements.define(tag, this);

			await globalThis.customElements.whenDefined(tag);
		}

		declare changedAttributes: Partial<Record<keyof Schemas, [unknown, unknown]>>;

		constructor() {
			super();
			this.changedAttributes = {};
		}

		override adoptedCallback(): void {
			console.log('adopted %o', this.localName);
		}

		override connectedCallback(): void {
			console.log('connected %o', this.localName);

			for (const key in this.changedAttributes) {
				const values = this.changedAttributes[key];
				if (!Array.isArray(values)) continue;

				const [prev, next] = values;

				if (prev === next) continue;

				Reflect.set(this, key, next);
			}
		}

		override disconnectedCallback(): void {
			console.log('disconnected %o', this.localName);
		}

		override attributeChangedCallback(name: keyof Schemas, prev: string | null, next: string | null): void {
			console.log('attributeChanged', this, name, prev, next);
		}
	};

	// Anti Pattern
	return MixinClass as unknown as ExtendedMixinClass;
}


function getAttributeConstructor<
	T extends Attribute.Schema
>(schema: T): Attribute.Constructor {
	if (isValidConstructor(schema)) {
		return schema;
	}

	if (isValidValuesArray(schema)) {
		const type = typeof schema[0] as Exclude<Attribute.Typeof, 'boolean'>;
		return attributeConstructorDict[type];
	}

	throw new TypeError('Could not get attribute constructor', { cause: schema });
}

type InferProperties<T extends CustomConfig> = {
	[K in keyof T]: T[K] extends infer V
	? (
		V extends Attribute.Constructor
		? ReturnType<V>
		: (
			V extends ReadonlyArray<Attribute.NodeValue>
			? V[number]
			: never
		)
	)
	: never
};

function createPropertyDescriptor<
	K extends string,
	C extends Attribute.Constructor,
	V extends Attribute.Values | undefined = undefined
>(key: K, constructor: C, values: V) {
	return (constructor === Boolean)
		? createBooleanPropertyDescriptor(key)
		: createPrimitivePropertyDescriptor(key, constructor, values);
};

function createBooleanPropertyDescriptor(key: string): TypedPropertyDescriptor<boolean> {
	return {
		get(this: Mixin.Instance) {
			return this.isConnected && this.hasAttribute(key);
		},
		set(this: Mixin.Instance, value) {
			if (!this.isConnected) {
				const prev = Reflect.get(this, key);
				this.changedAttributes[key] = [prev, value];
				return;
			}

			if (value) {
				this.setAttribute(key, `${value}`);
			} else {
				this.removeAttribute(key);
			}
		},
		enumerable: true,
		configurable: true
	};
}

function createPrimitivePropertyDescriptor<
	K extends string,
	C extends Attribute.Constructor,
	V extends Attribute.Values | undefined
>(key: K, constructor: C, values?: V): TypedPropertyDescriptor<ReturnType<C> | null> {
	return {
		get(this: Mixin.Instance) {
			const value = this.isConnected && this.getAttribute(key) || null;
			return value !== null ? constructor(value) as ReturnType<C> : null;
		},
		set(this: Mixin.Instance, value) {
			if (values && !values.includes(value as Attribute.NodeValue)) {
				return;
			}

			if (!this.isConnected) {
				const prev = Reflect.get(this, key);
				Reflect.set(this.changedAttributes, key, [prev, value]);
				return;
			}

			this.setAttribute(key, `${value}`);
		},
		enumerable: true,
		configurable: true
	};
}