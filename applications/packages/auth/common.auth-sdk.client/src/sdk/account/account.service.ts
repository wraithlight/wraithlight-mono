import { ClientAccountService, RegisterResponse } from "@wraithlight/common.auth-sdk.client";

import { RegisterModel } from "./model/register.model";

export class AccountService {

    private readonly _accountService = new ClientAccountService(this._apiBaseUrl);

    constructor(
        private readonly _apiBaseUrl: string
    ) { }

    public register(payload: RegisterModel): Promise<RegisterResponse> {
        return this._accountService.register(
            payload.username,
            payload.password,
            payload.passwordVerify,
            payload.emailAddress
        );
    }

}
