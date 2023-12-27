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
        return new Promise((resolve, reject) => {
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
            return result
                .then(o =>
                    o.json()
                    .then(m => resolve(
                        {
                            statusCode: o.status,
                            payload: m as TResult
                        }
                    ))
                    .catch(() => reject({
                        statusCode: o.status
                    }))
                )
            ;
        });
    }

}
