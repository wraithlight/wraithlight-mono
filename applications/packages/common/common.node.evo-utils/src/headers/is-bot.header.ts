import {
  BaseController,
  HttpDecorators,
  IParamDecorator
} from "@wraithlight/core.node.evo";
import {
  HeaderName
} from "@wraithlight/domain.http.constants";

export const IsBot = (): IParamDecorator<BaseController> =>
  HttpDecorators.fromHeader(HeaderName.IsBot)
;
