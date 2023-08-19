import { getEnvironmentType } from "@wraithlight/core.env";
import { SharedUserManagementConfigReader } from "@wraithlight/common.environment-static.shared";

export class AccountServiceConfig {

    private readonly _configReader = SharedUserManagementConfigReader.getInstance(getEnvironmentType());

    public getBaseApiUrl(): string {
        const baseUrl = this._configReader.get(x => x.server.baseUrl);
        const port = this._configReader.get(x => x.server.port);
        return `${baseUrl}:${port}`;
    }

}
