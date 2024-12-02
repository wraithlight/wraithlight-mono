import { ParamDecorator } from "./_param.decorator";

export const PathDecorator = (
  headerName: string
) => ParamDecorator(
  m => m.params,
  (headers: { [key: string]: string }) => headers[headerName]
);
