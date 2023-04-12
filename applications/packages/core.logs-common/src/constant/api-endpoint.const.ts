const API_BASE_URL = "/api";
const API_V1 = "/v1";
const LOGS_ROOT = "/logs";

const V1_LOGS_ROOT = `${API_BASE_URL}${API_V1}${LOGS_ROOT}`;
const V1_LOGS_AUTH_ROOT = `${V1_LOGS_ROOT}/auth`;
const V1_LOGS_ENTRY_ROOT = `${V1_LOGS_ROOT}/entry`;
const V1_LOGS_ENTRIES_ROOT = `${V1_LOGS_ROOT}/entries`;

export const LOGS_API_ENDPOINTS = Object.freeze({
    root: V1_LOGS_ROOT,
    auth: {
        root: V1_LOGS_AUTH_ROOT,
        login: "/login",
        logout: "/logout",
        renew: "/renew"
    },
    entry: {
        root: V1_LOGS_ENTRY_ROOT,
        add: "/add"
    },
    entries: {
        root: V1_LOGS_ENTRIES_ROOT,
        list: "/list"
    }
});
