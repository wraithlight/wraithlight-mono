import {
    ApiKeepAliveSessionRequest,
    ApiLoginRequest,
    ApiLoginResponse,
    ApiLogoutRequest,
    ApiLogoutResponse,
    ApiValidateSessionRequest,
    ApiValidateSessionResponse,
    LoginScope
} from "@wraithlight/core.auth.types";
import { HttpClient } from "@wraithlight/core.http";

import { ServerAuthServiceConfig } from "./auth.config";

export class ServerAuthService {

    private readonly _httpService = new HttpClient();
    private readonly _config = new ServerAuthServiceConfig();

    public async login(
        username: string,
        password: string,
        scope: LoginScope
    ): Promise<ApiLoginResponse> {
        const url = this._config.getLoginUrl();
        const payload: ApiLoginRequest = {
            username: username,
            password: password,
            loginScope: scope
        };
        return this._httpService
            .post<ApiLoginResponse, ApiLoginRequest>(url, payload)
            .then(m => m.payload)
        ;
    }

    public async logout(
        sessionToken: string,
        scope: LoginScope
    ): Promise<ApiLogoutResponse> {
        const url = this._config.getLogoutUrl();
        const payload: ApiLogoutRequest = {
            sessionToken: sessionToken,
            loginScope: scope
        };
        return this._httpService
            .post<ApiLogoutResponse, ApiLogoutRequest>(url, payload)
            .then(m => m.payload)
        ;
    }

    public async validateSession(
        sessionToken: string,
        scope: LoginScope
    ) {
        const url = this._config.getValidateSessionUrl();
        const payload: ApiValidateSessionRequest = {
            sessionToken: sessionToken,
            loginScope: scope
        };
        return this._httpService
            .post<ApiValidateSessionResponse, ApiValidateSessionRequest>(url, payload)
            .then(m => m.payload)
        ;
    }

    public async keepAliveSession(
        sessionToken: string,
        scope: LoginScope
    ) {
        const url = this._config.getKeepAliveSessionUrl();
        const payload: ApiKeepAliveSessionRequest = {
            sessionToken: sessionToken,
            loginScope: scope
        };
        return this._httpService
            .post<ApiValidateSessionResponse, ApiValidateSessionRequest>(url, payload)
            .then(m => m.payload)
        ;
    }

}
