interface SessionResponse {
  sessionToken: string;
  sessionValidUntilUTC: string;
  refreshToken: string;
  refreshTokenValidUntilUTC: string;
}

export interface ExternalSessionGetResponse extends SessionResponse {
}

export interface ExternalSessionDeleteResponse {
}

export interface ExternalSessionPostRequest {
  identifier: string;
  password: string;
  keepSignedIn: boolean;
}

export interface ExternalSessionPostResponse extends SessionResponse {
}

export interface ExternalSessionPatchRequest {
}

export interface ExternalSessionPatchResponse extends SessionResponse {
}
