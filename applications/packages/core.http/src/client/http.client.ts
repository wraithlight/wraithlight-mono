import fetch from "node-fetch";

import { HttpVerb } from "../constant/http-verb.const";

export class HttpClient {

    public async get<TResult>(url: string): Promise<TResult> {
        return this.fetchInternal(HttpVerb.GET, url);
    }

    public async delete<TResult>(url: string): Promise<TResult> {
        return this.fetchInternal(HttpVerb.DELETE, url);
    }

    public async post<TData, TResult>(url: string, data?: TData): Promise<TResult> {
        return this.fetchInternal(HttpVerb.POST, url, JSON.stringify(data));
    }

    public async put<TData, TResult>(url: string, data?: TData): Promise<TResult> {
        return this.fetchInternal(HttpVerb.PUT, url, JSON.stringify(data));      
    }

    private async fetchInternal<TResult>(
        method: HttpVerb,
        url: string,
        data?: string
    ): Promise<TResult> {
        return new Promise(async (resolve, reject) => {
            const result = await fetch(
                url,
                {
                    method,
                    body: data
                }
            );
            if (result.status < 300 && result.status > 199) {
                return result.json().then(m => resolve(m as TResult));
            }
            reject();
        });
    }

}
