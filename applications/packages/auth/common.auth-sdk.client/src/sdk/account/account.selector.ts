import { Selector } from "@wraithlight/core.redux";

import { GlobalState } from "../state.model";

import { AccountState } from "./account-state.model";

export namespace AccountSelector {
    export const state: Selector<GlobalState, AccountState> = (state: GlobalState) => state.account;
    export const isBusy: Selector<GlobalState, boolean> = (state: GlobalState) => state.account.isBusy;
}
