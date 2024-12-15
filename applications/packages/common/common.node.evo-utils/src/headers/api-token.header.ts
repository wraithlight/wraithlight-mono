import {
  BaseController,
  HttpDecorators,
  IParamDecorator
} from "@wraithlight/core.node.evo";
import {
  HeaderName
} from "@wraithlight/domain.http.constants";

export const ApiToken = (): IParamDecorator<BaseController> =>
  HttpDecorators.fromHeader(HeaderName.ApiToken)
;
