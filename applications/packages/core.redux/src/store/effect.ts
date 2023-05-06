import { Action, MixedAction } from "./action";

export type EffectCallback = (action: MixedAction<unknown>) => void;

export interface Effect {
    on: Array<string>,
    callback: EffectCallback;
}

export function createEffect(
    actions: Array<(...args: Array<any>) => Action>,
    effectCallback: EffectCallback
): Effect {
    return {
        on: actions.map(m => m().type),
        callback: effectCallback
    };
}
