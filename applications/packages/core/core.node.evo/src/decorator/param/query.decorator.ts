import { ParamDecorator } from "./_param.decorator";

export const QueryDecorator = (
  queryParamName: string
) => ParamDecorator(
  m => m.query,
  (query) => query[queryParamName]
);
