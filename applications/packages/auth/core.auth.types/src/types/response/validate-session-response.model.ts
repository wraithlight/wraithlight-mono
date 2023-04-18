import {
    BaseErrorResponse,
    BaseResponse,
    BaseSuccessResponse,
    SessionPayload
} from "./internal";

export interface ValidateSessionResponse extends BaseResponse { }

export interface ValidateSessionSuccessResponse extends ValidateSessionResponse, BaseSuccessResponse<SessionPayload> { }

export interface ValidateSessionErrorResponse extends ValidateSessionResponse, BaseErrorResponse { }
