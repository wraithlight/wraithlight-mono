import { HttpHeader, HttpHeaderName } from "../constant/http-header.const";
import { HttpVerb } from "../constant/http-verb.const";

import { HttpResponse } from "./http.model";

export class HttpClient {

    public async get<TResult>(url: string): Promise<HttpResponse<TResult>> {
        return this.fetchInternal(HttpVerb.GET, url);
    }

    public async delete<TResult>(url: string): Promise<HttpResponse<TResult>> {
        return this.fetchInternal(HttpVerb.DELETE, url);
    }

    public async post<TResult, TData>(url: string, data?: TData): Promise<HttpResponse<TResult>> {
        return this.fetchInternal(HttpVerb.POST, url, JSON.stringify(data));
    }

    public async put<TResult, TData>(url: string, data?: TData): Promise<HttpResponse<TResult>> {
        return this.fetchInternal(HttpVerb.PUT, url, JSON.stringify(data));
    }

    private async fetchInternal<TResult>(
        method: HttpVerb,
        url: string,
        data?: string
    ): Promise<HttpResponse<TResult>> {
        // TODO: Rewrite this with proper teardown
        // eslint-disable-next-line no-async-promise-executor
        return new Promise(async (resolve, reject) => {
            const result = fetch(
                url,
                {
                    method,
                    body: data,
                    headers: {
                        [HttpHeaderName.ContentType]: HttpHeader.ApplicationJson
                    }
                }
            );
            const o = await result;
            try {
                const m = await o.json();
                return resolve(
                    {
                        statusCode: o.status,
                        payload: m as TResult
                    }
                );
            } catch {
                return reject({
                    statusCode: o.status
                });
            }
        });
    }

}
