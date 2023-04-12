import {
    ACCOUNT_API_ENDPOINTS,
    ErrorRegisterResponse,
    RegisterModel,
    SuccessRegisterResponse
} from "@wraithlight/core.auth-common";
import { BaseController, HttpController, HttpPost } from "@wraithlight/core.node";

import { AccountService } from "../service/account/account.service";

@HttpController(ACCOUNT_API_ENDPOINTS.root)
export class AcoountController extends BaseController {

    private readonly _accountService = new AccountService();

    @HttpPost(ACCOUNT_API_ENDPOINTS.register)
    public async register(dto: RegisterModel): Promise<void> {
        const result = await this._accountService.create(
            dto.username,
            dto.emailAddress,
            dto.password,
            dto.passwordVerify
        );

        if (!result.success) {
            return this.badRequest<ErrorRegisterResponse>({
                success: false,
                errors: [...result.errors]
            });
        }

        return this.created<SuccessRegisterResponse>({
            success: true
        });
    }

}
