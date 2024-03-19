import { UserStatus } from "@wraithlight/core.auth.types";
import { Guid } from "@wraithlight/core.guid";


export interface UserDbo {
    id: Guid;
    username: string;
    passwordHash: string;
    languageId: Guid;
    emailAddress: string;
    failedLoginAttempts: number;
    status: UserStatus;
    isDeleted: boolean;
}
