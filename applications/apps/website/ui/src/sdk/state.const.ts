import { WebsiteGlobalState } from "./state.model";

export const INITIAL_STATE: WebsiteGlobalState = {
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
