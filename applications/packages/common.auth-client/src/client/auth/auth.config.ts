import { AUTH_API_ENDPOINTS } from "@wraithlight/core.auth-common";
import { COMMON_STATIC } from "@wraithlight/core.env-static";

export class AuthClientConfig {

    public getAuthValidateUrl(): string {
        return `${this.getAuthRootUrl()}${AUTH_API_ENDPOINTS.external.sessionValid}`;
    }

    public getAuthLoginUrl(): string {
        return `${this.getAuthRootUrl()}${AUTH_API_ENDPOINTS.external.login}`;
    }

    public getAuthLogoutUrl(): string {
        return `${this.getAuthRootUrl()}${AUTH_API_ENDPOINTS.external.logout}`;
    }

    public getAuthKeepAliveUrl(): string {
        return `${this.getAuthRootUrl()}${AUTH_API_ENDPOINTS.external.keepAlive}`;
    }

    private getAuthRootUrl(): string {
        return `${this.getAuthBaseUrl()}${AUTH_API_ENDPOINTS.external.root}`;
    }

    private getAuthBaseUrl(): string {
        return `${COMMON_STATIC.auth.address.host}:${COMMON_STATIC.auth.address.port}`;
    }

}
