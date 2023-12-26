import { Predicate } from "@wraithlight/core.linq";

export interface Selector<TState, TValue> extends Predicate<TState, TValue> {
}
