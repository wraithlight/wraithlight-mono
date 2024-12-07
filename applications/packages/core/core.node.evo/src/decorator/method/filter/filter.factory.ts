import { HttpCode } from "@wraithlight/core.http";
import { Request } from "express";

import { BaseController } from "../../../base";
import { HandlerContext } from "../../../handler-context";
import { FilterResult } from "../../../model";
import { IHttpDecorator } from "../_http.decorator";

export const createFilterAttribute = (
  guardFn: (req: Request) => FilterResult
): () => IHttpDecorator<BaseController> =>(
): IHttpDecorator<BaseController> => (
  _target: BaseController,
  propertyName: string,
  _descriptorValue: PropertyDescriptor
) => {
  HandlerContext.addFilter(
    propertyName,
    guardFn
  );
};

export const createFailResponse = (
  code: HttpCode,
  message: string
): FilterResult => {
  return {
    isError: true,
    isSuccess: false,
    errorHttpCode: code,
    errorMessage: message
  };
};

export const createSuccessResponse = (): FilterResult => {
  return {
    isError: false,
    isSuccess: true
  };
};
