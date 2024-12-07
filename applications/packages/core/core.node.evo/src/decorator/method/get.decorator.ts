import { HttpVerb } from "@wraithlight/core.http";

import { BaseController } from "../../base";

import { HttpDecorator, IHttpDecorator } from "./_http.decorator";

export const GetDecorator = (
  path: string
): IHttpDecorator<BaseController> => HttpDecorator(path, HttpVerb.GET);
