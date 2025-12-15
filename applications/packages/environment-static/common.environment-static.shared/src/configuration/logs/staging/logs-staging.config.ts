import { LogsShared } from "@wraithlight/core.environment-static.types";

export const SHARED_STAGING_LOGS_CONFIG: Readonly<
  LogsShared> = {
  server: {
    port: 8080,
    baseUrl: "http://www.staging.logs.wraithlight.ai"
  }
};
