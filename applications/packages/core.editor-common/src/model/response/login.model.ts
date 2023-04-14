export interface BaseLoginResponse {
    success: boolean;
}

export interface SuccessLoginResponse extends BaseLoginResponse {
    token: string;
    validUntil: Date;
}

export interface FailLoginResponse extends BaseLoginResponse {
    errors: Array<string>;
}
