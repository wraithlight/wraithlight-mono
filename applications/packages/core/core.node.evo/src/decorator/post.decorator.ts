import { HttpVerb } from "../model";
import { BaseHttpDecorator } from "./_http-decorator.factory";

export const HttpPost = (path: string) => BaseHttpDecorator(
  path,
  HttpVerb.POST
);
