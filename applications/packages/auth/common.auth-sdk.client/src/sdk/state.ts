import { Store } from "@wraithlight/core.redux";

import { IAuthContainerStore } from "./state.model";
import { authInitialize } from "./auth/auth";
import { accountInitialize } from "./account/account";

export const GLOBAL_STORE = () => Store.getInstance<IAuthContainerStore>();

export function initializeAuthSdk(
    apiBaseUrl: string,
    storeRef: Store<IAuthContainerStore>
): void {
    authInitialize(storeRef, apiBaseUrl);
    accountInitialize(storeRef, apiBaseUrl);
}
