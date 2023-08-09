
import { SharedUserManagementConfigReader } from "@wraithlight/common.environment-static.shared";
import { getEnvironment } from "@wraithlight/core.env";

export class AuthServiceConfig {

    private readonly _userManagementSharedConfigReader = SharedUserManagementConfigReader.getInstance(getEnvironment());

    public getAuthApiBaseUrl(): string {
        const baseApi = this._userManagementSharedConfigReader.get(x => x.server.baseUrl);
        const port = this._userManagementSharedConfigReader.get(x => x.server.port);
        return `${baseApi}:${port}`;
    }

}
