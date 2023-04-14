const API_BASE_URL = "/api";
const API_V1 = "/v1";

const V1_EDITOR_ROOT = `${API_BASE_URL}${API_V1}`;
const V1_EDITOR_AUTH_ROOT = `${V1_EDITOR_ROOT}/auth`;

export const EDITOR_API_ENDPOINTS = Object.freeze({
    auth: {
        root: V1_EDITOR_AUTH_ROOT,
        login: "/login",
        logout: "/logout",
        renew: "/renew",
        validate: "/validate"
    }
});
