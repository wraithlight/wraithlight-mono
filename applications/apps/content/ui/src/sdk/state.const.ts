import { ContentGlobalState } from "./state.model";

export const INITIAL_STATE: ContentGlobalState = {
    auth: {
        session: {
            isBusy: false,
            isLoggedIn: false
        },
        account: {
            isBusy: false
        } 
    }
};
