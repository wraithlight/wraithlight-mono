import { utcNow } from "@wraithlight/core.date";
import { Guid, newGuid } from "@wraithlight/core.guid";
import { isNil } from "@wraithlight/core.nullable";
import {
  OperationResult,
  OperationResultFactory
} from "@wraithlight/framework.operation-result";

import {
  ApplicationDbo,
  UserApplicationDbo,
  UserDbo,
  UserManagementDbContextFactory
} from "../../db-context";

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
      return OperationResultFactory.error("E_ADD_CONTEXT_TO_USER");
    }

    return this.findContextByIdInternal(id);
  }

  public async removeContextFromUser(
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
      return OperationResultFactory.error("E_FIND_CONTEXT_TO_REMOVE");
    }

    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const _deleteResult = await this._context.UsersApplications
      .delete()
      .where("id", result.id)
      .run()
    ;

    return OperationResultFactory.success(undefined);
  }

  public async removeAllContextFromUser(
    _userId: Guid
  ): Promise<OperationResult<void>> {
    // TODO: Implement
    return OperationResultFactory.error("NOT_IMPLEMENTED");
  }

  public async findAllContextForUser(
    _userId: Guid
  ): Promise<OperationResult<ApplicationDbo>> {
    // TODO: Implement
    return OperationResultFactory.error("NOT_IMPLEMENTED");
  }

  public async findAllUserForContext(
    _applicationId: Guid
  ): Promise<OperationResult<Array<UserDbo>>> {
    // TODO: Implement
    return OperationResultFactory.error("NOT_IMPLEMENTED");
  }

  public async hasUserContext(
    _userId: Guid,
    _applicationId: Guid
  ): Promise<OperationResult<boolean>> {
    // TODO: Implement
    return OperationResultFactory.error("NOT_IMPLEMENTED");
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
      return OperationResultFactory.error("E_FIND_USER_APPLICATION_BY_ID");
    }

    return OperationResultFactory.success(result);
  }

}
