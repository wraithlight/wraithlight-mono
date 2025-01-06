import { Guid } from "@wraithlight/core.guid";

export interface SessionTokenPayload {
  userId: Guid;
  contextId: Guid;
}
