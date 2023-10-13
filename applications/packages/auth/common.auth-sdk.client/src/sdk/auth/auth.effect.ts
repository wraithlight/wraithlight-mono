import { ActionWithPayload, Store } from "@wraithlight/core.redux";
import { UNKNOWN_ERROR } from "@wraithlight/core.common-constants";
import { LoggerService } from "@wraithlight/common.logger.sdk";

import { IAuthContainerStore } from "../state.model";

import { AuthAction } from "./auth.action";
import { AuthService } from "./auth.service";

export function initializeEffects(
    store: Store<IAuthContainerStore>,
    apiBaseUrl: string
): Store<IAuthContainerStore> {

    const service = new AuthService(apiBaseUrl);
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

    store.addEffect([AuthAction.logout], (action: ActionWithPayload<{ token: string}>) => (
        service.logout(action.payload.token)
            .then(m => {
                const action = m.success
                    ? AuthAction.logoutSuccess()
                    : AuthAction.logoutFail(m.errors!);
                store.dispatch(action);
            })
            .catch(m => {
                logger.warn(m);
                store.dispatch(AuthAction.logoutFail([UNKNOWN_ERROR]))
            })
    ));

    store.addEffect([AuthAction.keepAlive], (action: ActionWithPayload<{ token: string}>) => (
        service.keepAlive(action.payload.token)
            .then(m => {
                const action = m.success
                    ? AuthAction.keepAliveSuccess(m.payload!.sessionToken, m.payload!.validTo)
                    : AuthAction.keepAliveFail(m.errors!);
                store.dispatch(action);
            })
            .catch(m => {
                logger.warn(m);
                store.dispatch(AuthAction.keepAliveFail([UNKNOWN_ERROR]))
            })
    ));

    return store;
};
