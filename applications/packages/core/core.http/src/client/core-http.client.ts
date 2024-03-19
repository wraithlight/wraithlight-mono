import { HttpCode, HttpVerb } from "../constant";

import { HttpClient } from "./http.client";

export class CoreHttpClient extends HttpClient {

    protected getHeaders(): HeadersInit {
        return this._jsonHeaders;
    }

    protected getNotFailHttpCodes(): ReadonlyArray<HttpCode> {
        return this._notFailHttpCodes;
    }

    protected onBeforeCall(
        _url: string,
        _method: HttpVerb,
        _bodyJson?: string | undefined
    ): boolean {
        return true;
    }

    protected onAfterCall<T>(
        _url: string,
        _responseCode: HttpCode,
        _responseText: T
    // eslint-disable-next-line @typescript-eslint/no-empty-function
    ): void {
    }

}