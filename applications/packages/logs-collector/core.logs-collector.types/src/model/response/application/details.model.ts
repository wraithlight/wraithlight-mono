import { Guid } from "@wraithlight/core.guid";

export interface ApplicationDetailsModel {
    id: number;
    name: string;
    description: string;
    isActive: boolean;
    createdAt: Date;
    createdById: Guid;
}
