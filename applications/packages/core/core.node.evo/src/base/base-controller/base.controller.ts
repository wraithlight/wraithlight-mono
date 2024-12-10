import { HttpCode } from "@wraithlight/core.http";

import { RESULT_BRAND } from "./base.const";
import { BaseControllerResult } from "./base.model";

export abstract class BaseController {
  protected ok<T>(payload?: T): BaseControllerResult<T> {
    return {
      code: HttpCode.Ok,
      payload: payload,
      __brand: RESULT_BRAND
    };
  }

  protected accepted(): BaseControllerResult<undefined> {
    return {
      code: HttpCode.Accepted,
      __brand: RESULT_BRAND
    };
  }
}
