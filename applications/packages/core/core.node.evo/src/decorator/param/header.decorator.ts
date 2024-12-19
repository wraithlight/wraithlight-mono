import { IncomingHttpHeaders } from "http";

import { BaseController } from "../../base";

import { IParamDecorator, ParamDecorator } from "./_param.decorator";

export const HeaderDecorator = (
  headerName: string
): IParamDecorator<BaseController> => ParamDecorator(
  m => m.headers,
  (headers: IncomingHttpHeaders) => headers[headerName.toLocaleLowerCase()] || headers[headerName]
);
