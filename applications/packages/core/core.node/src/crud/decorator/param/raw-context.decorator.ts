import { IArgumentDecoratorFactory } from "@wraithlight/core.decorator.types";
import { Request } from "express";

import { BaseController } from "../../controller";

import { ParamDecorator } from "./param.decorator";

export const RawContext = <T extends BaseController>(
): IArgumentDecoratorFactory<T> => ParamDecorator<T>(
  (m: Request) => m,
  undefined
);
