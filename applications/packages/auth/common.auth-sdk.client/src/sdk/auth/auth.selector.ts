import { Nullable } from "@wraithlight/core.nullable";
import { Selector } from "@wraithlight/core.redux";

import { IAuthContainerStore } from "../state.model";

export namespace AuthSelector {
    export const isBusy: Selector<
        IAuthContainerStore,
        Nullable<boolean>
    > = (
        state: IAuthContainerStore
    ) => state.auth?.session.isBusy;

    export const errors: Selector<
        IAuthContainerStore,
        Nullable<ReadonlyArray<string>
    >> = (
        state: IAuthContainerStore
    ) => state.auth?.session.errors;

    export const isLoggedIn: Selector<
        IAuthContainerStore,
        Nullable<boolean>
    > = (
        state: IAuthContainerStore
    ) => state.auth?.session.isLoggedIn;

    export const token: Selector<
        IAuthContainerStore,
        Nullable<string>
    > = (
        state: IAuthContainerStore
    ) => state.auth?.session.token;

    export const tokenValidUntil: Selector<
        IAuthContainerStore,
        Nullable<Date>
    > = (
        state: IAuthContainerStore
    ) => state.auth?.session.tokenValidUntil;
}
