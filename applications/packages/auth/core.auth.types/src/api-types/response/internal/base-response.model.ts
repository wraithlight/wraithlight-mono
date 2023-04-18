export interface ApiBaseResponse {
    success: boolean;
}

export interface ApiBaseSuccessResponse<TPayload> extends ApiBaseResponse {
    payload: TPayload;
}

export interface ApiBaseErrorResponse extends ApiBaseResponse {
    errors: Array<string>;
}
