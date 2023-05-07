import { API_ENDPOINTS } from "@wraithlight/core.auth.constant";
import { COMMON_STATIC } from "@wraithlight/core.env-static";

export class ServerAccountServiceConfig {

    public getLoginUrl(): string {
        return this.concatSegments(this.getApiUrl(), API_ENDPOINTS.v2.account.root, API_ENDPOINTS.v2.account.register);
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
