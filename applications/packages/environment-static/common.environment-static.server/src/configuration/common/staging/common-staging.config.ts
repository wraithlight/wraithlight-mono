import { CommonServer } from "@wraithlight/core.environment-static.types";
import { LogSeverity } from "@wraithlight/core.logger.types";

export const SERVER_STAGING_COMMON_CONFIG: Readonly<
    CommonServer> = {
    paths: {
        base: "/",
        wildcard: "*"
    },
    files: {
        frontend: {
            static: "../../dist/ui"
        },
        packageJson: {
          path: "./_package.json"
        }
    },
    logging: {
        enabledLogSeverities: [
            LogSeverity.INFO,
            LogSeverity.WARNING,
            LogSeverity.ERROR
        ]
    },
    healthChecker: {
        tokens: {
            // TODO: Token is 'hc-user-management-token'
            userManagement: "5537a135783cfafffefa0ddc6787bae87b0850c0fda06c86a4bf544b7ee1cf91"
        }
    }
};
