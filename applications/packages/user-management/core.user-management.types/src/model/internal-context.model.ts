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

// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface InternalContextDeleteResponse {
}

// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface InternalContextUsersDeleteResponse {
}

// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface InternalContextUserPostRequest {
}

// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface InternalContextUserPostResponse {
}

// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface InternalContextUserDeleteResponse {
}
