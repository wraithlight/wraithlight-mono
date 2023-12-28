import { LoggerService } from "@wraithlight/common.logger.sdk";
import { UNKNOWN_ERROR } from "@wraithlight/core.common-constants";
import { ActionWithPayload, Store } from "@wraithlight/core.redux";

import { IAuthContainerStore } from "../state.model";

import { AccountAction } from "./account.action";
import { AccountService } from "./account.service";
import { RegisterModel } from "./model/register.model";

export function initializeEffects(
    store: Store<IAuthContainerStore>,
    apiBaseUrl: string
): Store<IAuthContainerStore> {

    const service = new AccountService(apiBaseUrl);
    const logger = LoggerService.getInstance();

    store.addEffect([AccountAction.register], (action: ActionWithPayload<RegisterModel>) => {
        service
            .register(action.payload)
            .then(m => {
                const action = m.success
                    ? AccountAction.registerSuccess()
                    : AccountAction.registerFail(m.errors!);
                store.dispatch(action);
            })
            .catch(m => {
                logger.warn(m);
                store.dispatch(AccountAction.registerFail([UNKNOWN_ERROR]));
            })
        ;
    });
    return store;
}
