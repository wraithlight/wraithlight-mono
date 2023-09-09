import { Selector } from "@wraithlight/core.redux";
import { Nullable } from "@wraithlight/core.types";

import { IAuthContainerStore } from "../state.model";

import { AccountState } from "./account-state.model";
import { RegisterModel } from "./model/register.model"

export namespace AccountSelector {
    /**
     * @deprecated Use the named selectors instead.
     */
    export const state: Selector<IAuthContainerStore, AccountState> = (state: IAuthContainerStore) => state.auth.account;
    export const isBusy: Selector<IAuthContainerStore, boolean> = (state: IAuthContainerStore) => state.auth.account.isBusy;
    export const errors: Selector<IAuthContainerStore, Nullable<Array<string>>> = (state: IAuthContainerStore) => state.auth.account.errors;
    export const userRegister: Selector<IAuthContainerStore, Nullable<RegisterModel>> = (state: IAuthContainerStore) => state.auth.account.userRegister;
}
