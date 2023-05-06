import { ActionWithPayload } from "@wraithlight/core.redux";

export namespace  AuthAction {

    export const login = (username: string, password: string): ActionWithPayload<{ username: string, password: string }> => ({
        type: "[AUTH] Login Sync",
        payload: { username, password}
    });

    export const loginFail = (errors: Array<string>): ActionWithPayload<Array<string>> => ({
        type: "[AUTH] Login Fail Sync",
        payload: errors
    });

}
