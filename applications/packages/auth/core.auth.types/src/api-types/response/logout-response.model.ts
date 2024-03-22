import {
    ApiBaseErrorResponse,
    ApiBaseResponse,
    ApiBaseSuccessResponse
} from "./internal";

export interface ApiLogoutResponse extends ApiBaseResponse { }

export interface ApiLogoutSuccessResponse
    extends ApiLogoutResponse, ApiBaseSuccessResponse<boolean> { }

export interface ApiLogoutErrorResponse
    extends ApiLogoutResponse, ApiBaseErrorResponse { }
