export interface BaseValidateResponse {
    success: boolean;
}

export interface SuccessValidateResponse extends BaseValidateResponse {
    token: string;
    validUntil: Date;
}

export interface FailValidateResponse extends BaseValidateResponse {
    errors: Array<string>;
}
