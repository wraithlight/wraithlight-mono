import { Guid } from "@wraithlight/core.guid";

export interface ApplicationDbo {
    id: number;
    application: string;
    description: string;
    isActive: boolean;
    createdAt: Date;
    createdBy: Guid;
}
