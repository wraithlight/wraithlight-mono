import {
    ApiRegisterRequest,
    ApiRegisterResponse
} from "@wraithlight/core.auth.types";
import { CoreHttpClient } from "@wraithlight/core.http";
import { Nullable } from "@wraithlight/core.nullable";

import { ServerAccountServiceConfig } from "./account.config";

export class ServerAccountService {

    private readonly _httpService = new CoreHttpClient();
    private readonly _config = new ServerAccountServiceConfig();

    public async register(
        username: string,
        password: string,
        passwordVerify: string,
        emailAddress: string
    ): Promise<Nullable<ApiRegisterResponse>> {
        const url = this._config.getRegisterUrl();
        const payload: ApiRegisterRequest = {
            username: username,
            password: password,
            passwordVerify: passwordVerify,
            emailAddress: emailAddress
        };
        return this._httpService
            .post<ApiRegisterResponse, ApiRegisterRequest>(
                url,
                payload
            )
            .then(m => m.payload)
        ;
    }

}
