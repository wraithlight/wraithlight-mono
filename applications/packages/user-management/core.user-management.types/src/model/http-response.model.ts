export interface IHttpResponse<T = object> {
  correlationId: string;
  error: {
    code: string;
  },
  payload: T | undefined;
}
