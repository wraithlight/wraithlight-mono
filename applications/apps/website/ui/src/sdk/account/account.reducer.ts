import { ActionWithPayload, Store } from "@wraithlight/core.redux";

import { GlobalState } from "../state.model";

import { AccountAction } from "./account.action";

export function initializeReducers(store: Store<GlobalState>): Store<GlobalState> {
    store.addReducer([AccountAction.register], (state, action: ActionWithPayload<{
        username: string,
        password: string,
        passwordVerify: string,
        emailAddress: string
    }>) => {
        return {
            ...state,
            account: {
                isBusy: true,
                userRegister: {
                    username: action.payload.username,
                    password: action.payload.password,
                    passwordVerify: action.payload.passwordVerify,
                    emailAddress: action.payload.emailAddress
                }
            }
        }
    });
    store.addReducer([AccountAction.registerFail], (state, action: ActionWithPayload<Array<string>>) => {
        return {
            ...state,
            account: {
                ...state.account,
                isBusy: false,
                errors: action.payload
            }
        }
    });
    store.addReducer([AccountAction.registerSuccess], (state) => {
        return {
            ...state,
            account: {
                ...state,
                isBusy: false
            }
        }
    });
    return store;
}
