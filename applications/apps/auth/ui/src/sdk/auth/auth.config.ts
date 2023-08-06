
import { SharedUserManagementConfigReader } from "@wraithlight/common.environment-static.shared";
import { EnvironmentType } from "@wraithlight/core.common-constant";

export class AuthServiceConfig {

    // TODO: use `getEnvironment()` once its ready.
    private readonly _userManagementSharedConfigReader = SharedUserManagementConfigReader.getInstance(EnvironmentType.Dev);

    public getAuthApiBaseUrl(): string {
        const baseApi = this._userManagementSharedConfigReader.get(x => x.server.baseUrl);
        const port = this._userManagementSharedConfigReader.get(x => x.server.port);
        return `${baseApi}:${port}`;
    }

}
