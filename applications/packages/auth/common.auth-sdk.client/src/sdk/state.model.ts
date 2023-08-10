import { AccountState } from "./account/account-state.model";
import { AuthState } from "./auth/auth-state.model";

export interface IAuthContainerStore {
    auth: IAuthStore;
}

export interface IAuthStore {
    session: AuthState;
    account: AccountState;
}
