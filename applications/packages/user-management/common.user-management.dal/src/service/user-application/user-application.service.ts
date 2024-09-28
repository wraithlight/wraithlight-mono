import { utcNow } from "@wraithlight/core.date";
import { Guid, newGuid } from "@wraithlight/core.guid";
import { isNil } from "@wraithlight/core.nullable";
import {
  OperationResult,
  OperationResultFactory
} from "@wraithlight/framework.operation-result";

import {
  UserApplicationDbo,
  UserManagementDbContextFactory
} from "../../db-context";

import { ERROR_CODES } from "./user-application.const";

export class UserApplicationService {

  private readonly _context = UserManagementDbContextFactory
    .getInstance()
    .getDbContext()
  ;

  public async addContextToUser(
    userId: Guid,
    applicationId: Guid,
    adminUserId: Guid
  ): Promise<OperationResult<UserApplicationDbo>> {

    const id = newGuid();
    const now = utcNow();

    const result = await this._context.UsersApplications
      .insert({
        id: id,
        userId: userId,
        applicationId: applicationId,
        createdAtUtc: now,
        createdByUserId: adminUserId
      })
      .run()
    ;

    if (isNil(result)) {
      return OperationResultFactory.error(ERROR_CODES.ADD_CONTEXT_TO_USER);
    }

    return this.findContextByIdInternal(id);
  }

  public async removeContextFromUser(
    userId: Guid,
    applicationId: Guid
  ): Promise<OperationResult<void>> {
    return this.removeContextFromUserInternal(userId, applicationId);
  }

  public async removeAllContextFromUser(
    userId: Guid
  ): Promise<OperationResult<void>> {
    const contexts = await this.findAllContextForUserInternal(userId);
    if (!contexts.isSuccess) {
      return OperationResultFactory.error(
        ERROR_CODES.REMOVE_ALL_CONTEXTS_LISTING
      );
    }
    for (const context of contexts.payload) {
      await this.removeContextFromUserInternal(userId, context.applicationId);
    }
    return OperationResultFactory.success(undefined);
  }

  // TODO: Return ReadonlyArray<Application> once https://github.com/wraithlight/wraithlight-mono/issues/766 is done.
  public async findAllContextForUser(
    userId: Guid
  ): Promise<OperationResult<ReadonlyArray<UserApplicationDbo>>> {
    return this.findAllContextForUserInternal(userId);
  }

  // TODO: Return ReadonlyArray<User> once https://github.com/wraithlight/wraithlight-mono/issues/766 is done.
  public async findAllUserForContext(
    applicationId: Guid
  ): Promise<OperationResult<ReadonlyArray<Guid>>> {
    try {
      const userApplications = await this._context.UsersApplications
        .select()
        .where("applicationId", applicationId)
        .toList()
      ;
      const userIds = userApplications.map(m => m.userId);
      return OperationResultFactory.success(userIds);
    } catch {
      return OperationResultFactory.error(ERROR_CODES.LIST_USERS_FOR_CONTEXT);
    }
  }

  public async hasUserContext(
    userId: Guid,
    applicationId: Guid
  ): Promise<OperationResult<boolean>> {
    try {
      const context = await this._context.UsersApplications
        .select()
        .where("applicationId", applicationId)
        .where("userId", userId)
        .first()
      ;
      if (isNil(context)) {
        return OperationResultFactory.success(false);
      }
      return OperationResultFactory.success(true);
    } catch {
      return OperationResultFactory.error(ERROR_CODES.HAS_USER_CONTEXT);
    }
  }

  private async findContextByIdInternal(
    id: Guid
  ): Promise<OperationResult<UserApplicationDbo>> {
    const result = await this._context
      .UsersApplications
      .select()
      .where("id", id)
      .first()
    ;

    if (isNil(result)) {
      return OperationResultFactory.error(
        ERROR_CODES.FIND_USER_APPLICATION_BY_ID
      );
    }

    return OperationResultFactory.success(result);
  }

  // TODO: Return ReadonlyArray<Application> once https://github.com/wraithlight/wraithlight-mono/issues/766 is done.
  private async findAllContextForUserInternal(
    userId: Guid
  ): Promise<OperationResult<ReadonlyArray<UserApplicationDbo>>> {
    try {
      const result = await this._context.UsersApplications
        .select()
        .where("userId", userId)
        .toList()
      ;
      return OperationResultFactory.success(result);
    } catch {
      return OperationResultFactory.error(ERROR_CODES.LIST_USER_CONTEXTS);
    }
  }

  private async removeContextFromUserInternal(
    userId: Guid,
    applicationId: Guid
  ): Promise<OperationResult<void>> {
    const result = await this._context
      .UsersApplications
      .select()
      .where("applicationId", applicationId)
      .where("userId", userId)
      .first()
    ;

    if (isNil(result)) {
      return OperationResultFactory.error(ERROR_CODES.FIND_CONTEXT_TO_REMOVE);
    }

    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const _deleteResult = await this._context.UsersApplications
      .delete()
      .where("id", result.id)
      .run()
    ;

    return OperationResultFactory.success(undefined);
  }

}
