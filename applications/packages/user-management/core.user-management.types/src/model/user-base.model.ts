import { UserStatus } from "../enum";

import { Application } from "./application.model";

export interface UserBaseModel {
    username: string;
    emailAddress: string;
    failedLoginAttempts: number;
    status: UserStatus;
    isDeleted: boolean;

    applications: Array<Application>;
}
