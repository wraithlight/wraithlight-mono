import { Selector } from "@wraithlight/core.redux";

import { IAuthContainerStore } from "../state.model";

import { AccountState } from "./account-state.model";

export namespace AccountSelector {
    export const state: Selector<IAuthContainerStore, AccountState> = (state: IAuthContainerStore) => state.auth.account;
    export const isBusy: Selector<IAuthContainerStore, boolean> = (state: IAuthContainerStore) => state.auth.account.isBusy;
}
