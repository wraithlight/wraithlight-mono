import { HttpVerb } from "@wraithlight/core.http";
import { HttpDecorator } from "./_http.decorator";

export const PatchDecorator = (
  path: string
) => HttpDecorator(path, HttpVerb.PATCH);
