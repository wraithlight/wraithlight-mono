export interface Session {
    token: string;
    validUntil: Date;
}

export interface LoginResult {
    success: boolean;
    errors?: Array<string>;
    session?: Session;
}

export interface LogoutResult {
    success: boolean;
}

export interface RenewResult {
    success: boolean;
    errors?: Array<string>;
    session?: Session;
}

export interface ValidateResult {
    success: boolean;
}
