import { Guid } from "@wraithlight/core.guid";

import { UserStatus } from "../enum";

interface UserResponse {
  id: Guid;
  username: string;
  emailAddress: string
  status: UserStatus;
  createdAtUTC: string;
  isLoggedIn: boolean;
  lastLoginAtUTC: string
  numberOfContexts: number
}

export interface InternalUsersGetResponse extends ReadonlyArray<UserResponse> {
}

export interface InternalUserGetResponse extends UserResponse {
}

export interface InternalUserPostRequest {
  username: string;
  emailAddress: string;
  password: string;
  passwordConfirmation: string;
}

export interface InternalUserPostResponse extends UserResponse {
}

export interface InternalCheckEmailRequest {
  emailAddress: string;
}

export interface InternalCheckEmailResponse {
}

interface UserPatch {
  name: string;
  emailAddress: string;
  password: string;
  passwordConfirmation: string;
}

export interface InternalUserPatchRequest {
  update: Partial<UserPatch>;
}

export interface InternalUserPatchResponse extends UserResponse {
}

export interface InternalUserDeleteResponse {
}

export interface InternalCheckUsernameRequest {
  username: string;
}

export interface InternalCheckUsernameResponse {
}

export interface InternalUserContextPostRequest {
}

export interface InternalUserContextPostResponse {
  relationId: Guid;
  userId: Guid;
  contextId: Guid;
  createdById: Guid;
  createdByUsername: string;
  createdAtUTC: string;
  contextName: string;
}

export interface InternalUserContextDeleteResponse {
}
