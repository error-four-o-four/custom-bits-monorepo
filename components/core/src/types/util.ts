export namespace Util {
	export type UnknownRecord = Record<PropertyKey, unknown>;
	export type GenericRecord<T> = Record<PropertyKey, T>;

	export type Keyof<T extends UnknownRecord, K extends keyof T = keyof T> = K;

	export type ValueOf<T extends UnknownRecord, K extends keyof T = keyof T> = T[K];

	export type OptionalKeys<
		T extends UnknownRecord, K extends keyof T = keyof T
	> = Omit<T, K> & Partial<Pick<T, K>>;

	export type Simplify<T> = { [K in keyof T]: T[K] } & {};

	// type IsEqual<A, B> = [A, B] extends [B, A] ? true : false;

	export type IsEqual<A, B> =
		(<G>() => G extends A ? 1 : 2) extends
		(<G>() => G extends B ? 1 : 2)
		? true
		: false;

	export type Except<T, K extends keyof T> = {
		[KeyType in keyof T as Filter<KeyType, K>]: T[KeyType];
	};

	export type Filter<K, Excluded> = IsEqual<K, Excluded> extends true
		? never : (
			K extends Excluded
			? never : K
		);

	export type RequireAtLeastOne<
		T,
		K extends keyof T = keyof T,
	> = {
		// For each `Key` in `KeysType` make a mapped type:
		[Key in K]-?: Required<Pick<T, Key>> & // 1. Make `Key`'s type required
		// 2. Make all other keys in `KeysType` optional
		Partial<Pick<T, Exclude<K, Key>>>;
	}[K] &
		// 3. Add the remaining keys not in `KeysType`
		Except<T, K>;
}