import { type Selector } from "@wraithlight/core.redux";

import { type GlobalState } from "../state.model";

import { type AuthState } from "./auth-state.model";

export namespace AuthSelector {
    export const state: Selector<GlobalState, AuthState> = (state: GlobalState) => state.auth;
    export const isBusy: Selector<GlobalState, boolean> = (state: GlobalState) => state.auth.isBusy;
    export const isLoggedIn: Selector<GlobalState, boolean> = (state: GlobalState) => state.auth.isLoggedIn;
}
