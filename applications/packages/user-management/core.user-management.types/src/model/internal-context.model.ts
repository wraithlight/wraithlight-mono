import { Guid } from "@wraithlight/core.guid";

interface ContextResponse {
  id: Guid;
  label: string;
  description: string;
  isDeleted: false
  createdAtUTC: string;
  createdById: Guid;
  createdByUsername: string;
  lastUpdatedAtUTC: string;
  lastUpdatedById: Guid;
  lastUpdatedByUsername: string;
  numberOfUsers: number;
}

export interface InternalContextsGetResponse {
  items: ReadonlyArray<ContextResponse>;
  count: number;
}

export interface InternalContextGetResponse extends ContextResponse {
}

export interface InternalContextPostRequest {
  label: string;
  description: string;
}

export interface InternalContextPostResponse {
  items: ReadonlyArray<ContextResponse>;
  count: number;
}

export interface InternalContextPatchRequest {
  label: string;
  description: string;
}

export interface InternalContextPatchResponse {
  items: ReadonlyArray<ContextResponse>;
  count: number;
}

export interface InternalContextDeleteResponse {
}

export interface InternalContextUsersDeleteResponse {
}

export interface InternalContextUserPostRequest {
}

export interface InternalContextUserPostResponse {
}

export interface InternalContextUserDeleteResponse {
}
