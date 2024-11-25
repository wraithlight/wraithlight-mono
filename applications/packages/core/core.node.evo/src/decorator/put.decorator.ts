import { HttpVerb } from "../model";
import { BaseHttpDecorator } from "./_http-decorator.factory";

export const HttpPut = (path: string) => BaseHttpDecorator(
  path,
  HttpVerb.PUT
);
