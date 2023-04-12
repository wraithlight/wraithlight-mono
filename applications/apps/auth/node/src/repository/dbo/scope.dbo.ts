import { Guid } from "@wraithlight/core.types";

export interface ScopeDbo {
    id: Guid;
    label: string;
    description: string;
    isDeleted: boolean;
}
