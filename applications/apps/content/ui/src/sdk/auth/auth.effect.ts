import { ActionWithPayload, Store } from "@wraithlight/core.redux";

import { GlobalState } from "../state.model";

import { AuthAction } from "./auth.action";

export function initializeEffects(store: Store<GlobalState>): Store<GlobalState> {
    store.addEffect([AuthAction.login], (action: ActionWithPayload<{ username: string, password: string }>) => {
        store.dispatch(AuthAction.loginFail(["E_NO_HOST"]));
    });
    return store;
};
