import { IncomingHttpHeaders } from "http";

import { ParamDecorator } from "./_param.decorator";

export const HeaderDecorator = (
  headerName: string
) => ParamDecorator(
  m => m.headers,
  (headers: IncomingHttpHeaders) => headers[headerName]
);
