import { HttpVerb } from "@wraithlight/core.http";

import { BaseController } from "../../base";
import { HandlerContext } from "../../handler-context";

export const HttpDecorator = <T extends BaseController>(
  path: string,
  verb: HttpVerb
) => (
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