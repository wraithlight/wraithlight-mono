export interface IHttpResponse<T = Object> {
  correlationId: string;
  error: {
    code: string;
  },
  payload: T | undefined;
}
