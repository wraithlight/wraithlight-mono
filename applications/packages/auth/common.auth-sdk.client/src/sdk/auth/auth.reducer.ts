import { Action, ActionWithPayload, Store } from "@wraithlight/core.redux";

import { INITIAL_AUTH_STATE } from "../state.const";
import { IAuthContainerStore } from "../state.model";

import { AuthAction } from "./auth.action";

export function initializeReducers(store: Store<IAuthContainerStore>): Store<IAuthContainerStore> {
    store.addReducer([AuthAction.login], (state) => {
        return {
            ...state,
            auth: {
                ...state.auth ?? INITIAL_AUTH_STATE,
                session: {
                    ...state.auth?.session ?? INITIAL_AUTH_STATE.session,
                    isBusy: true
                }
            }
        }
    });
    store.addReducer([AuthAction.loginFail], (state, action: ActionWithPayload<Array<string>>) => {
        return {
            ...state,
            auth: {
                ...state.auth ?? INITIAL_AUTH_STATE,
                session: {
                    ...state.auth?.session ?? INITIAL_AUTH_STATE.session,
                    isBusy: false,
                    errors: action.payload
                }
            }
        }
    });
    store.addReducer([AuthAction.loginSuccess], (state, action: ActionWithPayload<{ token: string, validUntil: Date }>) => {
        return {
            ...state,
            auth: {
                ...state.auth ?? INITIAL_AUTH_STATE,
                session: {
                    ...state.auth?.session ?? INITIAL_AUTH_STATE.session,
                    isBusy: false,
                    isLoggedIn: true,
                    token: action.payload.token,
                    tokenValidUntil: action.payload.validUntil
                }
            }
        }
    });
    store.addReducer([AuthAction.logout], (state, _action: ActionWithPayload<{ token: string}>) => {
        return {
            ...state,
            auth: {
                ...state.auth ?? INITIAL_AUTH_STATE,
                session: {
                    ...state.auth?.session ?? INITIAL_AUTH_STATE.session,
                    isBusy: true
                }
            }
        }
    });
    store.addReducer([AuthAction.logoutSuccess], (state, _action: Action) => {
        return {
            ...store,
            auth: {
                ...state.auth ?? INITIAL_AUTH_STATE,
                session: {
                    ...state.auth?.session ?? INITIAL_AUTH_STATE.session,
                    isBusy: false,
                    isLoggedIn: false,
                    token: undefined,
                    tokenValidUntil: undefined
                }
            }
        }
    });
    store.addReducer([AuthAction.loginFail], (state, action: ActionWithPayload<Array<string>>) => {
        return {
            ...store,
            auth: {
                ...state.auth ?? INITIAL_AUTH_STATE,
                session: {
                    ...state.auth?.session ?? INITIAL_AUTH_STATE.session,
                    isBusy: false,
                    errors: action.payload
                }
            }
        }
    });
    store.addReducer([AuthAction.keepAlive], (state) => {
        return {
            ...state,
            auth: {
                ...state.auth ?? INITIAL_AUTH_STATE,
                session: {
                    ...state.auth?.session ?? INITIAL_AUTH_STATE.session,
                    isBusy: true
                }
            }
        }
    });
    store.addReducer([AuthAction.keepAliveFail], (state, action: ActionWithPayload<Array<string>>) => {
        return {
            ...state,
            auth: {
                ...state.auth ?? INITIAL_AUTH_STATE,
                session: {
                    ...state.auth?.session ?? INITIAL_AUTH_STATE.session,
                    isBusy: false,
                    errors: action.payload
                }
            }
        }
    });
    store.addReducer([AuthAction.keepAliveSuccess], (state, action: ActionWithPayload<{ token: string, validUntil: Date }>) => {
        return {
            ...state,
            auth: {
                ...state.auth ?? INITIAL_AUTH_STATE,
                session: {
                    ...state.auth?.session ?? INITIAL_AUTH_STATE.session,
                    isBusy: false,
                    token: action.payload.token,
                    tokenValidUntil: action.payload.validUntil
                }
            }
        }
    });
    return store;
}
