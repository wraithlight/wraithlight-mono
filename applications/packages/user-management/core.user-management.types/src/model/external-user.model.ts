import { Guid } from "@wraithlight/core.guid";

import { UserStatus } from "../enum";

interface UserResponse {
  userId: Guid;
  username: string;
  identifier: string;
  emailAddress: string;
  createdAtUTC: string;
  createdById: Guid;
  lastUpdatedAtUTC: string;
  lastUpdatedById: Guid;
  status: UserStatus
  languageId: Guid;
  failedLoginAttempts: number;
  isDeleted: boolean;
}

export interface ExternalUsersGetResponse extends ReadonlyArray<UserResponse> {
}

export interface ExternalUserGetResponse extends UserResponse {
}

export interface ExternalUserPostRequest {
  username: string;
  emailAddress: string;
  password: string;
  passwordConfirmation: string;
}

export interface ExternalUserPostResponse extends UserResponse {
}

export interface ExternalCheckEmailRequest {
  emailAddress: string;
}

export interface ExternalCheckEmailResponse {
}

export interface ExternalCheckUsernameRequest {
  username: string;
}

export interface ExternalCheckUsernameResponse {
}

interface UserPatch {
  emailAddress: string;
  password: string;
  passwordConfirmation: string;
}

export interface ExternalUserPatchRequest {
  update: Partial<UserPatch>;
  confirmationPassword: string;
}

export interface ExternalUserPatchResponse extends UserResponse {
}

export interface ExternalUserDeleteResponse {
}
