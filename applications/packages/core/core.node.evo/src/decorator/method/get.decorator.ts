import { HttpVerb } from "@wraithlight/core.http";
import { HttpDecorator } from "./_http.decorator";

export const GetDecorator = (
  path: string
) => HttpDecorator(path, HttpVerb.GET);
