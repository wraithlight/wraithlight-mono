import { ClientAccountService, RegisterResponse } from "@wraithlight/common.auth-sdk.client";

import { AUTH_API_BASE_URL } from "./account.config";

export class AccountService {

    private readonly _accountService = new ClientAccountService(AUTH_API_BASE_URL);

    public register(
        username: string,
        password: string,
        passwordVerify: string,
        emailAddress: string
    ): Promise<RegisterResponse> {
        return this._accountService.register(username, password, passwordVerify, emailAddress);
    }

}
