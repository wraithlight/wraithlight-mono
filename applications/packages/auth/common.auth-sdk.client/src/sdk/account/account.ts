import { Store } from "@wraithlight/core.redux";

import { IAuthContainerStore } from "../state.model";

import { initializeEffects } from "./account.effect";
import { initializeReducers } from "./account.reducer";

export function accountInitialize(
    store: Store<IAuthContainerStore>,
    apiBaseUrl: string
): Store<IAuthContainerStore> {
    initializeReducers(store);
    initializeEffects(store, apiBaseUrl);
    return store;
}
