import { CommonClient } from "@wraithlight/core.environment-static.types";
import { LogSeverity } from "@wraithlight/core.logger.types";

export const CLIENT_LOCAL_COMMON_CONFIG: CommonClient = {
    logging: {
        enabledLogSeverities: [
            LogSeverity.DEBUG,
            LogSeverity.INFO,
            LogSeverity.WARNING,
            LogSeverity.ERROR,
        ]
    }
};
