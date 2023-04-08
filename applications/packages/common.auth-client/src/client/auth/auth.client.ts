import {
    BaseKeepAliveResponse,
    BaseLoginResponse,
    BaseValidateResponse,
    KeepAliveRequest,
    LoginRequest,
    LoginScope,
    LogoutRequest,
    LogoutResponse,
    ValidateRequest
} from "@wraithlight/core.auth-common";
import { HttpClient } from "@wraithlight/core.http";

import { AuthClientConfig } from "./auth.config";

export class AuthClient {

    private readonly _httpClient = new HttpClient();
    private readonly _config = new AuthClientConfig();

    public async validate(
        token: string,
        scope: LoginScope
    ): Promise<boolean> {
        const url = this._config.getAuthValidateUrl();
        const data: ValidateRequest = {
            sessionToken: token,
            scope: scope
        };
        const result = await this._httpClient.post<BaseValidateResponse, ValidateRequest>(url, data);
        return result.payload?.success || false;
    }

    public async login(
        username: string,
        password: string,
        scope: LoginScope
    ): Promise<BaseLoginResponse> {
        const url = this._config.getAuthLoginUrl();
        const data: LoginRequest = {
            username: username,
            password: password,
            scope: scope
        };
        const result = this._httpClient.post<BaseLoginResponse, LoginRequest>(url, data);
        return result.then(m => m.payload);
    }

    public async logout(
        token: string,
        scope: LoginScope
    ): Promise<LogoutResponse> {
        const url = this._config.getAuthLogoutUrl();
        const data: LogoutRequest = {
            sessionToken: token,
            scope: scope
        };
        const result = this._httpClient.post<LogoutResponse, LogoutRequest>(url, data);
        return result.then(m => m.payload);
    }

    public async keepAlive(
        token: string,
        scope: LoginScope
    ): Promise<BaseKeepAliveResponse> {
        const url = this._config.getAuthKeepAliveUrl();
        const data: KeepAliveRequest = {
            sessionToken: token,
            scope: scope
        };
        const result = this._httpClient.post<BaseKeepAliveResponse, KeepAliveRequest>(url, data);
        return result.then(m => m.payload);
    }

}
