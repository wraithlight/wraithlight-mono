import { HttpVerb } from "../model";
import { BaseHttpDecorator } from "./_http-decorator.factory";

export const HttpDelete = (path: string) => BaseHttpDecorator(
  path,
  HttpVerb.DELETE
);
