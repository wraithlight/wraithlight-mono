import { ActionWithPayload, Store } from "@wraithlight/core.redux";
import { UNKNOWN_ERROR } from "@wraithlight/core.common-constant";

import { GlobalState } from "../state.model";

import { AuthAction } from "./auth.action";
import { AuthService } from "./auth.service";

export function initializeEffects(
    store: Store<GlobalState>,
    apiBaseUrl: string
): Store<GlobalState> {

    const service = new AuthService(apiBaseUrl);

    store.addEffect([AuthAction.login], (action: ActionWithPayload<{ username: string, password: string }>) => {
        service.login(action.payload.username, action.payload.password)
            .then(m => {
                const action = m.success
                    ? AuthAction.loginSuccess(m.payload!.sessionToken, m.payload!.validTo)
                    : AuthAction.loginFail(m.errors!);
                store.dispatch(action);
            })
            .catch(m => {
                console.warn(m);
                store.dispatch(AuthAction.loginFail([UNKNOWN_ERROR]))
            })
    });
    return store;
};
