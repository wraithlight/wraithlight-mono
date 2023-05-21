import { API_ENDPOINTS } from "@wraithlight/core.auth.constant";
import { COMMON_STATIC } from "@wraithlight/core.env-static";

export class ServerAuthServiceConfig {

    public getLoginUrl(): string {
        return this.concatSegments(this.getApiUrl(), API_ENDPOINTS.external.v2.auth.root, API_ENDPOINTS.external.v2.auth.login);
    }

    public getLogoutUrl(): string {
        return this.concatSegments(this.getApiUrl(), API_ENDPOINTS.external.v2.auth.logout);
    }

    public getValidateSessionUrl(): string {
        return this.concatSegments(this.getApiUrl(), API_ENDPOINTS.external.v2.auth.validateSession);
    }

    public getKeepAliveSessionUrl(): string {
        return this.concatSegments(this.getApiUrl(), API_ENDPOINTS.external.v2.auth.keepAlive);
    }

    private getApiUrl(): string {
        const host = COMMON_STATIC.auth.address.host;
        const port = COMMON_STATIC.auth.address.port;
        return `${host}:${port}`;
    }

    private concatSegments(...segments: Array<string>): string {
        return segments.join("");
    }

}
