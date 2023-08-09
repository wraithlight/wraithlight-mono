import { ClientAccountService, RegisterResponse } from "@wraithlight/common.auth-sdk.client";

import { AccountServiceConfig } from "./account.config";
import { RegisterModel } from "./model/register.model";

export class AccountService {

    private readonly _config = new AccountServiceConfig();
    private readonly _accountService = new ClientAccountService(this._config.getBaseApiUrl());

    public register(payload: RegisterModel): Promise<RegisterResponse> {
        return this._accountService.register(
            payload.username,
            payload.password,
            payload.passwordVerify,
            payload.emailAddress
        );
    }

}
