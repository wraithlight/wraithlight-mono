export interface Predicate<TSource, TResult> {
    (src: TSource): TResult;
}
