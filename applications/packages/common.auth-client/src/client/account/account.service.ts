import { BaseRegisterResponse, RegisterModel } from "@wraithlight/core.auth-common";
import { HttpClient } from "@wraithlight/core.http";

import { AccountClientConfig } from "./account.config";

/**
 * @deprecated Use `ClientAccountService` from `@common.auth-sdk.client` instead.
 */
export class AccountService {

    private readonly _httpClient = new HttpClient();
    private readonly _config = new AccountClientConfig();

    public async register(
        username: string,
        emailAddress: string,
        password: string,
        passwordVerify: string
    ): Promise<BaseRegisterResponse> {
        const url = this._config.getAccountRegisterUrl();
        const data: RegisterModel = {
            username: username,
            password: password,
            passwordVerify: passwordVerify,
            emailAddress: emailAddress
        };
        const result = this._httpClient.post<BaseRegisterResponse, RegisterModel>(url, data);
        return result.then(m => m.payload!);
    }

}
