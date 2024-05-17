import { Guid } from "@wraithlight/core.guid";
import { UserStatus } from "@wraithlight/core.user-management.types";

export interface UserDbo {
    id: Guid;
    emailAddress: string;
    username: string;
    userStatus: UserStatus;
    passwordHash: string;
    failedLoginAttempts: number;
    createdAtUtc: Date;
    createdByUserId: Guid;
    updatedAtUtc?: Date;
    updatedByUserId?: Guid;
    isDeleted: boolean;
}
