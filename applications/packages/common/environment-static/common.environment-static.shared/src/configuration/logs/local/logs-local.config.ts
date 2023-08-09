import { LogsShared } from "@wraithlight/core.environment-static.types";

export const SHARED_LOCAL_LOGS_CONFIG: Readonly<LogsShared> = {
    server: {
        port: 4506,
        baseUrl: "http://local.logs.wraithlight.ai"
    }
};
