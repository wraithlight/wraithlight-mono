export interface HttpResponse<TPayload> {
    statusCode: number;
    payload?: TPayload;
    isAborted: boolean;
}

export interface InternalHttpResponse {
    statusCode: number;
    payload: Promise<string>;
}

export interface InternalExpressResponse {
    status: number;
    text(): Promise<string>;
}