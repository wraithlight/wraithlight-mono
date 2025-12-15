import { LogsShared } from "@wraithlight/core.environment-static.types";

export const SHARED_TEST_LOGS_CONFIG: Readonly<
  LogsShared> = {
  server: {
    port: 8080,
    baseUrl: "http://www.test.logs.wraithlight.ai"
  }
};
