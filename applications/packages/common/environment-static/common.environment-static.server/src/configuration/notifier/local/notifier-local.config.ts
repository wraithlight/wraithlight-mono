import { NotifierServer } from "@wraithlight/core.environment-static.types";

export const SERVER_LOCAL_NOTIFIER_CONFIG: Readonly<NotifierServer> = {
    database: {
        host: "",
        port: 0,
        username: "",
        password: "",
        database: "",
    },
    emailSending: {
        fromAddress: "no-reply@wraithlight.ai",
        smpt: {
            host: "",
            port: 0,
            secure: true,
            auth: {
                user: "",
                pass: ""
            }
        }
    }
};
