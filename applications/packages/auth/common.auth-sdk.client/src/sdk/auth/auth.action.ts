import { Action, ActionWithPayload } from "@wraithlight/core.redux";

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

    export const logout = (token: string): ActionWithPayload<{ token: string}> => ({
        type: "[SESSION] Logout Sync",
        payload: { token }
    });

    export const logoutSuccess = (): Action => ({
        type: "[SESSION] Logout Success Sync",
    });

    export const logoutFail = (errors: Array<string>): ActionWithPayload<Array<string>> => ({
        type: "[SESSION] Logout Fail Sync",
        payload: errors
    });

    export const keepAlive = (token: string): ActionWithPayload<{ token: string}> => ({
        type: "[SESSION] Keep Alive Sync",
        payload: { token }
    });

    export const keepAliveSuccess = (token: string, validUntil: Date): ActionWithPayload<{ token: string, validUntil: Date }> => ({
        type: "[SESSION] Keep Alive Success Sync",
        payload: { token, validUntil }
    });

    export const keepAliveFail = (errors: Array<string>): ActionWithPayload<Array<string>> => ({
        type: "[SESSION] Keep Alive Fail Sync",
        payload: errors
    });

}
