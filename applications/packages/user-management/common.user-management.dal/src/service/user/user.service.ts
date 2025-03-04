import { utcNow } from "@wraithlight/core.date";
import { Guid, newGuid } from "@wraithlight/core.guid";
import { generateRandomString } from "@wraithlight/core.random-string";
import { UserStatus } from "@wraithlight/core.user-management.types";
import { Nullable, isNil } from "@wraithlight/framework.nullable";
import {
  OperationResult,
  OperationResultFactory
} from "@wraithlight/framework.operation-result";

import { UserDbo, UserManagementDbContextFactory } from "../../db-context";

import {
    ANONYMIZED_EMAIL_ALPHABET,
    ANONYMIZED_EMAIL_LENGTH,
    ANONYMIZED_PASSWORD_ALPHABET,
    ANONYMIZED_PASSWORD_LENGTH,
    ANONYMIZED_USERNAME_ALPHABET,
    ANONYMIZED_USERNAME_LENGTH,
    DEFAULT_STATUS,
    ERROR_CODES
} from "./user.const";

export class UserService {

    private readonly _context = UserManagementDbContextFactory
        .getInstance()
        .getDbContext()
    ;

    public async create(
      email: string,
      usename: string,
      passwordHash: string,
      passwordSalt: string,
      creatorId: Guid,
      language: Guid
    ): Promise<OperationResult<UserDbo>> {
      const userId = newGuid();
      const now = utcNow();
      const dbo: UserDbo = {
        id: userId,
        emailAddress: email,
        username: usename,
        userStatus: DEFAULT_STATUS,
        passwordHash: passwordHash,
        failedLoginAttempts: 0,
        createdAtUtc: now,
        createdByUserId: creatorId,
        isDeleted: false,
        languageId: language,
        passwordSalt: passwordSalt
      };

      try {
        await this._context.Users
        .insert(dbo)
        .run()
      ;
      } catch {
        return OperationResultFactory.error(ERROR_CODES.CREATE);
      }

      const userResult = await this.findUserByIdInternal(userId);
      if (isNil(userResult)) {
          return OperationResultFactory.error(ERROR_CODES.NOT_FOUND);
      }
      return OperationResultFactory.success(userResult);
    }

    public async findUserById(
        id: Guid
    ): Promise<OperationResult<UserDbo>> {
        const user = await this.findUserByIdInternal(id);
        if (isNil(user)) {
            return OperationResultFactory.error(ERROR_CODES.NOT_FOUND);
        }
        return OperationResultFactory.success(user);
    }

    public async listAllUsers(
    ): Promise<OperationResult<ReadonlyArray<UserDbo>>> {
        const users = await this._context.Users
            .select()
            .toList()
        ;

        if (isNil(users)) {
            return OperationResultFactory.error(ERROR_CODES.LIST);
        }

        return OperationResultFactory.success(users);
    }

  // TODO: Return ReadonlyArray<UserWithContextsDbo> once https://github.com/wraithlight/wraithlight-mono/issues/766 is done.
  // https://github.com/wraithlight/wraithlight-mono/pull/764#discussion_r1773815886
  public async listAllWithContexts(): Promise<ReadonlyArray<UserDbo>> {
    return this._context.Users
      .select()
      .toList()
    ;
  }

    public async findUserByEmail(
        email: string
    ): Promise<OperationResult<UserDbo>> {
        const user = await this._context.Users
            .select()
            .where("emailAddress", email)
            .first()
        ;
        if (isNil(user)) {
            return OperationResultFactory.error(ERROR_CODES.NOT_FOUND);
        }
        return OperationResultFactory.success(user);
    }

    public async findUserByUsername(
        username: string
    ): Promise<OperationResult<UserDbo>> {
        const user = await this._context.Users
            .select()
            .where("username", username)
            .first()
        ;
        if (isNil(user)) {
            return OperationResultFactory.error(ERROR_CODES.NOT_FOUND);
        }
        return OperationResultFactory.success(user);
    }

