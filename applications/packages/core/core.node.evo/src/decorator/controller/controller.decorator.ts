import { Creatable } from "@wraithlight/framework.creatable";

import { BaseController } from "../../base";
import { InjectionScope } from "../../enum";
import { HandlerContext } from "../../handler-context";
import { RequestHandler } from "../../request-handler";

export const HttpController = <T extends Creatable<BaseController>>(
  path = "",
  injectionScope = InjectionScope.Multiton
) => (
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
