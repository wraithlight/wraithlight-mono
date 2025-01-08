import { SessionService, UserService } from "@wraithlight/common.user-management.dal";
import { PasswordService } from "@wraithlight/common.password";
import { Guid } from "@wraithlight/core.guid";
import { ForbiddenError, NotFoundError, UnauthorizedError } from "@wraithlight/core.errors";
import { utcNow } from "@wraithlight/framework.date";

import { dboToDto } from "./session.mapper";
import { SessionTokenHelper } from "../../helper";

export class SessionManager {

  private readonly _userService = new UserService();
  private readonly _sessionService = new SessionService();
  private readonly _passwordService = new PasswordService();
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
  ) {

  }

  public async logout(
    sessionToken: string
  ) {
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
    contextId: Guid,
    sessionToken: string
  ) {

  }

}
