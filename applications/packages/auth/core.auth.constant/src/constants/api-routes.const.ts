const API_BASE = "/api";
const V1_BASE = "/v1";
const AUTH_BASE = "/auth";
const ACCOUNT_BASE = "/account";

const V1_AUTH_ROOT = `${API_BASE}${V1_BASE}${AUTH_BASE}`;
const V1_ACCOUNT_ROOT = `${API_BASE}${V1_BASE}${ACCOUNT_BASE}`;

export const API_ROUTES = Object.freeze({
    v1: {
        auth: {
            root: V1_AUTH_ROOT,
            login: "/login",
            logout: "/logout",
            validateSession: "/validate-session",
            keepAlive: "/keep-alive",
            register: "/register"
        },
        account: {
            root: V1_ACCOUNT_ROOT,
            register: "/register"
        }
    }
});
