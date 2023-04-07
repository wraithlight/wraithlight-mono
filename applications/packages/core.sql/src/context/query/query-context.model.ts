import { Nullable } from "@zf/core.types";

export interface SelectQueryContext<T> {

    where<TKey extends keyof T>(key: TKey, value: T[TKey]): SelectQueryContext<T>;
    orderByAsc<TKey extends keyof T>(key: TKey): SelectQueryContext<T>;
    orderByDesc<TKey extends keyof T>(key: TKey): SelectQueryContext<T>;
    toList(): Promise<Array<T>>;
    first(): Promise<Nullable<T>>;

}

export interface InsertQueryContext<T> {

    run(): Promise<void>;

}
