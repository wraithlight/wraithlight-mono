const API_BASE_URL = "/api";
const API_V1 = "/v1";

const V1_GAME_ROOT = `${API_BASE_URL}${API_V1}`;
const V1_GAME_AUTH_ROOT = `${V1_GAME_ROOT}/auth`;
const V1_GAME_CHARACTER_ROOT = `${V1_GAME_ROOT}/character`;

export const GAME_API_ENDPOINTS = Object.freeze({
    auth: {
        root: V1_GAME_AUTH_ROOT,
        login: "/login",
        logout: "/logout",
        validate: "/validate",
        keepAlive: "/keep-alive"
    },
    character: {
        root: V1_GAME_CHARACTER_ROOT,
        currentPlayer: "/current-player",
        create: "/create",
        delete: "/delete"
    }
});
