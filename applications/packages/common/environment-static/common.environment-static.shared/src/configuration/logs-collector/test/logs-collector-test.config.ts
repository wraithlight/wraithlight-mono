import { LogsCollectorShared } from "@wraithlight/core.environment-static.types";

export const SHARED_TEST_LOGS_COLLECTOR_CONFIG: Readonly<LogsCollectorShared> = {
    server: {
        port: 8080,
        baseUrl: "http://www.test.logs-collector.wraithlight.ai"
    }
};
