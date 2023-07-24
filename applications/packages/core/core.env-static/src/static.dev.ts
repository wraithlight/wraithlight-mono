import {
    ClientModel,
    CommonModel,
    ServerModel
} from "./internal";

/**
 * @deprecated Use the proper reader from
 * ```
 * @wraithlight/common.environment-static.client
 * @wraithlight/common.environment-static.server
 * @wraithlight/common.environment-static.shared
 * ```
 */
export const CLIENT_STATIC: ClientModel = Object.freeze({
});

/**
 * @deprecated Use the proper reader from
 * ```
 * @wraithlight/common.environment-static.client
 * @wraithlight/common.environment-static.server
 * @wraithlight/common.environment-static.shared
 * ```
 */
export const SERVER_STATIC: ServerModel = Object.freeze({
    auth: {
        database: {
            host: "localhost",
            port: 9000,
            username: "wraithlight-auth-user-1",
            password: "wraithlight-auth-user-1-pw",
            database: "WL_AUTH"
        }
    },
    logs: {
        database: {
            host: "",
            port: 0,
            username: "",
            password: "",
            database: ""
        },
        address: {
            host: "",
            port: 0
        }
    },
    content: {
        database: {
            host: "",
            port: 0,
            username: "",
            password: "",
            database: ""
        }
    },
    common:  {
        paths: {
            base: "/",
            wildcard: "*"
        },
        files: {
            frontend: "../../dist/ui",
        }
    },
});

/**
 * @deprecated Use the proper reader from
 * ```
 * @wraithlight/common.environment-static.client
 * @wraithlight/common.environment-static.server
 * @wraithlight/common.environment-static.shared
 * ```
 */
export const COMMON_STATIC: CommonModel = Object.freeze({
    isProduction: false,
    auth: {
        address: {
            host: "http://localhost",
            port: 3000
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
            host: "http://localhost",
            port: 3001
        }
    },
    website: {
        address: {
            host: "http://localhost",
            port: 3008
        }
    },
    /**
     * @deprecated
     */
    userManagement: {
        address: {
            host: "http://localhost",
            port: 3007
        }
    },
    logger: {
        address: {
            host: "",
            port: 0
        }
    }
});
