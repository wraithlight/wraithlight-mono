import {
  BaseController,
  HttpDecorators
} from "@wraithlight/core.node.evo";
import {
  EXTERNAL_ENDPOINTS
} from "@wraithlight/core.user-management.constants";
import {
  ExternalCheckUsernameRequest,
  ExternalCheckEmailRequest
} from "@wraithlight/core.user-management.types";
import {
  ApiToken
} from "@wraithlight/common.node.evo-utils";

import { UserManager } from "../../../../manager";

import {
  ApiTokenValidator,
  CheckEmailValidator,
  CheckUsernameValidator
} from "./validator";
import { BadRequestError, UnauthorizedError } from "@wraithlight/core/core.errors";

@HttpDecorators.httpController(EXTERNAL_ENDPOINTS.user.forServer())
export class UserController extends BaseController {

  private readonly _apiTokenValidator = new ApiTokenValidator();
  private readonly _checkEmailValidator = new CheckEmailValidator();
  private readonly _checkUsernameValidator = new CheckUsernameValidator();

  private readonly _userManager = new UserManager();

  @HttpDecorators.httpPost(EXTERNAL_ENDPOINTS.user.checkUsername.forServer())
  public async checkUsername(
    @ApiToken() apiToken: string,
    @HttpDecorators.fromBody() model: ExternalCheckUsernameRequest
  ) {
    const apiTokenValidationResult = this._apiTokenValidator.validate(apiToken);
    if (!apiTokenValidationResult.success) {
      throw new UnauthorizedError();
    }

    const validatonResult = this._checkUsernameValidator.validate(model);
    if (!validatonResult.success) {
      throw new BadRequestError();
    }

    await this._userManager.checkUsername(model.username);
    return this.accepted();
  }

  @HttpDecorators.httpPost(EXTERNAL_ENDPOINTS.user.checkEmail.forServer())
  public async checkEmailAddress(
    @ApiToken() apiToken: string,
    @HttpDecorators.fromBody() model: ExternalCheckEmailRequest
  ) {
    const apiTokenValidationResult = this._apiTokenValidator.validate(apiToken);
    if (!apiTokenValidationResult.success) {
      throw new UnauthorizedError();
    }

    const validatonResult = this._checkEmailValidator.validate(model);
    if (!validatonResult.success) {
      throw new BadRequestError();
    }

    await this._userManager.checkEmailAddress(model.emailAddress);
    return this.accepted();
  }

}
