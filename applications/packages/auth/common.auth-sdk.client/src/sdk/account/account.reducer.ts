import { ActionWithPayload, Store } from "@wraithlight/core.redux";

import { GlobalState } from "../state.model";

import { AccountAction } from "./account.action";
import { RegisterModel } from "./model/register.model";

export function initializeReducers(store: Store<GlobalState>): Store<GlobalState> {
    store.addReducer([AccountAction.register], (state, action: ActionWithPayload<RegisterModel>) => {
        return {
            ...state,
            account: {
                isBusy: true,
                userRegister: action.payload
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
