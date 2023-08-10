import { IAuthContainerStore } from "./state.model";

/**
 * @deprecated This const wont be exported for login.
 * Once https://github.com/kfarkasHU/wraithlight/issues/115 is done, this will be removed.
 */
export const INITIAL_AUTH_STATE: IAuthContainerStore = {
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
