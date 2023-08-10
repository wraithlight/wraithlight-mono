import { Selector } from "@wraithlight/core.redux";

import { GlobalState } from "../state.model";

import { AuthState } from "./auth-state.model";

export namespace AuthSelector {
    export const state: Selector<GlobalState, AuthState> = (state: GlobalState) => state.auth;
    export const isBusy: Selector<GlobalState, boolean> = (state: GlobalState) => state.auth.isBusy;
}
