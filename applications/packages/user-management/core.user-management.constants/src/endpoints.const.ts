import { Guid } from "@wraithlight/core.guid";

const INTERNAL_V1 = "/internal/api/v1";
const EXTERNAL_V3 = "/external/api/v3";

export const API_ENDPOINTS = {
  internal: {
    v1: {
      session: {
        root: `${INTERNAL_V1}/session`,
        get: {
          forServer: ``,
          forClient: ():string => ``
        },
        post: {
          forServer: ``,
          forClient: ():string => ``
        },
        delete: {
          forServer: ``,
          forClient: ():string => ``
        },
        patch: {
          forServer: ``,
          forClient: ():string => ``
        }
      },
      user: {
        root: `${INTERNAL_V1}/user`,
        get: {
          forServer: ``,
          forClient: ():string => ``
        },
        post: {
          forServer: ``,
          forClient: ():string => ``
        },
        checkEmail: {
          post: {
            forServer: `/check-email`,
            forClient: ():string => `/check-email`
          }
        },
        checkUsername: {
          post: {
            forServer: `/check-username`,
            forClient: ():string => `/check-username`
          }
        },
        id: {
          get: {
            forServer: `/:id`,
            forClient: (id: Guid):string => `/${id}`
          },
          patch: {
            forServer: `/:id`,
            forClient: (id: Guid):string => `/${id}`
          },
          delete: {
            forServer: `/:id`,
            forClient: (id: Guid):string => `/${id}`
          },
          context: {
            id: {
              post: {
                forServer: `/:userId/context/:contextId`,
                forClient: (userId: Guid, contextId: Guid):string => `/${userId}/context/${contextId}`
              },
              delete: {
                forServer: `/:userId/context/:contextId`,
                forClient: (userId: Guid, contextId: Guid):string => `/${userId}/context/${contextId}`
              }
            }
          }
        }
      },
      context: {
        root: `${INTERNAL_V1}/context`,
        get: {
          forServer: ``,
          forClient: ():string => ``
        },
        post: {
          forServer: ``,
          forClient: ():string => ``
        },
        id: {
          get: {
            forServer: `/:id`,
            forClient: (id: Guid):string => `/${id}`
          },
          patch: {
            forServer: `/:id`,
            forClient: (id: Guid):string => `/${id}`
          },
          delete: {
            forServer: `/:id`,
            forClient: (id: Guid):string => `/${id}`
          },
          user: {
            delete: {
              forServer: `/:contextId/user`,
              forClient: (id: Guid):string => `/${id}/user`
            },
            id: {
              post: {
                forServer: `/:contextId/user/:userId`,
                forClient: (contextId: Guid, userId: Guid):string => `/${contextId}/user/${userId}`
              },
              delete: {
                forServer: `/:contextId/user/:userId`,
                forClient: (contextId: Guid, userId: Guid):string => `/${contextId}/user/${userId}`
              }
            }
          }
        }
      }
    }
  },
  external: {
    v3: {
      session: {
        root: `${EXTERNAL_V3}/session`,
        id: {
          get: {
            forServer: `/:id`,
            forClient: (id: Guid):string => `/${id}`
          },
          delete: {
            forServer: `/:id`,
            forClient: (id: Guid):string => `/${id}`
          },
          post: {
            forServer: `/:id`,
            forClient: (id: Guid):string => `/${id}`
          },
          patch: {
            forServer: `/:id`,
            forClient: (id: Guid):string => `/${id}`
          }
        }
      },
      user: {
        root: `${EXTERNAL_V3}/user`,
        get: {
          forServer: ``,
          forClient: ():string => ``
        },
        post: {
          forServer: ``,
          forClient: ():string => ``
        },
        checkEmail: {
          post: {
            forServer: `/check-email`,
            forClient: ():string => `/check-email`
          }
        },
        checkUsername: {
          post: {
            forServer: `/check-username`,
            forClient: ():string => `/check-username`
          }
        },
        id: {
          get: {
            forServer: `/:id`,
            forClient: (id: Guid):string => `/${id}`
          },
          patch: {
            forServer: `/:id`,
            forClient: (id: Guid):string => `/${id}`
          },
          delete: {
            forServer: `/:id`,
            forClient: (id: Guid):string => `/${id}`
          }
        }
      }
    }
  }
};
