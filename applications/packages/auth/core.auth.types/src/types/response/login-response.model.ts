import {
    BaseErrorResponse,
    BaseResponse,
    BaseSuccessResponse,
    SessionPayload
} from "./internal";

export interface LoginResponse extends BaseResponse { }

export interface LoginSuccessResponse
    extends LoginResponse, BaseSuccessResponse<SessionPayload> { }

export interface LoginErrorResponse extends LoginResponse, BaseErrorResponse { }
