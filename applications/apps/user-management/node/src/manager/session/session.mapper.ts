import { SessionDbo } from "@wraithlight/common.user-management.dal";
import { ExternalSessionResponse } from "@wraithlight/core.user-management.types";
import { dateISOSerialize } from "@wraithlight/framework.date";

export function dboToDto(
  dbo: SessionDbo
): ExternalSessionResponse {
  return {
    sessionToken: dbo.token,
    sessionValidUntilUTC: dateISOSerialize(dbo.tokenValidUntilUtc),
    refreshToken: dbo.refreshToken,
    refreshTokenValidUntilUTC: dateISOSerialize(dbo.refreshTokenValidUntilUtc)
  };
}
