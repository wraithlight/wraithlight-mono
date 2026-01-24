const API_BASE = "/api";
const API_V1_BASE = `${API_BASE}/v1`;
const API_V1_SEND_BASE = `${API_V1_BASE}/send`;

export const NOTIFIER_ENDPOINT_CONST = Object.freeze({
  v1: {
    send: {
      root: API_V1_SEND_BASE,
      mail: "/mail"
    }
  }
});
