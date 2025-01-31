import { Creatable } from "@wraithlight/framework.creatable";

import { BaseController } from "../../base";
import { InjectionScope } from "../../enum";
import { HandlerContext } from "../../handler-context";
import { RequestHandler } from "../../request-handler";

type IControllerDecorator<T> = (target: T) => void;

export const HttpController = <T extends Creatable<BaseController>>(
  path = "",
  injectionScope = InjectionScope.Multiton
): IControllerDecorator<T> => (
  target: T
) => {
    HandlerContext.addClass(
      path,
      injectionScope,
      target
    );
    const controllerContext = HandlerContext.compile();
    RequestHandler.addBluepirnt(controllerContext);
    HandlerContext.reset();
  }
;
