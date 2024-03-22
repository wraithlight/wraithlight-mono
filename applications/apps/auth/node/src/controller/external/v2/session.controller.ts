import { API_ENDPOINTS } from "@wraithlight/core.auth.constant";
import {
    ApiKeepAliveSessionErrorResponse,
    ApiKeepAliveSessionRequest,
    ApiKeepAliveSessionSuccessResponse,
    ApiLoginErrorResponse,
    ApiLoginRequest,
    ApiLoginSuccessResponse,
    ApiLogoutErrorResponse,
    ApiLogoutRequest,
    ApiLogoutSuccessResponse,
    ApiValidateSessionErrorResponse,
    ApiValidateSessionRequest,
    ApiValidateSessionSuccessResponse
} from "@wraithlight/core.auth.types";
import { toUtc } from "@wraithlight/core.date";
import {
    BaseController,
    HttpController,
    HttpPost }
from "@wraithlight/core.node";
import { isNil } from "@wraithlight/core.nullable";

import {
    AuthService,
    SessionService
} from "../../../service";
import { AccountService } from "../../../service/account/account.service";

@HttpController(API_ENDPOINTS.external.v2.auth.root)
export class SessionControllerV2 extends BaseController {

    private readonly _authService = new AuthService();
    private readonly _accountService = new AccountService();
    private readonly _sessionService = SessionService.getInstance();

    @HttpPost(API_ENDPOINTS.external.v2.auth.login)
    public async login(model: ApiLoginRequest): Promise<void> {
        const result = await this._authService
            .login(
                model.username,
                model.password,
                model.loginScope
            )
        ;
        if (result.success) {
            const user = await this._accountService
                .findByUsername(model.username);
            if (isNil(user)) {
                return super.notFound();
            }
            const session = await this._sessionService
                .startSession(user.id, model.loginScope);
            const data: ApiLoginSuccessResponse = {
                success: true,
                payload: {
                    sessionToken: session.token,
                    validTo: toUtc(session.validUntil)
                }
            };
            return super.ok(data);
        }

        const data: ApiLoginErrorResponse = {
            success: false,
            errors: result.errors ?? []
        };

        return super.unauthorized(data);
    }

    @HttpPost(API_ENDPOINTS.external.v2.auth.logout)
    public async logout(
        model: ApiLogoutRequest
    ): Promise<void> {
        const result = await this._sessionService
            .stopSession(model.sessionToken);
        if (!result) {
            const data: ApiLogoutErrorResponse = {
                success: false,
                errors: []
            };
            return super.badRequest(data);
        }
        const data: ApiLogoutSuccessResponse = {
            success: true,
            payload: true
        };
        return super.ok(data);
    }

    @HttpPost(API_ENDPOINTS.external.v2.auth.keepAliveSession)
    public async keepAliveSession(
        model: ApiKeepAliveSessionRequest
    ): Promise<void> {
        const result = await this._sessionService.renew(model.sessionToken);
        if (isNil(result) || !result.success || isNil(result.session)) {
            const data: ApiKeepAliveSessionErrorResponse = {
                success: false,
                errors: []
            };
            return super.badRequest(data);
        }
        const data: ApiKeepAliveSessionSuccessResponse = {
            success: true,
            payload: {
                sessionToken: result.session.token,
                validTo: toUtc(result.session.validUntil)
            }
        };
        super.ok(data);
    }

    @HttpPost(API_ENDPOINTS.external.v2.auth.validateSession)
    public async validateSession(
        model: ApiValidateSessionRequest
    ): Promise<void> {
        const result = await this._sessionService
            .checkSession(model.sessionToken);
        if (!result.isValid || isNil(result.session)) {
            const validateResult: ApiValidateSessionErrorResponse = {
                success: false,
                errors: []
            };
            return super.badRequest(validateResult);
        }

        const validateResult: ApiValidateSessionSuccessResponse = {
            success: true,
            payload: {
                sessionToken: result.session.token,
                validTo: toUtc(result.session.validUntil)
            }
        };
        return super.ok(validateResult);
    }

}
