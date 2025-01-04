const INTERNAL_BASE = (version: number): string => `internal/api/v${version}`;
const RESOURCE_BASE = (resource: string): string => `${INTERNAL_BASE(1)}/${resource}`;

interface VerbEndpoint {
  forClient(): string;
  forServer(): string;
}

const VERB_FACTORY = (
  resource: string,
): VerbEndpoint => ({
  forServer: () => ``,
  forClient: () => resource
});

const SESSION_RES = RESOURCE_BASE("session");
const USER_RES = RESOURCE_BASE("user");
const CONTEXT_RES = RESOURCE_BASE("context");

export const INTERNAL_ENDPOINTS = {
  session: {
    ...VERB_FACTORY(SESSION_RES),
    get: VERB_FACTORY(SESSION_RES),
    post: VERB_FACTORY(SESSION_RES),
    delete: VERB_FACTORY(SESSION_RES),
    patch: VERB_FACTORY(SESSION_RES),
  },
  user: {
    ...VERB_FACTORY(USER_RES),
    get: VERB_FACTORY(USER_RES),
    post: VERB_FACTORY(USER_RES),
    checkEmail: {
      post: {
        forClient: () => `${USER_RES}/check-email`,
        forServer: () => `/check-email`
      }
    },
    checkUsername: {
      post: {
        forClient: () => `${USER_RES}/check-username`,
        forServer: () => `/check-username`
      }
    },
    userId: {
      get: {
        forClient: (id: string) => `${USER_RES}/${id}`,
        forServer: () => `/:id`
      },
      post: {
        forClient: (id: string) => `${USER_RES}/${id}`,
        forServer: () => `/:id`
      },
      delete: {
        forClient: (id: string) => `${USER_RES}/${id}`,
        forServer: () => `/:id`
      },
      context: {
        contextId: {
          post: {
            forClient: (
              userId: string,
              contextId: string) => `${USER_RES}/${userId}/context/${contextId}`,
            forServer: () => `/:userId/context/:contextId`
          },
          delete: {
            forClient: (
              userId: string,
              contextId: string) => `${USER_RES}/${userId}/context/${contextId}`,
            forServer: () => `/:userId/context/:contextId`
          }
        }
      },
      resetFailedLoginAttempts: {
        patch: {
          forClient: (
            userId: string
          ) => `${USER_RES}/${userId}/reset-login-attempts`,
          forServer: () => `/:userId/reset-login-attempts`
        }
      }
    },

  },
  context: {
    ...VERB_FACTORY(CONTEXT_RES),
    get: VERB_FACTORY(CONTEXT_RES),
    post: VERB_FACTORY(CONTEXT_RES),
    contextId: {
      get: {
        forClient: (id: string) => `${CONTEXT_RES}/${id}`,
        forServer: () => `/:id`
      },
      post: {
        forClient: (id: string) => `${CONTEXT_RES}/${id}`,
        forServer: () => `/:id`
      },
      delete: {
        forClient: (id: string) => `${CONTEXT_RES}/${id}`,
        forServer: () => `/:id`
      },
      user: {
        delete: {
          forClient: (id: string) => `${CONTEXT_RES}/${id}/user`,
          forServer: () => `/:id/user`
        },
        userId: {
          post: {
            forClient: (
              contextId: string,
              userId: string
            ) => `${CONTEXT_RES}/${contextId}/user/${userId}`,
            forServer: () => `/:contextId/user/:userId`
          },
          delete: {
            forClient: (
              contextId: string,
              userId: string
            ) => `${CONTEXT_RES}/${contextId}/user/${userId}`,
            forServer: () => `/:contextId/user/:userId`
          },
        }
      }
    }
  }
};
