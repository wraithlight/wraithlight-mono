import { ActionWithPayload, Store } from "@wraithlight/core.redux";
import { UNKNOWN_ERROR } from "@wraithlight/core.common-constant";

import { GlobalState } from "../state.model";

import { AccountAction } from "./account.action";
import { AccountService } from "./account.service";
import { RegisterModel } from "./model/register.model";
import { LoggerService } from "@wraithlight/common.logger.sdk";

export function initializeEffects(store: Store<GlobalState>): Store<GlobalState> {

    const service = new AccountService();
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
};
