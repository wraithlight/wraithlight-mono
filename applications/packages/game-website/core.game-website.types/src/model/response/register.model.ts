export interface BaseRegisterResponse {
    success: boolean;
}

export interface ErrorRegisterResponse extends BaseRegisterResponse {
    errors: Array<string>;
}

export interface SuccessRegisterResponse extends BaseRegisterResponse {

}
