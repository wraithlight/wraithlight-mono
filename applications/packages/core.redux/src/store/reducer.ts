import { MixedAction } from "./action";

export type ReducerCallback<TState> = (state: TState, action: MixedAction<unknown>) => TState;

export interface Reducer<TState> {
    on: Array<string>,
    callback: ReducerCallback<TState>;
}

export function createReducer<TState>(
    actions: Array<() => MixedAction<unknown>>,
    reducerCallback: ReducerCallback<TState>
): Reducer<TState> {
    return {
        on: actions.map(m => m().type),
        callback: reducerCallback
    };
}
