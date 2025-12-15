import { NotifierShared } from "@wraithlight/core.environment-static.types";

export const SHARED_PRODUCTION_NOTIFIER_CONFIG: Readonly<
  NotifierShared> = {
  server: {
    port: 8080,
    baseUrl: "http://www.notifier.wraithlight.ai"
  }
};
