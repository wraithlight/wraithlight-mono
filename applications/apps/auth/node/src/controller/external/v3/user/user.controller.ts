import {
  BaseController,
  HttpDecorators
} from "@wraithlight/core.node.evo";
import {
  EXTERNAL_ENDPOINTS,
  USER_PASSWORD
} from "@wraithlight/core.user-management.constants";
import {
  ExternalCheckUsernameRequest,
  ExternalCheckEmailRequest,
  ExternalUserPostRequest,
  ExternalUserPatchRequest
} from "@wraithlight/core.user-management.types";
import {
  ApiToken,
  SessionToken
} from "@wraithlight/common.node.evo-utils";

import { UserManager } from "../../../../manager";

import {
  ApiTokenValidator,
  CheckEmailValidator,
  CheckUsernameValidator,
  ModifyValidator,
  RegisterValidator
} from "./validator";
import { BadRequestError, UnauthorizedError } from "@wraithlight/core.errors";
import { Guid } from "@wraithlight/core.guid";

/**
 * @public Stewpid knip issue.
 */
@HttpDecorators.httpController(EXTERNAL_ENDPOINTS.user.forServer())
export class UserController extends BaseController {

  private readonly _modifyValidator = new ModifyValidator();
  private readonly _apiTokenValidator = new ApiTokenValidator();
  private readonly _registerValidator = new RegisterValidator();
  private readonly _checkEmailValidator = new CheckEmailValidator();
  private readonly _checkUsernameValidator = new CheckUsernameValidator();

  private readonly _userManager = new UserManager();

  @HttpDecorators.httpGet(EXTERNAL_ENDPOINTS.user.get.forServer())
  public async listAllUsers(
    @ApiToken() apiToken: string
  ) {
    const apiTokenValidationResult = this._apiTokenValidator.validate(apiToken);
    if (!apiTokenValidationResult.success) {
      throw new UnauthorizedError();
    }

    const users = await this._userManager.listAllUsers();

    return this.ok(users);
  }

  @HttpDecorators.httpPost(EXTERNAL_ENDPOINTS.user.post.forServer())
  public async register(
    @ApiToken() apiToken: string,
    @HttpDecorators.fromBody() model: ExternalUserPostRequest
  ) {
    const apiTokenValidationResult = this._apiTokenValidator.validate(apiToken);
    if (!apiTokenValidationResult.success) {
      throw new UnauthorizedError();
    }

    const modelValidationResult = this._registerValidator.validate(model);
    if (!modelValidationResult.success) {
      console.log(JSON.stringify(modelValidationResult.errorList, undefined, 2))
      throw new BadRequestError();
    }

    const result = await this._userManager.createUser(
      model.emailAddress,
      model.username,
      model.password,
      model.passwordConfirmation,
      model.languageId
    );

    return this.ok(result);
  }

  @HttpDecorators.httpPatch(EXTERNAL_ENDPOINTS.user.userId.patch.forServer())
  public async modify(
    @ApiToken() apiToken: string,
    @SessionToken() sessionToken: string,
    @HttpDecorators.fromPath("id") id: Guid,
    @HttpDecorators.fromBody() model: ExternalUserPatchRequest
  ) {
    const apiTokenValidationResult = this._apiTokenValidator.validate(apiToken);
    if (!apiTokenValidationResult.success) {
      console.log("apiTokenValidationResult");
      throw new UnauthorizedError();
    }

    const modelValidationResult = this._modifyValidator.validate(model);
    if (!modelValidationResult.success) {
      console.log("modelValidationResult", JSON.stringify(modelValidationResult.errorList, undefined, 2));
      throw new UnauthorizedError();
    }

    const result = await this._userManager.modifyUser(
      id,
      model.update.password,
      model.update.passwordConfirmation,
      model.confirmationPassword,
      sessionToken
    );

    return this.ok(result);
  }

  @HttpDecorators.httpGet(EXTERNAL_ENDPOINTS.user.userId.get.forServer())
  public async getUser(
    @ApiToken() apiToken: string,
    @HttpDecorators.fromPath("id") id: Guid
  ) {
    const apiTokenValidationResult = this._apiTokenValidator.validate(apiToken);
    if (!apiTokenValidationResult.success) {
      throw new UnauthorizedError();
    }

    const user = await this._userManager.getUser(id);
    return this.ok(user);
  }

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

  @HttpDecorators.httpDelete(EXTERNAL_ENDPOINTS.user.userId.delete.forServer())
  public async deleteUser(
    @ApiToken() apiToken: Guid,
    @SessionToken() sessionToken: Guid,
    @HttpDecorators.fromHeader(USER_PASSWORD) password: string,
    @HttpDecorators.fromHeader("userId") userId: Guid
  ) {
    const apiTokenValidationResult = this._apiTokenValidator.validate(apiToken);
    if (!apiTokenValidationResult.success) {
      throw new UnauthorizedError();
    }

    await this._userManager.deleteUser(
      userId,
      sessionToken,
      password
    );
    
    return this.noContent();
  }

}
