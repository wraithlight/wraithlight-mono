import { Guid } from "@wraithlight/core.guid";
import { Nullable } from "@wraithlight/framework.nullable";

import { UserStatus } from "../enum";

export interface UserResponse {
  userId: Guid;
  username: string;
  identifier: string;
  emailAddress: string;
  createdAtUTC: string;
  createdById: Guid;
  lastUpdatedAtUTC: Nullable<string>;
  lastUpdatedById: Nullable<Guid>;
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
  languageId: Guid;
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
  password: string;
  passwordConfirmation: string;
}

export interface ExternalUserPatchRequest {
  update: UserPatch;
  confirmationPassword: string;
}

export interface ExternalUserPatchResponse extends UserResponse {
}

export interface ExternalUserDeleteResponse {
}
