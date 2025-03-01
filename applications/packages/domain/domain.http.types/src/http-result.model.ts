import { Guid } from "@wraithlight/core.guid";

export interface IHttpResponse<T> {
  correlationId: Guid;
  error: {
    code: string;
  };
  payload: T;
}
