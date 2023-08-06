import { CommonServer } from "@wraithlight/core.environment-static.types";

export const SERVER_TEST_COMMON_CONFIG: Readonly<CommonServer> = {
    paths: {
        base: "/",
        wildcard: "*"
    },
    files: {
        frontend: {
            static: "../ui"
        }
    }
};
