import { CommonServer } from "@wraithlight/core.environment-static.types";
import { LogSeverity } from "@wraithlight/core.logger.types";

export const SERVER_LOCAL_COMMON_CONFIG: Readonly<CommonServer> = {
    paths: {
        base: "/",
        wildcard: "*"
    },
    files: {
        frontend: {
            static: "../ui"
        }
    },
    logging: {
        enabledLogSeverities: [
            LogSeverity.DEBUG,
            LogSeverity.INFO,
            LogSeverity.WARNING,
            LogSeverity.ERROR
        ]
    }
};
