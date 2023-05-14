import { ClientAccountService, RegisterResponse } from "@wraithlight/common.auth-sdk.client";

import { AUTH_API_BASE_URL } from "./account.config";
import { RegisterModel } from "./model/register.model";

export class AccountService {

    private readonly _accountService = new ClientAccountService(AUTH_API_BASE_URL);

    public register(payload: RegisterModel): Promise<RegisterResponse> {
        return this._accountService.register(
            payload.username,
            payload.password,
            payload.passwordVerify,
            payload.emailAddress
        );
    }

}
