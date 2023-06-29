import { type AuthState } from "./auth/auth-state.model";

export interface GlobalState {
    auth: AuthState;
}
