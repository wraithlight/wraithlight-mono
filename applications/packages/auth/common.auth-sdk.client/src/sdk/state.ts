import { Nullable } from "@wraithlight/core.nullable";
import { Store } from "@wraithlight/core.redux";

import { accountInitialize } from "./account/account";
import { authInitialize } from "./auth/auth";
import { INITIAL_AUTH_STATE } from "./state.const";
import { IAuthContainerStore, IAuthStore } from "./state.model";

export const GLOBAL_STORE = (
): Store<IAuthContainerStore> => Store.getInstance<IAuthContainerStore>();

export function initializeAuthSdk(
    apiBaseUrl: string,
    storeRef: Store<IAuthContainerStore>
): void {
    Store.initializePartial<IAuthContainerStore, Nullable<IAuthStore>>(
        (m => m.auth),
        INITIAL_AUTH_STATE,
        true
    );
    authInitialize(
        storeRef,
        apiBaseUrl
    );
    accountInitialize(
        storeRef,
        apiBaseUrl
    );
}
