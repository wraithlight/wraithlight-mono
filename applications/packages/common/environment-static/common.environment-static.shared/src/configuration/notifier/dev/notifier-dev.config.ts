import { NotifierShared } from "@wraithlight/core.environment-static.types";

export const SHARED_DEV_NOTIFIER_CONFIG: Readonly<NotifierShared> = {
    server: {
        port: 5509,
        baseUrl: "http://dev.notifier.wraithlight.ai"
    }
};
