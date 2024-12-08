import {
  HttpDecorators
} from "@wraithlight/core.node.evo";
import {
  HeaderName
} from "@wraithlight/domain.http.constants";

export const IsBot = (
) => HttpDecorators.fromHeader(HeaderName.IsBot);
