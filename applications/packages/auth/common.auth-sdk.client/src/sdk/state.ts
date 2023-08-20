import { Store } from "@wraithlight/core.redux";
import { Predicate } from "@wraithlight/core.types";

import { IAuthContainerStore, IAuthStore } from "./state.model";
import { authInitialize } from "./auth/auth";
import { accountInitialize } from "./account/account";
import { INITIAL_AUTH_STATE } from "./state.const";

export const GLOBAL_STORE = () => Store.getInstance<IAuthContainerStore>();

export function initializeAuthSdk(
    apiBaseUrl: string,
    storeRef: Store<IAuthContainerStore>
): void {
    Store.initializePartial<IAuthContainerStore, IAuthStore>((m => m.auth) ,INITIAL_AUTH_STATE)
    authInitialize(storeRef, apiBaseUrl);
    accountInitialize(storeRef, apiBaseUrl);
}
