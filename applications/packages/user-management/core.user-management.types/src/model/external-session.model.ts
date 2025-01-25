export interface ExternalSessionResponse {
  sessionToken: string;
  sessionValidUntilUTC: string;
  refreshToken: string;
  refreshTokenValidUntilUTC: string;
}

export interface ExternalSessionGetResponse extends ExternalSessionResponse {
}

export interface ExternalSessionDeleteResponse {
}

export interface ExternalSessionPostRequest {
  identifier: string;
  password: string;
  keepSignedIn: boolean;
}

export interface ExternalSessionPostResponse extends ExternalSessionResponse {
}

export interface ExternalSessionPatchRequest {
}

export interface ExternalSessionPatchResponse extends ExternalSessionResponse {
}
