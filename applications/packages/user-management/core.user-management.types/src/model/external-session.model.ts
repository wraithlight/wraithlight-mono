interface SessionResponse {
  sessionToken: string;
  sessionValidUntilUTC: string;
  refreshToken: string;
  refreshTokenValidUntilUTC: string;
}

export interface ExternalSessionGetResponse extends SessionResponse {
}

// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface ExternalSessionDeleteResponse {
}

export interface ExternalSessionPostRequest {
  identifier: string;
  password: string;
  keepSignedIn: boolean;
}

export interface ExternalSessionPostResponse extends SessionResponse {
}

// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface ExternalSessionPatchRequest {
}

export interface ExternalSessionPatchResponse extends SessionResponse {
}
