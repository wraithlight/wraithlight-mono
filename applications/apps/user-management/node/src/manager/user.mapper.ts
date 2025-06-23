import { UserDbo } from "@wraithlight/common.user-management.dal";
import { dateISOSerialize } from "@wraithlight/core.date";
import { GLOBAL_UNDEFINED } from "@wraithlight/core.undefined";
import { UserResponse } from "@wraithlight/core.user-management.types";

export function dbToDto(dbo: UserDbo): UserResponse {
  return {
    userId: dbo.id,
    username: dbo.username,
    identifier: dbo.id,
    emailAddress: dbo.emailAddress,
    createdAtUTC: dateISOSerialize(dbo.createdAtUtc),
    createdById: dbo.createdByUserId,
    lastUpdatedAtUTC: dbo.updatedAtUtc
      ? dateISOSerialize(dbo.updatedAtUtc)
      : GLOBAL_UNDEFINED,
    lastUpdatedById: dbo.createdByUserId,
    status: dbo.userStatus,
    languageId: dbo.languageId,
    failedLoginAttempts: dbo.failedLoginAttempts,
    isDeleted: dbo.isDeleted
  };
}