    public async updatePassword(
        id: string,
        passwordHash: string
    ): Promise<OperationResult<UserDbo>> {
        const user = await this.findUserByIdInternal(id);
        if (isNil(user) || user.userStatus === UserStatus.Deleted) {
            return OperationResultFactory.error(ERROR_CODES.NOT_FOUND);
        }
        const now = utcNow();
        await this._context.Users
            .update(
                "id",
                id,
                {
                    passwordHash: passwordHash,
                    userStatus: UserStatus.Active,
                    updatedAtUtc: now,
                    updatedByUserId: id
                }
            )
            .run()
        ;

        const userResult = await this.findUserByIdInternal(id);
        if (isNil(userResult)) {
            return OperationResultFactory.error(ERROR_CODES.NOT_FOUND);
        }
        return OperationResultFactory.success(userResult);
    }

    public async failedLogin(
        id: string
    ): Promise<OperationResult<UserDbo>> {
        const user = await this.findUserByIdInternal(id);
        if (isNil(user) || user.userStatus === UserStatus.Deleted) {
            return OperationResultFactory.error(ERROR_CODES.NOT_FOUND);
        }
        const now = utcNow();
        await this._context.Users
            .update(
                "id",
                id,
                {
                    failedLoginAttempts: user.failedLoginAttempts++,
                    updatedAtUtc: now,
                    updatedByUserId: id
                }
            )
            .run()
        ;

        const userResult = await this.findUserByIdInternal(id);
        if (isNil(userResult)) {
            return OperationResultFactory.error(ERROR_CODES.NOT_FOUND);
        }
        return OperationResultFactory.success(userResult);
    }

    public async login(
        id: string
    ): Promise<OperationResult<UserDbo>> {
        const user = await this.findUserByIdInternal(id);
        if (isNil(user) || user.userStatus === UserStatus.Deleted) {
            return OperationResultFactory.error(ERROR_CODES.NOT_FOUND);
        }
        const now = utcNow();
        await this._context.Users
            .update(
                "id",
                id,
                {
                    failedLoginAttempts: 0,
                    updatedAtUtc: now,
                    updatedByUserId: id
                }
            )
            .run()
        ;

        const userResult = await this.findUserByIdInternal(id);
        if (isNil(userResult)) {
            return OperationResultFactory.error(ERROR_CODES.NOT_FOUND);
        }
        return OperationResultFactory.success(userResult);
    }

    public async forgotPassword(
        id: string
    ): Promise<OperationResult<UserDbo>> {
        const user = await this.findUserByIdInternal(id);
        if (isNil(user) || user.userStatus === UserStatus.Deleted) {
            return OperationResultFactory.error(ERROR_CODES.NOT_FOUND);
        }
        const now = utcNow();
        await this._context.Users
            .update(
                "id",
                id,
                {
                    userStatus: UserStatus.ForgotPassword,
                    updatedAtUtc: now,
                    updatedByUserId: id
                }
            )
            .run()
        ;

        const userResult = await this.findUserByIdInternal(id);
        if (isNil(userResult)) {
            return OperationResultFactory.error(ERROR_CODES.NOT_FOUND);
        }
        return OperationResultFactory.success(userResult);
    }

    public async lockoutUser(
        id: string
    ): Promise<OperationResult<UserDbo>> {
        const user = await this.findUserByIdInternal(id);
        if (isNil(user) || user.userStatus === UserStatus.Deleted) {
            return OperationResultFactory.error(ERROR_CODES.NOT_FOUND);
        }
        const now = utcNow();
        await this._context.Users
            .update(
                "id",
                id,
                {
                    userStatus: UserStatus.LockedOutDueTooManyInvalidLogin,
                    updatedAtUtc: now,
                    updatedByUserId: id
                }
            )
            .run()
        ;

        const userResult = await this.findUserByIdInternal(id);
        if (isNil(userResult)) {
            return OperationResultFactory.error(ERROR_CODES.NOT_FOUND);
        }
        return OperationResultFactory.success(userResult);
    }

