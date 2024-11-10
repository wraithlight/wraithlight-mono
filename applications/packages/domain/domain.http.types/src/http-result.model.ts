import { Guid } from "@wraithlight/core.guid";

export interface IHttpResponse<T> {
  correlationId: Guid;
  error: string;
  payload: T;
}
