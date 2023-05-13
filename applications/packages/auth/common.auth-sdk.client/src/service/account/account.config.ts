import { API_ROUTES } from "@wraithlight/core.auth.constant";

export class ClientAccountServiceConfig {

    constructor(
        private readonly _apiBaseUrl: string
    ) { }

    public getRegisterEndpoint(): string {
        return this.concatSegments(this._apiBaseUrl, API_ROUTES.v1.account.root, API_ROUTES.v1.account.register);
    }

    private concatSegments(...segments: Array<string>): string {
        return segments.join("");
    }

}
