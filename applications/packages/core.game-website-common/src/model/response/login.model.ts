import { Session } from "./_shared/session.model";

/**
 * @deprecated Import it from `core.game-website.types` instead.
 */
export interface BaseLoginResponse {
    success: boolean;
}

/**
 * @deprecated Import it from `core.game-website.types` instead.
 */
export interface LoginErrorResponse extends BaseLoginResponse {
    errors: Array<string>;
}

/**
 * @deprecated Import it from `core.game-website.types` instead.
 */
export interface LoginSuccessResponse extends BaseLoginResponse {
    session: Session;
}
