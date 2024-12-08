import {
  HttpDecorators
} from "@wraithlight/core.node.evo";
import {
  HeaderName
} from "@wraithlight/domain.http.constants";

export const ApiToken = (
) => HttpDecorators.fromHeader(HeaderName.ApiToken);
