import { API_ROUTES } from "@wraithlight/core.auth.constant";

export class ClientAuthServiceConfig {

    constructor(
        private readonly _apiBaseUrl: string
    ) { }

    public getLoginUrl(): string {
        return this.concatSegments(this._apiBaseUrl, API_ROUTES.v1.root, API_ROUTES.v1.login);
    }

    public getLogoutUrl(): string {
        return this.concatSegments(this._apiBaseUrl, API_ROUTES.v1.root, API_ROUTES.v1.logout);
    }

    public getValidateSessionUrl(): string {
        return this.concatSegments(this._apiBaseUrl, API_ROUTES.v1.root, API_ROUTES.v1.validateSession);
    }

    public getKeepAliveSessionUrl(): string {
        return this.concatSegments(this._apiBaseUrl, API_ROUTES.v1.root, API_ROUTES.v1.keepAlive);
    }

    private concatSegments(...segments: Array<string>): string {
        return segments.join("");
    }

}
