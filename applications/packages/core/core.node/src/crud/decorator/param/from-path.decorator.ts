import { IArgumentDecoratorFactory } from "@wraithlight/core.decorator.types";
import { Request } from "express";

import { BaseController } from "../../controller";

import { ParamDecorator } from "./param.decorator";

export const FromPath = <T extends BaseController>(
  propertyName: string
): IArgumentDecoratorFactory<T> => ParamDecorator<T>(
  (m: Request) => m.params,
  propertyName
);
