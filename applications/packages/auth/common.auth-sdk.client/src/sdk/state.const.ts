import { IAuthStore } from "./state.model";

export const INITIAL_AUTH_STATE: IAuthStore = {
    session: {
        isBusy: false,
        isLoggedIn: false
    },
    account: {
        isBusy: false
    }
};
