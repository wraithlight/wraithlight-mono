import { Action } from "./action";

export type EffectCallback<TAction> = (action: TAction) => void;

export interface Effect<TAction> {
    on: Array<string>,
    callback: EffectCallback<TAction>;
}

export function createEffect<TAction extends Action>(
    actions: Array<(...args: Array<any>) => TAction>,
    effectCallback: EffectCallback<TAction>
): Effect<TAction> {
    return {
        on: actions.map(m => m().type),
        callback: effectCallback
    };
}
