import {
    HttpCode,
    HttpVerb
} from "../constant";

import { JSON_HEADERS, SUCCESS_HTTP_CODES } from "./http.const";
import { HttpResponse, InternalExpressResponse, InternalHttpResponse } from "./http.model";

export abstract class HttpClient {

    protected readonly _jsonHeaders = JSON_HEADERS;
    protected readonly _notFailHttpCodes = SUCCESS_HTTP_CODES;

    protected abstract getHeaders(): HeadersInit;
    protected abstract getNotFailHttpCodes(): ReadonlyArray<HttpCode>;

    protected abstract onBeforeCall(
        url: string,
        method: HttpVerb,
        bodyJson?: string
    ): boolean;
    protected abstract onAfterCall(
        url: string,
        responseCode: HttpCode,
        responseText: string
    ): void;

    public async get<TResult>(url: string): Promise<HttpResponse<TResult>> {
        return this.fetchInternal(HttpVerb.GET, url);
    }

    public async delete<TResult>(url: string): Promise<HttpResponse<TResult>> {
        return this.fetchInternal(HttpVerb.DELETE, url);
    }

    public async post<TResult, TData>(
        url: string,
        data?: TData
    ): Promise<HttpResponse<TResult>> {
        return this.fetchInternal(HttpVerb.POST, url, JSON.stringify(data));
    }

    public async put<TResult, TData>(
        url: string,
        data?: TData
    ): Promise<HttpResponse<TResult>> {
        return this.fetchInternal(HttpVerb.PUT, url, JSON.stringify(data));
    }

    private async fetchInternal<TResult>(
        method: HttpVerb,
        url: string,
        data?: string
    ): Promise<HttpResponse<TResult>> {
        if (!this.onBeforeCall(url, method, data)) {
            return {
                statusCode: HttpCode.InternalError,
                isAborted: true
            }
        }
        const result: InternalHttpResponse = await fetch(
                url,
                {
                    method,
                    body: data,
                    headers: this.getHeaders()
                }
            )
            .then((m: InternalExpressResponse) => {
                return { statusCode: m.status, payload: m.text() }
            })
            .catch((m: InternalExpressResponse) => {
                return { statusCode: m.status, payload: m.text() }
            })
        ;

        const payload: TResult = await result.payload
            // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
            .then(m => JSON.parse(m))
            .catch(undefined)

        return {
            statusCode: result.statusCode,
            payload: payload,
            isAborted: false
        }
    }
}
