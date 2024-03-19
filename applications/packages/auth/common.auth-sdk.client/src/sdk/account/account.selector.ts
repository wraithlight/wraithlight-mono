import { Nullable } from "@wraithlight/core.nullable";
import { Selector } from "@wraithlight/core.redux";

import { IAuthContainerStore } from "../state.model";

import { AccountState } from "./account-state.model";
import { RegisterModel } from "./model";

export namespace AccountSelector {
    export const isBusy: Selector<IAuthContainerStore, Nullable<boolean>> = (state: IAuthContainerStore) => state.auth?.account.isBusy;
    export const errors: Selector<IAuthContainerStore, Nullable<Array<string>>> = (state: IAuthContainerStore) => state.auth?.account.errors;
    export const userRegister: Selector<IAuthContainerStore, Nullable<RegisterModel>> = (state: IAuthContainerStore) => state.auth?.account.userRegister;
}
