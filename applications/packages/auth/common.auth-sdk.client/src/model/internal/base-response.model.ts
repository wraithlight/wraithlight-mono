export interface BaseResponse<TPayload> {
    success: boolean;
    payload?: TPayload;
    errors?: Array<string>;
}
