const API_BASE = "/api";
const V2_BASE = "/external/v2";
const AUTH_BASE = "/auth";
const ACCOUNT_BASE = "/account";

const V2_AUTH_ROOT = `${API_BASE}${V2_BASE}${AUTH_BASE}`;
const V2_ACCOUNT_ROOT = `${API_BASE}${V2_BASE}${ACCOUNT_BASE}`;

export const API_ENDPOINTS = Object.freeze({
    external: {
        v2: {
            auth: {
                root: V2_AUTH_ROOT,
                login: "/login",
                logout: "/logout",
                validateSession: "/validate-session",
                /**
                 * @deprecated Use `keepAliveSession` instead.
                 */
                keepAlive: "/keep-alive",
                keepAliveSession: "/keep-alive",
            },
            account: {
                root: V2_ACCOUNT_ROOT,
                register: "/register"
            }
        }
    }
});
