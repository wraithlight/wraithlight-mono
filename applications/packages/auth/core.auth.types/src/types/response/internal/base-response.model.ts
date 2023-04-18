export interface BaseResponse {
    success: boolean;
}

export interface BaseSuccessResponse<TPayload> extends BaseResponse {
    payload: TPayload;
}

export interface BaseErrorResponse extends BaseResponse {
    errors: Array<string>;
}
