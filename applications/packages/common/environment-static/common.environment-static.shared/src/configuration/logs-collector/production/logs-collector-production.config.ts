import { LogsCollectorShared } from "@wraithlight/core.environment-static.types";

export const SHARED_PRODUCTION_LOGS_COLLECTOR_CONFIG: Readonly<LogsCollectorShared> = {
    server: {
        port: 8080,
        baseUrl: "http://www.logs-collector.wraithlight.ai"
    }
};
