import {
    Action,
    ActionWithPayload
} from "@wraithlight/core/core.redux";

export namespace AccountAction {

    export const register = (
        username: string,
        password: string,
        passwordVerify: string,
        emailAddress: string
    ): ActionWithPayload<{
        username: string,
        password: string,
        passwordVerify: string,
        emailAddress: string
    }> => ({
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
