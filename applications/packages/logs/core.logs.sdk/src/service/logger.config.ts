import { SharedLogsConfigReader } from "@wraithlight/common.environment-static.shared";
import { CoreEnvironment } from "@wraithlight/core.env.sdk";
import { LOGGER_API_ENDPOINTS } from "@wraithlight/core.logs.constant";
import { createUrl } from "@wraithlight/core.url";

export class LoggerServiceConfig {

    private readonly _configReader = SharedLogsConfigReader
        .getInstance(CoreEnvironment.getEnvironmentType());

    public getLogUrl(): string {
        const baseApiUrl = this._configReader.get(x => x.server.baseUrl);
        const port = this._configReader.get(x => x.server.port);
        const host = createUrl(
            baseApiUrl,
            port
        );
        const path = LOGGER_API_ENDPOINTS.v1.logs.create;
        return `${host}${path}`;
    }

}
