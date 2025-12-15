const HEALTH_CHECK_BASE = "/api/v1/health-check";

export const EXTERNAL_API_ENDPOINTS = Object.freeze({
  v1: {
    root: HEALTH_CHECK_BASE,
    health: {
      forServer: `/health`,
      forClient: `${HEALTH_CHECK_BASE}/health`
    },
    metrics: {
      forServer: `/metrics`,
      forClient: `${HEALTH_CHECK_BASE}/metrics`
    }
  }
});
