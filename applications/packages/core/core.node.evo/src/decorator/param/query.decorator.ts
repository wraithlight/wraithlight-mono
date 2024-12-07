import { BaseController } from "../../base";

import { IParamDecorator, ParamDecorator } from "./_param.decorator";

export const QueryDecorator = (
  queryParamName: string
): IParamDecorator<BaseController> => ParamDecorator(
  m => m.query,
  (query) => query[queryParamName]
);
