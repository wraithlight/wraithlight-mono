import { NotifierShared } from "@wraithlight/core.environment-static.types";

export const SHARED_STAGING_NOTIFIER_CONFIG: Readonly<NotifierShared> = {
    server: {
        port: 8080,
        baseUrl: "http://staging.notifier.wraithlight.ai"
    }
};
