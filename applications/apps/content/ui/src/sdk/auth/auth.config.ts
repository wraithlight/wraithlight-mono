import { getEnvironment } from "@wraithlight/core.env";
import { SharedUserManagementConfigReader } from "@wraithlight/common.environment-static.shared";

export class AuthServiceConfig {

    private readonly _configReader = SharedUserManagementConfigReader.getInstance(getEnvironment());

    public getBaseApiUrl(): string {
        const baseUrl = this._configReader.get(x => x.server.baseUrl);
        const port = this._configReader.get(x => x.server.port);
        return `${baseUrl}:${port}`;
    }

}
