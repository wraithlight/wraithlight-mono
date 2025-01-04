const EXTERNAL_BASE = (version: number): string => `/external/api/v${version}`;
const RESOURCE_BASE = (resource: string): string => `${EXTERNAL_BASE(3)}/${resource}`;

const SESSION_RES = RESOURCE_BASE("session");
const USER_RES = RESOURCE_BASE("user");

export const EXTERNAL_ENDPOINTS = {
  session: {
    forServer: () => SESSION_RES,
    contextId: {
      get: {
        forClient: (id: string) => `${SESSION_RES}/${id}`,
        forServer: () => `/:id`
      },
      delete: {
        forClient: (id: string) => `${SESSION_RES}/${id}`,
        forServer: () => `/:id`
      },
      post: {
        forClient: (id: string) => `${SESSION_RES}/${id}`,
        forServer: () => `/:id`
      },
      patch: {
        forClient: (id: string) => `${SESSION_RES}/${id}`,
        forServer: () => `/:id`
      }
    }
  },
  user: {
    forServer: () => USER_RES,
    get: {
      forClient: () => `${USER_RES}`,
      forServer: () => ``
    },
    post: {
      forClient: () => `${USER_RES}`,
      forServer: () => ``
    },
    checkEmail: {
      forClient: () => `${USER_RES}/check-email`,
      forServer: () => `/check-email`
    },
    checkUsername: {
      forClient: () => `${USER_RES}/check-username`,
      forServer: () => `/check-username`
    },
    userId: {
      get: {
        forClient: (id: string) => `/${USER_RES}/${id}`,
        forServer: () => `/:id`
      },
      patch: {
        forClient: (id: string) => `/${USER_RES}/${id}`,
        forServer: () => `/:id`
      },
      delete: {
        forClient: (id: string) => `/${USER_RES}/${id}`,
        forServer: () => `/:id`
      }
    }
  }
};
