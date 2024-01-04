import { LogsCollectorServer } from "@wraithlight/core.environment-static.types";

export const SERVER_DEV_LOGS_COLLECTOR_CONFIG: Readonly<LogsCollectorServer> = {
    database: {
        host: "",
        port: 0,
        username: "",
        password: "",
        database: "",
    }
};
