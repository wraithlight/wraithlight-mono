const API_BASE = "/api";
const V2_BASE = "/v2";
const AUTH_BASE = "/auth";

const V2_AUTH_ROOT = `${API_BASE}${V2_BASE}${AUTH_BASE}`;

export const API_ENDPOINTS = Object.freeze({
    v2: {
        root: V2_AUTH_ROOT,
        login: "/login",
        logout: "/logout",
        validateSession: "/validate-session",
        /**
         * @deprecated Use `keepAliveSession` instead.
         */
        keepAlive: "/keep-alive",
        keepAliveSession: "/keep-alive"
    }
});
