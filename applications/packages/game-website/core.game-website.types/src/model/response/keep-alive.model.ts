import { Session } from "./_shared/session.model";

export interface BaseKeepAliveResponse {
    success: boolean;
}

export interface KeepAliveSuccessResponse extends BaseKeepAliveResponse {
    session: Session;
}
