import { Selector } from "@wraithlight/core.redux";

import { IAuthContainerStore } from "../state.model";

import { AuthState } from "./auth-state.model";

export namespace AuthSelector {
    export const state: Selector<IAuthContainerStore, AuthState> = (state: IAuthContainerStore) => state.auth.session;
    export const isBusy: Selector<IAuthContainerStore, boolean> = (state: IAuthContainerStore) => state.auth.session.isBusy;
}
