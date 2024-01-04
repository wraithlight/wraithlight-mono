import { LogsCollectorServer } from "@wraithlight/core.environment-static.types";

export const SERVER_STAGING_LOGS_COLLECTOR_CONFIG: Readonly<LogsCollectorServer> = {
    database: {
        host: "",
        port: 0,
        username: "",
        password: "",
        database: "",
    }
};
