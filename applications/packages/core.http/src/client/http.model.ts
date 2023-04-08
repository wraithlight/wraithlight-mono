export interface HttpResponse<TPayload> {
    statusCode: number;
    payload?: TPayload;
}
