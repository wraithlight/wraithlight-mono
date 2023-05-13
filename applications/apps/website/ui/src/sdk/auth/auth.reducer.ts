import { ActionWithPayload, Store } from "@wraithlight/core.redux";

import { GlobalState } from "../state.model";

import { AuthAction } from "./auth.action";

export function initializeReducers(store: Store<GlobalState>): Store<GlobalState> {
    store.addReducer([AuthAction.login], (state) => {
        return {
            ...state,
            auth: {
                ...state.auth,
                isBusy: true
            }
        }
    });
    store.addReducer([AuthAction.loginFail], (state, action: ActionWithPayload<Array<string>>) => {
        return {
            ...state,
            auth: {
                ...state.auth,
                isBusy: false,
                errors: action.payload
            }
        }
    });
    store.addReducer([AuthAction.loginSuccess], (state) => {
        return {
            ...state,
            auth: {
                ...state.auth,
                isBusy: false
            }
        }
    });
    return store;
}
