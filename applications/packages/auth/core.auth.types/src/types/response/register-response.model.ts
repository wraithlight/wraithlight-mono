import { BaseResponse } from "./internal";

export interface RegisterResponse extends BaseResponse { }

export interface RegisterErrorResponse extends RegisterResponse {
    errors: Array<string>;
}

export interface RegisterSuccessResponse extends RegisterResponse { }
