import {
  SessionService,
  UserApplicationService,
  UserService,
  UserDbo,
  SessionDbo
} from "@wraithlight/common.user-management.dal";
import { PasswordService } from "@wraithlight/common.password";
import { Guid } from "@wraithlight/core.guid";
import {
  ForbiddenError,
  InternalServerError,
  NotFoundError,
  UnauthorizedError
} from "@wraithlight/core.errors";
import {
  ExternalSessionPatchResponse,
  ExternalSessionPostResponse,
  ExternalSessionResponse
} from "@wraithlight/core.user-management.types";
import { utcNow } from "@wraithlight/framework.date";
import { isNil } from "@wraithlight/framework.nullable";

import { SessionTokenHelper } from "../../helper";

import { dboToDto } from "./session.mapper";

export class SessionManager {

  private readonly _userService = new UserService();
  private readonly _sessionService = new SessionService();
  private readonly _passwordService = new PasswordService();
  private readonly _userContextService = new UserApplicationService();
  private readonly _sessionHelper = new SessionTokenHelper();

  public async validateSession(
    contextId: Guid,
    sessionToken: string
  ) {
    const sessionResult = await this._sessionService.findByToken(sessionToken);
    if (sessionResult.isErrorTC()) {
      throw new NotFoundError();
    }

    if (sessionResult.payload.isDeleted) {
      throw new UnauthorizedError();
    }

    if (sessionResult.payload.tokenValidUntilUtc.getDate() < utcNow().getDate()) {
      throw new UnauthorizedError();
    }

    if (sessionResult.payload.applicationId !== contextId) {
      throw new UnauthorizedError();
    }

    const decryptResult = this._sessionHelper.decrypt(sessionToken);

    if (decryptResult.isErrorTC()) {
      throw new UnauthorizedError();
    }

    if (decryptResult.payload.contextId !== contextId) {
      throw new UnauthorizedError();
    }

    if (decryptResult.payload.userId !== sessionResult.payload.userId) {
      throw new ForbiddenError();
    }

    return dboToDto(sessionResult.payload);
  }

  public async tryLogin(
    contextId: Guid,
    identifier: string,
    password: string
  ): Promise<ExternalSessionPostResponse> {
    const user = await this.getUserByIdentifier(identifier);
    const hasUserContextResult = await this._userContextService.hasUserContext(
      user.id,
      contextId
    );

    if (hasUserContextResult.isErrorTC()) {
      throw new ForbiddenError();
    }

    const passwordVerificationResult = this._passwordService.verifyPassword(
      password,
      user.passwordHash
    );

    if (!passwordVerificationResult) {
      throw new UnauthorizedError();
    }

    const result = await this.login(user.id, contextId);
    return result;
  }

  public async logout(
    sessionToken: string
  ): Promise<void> {
    const sessionResult = await this._sessionService.findByToken(sessionToken);
    if (sessionResult.isErrorTC()) {
      throw new NotFoundError();
    }

    const deleteResult = await this._sessionService.deleteSessionByToken(sessionToken);

    if (deleteResult.isErrorTC()) {
      throw new NotFoundError();
    }
  }

  public async renew(
    sessionToken: string
  ): Promise<ExternalSessionPatchResponse> {
    const sessionResult = await this._sessionService.findByToken(sessionToken);
    if (sessionResult.isErrorTC()) {
      throw new NotFoundError();
    }

    const deleteResult = await this._sessionService.deleteSessionByToken(
      sessionToken
    );
    if (deleteResult.isErrorTC()) {
      throw new InternalServerError();
    }

    const login = await this.login(
      sessionResult.payload.userId,
      sessionResult.payload.applicationId
    );

    return login;
  }

  private async login(
    userId: Guid,
    contextId: Guid
  ): Promise<ExternalSessionResponse> {

    const sessionToken = this._sessionHelper.encrypt(
      userId,
      contextId
    );

    if (sessionToken.isErrorTC()) {
      throw new InternalServerError();
    }

    // TODO: Now this creates a 60 minutes long session as well.
    // see: https://github.com/wraithlight/wraithlight-mono/issues/1117
    const refreshToken = this._sessionHelper.encrypt(
      userId,
      contextId
    );

    if (refreshToken.isErrorTC()) {
      throw new InternalServerError();
    }

    const sessionCreateResult = await this._sessionService.createSession(
      userId,
      contextId,
      sessionToken.payload,
      refreshToken.payload
    );

    if (sessionCreateResult.isErrorTC()) {
      throw new InternalServerError();
    }

    return dboToDto(sessionCreateResult.payload);
  }

  private async getUserByIdentifier(identifier: string): Promise<UserDbo> {
    const byEmailResult = await this._userService.findUserByEmail(identifier);
    const byNameResult = await this._userService.findUserByUsername(identifier);

    const byEmail = byEmailResult.isSuccessTC()
      ? byEmailResult.payload
      : undefined
    ;

    const byName = byNameResult.isSuccessTC()
      ? byNameResult.payload
      : undefined
    ;

    const dbo = isNil(byEmail)
      ? byName
      : byEmail
    ;

    if (isNil(dbo)) {
      throw new NotFoundError();
    }

    return dbo;
  }

}
