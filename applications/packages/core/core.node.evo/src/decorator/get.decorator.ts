import { HttpVerb } from "../model";
import { BaseHttpDecorator } from "./_http-decorator.factory";

export const HttpGet = (path: string) => BaseHttpDecorator(
  path,
  HttpVerb.GET
);
