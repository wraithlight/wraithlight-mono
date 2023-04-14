export interface BaseValidateResponse {
    success: boolean;
}

export interface SuccessValidateResponse extends BaseValidateResponse {
    token: string;
}

export interface FailValidateResponse extends BaseValidateResponse {
    errors: Array<string>;
}
