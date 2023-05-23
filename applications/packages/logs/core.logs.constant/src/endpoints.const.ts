const API_BASE_URL = "/api";
const V1_API_BASE_URL = `${API_BASE_URL}/v1`;
const LOGS_V1_API_BASE_URL = `${V1_API_BASE_URL}/logs`

export const LOGGER_API_ENDPOINTS = Object.freeze({
    v1: {
        logs: {
            root: LOGS_V1_API_BASE_URL,
            create: `${LOGS_V1_API_BASE_URL}/create`
        }
    }    
});
