import { Guid } from "@wraithlight/core.guid";

export interface UserApplicationDbo {
    id: Guid;
    userId: Guid;
    applicationId: Guid;
}
