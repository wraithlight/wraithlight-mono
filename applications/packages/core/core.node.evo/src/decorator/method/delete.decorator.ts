import { HttpVerb } from "@wraithlight/core.http";
import { HttpDecorator } from "./_http.decorator";

export const DeleteDecorator = (
  path: string
) => HttpDecorator(path, HttpVerb.DELETE);
