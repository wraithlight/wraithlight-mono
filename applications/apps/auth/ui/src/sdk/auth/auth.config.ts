// import { COMMON_STATIC } from "@wraithlight/core.env-static";

const COMMON_STATIC = {
    website: {
        address: {
            host: "alma",
            port: 2
        }
    }
}
export const AUTH_API_BASE_URL = `${COMMON_STATIC.website.address.host}:${COMMON_STATIC.website.address.port}`;
