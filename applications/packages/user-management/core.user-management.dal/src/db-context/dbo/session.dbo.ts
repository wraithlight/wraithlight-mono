import { Guid } from "@wraithlight/core.guid";

export interface SessionDbo {
    id: Guid;
    userId: string;
    applicationId: string;
    token: string;
    refreshToken: string;
    tokenValidFromUtc: Date;
    tokenValidUntilUtc: Date;
    refreshTokenValidFromUtc: Date;
    refreshTokenValidUntilUtc: Date;
    createdAtUtc: Date;
    createdByUserId: Guid;
    updatedAtUtc: Date;
    updatedByUserUtc: Date;
    isDeleted: boolean;
}
