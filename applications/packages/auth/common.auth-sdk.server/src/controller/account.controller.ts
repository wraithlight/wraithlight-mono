import { API_ROUTES } from "@wraithlight/core.auth.constant";
import {
    ApiRegisterErrorResponse,
    RegisterErrorResponse,
    RegisterRequest,
    RegisterSuccessResponse
} from "@wraithlight/core.auth.types";
import {
    BaseController,
    HttpController,
    HttpPost
} from "@wraithlight/core.node";
import { isNil } from "@wraithlight/core.nullable";

import { ServerAccountService } from "../service";

@HttpController(API_ROUTES.v1.account.root)
export class ServerAccountControllerV1 extends BaseController {

    private readonly _accountService = new ServerAccountService();

    @HttpPost(API_ROUTES.v1.account.register)
    public async register(model: RegisterRequest): Promise<void> {
        const result = await this._accountService.register(
            model.username,
            model.password,
            model.passwordVerify,
            model.emailAddress
        );
        if (isNil(result) || !result.success) {
            const data: RegisterErrorResponse = {
                success: false,
                errors: (result as ApiRegisterErrorResponse).errors
            }
            return super.badRequest(data);
        }

        const data: RegisterSuccessResponse = {
            success: true
        }
        return super.ok(data);
    }

}
