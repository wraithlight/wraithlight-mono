const API_BASE = "/api";
const V1_BASE = "/v1";
const AUTH_BASE = "/auth";

const V1_AUTH_ROOT = `${API_BASE}${V1_BASE}${AUTH_BASE}`;

export const API_ROUTES = Object.freeze({
    v1: {
        root: V1_AUTH_ROOT,
        login: "/login",
        logout: "/logout",
        validateSession: "/validate-session",
        keepAlive: "/keep-alive"
    }
});
