import { HttpVerb } from "@wraithlight/core.http";

export interface Endpoint {
  verb: HttpVerb;
  path: string;
}
