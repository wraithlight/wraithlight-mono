import { createUrl } from "@wraithlight/core.url";
import { getEnvironmentType } from "@wraithlight/core.env";
import { LOGGER_API_ENDPOINTS } from "@wraithlight/core.logs.constant";
import { SharedLogsConfigReader } from "@wraithlight/common.environment-static.shared";

export class LoggerServiceConfig {

    private readonly _configReader = SharedLogsConfigReader.getInstance(getEnvironmentType());

    public getLogUrl(): string {
        const baseApiUrl = this._configReader.get(x => x.server.baseUrl);
        const port = this._configReader.get(x => x.server.port);
        const host = createUrl(baseApiUrl, port);
        const path = LOGGER_API_ENDPOINTS.v1.logs.create;
        return `${host}${path}`;
    }

}
