import { T_ANY } from "@wraithlight/kernel.any";

import { IDecoratorFactory } from "./decorator.model";
import { HttpDecorator } from "./http.decorator";

export const HttpGet = (
  path: string
): IDecoratorFactory<T_ANY> => HttpDecorator(
  "GET",
  path
);
