import { LogSeverity } from "@wraithlight/core.logger.types";

export interface CommonServer {
    paths: {
        base: string;
        wildcard: string;
        swagger: string;
    },
    files: {
        frontend: {
            static: string;
        },
        packageJson: {
          path: string;
        },
        swagger: {
          path: string;
        }
    },
    features: {
      swagger: {
        isEnabled: boolean;
      }
    }
    logging: {
        enabledLogSeverities: ReadonlyArray<LogSeverity>
    },
    healthChecker: {
        tokens: {
            userManagement: string
        }
    }
}
