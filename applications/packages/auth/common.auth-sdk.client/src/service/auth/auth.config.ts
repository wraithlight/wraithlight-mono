import { API_ROUTES } from "@wraithlight/core.auth.constant";

export class ClientAuthServiceConfig {

    constructor(
        private readonly _apiBaseUrl: string
    ) { }

    public getLoginUrl(): string {
        return this.concatSegments(this._apiBaseUrl, API_ROUTES.v1.auth.root, API_ROUTES.v1.auth.login);
    }

    public getLogoutUrl(): string {
        return this.concatSegments(this._apiBaseUrl, API_ROUTES.v1.auth.root, API_ROUTES.v1.auth.logout);
    }

    public getValidateSessionUrl(): string {
        return this.concatSegments(this._apiBaseUrl, API_ROUTES.v1.auth.root, API_ROUTES.v1.auth.validateSession);
    }

    public getKeepAliveSessionUrl(): string {
        return this.concatSegments(this._apiBaseUrl, API_ROUTES.v1.auth.root, API_ROUTES.v1.auth.keepAlive);
    }

    private concatSegments(...segments: Array<string>): string {
        return segments.join("");
    }

}
