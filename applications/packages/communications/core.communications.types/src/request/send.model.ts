import { Guid } from "@wraithlight/core.guid";

export interface SendRequest<T> {
  proxyId: Guid;
  identifier: string;
  content: string;
  additionalMessagePayload: T;
}
