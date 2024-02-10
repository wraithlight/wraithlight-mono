import { LoginScope } from "@wraithlight/core.auth.types";

export interface SessionModel {
    token: string;
    validUntil: Date;
    scope: LoginScope;
}

export interface CheckResult {
    isValid: boolean;
    session?: SessionModel;
}

export interface KeepAliveResult {
    success: boolean;
    session?: SessionModel;
}

export interface SessionTokenPayload {
    userId: string;
    validUntil: Date;
    scope: LoginScope;
}
