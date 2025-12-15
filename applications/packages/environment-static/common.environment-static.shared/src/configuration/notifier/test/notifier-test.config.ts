import { NotifierShared } from "@wraithlight/core.environment-static.types";

export const SHARED_TEST_NOTIFIER_CONFIG: Readonly<
  NotifierShared> = {
  server: {
    port: 8080,
    baseUrl: "http://www.test.notifier.wraithlight.ai"
  }
};
