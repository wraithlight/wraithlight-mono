import { GlobalState } from "./state.model";

export const INITIAL_STATE: GlobalState = {
    auth: {
        isBusy: false,
        isLoggedIn: false
    },
    account: {
        isBusy: false   
    }
};
