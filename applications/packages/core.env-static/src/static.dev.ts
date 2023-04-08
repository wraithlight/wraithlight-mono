import {
    ClientModel,
    CommonModel,
    ServerModel
} from "./internal";

export const CLIENT_STATIC: ClientModel = Object.freeze({
});

export const SERVER_STATIC: ServerModel = Object.freeze({
    auth: {
        database: {
            host: "",
            port: 0,
            username: "",
            password: "",
            database: ""
        }
    }
});

export const COMMON_STATIC: CommonModel = Object.freeze({
    isProduction: false,
    auth: {
        address: {
            host: "",
            port: 0
        }
    }
});
