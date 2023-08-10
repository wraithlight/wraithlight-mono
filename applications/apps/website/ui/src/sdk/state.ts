import { Store } from "@wraithlight/core.redux";

import { GlobalState } from "./state.model";
import { INITIAL_STATE } from "./state.const";

import { authInitialize } from "./auth/auth";
import { accountInitialize } from "./account/account";

export const GLOBAL_STORE = () => Store.getInstance<GlobalState>();

/**
 * @deprecated Use `initializeAuthSdk(baseApiUrl)` from `@wraithlight/common.auth-sdk.client`.
 */
export function initializeSdk(): void {
    Store.initialize<GlobalState>(INITIAL_STATE);
    const store = Store.getInstance<GlobalState>();
    authInitialize(store);
    accountInitialize(store);
}
