import { BaseController, HttpController, HttpPost } from "@wraithlight/core.node";
import {
    EDITOR_API_ENDPOINTS,
    FailLoginResponse,
    FailRenewResponse,
    FailValidateResponse,
    LoginRequest,
    LogoutRequest,
    RenewRequest,
    SuccessLoginResponse,
    SuccessRenewResponse,
    SuccessValidateResponse,
    ValidateRequest
} from "@wraithlight/core.editor-common";

import { AuthService } from "../service";

@HttpController(EDITOR_API_ENDPOINTS.auth.root)
export class AuthController extends BaseController {

    private readonly _authService = new AuthService();

    @HttpPost(EDITOR_API_ENDPOINTS.auth.login)
    public async login(dto: LoginRequest): Promise<void> {
        const result = await this._authService.login(dto.username, dto.password);
        if (!result.success) {
            const response: FailLoginResponse = {
                success: false,
                errors: result.errors
            };
            return this.unauthorized(response);
        }

        const response: SuccessLoginResponse = {
            success: true,
            token: result.session.token,
            validUntil: result.session.validUntil
        };
        return this.ok(response);
    }

    @HttpPost(EDITOR_API_ENDPOINTS.auth.logout)
    public async logout(dto: LogoutRequest): Promise<void> {
        const result = await this._authService.logout(dto.sessionToken);
        return this.ok(result);
    }

    @HttpPost(EDITOR_API_ENDPOINTS.auth.renew)
    public async renew(dto: RenewRequest): Promise<void> {
        const result = await this._authService.renew(dto.sessionToken);
        if (!result) {
            const response: FailRenewResponse = {
                success: false,
                errors: result.errors
            };
            return this.badRequest(response);
        }

        const response: SuccessRenewResponse = {
            success: true,
            token: result.session.token,
            validUntil: result.session.validUntil
        };
        return this.ok(response);
    }

    @HttpPost(EDITOR_API_ENDPOINTS.auth.validate)
    public async validate(dto: ValidateRequest): Promise<void> {
        const result = await this._authService.validate(dto.sessionToken);

        if (!result.success) {
            const response: FailValidateResponse = {
                success: false,
                errors: []
            };
            return this.unauthorized(response);
        }

        const response: SuccessValidateResponse = {
            success: true,
            token: dto.sessionToken
        };
        return this.ok(response);
    }

}
