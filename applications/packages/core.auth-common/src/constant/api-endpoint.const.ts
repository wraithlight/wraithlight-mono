const API_BASE_URL = "/api";
const API_V1 = "/v1";
const AUTH_ROOT = "/auth";
const ACCOUNT_ROOT = "/account";

const V1_AUTH_ROOT = `${API_BASE_URL}${API_V1}${AUTH_ROOT}`;
const V1_ACCOUNT_ROOT = `${API_BASE_URL}${API_V1}${ACCOUNT_ROOT}`;

export const AUTH_API_ENDPOINTS = Object.freeze({
    root: V1_AUTH_ROOT,
    login: "/login",
    logout: "/logout",
    sessionValid: "/validate",
    keepAlive: "/keep-alive"
});

export const ACCOUNT_API_ENDPOINTS = Object.freeze({
    root: V1_ACCOUNT_ROOT,
    register: "/register"
});
