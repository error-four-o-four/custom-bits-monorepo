// https://www.slingacademy.com/article/typescript-class-constructor-complete-guide/
// https://blog.logrocket.com/writing-constructor-typescript/
// https://www.typescriptlang.org/docs/handbook/release-notes/typescript-4-2.html#abstract-construct-signatures

export type Constructor<T, Args extends unknown[] = any[]> = new (...args: Args) => T;

export type Class<
	Ctor extends Constructor<unknown>,
	Args extends unknown[] = any[]
> = {
	new(...args: Args): InstanceType<Ctor>,
	prototype: InstanceType<Ctor> extends infer R ? Pick<R, keyof R> : never;
};

export type AbstractConstructor<T, Args extends unknown[] = any[]> = abstract new (...args: Args) => T;

export interface AbstractClass<T, Args extends unknown[] = any[]> extends AbstractConstructor<T, Args> {
	prototype: Pick<T, keyof T>;
}

export type ExtendedClass<
	T extends Constructor<unknown>,
	P extends Record<PropertyKey, unknown> = Record<PropertyKey, unknown>
> = {
	new(): InstanceType<T> & P,
	prototype: InstanceType<T> & P;
} & Pick<T, keyof T>;