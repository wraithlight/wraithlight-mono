import { Store } from "@wraithlight/core.redux";

import { IAuthContainerStore } from "../state.model";
import { initializeReducers } from "./auth.reducer";
import { initializeEffects } from "./auth.effect";

export function authInitialize(
    store: Store<IAuthContainerStore>,
    apiBaseUrl: string
): Store<IAuthContainerStore> {
    initializeReducers(store);
    initializeEffects(store, apiBaseUrl);
    return store;
}