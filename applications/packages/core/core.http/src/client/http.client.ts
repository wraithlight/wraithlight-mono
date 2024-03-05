import {
    HttpCode,
    HttpHeader,
    HttpHeaderName,
    HttpVerb
} from "../constant";

import { HttpResponse } from "./http.model";

export class HttpClient {

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
        const result = await fetch(
                url,
                {
                    method,
                    body: data,
                    headers: {
                        [HttpHeaderName.ContentType]: HttpHeader.ApplicationJson
                    }
                }
            )
            .then(m => ([m.status, m.json()]))
            .catch(() => ([HttpCode.InternalError, Promise.resolve(undefined)]))
        ;

        const payload: TResult = await result[1];

        return {
            // eslint-disable-next-line @typescript-eslint/consistent-type-assertions
            statusCode: result[0] as HttpCode,
            payload: payload
        }
    }
}
