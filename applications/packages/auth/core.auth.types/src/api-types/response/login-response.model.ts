import {
    ApiBaseErrorResponse,
    ApiBaseResponse,
    ApiBaseSuccessResponse,
    ApiSessionPayload
} from "./internal";

export interface ApiLoginResponse extends ApiBaseResponse { }

export interface ApiLoginSuccessResponse extends ApiLoginResponse, ApiBaseSuccessResponse<ApiSessionPayload> { }

export interface ApiLoginErrorResponse extends ApiLoginResponse, ApiBaseErrorResponse { }
