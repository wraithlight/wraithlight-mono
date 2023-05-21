const API_BASE_URL = "/api";
const API_V1 = "/external/v1";
const AUTH_ROOT = "/auth";
const ACCOUNT_ROOT = "/account";

const V1_AUTH_ROOT = `${API_BASE_URL}${API_V1}${AUTH_ROOT}`;
const V1_ACCOUNT_ROOT = `${API_BASE_URL}${API_V1}${ACCOUNT_ROOT}`;

/**
 * @deprecated
 */
export const AUTH_API_ENDPOINTS = Object.freeze({
    external: {
        root: V1_AUTH_ROOT,
        login: "/login",
        logout: "/logout",
        sessionValid: "/validate",
        keepAlive: "/keep-alive"
    }
});

/**
 * @deprecated
 */
export const ACCOUNT_API_ENDPOINTS = Object.freeze({
    external: {
        root: V1_ACCOUNT_ROOT,
        register: "/register"
    }
});
