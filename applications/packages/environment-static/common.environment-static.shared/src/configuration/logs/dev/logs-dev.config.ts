import { LogsShared } from "@wraithlight/core.environment-static.types";

export const SHARED_DEV_LOGS_CONFIG: Readonly<
  LogsShared> = {
  server: {
    port: 4506,
    baseUrl: "http://www.dev.logs.wraithlight.ai"
  }
};
