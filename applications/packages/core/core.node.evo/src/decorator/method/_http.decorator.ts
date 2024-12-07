import { HttpVerb } from "@wraithlight/core.http";

import { BaseController } from "../../base";
import { HandlerContext } from "../../handler-context";

export type IHttpDecorator<T> = (
  target: T,
  property: string,
  descriptorValue: PropertyDescriptor
) => void;

export const HttpDecorator = <T extends BaseController>(
  path: string,
  verb: HttpVerb
): IHttpDecorator<T> => (
  _target: T,
  propertyKey: string,
  descriptorValue: PropertyDescriptor
) => {
    HandlerContext.addMethod(
      propertyKey,
      path,
      verb
    );
    return descriptorValue;
  }
;