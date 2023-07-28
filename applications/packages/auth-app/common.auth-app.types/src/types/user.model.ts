import { Guid } from "@wraithlight/core.types";

export interface UserModel {
    id: Guid;
    username: string;
    emailAddress: string;
}
