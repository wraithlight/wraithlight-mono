import { Guid } from "@wraithlight/core.guid";

export interface ScopeDbo {
    id: Guid;
    label: string;
    description: string;
    isDeleted: boolean;
}
