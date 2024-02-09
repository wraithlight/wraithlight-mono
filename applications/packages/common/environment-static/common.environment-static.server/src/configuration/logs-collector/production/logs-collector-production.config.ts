import { LogsCollectorServer } from "@wraithlight/core.environment-static.types";

export const SERVER_PRODUCTION_LOGS_COLLECTOR_CONFIG: Readonly<LogsCollectorServer> = {
    database: {
        host: "",
        port: 0,
        username: "",
        password: "",
        database: "",
    }
};
