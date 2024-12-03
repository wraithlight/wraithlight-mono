import { HttpCode } from "@wraithlight/core.http";

import { BaseControllerResult } from "./base.model";

export abstract class BaseController {
  protected ok<T>(payload?: T): BaseControllerResult<T> {
    return {
      code: HttpCode.Ok,
      payload: payload,
      __brand: "BaseControllerResult<T>"
    };
  }

  protected accepted(): BaseControllerResult<undefined> {
    return {
      code: HttpCode.Accepted,
      __brand: "BaseControllerResult<T>"
    };
  }
}
