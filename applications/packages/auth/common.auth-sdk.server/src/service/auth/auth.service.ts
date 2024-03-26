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
import { CoreHttpClient } from "@wraithlight/core.http";
import { Nullable } from "@wraithlight/core.nullable";

import { ServerAuthServiceConfig } from "./auth.config";

export class ServerAuthService {

    private readonly _httpService = new CoreHttpClient();
    private readonly _config = new ServerAuthServiceConfig();

    public async login(
        username: string,
        password: string,
        scope: LoginScope
    ): Promise<Nullable<ApiLoginResponse>> {
        const url = this._config.getLoginUrl();
        const payload: ApiLoginRequest = {
            username: username,
            password: password,
            loginScope: scope
        };
        return this._httpService
            .post<ApiLoginResponse, ApiLoginRequest>(
                url,
                payload
            )
            .then(m => m.payload)
        ;
    }

    public async logout(
        sessionToken: string,
        scope: LoginScope
    ): Promise<Nullable<ApiLogoutResponse>> {
        const url = this._config.getLogoutUrl();
        const payload: ApiLogoutRequest = {
            sessionToken: sessionToken,
            loginScope: scope
        };
        return this._httpService
            .post<ApiLogoutResponse, ApiLogoutRequest>(
                url,
                payload
            )
            .then(m => m.payload)
        ;
    }

    public async validateSession(
        sessionToken: string,
        scope: LoginScope
    ): Promise<Nullable<ApiValidateSessionResponse>> {
        const url = this._config.getValidateSessionUrl();
        const payload: ApiValidateSessionRequest = {
            sessionToken: sessionToken,
            loginScope: scope
        };
        return this._httpService
            .post<ApiValidateSessionResponse, ApiValidateSessionRequest>(
                url,
                payload
            )
            .then(m => m.payload)
        ;
    }

    public async keepAliveSession(
        sessionToken: string,
        scope: LoginScope
    ): Promise<Nullable<ApiValidateSessionResponse>> {
        const url = this._config.getKeepAliveSessionUrl();
        const payload: ApiKeepAliveSessionRequest = {
            sessionToken: sessionToken,
            loginScope: scope
        };
        return this._httpService
            .post<ApiValidateSessionResponse, ApiValidateSessionRequest>(
                url,
                payload
            )
            .then(m => m.payload)
        ;
    }

}
