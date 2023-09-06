import { NotifierServer } from "@wraithlight/core.environment-static.types";

export const SERVER_TEST_NOTIFIER_CONFIG: Readonly<NotifierServer> = {
    database: {
        host: "",
        port: 0,
        username: "",
        password: "",
        database: "",
    },
    emailSending: {
        fromAddress: "no-reply@wraithlight.ai",
        smtp: {
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
