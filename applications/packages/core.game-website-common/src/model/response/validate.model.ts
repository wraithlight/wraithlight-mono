import { Session } from "./_shared/session.model";

/**
 * @deprecated Import it from `core.game-website.types` instead.
 */
export interface BaseValidateResponse {
    success: boolean;
}

/**
 * @deprecated Import it from `core.game-website.types` instead.
 */
export interface ValidateSuccessResponse extends BaseValidateResponse {
    session: Session;
}
