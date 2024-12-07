import { HttpVerb } from "@wraithlight/core.http";

import { BaseController } from "../../base";

import { HttpDecorator, IHttpDecorator } from "./_http.decorator";

export const DeleteDecorator = (
  path: string
): IHttpDecorator<BaseController> => HttpDecorator(path, HttpVerb.DELETE);
