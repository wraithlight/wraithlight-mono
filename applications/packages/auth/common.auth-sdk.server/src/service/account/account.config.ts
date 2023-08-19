import { getEnvironmentType } from "@wraithlight/core.env";
import { API_ENDPOINTS } from "@wraithlight/core.auth.constant";
import { SharedUserManagementConfigReader } from "@wraithlight/common.environment-static.shared";

export class ServerAccountServiceConfig {

    private readonly _reader = SharedUserManagementConfigReader.getInstance(getEnvironmentType());

    public getLoginUrl(): string {
        return this.concatSegments(this.getApiUrl(), API_ENDPOINTS.external.v2.account.root, API_ENDPOINTS.external.v2.account.register);
    }

    private getApiUrl(): string {
        const host = this._reader.get(x => x.server.baseUrl);
        const port = this._reader.get(x => x.server.port);
        return `${host}:${port}`;
    }

    private concatSegments(...segments: Array<string>): string {
        return segments.join("");
    }

}
