import { Store } from "@wraithlight/core.redux";

import { GlobalState } from "../state.model";
import { initializeReducers } from "./auth.reducer";
import { initializeEffects } from "./auth.effect";

export function authInitialize(
    store: Store<GlobalState>,
    apiBaseUrl: string
): Store<GlobalState> {
    initializeReducers(store);
    initializeEffects(store, apiBaseUrl);
    return store;
}