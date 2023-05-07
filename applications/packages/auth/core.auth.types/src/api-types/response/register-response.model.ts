import { ApiBaseResponse } from "./internal";

export interface ApiRegisterResponse extends ApiBaseResponse { }

export interface ApiRegisterErrorResponse extends ApiRegisterResponse {
    errors: Array<string>;
}

export interface ApiRegisterSuccessResponse extends ApiRegisterResponse { }
