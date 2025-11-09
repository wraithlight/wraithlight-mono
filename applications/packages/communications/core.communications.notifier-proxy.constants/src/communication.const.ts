const API_BASE = (version: number): string => `/api/v${version}`;
const RESOURCE_BASE = (resource: string): string => `${API_BASE(1)}/${resource}`;

const COMMUNICATION_RES = RESOURCE_BASE("communication");

export const API_ENDPOINTS = {
  v1: {
    communication: {
      forServer: (): string => COMMUNICATION_RES,
      get: {
        forServer: (): string => ``,
        forClient: (
          skip: number,
          take: number
        ): string => `${COMMUNICATION_RES}?skip=${skip}&take=${take}`
      },
      post: {
        forServer: (): string => ``,
        forClient: (): string => COMMUNICATION_RES
      },
      id: {
        get: {
          forServer: (): string => `/:id`,
          forClient: (id: string): string => `${COMMUNICATION_RES}/${id}`
        },
        success: {
          patch: {
            forServer: (): string => `/:id/success`,
            forClient: (
              id: string
            ): string => `${COMMUNICATION_RES}/${id}/success`
          }
        },
        fail: {
          patch: {
            forServer: (): string => `/:id/fail`,
            forClient: (
              id: string
            ): string => `${COMMUNICATION_RES}/${id}/fail`
          }
        }
      }
    }
  }
};
