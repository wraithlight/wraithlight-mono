const HEALTH_CHECK_BASE = "/api/v1/health-check";

export const EXTERNAL_API_ENDPOINTS = Object.freeze({
    v1: {
        root: HEALTH_CHECK_BASE,
        health: {
            forServer: `/health/:token`,
            forClient: (token: string) => `/health/${token}`
        },
        metrics: {
            forServer: `/metrics/:token`,
            forClient: (token: string) => `/metrics/${token}`
        }
    }
});
