import { HttpVerb } from "@wraithlight/core.http";

import { HttpDecorator } from "./_http.decorator";

export const PostDecorator = (
  path: string
) => HttpDecorator(path, HttpVerb.POST);