    public async activateUser(
        id: string
    ): Promise<OperationResult<UserDbo>> {
        const user = await this.findUserByIdInternal(id);
        if (isNil(user) || user.userStatus === UserStatus.Deleted) {
            return OperationResultFactory.error(ERROR_CODES.NOT_FOUND);
        }
        const now = utcNow();
        await this._context.Users
            .update(
                "id",
                id,
                {
                    userStatus: UserStatus.Active,
                    updatedAtUtc: now,
                    updatedByUserId: id
                }
            )
            .run()
        ;

        const userResult = await this.findUserByIdInternal(id);
        if (isNil(userResult)) {
            return OperationResultFactory.error(ERROR_CODES.NOT_FOUND);
        }
        return OperationResultFactory.success(userResult);
    }

    public async deactivateUser(
        id: string
    ): Promise<OperationResult<UserDbo>> {
        const user = await this.findUserByIdInternal(id);
        if (isNil(user) || user.userStatus === UserStatus.Deleted) {
            return OperationResultFactory.error(ERROR_CODES.NOT_FOUND);
        }
        const now = utcNow();
        await this._context.Users
            .update(
                "id",
                id,
                {
                    userStatus: UserStatus.Inactive,
                    updatedAtUtc: now,
                    updatedByUserId: id
                }
            )
            .run()
        ;

        const userResult = await this.findUserByIdInternal(id);
        if (isNil(userResult)) {
            return OperationResultFactory.error(ERROR_CODES.NOT_FOUND);
        }
        return OperationResultFactory.success(userResult);
    }

    public async anonymizeUser(
        id: string
    ): Promise<OperationResult<UserDbo>> {
        const user = await this.findUserByIdInternal(id);
        if (isNil(user) || user.userStatus === UserStatus.Deleted) {
            return OperationResultFactory.error(ERROR_CODES.NOT_FOUND);
        }
        const now = utcNow();

        const anonymizedEmail = generateRandomString(
            ANONYMIZED_EMAIL_LENGTH,
            ANONYMIZED_EMAIL_ALPHABET
        );
        const anonymizedUsername = generateRandomString(
            ANONYMIZED_USERNAME_LENGTH,
            ANONYMIZED_USERNAME_ALPHABET
        );
        const anonymizedPassword = generateRandomString(
            ANONYMIZED_PASSWORD_LENGTH,
            ANONYMIZED_PASSWORD_ALPHABET
        );

        await this._context.Users
            .update(
                "id",
                id,
                {
                    emailAddress: anonymizedEmail,
                    username: anonymizedUsername,
                    passwordHash: anonymizedPassword,
                    updatedAtUtc: now,
                    updatedByUserId: id
                }
            )
            .run()
        ;

        const userResult = await this.findUserByIdInternal(id);
        if (isNil(userResult)) {
            return OperationResultFactory.error(ERROR_CODES.NOT_FOUND);
        }
        return OperationResultFactory.success(userResult);
    }

    public async deleteUser(
        id: string
    ): Promise<OperationResult<UserDbo>> {
        const user = await this.findUserByIdInternal(id);
        if (isNil(user) || user.userStatus === UserStatus.Deleted) {
            return OperationResultFactory.error(ERROR_CODES.NOT_FOUND);
        }
        const now = utcNow();
        await this._context.Users
            .update(
                "id",
                id,
                {
                    userStatus: UserStatus.Deleted,
                    updatedAtUtc: now,
                    updatedByUserId: id,
                    isDeleted: true
                }
            )
            .run()
        ;

        const userResult = await this.findUserByIdInternal(id);
        if (isNil(userResult)) {
            return OperationResultFactory.error(ERROR_CODES.NOT_FOUND);
        }
        return OperationResultFactory.success(userResult);
    }

    private async findUserByIdInternal(
        id: Guid,
    ): Promise<Nullable<UserDbo>> {
        return this._context
            .Users
            .select()
            .where("id", id)
            .first()
        ;
    }

}
