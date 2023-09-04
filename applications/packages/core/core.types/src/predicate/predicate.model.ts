/**
 * @deprecated Import `Predicate` from `core.linq` instead.
 */
export interface Predicate<TSource, TResult> {
    (src: TSource): TResult;
}
