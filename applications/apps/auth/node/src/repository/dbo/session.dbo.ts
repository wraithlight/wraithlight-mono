import { Guid } from "@wraithlight/core.guid"

export interface SessionDbo {
    id: Guid;
    userId: Guid;
    scopeId: Guid;
    validUntil: Date;
    token: string;
}
