import { Store } from "@wraithlight/core.redux";

import { GlobalState } from "./state.model";
import { authInitialize } from "./auth/auth";
import { INITIAL_STATE } from "./state.const";

export const GLOBAL_STORE = () => Store.getInstance<GlobalState>();

export function initializeSdk(): void {
    Store.initialize<GlobalState>(INITIAL_STATE);
    const store = Store.getInstance<GlobalState>();
    authInitialize(store);
}
