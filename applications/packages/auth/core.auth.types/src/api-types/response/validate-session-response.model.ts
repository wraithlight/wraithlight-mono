import {
    ApiBaseErrorResponse,
    ApiBaseResponse,
    ApiBaseSuccessResponse,
    ApiSessionPayload
} from "./internal";

export interface ApiValidateSessionResponse extends ApiBaseResponse { }

export interface ApiValidateSessionSuccessResponse
    extends ApiValidateSessionResponse,
        ApiBaseSuccessResponse<ApiSessionPayload> { }

export interface ApiValidateSessionErrorResponse
    extends ApiValidateSessionResponse, ApiBaseErrorResponse { }
