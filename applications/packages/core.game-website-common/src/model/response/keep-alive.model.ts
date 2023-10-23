import { Session } from "./_shared/session.model";

/**
 * @deprecated Import it from `core.game-website.types` instead.
 */
export interface BaseKeepAliveResponse {
    success: boolean;
}

/**
 * @deprecated Import it from `core.game-website.types` instead.
 */
export interface KeepAliveSuccessResponse extends BaseKeepAliveResponse {
    session: Session;
}
