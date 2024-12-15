import {
  BaseController,
  HttpDecorators,
  IParamDecorator
} from "@wraithlight/core.node.evo";
import {
  HeaderName
} from "@wraithlight/domain.http.constants";

/**
 * @deprecated Import from "`common.node.evo-utils`" instead.
 */
export const ApiToken = (): IParamDecorator<BaseController> =>
  HttpDecorators.fromHeader(HeaderName.ApiToken)
;
