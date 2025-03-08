import { Predicate } from "@wraithlight/core.linq";
import { Request } from "express";

import { BaseController } from "../../base";
import { HandlerContext } from "../../handler-context";

export type IParamDecorator<TController extends BaseController> = (
  _target: TController,
  propertyKey: string,
  parameterIndex: number
) => void;

export const ParamDecorator = <T, TController extends BaseController>(
  paramContext: Predicate<Request, T>,
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  paramExtractor: Predicate<T, any>
): IParamDecorator<TController> => (
  _target: TController,
  propertyKey: string,
  parameterIndex: number
) => {
    const cExtractor = (req: Request): T => paramContext(req);
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const vExtractor = (context: T): any => paramExtractor(context);

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const extractor = (req: Request): any => vExtractor(cExtractor(req));

    HandlerContext.addParameter(
      propertyKey,
      parameterIndex,
      extractor
    );
  };
