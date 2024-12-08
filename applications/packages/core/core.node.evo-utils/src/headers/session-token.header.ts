import {
  HttpDecorators
} from "@wraithlight/core.node.evo";
import {
  HeaderName
} from "@wraithlight/domain.http.constants";

export const SessionToken = (
) => HttpDecorators.fromHeader(HeaderName.SessionToken);
