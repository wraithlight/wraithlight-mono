import { Guid } from "@wraithlight/core.guid";

export interface ApplicationNameWithId {
    name: string;
    id: number;
}

export interface ApplicationUpdateModel {
    application: string;
    description: string;
    isActive: boolean;
}

export interface ApplicationCreateModel {
    application: string;
    description: string;
}

export interface ApplicationModel {
    id: number;
    name: string;
    description: string;
    isActive: boolean;
    createdAt: Date;
    createdById: Guid;
}
