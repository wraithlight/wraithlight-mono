import {
    Action,
    ActionWithPayload
} from "@wraithlight/core/core.redux";

import { RegisterModel } from "./model/register.model";

export namespace AccountAction {

    export const register = (
        username: string,
        password: string,
        passwordVerify: string,
        emailAddress: string
    ): ActionWithPayload<RegisterModel> => ({
        type: "[ACCOUNT] Register",
        payload: {
            username: username,
            password: password,
            passwordVerify: passwordVerify,
            emailAddress: emailAddress
        }
    });

    export const registerSuccess = (): Action => ({
        type: "[ACCOUNT] Register Success"
    });

    export const registerFail = (errors: Array<string>): ActionWithPayload<Array<string>> => ({
        type: "[ACCOUNT] Register Fail Sync",
        payload: errors
    });

}
