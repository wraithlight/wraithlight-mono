const API_BASE = (version: number): string => `/api/v${version}`;
const RESOURCE_BASE = (resource: string): string => `${API_BASE(1)}/${resource}`;

const SEND_RES = RESOURCE_BASE("send");

export const API_ENDPOINTS = {
  v1: {
    send: {
      forServer: () => SEND_RES,
      post: {
        forServer: () => ``,
        forClient: () => SEND_RES
      }
    }
  }
};
