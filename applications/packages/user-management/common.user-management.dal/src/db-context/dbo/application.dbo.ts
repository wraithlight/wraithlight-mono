import { Guid } from "@wraithlight/core.guid";

export interface ApplicationDbo {
    id: Guid;
    name: string;
    description: string;
    isDeleted: boolean;
}
