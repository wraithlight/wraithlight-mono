import { Guid } from "@wraithlight/core.guid";

import { UserStatus } from "../../_internal";

export interface UserDbo {
    id: Guid;
    username: string;
    passwordHash: string;
    passwordSalt: string;
    emailAddress: string;
    failedLoginAttempts: number;
    status: UserStatus;
    isDeleted: boolean;
}
