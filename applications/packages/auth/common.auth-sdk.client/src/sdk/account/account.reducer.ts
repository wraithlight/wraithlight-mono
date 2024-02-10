import { ActionWithPayload, Store } from "@wraithlight/core.redux";

import { INITIAL_AUTH_STATE } from "../state.const";
import { IAuthContainerStore } from "../state.model";

import { AccountAction } from "./account.action";
import { RegisterModel } from "./model";

export function initializeReducers(store: Store<IAuthContainerStore>): Store<IAuthContainerStore> {
    store.addReducer([AccountAction.register], (state, action: ActionWithPayload<RegisterModel>) => {
        return {
            ...state,
            auth: {
                ...state.auth ?? INITIAL_AUTH_STATE,
                account: {
                    ...state.auth?.account ?? INITIAL_AUTH_STATE.account,
                    userRegister: action.payload
                }
            }
        }
    });
    store.addReducer([AccountAction.registerFail], (state, action: ActionWithPayload<Array<string>>) => {
        return {
            ...state,
            auth: {
                ...state.auth ?? INITIAL_AUTH_STATE,
                account: {
                    ...state.auth?.account ?? INITIAL_AUTH_STATE.account,
                    isBusy: false,
                    errors: action.payload
                }
            }
        }
    });
    store.addReducer([AccountAction.registerSuccess], (state) => {
        return {
            ...state,
            auth: {
                ...state.auth ?? INITIAL_AUTH_STATE,
                account: {
                    ...state.auth?.account ?? INITIAL_AUTH_STATE.account,
                    isBusy: false
                }
            }
        }
    });
    return store;
}
