import { IArgumentDecoratorFactory } from "@wraithlight/core.decorator.types";
import { GLOBAL_UNDEFINED } from "@wraithlight/kernel.undefined";
import { Request } from "express";

import { BaseController } from "../../controller";

import { ParamDecorator } from "./param.decorator";

export const RawContext = <T extends BaseController>(
): IArgumentDecoratorFactory<T> => ParamDecorator<T>(
  (m: Request) => m,
  GLOBAL_UNDEFINED
);
