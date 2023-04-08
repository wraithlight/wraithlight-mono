const API_BASE_URL = "/api";
const API_V1 = "/v1";
const AUTH_ROOT = "/auth";

const V1_AUTH_ROOT = `${API_BASE_URL}${API_V1}${AUTH_ROOT}`;

export const AUTH_API_ENDPOINTS = Object.freeze({
    root: V1_AUTH_ROOT,
    login: "/login",
    logout: "/logout",
    sessionValid: "/validate",
    keepAlive: "/keep-alive",
    register: "/register"
});
