import {
    ApiBaseErrorResponse,
    ApiBaseResponse,
    ApiBaseSuccessResponse,
    ApiSessionPayload
} from "./internal";

export interface ApiKeepAliveSessionResponse extends ApiBaseResponse { }

export interface ApiKeepAliveSessionSuccessResponse extends ApiKeepAliveSessionResponse, ApiBaseSuccessResponse<ApiSessionPayload> { }

export interface ApiKeepAliveSessionErrorResponse extends ApiKeepAliveSessionResponse, ApiBaseErrorResponse { }
