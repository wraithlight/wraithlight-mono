import { API_ENDPOINTS } from "@wraithlight/core.auth.constant";
import {
    ApiRegisterRequest,
    ApiRegisterErrorResponse,
    ApiRegisterSuccessResponse
} from "@wraithlight/core.auth.types";
import { BaseController, HttpController, HttpPost } from "@wraithlight/core.node";

import { AccountService } from "../../service/account/account.service";

@HttpController(API_ENDPOINTS.v2.account.root)
export class AccountControllerV2 extends BaseController {

    private readonly _accountService = new AccountService();

    @HttpPost(API_ENDPOINTS.v2.account.register)
    public async register(dto: ApiRegisterRequest): Promise<void> {
        const result = await this._accountService.create(
            dto.username,
            dto.emailAddress,
            dto.password,
            dto.passwordVerify
        );

        if (!result.success) {
            return this.badRequest<ApiRegisterErrorResponse>({
                success: false,
                errors: [...(result.errors || [])]
            });
        }

        return this.created<ApiRegisterSuccessResponse>({
            success: true
        });
    }

}
