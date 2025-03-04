import { Guid } from "@wraithlight/core.guid";

interface InternalSessionResponse {
  sessionToken: Guid;
  sessionValidUntilUTC: string;
  refreshToken: Guid;
  refreshTokenValidUntilUTC: string;
 }

export interface InternalSessionGetResponse extends InternalSessionResponse {
}

export interface InternalSessionPostRequest {
  identifier: string;
  password: string;
  keepSignedIn: boolean;
}

export interface InternalSessionPostResponse extends InternalSessionResponse {
}

export interface InternalSessionDeleteReqponse {}

export interface InternalSessionPatchRequest {}

export interface InternalSessionPathcResponse extends InternalSessionResponse {
}
