import { LogsCollectorShared } from "@wraithlight/core.environment-static.types";

export const SHARED_DEV_LOGS_COLLECTOR_CONFIG: Readonly<LogsCollectorShared> = {
    server: {
        port: 5511,
        baseUrl: "http://www.dev.logs-collector.wraithlight.ai"
    }
};
