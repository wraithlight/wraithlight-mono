import { ActionWithPayload, Store } from "@wraithlight/core.redux";
import { UNKNOWN_ERROR } from "@wraithlight/core.common-constant";
import { LoggerService } from "@wraithlight/common.logger.sdk";

import { GlobalState } from "../state.model";

import { AuthAction } from "./auth.action";
import { AuthService } from "./auth.service";

export function initializeEffects(store: Store<GlobalState>): Store<GlobalState> {

    const service = new AuthService();
    const logger = LoggerService.getInstance();

    store.addEffect([AuthAction.login], (action: ActionWithPayload<{ username: string, password: string }>) => {
        service.login(action.payload.username, action.payload.password)
            .then(m => {
                const action = m.success
                    ? AuthAction.loginSuccess(m.payload!.sessionToken, m.payload!.validTo)
                    : AuthAction.loginFail(m.errors!);
                store.dispatch(action);
            })
            .catch(m => {
                logger.warn(m);
                store.dispatch(AuthAction.loginFail([UNKNOWN_ERROR]))
            })
    });
    return store;
};
