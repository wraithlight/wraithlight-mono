import { LogsCollectorShared } from "@wraithlight/core.environment-static.types";

export const SHARED_LOCAL_LOGS_COLLECTOR_CONFIG: Readonly<LogsCollectorShared> = {
    server: {
        port: 4511,
        baseUrl: "http://www.local.logs-collector.wraithlight.ai"
    }
};
