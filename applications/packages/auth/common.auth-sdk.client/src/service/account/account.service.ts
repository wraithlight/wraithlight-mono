import { HttpClient } from "@wraithlight/core/core.http";
import { Nullable } from "@wraithlight/core/core.types";
import { ClientAccountServiceConfig } from "./account.config";
import {
    RegisterRequest,
    RegisterResponse as CoreRegisterResponse,
    RegisterErrorResponse,
    RegisterSuccessResponse
} from "@wraithlight/auth/core.auth.types";

import { RegisterResponse } from "../../model/register-response.model";

export class ClientAccountService {

    private readonly _httpService = new HttpClient();
    private readonly _config: Nullable<ClientAccountServiceConfig>;

    constructor(
        apiBaseUrl: string
    ) {
        this._config = new ClientAccountServiceConfig(apiBaseUrl);
    }

    public async register(
        username: string,
        password: string,
        passwordVerify: string,
        emailAddress: string
    ): Promise<RegisterResponse> {
        const payload: RegisterRequest = {
            username: username,
            password: password,
            passwordVerify: passwordVerify,
            emailAddress: emailAddress
        };
        const url = this._config!.getRegisterEndpoint();
        return this._httpService
            .post<CoreRegisterResponse, RegisterRequest>(url, payload)
            .then(m => {
                const result: RegisterResponse = {
                    success: m.payload?.success ?? false,
                    errors: m.payload?.success ? [] : (m.payload as RegisterErrorResponse).errors,
                    payload: m.payload?.success
                };
                return result;
            })
        ;
    }

}
