import { COMMON_STATIC } from "@wraithlight/core.env-static";
import { LOGGER_API_ENDPOINTS } from "@wraithlight/core.logs.constant";

export class LoggerServiceConfig {

    public getLogUrl(): string {
        const host = `${COMMON_STATIC.logger.address.host}:${COMMON_STATIC.logger.address.port}`;
        const path = LOGGER_API_ENDPOINTS.v1.logs.create;
        return `${host}${path}`;
    }

}
