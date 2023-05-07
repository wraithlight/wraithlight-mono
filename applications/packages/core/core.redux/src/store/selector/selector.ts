export interface Selector<TState, TValue> {
    (state: TState): TValue;
}
