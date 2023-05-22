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
import { toUtc } from "@wraithlight/core.types";
import {
    BaseController,
    HttpController,
    HttpPost }
from "@wraithlight/core.node";

import {
    AuthService,
    SessionService
} from "../../../service";

@HttpController(API_ENDPOINTS.external.v2.auth.root)
export class SessionControllerV2 extends BaseController {

    private readonly _authService = new AuthService();
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
            const session = this._sessionService
                .startSession(model.username, model.loginScope);
            const data: ApiLoginSuccessResponse = {
                success: true,
                payload: {
                    sessionToken: session.token,
                    validFrom: toUtc(session.startAt),
                    validTo: toUtc(session.validUntil)
                }
            }
            return super.ok(data);
        }

        const data: ApiLoginErrorResponse = {
            success: false,
            errors: result.errors ?? []
        };

        return super.unauthorized(data);
    }

    @HttpPost(API_ENDPOINTS.external.v2.auth.logout)
    public async logout(model: ApiLogoutRequest) {
        const result = this._sessionService.stopSession(model.sessionToken, model.loginScope);
        if (result) {
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

    @HttpPost(API_ENDPOINTS.external.v2.auth.keepAlive)
    public async keepAliveSession(model: ApiKeepAliveSessionRequest) {
        const result = this._sessionService.renew(model.sessionToken, model.loginScope);
        if (!result.success) {
            const data: ApiKeepAliveSessionErrorResponse = {
                success: false,
                errors: []
            };
            return super.badRequest(data);
        }
        const data: ApiKeepAliveSessionSuccessResponse = {
            success: true,
            payload: {
                sessionToken: result.session!.token,
                validFrom: toUtc(result.session!.startAt),
                validTo: toUtc(result.session!.validUntil)
            }
        };
        super.ok(data);
    }

    @HttpPost(API_ENDPOINTS.external.v2.auth.validateSession)
    public async validateSession(model: ApiValidateSessionRequest) {
        const result = this._sessionService.checkSession(model.sessionToken, model.loginScope);
        if (!result.isValid) {
            const validateResult: ApiValidateSessionErrorResponse = {
                success: false,
                errors: []
            };
            return super.badRequest(validateResult);
        }
        const validateResult: ApiValidateSessionSuccessResponse = {
            success: true,
            payload: {
                sessionToken: result.session!.token,
                validFrom: toUtc(result.session!.startAt),
                validTo: toUtc(result.session!.validUntil)
            }
        };
        return super.ok(validateResult);
    }

}
