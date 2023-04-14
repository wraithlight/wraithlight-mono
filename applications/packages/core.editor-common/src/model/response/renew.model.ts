export interface BaseRenewResponse {
    success: boolean;
}

export interface SuccessRenewResponse extends BaseRenewResponse {
    token: string;
    validUntil: Date;
}

export interface FailRenewResponse extends BaseRenewResponse {
    errors: Array<string>;
}
