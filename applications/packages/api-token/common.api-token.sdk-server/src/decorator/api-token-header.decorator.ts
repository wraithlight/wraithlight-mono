import { API_TOKEN_HEADER_NAME } from "@wraithlight/core.api-token.constants";
import { HttpCode } from "@wraithlight/core.http";
import {
  FilterDecorator,
  FilterResult,
  IDecoratorFactory
} from "@wraithlight/core.node";
import { isNil } from "@wraithlight/framework.nullable";
import { Request } from "express";

export const ApiTokenHeader = (
  tokens: ReadonlyArray<string>
): IDecoratorFactory<unknown> => FilterDecorator(async (
  req: Request
): Promise<FilterResult> => {
  const token = req.get(API_TOKEN_HEADER_NAME);

  if (isNil(token)) {
    return Promise.resolve({
      success: false,
      errorHttpCode: HttpCode.BadRequest
    });
  }

  if (!tokens.includes(token)) {
    return Promise.resolve({
      success: false,
      errorHttpCode: HttpCode.Unauthorized
    });
  }

  return Promise.resolve({
    success: true
  });
});
