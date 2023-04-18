import {
    BaseController,
    HttpController,
    HttpPost
} from "@wraithlight/core.node";
import { API_ROUTES } from "@wraithlight/core.auth.constant";
import {
    ApiKeepAliveSessionErrorResponse,
    ApiKeepAliveSessionSuccessResponse,
    ApiLoginErrorResponse,
    ApiLoginSuccessResponse,
    ApiLogoutErrorResponse,
    ApiLogoutSuccessResponse,
    ApiValidateSessionErrorResponse,
    ApiValidateSessionSuccessResponse,
    KeepAliveSessionErrorResponse,
    KeepAliveSessionRequest,
    KeepAliveSessionSuccessResponse,
    LoginErrorResponse,
    LoginRequest,
    LoginScope,
    LoginSuccessResponse,
    LogoutErrorResponse,
    LogoutRequest,
    LogoutSuccessResponse,
    ValidateSessionErrorResponse,
    ValidateSessionRequest,
    ValidateSessionSuccessResponse
} from "@wraithlight/core.auth.types";

import { ServerAuthService } from "../service";

@HttpController(API_ROUTES.v1.root)
export class ServerAuthControllerV1 extends BaseController {

    private readonly _authService = new ServerAuthService();

    constructor(
        private readonly _scope: LoginScope
    ) {
        super();
    }

    @HttpPost(API_ROUTES.v1.login)
    public async login(model: LoginRequest): Promise<void> {
        const result = await this._authService.login(model.username, model.password, this._scope);
        if (!result.success) {
            const data: LoginErrorResponse = {
                success: false,
                errors: (result as ApiLoginErrorResponse).errors
            }
            return super.unauthorized(data);
        }

        const data: LoginSuccessResponse = {
            success: true,
            payload: (result as ApiLoginSuccessResponse).payload
        }
        return super.ok(data);
    }

    @HttpPost(API_ROUTES.v1.logout)
    public async logout(model: LogoutRequest): Promise<void> {
        const result = await this._authService.logout(model.sessionToken, this._scope);
        if (!result.success) {
            const data: LogoutErrorResponse = {
                success: false,
                errors: (result as ApiLogoutErrorResponse).errors
            };
            return super.badRequest(data);
        }

        const data: LogoutSuccessResponse = {
            success: true,
            payload: (result as ApiLogoutSuccessResponse).payload
        };
        return super.ok(data);
    }

    @HttpPost(API_ROUTES.v1.keepAlive)
    public async keepAliveSession(model: KeepAliveSessionRequest): Promise<void> {
        const result = await this._authService.keepAliveSession(model.sessionToken, this._scope);
        if (!result.success) {
            const data: KeepAliveSessionErrorResponse = {
                success: false,
                errors: (result as ApiKeepAliveSessionErrorResponse).errors
            };
            return super.unauthorized(data);
        }

        const data: KeepAliveSessionSuccessResponse = {
            success: true,
            payload: (result as ApiKeepAliveSessionSuccessResponse).payload
        };
        return super.ok(data);
    }

    @HttpPost(API_ROUTES.v1.validateSession)
    public async validateSession(model: ValidateSessionRequest): Promise<void> {
        const result = await this._authService.validateSession(model.sessionToken, this._scope);
        if (!result.success) {
            const data: ValidateSessionErrorResponse = {
                success: false,
                errors: (result as ApiValidateSessionErrorResponse).errors
            };
            return super.unauthorized(data);
        }

        const data: ValidateSessionSuccessResponse = {
            success: true,
            payload: (result as ApiValidateSessionSuccessResponse).payload
        };
        return super.ok(data);
    }

}
