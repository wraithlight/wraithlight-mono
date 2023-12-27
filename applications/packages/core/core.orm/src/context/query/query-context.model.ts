import { Nullable } from "@wraithlight/core.nullable";

export interface WhereableQueryContext<T> {

    where<TKey extends keyof T>(key: TKey, value: T[TKey]): WhereableQueryContext<T>;
    orderByAsc<TKey extends keyof T>(key: TKey): WhereableQueryContext<T>;
    orderByDesc<TKey extends keyof T>(key: TKey): WhereableQueryContext<T>;

}

export interface SelectQueryContext<T> extends WhereableQueryContext<T> {

    where<TKey extends keyof T>(key: TKey, value: T[TKey]): SelectQueryContext<T>;
    orderByAsc<TKey extends keyof T>(key: TKey): SelectQueryContext<T>;
    orderByDesc<TKey extends keyof T>(key: TKey): SelectQueryContext<T>;

    toList(): Promise<Array<T>>;
    first(): Promise<Nullable<T>>;

}

export interface UpdateQueryContext {

    run(): Promise<void>;

}

export interface InsertQueryContext {

    run(): Promise<void>;

}

export interface DeleteQueryContext<T> extends WhereableQueryContext<T> {

    where<TKey extends keyof T>(key: TKey, value: T[TKey]): DeleteQueryContext<T>;
    orderByAsc<TKey extends keyof T>(key: TKey): DeleteQueryContext<T>;
    orderByDesc<TKey extends keyof T>(key: TKey): DeleteQueryContext<T>;
    run(): Promise<void>;

}