import { Request } from "express";
import { Predicate } from "@wraithlight/core.linq";

import { BaseController } from "../../base";
import { HandlerContext } from "../../handler-context";

export const ParamDecorator = <T, TController extends BaseController>(
  paramContext: Predicate<Request, T>,
  paramExtractor: Predicate<T, any>
) => (
  _target: TController,
  propertyKey: string,
  parameterIndex: number
) => {
  const contextExtractor = (req: Request) => paramContext(req);
  const valueExtractor = (context: T) => paramExtractor(context);

  const extractor = (req: Request) => valueExtractor(contextExtractor(req));

  HandlerContext.addParameter(
    propertyKey,
    parameterIndex,
    extractor
  );
}
