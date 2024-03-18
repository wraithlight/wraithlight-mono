import {
    RegisterResponse as CoreRegisterResponse,
    RegisterErrorResponse,
    RegisterRequest,
} from "@wraithlight/core.auth.types";
import { CoreHttpClient } from "@wraithlight/core.http";

import { RegisterResponse } from "../../model";

import { ClientAccountServiceConfig } from "./account.config";


export class ClientAccountService {

    private readonly _httpService = new CoreHttpClient();
    private readonly _config: ClientAccountServiceConfig;

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
        const url = this._config.getRegisterEndpoint();
        return this._httpService
            .post<CoreRegisterResponse, RegisterRequest>(url, payload)
            .then(m => {
                const result: RegisterResponse = {
                    success: m.payload?.success ?? false,
                    // TODO: OperationResult
                    // eslint-disable-next-line @typescript-eslint/consistent-type-assertions
                    errors: m.payload?.success ? [] : (m.payload as RegisterErrorResponse).errors,
                    payload: m.payload?.success
                };
                return result;
            })
        ;
    }

}
