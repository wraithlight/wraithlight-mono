import {
    KeepAliveSessionResponse as CoreKeepAliveSessionResponse,
    LoginResponse as CoreLoginResponse,
    LogoutResponse as CoreLogoutResponse,
    ValidateSessionResponse as CoreValidateSessionResponse,
    KeepAliveSessionErrorResponse,
    KeepAliveSessionRequest,
    KeepAliveSessionSuccessResponse,
    LoginErrorResponse,
    LoginRequest,
    LoginSuccessResponse,
    LogoutErrorResponse,
    LogoutRequest,
    LogoutSuccessResponse,
    ValidateSessionErrorResponse,
    ValidateSessionRequest,
    ValidateSessionSuccessResponse
} from "@wraithlight/core.auth.types";
import { UNKNOWN_ERROR } from "@wraithlight/core.common-constants";
import { HttpClient } from "@wraithlight/core.http";
import { Nullable } from "@wraithlight/core.nullable";

import {
    KeepAliveSessionResponse,
    LoginResponse,
    LogoutResponse,
    ValidateSessionResponse
} from "../../model";

import { ClientAuthServiceConfig } from "./auth.config";

export class ClientAuthService {

    private readonly _httpService = new HttpClient();
    private readonly _config: Nullable<ClientAuthServiceConfig>;

    constructor(
        apiBaseUrl: string
    ) {
        this._config = new ClientAuthServiceConfig(apiBaseUrl);
    }

    public async login(username: string, password: string): Promise<LoginResponse> {
        const payload: LoginRequest = {
            username: username,
            password: password
        };
        const url = this._config!.getLoginUrl();
        return this._httpService
            .post<CoreLoginResponse, LoginRequest>(url, payload)
            .then(m => {
                const result: LoginResponse = {
                    success: m.payload?.success || false,
                    errors: m.payload?.success ? undefined : (m.payload as LoginErrorResponse).errors,
                    payload: m.payload?.success ? (m.payload as LoginSuccessResponse).payload : undefined
                };
                return result;
            })
            .catch(() => ({
                success: false,
                errors: [UNKNOWN_ERROR]
            }))
        ;
    }

    public async logout(sessionToken: string): Promise<LogoutResponse> {
        const payload: LogoutRequest = {
            sessionToken: sessionToken
        };
        const url = this._config!.getLogoutUrl();
        return this._httpService
            .post<CoreLogoutResponse, LogoutRequest>(url, payload)
            .then(m => {
                const result: LogoutResponse = {
                    success: m.payload?.success || false,
                    errors: m.payload?.success ? undefined : (m.payload as LogoutErrorResponse).errors,
                    payload: m.payload?.success ? (m.payload as LogoutSuccessResponse).payload : undefined
                }
                return result;
            })
        ;
    }

    public async validateSession(sessionToken: string): Promise<ValidateSessionResponse> {
        const payload: ValidateSessionRequest = {
            sessionToken: sessionToken
        };
        const url = this._config!.getValidateSessionUrl();
        return this._httpService
            .post<CoreValidateSessionResponse, ValidateSessionRequest>(url, payload)
            .then(m => {
                const result: ValidateSessionResponse = {
                    success: m.payload?.success || false,
                    errors: m.payload?.success ? undefined : (m.payload as ValidateSessionErrorResponse).errors,
                    payload: m.payload?.success ? (m.payload as ValidateSessionSuccessResponse).payload : undefined
                }
                return result;
            })
        ;
    }

    public async keepAliveSession(sessionToken: string): Promise<KeepAliveSessionResponse> {
        const payload: KeepAliveSessionRequest = {
            sessionToken: sessionToken
        };
        const url = this._config!.getKeepAliveSessionUrl();
        return this._httpService
            .post<CoreKeepAliveSessionResponse, KeepAliveSessionRequest>(url, payload)
            .then(m => {
                const result: KeepAliveSessionResponse = {
                    success: m.payload?.success || false,
                    errors: m.payload?.success ? undefined : (m.payload as KeepAliveSessionErrorResponse).errors,
                    payload: m.payload?.success ? (m.payload as KeepAliveSessionSuccessResponse).payload : undefined
                }
                return result;
            })
        ;
    }

}
