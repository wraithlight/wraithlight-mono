/**
 * @deprecated Use `BaseRegisterResponse` from `core.auth.types` instead.
 */
export interface BaseRegisterResponse {
    success: boolean;
}

/**
 * @deprecated Use `ErrorRegisterResponse` from `core.auth.types` instead.
 */
export interface ErrorRegisterResponse extends BaseRegisterResponse {
    errors: Array<string>;
}

/**
 * @deprecated Use `SuccessRegisterResponse` from `core.auth.types` instead.
 */
export interface SuccessRegisterResponse extends BaseRegisterResponse {
    
}
