import {
    AUTH_API_ENDPOINTS,
    BaseKeepAliveResponse,
    BaseValidateResponse,
    KeepAliveRequest,
    KeepAliveSuccessResponse,
    LoginErrorResponse,
    LoginRequest,
    LoginSuccessResponse,
    LogoutRequest,
    LogoutResponse,
    ValidateRequest,
    ValidateSuccessResponse
} from "@wraithlight/core.auth-common";
import {
    BaseController,
    HttpController,
    HttpPost
} from "@wraithlight/core.node";
import { toUtc } from "@wraithlight/core.types";

import { AuthService, SessionService } from "../service";

@HttpController(AUTH_API_ENDPOINTS.root)
export class SessionController extends BaseController {

    private readonly _sessionService = SessionService.getInstance();
    private readonly _authServuce = new AuthService();

    @HttpPost(AUTH_API_ENDPOINTS.login)
    public async login(request: LoginRequest): Promise<void> {
        const result = await this._authServuce.login(request.username, request.password, request.scope);
        if (!result.success) {
            const loginResult: LoginErrorResponse = {
                success: false,
                errors: []
            };
            return super.unauthorized(loginResult);
        }
        const session = this._sessionService.startSession(request.username, request.scope);
        const loginResult: LoginSuccessResponse = {
            success: true,
            session: {
                validFromUtc: toUtc(session.startAt),
                validToUtc: toUtc(session.validUntil),
                token: session.token,
                scope: session.scope
            }
        };
        super.ok(loginResult);
    }

    @HttpPost(AUTH_API_ENDPOINTS.logout)
    public async logout(request: LogoutRequest): Promise<void> {
        const result = this._sessionService.stopSession(request.sessionToken, request.scope);
        if (result) {
            const logoutResult: LogoutResponse = {
                success: false
            };
            return super.badRequest(logoutResult);
        }
        const logoutResult: LogoutResponse = {
            success: true
        };
        super.ok(logoutResult);
    }

    @HttpPost(AUTH_API_ENDPOINTS.keepAlive)
    public async keepAlive(request: KeepAliveRequest): Promise<void> {
        const result = this._sessionService.renew(request.sessionToken, request.scope);
        if (!result.success) {
            const keepAliveResult: BaseKeepAliveResponse = {
                success: false
            }
            return super.badRequest(keepAliveResult);
        }
        const keepAliveResult: KeepAliveSuccessResponse = {
            success: true,
            session: {
                validFromUtc: toUtc(result.session.startAt),
                validToUtc: toUtc(result.session.validUntil),
                token: result.session.token,
                scope: result.session.scope
            }
        };
        super.ok(keepAliveResult);
    }

    @HttpPost(AUTH_API_ENDPOINTS.sessionValid)
    public async validate(request: ValidateRequest): Promise<void> {
        const result = this._sessionService.checkSession(request.sessionToken, request.scope);
        if (!result.isValid) {
            const validateResult: BaseValidateResponse = {
                success: false
            };
            return super.badRequest(validateResult);
        }
        const validateResult: ValidateSuccessResponse = {
            success: true,
            session: {
                validFromUtc: toUtc(result.session.startAt),
                validToUtc: toUtc(result.session.validUntil),
                token: result.session.token,
                scope: result.session.scope
            }
        };
        super.ok(validateResult);
    }

}
