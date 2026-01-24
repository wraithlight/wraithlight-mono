const API_BASE = "/api";
const API_V1_BASE = `${API_BASE}/v1`;
const API_V1_MAIL_BASE = `${API_V1_BASE}/mail`;

export const NOTIFIER_WEBHOOK_ENDPOINTS = Object.freeze({
  v1: {
    webhooks: {
      mail: {
        root: API_V1_MAIL_BASE,
        processingStarted: "/start",
        processingSucceeded: "/succeed",
        processingFailed: "/fail",
        processingDone: "/done"
      }
    }
  }
});
