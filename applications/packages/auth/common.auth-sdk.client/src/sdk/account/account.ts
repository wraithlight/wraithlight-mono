import { Store } from "@wraithlight/core.redux";

import { GlobalState } from "../state.model";
import { initializeReducers } from "./account.reducer";
import { initializeEffects } from "./account.effect";

export function accountInitialize(
    store: Store<GlobalState>,
    apiBaseUrl: string
): Store<GlobalState> {
    initializeReducers(store);
    initializeEffects(store, apiBaseUrl);
    return store;
}
