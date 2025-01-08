import {
  BaseController,
  BaseControllerResult,
  HttpDecorators
} from "@wraithlight/core.node.evo";
import { EXTERNAL_ENDPOINTS } from "@wraithlight/core.user-management.constants";
import { Guid } from "@wraithlight/core.guid";
import { ApiToken, SessionToken } from "@wraithlight/common.node.evo-utils";
import {
  ExternalSessionDeleteResponse,
  ExternalSessionGetResponse,
  ExternalSessionPostRequest
} from "@wraithlight/core.user-management.types";
import { BadRequestError, UnauthorizedError } from "@wraithlight/core.errors";

import { SessionManager } from "../../../../manager";

import {
  ApiTokenValidator,
  ContextIdValidator,
  LoginValidator,
  SessionTokenValidator
} from "./validator";

/**
 * @public Stewpid knip issue.
 */
@HttpDecorators.httpController(EXTERNAL_ENDPOINTS.session.forServer())
export class SessionController extends BaseController {

  private readonly _loginValidator = new LoginValidator();
  private readonly _apiTokenValidator = new ApiTokenValidator();
  private readonly _contextIdValidator = new ContextIdValidator();
  private readonly _sessionTokenValidator = new SessionTokenValidator();

  private readonly _sessionManager = new SessionManager();

  @HttpDecorators.httpGet(EXTERNAL_ENDPOINTS.session.contextId.get.forServer())
  public async validate(
    @HttpDecorators.fromPath("contextId") contextId: Guid,
    @SessionToken() sessionToken: string,
    @ApiToken() apiToken: Guid
  ): Promise<BaseControllerResult<ExternalSessionGetResponse>> {
    const apiTokenValidationResult = this._apiTokenValidator.validate(apiToken);
    if (!apiTokenValidationResult.success) {
      throw new UnauthorizedError();
    }

    const contextIdValidationResult = this._contextIdValidator.validate(contextId);
    if (!contextIdValidationResult.success) {
      throw new UnauthorizedError();
    }

    const sessionTokenValidationResult = this._sessionTokenValidator.validate(sessionToken);
    if (!sessionTokenValidationResult.success) {
      throw new UnauthorizedError();
    }

    const result = await this._sessionManager.validateSession(
      contextId,
      sessionToken
    );

    return this.ok(result);
  }

  @HttpDecorators.httpPost(EXTERNAL_ENDPOINTS.session.contextId.post.forServer())
  public async login(
    @HttpDecorators.fromPath("contextId") contextId: Guid,
    @ApiToken() apiToken: Guid,
    @HttpDecorators.fromBody() model: ExternalSessionPostRequest
  ) {
    const apiTokenValidationResult = this._apiTokenValidator.validate(apiToken);
    if (!apiTokenValidationResult.success) {
      throw new UnauthorizedError();
    }

    const contextIdValidationResult = this._contextIdValidator.validate(contextId);
    if (!contextIdValidationResult.success) {
      throw new UnauthorizedError();
    }

    const modelValidationResult = this._loginValidator.validate(model);
    if (!modelValidationResult.success) {
      throw new BadRequestError();
    }

    const loginResult = await this._sessionManager.tryLogin(
      contextId,
      model.identifier,
      model.password
    );

    return this.ok(loginResult);
  }

  @HttpDecorators.httpDelete(EXTERNAL_ENDPOINTS.session.contextId.delete.forServer())
  public async logout(
    @HttpDecorators.fromPath("contextId") contextId: Guid,
    @SessionToken() sessionToken: string,
    @ApiToken() apiToken: Guid
  ) {
    const apiTokenValidationResult = this._apiTokenValidator.validate(apiToken);
    if (!apiTokenValidationResult.success) {
      throw new UnauthorizedError();
    }

    const contextIdValidationResult = this._contextIdValidator.validate(contextId);
    if (!contextIdValidationResult.success) {
      throw new UnauthorizedError();
    }

    const sessionTokenValidationResult = this._sessionTokenValidator.validate(sessionToken);
    if (!sessionTokenValidationResult.success) {
      throw new UnauthorizedError();
    }

    await this._sessionManager.validateSession(contextId, sessionToken);
    await this._sessionManager.logout(sessionToken);

    const result: ExternalSessionDeleteResponse = {};

    return this.noContent(result);
  }

  @HttpDecorators.httpPatch(EXTERNAL_ENDPOINTS.session.contextId.patch.forServer())
  public async renew(
    @HttpDecorators.fromPath("contextId") contextId: Guid,
    @SessionToken() sessionToken: string,
    @ApiToken() apiToken: Guid
  ) {
    const apiTokenValidationResult = this._apiTokenValidator.validate(apiToken);
    if (!apiTokenValidationResult.success) {
      throw new UnauthorizedError();
    }

    const contextIdValidationResult = this._contextIdValidator.validate(contextId);
    if (!contextIdValidationResult.success) {
      throw new UnauthorizedError();
    }

    const sessionTokenValidationResult = this._sessionTokenValidator.validate(sessionToken);
    if (!sessionTokenValidationResult.success) {
      throw new UnauthorizedError();
    }

    await this._sessionManager.validateSession(contextId, sessionToken);
    const renew = await this._sessionManager.renew(
      sessionToken
    );

    return this.ok(renew);
  }

}
