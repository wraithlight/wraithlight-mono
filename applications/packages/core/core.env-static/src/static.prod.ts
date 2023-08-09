import {
    CommonModel
} from "./internal";

/**
 * @deprecated Use the proper reader from
 * ```
 * @wraithlight/common.environment-static.client
 * @wraithlight/common.environment-static.server
 * @wraithlight/common.environment-static.shared
 * ```
 */
export const COMMON_STATIC: CommonModel = Object.freeze({
    isProduction: true,
    auth: {
        address: {
            host: "",
            port: 0
        }
    },
    gameWebsite: {
        gameApiAddress: {
            host: "",
            port: 0
        }
    },
    editor: {
        address: {
            host: "",
            port: 0
        }
    },
    content: {
        address: {
            host: "",
            port: 0
        }
    },
    website: {
        address: {
            host: "",
            port: 0
        }
    },
    /**
     * @deprecated
     */
    userManagement: {
        address: {
            host: "",
            port: 0
        }
    },
    logger: {
        address: {
            host: "",
            port: 0
        }
    }
});
