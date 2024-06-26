import { SharedUserManagementConfigReader } from "@wraithlight/common.environment-static.shared";
import { API_ENDPOINTS } from "@wraithlight/core.auth.constant";
import { CoreEnvironment } from "@wraithlight/core.env.sdk";
import { createUrl } from "@wraithlight/core.url";

export class ServerAuthServiceConfig {

    private readonly _reader = SharedUserManagementConfigReader
        .getInstance(CoreEnvironment.getEnvironmentType());

    public getLoginUrl(): string {
        return this.concatSegments(
            this.getApiUrl(),
            API_ENDPOINTS.external.v2.auth.root,
            API_ENDPOINTS.external.v2.auth.login
        );
    }

    public getLogoutUrl(): string {
        return this.concatSegments(
            this.getApiUrl(),
            API_ENDPOINTS.external.v2.auth.logout
        );
    }

    public getValidateSessionUrl(): string {
        return this.concatSegments(
            this.getApiUrl(),
            API_ENDPOINTS.external.v2.auth.validateSession
        );
    }

    public getKeepAliveSessionUrl(): string {
        return this.concatSegments(
            this.getApiUrl(),
            API_ENDPOINTS.external.v2.auth.keepAliveSession
        );
    }

    private getApiUrl(): string {
        const host = this._reader.get(x => x.server.baseUrl);
        const port = this._reader.get(x => x.server.port);
        return createUrl(
            host,
            port
        );
    }

    private concatSegments(...segments: Array<string>): string {
        return segments.join("");
    }

}
