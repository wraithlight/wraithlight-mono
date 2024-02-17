import { CommonClient } from "@wraithlight/core.environment-static.types";
import { LogSeverity } from "@wraithlight/core.logger.types";

export const CLIENT_PRODUCTION_COMMON_CONFIG: CommonClient = {
    logging: {
        enabledLogSeverities: [
            LogSeverity.INFO,
            LogSeverity.WARNING,
            LogSeverity.ERROR,
        ]
    }
}
