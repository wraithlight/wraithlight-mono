import {
  SessionService,
  UserService
} from "@wraithlight/common.user-management.dal";
import {
  BadRequestError,
  ConflictError,
  ForbiddenError,
  InternalServerError,
  NotFoundError,
  UnauthorizedError
} from "@wraithlight/core.errors";
import {
  ExternalUserGetResponse,
  ExternalUserPatchResponse,
  ExternalUserPostResponse,
  ExternalUsersGetResponse
} from "@wraithlight/core.user-management.types";
import { Guid } from "@wraithlight/core.guid";
import { PasswordService } from "@wraithlight/common.password";
import { utcNow } from "@wraithlight/core.date";

import { dbToDto } from "../user.mapper";

import { ONBOARDER_SVCUSER_ID } from "./user.const";

export class UserManager {

  private readonly _userService = new UserService();
  private readonly _sessionService = new SessionService();
  private readonly _passwordService = new PasswordService();

  public async listAllUsers(): Promise<ExternalUsersGetResponse> {
    const result = await this._userService.listAllUsers();
    if (result.isErrorTC()) {
      throw new InternalServerError();
    }

    const users: ExternalUsersGetResponse = result.payload.map(m => dbToDto(m));

    return users;
  }

  public async getUser(id: Guid): Promise<ExternalUserGetResponse> {
    const result = await this._userService.findUserById(id);
    if (result.isErrorTC()) {
      throw new NotFoundError();
    }

    return dbToDto(result.payload);
  }

  public async createUser(
    email: string,
    username: string,
    password: string,
    passwordConfirmation: string,
    languageId: Guid
  ): Promise<ExternalUserPostResponse> {
    await this.checkUsername(username);
    await this.checkEmailAddress(email);

    if (password !== passwordConfirmation) {
      throw new BadRequestError();
    }

    const passwordSalt = this._passwordService.getSalt();
    const passwordHash = this._passwordService.encryptPassword(password, passwordSalt);

    const result = await this._userService.create(
      email,
      username,
      passwordHash.encryptedPassword,
      passwordHash.salt,
      ONBOARDER_SVCUSER_ID,
      languageId
    );

    if (result.isErrorTC()) {
      throw new InternalServerError();
    }

    return dbToDto(result.payload);
  }

  public async modifyUser(
    userId: Guid,
    newPassword: string,
    newPasswordConfirmation: string,
    oldPassword: string,
    sessionToken: string
  ): Promise<ExternalUserPatchResponse> {
    console.log("310e603b-ddb1-46ae-8b26-f059df651660");
    console.log(sessionToken)
    const session = await this._sessionService.findByToken(sessionToken);
    if (session.isErrorTC()) {
      console.log("isErrorTC");
      throw new UnauthorizedError();
    }

    console.log("IS DELETED", session.payload.isDeleted);
    if (session.payload.isDeleted) {
      console.log("isDeleted");
      throw new UnauthorizedError();
    }

    if (session.payload.tokenValidUntilUtc.getTime() < utcNow().getTime()) {
      console.log("tokenValidUntilUtc");
      throw new UnauthorizedError();
    }

    const user = await this._userService.findUserById(userId);
    if (user.isErrorTC()) {
      throw new NotFoundError();
    }

    if (session.payload.userId !== user.payload.id) {
      throw new ForbiddenError();
    }

    if (newPassword !== newPasswordConfirmation) {
      throw new BadRequestError();
    }

    const passwordValidationResult = this._passwordService.verifyPassword(
      oldPassword,
      user.payload.passwordHash
    );
    if (!passwordValidationResult) {
      throw new BadRequestError();
    }

    const passwordHash = this._passwordService.encryptPassword(
      newPassword,
      user.payload.passwordHash
    );
    const result = await this._userService.updatePassword(
      userId,
      passwordHash.encryptedPassword
    );

    if (result.isErrorTC()) {
      throw new InternalServerError();
    }

    return dbToDto(result.payload);
  }

  public async checkUsername(username: string): Promise<void> {
    const result = await this._userService.findUserByUsername(username);
    if (result.isSuccessTC()) {
      throw new ConflictError();
    }
  }

  public async checkEmailAddress(emailAddress: string): Promise<void> {
    const result = await this._userService.findUserByEmail(emailAddress);
    if (result.isSuccessTC()) {
      throw new ConflictError();
    }
  }

}
