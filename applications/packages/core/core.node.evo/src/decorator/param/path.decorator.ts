import { BaseController } from "../../base";

import { IParamDecorator, ParamDecorator } from "./_param.decorator";

export const PathDecorator = (
  paramName: string
): IParamDecorator<BaseController> => ParamDecorator(
  m => m.params,
  (headers: { [key: string]: string }) => headers[paramName]
);
