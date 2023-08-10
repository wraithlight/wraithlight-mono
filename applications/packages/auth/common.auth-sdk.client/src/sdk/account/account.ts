import { Store } from "@wraithlight/core.redux";

import { IAuthContainerStore } from "../state.model";
import { initializeReducers } from "./account.reducer";
import { initializeEffects } from "./account.effect";

export function accountInitialize(
    store: Store<IAuthContainerStore>,
    apiBaseUrl: string
): Store<IAuthContainerStore> {
    initializeReducers(store);
    initializeEffects(store, apiBaseUrl);
    return store;
}
