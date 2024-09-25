import { Guid } from "@wraithlight/core.guid";

export interface SessionDbo {
    id: Guid;
    userId: Guid;
    applicationId: Guid;
    token: string;
    refreshToken: string;
    tokenValidFromUtc: Date;
    tokenValidUntilUtc: Date;
    refreshTokenValidFromUtc: Date;
    refreshTokenValidUntilUtc: Date;
    createdAtUtc: Date;
    createdByUserId: Guid;
    updatedAtUtc?: Date;
    updatedByUserId?: Guid;
    isDeleted: boolean;
}
