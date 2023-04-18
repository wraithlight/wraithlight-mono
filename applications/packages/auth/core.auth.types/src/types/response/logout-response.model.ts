import {
    BaseErrorResponse,
    BaseResponse,
    BaseSuccessResponse
} from "./internal";

export interface LogoutResponse extends BaseResponse { }

export interface LogoutSuccessResponse extends LogoutResponse, BaseSuccessResponse<boolean> { }

export interface LogoutErrorResponse extends LogoutResponse, BaseErrorResponse { }
