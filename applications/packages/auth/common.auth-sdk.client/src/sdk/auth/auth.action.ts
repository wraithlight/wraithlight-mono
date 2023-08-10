import { ActionWithPayload } from "@wraithlight/core.redux";

export namespace  AuthAction {

    export const login = (username: string, password: string): ActionWithPayload<{ username: string, password: string }> => ({
        type: "[SESSION] Login Sync",
        payload: { username, password}
    });

    export const loginSuccess = (token: string, validUntil: Date): ActionWithPayload<{ token: string, validUntil: Date }> => ({
        type: "[SESSION] Login Success Sync",
        payload: { token, validUntil }
    });

    export const loginFail = (errors: Array<string>): ActionWithPayload<Array<string>> => ({
        type: "[SESSION] Login Fail Sync",
        payload: errors
    });

}
