import { Action } from "./action";

export type ReducerCallback<TState, TAction> = (
    state: TState,
    action: TAction
) => TState;

export interface Reducer<TState, TAction> {
    on: Array<string>,
    callback: ReducerCallback<TState, TAction>;
}

export function createReducer<TState, TAction extends Action>(
    actions: Array<() => TAction>,
    reducerCallback: ReducerCallback<TState, TAction>
): Reducer<TState, TAction> {
    return {
        on: actions.map(m => m().type),
        callback: reducerCallback
    };
}
