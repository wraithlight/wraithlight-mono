import { Guid } from "@wraithlight/core.guid";

/**
 * @deprecated use `HttpResponse2`
 */
export interface HttpResponse<TPayload> {
  statusCode: number;
  payload?: TPayload;
  isAborted: boolean;
}

export interface HttpResponse2<TPayload> {
  statusCode: number;
  payload: TPayload;
  isAborted: boolean;
}

interface BaseConsolidatedHttpResponse {
  statusCode: number;
  isAborted: boolean;
  error: {
    code: string;
  },
  correlationId: Guid;
  isSuccess: boolean;
  isFail: boolean;
}

interface ConsolidatedHttpResponseSuccess<TPayload>
  extends BaseConsolidatedHttpResponse {
  payload: TPayload;
  isSuccess: true;
  isFail: false;
}

interface ConsolidatedHttpResponseError extends BaseConsolidatedHttpResponse {
  isSuccess: false;
  isFail: true;
}

export type ConsolidatedHttpResponse<TPayload> =
  ConsolidatedHttpResponseSuccess<TPayload>
  | ConsolidatedHttpResponseError
  ;

export interface InternalHttpResponse {
  statusCode: number;
  payload: Promise<string>;
}

export interface InternalExpressResponse {
  status: number;
  text(): Promise<string>;
}