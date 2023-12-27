import {
    RegisterRequest,
    RegisterResponse as CoreRegisterResponse,
    RegisterErrorResponse,
} from "@wraithlight/core.auth.types";
import { HttpClient } from "@wraithlight/core.http";
import { Nullable } from "@wraithlight/core.nullable";


import { RegisterResponse } from "../../model/register-response.model";

import { ClientAccountServiceConfig } from "./account.config";


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
