import { Store } from "@wraithlight/core.redux";

import { IAuthContainerStore } from "../state.model";

import { initializeEffects } from "./auth.effect";
import { initializeReducers } from "./auth.reducer";

export function authInitialize(
    store: Store<IAuthContainerStore>,
    apiBaseUrl: string
): Store<IAuthContainerStore> {
    initializeReducers(store);
    initializeEffects(
        store,
        apiBaseUrl
    );
    return store;
}