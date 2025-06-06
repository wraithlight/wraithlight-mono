import { IHttpResponse } from "@wraithlight/domain.http.types";

import { HttpCode, HttpVerb } from "../constant";

import { HttpClient } from "./http.client";
import { ConsolidatedHttpResponse } from "./http.model";
import { createFailMessage, createSuccessMessage } from "./http.util";

export class CoreHttpClient extends HttpClient {

  protected getHeaders(): HeadersInit {
    return this._jsonHeaders;
  }

  protected getNotFailHttpCodes(): ReadonlyArray<HttpCode> {
    return this._notFailHttpCodes;
  }

  public async getConsolidated<T>(
    url: string
  ): Promise<ConsolidatedHttpResponse<T>> {
    return super.get2<IHttpResponse<T>>(
      url
    ).then(m => !!m.payload.error
      ? createFailMessage(m.statusCode, m.payload.correlationId, m.payload.error.code)
      : createSuccessMessage(m.payload.payload, m.statusCode, m.payload.correlationId)
    );
  }

  public async deleteConsolidated<T>(
    url: string
  ): Promise<ConsolidatedHttpResponse<T>> {
    return super.delete2<IHttpResponse<T>>(
      url
    ).then(m => !!m.payload.error
      ? createFailMessage(m.statusCode, m.payload.correlationId, m.payload.error.code)
      : createSuccessMessage(m.payload.payload, m.statusCode, m.payload.correlationId)
    );
  }

  public async postConsolidated<T, U>(
    url: string,
    data?: U
  ): Promise<ConsolidatedHttpResponse<T>> {
    return super.post2<IHttpResponse<T>, U>(
      url,
      data
    ).then(m => !!m.payload.error
      ? createFailMessage(m.statusCode, m.payload.correlationId, m.payload.error.code)
      : createSuccessMessage(m.payload.payload, m.statusCode, m.payload.correlationId)
    );
  }

  public async putConsolidated<T, U>(
    url: string,
    data?: U
  ): Promise<ConsolidatedHttpResponse<T>> {
    return super.put2<IHttpResponse<T>, U>(
      url,
      data
    ).then(m => !!m.payload.error
      ? createFailMessage(m.statusCode, m.payload.correlationId, m.payload.error.code)
      : createSuccessMessage(m.payload.payload, m.statusCode, m.payload.correlationId)
    );
  }

  public async patchConsolidated<T, U>(
    url: string,
    data?: U
  ): Promise<ConsolidatedHttpResponse<T>> {
    return super.patch<IHttpResponse<T>, U>(
      url,
      data
    ).then(m => !!m.payload.error
      ? createFailMessage(m.statusCode, m.payload.correlationId, m.payload.error.code)
      : createSuccessMessage(m.payload.payload, m.statusCode, m.payload.correlationId)
    );
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