import { AccountState } from "./account/account-state.model";
import { AuthState } from "./auth/auth-state.model";

export interface GlobalState {
    auth: AuthState;
    account: AccountState;
}
