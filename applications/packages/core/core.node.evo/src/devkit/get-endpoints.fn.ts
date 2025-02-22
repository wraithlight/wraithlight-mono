import { HttpVerb } from "@wraithlight/core.http";

import { Endpoint } from "./get-endpoint.model";

const _endpoints: Array<Endpoint> = [];

export function getEndpoints(): ReadonlyArray<Endpoint> {
  return _endpoints;
}

export function addEndpoint(
  verb: HttpVerb,
  path: string
): void {
  _endpoints.push(
    {
      verb,
      path
    }
  );
}
