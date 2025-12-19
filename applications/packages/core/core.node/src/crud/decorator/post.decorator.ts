import { T_ANY } from "@wraithlight/kernel.any";

import { IDecoratorFactory } from "./decorator.model";
import { HttpDecorator } from "./http.decorator";

export const HttpPost = (
  path: string
): IDecoratorFactory<T_ANY> => HttpDecorator(
  "POST",
  path
);
