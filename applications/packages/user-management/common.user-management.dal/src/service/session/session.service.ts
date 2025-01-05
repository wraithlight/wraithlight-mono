import { addHours, addMinutes, utcNow } from "@wraithlight/core.date";
import { Guid, newGuid } from "@wraithlight/core.guid";
import { isNil } from "@wraithlight/core.nullable";
import {
  OperationResult,
  OperationResultFactory
} from "@wraithlight/framework.operation-result";

import { SessionDbo, UserManagementDbContextFactory } from "../../db-context";

import {
  ERROR_CODES,
  REFRESH_VALID_FOR_HOURS,
  SESSION_VALID_FOR_MINUTES
} from "./session.const";

export class SessionService {

  private readonly _context = UserManagementDbContextFactory
    .getInstance()
    .getDbContext()
    ;

  public async createSession(
    userId: Guid,
    applicationId: Guid,
    token: string,
    refreshToken: string,
  ): Promise<OperationResult<SessionDbo>> {
    const id = newGuid();
    const now = utcNow();
    const sessionValidUntil = addMinutes(now, SESSION_VALID_FOR_MINUTES);
    const refreshValidHours = addHours(now, REFRESH_VALID_FOR_HOURS);
    try {
      await this._context.Sessions
        .insert({
          id: id,
          userId: userId,
          applicationId: applicationId,
          token: token,
          refreshToken: refreshToken,
          tokenValidFromUtc: now,
          tokenValidUntilUtc: sessionValidUntil,
          refreshTokenValidFromUtc: now,
          refreshTokenValidUntilUtc: refreshValidHours,
          createdAtUtc: now,
          createdByUserId: userId,
          isDeleted: false
        })
        .run()
        ;
    } catch {
      return OperationResultFactory.error(ERROR_CODES.CREATE);
    }
    return this.findByIdInternal(id);
  }

  public async deleteSessionByToken(
    token: Guid
  ): Promise<OperationResult<SessionDbo>> {
    await this._context.Sessions
      .update("token", token, { isDeleted: true })
      .run()
      ;
    return this.findByTokenInternal(token);
  }

  public async findByToken(
    token: Guid
  ): Promise<OperationResult<SessionDbo>> {
    return this.findByTokenInternal(token);
  }

  public async renewToken(
    sessionToken: string
  ): Promise<OperationResult<SessionDbo>> {
    const session = await this.findByTokenInternal(sessionToken);
    if (!session.isSuccess) {
      return session;
    }
    const now = utcNow();
    const sessionValidUntilUtc = addMinutes(now, SESSION_VALID_FOR_MINUTES);
    const refreshValidUntilUtc = addHours(now, REFRESH_VALID_FOR_HOURS);

    try {
      await this._context.Sessions
      .update(
        "id",
        session.payload.id,
        {
          updatedAtUtc: now,
          updatedByUserId: session.payload.userId,
          tokenValidUntilUtc: sessionValidUntilUtc,
          refreshTokenValidUntilUtc: refreshValidUntilUtc
        }
      )
      .run();
    } catch {
      return OperationResultFactory.error(ERROR_CODES.UPDATE_BY_ID);
    }
    return this.findByIdInternal(session.payload.id);
  }

  private async findByTokenInternal(
    token: Guid
  ): Promise<OperationResult<SessionDbo>> {
    try {
      const result = await this._context.Sessions
        .select()
        .where("token", token)
        .where("isDeleted", false)
        .first()
        ;
      if (isNil(result)) {
        return OperationResultFactory.error(ERROR_CODES.NOT_FOUND_BY_TOKEN);
      }
      return OperationResultFactory.success(result);
    } catch {
      return OperationResultFactory.error(ERROR_CODES.FIND_BY_TOKEN);
    }
  }

  private async findByIdInternal(
    id: Guid
  ): Promise<OperationResult<SessionDbo>> {
    try {
      const result = await this._context.Sessions
        .select()
        .where("id", id)
        .first()
        ;
      if (isNil(result)) {
        return OperationResultFactory.error(ERROR_CODES.NOT_FOUND_BY_ID);
      }
      return OperationResultFactory.success(result);
    } catch {
      return OperationResultFactory.error(ERROR_CODES.FIND_BY_ID);
    }
  }

}
