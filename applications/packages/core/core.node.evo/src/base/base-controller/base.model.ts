import { HttpCode } from "@wraithlight/core.http";

export interface BaseControllerResult<T> {
  code: HttpCode;
  payload?: T;
  __brand: string
}
