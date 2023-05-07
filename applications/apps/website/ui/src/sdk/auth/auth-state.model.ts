export interface AuthState {
    isBusy: boolean;
    errors?: Array<string>;
    isLoggedIn: boolean;
    token?: string;
    tokenValidUntil?: Date;
}
