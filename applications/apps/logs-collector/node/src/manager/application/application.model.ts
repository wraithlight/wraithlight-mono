import { Guid } from "@wraithlight/core.guid";

export interface CreateApplicationModel {
    name: string;
    description: string;
}

export interface UpdateApplicationModel {
    name: string;
    description: string;
}

export interface ApplicationDetails {
    id: number;
    name: string;
    description: string;
    isActive: boolean;
    createdAt: Date;
    createdById: Guid;
}
