import { AuthClient } from "@wraithlight/common.auth-client";
import { KeepAliveSuccessResponse, LoginErrorResponse, LoginScope, LoginSuccessResponse } from "@wraithlight/core.auth-common";
import { LoginResult, LogoutResult, RenewResult, ValidateResult } from "./auth.model";

export class AuthService {

    private readonly _commonAuthService = new AuthClient();

    public async login(
        username: string,
        password: string
    ): Promise<LoginResult> {
        const result = await this._commonAuthService.login(username, password, LoginScope.Editor);
        if (result.success) {
            const successResult = result as LoginSuccessResponse;
            return {
                success: true,
                session: {
                    token: successResult.session.token,
                    validUntil: successResult.session.validToUtc
                }
            };
        }

        const failResult = result as LoginErrorResponse;
        return {
            success: false,
            errors: failResult.errors
        };
    }

    public async logout(
        token: string
    ): Promise<LogoutResult> {
        const result = await this._commonAuthService.logout(token, LoginScope.Editor);
        return { success: result.success };
    }

    public async renew(
        token: string
    ): Promise<RenewResult> {
        const result = await this._commonAuthService.keepAlive(token, LoginScope.Editor);

        if (result.success) {
            const successResult = result as KeepAliveSuccessResponse;
            return {
                success: true,
                session: {
                    token: successResult.session.token,
                    validUntil: successResult.session.validToUtc
                }
            };
        }

        return {
            success: false
        };
    }

    public async validate(
        token: string
    ): Promise<ValidateResult> {
        const result = await this._commonAuthService.validate(token, LoginScope.Editor);

        return {
            success: result
        };
    }

}
