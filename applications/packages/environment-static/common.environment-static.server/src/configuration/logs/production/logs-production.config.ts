import { LogsServer } from "@wraithlight/core.environment-static.types";

export const SERVER_PRODUCTION_LOGS_CONFIG: Readonly<
    LogsServer> = {
    database: {
        host: "",
        port: 0,
        username: "",
        password: "",
        database: "",
    }
};
