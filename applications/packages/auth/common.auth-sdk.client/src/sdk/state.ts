import { Store } from "@wraithlight/core.redux";

import { GlobalState } from "./state.model";
import { INITIAL_STATE } from "./state.const";

import { authInitialize } from "./auth/auth";
import { accountInitialize } from "./account/account";

export const GLOBAL_STORE = () => Store.getInstance<GlobalState>();

export function initializeAuthSdk(
    apiBaseUrl: string
): void {
    Store.initialize<GlobalState>(INITIAL_STATE);
    const store = Store.getInstance<GlobalState>();
    authInitialize(store, apiBaseUrl);
    accountInitialize(store, apiBaseUrl);
}
