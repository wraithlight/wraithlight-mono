import {
    BaseErrorResponse,
    BaseResponse,
    BaseSuccessResponse,
    SessionPayload
} from "./internal";

export interface KeepAliveSessionResponse extends BaseResponse { }

export interface KeepAliveSessionSuccessResponse
    extends KeepAliveSessionResponse, BaseSuccessResponse<SessionPayload> { }

export interface KeepAliveSessionErrorResponse
    extends KeepAliveSessionResponse, BaseErrorResponse { }
