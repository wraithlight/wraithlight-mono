import { API_ENDPOINTS } from "@wraithlight/core.auth.constant";
import { SERVER_STATIC } from "@wraithlight/core.env-static";

export class ServerAuthServiceConfig {

    public getLoginUrl(): string {
        return this.concatSegments(this.getApiUrl(), API_ENDPOINTS.v2.login);
    }

    public getLogoutUrl(): string {
        return this.concatSegments(this.getApiUrl(), API_ENDPOINTS.v2.logout);
    }

    public getValidateSessionUrl(): string {
        return this.concatSegments(this.getApiUrl(), API_ENDPOINTS.v2.validateSession);
    }

    public getKeepAliveSessionUrl(): string {
        return this.concatSegments(this.getApiUrl(), API_ENDPOINTS.v2.keepAlive);
    }

    private getApiUrl(): string {
        const host = SERVER_STATIC.auth.address.host;
        const port = SERVER_STATIC.auth.address.port;
        return `${host}:${port}`;
    }

    private concatSegments(...segments: Array<string>): string {
        return segments.join("");
    }

}
