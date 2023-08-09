import { NotifierShared } from "@wraithlight/core.environment-static.types";

export const SHARED_LOCAL_NOTIFIER_CONFIG: Readonly<NotifierShared> = {
    server: {
        port: 4509,
        baseUrl: "http://local.notifier.wraithlight.ai"
    }
};
