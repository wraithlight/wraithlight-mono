import { HttpVerb } from "@wraithlight/core.http";

import { HttpDecorator } from "./_http.decorator";

export const PutDecorator = (
  path: string
) => HttpDecorator(path, HttpVerb.PUT);
