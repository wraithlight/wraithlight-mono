import { ActionWithPayload, Store } from "@wraithlight/core.redux";

import { GlobalState } from "../state.model";

import { AccountAction } from "./account.action";
import { AccountService } from "./account.service";

export function initializeEffects(store: Store<GlobalState>): Store<GlobalState> {

    const service = new AccountService();

    store.addEffect([AccountAction.register], (action: ActionWithPayload<{
        username: string,
        password: string,
        passwordVerify: string,
        emailAddress: string
    }>) => {
        service
            .register(
                action.payload.username,
                action.payload.password,
                action.payload.passwordVerify,
                action.payload.emailAddress
            )
            .then(m => {
                const action = m.success
                    ? AccountAction.registerSuccess()
                    : AccountAction.registerFail(m.errors!);
                store.dispatch(action);
            })
            .catch(m => {
                console.warn(m);
                store.dispatch(AccountAction.registerFail(["E_UNKNOWN"]));
            })
        ;
    });
    return store;
};
