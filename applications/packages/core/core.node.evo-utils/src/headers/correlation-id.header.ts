import {
  BaseController,
  HttpDecorators,
  IParamDecorator
} from "@wraithlight/core.node.evo";
import {
  HeaderName
} from "@wraithlight/domain.http.constants";

export const CorrelationId = (): IParamDecorator<BaseController> =>
  HttpDecorators.fromHeader(HeaderName.CorrelationId)
;
