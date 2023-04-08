import { AUTH_API_ENDPOINTS } from "@wraithlight/core.auth-common";
import { COMMON_STATIC } from "@wraithlight/core.env-static";

export class AuthClientConfig {

    public getAuthValidateUrl(): string {
        return `${this.getAuthRootUrl()}${AUTH_API_ENDPOINTS.sessionValid}`;
    }

    public getAuthLoginUrl(): string {
        return `${this.getAuthRootUrl()}${AUTH_API_ENDPOINTS.login}`;
    }

    public getAuthLogoutUrl(): string {
        return `${this.getAuthRootUrl()}${AUTH_API_ENDPOINTS.logout}`;
    }

    public getAuthKeepAliveUrl(): string {
        return `${this.getAuthRootUrl()}${AUTH_API_ENDPOINTS.keepAlive}`;
    }

    private getAuthRootUrl(): string {
        return `${this.getAuthBaseUrl()}${AUTH_API_ENDPOINTS.root}`;
    }

    private getAuthBaseUrl(): string {
        return `${COMMON_STATIC.auth.address.host}:${COMMON_STATIC.auth.address.port}`;
    }

}
